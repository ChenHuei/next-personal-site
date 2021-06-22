export interface ResumeProject {
  title: string
  description: string
  link?: string
}

export interface ResumeInformation {
  company: string
  title: string
  time: string
  projects: ResumeProject[]
}
