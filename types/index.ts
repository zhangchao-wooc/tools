import { SVGProps } from "react";
import { ImageProps } from 'next/image'

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type IconImageProps = ImageProps & {
  size?: number;
};
