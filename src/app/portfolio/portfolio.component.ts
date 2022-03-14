import { Component } from '@angular/core';
import { Project } from './Project';

@Component
({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent
{
  portfolio : Array<Project> =
  [
    {
      title: "Programmatic DOOH Ads",
      description: "A microservice-architectured full-stack web application that is intended to serve as a mediator between the Ad Publishers (SSPs) and the Bidder Channels (DSPs). This application performs operations such as bid conduction and ad play intimation.",
      technologies: ["Java", "Vert.x"],
      isIndividualContributor: false
    },
    {
      title: "Interns Portal",
      description: "A microservice-architectured full-stack web application which helps manage the Internship Program of Infosys. The application caters to Interns, Mentors, Team Leads and Administrators.",
      technologies: ["Java", "Spring Boot", "Angular", "Bootstrap", "MySQL"],
      isIndividualContributor: true
    },
    {
      title: "Evaluation Engine",
      description: "A microservice-architectured tool that fetches trainees' assessment scripts and evaluates them. Developed several modules including retrieval of question paper details from a different application via REST call, cloning of JUnit 5 based test cases project from GitHub, extracting and loading the trainee scripts, evaluating the scripts against the test cases and storing the results in the database.",
      technologies: ["Java", "Spring Boot", "MongoDB", "Apache POI"],
      isIndividualContributor: false
    },
    {
      title: "Verification Tool",
      description: "Helps trainees to verify their code to be accurate as per the requirements provided. Developed functionalities to verify a project structurally and logically. Added a module to view the commit history in case of a Git repository and the result of the test cases written in the project, in case of a Maven project. Also, added modules which evaluates the project against code coverage and quality, using JaCoCo and PMD.",
      technologies: ["Java", "Spring Boot", "Angular", "Tailwind CSS", "Git"],
      isIndividualContributor: true
    },
    {
      title: "Blue Book",
      description: "Helps manage several (question paper) projects along with their source code, test cases, and marks allocated. Modules include addition of a project by providing it's GitHub link, cloning of the project, executing the test cases, loading the test result and allocating marks against them, and storing the marks division in an SQL database.",
      technologies: ["Java", "Spring Boot", "Angular", "JGit", "MySQL"],
      isIndividualContributor: false
    },
    {
      title: "Cricket Bunny",
      description: "A web application that helps you to analyze the complete performance of the teams, by breaking down all the entities of a game. The analysis is made taking into consideration the past performances of the teams.",
      technologies: ["Java","Hibernate", "Angular JS", "Bootstrap", "MySQL"],
      isIndividualContributor: false
    }
  ];
}