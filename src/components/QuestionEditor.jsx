import { useContext, useEffect, useState } from "react";
import Context from "../ContextProvider";
import { FaCirclePlus, FaRegTrashCan } from "react-icons/fa6";

function QuestionEditor({
  index,
  question,
  questionChange,
  addQuestion,
  deleteQuestion,
}) {
  const [model, setModel] = useState({...question});
  const { questionTypes } = useContext(Context);

  useEffect(() => questionChange(model), [model]);

  // function upperCaseFirstLetter(str) {
  //   return str.charAt[0].toUpperCase() + str.slice(1);
  // }

  return (
    <>
      <div className="flex justify-between mb-3">
        <h4>
          {index + 1} {model.question}
        </h4>
        <button
          type="button"
          className="flex items-center text-xs py-1 px-3 mr-2 rounded-sm text-white bg-gray-600 hover-bg-gray-700"
          onClick={addQuestion}
        >
          <FaCirclePlus className="w-4 mr-2" />
          Add
        </button>

        <button
          type="button"
          className="flex items-center text-xs py-1 px-3 mr-2 rounded-sm text-white bg-red-500 hover-bg-red-600"
          onClick={deleteQuestion}
        >
          <FaRegTrashCan className="w-4 mr-2" />
          Delete
        </button>
        <div className="flex gap-3 justify-between mb-3">
          {/* Question Text */}
          <div className="flex-1">
            <label
              htmlFor="question"
              className="block text-sm font-medium text-gray-700"
            >
              Question
            </label>
            <input
              type="text"
              name="question"
              id="question"
              value={model.question}
              onChange={(ev) =>
                setModel({ ...model, question: ev.target.value })
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          {/* Question Text */}

          {/* Question Type */}
          <div>
            <label
              htmlFor="questionType"
              className="block text-sm font-medium text-gray-700"
            >
              Question Type
            </label>
            <select
              name="questionType"
              id="questionType"
              onChange={(ev) => setModel({ ...model, type: ev.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm focus:outline-none"
            >
              {questionTypes.map((type) => (
                <option value={type} selected={model.type == type}>
                  {/* {upperCaseFirstLetter(type)} */}
                </option>
              ))}
            </select>
          </div>
          {/* Question Type */}

          {/* Discription */}
          <div>
            <label
              htmlFor="questionDescription"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              name="questionDescription"
              id="questionDescription"
              value={model.Description}
              onChange={(ev) =>
                setModel({ ...model, Description: ev.target.value })
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          {/* Discription */}
        </div>
      </div>
    </>
  );
}

export default QuestionEditor;
