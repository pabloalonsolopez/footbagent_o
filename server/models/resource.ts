import { Schema, model } from "mongoose"

import { PositionSchema } from "../schemas/position"
import { LanguageSchema } from "../schemas/language"

const ResourceSchema = new Schema({
  name: String,
  knownAs: String,
  dateOfBirth: Date,
  cityOfBirth: String,
  stateOfBirth: String,
  countryOfBirth: String,
  maritalStatus: String,
  children: Number,
  height: Number,
  weight: Number,
  preferredFoot: String,
  mainPosition: PositionSchema,
  otherPositions: [PositionSchema],
  phone: String,
  email: String,
  website: String,
  twitter: String,
  facebook: String,
  instagram: String,
  languages: [LanguageSchema],
  summary: String
})

const Resource = model('Resource', ResourceSchema)

export { Resource }