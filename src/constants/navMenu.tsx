import { FC } from "react";

export interface TMenuItem {
  key: number;
  title: string;
  description: string;
  href: string;
  component: FC | undefined;
}

export const categoriesFilters = [
  "Tudo",
  "Documentos",
  "Notícias",
  "Seminários",
];
export const categories = [
  {
    title: "Caffeína Podcast",
    bg: "/assets/categories/podcast.jpg",
    id: 1,
  },
  {
    title: "Startups e Tecnologia",
    bg: "/assets/categories/startup.jpg",

    id: 2,
  },
  {
    title: "Cultura e Educação",
    bg: "/assets/categories/cultura.jpg",
    id: 3,
  },
  {
    title: "Politica e Sociedade",
    bg: "/assets/categories/politic.jpg",
    id: 4,
  },
  {
    title: "Desporto",
    bg: "/assets/categories/desporto.jpg",
    id: 5,
  },
  {
    title: "Entretenimento",
    bg: "/assets/categories/entretenimento.jpg",
    id: 6,
  },
];

const menu: TMenuItem[] = [
  {
    key: 2,
    title: "Destaques",
    description:
      "Nesta seccção podes encontrar as materias mais destacadas da semana.",
    href: "",
    component: undefined,
  },

  {
    key: 3,
    title: "Categorias",
    description:
      "Os nossos assuntos são deivididos em categórias para facilitar a pesquisa do leitor. Os nomes das categorias foram escolhidos de forma intuitiva para facil identificação do tipo de conteúdo.",
    href: "",
    component: undefined,
  },
  {
    key: 4,
    title: "Artigos",
    description: "",
    href: "/artigos",
    component: undefined,
  },
  {
    key: 5,
    title: "Notáveis",
    description: "",
    href: "/notaveis",
    component: undefined,
  },
  {
    key: 6,
    title: "Eventos",
    description: "",
    href: "/eventos",
    component: undefined,
  },
];

export default menu;
