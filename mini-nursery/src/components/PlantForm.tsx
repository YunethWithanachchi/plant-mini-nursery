import { useState } from "react"
import type { Plant } from "../types.ts"

type PlantFormProps = {
    onAdd: (plant: Omit<Plant, "id">) => void
}

const PlantForm = ({ onAdd }: PlantFormProps) => {
    const [name, setName] = useState("")
    const [scientific, setScientific] = useState("")
    const [difficulty, setDifficulty] = useState("Easy")
    const [light, setLight] = useState("Low")
    const [water, setWater] = useState("Low")
    const [rarity, setRarity] = useState("Common")
    const [description, setDescription] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!name.trim()) {
            alert("Plant name is required")
            return
        }

        onAdd({
            name,
            scientific,
            difficulty,
            light,
            water,
            rarity,
            description,
        })

        setName("")
        setScientific("")
        setDescription("")
        setDifficulty("Easy")
        setLight("Low")
        setWater("Low")
        setRarity("Common")
    }

    return (
        <form onSubmit={handleSubmit} className="card p-3">
            <input
                className="form-control mb-2"
                placeholder="Plant name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                className="form-control mb-2"
                placeholder="Scientific name"
                value={scientific}
                onChange={(e) => setScientific(e.target.value)}
            />

            <textarea
                className="form-control mb-2"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <button className="btn btn-success">Add Plant</button>
        </form>
    )
}

export default PlantForm
