import { useState } from "react";
import InputCreacion from "../components/InputCreacion";
import InputInicio from "../components/InputInicio";

export default function Home() {
  const [showModal,setShowModal]=useState(false)
  const [modalInicio, setModalVersion]=useState(true)
    const toggleModal=()=>{
        setModalVersion(!modalInicio)
    }
    function submitForm(e){
        e.preventDefault();
        const form = document.querySelector('form')
        console.log(Object.values(form).reduce((obj,field) => { obj[field.name] = field.value; return obj }, {}))
    }
  return (
    <div>
    <div className=' min-h-screen grid place-content-center'>
      <button type="button" className=" bg-aqua p-4 shadow-md font-regular text-white" onClick={()=>setShowModal(!showModal)}> Open Modal </button>
    </div>
    <div className={showModal?"bg-neutral-700/80 absolute grid place-content-center left-0 top-0 z-0 min-h-screen min-w-full":"hidden"} >
            <div className="relative bg-white min-w-[420px] min-h-72 z-10">
            <div className=" text-black w-full flex justify-end p-3 pb-2">
                <button type="button" className="hover:scale-105 duration-200" onClick={()=>{setShowModal(!showModal)}}>
                    <img src="https://img.icons8.com/ios-filled/344/delete-sign--v1.png" width={"25px"}></img>
                </button>
            </div>
                <div className=" text-black flex flex-col px-10 gap-2 text-center items-center" id="formInicioSesion">
                    <h1 className=" text-black font-bold text-3xl mb-2"> {modalInicio?"Iniciar sesión":"Crear una cuenta"}</h1>
                    <form className="flex flex-col" onSubmit={(e)=>submitForm(e)}>
                    {modalInicio?<InputInicio></InputInicio>:<InputCreacion></InputCreacion>}
                    <input type="submit" className="mt-6 bg-red shadow-md py-1 font-semibold text-white" value="Entra"></input>
                    </form>
                </div>
                <div className=" bg-aqua mt-6 flex flex-row p-3 justify-center relative bottom-0 text-white text-sm">
                    <p>{modalInicio?"¿No tienes cuenta?":"¿Ya tienes cuenta?"} <button type="button" className=" underline hover:text-dark-aqua duration-200" onClick={()=>toggleModal()}>{modalInicio?"Crea una nueva":"Inicia sesión"}</button></p> 
                </div>
                
            </div>
        </div>
        </div>
  )
}
