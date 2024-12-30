import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import navbarbg from "../assets/navbarbg.png";

export default function ContactUs() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      schoolName: "",
      email: "",
      phone: "",
      state: "",
      city: "",
      teachersCount: "",
      source: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      schoolName: Yup.string().required("School Name is required"),
      // email: Yup.string().email("Invalid email").required("Email is required"),
      phone: Yup.string()
        .matches(/^\d+$/, "Phone must contain only numbers")
        .required("Phone is required"),
      state: Yup.string().required("State is required"),
      city: Yup.string().required("City is required"),
      // teachersCount: Yup.string().required("Number of teachers is required"),
      // source: Yup.string().required("Source is required"),
      // message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values) => {
      try {
        // const response = await axios.post("/", values);
        console.log(response);
      } catch (e) {
        console.error(e);
      }
    },
  });

  const renderInput = (
    name,
    label,
    type = "text",
    placeholder = "",
    imp = ""
  ) => (
    <div className="mb-[35px]">
      <p className="text-sm font-roboto-medium text-[#374151]">
        {label} {imp && <span className="text-red-500">*</span>}
      </p>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={`w-full border-b ${
          formik.touched[name] && formik.errors[name]
            ? "border-red-500"
            : "border-[#8D8D8D]"
        } font-roboto-medium outline-none text-sm`}
      />
      {formik.touched[name] && formik.errors[name] && (
        <p className="text-red-500 text-xs mt-1">{formik.errors[name]}</p>
      )}
    </div>
  );

  return (
    <>
      {/* Navbar Background */}
      <img
        src={navbarbg}
        alt="Background"
        className="w-full h-[100px] sm:h-[200px] absolute top-0 object-cover"
      />

      {/* Main Container */}
      <div className="mt-[40px] sm:mt-[96px] p-4 sm:p-10 flex flex-col md:flex-row">
        {/* Text Section */}
        <div className="px-2 sm:px-[40px] lg:px-[70px] w-full md:w-5/12 text-center md:text-left">
          <div className="text-[36px] md:text-[46px] font-gilroy leading-[1.2]">
            Have questions or need assistance?
          </div>
          <div className="mt-4 px-2 text-[20px] sm:text-[24px] font-roboto-regular">
            We're here to help—reach out to us today!
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-7/12 mt-6 md:mt-0">
          <div className="p-4 sm:p-6 mx-auto">
            <form onSubmit={formik.handleSubmit}>
              <div className="flex flex-wrap -mx-2">
                <div className="w-full sm:w-1/2 px-2">
                  {renderInput(
                    "firstName",
                    "First Name",
                    "text",
                    "First Name",
                    "imp"
                  )}
                </div>
                <div className="w-full sm:w-1/2 px-2">
                  {renderInput(
                    "lastName",
                    "Last Name",
                    "text",
                    "Last Name",
                    "imp"
                  )}
                </div>
              </div>
              {renderInput(
                "schoolName",
                "School Name",
                "text",
                "School Name",
                "imp"
              )}
              <div className="flex flex-wrap -mx-2">
                <div className="w-full sm:w-1/2 px-2">
                  {renderInput("email", "Email", "email", "Email")}
                </div>
                <div className="w-full sm:w-1/2 px-2">
                  {renderInput("phone", "Phone Number", "text", "Phone", "imp")}
                </div>
              </div>
              <div className="flex flex-wrap -mx-2">
                <div className="w-full sm:w-1/2 px-2">
                  {renderInput("state", "State", "text", "State", "imp")}
                </div>
                <div className="w-full sm:w-1/2 px-2">
                  {renderInput("city", "City", "text", "City", "imp")}
                </div>
              </div>
              <div className="flex flex-wrap -mx-2">
                <div className="w-full sm:w-1/2 px-2">
                  {renderInput(
                    "teachersCount",
                    "No of Teachers",
                    "text",
                    "No. of Teachers"
                  )}
                </div>
                <div className="w-full sm:w-1/2 px-2">
                  {renderInput(
                    "source",
                    "How Did You Get to Know About Us?",
                    "text",
                    "Source"
                  )}
                </div>
              </div>
              {renderInput("message", "Message", "textarea", "Message")}
              <div className="flex justify-center md:justify-end">
                <button
                  type="submit"
                  className="text-base px-6 py-2 rounded-xl font-medium text-white bg-[#0F4189] hover:bg-blue-800"
                >
                  Start for Free
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
