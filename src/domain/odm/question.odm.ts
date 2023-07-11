import { Question } from "../entities/question-entity";

async function getCurrentVersionQuestions(): Promise<any> {
  try {
    const questions = await Question.find().populate("category");

    const max: any = questions.reduce((a, b): any => {
      return a.version > b.version ? a.version : b.version;
    });

    const lastVersionQuestions = questions.filter((question) => question?.version === max);

    return lastVersionQuestions;
  } catch (error) {
    console.error("Error while retrieving questions: ", error);
    throw error;
  }
}

export const questionOdm = {
  getCurrentVersionQuestions,
};
