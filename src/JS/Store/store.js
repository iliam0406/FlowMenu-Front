import React from "react"
 

const Almacen = () => {
	return {
		store: {
			entradas: [
				{
                    id: 1,
                    title: "Ensalada de estación",
                    descripcion: "Tomate, Lechuga, Zanahoria, Pepino",
					precio:"$ 700"
				},
				{
                    id: 2,
                    title: "Consomé de pollo",
                    descripcion: "Nada como un rico consomé de pollo",
					precio:"$ 400"
                },
                {
                    id: 3,
                    title: "Ensalada Cesar",
                    descripcion: "Lechuga, salsa Cesar, crutones de pan, queso parmesano.",
					precio:"$ 1.000"
                },
            ],

            principales: [
				{
                    id: 1,
                    title: "Pollo a la Plancha",
                    descripcion: "Tomate, Lechuga, Zanahoria, Pepino",
					precio:"$ 2.500"
				},
				{
                    id: 2,
                    title: "Espaguetis Carbonara",
                    descripcion: "Nada como un rico consomé de pollo",
					precio:"$ 1.800"
                },
                {
                    id: 3,
                    title: "Salmon a la Plancha",
                    descripcion: "Lechuga, salsa Cesar, crutones de pan, queso parmesano.",
					precio:"$ 3.200"
                },
            ],
            
        },
	};
};

export default Almacen;