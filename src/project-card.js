export default function createProjectCard(imageLink, title, desc, link) {
    const ghIconLink =
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg";


    const project = document.createElement("div");
    project.classList.add("project")

    const coverImage = document.createElement("img");
    coverImage.classList.add("screenshot");
    coverImage.src = imageLink;

    const projectDetails = document.createElement("div");
    projectDetails.classList.add("project-details");

    const headingsContainer = document.createElement("div");
    headingsContainer.classList.add("project-headings");

    const projectName = document.createElement("h2");
    projectName.textContent = title;

    const ghLink = document.createElement("a");
    ghLink.href = link;
    ghLink.target = "_blank";
    ghLink.rel = "noopener noreferrer";

    const ghIcon = document.createElement("img");
    ghIcon.src = ghIconLink;
    ghIcon.alt = "GitHub Icon";
    ghIcon.classList.add("link-icon")

    ghLink.appendChild(ghIcon);

    headingsContainer.append(projectName, ghLink);

    const projectDescContainer = document.createElement("div");
    projectDescContainer.classList.add("project-desc");
    const projectDesc = document.createElement("p");
    projectDesc.textContent = desc

    projectDescContainer.appendChild(projectDesc)

    projectDetails.append(headingsContainer,projectDescContainer);

    project.append(coverImage,projectDetails);

    return project;
}
