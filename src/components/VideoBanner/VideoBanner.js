
export const createVideoBanner = () => {
  const wrapper = document.createElement("div");
  wrapper.classList.add("banner__wrapper");

  const video = document.createElement("video");
  video.classList.add("banner__video");
  video.setAttribute("src", "https://videocdn.cdnpk.net/joy/content/video/free/2022-03/large_preview/220310_01_Easter_4k_014.mp4?token=exp=1727998960~hmac=37adc42ce56d4c8e4ebd5bbe2cb20b6348f8feed4cc57bd9533b32ebbb12cf43");
  video.setAttribute("preload", "auto");
  video.setAttribute("poster", "/img/poster.png");

  const playBtn = document.createElement("button");
  playBtn.classList.add("banner__btn");
  const span = document.createElement("span");
  span.textContent = "Смотреть видео";
  playBtn.innerHTML = `
  <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.91675 2.25L11.0834 7.5L2.91675 12.75V2.25Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `;
  playBtn.prepend(span);

  playBtn.addEventListener("click", () => {
    playBtn.style.display = "none";
    video.play();
  });

  video.addEventListener("ended", () => {
    video.load();
    playBtn.style.display = "flex";
  });

  wrapper.append(video, playBtn);
  return wrapper;
};