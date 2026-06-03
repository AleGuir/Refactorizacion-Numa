
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

            <h1 className="text-[#000] text-center text-4xl mt-8 mb-11 font-display">{servicio.hero.title}</h1>
        <div className="grid grid-cols-[10rem_auto_10rem] justify-stretch lg:grid-cols-3 lg:gap-0 lg:mb-24">

          <div className="bg-[#B9B5FF] rounded-full pr-7 md:p-8 lg:p-8 flex items-center justify-end ">
            <p className="text-[#000] text-center lg:text-right font-displayBold text-xs md:text-base lg:text-lg">Duración:</p>
          </div>

          <div className="bg-white rounded-full p-4 md:p-8 lg:p-8 text-center flex items-center justify-center">
            <p className="text-[#000] text-center font-body text-xs md:text-base lg:text-lg">{servicio.hero.duracion}</p>
          </div>

          <div className="bg-[#DFFF69] rounded-full p-5 md:p-8 lg:p-8 flex items-center justify-center lg:items-start lg:justify-start">
            <p className="text-[#000] text-left lg:text-left font-displayBold text-xs md:text-base lg:text-lg">{servicio.hero.textoAdicional}</p>
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