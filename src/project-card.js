import newSiteIcon from "./assets/open-in-new.svg"

export default function createProjectCard(imageLink, title, desc, ghLinkUrl, siteUrl
) {
    const ghIconSrc =
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

    const projectIconsContainer = document.createElement("div");
    projectIconsContainer.classList.add("project-icons-container");

    const ghLink = document.createElement("a");
    ghLink.href = ghLinkUrl;
    ghLink.target = "_blank";
    ghLink.rel = "noopener noreferrer";
    const ghIcon = document.createElement("img");
    ghIcon.src = ghIconSrc;
    ghIcon.alt = "GitHub Icon";
    ghIcon.classList.add("link-icon")
    ghLink.appendChild(ghIcon);

    const openInNew = document.createElement("a");
    openInNew.href = siteUrl;
    openInNew.target = "_blank";
    openInNew.rel = "noopener noreferrer";
    const openInNewIcon = document.createElement("img");
    openInNewIcon.src = newSiteIcon;
    openInNewIcon.alt = "Open in new tab icon";
    openInNewIcon.classList.add("link-icon")
    openInNew.appendChild(openInNewIcon);

    projectIconsContainer.append(openInNew,ghLink)

    headingsContainer.append(projectName, projectIconsContainer);

    const projectDescContainer = document.createElement("div");
    projectDescContainer.classList.add("project-desc");
    const projectDesc = document.createElement("p");
    projectDesc.textContent = desc

    projectDescContainer.appendChild(projectDesc)

    projectDetails.append(headingsContainer,projectDescContainer);

    project.append(coverImage,projectDetails);

    return project;
}
