import { StaticImageData } from "next/image";
import { IconBaseProps, IconType } from "react-icons";

export interface Testimonial {
  image: StaticImageData | string;
  name: string;
  message: string;
}

export type Community = {
  icon: string;
  title: string;
  testimonials: Testimonial[];
};

export type Header = {
  logo: string;
  btnLoginText: string;
  btnSignupText: string;
};

export type nav = [{ name: string; href: string }[]];

export type banner = {
  titlePart1: string;
  titlePart2: string;
  subtitle: string;
  textBtn: string;
  img: string;
};

export type about = {
  icon: string;
  title: string;
  subtitle1: string;
  subtitle2: string;
  link: string;
};

export type program = {
  image: string;
  name: string;
};

export type workouts = {
  icon: string;
  title: string;
  programs: program[];
};

export type plan = {
  name: string;
  price: string;
  list: [{ name: string }];
  delay: number;
};

export type pricing = {
  icon: string;
  title: string;
  plans: plan[];
};

export type accordion = {
  question: string;
  answer: string;
};

export type faq = {
  icon: string;
  title: string;
  accordions: accordion[];
};

export type join = {
  image: string;
  title: string;
  subtitle: string;
  btnText: string;
};

export type footer = {
  logo: string;
  copyrightText: string;
};
