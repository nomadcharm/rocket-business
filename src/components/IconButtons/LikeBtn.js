export const createLikeBtn = () => {
  const likeBtnEl = document.createElement("button");
  likeBtnEl.innerHTML = `
  <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_3_2302)">
    <g clip-path="url(#clip1_3_2302)">
    <g clip-path="url(#clip2_3_2302)">
    <path d="M8.58499 12.7111L8.49998 12.793L8.40649 12.7111C4.36899 9.18802 1.7 6.85831 1.7 4.49592C1.7 2.86103 2.975 1.63488 4.67499 1.63488C5.98399 1.63488 7.25899 2.45232 7.70948 3.56403H9.29048C9.74098 2.45232 11.016 1.63488 12.3249 1.63488C14.025 1.63488 15.3 2.86103 15.3 4.49592C15.3 6.85831 12.6309 9.18802 8.58499 12.7111ZM12.3249 0C10.8459 0 9.42649 0.662125 8.49998 1.70027C7.57348 0.662125 6.15398 0 4.67499 0C2.057 0 0 1.97002 0 4.49592C0 7.57767 2.88999 10.1035 7.26749 13.921L8.49998 15L9.73248 13.921C14.1099 10.1035 17 7.57767 17 4.49592C17 1.97002 14.943 0 12.3249 0Z"/>
    </g>
    </g>
    </g>
    <defs>
    <clipPath id="clip0_3_2302">
    <rect width="17" height="15" />
    </clipPath>
    <clipPath id="clip1_3_2302">
    <rect width="17" height="15"/>
    </clipPath>
    <clipPath id="clip2_3_2302">
    <rect width="17" height="15" />
    </clipPath>
    </defs>
    </svg>
  `;

  return likeBtnEl;
};