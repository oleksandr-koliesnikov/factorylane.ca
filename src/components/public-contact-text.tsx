import { Fragment } from "react";

const publicAddress = "info@factorylane.ca";
// Cloudflare documents these markers for individual public contact addresses.
// Only this fixed, public address is rendered as HTML; page text remains escaped.
const publicEmailHtml = `<!--email_off--><a href="mailto:${publicAddress}">${publicAddress}</a><!--/email_off-->`;

export function PublicContactText({ text }: { text: string }) {
  return text.split(publicAddress).map((part, index) => (
    <Fragment key={index}>
      {index > 0 && (
        <span dangerouslySetInnerHTML={{ __html: publicEmailHtml }} />
      )}
      {part}
    </Fragment>
  ));
}
