import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import navbarbg from "../assets/navbarbg.png";
import toast, { Toaster } from "react-hot-toast";

export default function ContactUs() {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      schoolName: "",
      email: "",
      phone: "",
      state: "",
      city: "",
      teacherCount: "",
      source: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("First Name is required"),
      lastname: Yup.string().required("Last Name is required"),
      schoolName: Yup.string().required("School Name is required"),
      // email: Yup.string().email("Invalid email").required("Email is required"),
      phone: Yup.string()
        .matches(
          /^[6-9]\d{9}$/,
          "Phone must start with 6-9 and be 10 digits long"
        )
        .required("Phone is required"),
      state: Yup.string().required("State is required"),
      city: Yup.string().required("City is required"),
      // teacherCount: Yup.string().required("Number of teachers is required"),
      // source: Yup.string().required("Source is required"),
      // message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        // Remove fields with empty values
        const filteredValues = Object.fromEntries(
          Object.entries(values).filter(([_, value]) => value !== "")
        );
        const response = await axios.post(
          "http://localhost:4000/customer-support/query",
          filteredValues
        );

        if (response?.data?.statusCode === 200) {
          toast.success(response?.data?.msg);
          resetForm();
        } else if (response?.data?.statusCode === 500) {
          toast.error(e);
        }
      } catch (e) {
        toast.error(e?.response?.data?.message);
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
        maxLength={name === "phone" ? 10 : ""}
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
        className="w-full h-[100px] sm:h-[150px] absolute top-0 object-cover"
      />
      <Toaster />
      {/* Main Container */}
      <div className="mt-[40px] sm:mt-[72px] p-4 sm:p-10 flex flex-col md:flex-row">
        {/* Text Section */}
        <div className="px-2 sm:px-[32px] lg:px-[46px] w-full md:w-5/12 text-center md:text-left">
          <div className="text-[36px] md:text-[46px] font-gilroy leading-[1.2]">
            Have questions or need assistance?
          </div>
          <div className="mt-4 text-[18px] sm:text-[20px] font-roboto-regular">
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
                    "firstname",
                    "First Name",
                    "text",
                    "First Name",
                    "imp"
                  )}
                </div>
                <div className="w-full sm:w-1/2 px-2">
                  {renderInput(
                    "lastname",
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
                    "teacherCount",
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
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
