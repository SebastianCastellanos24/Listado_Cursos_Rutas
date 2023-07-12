import React from 'react'

import Logo from "../../public/LogoLogicaySoftware.png"
import WhatsAppLogo from "../assets/img/whatsapp.png" 

const fecha = new Date();
const hora = fecha.getHours();
const minutos = fecha.getMinutes();

const handleShowInputMessage = () => {
    if(showInputMessage.children.length === 0) {
        const showInputMessage = document.getElementById("showInputMessage");
        showInputMessage.innerHTML = `
        <div class='w-[310px] md:w-[350px] h-[360px] mr-1 rounded'>
          <div class='bg-[#e4ebfa] rounded'>
              <div class='w-full flex pl-5 items-center gap-1 bg-[#075E54] py-4 rounded-t'>
                  <div class='flex items-end'>
                    <img src=${Logo} alt='Logo Lógica y Software' class='w-[60px] rounded-full'/>  
                    <div class='w-[12px] h-[12px] bg-[#28bb15] rounded-full translate-x-[-15px] ring-1 ring-[#075E54]'></div>  
                  </div>
                  <div>
                      <p class='text-xl text-white font-bold'>Lógica y Software</p>
                      <p class='text-sm text-white font-bold'>Dir. Comercial</p>
                  </div>
              </div>
              <div class='w-full h-[260px]'>
                <div class='w-full h-[200px] m-0 bg-whatsApp'>
                  <div class='bg-[#e4ebfa] w-2/3 p-3 ml-5 translate-y-[35px]'>
                    <p class='font-bold text-gray-500 mb-1'>Carlos Moreno</p>
                    <p>Cordial saludo,</p>
                    <p>¿Cómo le puedo ayudar?</p>
                    <p class='flex justify-end text-sm mt-1'>${hora}:${minutos}</p>
                  </div>
                </div>
                <div class='h-[60px] flex justify-center items-center'>
                  <a href="https://wa.link/neqxmk" class='flex justify-end items-center gap-2 text-white bg-[#28bb15] px-16 rounded-md py-1 h-[40px]'>
                    <img src=${WhatsAppLogo} alt='WhatsAppLogo' class="w-[25px]"/>  
                    <p class='font-bold w-full'>Inicia el chat aquí</p>
                  </a>
                </div>
              </div>
          </div>
        </div>
      ` 
    } else {
        const showInputMessage = document.getElementById("showInputMessage");
        showInputMessage.innerHTML = ``
    }
}

const BtnWhatsApp = () => {
  return (
    <div className="fixed bottom-0 right-0 mr-6 mb-6 hover:cursor-pointer z-10">
        <div className='flex flex-col'>
          <div id='showInputMessage'></div>
          <div className="flex flex-row-reverse items-center z-20">
            <img src={WhatsAppLogo} alt='WhatsAppLogo' class="w-[55px] ml-2"
                onClick={handleShowInputMessage} 
            /> 
            <div id="showText">
              <p class="bg-[#28bb15] text-white px-5 py-[5px] rounded font-bold text-xl">¿Necesitas ayuda?</p>
            </div>
          </div>         
        </div>
    </div>
  )
}

export default BtnWhatsApp