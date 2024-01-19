//SI HAY MONGO
import mongoose from "npm:mongoose@8.0.1";


//imports
import {Example} from "../../types.ts"

const Schema = mongoose.Schema;

const exampleSchema = new Schema(
  {
    



  },
  { timestamps: true }
);



//VALIDACIONES


//MIDDLEWARES----------------------------


export type ExampleModelType = mongoose.Document & Omit<Example, "id">;

export default mongoose.model<ExampleModelType>("Example", exampleSchema);

