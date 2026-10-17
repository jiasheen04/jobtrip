type Status = 'Applied' | 'Interview' | 'Offer' | 'Rejected'

type Application = {
  id: number
  company: string
  role: string
  status: string
}

const sampleApplications: Application[] =[
  { id: 1, company: 'Grab', role: 'Junior Frontend Developer', status: 'Applied' },
  { id: 2, company: 'Shopee', role: 'Graduate Software Engineer', status: 'Interview' },
  { id: 3, company: 'Petronas Digital', role: 'Junior Web Developer', status: 'Rejected' }
]

function App() {
  return (
    <main className="container">
      <h1>Job Trip</h1>
      <p>Track every step of job search.</p>

      <ul className="list">
        {sampleApplications.map((app) => (
          <li key={app.id} className="card">
            <div>
              <h2>{app.company}</h2>
              <p>{app.role}</p>
            </div>
            <span className={'badge badge-${app.status.toLowerCase()}'}>
              {app.status}
            </span>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default App