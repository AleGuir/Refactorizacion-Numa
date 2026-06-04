// data/navegacion.ts

export type EnlaceSubmenu = {
  label: string;
  href: string;
};

export type ColumnaSubmenu = {
  // Encabezado de la columna (mega menú). Omítelo para un submenú simple en lista.
  titulo?: string;
  enlaces: EnlaceSubmenu[];
};

export type ItemNav = {
  label: string;
  href?: string;              // úsalo cuando el item es un enlace directo (sin submenú)
  submenu?: ColumnaSubmenu[]; // úsalo cuando el item abre un desplegable
};

export const navegacion: ItemNav[] = [
  { label: "Inicio", href: "/" },

  {
    label: "Somos Numa",
    // Submenú simple: una sola columna sin título.
    submenu: [
      {
        enlaces: [
          { label: "Your health partner", href: "/somos-numa" },
          { label: "Preguntas frecuentes", href: "/preguntas-frecuentes" },
        ],
      },
    ],
  },

  {
    label: "Centro de salud y bienestar",
    // Mega menú: varias columnas, cada una con su título.
    submenu: [
      {
        titulo: "Consulta médica",
        enlaces: [
          { label: "Consulta médica", href: "/consulta-medica-general" },
          { label: "Consulta médica integrativa", href: "/consulta-medica-integrativa" },
        ],
      },
      {
        titulo: "Terapias",
        enlaces: [
          { label: "Físicas", href: "/terapias/fisicas" },
          { label: "Respiratorias", href: "/terapias/respiratorias" },
          { label: "Sueroterapia", href: "/terapias/sueroterapia" },
          { label: "Acupuntura", href: "/terapias/acupuntura" },
          { label: "Neural", href: "/terapias/neural" },
          { label: "Ventosas", href: "/terapias/ventosas" },
        ],
      },
      {
        titulo: "Laboratorio",
        enlaces: [{ label: "Exámenes de laboratorio", href: "/laboratorio" }],
      },
      {
        titulo: "Inyectología",
        enlaces: [{ label: "Aplicación de medicamentos", href: "/inyectologia" }],
      },
    ],
  },

  { label: "Nuestro espacio", href: "/nuestro-espacio" },
  { label: "Cuídate con Numa", href: "/cuidate-con-numa" },
  { label: "Español", href: "#" },
];