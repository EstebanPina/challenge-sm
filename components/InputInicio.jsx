import { useState } from "react";
const InputInicio = () => {
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
    setPasswordShown(!passwordShown);
    };
    return ( <div className="w-96 flex flex-col">
    <div className=" flex p-2 flex-row justify-start border border-black/10" id="inputCorreo">
                <input 
                className=" w-11/12 ml-1 placeholder:text-black/20 text-sm placeholder:font-normal" 
                type="text" 
                placeholder="Tu correo electrónico"
                id="emailValidation"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                name="email"
                title="El correo ingresado no es un correo valido"
                onInvalid={()=>{
                    document.getElementById("emailErrorMsg").classList.remove("hidden")
                }}
                onKeyUp={()=>{
                    const regex=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    let email=document.getElementById("emailValidation").value;
                    if(!regex.test(email)){
                    document.getElementById("imagenValidacion").src="https://img.icons8.com/color/344/cancel--v1.png"
                    const inputCorreo=document.getElementById("inputCorreo")
                    inputCorreo.classList.add("border-red")
                    inputCorreo.classList.remove("border-black/10")
                    
                    }
                    else{
                    document.getElementById("imagenValidacion").src="https://img.icons8.com/color/344/ok--v1.png"
                    const inputCorreo=document.getElementById("inputCorreo")
                    inputCorreo.classList.remove("border-red")
                    inputCorreo.classList.add("border-black/10")
                    document.getElementById("emailErrorMsg").classList.add("hidden")    
                    }
                    }
                }
                >
                </input>
                <img className=" border-transparent" id="imagenValidacion" width="20px"></img>
            </div>
            <div className="flex flex-col justify-start text-left m-1">
            <p className=" text-xs text-red hidden" id="emailErrorMsg">Usa el formato de email correcto ejemplo@hola.com</p>
            </div>
            <div className="flex  p-2 mt-4 flex-row justify-start border border-black/10" id="ContainerPass1">
                <input
                 className=" w-10/12 placeholder:text-black/20 text-sm" 
                 type={passwordShown?"text":"password"} 
                 id="inputPass" 
                 placeholder="Tu contraseña"
                 name="PasswordLogin"
                 pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,16}$"
                 onInvalid={()=>{
                    document.getElementById("PassErrorMsg").classList.remove("hidden")
                }}
                 onKeyUp={()=>{
                    const regexpass=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,16}$/
                    let pass=document.getElementById("inputPass").value
                    const inputPass=document.getElementById("ContainerPass1")
                    if(regexpass.test(pass)){
                    inputPass.classList.remove("border-red")
                    inputPass.classList.add("border-black/10")
                    }
                    else{
                    inputPass.classList.add("border-red")
                    inputPass.classList.remove("border-black/10")
                    document.getElementById("PassErrorMsg").classList.add("hidden")
                    }
                 }}></input>
                <button type="button" className=" w-2/12 text-xs text-dark-aqua underline " onClick={()=>togglePassword()}>Mostrar</button>
            </div>
            <div className="flex flex-col justify-start text-left m-1">
            <p className=" text-[.7em] text-red hidden" id="PassErrorMsg">La contraseña debe de contener al menos un numero y una letra mayuscula</p>
            </div>
</div> );
}
 
export default InputInicio;