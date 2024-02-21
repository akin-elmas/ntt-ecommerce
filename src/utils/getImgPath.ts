export const imgPath = "../../../src/static/img/banners/";

interface IProductImg {
  path: string;
  device: "m" | "t" | "w";
  count: number;
}

export const getImgPath = ({ path, device, count }: IProductImg) => {
  const imgResult = [] as { path: string }[];

  for (let i = 1; i <= count; i++) {
    imgResult.push({
      path: `${imgPath}${path}${i}-${device}.png`,
    });
  }
  return imgResult;
};
