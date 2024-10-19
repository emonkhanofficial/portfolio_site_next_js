"use client";
import {
  FaHtml5, 
  FaCss3, 
  FaJs, 
  FaReact,
  FaFigma, 
  FaNodeJs 
  } from 'react-icons/fa';

import {SiTailwindcss,SiNodedotjs,} from 'react-icons/si';

// About data
const about = {
  title:"About me",
  description: 
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, reiciendis praesentium dolorum magnam ",
  info:[
    {
      fieldName:"Name",
      FieldValue: "Md.Emon Khan",
    },
    {
      fieldName:"Phone",
      FieldValue: "(+880) 13 27 17 62 12",
    },
    {
      fieldName:"Experience",
      FieldValue: "4+ Years",
    },
    {
      fieldName:"Skype",
      FieldValue: "emonkhan_bd",
    },
    {
      fieldName:"Nationality",
      FieldValue: "Bangladesh",
    },
    {
      fieldName:"Email",
      FieldValue: "emonkhan2k23@gmail.com",
    },
    {
      fieldName:"Freelance",
      FieldValue: "Available",
    },
    {
      fieldName:"Languages",
      FieldValue: "English,Bangla",
    },
  ],
};

// experience data

const experience = {
  icon: "/public/assets/resume/badge.svg",
  title: "My Experience",
  description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, reiciendis praesentium dolorum magnam ",

  items: [
    {
      company: "CodersTrust Bangladesh",
      position: "Full Stack Developer",
      duration: "2024 - Present",

    },
    {
      company: "Creative IT Institute",
      position: "Front-End Developer Intern",
      duration: "Summer 2023",

    },
    {
      company: "E-commerce Startup",
      position: "Freelance Web Developer",
      duration: "2021 - 2022",

    },
    {
      company: "Soft-Tech IT Institute",
      position: "Teaching Assistant",
      duration: "2020 - 2021",

    },
    {
      company: "Digital Agency",
      position: "UI/UX Designer",
      duration: "2019 - 2020",

    },
    {
      company: "Software Development Farm",
      position: "Junior Developer",
      duration: "2018 - 2019",

    },
  ],

};


// education data

const education = {
  icon: "/public/assets/resume/cap.svg",
  title: "My Education",
  description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, reiciendis praesentium dolorum magnam ",

  items: [
    {
      institution: "Online Course Platform",
      Degree: "Full-Stack Web Development Boopcamp",
      duration: "2024",

    },
    {
      institution: "CodersTrust Bangladesh",
      Degree: "Full-End Track",
      duration: "2023",

    },
    {
      institution: "Online Course",
      Degree: "Programming Course",
      duration: "2022-2023",

    },
    {
      institution: "Design School",
      Degree: "Deploma in Graphic Design",
      duration: "2018-2021",

    },
    {
      institution: "Community Collage",
      Degree: "Associate Degree in Computer Science",
      duration: "2016-2018",

    },
    
      
  ],

};

const Resume = () => {
  return <div>Resume page</div>;

};

export default Resume;
