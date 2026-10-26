import { useState, type SubmitEvent } from 'react'
import { useApplications } from './hooks/useApplications'
import { STATUSES } from './constants/status'
import type { Status } from './types/application'
import './App.css'

function App() {
  const { applications, addApplication, updateStatus, deleteApplication } =
    useApplications()

  const [company, setCompany] = useState('')
  const [role, setRole] = useState('')
  const [status, setStatus] = useState<Status>('Applied')

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!company.trim() || !role.trim()) return

    addApplication({
      company: company.trim(),
      role: role.trim(),
      location: '',
      salary: '',
      note: '',
      status,
    })
    setCompany('')
    setRole('')
    setStatus('Applied')
  }

  return (
    <main className="container">
      <h1>JobTrip</h1>
      <p>Track every step of your job search.</p>

      <form className="form" onSubmit={handleSubmit}>
        <input
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Company"
        />
        <input
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Role"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as Status)}
        >
          {STATUSES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <button type="submit">Add</button>
      </form>

      <ul className="list">
        {applications.map((app) => (
          <li key={app.id} className="card">
            <div>
              <h2>{app.company}</h2>
              <p>{app.role}</p>
            </div>
            <div className="card-actions">
              <select
                value={app.status}
                onChange={(e) => updateStatus(app.id, e.target.value as Status)}
              >
                {STATUSES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <button
                type="button"
                className="delete"
                onClick={() => deleteApplication(app.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default App