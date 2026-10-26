import type { Application } from '../types/application'

const STORAGE_KEY = 'jobtrip.applications'

export function loadApplications(): Application[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as Application[]) : []
  } catch {
    return []
  }
}

export function saveApplications(applications: Application[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(applications))
}