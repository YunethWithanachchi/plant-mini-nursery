import type { Plant } from "./types.ts";

type PlantCardProps = {
    plant: Plant | null
}

const PlantCard = ({plant}: PlantCardProps) => {
    if (!plant) {
        return (
            <div className="card p-4">
                <p className="text-muted">Select a plant to view details</p>
            </div>
        )
    }

    return (
        <div className="card p-4">
            <h4 className="card-title">
                {plant.name}{" "}
                <small className="text-muted">({plant.scientific})</small>
            </h4>
            <p className="card-text">{plant.description}</p>
            <div className="mb-2">
            <span className="badge bg-success me-2">
                {plant.difficulty}
            </span>
                {plant.rarity && (
                    <span className="badge bg-secondary">
                    {plant.rarity}
                </span>
                )}
            </div>
            <div className="mb-2">
                <strong>Light:</strong>{" "}
                {plant.light === "Low" && "🌙"}
                {plant.light === "Medium" && "🌤️"}
                {plant.light === "Bright" && "☀️"}
            </div>

            <div className="mb-3">
                <strong>Water:</strong>{" "}
                {plant.water === "Low" && "💧"}
                {plant.water === "Moderate" && "💧💧"}
                {plant.water === "Frequent" && "💧💧💧"}
            </div>

            <div className="d-flex gap-2">
                <button className="btn btn-outline-primary" disabled>
                    View
                </button>
                <button className="btn btn-outline-success" disabled>
                    Buy
                </button>
            </div>
        </div>
    )
}

export default PlantCard