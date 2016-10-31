import { Schema } from "mongoose"

const LanguageSchema = new Schema({
  name: String,
  level: Number
}, {_id: false})

export { LanguageSchema }