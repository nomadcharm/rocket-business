export const createSection = (className) => {
  if (typeof className !== 'string' || className.trim() === '') {
    throw new Error("Класс не передан");
  };

  const section = document.createElement("section");
  section.classList.add("section", className);

  const container = document.createElement("div");
  container.classList.add("container", `${className}__container`);

  section.appendChild(container);
  return section;
};
