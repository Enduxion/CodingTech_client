import { motion } from "framer-motion";
import "./style.css";
const ProgrammingArrowSVG = (props) => {
  const paths = [
    "M19 16.75C18.59 16.75 18.25 16.41 18.25 16V6.5C18.25 5.81 17.69 5.25 17 5.25H11.5C11.09 5.25 10.75 4.91 10.75 4.5C10.75 4.09 11.09 3.75 11.5 3.75H17C18.52 3.75 19.75 4.98 19.75 6.5V16C19.75 16.41 19.41 16.75 19 16.75Z",
    "M14 7.74993C13.83 7.74993 13.66 7.68995 13.52 7.57995L10.52 5.07995C10.35 4.93995 10.25 4.72993 10.25 4.49993C10.25 4.26993 10.35 4.06991 10.52 3.91991L13.52 1.41991C13.84 1.14991 14.31 1.19995 14.58 1.51995C14.85 1.83995 14.8 2.30995 14.48 2.57995L12.17 4.49993L14.48 6.41991C14.8 6.68991 14.84 7.15991 14.58 7.47991C14.43 7.65991 14.21 7.74993 14 7.74993Z",
    "M19 22.75C16.93 22.75 15.25 21.07 15.25 19C15.25 16.93 16.93 15.25 19 15.25C21.07 15.25 22.75 16.93 22.75 19C22.75 21.07 21.07 22.75 19 22.75ZM19 16.75C17.76 16.75 16.75 17.76 16.75 19C16.75 20.24 17.76 21.25 19 21.25C20.24 21.25 21.25 20.24 21.25 19C21.25 17.76 20.24 16.75 19 16.75Z",
    "M12.5 20.25H7C5.48 20.25 4.25 19.02 4.25 17.5V8C4.25 7.59 4.59 7.25 5 7.25C5.41 7.25 5.75 7.59 5.75 8V17.5C5.75 18.19 6.31 18.75 7 18.75H12.5C12.91 18.75 13.25 19.09 13.25 19.5C13.25 19.91 12.91 20.25 12.5 20.25Z",
    "M9.99993 22.7499C9.78993 22.7499 9.56994 22.6599 9.41994 22.4799C9.14994 22.1599 9.19992 21.6899 9.51992 21.4199L11.8299 19.4999L9.51992 17.58C9.19992 17.31 9.15994 16.84 9.41994 16.52C9.68994 16.2 10.1599 16.1599 10.4799 16.4199L13.4799 18.9199C13.6499 19.0599 13.7499 19.2699 13.7499 19.4999C13.7499 19.7299 13.6499 19.93 13.4799 20.08L10.4799 22.58C10.3399 22.69 10.1699 22.7499 9.99993 22.7499Z",
    "M5 8.75C2.93 8.75 1.25 7.07 1.25 5C1.25 2.93 2.93 1.25 5 1.25C7.07 1.25 8.75 2.93 8.75 5C8.75 7.07 7.07 8.75 5 8.75ZM5 2.75C3.76 2.75 2.75 3.76 2.75 5C2.75 6.24 3.76 7.25 5 7.25C6.24 7.25 7.25 6.24 7.25 5C7.25 3.76 6.24 2.75 5 2.75Z",
  ];

  return (
    <motion.svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {paths.map((d, index) => (
        <motion.path
          key={index}
          d={d}
          fill="none"
          strokeWidth="1"
          stroke="white"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            // delay: index * 0.5,
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "reverse",
          }}
        />
      ))}
    </motion.svg>
  );
};

