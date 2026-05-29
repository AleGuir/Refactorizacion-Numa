
import CirculosBackground from "@/components/ui/CirculosBackground";
import SeccionesServicio from "./Seccionesservicio";

//usar atajo lrc para crear la estructura del layout component automaticamente
type Props = {
  servicio: any;
};

export default function ServiciosLayout({
 servicio,
}: Props){

  return (
    <CirculosBackground>
        <section className="w-full  mx-auto">

            <h1 className="text-[#000] text-center text-5xl mb-16">{servicio.hero.title}</h1>
        <div className="grid grid-cols-3 gap-0 mb-24">

          <div className="bg-[#B9B5FF] rounded-full p-8">
            <p className="text-[#000] text-right">Duración:</p>
          </div>

          <div className="bg-white rounded-full p-8 text-center">
            <p className="text-[#000] text-center">{servicio.hero.duracion}</p>
          </div>

          <div className="bg-[#DFFF69] rounded-full p-8">
            <p className="text-[#000] text-center">{servicio.hero.textoAdicional}</p>
          </div>

        </div>

        </section>

        <SeccionesServicio
        secciones={servicio.sections}
        boton={servicio.button}
      />
    </CirculosBackground>
  );
}