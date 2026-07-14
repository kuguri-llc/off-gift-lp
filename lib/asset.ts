// public/ 配下のファイルを参照するときは、必ずこの関数を通す。
// basePath 付き（GitHub Pages のサブパス配信など）でもパスが壊れないようにするため。
export const asset = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
