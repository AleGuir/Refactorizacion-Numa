
// components/navbar/Navbar.tsx
import Link from "next/link";
import { navegacion } from "@/data/navegacion";



//esto es una libreria que hace que los cambios a paginas sean rapidos 
//y el usuario no nota un tiempo de carga, practicamente no hace un refresh
//solo se usa en algunas excepciones para no saturar de codigo de js

export const Navbar = () => {
  return (
    <nav className="flex bg-[#e5e5e5] bg-opacity-30 px-15 py-10 "> 

      <Link href="/">
        <img className="w-24" src="/image/Logo1-2.png" alt="Numa" />
      </Link>

      <ul className="flex flex-1 items-center justify-center gap-4">
        {navegacion.map((item) => (
          // `group` + `relative`: cada item es su propio "grupo" y referencia
          // para posicionar su panel. El submenú reacciona al hover/focus de SU grupo.
          <li key={item.label} className="group relative">
            {item.submenu ? (
              <>
                {/* Disparador del submenú. Es un <button> (no navega), solo abre. */}
                <button
                  type="button"
                  className="flex items-center gap-1 text-black hover:bg-[#DFFF69] py-2 px-4 rounded-4xl"
                >
                  {item.label}
                  <svg
                    aria-hidden
                    viewBox="0 0 12 12"
                    className="h-3 w-3 transition-transform group-hover:rotate-180"
                  >
                    <path
                      d="M3 4.5L6 7.5L9 4.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {/* Panel del submenú.
                    - invisible + opacity-0 ➜ oculto por defecto
                    - group-hover / group-focus-within ➜ aparece con mouse o teclado
                    - top-full lo pega justo debajo del item
                    - pt-3 deja un respiro SIN crear un hueco "muerto" que cierre el menú */}
                <div className="invisible absolute left-1/2 -translate-x-1/2 top-full z-50 pt-11 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="flex gap-10 bg-[#e5e5e5] p-6 shadow-lg">
                    {item.submenu.map((columna, i) => (
                      <div key={i} className="min-w-40">
                        {/* El título solo se muestra si la columna lo tiene (mega menú) */}
                        {columna.titulo && (
                          <p className="mb-2 border-b-2 border-[#DFFF69] pb-1 font-semibold text-black">
                            {columna.titulo}
                          </p>
                        )}
                        <ul className="flex flex-col gap-2">
                          {columna.enlaces.map((enlace) => (
                            <li key={enlace.label}>
                              <Link
                                href={enlace.href}
                                className="text-black/80 transition-colors hover:underline"
                              >
                                {enlace.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              // Item sin submenú: enlace directo.
              <Link href={item.href ?? "#"} className="text-black">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
            
    </nav>
  );
};


