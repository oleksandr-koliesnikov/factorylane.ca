import NextLink from "next/link";
import type { ComponentProps } from "react";

// Large navigation silos should not download every linked page and image on load.
export default function Link(props: ComponentProps<typeof NextLink>) {
  return <NextLink prefetch={false} {...props} />;
}
