
export const Navbar = () => {
  return (
    <nav className="flex bg-[#e5e5e5] bg-opacity-30 px-15 py-10 "> 

        <img className="w-8xs" src="../image/Logo1-2.png"></img>

      <div className="flex flex-1 justify-center items-center">
        <a className="text-[#000000] mr-2" >Inicio</a>
        <a className="text-[#000000] mr-2">Somos Numa</a>
        <a className="text-[#000000] mr-2">Centro de salud y bienestar</a>
        <a className="text-[#000000] mr-2">Nuestro espacio</a>
        <a className="text-[#000000] mr-2">Cuídate con Numa</a>
        <a className="text-[#000000] mr-2">Español</a>
      </div>
            
    </nav>
  )
}
