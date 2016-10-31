import { Schema } from "mongoose"

const PositionSchema = new Schema({
  name: String
}, {_id: false})

export { PositionSchema }