import { FaPencilAlt } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { FaTrash } from "react-icons/fa";
import TButton from "../core/TButton";

export default function Survey({ survey }) {
  return (
    <div className="flex flex-col lg:p-3 md:p-2 h-[450px]">
      <div className="w-full">
        <img
          src={survey.images}
          alt={survey.title}
          className="h-auto max-w-full"
        />
      </div>
      <h4 className="font-bold">{survey.title}</h4>
      <div className="mt-2">
        <span className="overflow-auto">{survey.description}</span>
      </div>
      <div className="mt-2 flex justify-between items-center">
        <div>
          <TButton to={`surveys/${survey.id}`}>
            <FaPencilAlt className="mr-2 w-4 h-4" />
            Edit
          </TButton>
        </div>
        <div className="flex items-center">
          <TButton href={`surveys/view/${survey.id}`} circle link>
            <GrView className=" w-5 h-5" />
          </TButton>
          <TButton to={`surveys/delete/${survey.id}`} circle link color="red">
            <FaTrash className=" w-5 h-5" />
          </TButton>
        </div>
      </div>
    </div>
  );
}
