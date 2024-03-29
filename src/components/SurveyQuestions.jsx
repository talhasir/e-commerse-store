import { useEffect, useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { v4 as uuidv4 } from "uuid";
import QuestionEditor from "./QuestionEditor";

function SurveyQuestions({ survey, onSurveyUpdate }) {
  const [model, setModel] = useState(survey);

  function addQuestion() {
    setModel({
      ...model,
      questions: [
        ...model.questions,
        {
          id: uuidv4(),
          type: "text",
          question: "",
          description: "",
          data: {},
        },
      ],
    });
    console.log(model.questions);
  }

  function questionChange(question) {
    if (!question) return;

    const newQuestions = model?.question?.map((q) => {
      if (q.id == question.id) {
        return { ...question };
      }
    });
    setModel({
      ...model,
      questions: newQuestions,
    });
  }

  function deleteQuestion(question) {
    if (!question) return;

    const newQuestions = model?.question?.filter((q) => {
      return q.id !== question.id;
    });
    setModel({
      ...model,
      questions: newQuestions,
    });
  }

  useEffect(() => onSurveyUpdate(model), [model]);
  return (
    <>
      <div className="flex justify-between">
        <h3 className="text-2xl font-bold">Questions</h3>
        <button
          type="button"
          className="flex items-center py-1 px-4 rounded-sm text-white bg-gray-600 hover-bg-gray-700"
          onClick={addQuestion}
        >
          <FaCirclePlus className="w-4 mr-2" />
          Add Question
        </button>
      </div>

      {model.questions?.length? (
        model.questions.map((q, ind) => {
          return (
            <QuestionEditor
              key={q.id}
              index={ind}
              question={q}
              questionChange={questionChange}
              addQuestion={addQuestion}
              deleteQuestion={deleteQuestion}
            />
          );
        })
      ) : (
        <div className="text-gray-400 text-center py-4">
          You dont have any questions created
        </div>
      )}
    </>
  );
}

export default SurveyQuestions;