const MonitorSVG = (props) => {
  const paths = [
    "M17.56 17.97H6.44C2.46 17.97 1.25 16.76 1.25 12.78V6.44C1.25 2.46 2.46 1.25 6.44 1.25H17.55C21.53 1.25 22.74 2.46 22.74 6.44V12.77C22.75 16.76 21.54 17.97 17.56 17.97ZM6.44 2.75C3.3 2.75 2.75 3.3 2.75 6.44V12.77C2.75 15.91 3.3 16.46 6.44 16.46H17.55C20.69 16.46 21.24 15.91 21.24 12.77V6.44C21.24 3.3 20.69 2.75 17.55 2.75H6.44V2.75Z",
    "M12 22.75C11.59 22.75 11.25 22.41 11.25 22V17.22C11.25 16.81 11.59 16.47 12 16.47C12.41 16.47 12.75 16.81 12.75 17.22V22C12.75 22.41 12.41 22.75 12 22.75Z",
    "M22 13.75H2C1.59 13.75 1.25 13.41 1.25 13C1.25 12.59 1.59 12.25 2 12.25H22C22.41 12.25 22.75 12.59 22.75 13C22.75 13.41 22.41 13.75 22 13.75Z",
    "M16.5 22.75H7.5C7.09 22.75 6.75 22.41 6.75 22C6.75 21.59 7.09 21.25 7.5 21.25H16.5C16.91 21.25 17.25 21.59 17.25 22C17.25 22.41 16.91 22.75 16.5 22.75Z",
  ];
  return (
    <motion.svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {paths.map((d, index) => (
        <motion.path
          key={index}
          d={d}
          fill="white"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{
            // delay: 0.5,
            duration: 1,
            repeat: Infinity,
            ease: "backInOut",
            repeatType: "reverse",
          }}
        />
      ))}
    </motion.svg>
  );
};

const ContactSVG = (props) => {
  const paths = [
    "M2 8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5H7",
    "M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9",
    "M2 16.5H8",
    "M2 12.5H5",
  ];
  return (
    <motion.svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {paths.map((d, index) => (
        <motion.path
          key={index}
          d={d}
          fill="none"
          strokeWidth="1"
          stroke="white"
          strokeLinecap="round"
          initial={{ x: 0 }}
          animate={{ x: 0.5 * index }}
          transition={{
            // delay: index * 0.5,
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "reverse",
          }}
        />
      ))}
    </motion.svg>
  );
};

