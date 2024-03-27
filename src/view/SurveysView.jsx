import React, { useRef, useState } from "react";
import PageComponent from "../core/PageComponent";
import { MdAddAPhoto } from "react-icons/md";
import TButton from "../core/TButton";
import axiosClient from "../axiosClient";

export default function SurveysView() {
  const imageRef = useRef();
  const [survey, setSurvey] = useState({
    title: "",
    slug: "",
    status: false,
    discription: "",
    image: null,
    image_url: null,
    expire_date: "",
    questions: [],
  });

  const onImageChoose = (ev) => {
    const file = ev.target.files[0];
    const reader = new FileReader;
    reader.onload = (e) => {
      setSurvey({
        ...survey,
        image: file,
        image_url: e.target.result,
      });
    }
    reader.readAsDataURL(file);
  };

  const onSurveySubmit = (ev) => {
    ev.preventDefault();
    axiosClient
      .post("survey", {
          title: "talha",
          slug: 'huhefuh',
          status: true,
          discription: "lorem ipsu,",
          image: 'fuie',
          image_url: 'ebjkgsre',
          expire_date: "",
          questions: [],
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <PageComponent heading="Create New Survey">
      <form onSubmit={onSurveySubmit} method="POST">
        <div className="shadow sm:overflew-hidden sm:rounded">
          <div className="space-y-6 bg-white px-6 py-6 sm:p-6">
            {/* image */}
            <div>
              <label className="block font-medium text-sm text-gray-700">
                Photo
              </label>
              <div className="mt-1 flex items-center">
                {survey.image_url ? (
                  <img
                    src={survey.image_url}
                    className="w-32 h-32 object-cover"
                  />
                ) : (
                  <span className="flex justify-center items-center overflow-hidden h-12 w-12 text-gray-400 bg-gray-100 rounded-full ">
                    <MdAddAPhoto className="w-8 h-8" />
                  </span>
                )}
                <button
                  type="button"
                  className="relative ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-6 text-gray-700 shadow-sm hover:bg-gray-50 hover:cursor-pointer  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <input
                    type="file"
                    name="imageFile"
                    className="absolute top-0 right-0 bottom-0 left-0 opacity-0 hover:cursor-pointer "
                    ref={imageRef}
                    onChange={onImageChoose}
                  />
                  Change
                </button>
              </div>
            </div>
            {/* image */}

            {/* title */}
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="title"
                className="text-sm font-medium text-gray-700"
              >
                Survey Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                onChange={(ev) =>
                  setSurvey({ ...survey, title: ev.target.value })
                }
                value={survey.title}
                placeholder="Survey Title"
                className="bg-gray-100 mt-1 block w-full rounded-md shadow-sm focus:ring-2 focus:offset-ring-2 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            {/* title */}

            {/* Discription */}
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="Discription"
                className="text-sm font-medium text=gray-700"
              >
                Survey Discription
              </label>
              <textarea
                type="text"
                name="discription"
                id="discription"
                onChange={(ev) =>
                  setSurvey({ ...survey, discription: ev.target.value })
                }
                value={survey.discription}
                placeholder="Survey Title"
                className="bg-gray-100 mt-1 w-full rounded-md shadow-sm focus:ring-2 focus:offset-ring-2 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            {/* Discription */}

            {/* expire_date */}
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="expire_date"
                className=" text-sm font-medium text=gray-700"
              >
                Expire Date
              </label>
              <input
                type="date"
                name="expire_date"
                id="expire_date"
                onChange={(ev) =>
                  setSurvey({ ...survey, expire_date: ev.target.value })
                }
                value={survey.expire_date}
                placeholder="Survey Title"
                className="bg-gray-100 mt-1 w-full rounded-md shadow-sm focus:ring-2 focus:offset-ring-2 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            {/* expire_date */}

            {/* Active */}
            <div className="flex items-start">
              <div className="flex h-5 items-center">
                <input
                  type="checkbox"
                  name="status"
                  id="status"
                  checked={survey.status}
                  onChange={(ev) =>
                    setSurvey({ ...survey, status: ev.target.value })
                  }
                  value={survey.status}
                  className="h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
              </div>
              <div className="ml-3 text-sm ">
                <label
                  htmlFor="comments"
                  className="font-medium text-gray-700 "
                >
                  Active
                </label>
                <p className="text-gray-500">
                  whether to make survey publicity available
                </p>
              </div>
            </div>
            {/* Active */}

            {/* button */}
            <div className="bg-gray-50 px-6 py-3 text-right sm:px-6">
              <TButton>Save</TButton>
            </div>
            {/* button */}
          </div>
        </div>
      </form>
    </PageComponent>
  );
}
