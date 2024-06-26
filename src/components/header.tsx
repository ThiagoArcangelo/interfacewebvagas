import { Search } from "lucide-react";
import { useContext, useState } from "react";
import { infoVagasContext } from "@/context/Context";

export function Header(){
  const { buscaVaga } = useContext(infoVagasContext);
  const [titulo, setValorTitulo] = useState("");

  const valorTitulo = (e: React.ChangeEvent<HTMLInputElement>) => {    
    setValorTitulo(e.target.value);
  }

  const buscarComEnter = (event: { key: string; }) => {
    if(event.key == 'Enter'){
      buscaVaga(titulo);
    }
  }

  const buscaTitulo = () => {
    buscaVaga(titulo);
  }

  return (
    <div className="flex items-center justify-between min-h-1  h-20 gap-4 bg-[#14192f]">
      <div className="flex gap-4 ml-10">
        <div className="px-2 py-2 rounded-sm text-[#fff] hover:bg-gray-700 hover:rounded  cursor-pointer"><a className="" href="">Sobre</a></div>
        <div className="px-2 py-2 rounded-sm text-[#fff] hover:bg-gray-700 hover:rounded cursor-pointer "><a className="" href="">Vagas</a></div>
      </div> 
      <div className="w-[30%] flex mr-14">
        <input 
          type="text " 
          // className="w-[87%] text-gray-950  bg-[#14192f] border-solid border-2 border-white  border-r-0
          // rounded-l-[8px] focus:bg-white px-2 outline-none opacity-60 focus:opacity-100 " 
          className="w-[87%] text-gray-950  bg-[#FFF] border-solid border-2 border-white  border-r-0
          rounded-l-[8px] px-2 outline-none  " 
          value={titulo}
          onChange={valorTitulo}
          onKeyDown={buscarComEnter}
        />  
        <button onClick={buscaTitulo} className="bg-[slategray] w-[13%] flex justify-center items-center border-solid border-2 border-white outline-none border-l-0
         rounded-r-[8px]   hover:bg-gray-500 px-2 opacity-60  ml-0 cursor-pointer ">
          <Search color="#FFF" size={17} />
        </button>  
      </div>  
    </div>
  ) 
}