const ComputerAboutSVG = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 500 419"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="500" height="419" fill="#1E1E1E" />
      <g id="Frame 1" clipPath="url(#clip0_0_1)">
        <rect width="500" height="419" fill="white" />
        <g id="BACKGROUND">
          <path id="Vector" d="M500 0H0V422.478H500V0Z" fill="#E8EBED" />
        </g>
        <g id="OBJECTS">
          <g id="Group">
            <g id="Group_2">
              <path
                id="Vector_2"
                d="M140.848 160.702C146.306 138.836 133.006 116.686 111.14 111.227C89.275 105.769 67.1246 119.069 61.6661 140.935C56.2076 162.8 69.5081 184.951 91.3736 190.409C113.239 195.868 135.39 182.567 140.848 160.702Z"
                fill="#344B7E"
              />
              <path
                id="Vector_3"
                d="M101.263 183.013C119.042 183.013 133.454 168.601 133.454 150.822C133.454 133.043 119.042 118.631 101.263 118.631C83.4844 118.631 69.072 133.043 69.072 150.822C69.072 168.601 83.4844 183.013 101.263 183.013Z"
                fill="white"
              />
            </g>
            <g id="Group_3">
              <path
                id="Vector_4"
                d="M469.95 361.099H30V371.308H469.95V361.099Z"
                fill="#344B7E"
              />
              <path
                id="Vector_5"
                d="M119.964 398.17H109.073L108.108 371.307H120.929L119.964 398.17Z"
                fill="#344B7E"
              />
              <path
                id="Vector_6"
                d="M389.302 398.17H378.41L377.445 371.307H390.266L389.302 398.17Z"
                fill="#344B7E"
              />
              <path
                id="Vector_7"
                d="M120.575 381.159H108.462L108.108 371.307H120.929L120.575 381.159Z"
                fill="#22334C"
              />
              <path
                id="Vector_8"
                d="M389.913 381.159H377.799L377.445 371.307H390.266L389.913 381.159Z"
                fill="#22334C"
              />
            </g>
            <g id="Smoke">
              <g id="Group_4">
                <path
                  id="Vector_9"
                  d="M107.04 352.079C109.555 352.079 115.375 351.752 119.348 348.982C121.964 347.157 123.294 344.681 123.294 341.62C123.294 338.236 121.927 335.579 119.231 333.717C114.874 330.709 108.718 331.104 108.456 331.12L108.942 335.239C108.985 335.243 113.021 335.013 115.568 336.786C117.068 337.832 117.827 339.459 117.827 341.62C117.827 343.506 117.112 344.919 115.643 345.941C112.359 348.231 106.326 347.928 106.267 347.928L105.818 352.047C105.892 352.051 106.336 352.079 107.04 352.079Z"
                  fill="#84AAD7"
                />
                <path
                  id="Vector_10"
                  d="M112.307 322.874H72.307L78.233 360.779H106.085L112.307 322.874Z"
                  fill="#84AAD7"
                />
              </g>
              <path
                id="Vector_11"
                d="M92.498 314.562C94.942 312.733 96.941 310.825 98.84 308.442C100.659 306.065 102.291 303.246 102.994 299.732C103.732 296.235 102.984 292.051 101.067 288.88C99.177 285.689 96.616 283.385 94.061 281.53C93.71 281.274 93.459 281.078 93.223 280.889L92.483 280.305L91.035 279.127C90.091 278.336 89.171 277.54 88.324 276.736C86.657 275.172 85.085 273.416 84.612 272.262C84.38 271.724 84.578 271.455 84.888 272.059C85.014 272.334 85.119 272.801 85.131 273.137C85.144 273.491 85.12 273.716 85.198 273.752C85.271 273.864 85.775 273.401 86.445 272.91C87.127 272.395 88.012 271.768 88.977 271.111C93.395 268.103 94.538 262.083 91.529 257.665C88.521 253.247 82.501 252.104 78.083 255.113C77.479 255.524 76.936 255.992 76.456 256.505L76.26 256.72C75.261 257.801 74.212 258.953 73.096 260.35C71.99 261.779 70.772 263.34 69.66 265.801C68.552 268.112 67.83 271.907 68.685 275.102C69.481 278.299 71.067 280.355 72.433 281.877C73.841 283.386 75.211 284.449 76.541 285.38C77.872 286.299 79.18 287.105 80.467 287.808C81.757 288.528 83.033 289.17 84.304 289.785L87.993 291.488C89.896 292.361 91.523 293.421 92.604 294.577C93.653 295.741 94.259 296.96 94.316 298.684C94.404 302.15 91.838 306.841 88.849 310.279L88.688 310.465C87.668 311.638 87.793 313.415 88.965 314.434C89.984 315.318 91.46 315.339 92.498 314.562Z"
                fill="white"
              />
            </g>
            <g id="Group_5">
              <g id="Group_6">
                <path
                  id="Vector_12"
                  d="M446.638 146.528H325.074V167.115H446.638V146.528Z"
                  fill="#344B7E"
                />
                <path
                  id="Vector_13"
                  d="M446.638 167.114H325.074V236.284H446.638V167.114Z"
                  fill="#FDFDFB"
                />
                <path
                  id="Vector_14"
                  d="M426.51 167.114V236.284"
                  stroke="#E8EBED"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                />
                <path
                  id="Vector_15"
                  d="M406.173 167.114V236.284"
                  stroke="#E8EBED"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                />
                <path
                  id="Vector_16"
                  d="M385.835 167.114V236.284"
                  stroke="#E8EBED"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                />
                <path
                  id="Vector_17"
                  d="M365.497 167.114V236.284"
                  stroke="#E8EBED"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                />
                <path
                  id="Vector_18"
                  d="M345.159 167.114V236.284"
                  stroke="#E8EBED"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                />
                <path
                  id="Vector_19"
                  d="M325.074 183.86H446.638"
                  stroke="#E8EBED"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                />
                <path
                  id="Vector_20"
                  d="M325.074 201.335H446.638"
                  stroke="#E8EBED"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                />
                <path
                  id="Vector_21"
                  d="M325.074 218.809H446.638"
                  stroke="#E8EBED"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                />
              </g>
              <g id="Group_7">
                <g id="Group_8">
                  <g id="Group_9">
                    <path
                      id="Vector_22"
                      d="M409.356 207.111C413.384 210.832 417.761 214.103 422.478 216.902C423.896 217.743 425.183 215.535 423.768 214.695C419.236 212.006 415.035 208.88 411.164 205.304C409.957 204.189 408.145 205.992 409.356 207.111Z"
                      fill="#1C1E1D"
                    />
                  </g>
                </g>
                <g id="Group_10">
                  <g id="Group_11">
                    <path
                      id="Vector_23"
                      d="M422.467 203.362C417.087 208.351 411.482 213.076 405.639 217.514C404.346 218.496 405.618 220.717 406.929 219.721C412.947 215.15 418.732 210.308 424.274 205.169C425.483 204.048 423.672 202.244 422.467 203.362Z"
                      fill="#1C1E1D"
                    />
                  </g>
                </g>
              </g>
            </g>
            <g id="Lights">
              <path
                id="Vector_24"
                d="M250.336 0V66.327"
                stroke="#1C1E1D"
                strokeWidth="2.9553"
                strokeMiterlimit="10"
              />
              <path
                id="Vector_25"
                d="M260.334 59.947H239.374V50.805C239.374 45.017 244.066 40.325 249.854 40.325C255.642 40.325 260.334 45.017 260.334 50.805V59.947Z"
                fill="#98AAE0"
              />
              <path
                id="Vector_26"
                d="M193.964 90.015C193.964 90.015 194.952 51.964 248.716 51.964C302.48 51.964 306.708 90.015 306.708 90.015H193.964Z"
                fill="white"
              />
            </g>
            <g id="Group_12">
              <path
                id="Vector_27"
                d="M333.291 338.471H166.917C159.907 338.471 154.225 332.789 154.225 325.779V319.097H345.983V325.779C345.983 332.789 340.3 338.471 333.291 338.471Z"
                fill="#C7DBF5"
              />
              <path
                id="Vector_28"
                d="M270.162 338.471H230.808V355.423H270.162V338.471Z"
                fill="#84AAD7"
              />
              <path
                id="Vector_29"
                d="M345.983 319.411H154.225V216.232C154.225 211.328 158.2 207.353 163.104 207.353H337.103C342.007 207.353 345.982 211.328 345.982 216.232V319.411H345.983Z"
                fill="#344B7E"
              />
              <path
                id="Vector_30"
                d="M339.391 215.415H162.015V312.492H339.391V215.415Z"
                fill="#DAE6F5"
              />
              <path
                id="Vector_31"
                d="M254.435 327.917C254.435 330.309 252.496 332.248 250.104 332.248C247.712 332.248 245.773 330.309 245.773 327.917C245.773 325.525 247.712 323.586 250.104 323.586C252.496 323.585 254.435 325.524 254.435 327.917Z"
                fill="white"
              />
              <path
                id="Vector_32"
                d="M286.997 361.099H213.256C213.256 357.965 215.797 355.424 218.931 355.424H281.322C284.457 355.424 286.997 357.965 286.997 361.099Z"
                fill="#C7DBF5"
              />
              <path
                id="Vector_33"
                d="M197.802 331.095H170.924V346.947H197.802V331.095Z"
                fill="white"
              />
              <path
                id="Vector_34"
                d="M188.751 328.131H178.942V334.059H188.751V328.131Z"
                fill="#344B7E"
              />
              <g id="Group_13">
                <path
                  id="Vector_35"
                  d="M322.62 302.73H250.689C248.781 302.73 247.235 301.183 247.235 299.276V230.71C247.235 228.802 248.781 227.256 250.689 227.256H322.62C324.528 227.256 326.074 228.803 326.074 230.71V299.276C326.074 301.184 324.527 302.73 322.62 302.73Z"
                  fill="white"
                />
                <path
                  id="Vector_36"
                  d="M229.692 302.73H178.352C176.382 302.73 174.785 301.133 174.785 299.163V263.978C174.785 262.008 176.382 260.411 178.352 260.411H229.692C231.662 260.411 233.259 262.008 233.259 263.978V299.163C233.259 301.133 231.662 302.73 229.692 302.73Z"
                  fill="white"
                />
                <g id="Group_14">
                  <g id="Group_15">
                    <path
                      id="Vector_37"
                      d="M225.35 290.354H182.646C181.979 290.354 181.438 289.813 181.438 289.146V289.03C181.438 288.363 181.979 287.822 182.646 287.822H225.35C226.017 287.822 226.558 288.363 226.558 289.03V289.146C226.559 289.813 226.018 290.354 225.35 290.354Z"
                      fill="#DAE6F5"
                    />
                    <path
                      id="Vector_38"
                      d="M206.987 296.3H182.646C181.979 296.3 181.438 295.759 181.438 295.092V294.976C181.438 294.309 181.979 293.768 182.646 293.768H206.987C207.654 293.768 208.195 294.309 208.195 294.976V295.092C208.195 295.759 207.654 296.3 206.987 296.3Z"
                      fill="#DAE6F5"
                    />
                  </g>
                  <path
                    id="Vector_39"
                    d="M193.661 279.016C196.8 275.877 196.8 270.788 193.661 267.649C190.521 264.51 185.432 264.51 182.293 267.649C179.154 270.788 179.154 275.877 182.293 279.016C185.432 282.155 190.521 282.155 193.661 279.016Z"
                    fill="#91B1FA"
                  />
                </g>
                <g id="Lines">
                  <line
                    id="Line 1"
                    x1="175.281"
                    y1="237.879"
                    x2="210.281"
                    y2="237.879"
                    stroke="white"
                    strokeWidth="3"
                  />
                  <line
                    id="Line 2"
                    x1="175.281"
                    y1="243.879"
                    x2="223.281"
                    y2="243.879"
                    stroke="white"
                    strokeWidth="3"
                  />
                  <line
                    id="Line 3"
                    x1="175.281"
                    y1="250.879"
                    x2="217.281"
                    y2="250.879"
                    stroke="white"
                    strokeWidth="3"
                  />
                </g>
                <g id="Group_16">
                  <path
                    id="Vector_40"
                    d="M311.462 240.885H262.105V290.242H311.462V240.885Z"
                    fill="#91B1FA"
                  />
                  <path
                    id="Vector_41"
                    d="M298.285 269.849C302.477 269.849 305.876 266.45 305.876 262.258C305.876 258.066 302.477 254.667 298.285 254.667C294.093 254.667 290.694 258.066 290.694 262.258C290.694 266.45 294.093 269.849 298.285 269.849Z"
                    fill="#C7DBF5"
                  />
                  <path
                    id="Vector_42"
                    d="M288.596 274.778L297.408 264.24L312.092 277.505V290.242H288.596V274.778Z"
                    fill="white"
                  />
                  <path
                    id="Vector_43"
                    d="M262.105 274.587L272.055 259.314L303.736 290.242H262.105V274.587Z"
                    fill="#344B7E"
                  />
                </g>
              </g>
            </g>
            <g id="Group_17">
              <g id="Group_18">
                <g id="Group_19">
                  <g id="Group_20">
                    <path
                      id="Vector_44"
                      d="M373.024 315.586C368.429 315.586 364.703 319.311 364.703 323.907C364.703 328.503 368.428 332.228 373.024 332.228H454.202V328.296H374.398C371.974 328.296 370.009 326.331 370.009 323.907C370.009 321.483 371.974 319.518 374.398 319.518H454.202V315.586H373.024Z"
                      fill="#597ACC"
                    />
                    <path
                      id="Vector_45"
                      d="M370.009 323.907C370.009 326.331 371.974 328.296 374.398 328.296H450.459V319.518H374.398C371.974 319.518 370.009 321.483 370.009 323.907Z"
                      fill="white"
                    />
                  </g>
                  <g id="Group_21">
                    <path
                      id="Vector_46"
                      d="M374.222 332.299C366.446 332.299 360.143 338.602 360.143 346.378C360.143 354.154 366.446 360.457 374.222 360.457H446.008V355.268H375.111C370.223 355.268 366.26 351.305 366.26 346.417C366.26 341.529 370.223 337.566 375.111 337.566H446.008V332.298H374.222V332.299Z"
                      fill="#C7DBF5"
                    />
                    <path
                      id="Vector_47"
                      d="M366.26 346.418C366.26 351.306 370.223 355.269 375.111 355.269H442.432V337.567H375.111C370.223 337.567 366.26 341.529 366.26 346.418Z"
                      fill="white"
                    />
                  </g>
                </g>
              </g>
              <path
                id="Vector_48"
                d="M379.06 343.461H387.051V352.285L383.055 349.882L379.06 352.285V343.461Z"
                fill="#597ACC"
              />
            </g>
          </g>
          <g id="hands">
            <line
              id="Line 4"
              x1="101.781"
              y1="150.379"
              x2="101.781"
              y2="176.399"
              stroke="#597ACC"
              strokeWidth="3"
            />
            <line
              id="Line 5"
              x1="101.781"
              y1="150.379"
              x2="101.781"
              y2="168.399"
              stroke="#597ACC"
              strokeWidth="3"
            />
            <circle
              id="Ellipse 1"
              cx="101.781"
              cy="150.879"
              r="3.5"
              fill="#D9D9D9"
            />
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_0_1">
          <rect width="500" height="419" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export { ProgrammingArrowSVG, MonitorSVG, ContactSVG, ComputerAboutSVG };
