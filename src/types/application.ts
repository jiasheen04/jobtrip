export type Status = 'Applied' | 'Interview' | 'Offer' | 'Rejected'

export type Application = {
  id: string
  company: string
  role: string
  location: string
  salary: string
  note: string
  status: Status
  appliedAt: string
}

export type NewApplication = Omit<Application, 'id' | 'appliedAt'>