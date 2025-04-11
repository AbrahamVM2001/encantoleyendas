import { useState  } from "react";

export default function Reservation() {
    return (
        <>
            <form>
                <div className="grid grid-cols-2 grid-rows-2 gap-4">
                    <div>
                        <div className="flex h-[34px] text-[14px] w-full items-center border border-palette4 rounded-lg focus-within:ring-2 focus-within:ring-palette4 focus-within:ring-offset-2 focus-within:ring-offset-palette4 transition-all duration-150 ease-in-out">
                            <input placeholder="Nombre" type="text" name="name" id="name" className="bg-transparent px-3 py-1 rounded-l-lg focus:outline-none w-full"/>
                            <span className="icon-[wpf--name] text-2xl"></span>
                        </div>
                    </div>
                    <div>
                        <div className="flex h-[34px] text-[14px] w-full items-center border border-palette4 rounded-lg focus-within:ring-2 focus-within:ring-palette4 focus-within:ring-offset-2 focus-within:ring-offset-palette4 transition-all duration-150 ease-in-out">
                            <input type="text" name="numberguests" id="numbergusts" className="bg-transparent px-3 py-1 rounded-l-lg focus:outline-none w-full" placeholder="Número de acompañantes" />
                            <span className="icon-[stash--people-group-light] text-2xl"></span>
                        </div>
                    </div>
                    <div className="row-start-2">
                        <div className="flex h-[34px] text-[14px] w-full items-center border border-palette4 rounded-lg focus-within:ring-2 focus-within:ring-palette4 focus-within:ring-offset-2 focus-within:ring-offset-palette4 transmition-all duration-150 ease-in-out">
                            <input type="number" min="0" max="9999999999" name="phone" id="phone" className="bg-transparent px-3 py-1 rounded-l-lg focus:outline-none w-full" placeholder="Telefono" />
                            <span className="icon-[lineicons--phone] text-2xl"></span>
                        </div>
                    </div>
                    <div className="row-start-2">
                        <div className="flex h-[34px] text-[14px] w-full items-center border border-palette4 rounded-lg focus-within:ring-2 focus-within:ring-palette4 focus-within:ring-offset-2 focus-within:ring-offset-palette4 transmition-all duration-150 ease-in-out">
                            <input type="email" name="email" id="email" className="bg-transparent px-3 py-1 rounded-l-lg focus:outline-none w-full" placeholder="Correo Electronico" />
                            <span className="icon-[iconamoon--email] text-2xl"></span>
                        </div>
                    </div>
                </div>
                <button className="overflow-hidden mt-10 relative p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group w-full">
                    Enviar
                    <span className="absolute w-full h-32 -top-8 -left-2 bg-green-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"></span>
                    <span className="absolute w-full h-32 -top-8 -left-2 bg-green-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"></span>
                    <span className="absolute w-full h-32 -top-8 -left-2 bg-green-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"></span>
                    <span className="group-hover:opacity-100 w-full group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">Enviar!</span>
                </button>
            </form>
        </>
    );
}