export class Resource {
  _id: string
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

export class Position {
  name: string
}

export class Language {
  name: string
  level: number
}