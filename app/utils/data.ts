// images
import Logo from "../../public/images/header/logo.svg";
import ResistanceImg from "../../public/images/workouts/resistance.png";
import BoxingImg from "../../public/images/workouts/boxing.png";
import BodyPumpImg from "../../public/images/workouts/body-pump.png";
import YogaImg from "../../public/images/workouts/yoga.png";
import FullBodyImg from "../../public/images/workouts/full-body.png";
import FitnessImg from "../../public/images/workouts/fitness.png";
import BattleRopeImg from "../../public/images/workouts/battle-rope.png";
import CommunityImg1 from "../../public/images/community/img1.png";
import CommunityImg2 from "../../public/images/community/img2.png";
import CommunityImg3 from "../../public/images/community/img3.png";
import CommunityImg4 from "../../public/images/community/img4.png";
import JoinImg from "../../public/images/join/woman.png";
// icons
import UsersIcn from "../../public/images/about/icons/users-icn.svg";
import CalendarIcn from "../../public/images/workouts/icons/calendar.svg";
import PriceIcn from "../../public/images/pricing/icons/price.svg";
import CommunityIcn from "../../public/images/community/icons/community-icn.svg";
import QuestionMarkIcn from "../../public/images/faq/icons/question-mark.svg";
import { Community, Testimonial } from "../types/data";

export const header = {
  logo: Logo,
  btnLoginText: "Log In",
  btnSignupText: "Sign Up",
};

export const nav = [
  { name: "Home", href: "/" },
  { name: "Acerca de", href: "/about" },
  { name: "Workouts", href: "/" },
  { name: "Pricing", href: "/" },
  { name: "Comunidad", href: "/" },
  { name: "FAQ", href: "/" },
];

export const banner = {
  titlePart1: "Mejora cada día",
  titlePart2: "– avanza y aprende.",
  subtitle:
    "Proveemos un área fit, divertida y amigable, en un espacio seguro.",
  textBtn: "Únete ahora",
  img: "",
};

export const about = {
  icon: UsersIcn,
  title: "Nuestra misión",
  subtitle1:
    "Buscamos llegar a más personas interesadas en mejorar su salud, así como su condición física, mental y emocional.",
  subtitle2:
    "Nuestro objetivo es brindar un servicio de calidad, con un ambiente amigable y seguro, para que nuestros clientes se sientan cómodos y motivados a seguir adelante. Así como una herramienta para facilitar el progreso de nuestros clientes.",
  link: "Únete ahora",
};

export const workouts = {
  icon: CalendarIcn,
  title: "Programas de entrenamiento",
  programs: [
    {
      image: ResistanceImg,
      name: "Resistance",
    },
    {
      image: BoxingImg,
      name: "Boxing",
    },
    {
      image: BodyPumpImg,
      name: "Body Pump",
    },
    {
      image: YogaImg,
      name: "Yoga",
    },
    {
      image: FullBodyImg,
      name: "Full Body",
    },
    {
      image: FitnessImg,
      name: "Fitness",
    },
    {
      image: BattleRopeImg,
      name: "Battle Rope",
    },
  ],
};

export const pricing = {
  icon: PriceIcn,
  title: "Pricing plan",
  plans: [
    {
      name: "Basic",
      price: "20",
      list: [
        { name: "Acceso ilimitado a NutriAct" },
        { name: "1 Programa de entrenamiento" },
        { name: "Visualización de todos los ejercicios" },
      ],
      delay: 600,
    },
    {
      name: "Premium",
      price: "35",
      list: [
        { name: "Acceso ilimitado a NutriAct" },
        { name: "5 Programas de entrenamiento" },
        { name: "Visualización de todos los ejercicios" },
        { name: "Entrenador personal" },
      ],
      delay: 800,
    },
    {
      name: "Elite",
      price: "49",
      list: [
        { name: "Acceso ilimitado a NutriAct" },
        { name: "Todos los programas de entrenamiento" },
        { name: "Visualización de todos los ejercicios" },
        { name: "Entrenador personal" },
        { name: "Nutriólogo personalizado" },
      ],
      delay: 1000,
    },
  ],
};

export const community: Community = {
  icon: CommunityIcn,
  title: "Comunidad",
  testimonials: [
    {
      image: CommunityImg1,
      name: "Mark A.",
      message: "“Fácil de usar, intuitivo y muy útil. Totalmente recomendado.”",
    },
    {
      image: CommunityImg2,
      name: "Lauren K.",
      message:
        "“NutriAct cambió mi vida. No sólo físicamente, también mentalmente. Soy una persona nueva.”",
    },
    {
      image: CommunityImg3,
      name: "Jhon D.",
      message:
        "“Amo estos entrenamientos! Son completos y motivadores. NutriAct es asombroso!”",
    },
    {
      image: CommunityImg4,
      name: "Anne R.",
      message:
        "“NutriAct es la app más novedosa e innovadora en cuánto a entrenamientos y nutrición. Me encanta!”",
    },
  ],
};

export const faq = {
  icon: QuestionMarkIcn,
  title: "FAQ",
  accordions: [
    {
      question: "¿Por qué NutriAct?",
      answer:
        "NutriAct presenta una solución novedosa, fácil de seguir y que se adapta a tus necesidades. Nuestro objetivo es ayudarte a mejorar tu salud y condición física, así como tu condición mental y emocional.",
    },
    {
      question: "¿Cómo funciona NutriAct?",
      answer:
        "NutriAct es una plataforma que te permite acceder a rutinas de entrenamiento y planes de alimentación personalizados, así como a un nutriólogo certificado que te ayudará a alcanzar tus objetivos. De la misma manera, NutriAct te permite mejorar tu postura mediante el uso de Machine Learning.",
    },
    {
      question: "¿Qué requisitos debo cumplir?",
      answer: "Ninguno, NutriAct está diseñado por y para todos.",
    },
    {
      question: "¿Cómo funcionan las rutinas?",
      answer:
        "Las rutinas son diseñadas por un nutriólogo certificado, y se adaptan a tus necesidades y objetivos. Además, puedes acceder a rutinas de entrenamiento de otros usuarios, así como a rutinas de entrenamiento generales.",
    },
    {
      question: "¿Existe una app móvil?",
      answer: "Por el momento no, pero planeamos lanzarla pronto.",
    },
    {
      question: "¿Cómo contacto con mi nutriólogo?",
      answer:
        "Puedes contactar con tu nutriólogo mediante la plataforma, o mediante correo electrónico.",
    },
  ],
};

export const join = {
  image: JoinImg,
  title: "¿Quieres unirte y empezar tu cambio?",
  subtitle:
    "Únete a nuestra comunidad y empieza a mejorar tu salud y condición física, así como tu condición mental y emocional.",
  btnText: "Únete ahora",
};

export const footer = {
  logo: Logo,
  copyrightText: "Todos los derechos reservados. NutriAct 2023.",
};
