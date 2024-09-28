// https://developers.cloudflare.com/images/transform-images/integrate-with-frameworks/#nextjs

const normalizeSrc = (src: string) => {
  return src.startsWith("/") ? src.slice(1) : src;
};

interface LoaderParams {
  src: string;
  width: number;
  quality?: number;
}

export default function cloudflareLoader({
  src,
  width,
  quality,
}: LoaderParams) {
  const params = [`width=${width}`];
  if (quality) {
    params.push(`quality=${quality}`);
  }
  const paramsString = params.join(",");
  return `/cdn-cgi/image/${paramsString}/${normalizeSrc(src)}`;
}
