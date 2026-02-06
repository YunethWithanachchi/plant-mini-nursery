import type { Plant } from "./types.ts";

type PlantListProps = {
    plants: Plant[]
    selectedId: number | null
    onSelect:(id: number) => void
}

const PlantList = ({plants, selectedId, onSelect}: PlantListProps)=>{
    return (
        <ul className="list-group">
            {plants.map((plant)=>(
                <li
                key={plant.id}
                className={`list-group-item d-flex justify-content-between align-items-start ${
                    plant.id === selectedId ? "active":""
                }`}
                style={{cursor: "pointer"}}
                onClick={()=> onSelect(plant.id)}
                >
                    <div>
                        <div className="fw-bold">{plant.name}</div>
                        <small className="text-muted">{plant.scientific}</small>
                    </div>

                    <div className="text-end">
                        <span className="badge bg-success me-1">
                            {plant.difficulty}
                        </span>
                        {plant.rarity && (
                            <span className={"badge bg-secondary"}>
                                {plant.rarity}
                            </span>
                        )}
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default PlantList