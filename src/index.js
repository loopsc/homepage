import "./styles.css";
import createProjectCard from "./project-card";
import { projects } from "./projects-db";

const projectContainer = document.querySelector(".projects-container");

projects.forEach((project) => {
    const card = createProjectCard(
        project.screenshot,
        project.title,
        project.description,
        project.link
    );
    projectContainer.append(card);
});
