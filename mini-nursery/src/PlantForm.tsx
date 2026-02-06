const PlantForm = () => {
    return (
        <div className="card p-4">
            <h5 className="mb-3">Add New Plant</h5>

            <div className="mb-3">
                <label className="form-label">Plant Name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Plant name"
                    disabled
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Scientific Name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Scientific name"
                    disabled
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Difficulty</label>
                <select className="form-select" disabled>
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                </select>
            </div>

            <div className="mb-3">
                <label className="form-label">Light Requirement</label>
                <select className="form-select" disabled>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>Bright</option>
                </select>
            </div>

            <div className="mb-3">
                <label className="form-label">Water Requirement</label>
                <select className="form-select" disabled>
                    <option>Low</option>
                    <option>Moderate</option>
                    <option>Frequent</option>
                </select>
            </div>

            <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                    className="form-control"
                    rows={3}
                    placeholder="Plant description"
                    disabled
                ></textarea>
            </div>

            <div className="d-flex gap-2">
                <button className="btn btn-primary" disabled>
                    Add Plant
                </button>
                <button className="btn btn-secondary" disabled>
                    Clear
                </button>
            </div>
        </div>
    )
}

export default PlantForm
