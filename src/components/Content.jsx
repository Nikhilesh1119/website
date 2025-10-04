import React, { useState } from "react";
import ResponsiveCards from "./ResponsiveCards";

import logo from "../assets/logo.png";
import section1 from "../assets/section1.png";
import underline from "../assets/underline.png";
import attendance from "../assets/attendance.png";
import attendance_m from "../assets/attendance_m.png";

import build from "../assets/build.png";
import manage from "../assets/manage.png";
import analitic from "../assets/analitic.png";
import buildBlur from "../assets/buildBlur.png";
import manageBlur from "../assets/manageBlur.png";
import analiticBlur from "../assets/analiticBlur.png";

import bgBuild from "../assets/bgBuild.png";
import bgManage from "../assets/bgManage.png";
import bgAnalytics from "../assets/bgAnalytics.png";

import build1 from "../assets/build1.png";
import build2 from "../assets/build2.png";
import build3 from "../assets/build3.png";
import manage1 from "../assets/manage1.png";
import manage2 from "../assets/manage2.png";
import manage3 from "../assets/manage3.png";
import analytic1 from "../assets/analytic1.png";
import analytic2 from "../assets/analytic2.png";
import analytic3 from "../assets/analytic3.png";

import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import ResponsiveCardsMobile from "./ResponsiveCardMobile";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HREF } from "../services";

