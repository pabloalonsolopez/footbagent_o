export interface Resource {
  _id: string
  avatar: string
  name: string
  knownAs: string
  dateOfBirth: Date
  cityOfBirth: string
  stateOfBirth: string
  countryOfBirth: string
  maritalStatus: string
  children: number
  height: number
  weight: number
  preferredFoot: string
  mainPosition: Position
  otherPositions: Position[]
  phone: string
  email: string
  website: string
  twitter: string
  facebook: string
  instagram: string
  languages: Language[]
  summary: string
}

export interface Position {
  name: string
}

export interface Language {
  name: string
  level: number
}