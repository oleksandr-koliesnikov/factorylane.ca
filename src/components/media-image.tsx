import type { ImgHTMLAttributes } from "react";
import imageSizes from "@/content/image-sizes.json";
type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  name: string;
};
export function MediaImage({
  name,
  sizes = "(max-width: 767px) 100vw, 50vw",
  ...props
}: Props) {
  const info = imageSizes[name as keyof typeof imageSizes];
  return (
    <img
      src={`/media/${name}${info ? "-1200" : ""}.webp`}
      srcSet={info?.widths
        .map(
          (width, i) => `/media/${name}-${[480, 800, 1200][i]}.webp ${width}w`,
        )
        .join(", ")}
      sizes={sizes}
      width={info?.width}
      height={info?.height}
      {...props}
    />
  );
}
