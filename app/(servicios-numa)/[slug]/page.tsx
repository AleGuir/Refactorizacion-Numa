//Si quiero agregar más meta tags pero no se cuales agregar
//next me trae este ''objeto'' sin type, seria conveniente agregarlo
// ya que no usare el objeto si no el tipado
import type { Metadata } from "next";
import { servicios } from "@/data/servicios";
import ServiciosLayout from "@/components/estructura-servicios-numa/ServiciosLayout";
import { notFound } from "next/navigation"

type Props = {
  params: Promise<{
    slug: string;
  }>;
};


export default async function ServicePage({
  params,
}: Props) {


      const { slug } = await params;
  const service = servicios.find(
    (item) => item.slug === slug
  );

  if (!service) {
    notFound();
  }

  return (
    <ServiciosLayout servicio={service} />
  );
}