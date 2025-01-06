import {
  Home,
  Mail,
  Package2,
  Users2,
  Shield,
  Clock,
  CreditCard,
  HeartHandshake,
} from "lucide-react";

export const menuItems = [
  {
    id: "home",
    name: "Home",
    icon: Home,
    href: "/",
  },
  {
    id: "productos",
    name: "Productos",
    icon: Package2,
    href: "/productos",
  },
  {
    id: "nosotros",
    name: "Nosotros",
    icon: Users2,
    href: "/nosotros",
  },
  {
    id: "contacto",
    name: "Contacto",
    icon: Mail,
    href: "/contacto",
  },
];

export const solutions = [
  {
    title: "Concepto",
    image: "/collection/concepto.webp",
    link: "/collection/concept",
  },
  {
    title: "Moderno",
    image: "/collection/moderno.webp",
    link: "/collection/modern",
  },
  {
    title: "Clásico",
    image: "/collection/clasico.webp",
    link: "/collection/classic",
  },
  {
    title: "Lujo",
    image: "/collection/lujo.webp",
    link: "/collection/luxury",
  },
];

export const services = [
  {
    icon: Shield,
    title: "Servicio Completo",
    description:
      "Ofrecemos soluciones completas de diseño de interiores desde el concepto hasta la ejecución",
  },
  {
    icon: Clock,
    title: "Entrega a Tiempo",
    description:
      "Nuestros proyectos se entregan a tiempo sin comprometer la calidad",
  },
  {
    icon: CreditCard,
    title: "Opciones de Pago",
    description:
      "Opciones de pago flexibles para adaptarse a su presupuesto y necesidades",
  },
  {
    icon: HeartHandshake,
    title: "Garantía",
    description: "Cobertura de garantía para su tranquilidad",
  },
];

export const categories = [
  { icon: "/category/salaEstar.svg", name: "Sala de Estar" },
  { icon: "/category/dormitorio.svg", name: "Dormitorio" },
  { icon: "/category/escritorio.svg", name: "Oficina" },
];
