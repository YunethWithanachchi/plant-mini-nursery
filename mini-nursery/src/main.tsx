import  React from "react";
import ReactDOM from "react-dom/client"
import App from "./App.tsx";
import 'bootstrap/dist/css/bootstrap.min.css'
import type {Plant} from "./types.ts";

const plants: Plant[] = [
    {
        id: 1,
        name: "Snake Plant",
        scientific: "Dracaena trifasciata",
        difficulty: "Easy",
        light: "Low",
        water: "Low",
        rarity: "Common",
        description: "A hardy indoor plant that requires minimal care."
    },
    {
        id: 2,
        name: "Peace Lily",
        scientific: "Spathiphyllum",
        difficulty: "Medium",
        light: "Medium",
        water: "Moderate",
        rarity: "Common",
        description: "An elegant plant known for its white flowers."
    },
    {
        id: 3,
        name: "Monstera",
        scientific: "Monstera deliciosa",
        difficulty: "Easy",
        light: "Bright",
        water: "Moderate",
        rarity: "Uncommon",
        description: "A popular tropical plant with large split leaves."
    }
]

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App plants={plants}/>
    </React.StrictMode>
)