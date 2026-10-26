import { useEffect, useState } from 'react'
import type { Application, NewApplication, Status } from '../types/application'
import { loadApplications, saveApplications } from '../services/storage'

export function useApplications() {
  const [applications, setApplications] = useState<Application[]>(loadApplications)

  useEffect(() => {
    saveApplications(applications)
  }, [applications])

  function addApplication(data: NewApplication) {
    const created: Application = {
      ...data,
      id: crypto.randomUUID(),
      appliedAt: new Date().toISOString(),
    }
    setApplications((current) => [created, ...current])
  }

  function updateStatus(id: string, status: Status) {
    setApplications((current) =>
      current.map((a) => (a.id === id ? { ...a, status } : a)),
    )
  }

  function deleteApplication(id: string) {
    setApplications((current) => current.filter((a) => a.id !== id))
  }

  return { applications, addApplication, updateStatus, deleteApplication }
}