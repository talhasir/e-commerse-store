import React, { useContext } from "react";
import PageComponent from "../core/PageComponent";
import Context from "../ContextProvider";
import Survey from "../components/Survey";
import TButton from "../core/TButton";
import { FaPlusCircle } from "react-icons/fa";

export default function Surveys() {
  const { surveys } = useContext(Context);
  return (
    <>
      <PageComponent
        heading="Surveys"
        button={
          <TButton color="green" to="/surveys/create">
            <FaPlusCircle className="h-6 w-6 mr-2"/> Create New Survey
          </TButton>
        }
      >
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 md:grid-cols-2 ">
          {surveys.map((survey) => (
            <Survey survey={survey} key={survey.id} />
          ))}
        </div>
      </PageComponent>
    </>
  );
}
