import * as React from 'react'

const NoDataSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={220} height={160} fill="none">
    <circle cx={110} cy={80} r={80} fill="#EAECF0" />
    <circle cx={26} cy={20} r={8} fill="#F2F4F7" />
    <circle cx={198} cy={126} r={6} fill="#F2F4F7" />
    <circle cx={25} cy={138} r={10} fill="#F2F4F7" />
    <circle cx={210} cy={46} r={10} fill="#F2F4F7" />
    <circle cx={191} cy={11} r={7} fill="#F2F4F7" />
    <g filter="url(#a)">
      <path
        fill="#F9FAFB"
        fillRule="evenodd"
        d="M113.486 16c-16.737 0-31.541 8.27-40.55 20.947a39.885 39.885 0 0 0-9.165-1.061C41.806 35.886 24 53.692 24 75.657s17.806 39.772 39.771 39.772H163.2c19.22 0 34.8-15.58 34.8-34.8s-15.58-34.8-34.8-34.8c-1.365 0-2.712.078-4.036.231C151.546 28.378 133.961 16 113.486 16Z"
        clipRule="evenodd"
      />
      <circle cx={63.771} cy={75.657} r={39.771} fill="url(#b)" />
      <circle cx={113.486} cy={65.714} r={49.714} fill="url(#c)" />
      <circle cx={163.2} cy={80.629} r={34.8} fill="url(#d)" />
    </g>
    <g filter="url(#e)">
      <rect
        width={56}
        height={56}
        x={82}
        y={84}
        fill="#344054"
        fillOpacity={0.4}
        rx={28}
      />
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m120.5 122.5-4.083-4.083m2.916-7c0 5.476-4.44 9.916-9.916 9.916-5.477 0-9.917-4.44-9.917-9.916 0-5.477 4.44-9.917 9.917-9.917 5.476 0 9.916 4.44 9.916 9.917Z"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={33.233}
        x2={103.543}
        y1={49.38}
        y2={115.429}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D0D5DD" />
        <stop offset={0.351} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="c"
        x1={75.312}
        x2={163.2}
        y1={32.867}
        y2={115.428}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D0D5DD" />
        <stop offset={0.351} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="d"
        x1={136.479}
        x2={198}
        y1={57.636}
        y2={115.429}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D0D5DD" />
        <stop offset={0.351} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <filter
        id="a"
        width={214}
        height={139.429}
        x={4}
        y={16}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feMorphology
          in="SourceAlpha"
          radius={4}
          result="effect1_dropShadow_1182_2774"
        />
        <feOffset dy={8} />
        <feGaussianBlur stdDeviation={4} />
        <feColorMatrix values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.03 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1182_2774"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feMorphology
          in="SourceAlpha"
          radius={4}
          result="effect2_dropShadow_1182_2774"
        />
        <feOffset dy={20} />
        <feGaussianBlur stdDeviation={12} />
        <feColorMatrix values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.08 0" />
        <feBlend
          in2="effect1_dropShadow_1182_2774"
          result="effect2_dropShadow_1182_2774"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_1182_2774"
          result="shape"
        />
      </filter>
      <filter
        id="e"
        width={72}
        height={72}
        x={74}
        y={76}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={4} />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_1182_2774"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_backgroundBlur_1182_2774"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)
export default NoDataSVG
