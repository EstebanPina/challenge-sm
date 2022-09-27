
const InputCreacion = () => {

    return ( 
        <div className="w-96 flex flex-col">
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
                    <div className="flex w-96 p-2 mt-4 flex-row justify-start border border-black/10" id="PassContainer1" >
                        <input
                         className=" w-11/12 placeholder:text-black/20 text-sm" 
                         type="password"
                         id="inputPass1" 
                         placeholder="Tu contraseña"
                         name="PasswordCreation"
                         pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{3,12}$"
                         onInvalid={()=>{
                            document.getElementById("PassErrorMsg").classList.remove("hidden")
                        }}
                         onKeyUp={()=>{
                            const regexpass=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,16}$/
                            let pass=document.getElementById("inputPass1").value
                            const inputPass=document.getElementById("PassContainer1")
                            if(regexpass.test(pass)){
                            document.getElementById("imagenValidacion2").src="https://img.icons8.com/color/344/ok--v1.png"
                            inputPass.classList.remove("border-red")
                            inputPass.classList.add("border-black/10")
                            }
                            else{
                            document.getElementById("imagenValidacion2").src="https://img.icons8.com/color/344/cancel--v1.png"
                            inputPass.classList.add("border-red")
                            inputPass.classList.remove("border-black/10")
                            document.getElementById("PassErrorMsg").classList.add("hidden")
                            }
                         }}></input>
                        <img className=" border-transparent" id="imagenValidacion2" width="20px"></img>
                    </div>

                    <div className="flex flex-col justify-start text-left m-1">
                    <p className=" text-[.7em] text-red hidden" id="PassErrorMsg">La contraseña debe de contener al menos un numero y una letra mayuscula</p>
                    </div>

                    <div className="flex w-96 p-2 mt-4 flex-row justify-start border border-black/10" id="PassContainer2">
                        <input
                         className=" w-11/12 placeholder:text-black/20 text-sm" 
                         type="password"
                         id="inputPass2" 
                         placeholder="Repite tu contraseña"
                         name="PasswordValidation"
                         onInvalid={()=>{
                            document.getElementById("CompareErrorMsg").classList.remove("hidden")
                        }}
                         onKeyUp={()=>{
                            let pass=document.getElementById("inputPass1").value
                            let pass2=document.getElementById("inputPass2").value
                            const inputPass=document.getElementById("PassContainer2")
                            if(pass2===pass){
                                document.getElementById("inputPass2").setCustomValidity("")
                            document.getElementById("imagenValidacion3").src="https://img.icons8.com/color/344/ok--v1.png"
                            inputPass.classList.remove("border-red")
                            inputPass.classList.add("border-black/10")
                            }
                            else{
                            document.getElementById("inputPass2").setCustomValidity("La contraseña no coincide")
                            document.getElementById("imagenValidacion3").src="https://img.icons8.com/color/344/cancel--v1.png"
                            inputPass.classList.add("border-red")
                            inputPass.classList.remove("border-black/10")
                            document.getElementById("CompareErrorMsg").classList.add("hidden")
                            }
                         }}></input>
                        <img className=" border-transparent" id="imagenValidacion3" width="20px"></img>
                    </div>
                    <div className="flex flex-col justify-start text-left m-1">
                    <p className=" text-[.7em] text-red hidden" id="CompareErrorMsg">La contraseña no coincide</p>
                    </div>
                    
        </div>
     );
}
 
export default InputCreacion;