export default function Content() {
  const [selectedOption, setSelectedOption] = useState("build");
  const items = [
    {
      key: "build",
      label: "Build",
      description:
        "Easily create and organize class structures, schedules, and student profiles in one place",
      icon: build,
      blurIcon: buildBlur,
    },
    {
      key: "manage",
      label: "Manage",
      description:
        "Streamline operations across classes, students, and attendance with ease.",
      icon: manage,
      blurIcon: manageBlur,
    },
    {
      key: "analytic",
      label: "Analytics",
      description:
        "Access instant insights into attendance patterns and class trends.",
      icon: analitic,
      blurIcon: analiticBlur,
    },
  ];

  const optionsData = {
    build: {
      bgImage: bgBuild,
      views: [
        {
          icon: build1,
          title: "Create Classes",
          description:
            "Easily set up classes, assign teachers, and manage schedules.",
        },
        {
          icon: build2,
          title: "Set Schedules & Holidays",
          description: "Easily mark holidays and events on the calendar.",
        },
        {
          icon: build3,
          title: "Manage Student Profiles",
          description: "Store and update student details with ease.",
        },
      ],
    },
    manage: {
      bgImage: bgManage,
      views: [
        {
          icon: manage1,
          title: "Organize Classes",
          description: "Set up and manage classes easily.",
        },
        {
          icon: manage2,
          title: "Track Attendance",
          description: "Mark and view attendance in real time.",
        },
        {
          icon: manage3,
          title: "Update Student Records",
          description: "Keep student details up to date.",
        },
      ],
    },
    analytic: {
      bgImage: bgAnalytics,
      views: [
        {
          icon: analytic1,
          title: "Attendance at a Glance",
          description: "See daily, weekly, and monthly attendance patterns.",
        },
        {
          icon: analytic2,
          title: "Class-Wise Insights",
          description: "Get real-time attendance details for each class.",
        },
        {
          icon: analytic3,
          title: "Visual Reports",
          description: "Access simple charts to track attendance patterns",
        },
      ],
    },
  };

  const { bgImage, views } = optionsData[selectedOption];

  const tiles = [
    {
      image: image1,
      heading: "Centralized Data",
      paragraph:
        "Store and manage all your data in one organized hub, making it easy to access and update.",
    },
    {
      image: image2,
      heading: "Secure",
      paragraph:
        "Protect your data with enterprise-grade security, ensuring it stays safe and compliant with the highest standards.",
    },
    {
      image: image3,
      heading: "Scalable",
      paragraph:
        "Our platform grows with your school, easily handling more users and data as your needs expand.",
    },
    {
      image: image4,
      heading: "Cloud-Based",
      paragraph:
        "Access all your important information from anywhere, at any time, on any device, with no hassle.",
    },
    {
      image: image5,
      heading: "Cost-Effective",
      paragraph:
        "Get advanced features at a fraction of the cost, delivering great value without compromising quality.",
    },
    {
      image: image6,
      heading: "User-Friendly",
      paragraph:
        "Enjoy a simple and intuitive interface that makes complex tasks easy for everyone to use.",
    },
  ];

  return (
    <div className="select-none">
      {/* Intro */}
      <section>
        <div className="mt-12 flex flex-col justify-center items-center px-4">
          <div className="relative text-center">
            <p className="text-[48px] sm:text-[72px] font-gilroy w-full sm:w-[510px] lg:w-[810px] sm:leading-[79px] leading-[50px]">
              One Platform for Your School
            </p>
            <motion.img
              initial={{ width: 0 }}
              whileInView={{ width: "70%" }}
              transition={{ ease: [0.5, 1, 0.89, 1], duration: 1 }}
              src={underline}
              alt=""
              className="absolute sm:w-[50%] w-[70%] h-[8px] sm:h-[16px] left-1/2 transform -translate-x-1/2 sm:top-[70px] top-[46px]"
            />
          </div>
          <p className="text-[20px] sm:text-[24px] text-[#31373D] font-roboto-regular w-full sm:w-[548px] text-center my-8">
            Easily manage classes, track attendance, and get real-time insights
            in one simple platform.
          </p>
          {/* <div className="flex w-[280px] justify-around">
            <a
              href={HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-base bg-[#0F4189] hover:bg-blue-800 px-4 py-2 rounded-xl font-roboto-medium mt-2 text-center"
            >
              Start for Free
            </a>
            <Link
              to="/contact"
              className="text-black text-base bg-[#ffffff] px-4 py-2 rounded-xl border border-[#edeef0] hover:text-[#FF793F] font-roboto-medium mt-2 text-center"
            >
              Talk to sales
            </Link>
          </div> */}
        </div>
        <img
          src={section1}
          alt="School platform overview"
          className="w-full px-4 sm:px-24"
        />
      </section>
      {/* Key Features */}
      <section data-scroll data-scroll-speed="-.1">
        <div className="mt-16 flex flex-col justify-center items-center px-4">
          <div className="relative text-center">
            <p className="text-[32px] sm:text-[52px] font-gilroy w-full sm:w-[510px] lg:w-[810px] sm:leading-[58px] leading-[36px]">
              An Educational Administration created to be your own.
            </p>
            <motion.img
              initial={{ width: 0 }}
              whileInView={{ width: "60%" }}
              transition={{ ease: [0.5, 1, 0.89, 1], duration: 1 }}
              src={underline}
              alt=""
              className="absolute sm:w-[70%] w-[50%] h-[8px] sm:h-[16px] left-1/2 transform -translate-x-1/2 sm:top-[55px] top-[32px]"
            />
          </div>
          <p className="text-[18px] sm:text-[22px] text-[#31373D] font-roboto-regular w-full sm:w-[548px] text-center my-8">
            Tweak anything and everything to ensure our platform fits your
            school, not the other way around.
          </p>
        </div>
        <div className="w-full px-4 lg:px-24 max-md:hidden">
          <div className="px-4 md:px-[57px] py-3 bg-[#F4F5F6] rounded-[20px]">
            <div className="px-4 md:px-[40px] py-3 sm:py-[36px] bg-white rounded-[20px]">
              <ResponsiveCards
                bgImage={bgImage}
                items={items}
                views={views}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
              />
            </div>
          </div>
        </div>
        <div className="w-full px-4 lg:px-24 md:hidden">
          <ResponsiveCardsMobile
            bgImage={bgImage}
            items={items}
            views={views}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </div>
      </section>
      {/* Attendance Section */}
      <section data-scroll data-scroll-speed="-.1">
        <div className="mt-32 flex flex-col justify-center items-center px-5">
          <div className="relative text-center">
            <p className="text-[32px] sm:text-[52px] px-5 font-gilroy w-full sm:w-[510px] lg:w-[720px] sm:leading-[58px] leading-[36px]">
              Empower Teachers with Smart Attendance Tools
            </p>
            <motion.img
              initial={{ width: 0 }}
              whileInView={{ width: "70%" }}
              transition={{ ease: [0.5, 1, 0.89, 1], duration: 1 }}
              src={underline}
              alt=""
              className="absolute sm:w-[50%] w-[70%] h-[8px] sm:h-[16px] left-1/2 transform -translate-x-1/2 sm:top-[112px] top-[104px]"
            />
          </div>
          <p className="text-[18px] sm:text-[22px] text-[#31373D] font-roboto-regular w-full sm:w-[548px] text-center my-6 sm:my-8">
            Effortless attendance tracking and real-time insights keep you
            organized and focused on your students.
          </p>
          <div className="w-full max-w-[1138px] border border-[#D3D5D9] sm:h-[504px] h-auto sm:pl-10 pt-6 sm:pt-10 rounded-[20px] flex flex-col sm:flex-row justify-between sm:space-x-6">
            <p className="w-full sm:w-[382px] px-5 text-sm sm:text-lg text-[#31373D] font-roboto-regular text-center sm:text-left mb-4 sm:mb-0">
              Quickly
              <b> mark attendance, access student data, and monitor trends </b>
              with just a few taps, all in one intuitive app.
            </p>
            <div className="w-full sm:w-[70%] h-[300px] sm:h-auto rounded-[20px] overflow-hidden">
              {/* <picture>
                <source media="(max-width: 640px)" srcSet={attendance_m} /> */}
              <img
                src={attendance_m}
                alt="Attendance illustration"
                className="w-full h-full object-cover"
              />
              {/* </picture> */}
            </div>
          </div>
        </div>
      </section>
      {/* Product Grids */}
      <section>
        <div className="mt-24 flex flex-col justify-center items-center px-4">
          <div className="relative text-center">
            <p className="text-[32px] sm:text-[52px] font-gilroy w-full sm:w-[510px] lg:w-[720px] sm:leading-[58px] leading-[36px]">
              What Makes Our Product Stand Out
            </p>

            <motion.img
              initial={{ width: 0 }}
              whileInView={{ width: "60%" }}
              transition={{ ease: [0.5, 1, 0.89, 1], duration: 1 }}
              src={underline}
              alt=""
              className="absolute sm:w-[50%] w-[70%] h-[8px] sm:h-[16px] left-1/2 transform -translate-x-1/2 sm:top-[52px] top-[32px]"
            />
          </div>
          <p className="text-[18px] sm:text-[22px] text-[#31373D] font-roboto-regular w-full sm:w-[548px] text-center my-6 sm:my-4">
            A unified platform to centralize, secure, and simplify educational
            operations.duration
          </p>

          <div className="sm:px-[52px] md:px-[92px] sm:py-[78px] px-[20px] py-[28px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 p-4">
            {tiles.map((data, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded-lg sm:shadow-[0_4px_10px_rgba(0,0,0,0.1)] flex flex-col items-center sm:items-start transition-all -300 hover:scale-105"
              >
                <img
                  src={data.image}
                  alt={`Tile ${index + 1}`}
                  className="w-16 h-16"
                />
                <h2 className="text-[18px] font-semibold my-2 sm:my-[8px]">
                  {data.heading}
                </h2>
                <p className="text-[16px] text-gray-600 text-center sm:text-left">
                  {data.paragraph}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Support Section */}
      <section className="w-full h-auto sm:h-[300px] px-4 sm:px-[32px] md:px-[92px] py-10 bg-[#0F4189] flex flex-col sm:flex-row justify-between items-center space-y-5 sm:space-y-0">
        <div className="w-full sm:w-[640px] text-center sm:text-left">
          <p className="text-[32px] sm:text-[32px] font-gilroy text-[#92B9F0] leading-[36px]">
            Dedicated Support,
            <span className="text-white"> When You Need It</span>
          </p>
          <p className="w-full sm:w-[400px] md:w-[450px] font-roboto-regular text-[16px] sm:text-[20px] text-white mt-[24px]">
            Our support team is always available to assist with any questions or
            issues, ensuring you get the most out of our platform.
          </p>
          {/* <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0 mt-[24px] justify-center sm:justify-start">
            <a
              href={HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-base bg-[#1D5CB7] hover:bg-blue-800 px-4 py-2 rounded-xl font-roboto-medium text-center"
            >
              Start for Free
            </a>
            <Link
              to="/contact"
              className="text-white text-base bg-[#0F4189] hover:border-[#FFFFFF] px-4 py-2 rounded-xl border border-[#538BF3] font-roboto-medium text-center"
            >
              Talk to Sales
            </Link>
          </div> */}
        </div>
        <img src={logo} alt="" className="size-[180px]" />
      </section>
    </div>
  );
}
