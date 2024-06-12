import React from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";
import { Icon } from '@iconify/react';

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">

          <p className="dev-icons-head">Languages</p>
          {skillsSection.langSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >

                <Icon className="iconify" icon={skills.fontAwesomeClassname} />
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
        <ul className="dev-icons">
          <p className="dev-icons-head">Frameworks & Librarie</p>
          {skillsSection.frameworksSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <Icon icon={skills.fontAwesomeClassname} />
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
        <ul className="dev-icons">
          <p className="dev-icons-head">IDE & Tools</p>
          {skillsSection.develperTools.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <span

                  data-icon={skills.fontAwesomeClassname}
                  data-inline="false"
                ></span>

                <Icon className="iconify" icon={skills.fontAwesomeClassname} />
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>

      </div>
    </div>
  );
}
