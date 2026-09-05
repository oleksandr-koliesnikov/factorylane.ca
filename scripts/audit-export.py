from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit,unquote
import json,collections
class Page(HTMLParser):
 def __init__(self):super().__init__();self.h1=0;self.title='';self.in_title=False;self.meta={};self.canonical=None;self.hrefs=[];self.ids=[];self.images=[];self.jsonld=[];self.script=False;self.buf=''
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if tag=='h1':self.h1+=1
  if tag=='title':self.in_title=True
  if tag=='meta':self.meta[a.get('name',a.get('property',''))]=a.get('content','')
  if tag=='link' and a.get('rel')=='canonical':self.canonical=a.get('href')
  if tag=='a' and 'href' in a:self.hrefs.append(a['href'])
  if 'id' in a:self.ids.append(a['id'])
  if tag=='img':self.images.append(a)
  if tag=='script' and a.get('type')=='application/ld+json':self.script=True;self.buf=''
 def handle_data(self,data):
  if self.in_title:self.title+=data
  if self.script:self.buf+=data
 def handle_endtag(self,tag):
  if tag=='title':self.in_title=False
  if tag=='script' and self.script:self.jsonld.append(json.loads(self.buf));self.script=False
root=Path('out');results={};errors=[]
for f in root.rglob('*.html'):
 if '_next' in f.parts:continue
 url='/' if f==root/'index.html' else '/'+str(f.relative_to(root)).replace('index.html','')
 p=Page();p.feed(f.read_text());results[url]=p
 if url in ['/404.html','/404/','/_not-found/']:continue
 if p.h1!=1:errors.append(f'{url}: H1 count {p.h1}')
 if not p.title:errors.append(f'{url}: missing title')
 if not p.meta.get('description'):errors.append(f'{url}: missing description')
 if not p.canonical:errors.append(f'{url}: missing canonical')
 if 'noindex' not in p.meta.get('robots',''):errors.append(f'{url}: preview indexing gate missing')
 if len(p.ids)!=len(set(p.ids)):errors.append(f'{url}: duplicate IDs')
 for img in p.images:
  if 'alt' not in img:errors.append(f'{url}: image alt missing')
  src=img.get('src','')
  if src.startswith('/') and not (root/src.lstrip('/')).is_file():errors.append(f'{url}: missing image {src}')
 for href in p.hrefs:
  u=urlsplit(href)
  if u.scheme or u.netloc:continue
  target=unquote(u.path) or url
  if target not in results and not (root/target.lstrip('/')/'index.html').is_file() and not (root/target.lstrip('/')).is_file():errors.append(f'{url}: broken {href}')
  if u.fragment and (not u.path or u.path==url) and unquote(u.fragment) not in p.ids:errors.append(f'{url}: missing anchor {href}')
valid=[(u,p) for u,p in results.items() if u not in ['/404.html','/404/','/_not-found/']]
titles=collections.Counter(p.title for u,p in valid);descriptions=collections.Counter(p.meta.get('description') for u,p in valid)
for t,n in titles.items():
 if n>1:errors.append(f'Duplicate title ({n}): {t}')
summary={'html_pages':len(valid),'errors':errors,'unique_titles':len(titles),'unique_descriptions':len(descriptions),'links_checked':sum(len(p.hrefs) for _,p in valid),'jsonld_blocks':sum(len(p.jsonld) for _,p in valid)}
Path('output/audit/export-summary.json').write_text(json.dumps(summary,indent=2));print(json.dumps(summary,indent=2));raise SystemExit(bool(errors))
