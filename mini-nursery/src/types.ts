export interface Plant {
    id: number
    name: string
    scientific?: string
    difficulty: "Easy" | "Medium" | "Hard"
    light: "Low" | "Medium" | "Bright"
    water: "Low" | "Moderate" | "Frequent"
    rarity?: "Common" | "Uncommon" | "Rare"
    description: string
}

/**
 * Runtime anchor (prevents Vite crash)
 */
export const PlantModel = {} as Plant;
