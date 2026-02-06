import { useState } from "react"
import type { Plant } from "./types.ts";
import PlantList from "./PlantList"
import PlantCard from "./PlantCard"
import PlantForm from "./PlantForm"

type AppProps = {
    plants: Plant[]
}

const App = ({ plants }: AppProps) => {
    const [selectedId, setSelectedId] = useState<number | null>(null)

    const selectedPlant =
        plants.find((plant) => plant.id === selectedId) || null

    return (
        <div className="container mt-4">
            <input
                type="text"
                className="form-control mb-3"
                placeholder="Search plants..."
                disabled
            />

            <div className="row">
                <div className="col-md-4">
                    <PlantList
                        plants={plants}
                        selectedId={selectedId}
                        onSelect={setSelectedId}
                    />
                </div>

                <div className="col-md-8">
                    <PlantForm />
                    <div className="mt-3">
                        <PlantCard plant={selectedPlant} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
