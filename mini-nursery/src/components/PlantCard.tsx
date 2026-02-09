import type { Plant } from "../types.ts";

type PlantCardProps = {
    plant: Plant | null
    onDelete: (id: number)=> void
}

const PlantCard = ({plant,onDelete}: PlantCardProps) => {
    if (!plant) {
        return (
            <div className="card p-4">
                <p className="text-muted">Select a plant to view details</p>
            </div>
        )
    }
    const currentPlant = plant

    return (
        <div className="card p-4">
            <h4 className="card-title">
                {plant.name}{" "}
                <small className="text-muted">({currentPlant.scientific})</small>
            </h4>
            <p className="card-text">{currentPlant.description}</p>
            <div className="mb-2">
            <span className="badge bg-success me-2">
                {currentPlant.difficulty}
            </span>
                {currentPlant.rarity && (
                    <span className="badge bg-secondary">
                    {currentPlant.rarity}
                </span>
                )}
            </div>
            <div className="mb-2">
                <strong>Light:</strong>{" "}
                {currentPlant.light === "Low" && "🌙"}
                {currentPlant.light === "Medium" && "🌤️"}
                {currentPlant.light === "Bright" && "☀️"}
            </div>

            <div className="mb-3">
                <strong>Water:</strong>{" "}
                {currentPlant.water === "Low" && "💧"}
                {currentPlant.water === "Moderate" && "💧💧"}
                {currentPlant.water === "Frequent" && "💧💧💧"}
            </div>

            <div className="d-flex gap-2">
                <button className="btn btn-outline-primary"
                onClick={()=>alert(currentPlant.name)}>
                    View
                </button>
                <button className="btn btn-danger btn-sm"
                onClick={()=>onDelete(currentPlant.id)}>
                    Remove
                </button>
            </div>
        </div>
    )
}

export default PlantCard