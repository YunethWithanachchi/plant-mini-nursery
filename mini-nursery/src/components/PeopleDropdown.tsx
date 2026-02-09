import { useEffect, useState } from "react"
import { getUsers, type User } from "../services/UserService"

type PeopleDropdownProps = {
    onSelect: (user: User) => void
}

const PeopleDropdown = ({ onSelect }: PeopleDropdownProps) => {
    const [users, setUsers] = useState<User[]>([])
    const [selectedUser, setSelectedUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        getUsers()
            .then((data) => setUsers(data))
            .catch(() => setError(true))
            .finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <div className="spinner-border" />
    }

    if (error) {
        return <div className="alert alert-danger">Failed to load users</div>
    }

    return (
        <div className="card p-3">
            <select
                className="form-select mb-3"
                onChange={(e) => {
                    const user = users.find(u => u.id === Number(e.target.value))
                    if (user) {
                        setSelectedUser(user)
                        onSelect(user)
                    }
                }}
            >
                <option value="">Select a person</option>
                {users.map((user) => (
                    <option key={user.id} value={user.id}>
                        {user.name}
                    </option>
                ))}
            </select>

            {selectedUser && (
                <div className="card p-2">
                    <strong>{selectedUser.name}</strong>
                    <div>{selectedUser.email}</div>
                </div>
            )}
        </div>
    )
}

export default PeopleDropdown
