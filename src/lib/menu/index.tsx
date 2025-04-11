import React, { useState } from "react";

const MenuTabs = () => {
    // Estado para manejar la pestaña activa
    const [activeTab, setActiveTab] = useState<string>("crepas");

    // Función para cambiar la pestaña activa
    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <div className="w-full">
            <div className="flex justify-center items-center text-center mb-10">
                <a
                    className={`px-3 py-3 w-auto h-auto ${activeTab === "crepas" ? "bg-palette6 text-white" : "bg-gray-200"} rounded-lg m-2 `}
                    onClick={() => handleTabClick("crepas")}
                >
                    Crepas
                </a>
                <a
                    className={`px-3 py-3 w-auto h-auto ${activeTab === "marquesitas" ? "bg-palette6 text-white" : "bg-gray-200"} rounded-lg m-2`}
                    onClick={() => handleTabClick("marquesitas")}
                >
                    Marquesitas
                </a>
                <a
                    className={`px-3 py-3 w-auto h-auto ${activeTab === "postres" ? "bg-palette6 text-white" : "bg-gray-200"} rounded-lg m-2`}
                    onClick={() => handleTabClick("postres")}
                >
                    Postres
                </a>
            </div>

            <div className="flex flex-col justify-center items-center" style={{ display: activeTab === "crepas" ? "block" : "none" }}>
                <h3 className="text-xl font-bold mb-1">Crepa Dulce</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    <div className="card mt-9">
                        <div className="card-image">
                            <img src="https://placehold.co/500x400" alt="Imagen 1" />
                        </div>
                        <div className="card-body">
                            <h5 className="text-lg font-bold text-center">Suspiro de Nahuala</h5>
                            <p>Crepa de Nutella</p>
                        </div>
                    </div>
                    <div className="card mt-9">
                        <div className="card-image">
                            <img src="https://placehold.co/500x400" alt="Imagen 2" />
                        </div>
                        <div className="card-body">
                            <h5 className="text-lg font-bold text-center">La llorona dulce</h5>
                            <p>Crepa de Nutella con Fresas</p>
                        </div>
                    </div>
                    <div className="card mt-9">
                        <div className="card-image">
                            <img src="https://placehold.co/500x400" alt="Imagen 3" />
                        </div>
                        <div className="card-body">
                            <h5 className="text-lg font-bold text-center">Flor de Xtabay</h5>
                            <p>Crepa de Nutella con Durazno</p>
                        </div>
                    </div>
                    <div className="card mt-9">
                        <div className="card-image">
                            <img src="https://placehold.co/500x400" alt="Imagen 4" />
                        </div>
                        <div className="card-body">
                            <h5 className="text-lg font-bold text-center">Ojo de Alux</h5>
                            <p>Crepa de Oreo</p>
                        </div>
                    </div>
                    <div className="card mt-9">
                        <div className="card-image">
                            <img src="https://placehold.co/500x400" alt="Imagen 5" />
                        </div>
                        <div className="card-body">
                            <h5 className="text-lg font-bold text-center">Corazón de Gansito</h5>
                            <p>Crepa de chocolate con philadelphia y mermelada de fresa</p>
                        </div>
                    </div>
                    <div className="card mt-9">
                        <div className="card-image">
                            <img src="https://placehold.co/500x400" alt="Imagen 6" />
                        </div>
                        <div className="card-body">
                            <h5 className="text-lg font-bold text-center">Beso de bubulubu</h5>
                            <p>Crepa de chocolate con bombon y mermelada de fresa</p>
                        </div>
                    </div>
                </div>
                <h3 className="text-xl font-bold mb-14">Crepa Salda</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    <div className="card">
                        <div className="card-image">
                            <img src="https://placehold.co/500x400" alt="Salada 1" />
                        </div>
                        <div className="card-body">
                            <h5 className="text-lg font-bold">La planchada</h5>
                            <p>Crepa de Queso Manchego</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-image">
                            <img src="https://placehold.co/500x400" alt="Salada 2" />
                        </div>
                        <div className="card-body">
                            <h5 className="text-lg font-bold">Doña Blanca</h5>
                            <p>Crepa de queso philadelphia</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-image">
                            <img src="https://placehold.co/500x400" alt="Salada 3" />
                        </div>
                        <div className="card-body">
                            <h5 className="text-lg font-bold">Doble Espectro</h5>
                            <p>Crepa de dos quesos</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-image">
                            <img src="https://placehold.co/500x400" alt="Salada 4" />
                        </div>
                        <div className="card-body">
                            <h5 className="text-lg font-bold">Encantamiento Azteca</h5>
                            <p>Crepa de pizza (Tomate, peperoni, queso manchego)</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-image">
                            <img src="https://placehold.co/500x400" alt="Salada 4" />
                        </div>
                        <div className="card-body">
                            <h5 className="text-lg font-bold">Hechizo Tropical</h5>
                            <p>Crepa de pizza (Tomate, jamón, piña)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center" style={{ display: activeTab === "marquesitas" ? "block" : "none" }}>
                <h4 className="text-xl font-bold mb-14">Marquesita Dulce</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    <div className="card">
                        <div className="card-image">
                            <img src="https://placehold.co/500x400" alt="Marquesita dulce 1" />
                        </div>
                        <div className="card-body">
                            <h5 className="text-lg font-bold">Eco del charro negro</h5>
                            <p>Marquesita de Nutella</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-image">
                            <img src="https://placehold.co/500x400" alt="Marquesita dulce 2" />
                        </div>
                        <div className="card-body">
                            <h5 className="text-lg font-bold">Tejido de la llorona</h5>
                            <p>Marquesita de Nutella con fresa</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-image">
                            <img src="https://placehold.co/500x400" alt="Marquesita dulce 3" />
                        </div>
                        <div className="card-body">
                            <h5 className="text-lg font-bold">El oro de la Xtabay</h5>
                            <p>Marquesita de Nutella con durazno</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-image">
                            <img src="https://placehold.co/500x400" alt="Marquesita dulce 4" />
                        </div>
                        <div className="card-body">
                            <h5 className="text-lg font-bold">Ritual Frutal</h5>
                            <p>Marquesita con fresa, durazno y Kiwi</p>
                        </div>
                    </div>
                </div>
                <h4 className="text-xl font-bold mb-14">Marquesita Salda</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    <div className="card">
                        <div className="card-image">
                            <img src="https://placehold.co/500x400" alt="Marquesita Salada 1" />
                        </div>
                        <div className="card-body">
                            <h5 className="text-lg font-bold">Susurro de Catrina</h5>
                            <p>Marquesita de queso manchego</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-image">
                            <img src="https://placehold.co/500x400" alt="Marquesita Salada 2" />
                        </div>
                        <div className="card-body">
                            <h5 className="text-lg font-bold">Espíritu Blanco</h5>
                            <p>Marquesita de queso philadelphia</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-image">
                            <img src="https://placehold.co/500x400" alt="Marquesita Salada 3" />
                        </div>
                        <div className="card-body">
                            <h5 className="text-lg font-bold">Almas Gemelas</h5>
                            <p>Marquesitas de dos quesos</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-image">
                            <img src="https://placehold.co/500x400" alt="Marquesita Salada 4" />
                        </div>
                        <div className="card-body">
                            <h5 className="text-lg font-bold">Fuego de Tepoztécatl</h5>
                            <p>Marquesita pizza con pepperoni</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-image">
                            <img src="https://placehold.co/500x400" alt="Marquesita Salada 4" />
                        </div>
                        <div className="card-body">
                            <h5 className="text-lg font-bold">Encanto de Mayab</h5>
                            <p>Marquesita pizza con jamón y piña</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center" style={{ display: activeTab === "postres" ? "block" : "none" }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    <div className="card">
                        <div className="card-image">
                            <img src="https://placehold.co/500x400" alt="Mousse Fresa" />
                        </div>
                        <div className="card-body">
                            <h5 className="text-lg text-bold">Obsidiana Negra</h5>
                            <p>Mousse de chocolate</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-image">
                            <img src="https://placehold.co/500x400" alt="Mousse Chocolate" />
                        </div>
                        <div className="card-body">
                            <h5 className="text-lg text-bold">Dama Roja</h5>
                            <p>Mousse de fresa</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-image">
                            <img src="https://placehold.co/500x400" alt="Mousse Oreo" />
                        </div>
                        <div className="card-body">
                            <h5 className="text-lg text-bold">Niebla de Xibalbá</h5>
                            <p>Mousse Oreo</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-image">
                            <img src="https://placehold.co/500x400" alt="Fresas con crema" />
                        </div>
                        <div className="card-body">
                            <h5 className="text-lg text-bold">Lágrimas de Xochiquetzal</h5>
                            <p>Fresas con crema</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-image">
                            <img src="https://placehold.co/500x400" alt="Fresas con chocolate" />
                        </div>
                        <div className="card-body">
                            <h5 className="text-lg text-bold">Fresas con chocolate</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuTabs;