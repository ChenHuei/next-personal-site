import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export interface AboutIcon {
  icon: IconDefinition
  value: string
}

export interface AboutLink {
  name: string
  link: string
}

export interface AboutInformation {
  name: string
  jobs: string
  description: string
  phone: AboutIcon
  email: AboutIcon
  links: AboutLink[]
}
