import React from "react";

import {perc2color} from './color-scale.js';

function Icon({
   data,
   width
}) {
  const renderHouseNumber = ({
    number, x, y, position
  }) => {
    const _100pct = false;// getAgreedOnValue(number);
    return (
      <tspan
        x={_100pct ? x-5 : x}
        y={_100pct ? (y+(position === 'top' ? 7 : -7)) : y}
        style={{}}
        strokeWidth="2"
        fontFamily="Baloo Bhai"
        fontStretch="normal"
        fontStyle="normal"
        fontVariant="normal"
        fontWeight="normal"
      >
        {_100pct ? '✔️' : number}
      </tspan>
    )
  }

  const getPercentageDone = (houseNumber) => {
    if(! data) return 0;

     const found = data.filter(x => {
        return x.submittedByHouseNumber == houseNumber
     });
     if(found && found[0]) {
        return found[0].percentage;
     } else {
        return 0;
     }
  }

  const getAgreedOnValue = (houseNumber) => {
    if(! data) return false;

     const found = data.filter(x => {
        return x.submittedByHouseNumber == houseNumber
     });
     if(found && found[0]) {
        return found[0].agreedOn100pctBySloopteam;
     } else {
        return false;
     }
  }

  const getFillColor = (houseNumber) => {
     const percentageDone = getPercentageDone(houseNumber);
     const agreedOn100pctBySloopteam = getAgreedOnValue(houseNumber);

     if(agreedOn100pctBySloopteam) {
        return '#008bf2';
     }
     else if(percentageDone == 0) {
        return '#eee';
     }
     else if(percentageDone == 100) {
        return '#309f00';
     }
     else {
        return perc2color(percentageDone);
     }
  }

  const opacity = "1";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      version="1.1"
      viewBox="0 0 1462.884 258.479"
    >
      <g
        fill="maroon"
        fillOpacity="0"
        fillRule="evenodd"
        stroke="#000"
        display="inline"
        transform="translate(-78.02 -46.218)"
      >
        <rect
          style={{ fontVariationSettings: "normal", InkscapeStroke: "none" }}
          width="48.74"
          height="141.26"
          x="544.324"
          y="160.161"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.896"
          display="inline"
          opacity={opacity}
          fill={getFillColor(12)}
          fillOpacity="1"
          rx="0"
          ry="0"
          stopColor="#000"
          stopOpacity="1"
          vectorEffect="none"
        ></rect>
        <rect
          style={{ fontVariationSettings: "normal", InkscapeStroke: "none" }}
          width="48.74"
          height="141.26"
          x="593.066"
          y="160.161"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.896"
          display="inline"
          opacity={opacity}
          fill={getFillColor(13)}
          fillOpacity="1"
          rx="0"
          ry="0"
          stopColor="#000"
          stopOpacity="1"
          vectorEffect="none"
        ></rect>
        <rect
          style={{ fontVariationSettings: "normal", InkscapeStroke: "none" }}
          width="48.743"
          height="141.26"
          x="641.804"
          y="160.161"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.896"
          display="inline"
          opacity={opacity}
          fill={getFillColor(14)}
          fillOpacity="1"
          rx="0"
          ry="0"
          stopColor="#000"
          stopOpacity="1"
          vectorEffect="none"
        ></rect>
        <rect
          style={{ fontVariationSettings: "normal", InkscapeStroke: "none" }}
          width="48.74"
          height="141.26"
          x="690.547"
          y="160.161"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.896"
          display="inline"
          opacity={opacity}
          fill={getFillColor(15)}
          fillOpacity="1"
          rx="0"
          ry="0"
          stopColor="#000"
          stopOpacity="1"
          vectorEffect="none"
        ></rect>
        <rect
          style={{ fontVariationSettings: "normal", InkscapeStroke: "none" }}
          width="48.74"
          height="141.26"
          x="739.29"
          y="160.161"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.896"
          display="inline"
          opacity={opacity}
          fill={getFillColor(16)}
          fillOpacity="1"
          rx="0"
          ry="0"
          stopColor="#000"
          stopOpacity="1"
          vectorEffect="none"
        ></rect>
        <rect
          style={{ fontVariationSettings: "normal", InkscapeStroke: "none" }}
          width="48.74"
          height="141.26"
          x="79.968"
          y="160.161"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.896"
          display="inline"
          opacity={opacity}
          fill={getFillColor(1)}
          fillOpacity="1"
          rx="0"
          ry="0"
          stopColor="#000"
          vectorEffect="none"
        ></rect>
        <rect
          style={{ fontVariationSettings: "normal", InkscapeStroke: "none" }}
          width="48.74"
          height="141.26"
          x="128.71"
          y="160.161"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.896"
          display="inline"
          opacity={opacity}
          fill={getFillColor(2)}
          fillOpacity="1"
          rx="0"
          ry="0"
          stopColor="#000"
          vectorEffect="none"
        ></rect>
        <rect
          style={{ fontVariationSettings: "normal", InkscapeStroke: "none" }}
          width="48.743"
          height="141.26"
          x="177.448"
          y="160.161"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.896"
          display="inline"
          opacity={opacity}
          fill={getFillColor(3)}
          fillOpacity="1"
          rx="0"
          ry="0"
          stopColor="#000"
          vectorEffect="none"
        ></rect>
        <rect
          style={{ fontVariationSettings: "normal", InkscapeStroke: "none" }}
          width="48.74"
          height="141.26"
          x="226.191"
          y="160.161"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.896"
          display="inline"
          opacity={opacity}
          fill={getFillColor(4)}
          fillOpacity="1"
          rx="0"
          ry="0"
          stopColor="#000"
          vectorEffect="none"
        ></rect>
        <rect
          style={{ fontVariationSettings: "normal", InkscapeStroke: "none" }}
          width="48.74"
          height="141.26"
          x="274.934"
          y="160.161"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.896"
          display="inline"
          opacity={opacity}
          fill={getFillColor(5)}
          fillOpacity="1"
          rx="0"
          ry="0"
          stopColor="#000"
          vectorEffect="none"
        ></rect>
        <rect
          style={{ fontVariationSettings: "normal", InkscapeStroke: "none" }}
          width="48.74"
          height="141.26"
          x="323.62"
          y="160.161"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.896"
          display="inline"
          opacity={opacity}
          fill={getFillColor(6)}
          fillOpacity="1"
          rx="0"
          ry="0"
          stopColor="#000"
          vectorEffect="none"
        ></rect>
        <rect
          style={{ fontVariationSettings: "normal", InkscapeStroke: "none" }}
          width="71.56"
          height="89.917"
          x="372.532"
          y="131.022"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.766"
          display="inline"
          opacity={opacity}
          fill={getFillColor(8)}
          fillOpacity="1"
          rx="0"
          ry="0"
          stopColor="#000"
          vectorEffect="none"
        ></rect>
        <rect
          style={{ fontVariationSettings: "normal", InkscapeStroke: "none" }}
          width="71.744"
          height="81.108"
          x="372.44"
          y="220.474"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.582"
          display="inline"
          opacity={opacity}
          fill={getFillColor(7)}
          fillOpacity="1"
          rx="0"
          ry="0"
          stopColor="#000"
          vectorEffect="none"
        ></rect>
        <rect
          style={{ fontVariationSettings: "normal", InkscapeStroke: "none" }}
          width="99.623"
          height="54.409"
          x="444.211"
          y="147.219"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.457"
          display="inline"
          opacity={opacity}
          fill={getFillColor(11)}
          fillOpacity="1"
          rx="0"
          ry="0"
          stopColor="#000"
          vectorEffect="none"
        ></rect>
        <rect
          style={{ fontVariationSettings: "normal", InkscapeStroke: "none" }}
          width="99.891"
          height="46.172"
          x="444.077"
          y="201.465"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.189"
          display="inline"
          opacity={opacity}
          fill={getFillColor(10)}
          fillOpacity="1"
          rx="0"
          ry="0"
          stopColor="#000"
          vectorEffect="none"
        ></rect>
        <rect
          style={{ fontVariationSettings: "normal", InkscapeStroke: "none" }}
          width="99.348"
          height="54.138"
          x="444.349"
          y="247.51"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.444"
          display="inline"
          opacity={opacity}
          fill={getFillColor(9)}
          fillOpacity="1"
          rx="0"
          ry="0"
          stopColor="#000"
          vectorEffect="none"
        ></rect>
        <rect
          style={{ fontVariationSettings: "normal", InkscapeStroke: "none" }}
          width="56.026"
          height="136.784"
          x="788.092"
          y="164.501"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="4.11"
          display="inline"
          opacity={opacity}
          fill={getFillColor(17)}
          fillOpacity="1"
          rx="0"
          ry="0"
          stopColor="#000"
          vectorEffect="none"
        ></rect>
        <rect
          style={{ fontVariationSettings: "normal", InkscapeStroke: "none" }}
          width="47.372"
          height="136.81"
          x="843.973"
          y="164.488"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.78"
          display="inline"
          opacity={opacity}
          fill={getFillColor(18)}
          fillOpacity="1"
          rx="0"
          ry="0"
          stopColor="#000"
          vectorEffect="none"
        ></rect>
        <rect
          style={{ fontVariationSettings: "normal", InkscapeStroke: "none" }}
          width="48.74"
          height="137.056"
          x="891.437"
          y="164.364"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.838"
          display="inline"
          opacity={opacity}
          fill={getFillColor(19)}
          fillOpacity="1"
          rx="0"
          ry="0"
          stopColor="#000"
          vectorEffect="none"
        ></rect>
        <rect
          style={{ fontVariationSettings: "normal", InkscapeStroke: "none" }}
          width="53.889"
          height="136.862"
          x="940.277"
          y="164.462"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="4.032"
          display="inline"
          opacity={opacity}
          fill={getFillColor(20)}
          fillOpacity="1"
          rx="0"
          ry="0"
          stopColor="#000"
          vectorEffect="none"
        ></rect>
        <rect
          style={{ fontVariationSettings: "normal", InkscapeStroke: "none" }}
          width="52.364"
          height="136.918"
          x="994.127"
          y="164.433"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.976"
          display="inline"
          opacity={opacity}
          fill={getFillColor(21)}
          fillOpacity="1"
          rx="0"
          ry="0"
          stopColor="#000"
          vectorEffect="none"
        ></rect>
        <rect
          style={{ fontVariationSettings: "normal", InkscapeStroke: "none" }}
          width="55.887"
          height="130.959"
          x="1046.497"
          y="170.372"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="4.017"
          display="inline"
          opacity={opacity}
          fill={getFillColor(22)}
          fillOpacity="1"
          rx="0"
          ry="0"
          stopColor="#000"
          vectorEffect="none"
        ></rect>
        <rect
          style={{ fontVariationSettings: "normal", InkscapeStroke: "none" }}
          width="62.642"
          height="107.583"
          x="1102.291"
          y="193.829"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.855"
          display="inline"
          opacity={opacity}
          fill={getFillColor(23)}
          fillOpacity="1"
          rx="0"
          ry="0"
          stopColor="#000"
          vectorEffect="none"
        ></rect>
        {/*<rect
          style={{ fontVariationSettings: "normal", InkscapeStroke: "none" }}
          width="56.823"
          height="120.354"
          x="1164.885"
          y="181.044"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.883"
          display="inline"
          opacity={opacity}
          fill={getFillColor(0)}
          fillOpacity="1"
          rx="0"
          ry="0"
          stopColor="#000"
          vectorEffect="none"
        ></rect>*/}
        {/*<rect
          style={{ fontVariationSettings: "normal", InkscapeStroke: "none" }}
          width="56.823"
          height="120.354"
          x="1164.885"
          y="181.044"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.883"
          display="inline"
          opacity={opacity}
          fill={getFillColor(1)}
          fillOpacity="1"
          rx="0"
          ry="0"
          stopColor="#000"
          stopOpacity="1"
          vectorEffect="none"
        ></rect>*/}
        <rect
          style={{ fontVariationSettings: "normal", InkscapeStroke: "none" }}
          width="56.823"
          height="120.354"
          x="1164.885"
          y="181.044"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.883"
          display="inline"
          opacity={opacity}
          fill={getFillColor(24)}
          fillOpacity="1"
          rx="0"
          ry="0"
          stopColor="#000"
          vectorEffect="none"
        ></rect>
        <rect
          style={{ fontVariationSettings: "normal", InkscapeStroke: "none" }}
          width="75.061"
          height="77.945"
          x="1077.728"
          y="-562.694"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.883"
          display="inline"
          opacity={opacity}
          fill={getFillColor(32)}
          fillOpacity="1"
          rx="0"
          ry="0"
          stopColor="#000"
          transform="rotate(29.873)"
          vectorEffect="none"
        ></rect>
        <rect
          style={{ fontVariationSettings: "normal", InkscapeStroke: "none" }}
          width="71.1"
          height="76.733"
          x="1229.049"
          y="-564.273"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="3.883"
          display="inline"
          opacity={opacity}
          fill={getFillColor(30)}
          fillOpacity="1"
          rx="0"
          ry="0"
          stopColor="#000"
          transform="rotate(29.873)"
          vectorEffect="none"
        ></rect>
        <rect
          style={{ fontVariationSettings: "normal", InkscapeStroke: "none" }}
          width="78.096"
          height="75.316"
          x="1309.524"
          y="-509.093"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="4.027"
          display="inline"
          opacity={opacity}
          fill={getFillColor(29)}
          fillOpacity="1"
          rx="0"
          ry="0"
          stopColor="#000"
          transform="matrix(.88735 .4611 -.4839 .87513 0 0)"
          vectorEffect="none"
        ></rect>
        <path
          strokeWidth="3.888"
          d="M1279.175 197.365l.272 104.028h-56.965v-120.35l19.66-.125 38.113 18.186"
          display="inline"
          opacity={opacity}
          fill={getFillColor(25)}
          fillOpacity="1"
          stopColor="#000"
          vectorEffect="none"
        ></path>
        <path
          strokeWidth="4.435"
          d="M1353.777 214.527l.355 86.623H1279.7l-.323-103.168 30.933-6.885 44.587 25.304"
          display="inline"
          opacity={opacity}
          fill={getFillColor(26)}
          fillOpacity="1"
          stopColor="#000"
          vectorEffect="none"
        ></path>
        <path
          strokeWidth="4.128"
          d="M1538.897 229.439l-17.63 73.158-64.426-1.38.864-31.553-17.05-9.568 36.787-65.782m0 0l62.16 37.26"
          display="inline"
          opacity={opacity}
          fill={getFillColor(28)}
          fillOpacity="1"
          stopColor="#000"
          vectorEffect="none"
        ></path>
        <path
          data-number="31"
          strokeWidth="4.435"
          d="m 1240.646,154.318 39.073,-67.806 65.02,36.229 -35.025,64.987 -2.2318,4.03356 m 0,0 -28.6532,6.38244 -38.45,-17.82 0.267,-26.006"
          display="inline"
          opacity={opacity}
          fill={getFillColor(31)}
          fillOpacity="1"
          stopColor="#000"
          vectorEffect="none"
        ></path>
        <path
          strokeWidth="5.186"
          d="M1456.864 267.38l-.054 33.425h-102.407s-1.007-75.91-1.007-84.901l35.08 18.571 69.775 35.24"
          display="inline"
          opacity={opacity}
          fill={getFillColor(27)}
          fillOpacity="1"
          stopColor="#000"
          vectorEffect="none"
        ></path>
      </g>
      <g
        strokeWidth="2"
        fontSize="26.666"
        letterSpacing="0"
        transform="translate(-78.02 -46.218)"
        wordSpacing="0"
      >
        <text
          xmlSpace="preserve"
          style={{ lineHeight: "1.25" }}
          x="98.067"
          y="285.346"
          fontFamily="sans-serif"
        >
          {renderHouseNumber({ number: 1, x: 98.067, y: 285.346 })}
        </text>
        <text
          xmlSpace="preserve"
          style={{ lineHeight: "1.25" }}
          x="145.476"
          y="285.346"
          fontFamily="sans-serif"
        >
          {renderHouseNumber({ number: 2, x: 145.476, y: 285.346 })}
        </text>
        <text
          xmlSpace="preserve"
          style={{ lineHeight: "1.25" }}
          x="195.476"
          y="285.346"
          fontFamily="sans-serif"
        >
          {renderHouseNumber({ number: 3, x: 195.476, y: 285.346 })}
        </text>
        <text
          xmlSpace="preserve"
          style={{ lineHeight: "1.25" }}
          x="243.476"
          y="285.346"
          fontFamily="sans-serif"
        >
          {renderHouseNumber({ number: 4, x: 243.476, y: 285.346 })}
        </text>
        <text
          xmlSpace="preserve"
          style={{ lineHeight: "1.25" }}
          x="293.476"
          y="285.346"
          fontFamily="sans-serif"
        >
          {renderHouseNumber({ number: 5, x: 293.476, y: 285.346 })}
        </text>
        <text
          xmlSpace="preserve"
          style={{ lineHeight: "1.25" }}
          x="341.476"
          y="285.346"
          fontFamily="sans-serif"
        >
          {renderHouseNumber({ number: 6, x: 341.476, y: 285.346 })}
        </text>
        <text
          xmlSpace="preserve"
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'Baloo Bhai'",
            fontVariantLigatures: "normal",
            fontVariantPosition: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantAlternates: "normal",
            fontVariantEastAsian: "normal",
            fontFeatureSettings: "normal",
            fontVariationSettings: "normal",
            WebkitTextIndent: "0",
            textIndent: "0",
            WebkitTextAlign: "start",
            textAlign: "start",
            WebkitTextDecorationLine: "none",
            textDecorationLine: "none",
            WebkitTextDecorationStyle: "solid",
            textDecorationStyle: "solid",
            WebkitTextDecorationColor: "#000000",
            textDecorationColor: "#000000",
            WebkitTextTransform: "none",
            textTransform: "none",
            WebkitTextOrientation: "mixed",
            textOrientation: "mixed",
            whiteSpace: "normal",
            shapePadding: "0",
            shapeMargin: "0",
            inlineSize: "0",
            InkscapeStroke: "none",
          }}
          x="341.476"
          y="285.346"
          fill="#000"
          fillOpacity="1"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          baselineShift="baseline"
          direction="ltr"
          dominantBaseline="auto"
          fontFamily="Baloo Bhai"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          opacity="1"
          stopColor="#000"
          stopOpacity="1"
          textAnchor="start"
          transform="translate(60)"
          vectorEffect="none"
          writingMode="lr-tb"
        >
          {renderHouseNumber({ number: 7, x: 341.476, y: 285.346 })}
        </text>
        <text
          xmlSpace="preserve"
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'Baloo Bhai'",
            fontVariantLigatures: "normal",
            fontVariantPosition: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantAlternates: "normal",
            fontVariantEastAsian: "normal",
            fontFeatureSettings: "normal",
            fontVariationSettings: "normal",
            WebkitTextIndent: "0",
            textIndent: "0",
            WebkitTextAlign: "start",
            textAlign: "start",
            WebkitTextDecorationLine: "none",
            textDecorationLine: "none",
            WebkitTextDecorationStyle: "solid",
            textDecorationStyle: "solid",
            WebkitTextDecorationColor: "#000000",
            textDecorationColor: "#000000",
            WebkitTextTransform: "none",
            textTransform: "none",
            WebkitTextOrientation: "mixed",
            textOrientation: "mixed",
            whiteSpace: "normal",
            shapePadding: "0",
            shapeMargin: "0",
            inlineSize: "0",
            InkscapeStroke: "none",
          }}
          x="341.476"
          y="285.346"
          fill="#000"
          fillOpacity="1"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          baselineShift="baseline"
          direction="ltr"
          dominantBaseline="auto"
          fontFamily="Baloo Bhai"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          stopColor="#000"
          textAnchor="start"
          transform="translate(60 -78.692)"
          vectorEffect="none"
          writingMode="lr-tb"
        >
          {renderHouseNumber({ number: 8, x: 341.476, y: 285.346 })}
        </text>
        <text
          xmlSpace="preserve"
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'Baloo Bhai'",
            fontVariantLigatures: "normal",
            fontVariantPosition: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantAlternates: "normal",
            fontVariantEastAsian: "normal",
            fontFeatureSettings: "normal",
            fontVariationSettings: "normal",
            WebkitTextIndent: "0",
            textIndent: "0",
            WebkitTextAlign: "start",
            textAlign: "start",
            WebkitTextDecorationLine: "none",
            textDecorationLine: "none",
            WebkitTextDecorationStyle: "solid",
            textDecorationStyle: "solid",
            WebkitTextDecorationColor: "#000000",
            textDecorationColor: "#000000",
            WebkitTextTransform: "none",
            textTransform: "none",
            WebkitTextOrientation: "mixed",
            textOrientation: "mixed",
            whiteSpace: "normal",
            shapePadding: "0",
            shapeMargin: "0",
            inlineSize: "0",
            InkscapeStroke: "none",
          }}
          x="341.476"
          y="285.346"
          fill="#000"
          fillOpacity="1"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          baselineShift="baseline"
          direction="ltr"
          dominantBaseline="auto"
          fontFamily="Baloo Bhai"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          stopColor="#000"
          textAnchor="start"
          transform="translate(144)"
          vectorEffect="none"
          writingMode="lr-tb"
        >
          {renderHouseNumber({ number: 9, x: 341.476, y: 285.346 })}
        </text>
        <text
          xmlSpace="preserve"
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'Baloo Bhai'",
            fontVariantLigatures: "normal",
            fontVariantPosition: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantAlternates: "normal",
            fontVariantEastAsian: "normal",
            fontFeatureSettings: "normal",
            fontVariationSettings: "normal",
            WebkitTextIndent: "0",
            textIndent: "0",
            WebkitTextAlign: "start",
            textAlign: "start",
            WebkitTextDecorationLine: "none",
            textDecorationLine: "none",
            WebkitTextDecorationStyle: "solid",
            textDecorationStyle: "solid",
            WebkitTextDecorationColor: "#000000",
            textDecorationColor: "#000000",
            WebkitTextTransform: "none",
            textTransform: "none",
            WebkitTextOrientation: "mixed",
            textOrientation: "mixed",
            whiteSpace: "normal",
            shapePadding: "0",
            shapeMargin: "0",
            inlineSize: "0",
            InkscapeStroke: "none",
          }}
          x="336"
          y="285.346"
          fill="#000"
          fillOpacity="1"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          baselineShift="baseline"
          direction="ltr"
          dominantBaseline="auto"
          fontFamily="Baloo Bhai"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          stopColor="#000"
          textAnchor="start"
          transform="translate(218)"
          vectorEffect="none"
          writingMode="lr-tb"
        >
          {renderHouseNumber({ number: 12, x: 336, y: 285.346 })}
        </text>
        <text
          xmlSpace="preserve"
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'Baloo Bhai'",
            fontVariantLigatures: "normal",
            fontVariantPosition: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantAlternates: "normal",
            fontVariantEastAsian: "normal",
            fontFeatureSettings: "normal",
            fontVariationSettings: "normal",
            WebkitTextIndent: "0",
            textIndent: "0",
            WebkitTextAlign: "start",
            textAlign: "start",
            WebkitTextDecorationLine: "none",
            textDecorationLine: "none",
            WebkitTextDecorationStyle: "solid",
            textDecorationStyle: "solid",
            WebkitTextDecorationColor: "#000000",
            textDecorationColor: "#000000",
            WebkitTextTransform: "none",
            textTransform: "none",
            WebkitTextOrientation: "mixed",
            textOrientation: "mixed",
            whiteSpace: "normal",
            shapePadding: "0",
            shapeMargin: "0",
            inlineSize: "0",
            InkscapeStroke: "none",
          }}
          x="336"
          y="285.346"
          fill="#000"
          fillOpacity="1"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          baselineShift="baseline"
          direction="ltr"
          dominantBaseline="auto"
          fontFamily="Baloo Bhai"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          stopColor="#000"
          textAnchor="start"
          transform="translate(266)"
          vectorEffect="none"
          writingMode="lr-tb"
        >
          {renderHouseNumber({ number: 13, x: 336, y: 285.346 })}
        </text>
        <text
          xmlSpace="preserve"
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'Baloo Bhai'",
            fontVariantLigatures: "normal",
            fontVariantPosition: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantAlternates: "normal",
            fontVariantEastAsian: "normal",
            fontFeatureSettings: "normal",
            fontVariationSettings: "normal",
            WebkitTextIndent: "0",
            textIndent: "0",
            WebkitTextAlign: "start",
            textAlign: "start",
            WebkitTextDecorationLine: "none",
            textDecorationLine: "none",
            WebkitTextDecorationStyle: "solid",
            textDecorationStyle: "solid",
            WebkitTextDecorationColor: "#000000",
            textDecorationColor: "#000000",
            WebkitTextTransform: "none",
            textTransform: "none",
            WebkitTextOrientation: "mixed",
            textOrientation: "mixed",
            whiteSpace: "normal",
            shapePadding: "0",
            shapeMargin: "0",
            inlineSize: "0",
            InkscapeStroke: "none",
          }}
          x="336"
          y="285.346"
          fill="#000"
          fillOpacity="1"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          baselineShift="baseline"
          direction="ltr"
          dominantBaseline="auto"
          fontFamily="Baloo Bhai"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          stopColor="#000"
          textAnchor="start"
          transform="translate(314)"
          vectorEffect="none"
          writingMode="lr-tb"
        >
          {renderHouseNumber({ number: 14, x: 336, y: 285.346 })}
        </text>
        <text
          xmlSpace="preserve"
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'Baloo Bhai'",
            fontVariantLigatures: "normal",
            fontVariantPosition: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantAlternates: "normal",
            fontVariantEastAsian: "normal",
            fontFeatureSettings: "normal",
            fontVariationSettings: "normal",
            WebkitTextIndent: "0",
            textIndent: "0",
            WebkitTextAlign: "start",
            textAlign: "start",
            WebkitTextDecorationLine: "none",
            textDecorationLine: "none",
            WebkitTextDecorationStyle: "solid",
            textDecorationStyle: "solid",
            WebkitTextDecorationColor: "#000000",
            textDecorationColor: "#000000",
            WebkitTextTransform: "none",
            textTransform: "none",
            WebkitTextOrientation: "mixed",
            textOrientation: "mixed",
            whiteSpace: "normal",
            shapePadding: "0",
            shapeMargin: "0",
            inlineSize: "0",
            InkscapeStroke: "none",
          }}
          x="336"
          y="285.346"
          fill="#000"
          fillOpacity="1"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          baselineShift="baseline"
          direction="ltr"
          dominantBaseline="auto"
          fontFamily="Baloo Bhai"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          stopColor="#000"
          textAnchor="start"
          transform="translate(366)"
          vectorEffect="none"
          writingMode="lr-tb"
        >
          {renderHouseNumber({ number: 15, x: 336, y: 285.346 })}
        </text>
        <text
          xmlSpace="preserve"
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'Baloo Bhai'",
            fontVariantLigatures: "normal",
            fontVariantPosition: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantAlternates: "normal",
            fontVariantEastAsian: "normal",
            fontFeatureSettings: "normal",
            fontVariationSettings: "normal",
            WebkitTextIndent: "0",
            textIndent: "0",
            WebkitTextAlign: "start",
            textAlign: "start",
            WebkitTextDecorationLine: "none",
            textDecorationLine: "none",
            WebkitTextDecorationStyle: "solid",
            textDecorationStyle: "solid",
            WebkitTextDecorationColor: "#000000",
            textDecorationColor: "#000000",
            WebkitTextTransform: "none",
            textTransform: "none",
            WebkitTextOrientation: "mixed",
            textOrientation: "mixed",
            whiteSpace: "normal",
            shapePadding: "0",
            shapeMargin: "0",
            inlineSize: "0",
            InkscapeStroke: "none",
          }}
          x="338"
          y="285.346"
          fill="#000"
          fillOpacity="1"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          baselineShift="baseline"
          direction="ltr"
          dominantBaseline="auto"
          fontFamily="Baloo Bhai"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          stopColor="#000"
          textAnchor="start"
          transform="translate(414)"
          vectorEffect="none"
          writingMode="lr-tb"
        >
          {renderHouseNumber({ number: 16, x: 338, y: 285.346 })}
        </text>
        <text
          xmlSpace="preserve"
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'Baloo Bhai'",
            fontVariantLigatures: "normal",
            fontVariantPosition: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantAlternates: "normal",
            fontVariantEastAsian: "normal",
            fontFeatureSettings: "normal",
            fontVariationSettings: "normal",
            WebkitTextIndent: "0",
            textIndent: "0",
            WebkitTextAlign: "start",
            textAlign: "start",
            WebkitTextDecorationLine: "none",
            textDecorationLine: "none",
            WebkitTextDecorationStyle: "solid",
            textDecorationStyle: "solid",
            WebkitTextDecorationColor: "#000000",
            textDecorationColor: "#000000",
            WebkitTextTransform: "none",
            textTransform: "none",
            WebkitTextOrientation: "mixed",
            textOrientation: "mixed",
            whiteSpace: "normal",
            shapePadding: "0",
            shapeMargin: "0",
            inlineSize: "0",
            InkscapeStroke: "none",
          }}
          x="341"
          y="285.346"
          fill="#000"
          fillOpacity="1"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          baselineShift="baseline"
          direction="ltr"
          dominantBaseline="auto"
          fontFamily="Baloo Bhai"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          stopColor="#000"
          textAnchor="start"
          transform="translate(464)"
          vectorEffect="none"
          writingMode="lr-tb"
        >
          {renderHouseNumber({ number: 17, x: 341, y: 285.346 })}
        </text>
        <text
          xmlSpace="preserve"
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'Baloo Bhai'",
            fontVariantLigatures: "normal",
            fontVariantPosition: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantAlternates: "normal",
            fontVariantEastAsian: "normal",
            fontFeatureSettings: "normal",
            fontVariationSettings: "normal",
            WebkitTextIndent: "0",
            textIndent: "0",
            WebkitTextAlign: "start",
            textAlign: "start",
            WebkitTextDecorationLine: "none",
            textDecorationLine: "none",
            WebkitTextDecorationStyle: "solid",
            textDecorationStyle: "solid",
            WebkitTextDecorationColor: "#000000",
            textDecorationColor: "#000000",
            WebkitTextTransform: "none",
            textTransform: "none",
            WebkitTextOrientation: "mixed",
            textOrientation: "mixed",
            whiteSpace: "normal",
            shapePadding: "0",
            shapeMargin: "0",
            inlineSize: "0",
            InkscapeStroke: "none",
          }}
          x="341.476"
          y="285.346"
          fill="#000"
          fillOpacity="1"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          baselineShift="baseline"
          direction="ltr"
          dominantBaseline="auto"
          fontFamily="Baloo Bhai"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          stopColor="#000"
          textAnchor="start"
          transform="translate(516)"
          vectorEffect="none"
          writingMode="lr-tb"
        >
          {renderHouseNumber({ number: 18, x: 336, y: 285.346 })}
        </text>
        <text
          xmlSpace="preserve"
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'Baloo Bhai'",
            fontVariantLigatures: "normal",
            fontVariantPosition: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantAlternates: "normal",
            fontVariantEastAsian: "normal",
            fontFeatureSettings: "normal",
            fontVariationSettings: "normal",
            WebkitTextIndent: "0",
            textIndent: "0",
            WebkitTextAlign: "start",
            textAlign: "start",
            WebkitTextDecorationLine: "none",
            textDecorationLine: "none",
            WebkitTextDecorationStyle: "solid",
            textDecorationStyle: "solid",
            WebkitTextDecorationColor: "#000000",
            textDecorationColor: "#000000",
            WebkitTextTransform: "none",
            textTransform: "none",
            WebkitTextOrientation: "mixed",
            textOrientation: "mixed",
            whiteSpace: "normal",
            shapePadding: "0",
            shapeMargin: "0",
            inlineSize: "0",
            InkscapeStroke: "none",
          }}
          x="338"
          y="285.346"
          fill="#000"
          fillOpacity="1"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          baselineShift="baseline"
          direction="ltr"
          dominantBaseline="auto"
          fontFamily="Baloo Bhai"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          stopColor="#000"
          textAnchor="start"
          transform="translate(564)"
          vectorEffect="none"
          writingMode="lr-tb"
        >
          {renderHouseNumber({ number: 19, x: 338, y: 285.346 })}
        </text>
        <text
          xmlSpace="preserve"
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'Baloo Bhai'",
            fontVariantLigatures: "normal",
            fontVariantPosition: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantAlternates: "normal",
            fontVariantEastAsian: "normal",
            fontFeatureSettings: "normal",
            fontVariationSettings: "normal",
            WebkitTextIndent: "0",
            textIndent: "0",
            WebkitTextAlign: "start",
            textAlign: "start",
            WebkitTextDecorationLine: "none",
            textDecorationLine: "none",
            WebkitTextDecorationStyle: "solid",
            textDecorationStyle: "solid",
            WebkitTextDecorationColor: "#000000",
            textDecorationColor: "#000000",
            WebkitTextTransform: "none",
            textTransform: "none",
            WebkitTextOrientation: "mixed",
            textOrientation: "mixed",
            whiteSpace: "normal",
            shapePadding: "0",
            shapeMargin: "0",
            inlineSize: "0",
            InkscapeStroke: "none",
          }}
          x="336"
          y="285.346"
          fill="#000"
          fillOpacity="1"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          baselineShift="baseline"
          direction="ltr"
          dominantBaseline="auto"
          fontFamily="Baloo Bhai"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          stopColor="#000"
          textAnchor="start"
          transform="translate(616)"
          vectorEffect="none"
          writingMode="lr-tb"
        >
          {renderHouseNumber({ number: 20, x: 336, y: 285.346 })}
        </text>
        <text
          xmlSpace="preserve"
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'Baloo Bhai'",
            fontVariantLigatures: "normal",
            fontVariantPosition: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantAlternates: "normal",
            fontVariantEastAsian: "normal",
            fontFeatureSettings: "normal",
            fontVariationSettings: "normal",
            WebkitTextIndent: "0",
            textIndent: "0",
            WebkitTextAlign: "start",
            textAlign: "start",
            WebkitTextDecorationLine: "none",
            textDecorationLine: "none",
            WebkitTextDecorationStyle: "solid",
            textDecorationStyle: "solid",
            WebkitTextDecorationColor: "#000000",
            textDecorationColor: "#000000",
            WebkitTextTransform: "none",
            textTransform: "none",
            WebkitTextOrientation: "mixed",
            textOrientation: "mixed",
            whiteSpace: "normal",
            shapePadding: "0",
            shapeMargin: "0",
            inlineSize: "0",
            InkscapeStroke: "none",
          }}
          x="340"
          y="285.346"
          fill="#000"
          fillOpacity="1"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          baselineShift="baseline"
          direction="ltr"
          dominantBaseline="auto"
          fontFamily="Baloo Bhai"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          stopColor="#000"
          textAnchor="start"
          transform="translate(668)"
          vectorEffect="none"
          writingMode="lr-tb"
        >
          {renderHouseNumber({ number: 21, x: 340, y: 285.346 })}
        </text>
        <text
          xmlSpace="preserve"
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'Baloo Bhai'",
            fontVariantLigatures: "normal",
            fontVariantPosition: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantAlternates: "normal",
            fontVariantEastAsian: "normal",
            fontFeatureSettings: "normal",
            fontVariationSettings: "normal",
            WebkitTextIndent: "0",
            textIndent: "0",
            WebkitTextAlign: "start",
            textAlign: "start",
            WebkitTextDecorationLine: "none",
            textDecorationLine: "none",
            WebkitTextDecorationStyle: "solid",
            textDecorationStyle: "solid",
            WebkitTextDecorationColor: "#000000",
            textDecorationColor: "#000000",
            WebkitTextTransform: "none",
            textTransform: "none",
            WebkitTextOrientation: "mixed",
            textOrientation: "mixed",
            whiteSpace: "normal",
            shapePadding: "0",
            shapeMargin: "0",
            inlineSize: "0",
            InkscapeStroke: "none",
          }}
          x="341.476"
          y="285.346"
          fill="#000"
          fillOpacity="1"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          baselineShift="baseline"
          direction="ltr"
          dominantBaseline="auto"
          fontFamily="Baloo Bhai"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          stopColor="#000"
          textAnchor="start"
          transform="translate(720)"
          vectorEffect="none"
          writingMode="lr-tb"
        >
          {renderHouseNumber({ number: 22, x: 341.476, y: 285.346 })}
        </text>
        <text
          xmlSpace="preserve"
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'Baloo Bhai'",
            fontVariantLigatures: "normal",
            fontVariantPosition: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantAlternates: "normal",
            fontVariantEastAsian: "normal",
            fontFeatureSettings: "normal",
            fontVariationSettings: "normal",
            WebkitTextIndent: "0",
            textIndent: "0",
            WebkitTextAlign: "start",
            textAlign: "start",
            WebkitTextDecorationLine: "none",
            textDecorationLine: "none",
            WebkitTextDecorationStyle: "solid",
            textDecorationStyle: "solid",
            WebkitTextDecorationColor: "#000000",
            textDecorationColor: "#000000",
            WebkitTextTransform: "none",
            textTransform: "none",
            WebkitTextOrientation: "mixed",
            textOrientation: "mixed",
            whiteSpace: "normal",
            shapePadding: "0",
            shapeMargin: "0",
            inlineSize: "0",
            InkscapeStroke: "none",
          }}
          x="341.476"
          y="285.346"
          fill="#000"
          fillOpacity="1"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          baselineShift="baseline"
          direction="ltr"
          dominantBaseline="auto"
          fontFamily="Baloo Bhai"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          stopColor="#000"
          textAnchor="start"
          transform="translate(780)"
          vectorEffect="none"
          writingMode="lr-tb"
        >
          {renderHouseNumber({ number: 23, x: 341.476, y: 285.346 })}
        </text>
        <text
          xmlSpace="preserve"
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'Baloo Bhai'",
            fontVariantLigatures: "normal",
            fontVariantPosition: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantAlternates: "normal",
            fontVariantEastAsian: "normal",
            fontFeatureSettings: "normal",
            fontVariationSettings: "normal",
            WebkitTextIndent: "0",
            textIndent: "0",
            WebkitTextAlign: "start",
            textAlign: "start",
            WebkitTextDecorationLine: "none",
            textDecorationLine: "none",
            WebkitTextDecorationStyle: "solid",
            textDecorationStyle: "solid",
            WebkitTextDecorationColor: "#000000",
            textDecorationColor: "#000000",
            WebkitTextTransform: "none",
            textTransform: "none",
            WebkitTextOrientation: "mixed",
            textOrientation: "mixed",
            whiteSpace: "normal",
            shapePadding: "0",
            shapeMargin: "0",
            inlineSize: "0",
            InkscapeStroke: "none",
          }}
          x="341.476"
          y="285.346"
          fill="#000"
          fillOpacity="1"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          baselineShift="baseline"
          direction="ltr"
          dominantBaseline="auto"
          fontFamily="Baloo Bhai"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          stopColor="#000"
          textAnchor="start"
          transform="translate(840)"
          vectorEffect="none"
          writingMode="lr-tb"
        >
          {renderHouseNumber({ number: 24, x: 341.476, y: 285.346 })}
        </text>
        <text
          xmlSpace="preserve"
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'Baloo Bhai'",
            fontVariantLigatures: "normal",
            fontVariantPosition: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantAlternates: "normal",
            fontVariantEastAsian: "normal",
            fontFeatureSettings: "normal",
            fontVariationSettings: "normal",
            WebkitTextIndent: "0",
            textIndent: "0",
            WebkitTextAlign: "start",
            textAlign: "start",
            WebkitTextDecorationLine: "none",
            textDecorationLine: "none",
            WebkitTextDecorationStyle: "solid",
            textDecorationStyle: "solid",
            WebkitTextDecorationColor: "#000000",
            textDecorationColor: "#000000",
            WebkitTextTransform: "none",
            textTransform: "none",
            WebkitTextOrientation: "mixed",
            textOrientation: "mixed",
            whiteSpace: "normal",
            shapePadding: "0",
            shapeMargin: "0",
            inlineSize: "0",
            InkscapeStroke: "none",
          }}
          x="341.476"
          y="285.346"
          fill="#000"
          fillOpacity="1"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          baselineShift="baseline"
          direction="ltr"
          dominantBaseline="auto"
          fontFamily="Baloo Bhai"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          stopColor="#000"
          textAnchor="start"
          transform="translate(896)"
          vectorEffect="none"
          writingMode="lr-tb"
        >
          {renderHouseNumber({ number: 25, x: 341.476, y: 285.346 })}
        </text>
        <text
          xmlSpace="preserve"
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'Baloo Bhai'",
            fontVariantLigatures: "normal",
            fontVariantPosition: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantAlternates: "normal",
            fontVariantEastAsian: "normal",
            fontFeatureSettings: "normal",
            fontVariationSettings: "normal",
            WebkitTextIndent: "0",
            textIndent: "0",
            WebkitTextAlign: "start",
            textAlign: "start",
            WebkitTextDecorationLine: "none",
            textDecorationLine: "none",
            WebkitTextDecorationStyle: "solid",
            textDecorationStyle: "solid",
            WebkitTextDecorationColor: "#000000",
            textDecorationColor: "#000000",
            WebkitTextTransform: "none",
            textTransform: "none",
            WebkitTextOrientation: "mixed",
            textOrientation: "mixed",
            whiteSpace: "normal",
            shapePadding: "0",
            shapeMargin: "0",
            inlineSize: "0",
            InkscapeStroke: "none",
          }}
          x="336"
          y="285.346"
          fill="#000"
          fillOpacity="1"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          baselineShift="baseline"
          direction="ltr"
          dominantBaseline="auto"
          fontFamily="Baloo Bhai"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          stopColor="#000"
          textAnchor="start"
          transform="translate(966)"
          vectorEffect="none"
          writingMode="lr-tb"
        >
          {renderHouseNumber({ number: 26, x: 336, y: 285.346 })}
        </text>
        <text
          xmlSpace="preserve"
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'Baloo Bhai'",
            fontVariantLigatures: "normal",
            fontVariantPosition: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantAlternates: "normal",
            fontVariantEastAsian: "normal",
            fontFeatureSettings: "normal",
            fontVariationSettings: "normal",
            WebkitTextIndent: "0",
            textIndent: "0",
            WebkitTextAlign: "start",
            textAlign: "start",
            WebkitTextDecorationLine: "none",
            textDecorationLine: "none",
            WebkitTextDecorationStyle: "solid",
            textDecorationStyle: "solid",
            WebkitTextDecorationColor: "#000000",
            textDecorationColor: "#000000",
            WebkitTextTransform: "none",
            textTransform: "none",
            WebkitTextOrientation: "mixed",
            textOrientation: "mixed",
            whiteSpace: "normal",
            shapePadding: "0",
            shapeMargin: "0",
            inlineSize: "0",
            InkscapeStroke: "none",
          }}
          x="341.476"
          y="285.346"
          fill="#000"
          fillOpacity="1"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          baselineShift="baseline"
          direction="ltr"
          dominantBaseline="auto"
          fontFamily="Baloo Bhai"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          stopColor="#000"
          textAnchor="start"
          transform="translate(1046)"
          vectorEffect="none"
          writingMode="lr-tb"
        >
          {renderHouseNumber({ number: 27, x: 341.476, y: 285.346 })}
        </text>
        <text
          xmlSpace="preserve"
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'Baloo Bhai'",
            fontVariantLigatures: "normal",
            fontVariantPosition: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantAlternates: "normal",
            fontVariantEastAsian: "normal",
            fontFeatureSettings: "normal",
            fontVariationSettings: "normal",
            WebkitTextIndent: "0",
            textIndent: "0",
            WebkitTextAlign: "start",
            textAlign: "start",
            WebkitTextDecorationLine: "none",
            textDecorationLine: "none",
            WebkitTextDecorationStyle: "solid",
            textDecorationStyle: "solid",
            WebkitTextDecorationColor: "#000000",
            textDecorationColor: "#000000",
            WebkitTextTransform: "none",
            textTransform: "none",
            WebkitTextOrientation: "mixed",
            textOrientation: "mixed",
            whiteSpace: "normal",
            shapePadding: "0",
            shapeMargin: "0",
            inlineSize: "0",
            InkscapeStroke: "none",
          }}
          x="341.476"
          y="285.346"
          fill="#000"
          fillOpacity="1"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          baselineShift="baseline"
          direction="ltr"
          dominantBaseline="auto"
          fontFamily="Baloo Bhai"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          stopColor="#000"
          textAnchor="start"
          transform="translate(1140)"
          vectorEffect="none"
          writingMode="lr-tb"
        >
          {renderHouseNumber({ number: 28, x: 341.476, y: 285.346 })}
        </text>
        <text
          xmlSpace="preserve"
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'Baloo Bhai'",
            fontVariantLigatures: "normal",
            fontVariantPosition: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantAlternates: "normal",
            fontVariantEastAsian: "normal",
            fontFeatureSettings: "normal",
            fontVariationSettings: "normal",
            WebkitTextIndent: "0",
            textIndent: "0",
            WebkitTextAlign: "start",
            textAlign: "start",
            WebkitTextDecorationLine: "none",
            textDecorationLine: "none",
            WebkitTextDecorationStyle: "solid",
            textDecorationStyle: "solid",
            WebkitTextDecorationColor: "#000000",
            textDecorationColor: "#000000",
            WebkitTextTransform: "none",
            textTransform: "none",
            WebkitTextOrientation: "mixed",
            textOrientation: "mixed",
            whiteSpace: "normal",
            shapePadding: "0",
            shapeMargin: "0",
            inlineSize: "0",
            InkscapeStroke: "none",
          }}
          x="341.476"
          y="285.346"
          fill="#000"
          fillOpacity="1"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          baselineShift="baseline"
          direction="ltr"
          dominantBaseline="auto"
          fontFamily="Baloo Bhai"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          stopColor="#000"
          textAnchor="start"
          transform="rotate(26.01 1070.86 2571.978)"
          vectorEffect="none"
          writingMode="lr-tb"
        >
          {renderHouseNumber({ number: 29, x: 341.476, y: 285.346, position: 'top' })}
        </text>
        <text
          xmlSpace="preserve"
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'Baloo Bhai'",
            fontVariantLigatures: "normal",
            fontVariantPosition: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantAlternates: "normal",
            fontVariantEastAsian: "normal",
            fontFeatureSettings: "normal",
            fontVariationSettings: "normal",
            WebkitTextIndent: "0",
            textIndent: "0",
            WebkitTextAlign: "start",
            textAlign: "start",
            WebkitTextDecorationLine: "none",
            textDecorationLine: "none",
            WebkitTextDecorationStyle: "solid",
            textDecorationStyle: "solid",
            WebkitTextDecorationColor: "#000000",
            textDecorationColor: "#000000",
            WebkitTextTransform: "none",
            textTransform: "none",
            WebkitTextOrientation: "mixed",
            textOrientation: "mixed",
            whiteSpace: "normal",
            shapePadding: "0",
            shapeMargin: "0",
            inlineSize: "0",
            InkscapeStroke: "none",
          }}
          x="341.476"
          y="285.346"
          fill="#000"
          fillOpacity="1"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          baselineShift="baseline"
          direction="ltr"
          dominantBaseline="auto"
          fontFamily="Baloo Bhai"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          stopColor="#000"
          textAnchor="start"
          transform="rotate(26.01 1115.339 2408.102)"
          vectorEffect="none"
          writingMode="lr-tb"
        >
          {renderHouseNumber({ number: 30, x: 341.476, y: 285.346, position: 'top' })}
        </text>
        <text
          xmlSpace="preserve"
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'Baloo Bhai'",
            fontVariantLigatures: "normal",
            fontVariantPosition: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantAlternates: "normal",
            fontVariantEastAsian: "normal",
            fontFeatureSettings: "normal",
            fontVariationSettings: "normal",
            WebkitTextIndent: "0",
            textIndent: "0",
            WebkitTextAlign: "start",
            textAlign: "start",
            WebkitTextDecorationLine: "none",
            textDecorationLine: "none",
            WebkitTextDecorationStyle: "solid",
            textDecorationStyle: "solid",
            WebkitTextDecorationColor: "#000000",
            textDecorationColor: "#000000",
            WebkitTextTransform: "none",
            textTransform: "none",
            WebkitTextOrientation: "mixed",
            textOrientation: "mixed",
            whiteSpace: "normal",
            shapePadding: "0",
            shapeMargin: "0",
            inlineSize: "0",
            InkscapeStroke: "none",
          }}
          x="341.476"
          y="285.346"
          fill="#000"
          fillOpacity="1"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          baselineShift="baseline"
          direction="ltr"
          dominantBaseline="auto"
          fontFamily="Baloo Bhai"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          stopColor="#000"
          textAnchor="start"
          transform="rotate(29.303 1124.146 2012.092)"
          vectorEffect="none"
          writingMode="lr-tb"
        >
          {renderHouseNumber({ number: 31, x: 341.476, y: 285.346, position: 'top' })}
        </text>
        <text
          xmlSpace="preserve"
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'Baloo Bhai'",
            fontVariantLigatures: "normal",
            fontVariantPosition: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantAlternates: "normal",
            fontVariantEastAsian: "normal",
            fontFeatureSettings: "normal",
            fontVariationSettings: "normal",
            WebkitTextIndent: "0",
            textIndent: "0",
            WebkitTextAlign: "start",
            textAlign: "start",
            WebkitTextDecorationLine: "none",
            textDecorationLine: "none",
            WebkitTextDecorationStyle: "solid",
            textDecorationStyle: "solid",
            WebkitTextDecorationColor: "#000000",
            textDecorationColor: "#000000",
            WebkitTextTransform: "none",
            textTransform: "none",
            WebkitTextOrientation: "mixed",
            textOrientation: "mixed",
            whiteSpace: "normal",
            shapePadding: "0",
            shapeMargin: "0",
            inlineSize: "0",
            InkscapeStroke: "none",
          }}
          x="341.476"
          y="285.346"
          fill="#000"
          fillOpacity="1"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          baselineShift="baseline"
          direction="ltr"
          dominantBaseline="auto"
          fontFamily="Baloo Bhai"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          stopColor="#000"
          textAnchor="start"
          transform="rotate(29.55 1156.02 1848.858)"
          vectorEffect="none"
          writingMode="lr-tb"
        >
          {renderHouseNumber({ number: 32, x: 341.476, y: 285.346, position: 'top' })}
        </text>
        <text
          xmlSpace="preserve"
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'Baloo Bhai'",
            fontVariantLigatures: "normal",
            fontVariantPosition: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantAlternates: "normal",
            fontVariantEastAsian: "normal",
            fontFeatureSettings: "normal",
            fontVariationSettings: "normal",
            WebkitTextIndent: "0",
            textIndent: "0",
            WebkitTextAlign: "start",
            textAlign: "start",
            WebkitTextDecorationLine: "none",
            textDecorationLine: "none",
            WebkitTextDecorationStyle: "solid",
            textDecorationStyle: "solid",
            WebkitTextDecorationColor: "#000000",
            textDecorationColor: "#000000",
            WebkitTextTransform: "none",
            textTransform: "none",
            WebkitTextOrientation: "mixed",
            textOrientation: "mixed",
            whiteSpace: "normal",
            shapePadding: "0",
            shapeMargin: "0",
            inlineSize: "0",
            InkscapeStroke: "none",
          }}
          x="341.476"
          y="285.346"
          fill="#000"
          fillOpacity="1"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          baselineShift="baseline"
          direction="ltr"
          dominantBaseline="auto"
          fontFamily="Baloo Bhai"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          opacity="1"
          stopColor="#000"
          stopOpacity="1"
          textAnchor="start"
          transform="translate(142 -92)"
          vectorEffect="none"
          writingMode="lr-tb"
        >
          {renderHouseNumber({ number: 11, x: 341.476, y: 285.346 })}
        </text>
        <text
          xmlSpace="preserve"
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'Baloo Bhai'",
            fontVariantLigatures: "normal",
            fontVariantPosition: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantAlternates: "normal",
            fontVariantEastAsian: "normal",
            fontFeatureSettings: "normal",
            fontVariationSettings: "normal",
            WebkitTextIndent: "0",
            textIndent: "0",
            WebkitTextAlign: "start",
            textAlign: "start",
            WebkitTextDecorationLine: "none",
            textDecorationLine: "none",
            WebkitTextDecorationStyle: "solid",
            textDecorationStyle: "solid",
            WebkitTextDecorationColor: "#000000",
            textDecorationColor: "#000000",
            WebkitTextTransform: "none",
            textTransform: "none",
            WebkitTextOrientation: "mixed",
            textOrientation: "mixed",
            whiteSpace: "normal",
            shapePadding: "0",
            shapeMargin: "0",
            inlineSize: "0",
            InkscapeStroke: "none",
          }}
          x="341.476"
          y="285.346"
          fill="#000"
          fillOpacity="1"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          baselineShift="baseline"
          direction="ltr"
          dominantBaseline="auto"
          fontFamily="Baloo Bhai"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          opacity="1"
          stopColor="#000"
          stopOpacity="1"
          textAnchor="start"
          transform="translate(140 -46)"
          vectorEffect="none"
          writingMode="lr-tb"
        >
          {renderHouseNumber({ number: 10, x: 341.476, y: 285.346 })}
        </text>
      </g>
    </svg>
  );
}

export default Icon;
