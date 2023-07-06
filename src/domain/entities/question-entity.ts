/**
 * @swagger
 * components:
 *   schemas:
 *     Response:
 *       type: object
 *       required:
 *         - firstName
 *         - lastName
 *         - email
 *         - password
 *         - rol
 *       properties:
 *         _id:
 *           type: string
 *           description: ID del usuario.
 *         firstName:
 *           type: string
 *           description: Nombre del usuario.
 *           minLength: 3
 *           maxLength: 22
 *         lastName:
 *           type: string
 *           description: Apellido del usuario.
 *           minLength: 3
 *           maxLength: 22
 *         email:
 *           type: string
 *           description: Email del usuario.
 *           format: email
 *         password:
 *           type: string
 *           description: Contraseña del usuario.
 *           minLength: 8
 *         rol:
 *           type: string
 *           description: Rol del usuario.
 *           enum:
 *             - PLAYER
 *             - MANAGER
 *             - ADMIN
 *         team:
 *           type: string
 *           description: ID del equipo al que pertenece el usuario.
 *         image:
 *           type: string
 *           description: URL de la imagen del usuario.
 *       example:
 *         _id: 60c84e71ebeb8f001ff60999
 *         firstName: John
 *         lastName: Doe
 *         email: john.doe@example.com
 *         password: [hidden]
 *         rol: PLAYER
 *         team: 60c84e71ebeb8f001ff60998
 *         image: https://example.com/johndoe.png
 */

import mongoose, { Document } from "mongoose";

const Schema = mongoose.Schema;

export interface IQuestionCreate {
  text: string;
  date: Date;
}

const questionSchema = new Schema<IQuestionCreate>(
  {
    text: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: false,
    },
  },
  { timestamps: true } // Cada vez que se modifique un documento refleja la hora y fecha de modificación
);

export type IQuestion = IQuestionCreate & Document;
export const Question = mongoose.model<IQuestionCreate>("Question", questionSchema);
