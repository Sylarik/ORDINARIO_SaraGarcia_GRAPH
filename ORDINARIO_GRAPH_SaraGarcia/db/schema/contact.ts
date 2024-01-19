//SI HAY MONGO
import mongoose from "npm:mongoose@8.0.1";


//imports
import { ContactDB} from "../../types.ts"

const Schema = mongoose.Schema;

const contactSchema = new Schema(
  {
    
    nombre: {type: String, required: true},
    telefono: {type: String, required: true, unique:true},
    pais: {type: String, required: false, default: ""},
    //hora_actual: {type: String, required: false},

  },
  { timestamps: true }
);



//VALIDACIONES


//MIDDLEWARES----------------------------


export type ContactModelType = mongoose.Document & Omit<ContactDB, "id">;

export default mongoose.model<ContactModelType>("Contact", contactSchema);

