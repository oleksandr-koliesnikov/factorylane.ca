"""Build numeric planning references from the owner's saved research; never copy article prose."""
import csv,json,re
from pathlib import Path
records={r['url']:r for r in (json.loads(l) for l in open('research/partner-2026-09-05/pages.jsonl') if l.strip())}
result={}
for row in csv.DictReader(open('specification/PAGE_MAP.csv',encoding='utf-8-sig')):
 if row['template']!='window':continue
 text=records[row['source_url']]['text'];entry={'installed':[],'dimensions':[]}
 marker=re.search(r'(?:Window Size / Style|Configuration Type)[^\n]*Price Range[^\n]*',text)
 if marker:
  for line in text[marker.end():].strip().split('\n'):
   match=re.match(r'(.+?)\s+\$([0-9,]+)\s*[–-]\s*\$?([0-9,]+)(\+?)\s+(.+)',line)
   if not match:break
   label,low,high,plus,_=match.groups()
   entry['installed'].append({'label':label.replace(' / High-End Materials',' / custom scope'),'min':int(low.replace(',','')),'max':int(high.replace(',','')),'plus':bool(plus)})
 marker=re.search(r'Glass Type Min\.? Width[^\n]*',text)
 if marker:
  for line in text[marker.end():].strip().split('\n'):
   match=re.match(r'(Double Pane|Triple Pane) ([0-9.]+)" ([0-9.]+)" ([0-9.]+)" ([0-9.]+)" ([0-9.]+) sq\.',line)
   if not match:break
   glass,*values=match.groups();entry['dimensions'].append([glass,*[v+' in' for v in values[:4]],values[4]+' sq ft'])
 result[row['target_url_proposed']]=entry
Path('src/content/window-references.json').write_text(json.dumps(result,indent=2))
print('Installed ranges:',sum(len(x['installed']) for x in result.values()),'dimension configurations:',sum(len(x['dimensions']) for x in result.values()))
