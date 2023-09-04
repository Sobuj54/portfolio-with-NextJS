import React from "react";

const Details = ({ title, description }) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[70%] mx-auto flex flex-col items-center justify-between">
      <div>
        <h3 className="font-bold text-2xl text-primary">{title}</h3>
        <p className="font-medium text-dark w-full mt-3">{description}</p>
      </div>
    </li>
  );
};

// this is the parent component
const SkillDetails = () => {
  return (
    <div className="my-64">
      <h2 className="mb-24 font-bold text-6xl w-full text-center">
        Skills Detail
      </h2>

      <div className="w-[75%] mx-auto relative">
        {/* front end */}
        <h3 className="text-2xl font-semibold w-[70%] mx-auto mb-10">
          Front-End Development
        </h3>
        <ul>
          {/* html */}
          <Details
            title="HTML5"
            description="Proficient in creating structured and semantically correct web pages using HTML5, ensuring accessibility and SEO best practices."></Details>

          {/* css */}
          <Details
            title="CSS3"
            description="Strong command of CSS3 for styling web content, including layout design, animations, and responsiveness across various devices and screen sizes."></Details>

          {/* Tailwind CSS */}
          <Details
            title="Tailwind CSS"
            description="Proficient in using the utility-first CSS framework, Tailwind CSS, for rapid and efficient styling of web applications, including responsive design and customization."></Details>

          {/* js */}
          <Details
            title="JavaScript"
            description=" Proficient in using JavaScript to add interactivity and functionality to web pages, including event handling, DOM manipulation, and AJAX requests."></Details>

          {/* React.js */}
          <Details
            title="React.js"
            description="Skilled in building single-page applications (SPAs) and user interfaces using React.js, including state management, component composition, and integration with APIs."></Details>
        </ul>
      </div>
    </div>
  );
};

export default SkillDetails;
