import { StaticImageData } from "next/image";
import { IconBaseProps, IconType } from "react-icons";

export interface Testimonial {
  image: StaticImageData;
  name: string;
  message: string;
}

export type Community = {
  icon: IconType;
  title: string;
  testimonials: Testimonial[];
};
