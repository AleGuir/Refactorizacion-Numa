// components/estructura-servicios-numa/SeccionesServicio.tsx

// Tipos derivados de tu data/servicios.ts (sections + button).
// Definirlos aquí evita usar `any` y te da autocompletado.
// components/estructura-servicios-numa/SeccionesServicio.tsx

type Seccion = {
  title: string;
  content: string;
};

type Boton = {
  title: string;
  url: string;
};

type Props = {
  secciones: Seccion[];
  boton: Boton;
};

export default function SeccionesServicio({ secciones, boton }: Props) {
  const mitad = Math.ceil(secciones.length / 2);
  const columnaIzquierda = secciones.slice(0, mitad);
  const columnaDerecha = secciones.slice(mitad);

  return (
    <section className="mx-auto w-full max-w-6xl px-6">
      <div className="grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-2">
        {/* Izquierda: arranca arriba (sin desnivel) */}
        <Columna secciones={columnaIzquierda} />

        {/* Derecha: lleva el desnivel y el botón */}
        <Columna secciones={columnaDerecha} boton={boton} desnivel />
      </div>
    </section>
  );
}

// Antes esto se llamaba "Timeline". Ahora la LÍNEA vive aquí, en la columna,
// no dentro del bloque de textos. Por eso puede llegar al fondo y ambas
// columnas terminan a la misma altura (el grid las estira igual).
function Columna({
  secciones,
  boton,
  desnivel = false,
}: {
  secciones: Seccion[];
  boton?: Boton;
  desnivel?: boolean;
}) {
  return (
    // `desnivel` md:mt-24 empuja esta columna hacia abajo SOLO en escritorio.
    // Cambia el 24 por más o menos margen. El fondo no se mueve.
    <div className={`relative ${desnivel ? "md:mt-24" : ""}`}>
      {/* LÍNEA: del primer punto (top-3) al fondo de la columna (bottom-0).
          Grosor = w-px (1px). Centro en x = 7px. */}
      <span
        aria-hidden
        className="absolute left-[7px] top-3 bottom-0 w-px -translate-x-1/2 bg-black"
      />

      <div className="flex flex-col gap-10">
        {secciones.map((seccion) => (
          <div key={seccion.title} className="relative pl-8">
            {/* PUNTO: centrado con -translate, así su centro siempre cae en
                (7px, 12px) sin importar el tamaño. Más grande ➜ h-5 w-5, etc. */}
            <span
              aria-hidden
              className="absolute left-[7px] top-3 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black"
            />

            <h2 className="font-displayBold text-lg text-black md:text-xl lg:text-2xl">
              {seccion.title}
            </h2>
            <p className="font-body mt-2 max-w-prose text-sm leading-relaxed text-black/80 md:text-base lg:text-lg">
              {seccion.content}
            </p>
          </div>
        ))}

        {/* El botón solo aparece en la columna que lo recibe (la derecha). */}
        {boton && (
          <a
            href={boton.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body ml-8 inline-flex w-fit items-center justify-center rounded-full bg-[#DFFF69] px-8 py-3 font-medium text-black transition-colors hover:bg-[#d2f24f]"
          >
            {boton.title}
          </a>
        )}
      </div>
    </div>
  );
}