import { useState, useMemo } from "react"
import type { Plant } from "./types"
import PlantList from "./components/PlantList"
import PlantCard from "./components/PlantCard"
import PlantForm from "./components/PlantForm"
import Header from "./components/Header"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import PeopleDropdown from "./components/PeopleDropdown"
import type { User } from "./services/UserService"

const App = () => {
    // -----------------------------
    // App State
    // -----------------------------
    const [plants, setPlants] = useState<Plant[]>([
        {
            id: 1,
            name: "Snake Plant",
            scientific: "Dracaena trifasciata",
            difficulty: "Easy",
            light: "Low",
            water: "Low",
            rarity: "Common",
            description: "Low maintenance, perfect for indoors."
        },
        {
            id: 2,
            name: "Fiddle Leaf Fig",
            scientific: "Ficus lyrata",
            difficulty: "Medium",
            light: "Bright",
            water: "Moderate",
            rarity: "Uncommon",
            description: "Needs bright light and consistent watering."
        },
        {
            id: 3,
            name: "Orchid",
            scientific: "Orchidaceae",
            difficulty: "Hard",
            light: "Medium",
            water: "Frequent",
            rarity: "Rare",
            description: "Beautiful flowers, needs careful care."
        }
    ])
    const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null)
    const [searchText, setSearchText] = useState("")
    const [difficultyFilter, setDifficultyFilter] = useState("All")
    const [successMessage, setSuccessMessage] = useState("")
    const [selectedUser, setSelectedUser] = useState<User | null>(null)

    // -----------------------------
    // Functions
    // -----------------------------
    const handleAdd = (plant: Omit<Plant, "id">) => {
        const newPlant: Plant = { ...plant, id: Date.now() }
        setPlants([...plants, newPlant])
        setSuccessMessage(`${plant.name} added successfully!`)
    }

    const handleDelete = (id: number) => {
        setPlants(plants.filter((p) => p.id !== id))
        if (selectedPlant?.id === id) {
            setSelectedPlant(null)
        }
        setSuccessMessage("Plant removed successfully!")
    }

    const handleResetFilters = () => {
        setSearchText("")
        setDifficultyFilter("All")
    }

    // -----------------------------
    // Computed filtered plants
    // -----------------------------
    const filteredPlants = useMemo(() => {
        return plants.filter((plant) => {
            const matchesName = plant.name.toLowerCase().includes(searchText.toLowerCase())
            const matchesDifficulty =
                difficultyFilter === "All" || plant.difficulty === difficultyFilter
            return matchesName && matchesDifficulty
        })
    }, [plants, searchText, difficultyFilter])

    // -----------------------------
    // JSX Layout
    // -----------------------------
    return (
        <>
            <Header />
            <Banner>
                <h2>Welcome to the Mini Nursery</h2>
            </Banner>

            <div className="container mt-4">
                {successMessage && (
                    <div className="alert alert-success">{successMessage}</div>
                )}

                <div className="row">
                    {/* Left Column */}
                    <div className="col-md-4">
                        {/* Search Bar */}
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Search plants..."
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />

                        {/* Difficulty Filter */}
                        <select
                            className="form-select mb-2"
                            value={difficultyFilter}
                            onChange={(e) => setDifficultyFilter(e.target.value)}
                        >
                            <option>All</option>
                            <option>Easy</option>
                            <option>Medium</option>
                            <option>Hard</option>
                        </select>

                        {/* Reset Filters */}
                        <button
                            className="btn btn-secondary btn-sm mb-3"
                            onClick={handleResetFilters}
                        >
                            Reset Filters
                        </button>

                        {/* Plant List */}
                        <PlantList
                            plants={filteredPlants}
                            selectedId={selectedPlant?.id ?? null}
                            onSelect={(plant) => setSelectedPlant(plant)}
                        />

                        {/* People Dropdown */}
                        <div className="mt-3">
                            <PeopleDropdown onSelect={setSelectedUser} />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="col-md-8">
                        <PlantForm onAdd={handleAdd} />

                        <div className="mt-3">
                            <PlantCard plant={selectedPlant} onDelete={handleDelete} />
                        </div>

                        {selectedUser && (
                            <div className="mt-3 card p-3">
                                <strong>Selected Person:</strong> {selectedUser.name} <br />
                                <small>{selectedUser.email}</small>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default App
