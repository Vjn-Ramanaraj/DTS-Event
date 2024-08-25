/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import User from "../components/User";
import { RadioGroup } from "@headlessui/react";
import { Link } from "react-router-dom";
import { Client, Storage } from "appwrite";
import axios from "axios";
import { v4 as uuid } from "uuid";

function UserSelect() {
  const [selected, setSelected] = useState();
  const [customUser, setCustomUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [users, setUsers] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };
  useEffect(() => {
    console.log("hello");
    axios
      .get("http://localhost:5000/getUsers")
      .then((res) => {
        setUsers(res?.data);
        setSelected(res?.data[0]);
        setLoadingUsers(false);
      })
      .catch((e) => {
        console.error(e);
        setLoadingUsers(false);
      });
  }, []);
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const uploadingData = async (user, file) => {
    setLoading(true);
    try {
      const base64 = await convertBase64(file);

      // Example MongoDB registration endpoint (adjust as per your backend)
      await axios.post("http://localhost:5000/register", {
        id: user.id,
        name: user.name.split(".")[0],
        type: user.type,
        picture: base64,
      });

      console.log("Uploaded successfully to MongoDB");
      setCustomUser(user);
      setSelected(user);
      setLoading(false);
    } catch (error) {
      console.error("Error uploading data to MongoDB:", error);
      setLoading(false);
    }
      
    
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-[24px] w-[70%] mx-auto h-full md:flex-row">
        {/* login  */}
        <div className="w-full  h-full flex flex-col items-center justify-center ">
          <h1 className="font-poppins mb-[20px] mt-2 text-4xl font-extrabold text-indigo-700 ">
            {" "}
            Log In{" "}
          </h1>
          {loadingUsers && (
            <div className=" h-[200px] md:max-h-[380px] mb-[25px]  md:min-h-[380px]  p-2  flex flex-col items-center justify-evenly">
              <svg
                aria-hidden="true"
                role="status"
                className="inline mr-2 w-20 h-20 md:w-40 md:h-40 text-gray-100 animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="#a5b4fc"
                />
              </svg>
              <p className=" text-lg pb-1 md:text-2xl font-poppins text-indigo-400">
                Loading Users ...
              </p>
            </div>
          )}
          {!loadingUsers && (
            <div className=" h-[300px] md:max-h-[380px] mb-[25px]  md:min-h-[380px] overflow-y-scroll p-2 scroll-m-0 scrollbar-width: thin  flex flex-col items-center">
              <RadioGroup value={selected} onChange={setSelected}>
                <RadioGroup.Label className="sr-only">
                  Server size
                </RadioGroup.Label>
                <div className="space-y-4">
                  {users &&
                    users.map((account) => (
                      <User key={account.id} user={account} />
                    ))}
                  {customUser && (
                    <div className="relative">
                      <User
                        key={customUser.id}
                        user={customUser}
                        type="CUSTOM"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="text-indigo-800 w-6 h-6 absolute top-1/2 -translate-y-1/2 right-[-32px] cursor-pointer"
                        onClick={() => {
                          setCustomUser(null);
                          selected?.type === "CUSTOM" && setSelected(users[0]);
                        }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </RadioGroup>
            </div>
          )}
        </div>
        {/* register  */}
        <div className=" border-b-2 mt-5 border-slate-300 w-[350px] md:hidden"></div>
        {!loading && (
          <div className="w-full  h-full flex flex-col items-center justify-center">
            <h1 className="font-poppins mb-2  text-4xl font-extrabold text-indigo-700 ">
              {" "}
              Register
            </h1>
            {!customUser && (
              <div className="flex flex-col pt-2 items-center justify-center h-[100px] md:w-[80%]  md:min-h-[350px] mt-2">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-[350px] h-[120%] md:w-[350px] border-2  border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:border-indigo-200 hover:bg-gray-100"
                >
                  <div className="flex flex-col items-center justify-center md:h-[320px] md:w-[200px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-indigo-500 mb-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                      />
                    </svg>
                    <p className="font-semibold mb-2 text-sm text-gray-500 dark:text-gray-400">
                      Click to upload referral image
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      PNG, JPG or JPEG
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    className="hidden"
                    onChange={async (e) => {
                      const files = e.target.files;
                      if (files == null || files.length == 0) {
                        setErrorMessage("No files wait for import.");
                        return;
                      }
                      let file = files[0];
                      let name = file.name;
                      let suffixArr = name.split("."),
                        suffix = suffixArr[suffixArr.length - 1];
                      if (
                        suffix != "png" &&
                        suffix != "jpg" &&
                        suffix != "jpeg"
                      ) {
                        setErrorMessage("Only support png jpg or jpeg files.");
                        return;
                      }

                      const base64 = await convertBase64(file);

                      const user = {
                        id: "custom",
                        name: name,
                        type: "CUSTOM",
                        picture: base64,
                      };
                      await uploadingData(user, file);
                    }}
                  />
                </label>
                {errorMessage && (
                  <p className="text-red-500 text-xs mt-2">{errorMessage}</p>
                )}
              </div>
            )}
            {customUser && (
              <div className="w-full md:w-[80%]  h-[250px] md:min-h-[350px] flex items-center justify-center flex-col">
                <div className="flex flex-col items-center justify-center w-[100px]  h-[100px] md:mt-3 border-8 rounded-full  border-green-400">
                  <div className="text-grenn-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="#4ade80"
                    >
                      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                    </svg>
                  </div>
                </div>
                <p className=" text-xl text-center w-[120%] md:text-4xl mt-2  md:mt-10 font-poppins text-green-400">
                  {" "}
                  Registration Successful
                </p>
              </div>
            )}
            {!customUser && (
              <p className="font-poppins md:pt-2 text-[10px] w-[80%] text-center md:text-base">
                *please note: the name of image should be same as your name.{" "}
              </p>
            )}
          </div>
        )}
        {loading && (
          <div className="w-full  h-full flex flex-col items-center justify-center gap-10 md:gap-20">
            <svg
              aria-hidden="true"
              role="status"
              className="inline mr-2 w-20 h-20 md:w-40 md:h-40 text-gray-100 animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="#a5b4fc"
              />
            </svg>
            <p className=" text-lg pb-1 md:text-2xl font-poppins text-indigo-400">
              Registering new User...
            </p>
          </div>
        )}
      </div>
      <Link
        to="/login"
        state={{ account: selected }}
        className=" m-auto mb-4 pb-4 inline-flex items-center rounded-md bg-indigo-500 px-10 py-4  text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 w-fit"
      >
        Proceed
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="ml-1.5 h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
          />
        </svg>
      </Link>
      
    </>
  );
}

export default UserSelect;