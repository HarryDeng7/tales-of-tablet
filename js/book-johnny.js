(function () {
  "use strict";

  const A = window.StoryArt;
  const INK = A.INK;

  function mars(x, y, radius) {
    const r = radius;
    return `<g transform="translate(${x} ${y})">
      <circle r="${r + 22}" fill="#FFA47B" opacity=".18"/>
      <circle r="${r}" fill="#F17A4C" stroke="${INK}" stroke-width="6"/>
      <path d="M${-r * 0.78} ${-r * 0.15} C${-r * 0.55} ${-r * 0.52} ${-r * 0.12} ${-r * 0.56} ${r * 0.1} ${-r * 0.28} C${r * 0.35} ${-r * 0.02} ${r * 0.2} ${r * 0.3} ${-r * 0.08} ${r * 0.33} C${-r * 0.4} ${r * 0.37} ${-r * 0.66} ${r * 0.14} ${-r * 0.78} ${-r * 0.15} Z" fill="#D95F3E" opacity=".42"/>
      <circle cx="${-r * 0.42}" cy="${-r * 0.34}" r="${r * 0.14}" fill="#C95236" opacity=".62"/>
      <circle cx="${r * 0.38}" cy="${r * 0.18}" r="${r * 0.2}" fill="#C95236" opacity=".5"/>
      <circle cx="${r * 0.12}" cy="${-r * 0.45}" r="${r * 0.08}" fill="#FFB085" opacity=".75"/>
      <path d="M${-r * 0.42} ${-r * 0.84} Q0 ${-r * 1.02} ${r * 0.4} ${-r * 0.82} Q${r * 0.2} ${-r * 0.7} ${-r * 0.1} ${-r * 0.72} Q${-r * 0.3} ${-r * 0.74} ${-r * 0.42} ${-r * 0.84} Z" fill="#FFE6CE" opacity=".86"/>
    </g>`;
  }

  function earth(x, y, radius) {
    const r = radius;
    return `<g transform="translate(${x} ${y})">
      <circle r="${r + 18}" fill="#8ED8F8" opacity=".18"/>
      <circle r="${r}" fill="#4B9FE8" stroke="${INK}" stroke-width="5"/>
      <path d="M${-r * 0.64} ${-r * 0.24} C${-r * 0.44} ${-r * 0.56} ${-r * 0.06} ${-r * 0.62} ${r * 0.12} ${-r * 0.4} C${r * 0.3} ${-r * 0.2} ${r * 0.16} ${r * 0.1} ${-r * 0.06} ${r * 0.14} C${-r * 0.3} ${r * 0.18} ${-r * 0.48} ${r * 0.16} ${-r * 0.64} ${-r * 0.24} Z" fill="#69C486"/>
      <path d="M${r * 0.15} ${r * 0.18} C${r * 0.38} ${-r * 0.04} ${r * 0.66} ${r * 0.04} ${r * 0.62} ${r * 0.34} C${r * 0.56} ${r * 0.58} ${r * 0.22} ${r * 0.54} ${r * 0.15} ${r * 0.18} Z" fill="#69C486"/>
      <path d="M${-r * 0.74} ${r * 0.14} C${-r * 0.34} ${r * 0.34} ${r * 0.2} ${r * 0.32} ${r * 0.62} ${r * 0.1}" fill="none" stroke="#FFFFFF" stroke-width="${Math.max(4, r * 0.08)}" stroke-linecap="round" opacity=".72"/>
      <path d="M${-r * 0.42} ${-r * 0.6} C${-r * 0.06} ${-r * 0.48} ${r * 0.18} ${-r * 0.54} ${r * 0.48} ${-r * 0.38}" fill="none" stroke="#FFFFFF" stroke-width="${Math.max(3, r * 0.06)}" stroke-linecap="round" opacity=".55"/>
    </g>`;
  }

  function pip(x, y, scale) {
    const s = scale == null ? 1 : scale;
    return `<g transform="translate(${x} ${y}) scale(${s})">
      <ellipse cx="0" cy="5" rx="65" ry="10" fill="#6C2F23" opacity=".18"/>
      <g stroke="${INK}" stroke-width="5" stroke-linejoin="round" stroke-linecap="round">
        <path d="M-7 -88 L-7 -128" fill="none" stroke-width="4"/>
        <circle cx="-7" cy="-133" r="7" fill="#FFC83D"/>
        <path d="M-25 -128 Q-7 -143 11 -128" fill="none" stroke="#FFC83D" stroke-width="4" opacity=".8"/>
        <circle cx="-43" cy="-21" r="18" fill="#424A5B"/>
        <circle cx="0" cy="-21" r="18" fill="#424A5B"/>
        <circle cx="43" cy="-21" r="18" fill="#424A5B"/>
        <circle cx="-43" cy="-21" r="7" fill="#FFC83D"/>
        <circle cx="0" cy="-21" r="7" fill="#FFC83D"/>
        <circle cx="43" cy="-21" r="7" fill="#FFC83D"/>
        <path d="M-58 -83 Q-64 -52 -58 -31 L58 -31 Q64 -52 58 -83 Z" fill="#FFF2D2"/>
        <path d="M-58 -71 H58" fill="none" stroke="#D9B884" stroke-width="4" opacity=".7"/>
        <rect x="-30" y="-76" width="48" height="33" rx="9" fill="#244B62"/>
        <circle cx="-14" cy="-59" r="4.5" fill="#9FF6E7"/>
        <circle cx="3" cy="-59" r="4.5" fill="#9FF6E7"/>
        <path d="M-13 -49 Q-4 -42 5 -50" fill="none" stroke="#9FF6E7" stroke-width="3" stroke-linecap="round"/>
        ${A.fiveStar(38, -59, 8, "#FFC83D", INK, 2.5)}
        <path d="M54 -62 L81 -55 L81 -45 L53 -50" fill="#25BFA6"/>
        <circle cx="82" cy="-50" r="8" fill="#FF8A3D"/>
        <path d="M-56 -72 L-82 -82 L-82 -67 L-57 -62" fill="#25BFA6"/>
        <path d="M-60 -82 L-56 -100 L-44 -88" fill="#FFC83D"/>
      </g>
    </g>`;
  }

  function floatingSock(x, y, scale, rotation) {
    const s = scale == null ? 1 : scale;
    const rot = rotation == null ? 0 : rotation;
    return `<g transform="translate(${x} ${y}) scale(${s}) rotate(${rot})">
      <g stroke="${INK}" stroke-width="5" stroke-linejoin="round">
        <path d="M-18 -42 H22 V8 C22 18 31 20 31 31 C31 43 19 48 4 48 C-12 48 -18 40 -18 31Z" fill="#FFF7E7"/>
        <path d="M-18 -38 H22 V-23 H-18Z" fill="#FF6B57"/>
        <path d="M-18 -5 H22 M-18 9 H22" fill="none" stroke="#FF6B57" stroke-width="6"/>
        <path d="M22 33 Q28 32 31 35" fill="none" stroke="${INK}" stroke-width="3" opacity=".3"/>
      </g>
    </g>`;
  }

  function cover() {
    return `<svg viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="jCoverSky" x1="0" y1="0" x2="0.8" y2="1">
          <stop offset="0" stop-color="#111936"/>
          <stop offset="0.55" stop-color="#273768"/>
          <stop offset="1" stop-color="#41528E"/>
        </linearGradient>
        <linearGradient id="jCoverGlow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#FFD76B"/>
          <stop offset="1" stop-color="#FF8A3D"/>
        </linearGradient>
      </defs>
      <rect width="600" height="800" fill="url(#jCoverSky)"/>
      ${A.starField(58, 73, 600, 590)}
      <circle cx="493" cy="170" r="150" fill="url(#jCoverGlow)" opacity=".12"/>
      ${mars(442, 177, 107)}
      <g transform="translate(87 158)">
        ${earth(0, 0, 29)}
      </g>
      <path d="M70 620 C180 515 325 430 510 376" fill="none" stroke="#FFF0B8" stroke-width="3.5" stroke-dasharray="4 16" stroke-linecap="round" opacity=".55"/>
      <path d="M423 245 C450 265 468 290 482 324" fill="none" stroke="#FFE7B0" stroke-width="3" stroke-dasharray="2 12" stroke-linecap="round" opacity=".6"/>
      ${A.sparkle(122, 305, 12, "#FFD85E", 18, 1)}
      ${A.sparkle(513, 434, 9, "#BFEAF7", -12, 1)}
      ${A.sparkle(364, 108, 8, "#FFF7E7", 20, 0.9)}
      ${A.sparkle(95, 492, 7, "#FF8FB1", 4, 0.9)}
      <g transform="translate(0 20)">
        ${A.rocket(286, 546, 1.06, { face: true, rotate: -6, body: "#FF6B57", fin: "#25BFA6" })}
      </g>
      <g opacity=".92">
        <path d="M142 492 C119 517 110 546 112 576" fill="none" stroke="#FFF7E7" stroke-width="7" stroke-linecap="round" opacity=".5"/>
        <path d="M441 487 C463 508 475 535 477 564" fill="none" stroke="#FFF7E7" stroke-width="5" stroke-linecap="round" opacity=".38"/>
      </g>
      <circle cx="305" cy="686" r="7" fill="#FFC83D"/>
      <circle cx="333" cy="661" r="4" fill="#FFF7E7" opacity=".7"/>
    </svg>`;
  }

  function sceneRedDot() {
    return `<svg viewBox="0 0 900 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="j1Sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#101936"/>
          <stop offset="0.62" stop-color="#273A69"/>
          <stop offset="1" stop-color="#3C527F"/>
        </linearGradient>
      </defs>
      <rect width="900" height="700" fill="url(#j1Sky)"/>
      ${A.starField(52, 41)}
      <circle cx="122" cy="118" r="36" fill="#FFF0C7" opacity=".9"/>
      <circle cx="107" cy="106" r="34" fill="#273A69" opacity=".9"/>
      ${mars(762, 140, 67)}
      <path d="M0 522 C123 473 224 492 350 511 C510 536 637 467 900 493 V700 H0Z" fill="#244A52"/>
      <path d="M0 591 C154 548 280 574 410 587 C567 603 674 561 900 586 V700 H0Z" fill="#2F6253"/>
      <g transform="translate(742 460)" stroke="${INK}" stroke-width="5" stroke-linejoin="round">
        <path d="M0 0 H155 V130 H0Z" fill="#1C3349"/>
        <path d="M-10 0 L24 -31 H137 L165 0Z" fill="#1A2D43"/>
        <path d="M18 22 H53 V77 H18Z M91 22 H126 V77 H91Z" fill="#223F58"/>
      </g>
      <g stroke="${INK}" stroke-width="6" stroke-linejoin="round">
        <path d="M43 462 L145 361 L252 462 V632 H43Z" fill="#253B58"/>
        <path d="M22 473 L146 348 L274 473" fill="none" stroke-width="12" stroke-linecap="round"/>
        <path d="M203 388 V328 H235 V417" fill="#253B58"/>
        <path d="M72 483 H112 V542 H72Z" fill="#FFD36A"/>
        <path d="M117 483 H158 V542 H117Z" fill="#FFD36A"/>
        <path d="M173 474 H218 V533 H173Z" fill="#FFC35A"/>
        <path d="M92 483 V542 M72 512 H112 M137 483 V542 M117 513 H158" fill="none" stroke="#6B4A34" stroke-width="4"/>
        <path d="M195 474 V533 M173 503 H218" fill="none" stroke="#6B4A34" stroke-width="3.5"/>
        <path d="M58 561 Q79 541 100 561 Q121 541 142 561 Q163 541 184 561" fill="none" stroke="#C98E5C" stroke-width="5" stroke-linecap="round"/>
      </g>
      <g stroke="${INK}" stroke-width="5" stroke-linejoin="round">
        <path d="M769 486 V573 M815 480 V573 M858 486 V573" fill="none" stroke-width="5"/>
        <path d="M760 514 H873 M760 542 H873" fill="none" stroke-width="4"/>
      </g>
      ${A.telescope(236, 624, 0.86, -22)}
      ${A.johnny(486, 638, 0.98, { wave: true })}
      ${A.comet(673, 656, 0.96)}
      <g fill="#FFE57A">
        <circle cx="344" cy="487" r="4"/>
        <circle cx="371" cy="449" r="3"/>
        <circle cx="807" cy="518" r="4"/>
        <circle cx="845" cy="574" r="3"/>
      </g>
      <g opacity=".6" fill="#FFE57A">
        <circle cx="344" cy="487" r="11"/>
        <circle cx="371" cy="449" r="8"/>
        <circle cx="807" cy="518" r="10"/>
        <circle cx="845" cy="574" r="8"/>
      </g>
      ${A.tuft(325, 666, 1.1, "#3C8261")}
      ${A.tuft(708, 683, 0.9, "#3C8261")}
      ${A.tuft(88, 649, 0.9, "#3C8261")}
    </svg>`;
  }

  function sceneCardboardRocket() {
    return `<svg viewBox="0 0 900 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="j2Wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#FFE9B9"/>
          <stop offset="1" stop-color="#F3C17C"/>
        </linearGradient>
      </defs>
      <rect width="900" height="700" fill="url(#j2Wall)"/>
      <g stroke="#C98C4E" stroke-width="2" opacity=".42">
        <path d="M92 0V700 M215 0V700 M338 0V700 M461 0V700 M584 0V700 M707 0V700 M830 0V700"/>
      </g>
      <path d="M0 607 H900 V700 H0Z" fill="#BD7A47"/>
      <path d="M0 607 H900" stroke="${INK}" stroke-width="6"/>
      <path d="M0 641 H900 M0 675 H900" stroke="#9A5D36" stroke-width="3" opacity=".45"/>
      <g stroke="${INK}" stroke-width="7" stroke-linecap="round">
        <path d="M0 72 H900" fill="none"/>
        <path d="M54 0 V92 M252 0 V88 M646 0 V90 M835 0 V86" fill="none" stroke-width="9"/>
      </g>
      <g transform="translate(115 122) rotate(-4 150 100)" stroke="${INK}" stroke-width="5" stroke-linejoin="round">
        <rect x="0" y="0" width="286" height="202" rx="9" fill="#FFF9DF"/>
        <path d="M33 49 H250 M33 168 H250" fill="none" stroke="#9AA7BC" stroke-width="2" stroke-dasharray="6 7"/>
        <path d="M96 139 L119 63 C120 59 124 57 128 59 L162 137" fill="none" stroke="#FF6B57" stroke-width="5"/>
        <path d="M88 139 H171 M102 120 H157" fill="none" stroke="#26324B" stroke-width="4"/>
        <circle cx="123" cy="89" r="10" fill="#BFEAF7" stroke="#26324B" stroke-width="3.5"/>
        <path d="M203 77 l5 14 14 5-14 5-5 14-5-14-14-5 14-5Z" fill="#FFC83D" stroke="#26324B" stroke-width="3"/>
        <path d="M212 123 H251 M212 135 H238 M212 147 H247" fill="none" stroke="#8B97AA" stroke-width="3" stroke-linecap="round"/>
        <rect x="28" y="27" width="47" height="12" rx="4" fill="#FFC83D" stroke="#26324B" stroke-width="2.5"/>
        <path d="M-13 15 L20 4 L26 17 L-6 28Z" fill="#D9E9E5" opacity=".8" stroke="none"/>
        <path d="M265 -6 L284 1 L279 18 L260 11Z" fill="#D9E9E5" opacity=".8" stroke="none"/>
      </g>
      <g stroke="${INK}" stroke-width="6" stroke-linejoin="round">
        <rect x="430" y="262" width="124" height="52" rx="8" fill="#D98B4A"/>
        <path d="M448 262 V233 M532 262 V233" fill="none" stroke-width="7"/>
        <path d="M430 289 H554" fill="none" stroke="#A76535" stroke-width="4" opacity=".6"/>
      </g>
      ${A.rocket(574, 588, 1.04, { flame: false, body: "#F25E50", fin: "#FFC83D" })}
      <g stroke="${INK}" stroke-width="3" fill="#F8E5B7" opacity=".92">
        <path d="M508 332 L548 326 L552 342 L512 348Z" transform="rotate(7 530 337)"/>
        <path d="M604 447 L650 452 L646 467 L600 462Z" transform="rotate(-4 625 456)"/>
        <path d="M542 483 L583 485 L582 500 L541 498Z" transform="rotate(3 562 491)"/>
      </g>
      <g transform="translate(700 304) rotate(9)" stroke="${INK}" stroke-width="5" stroke-linejoin="round">
        <path d="M0 0 L-23 302 M52 0 L75 302" fill="none" stroke-width="7"/>
        <path d="M-20 63 H64 M-26 121 H70 M-32 181 H76 M-38 241 H82" fill="none" stroke="#A76535" stroke-width="6"/>
      </g>
      <g transform="translate(314 626)" stroke="${INK}" stroke-width="4">
        <ellipse cx="0" cy="0" rx="40" ry="15" fill="#EAD8B8"/>
        <ellipse cx="0" cy="-4" rx="24" ry="8" fill="#D6B789"/>
        <path d="M34 1 L68 12 L65 20 L31 11Z" fill="#EAD8B8"/>
      </g>
      <g transform="translate(760 598)" stroke="${INK}" stroke-width="5" stroke-linejoin="round">
        <path d="M-37 0 H37 L31 78 H-31Z" fill="#E45C4D"/>
        <ellipse cx="0" cy="0" rx="37" ry="12" fill="#F47C64"/>
        <ellipse cx="0" cy="0" rx="26" ry="7" fill="#B93F35"/>
        <path d="M17 1 C20 -45 29 -74 42 -88" fill="none" stroke="#FFD399" stroke-width="8" stroke-linecap="round"/>
        <path d="M29 -75 L45 -93 L52 -72 L37 -64Z" fill="#FFC83D"/>
        <path d="M-31 39 H31" fill="none" stroke="#B93F35" stroke-width="5"/>
      </g>
      ${A.johnny(242, 646, 0.94, { wave: true })}
      <g fill="#25BFA6">
        <circle cx="219" cy="561" r="5"/>
        <circle cx="261" cy="582" r="3.5"/>
      </g>
      <g fill="#FFC83D">
        <circle cx="283" cy="548" r="4"/>
        <circle cx="205" cy="600" r="3"/>
      </g>
      ${A.comet(767, 673, 0.82, { fur: "#EED7A8" })}
      <circle cx="748" cy="641" r="6" fill="#FF6B57"/>
      <g transform="translate(96 302)" stroke="${INK}" stroke-width="4">
        <rect x="0" y="0" width="74" height="94" rx="7" fill="#7EB8A3"/>
        <path d="M9 19 H65 M9 35 H60 M9 51 H66" fill="none" stroke="#FFF0C9" stroke-width="4"/>
        <circle cx="27" cy="78" r="7" fill="#FFC83D"/>
        <circle cx="48" cy="78" r="7" fill="#FF6B57"/>
      </g>
      ${A.tuft(120, 673, 0.8, "#7D9E42")}
    </svg>`;
  }

  function sceneCountdown() {
    return `<svg viewBox="0 0 900 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="j3Sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#34326C"/>
          <stop offset="0.5" stop-color="#8A547E"/>
          <stop offset="1" stop-color="#FFA879"/>
        </linearGradient>
      </defs>
      <rect width="900" height="700" fill="url(#j3Sky)"/>
      ${A.starField(28, 93, 900, 360, { colors: ["#FFF4C2", "#FFD85E", "#FFFFFF"] })}
      <circle cx="787" cy="118" r="41" fill="#FFF0C7"/>
      <circle cx="804" cy="108" r="39" fill="#5A4678"/>
      <path d="M0 524 C146 483 289 515 427 501 C593 484 725 513 900 481 V700 H0Z" fill="#423F5D"/>
      <path d="M0 590 C160 556 297 590 461 580 C632 569 760 593 900 568 V700 H0Z" fill="#315247"/>
      <g transform="translate(52 348)" stroke="${INK}" stroke-width="5" stroke-linejoin="round">
        <path d="M18 178 L-5 278 M151 178 L176 278" fill="none" stroke="#6B3F2B" stroke-width="7"/>
        <rect x="0" y="0" width="168" height="188" rx="10" fill="#2B344A"/>
        <rect x="12" y="12" width="144" height="164" rx="6" fill="#37485C"/>
        <text x="84" y="91" text-anchor="middle" font-family="'Trebuchet MS', sans-serif" font-size="59" font-weight="900" fill="#FFF0B5" stroke="#26324B" stroke-width="2">3·2·1</text>
        <path d="M42 125 H126" fill="none" stroke="#FF8A3D" stroke-width="7" stroke-linecap="round"/>
        <circle cx="42" cy="150" r="8" fill="#FF6B57"/>
        <circle cx="84" cy="150" r="8" fill="#FFC83D"/>
        <circle cx="126" cy="150" r="8" fill="#25BFA6"/>
      </g>
      <g transform="translate(205 572)" stroke="${INK}" stroke-width="5" stroke-linejoin="round">
        <path d="M-57 0 H58 L44 86 H-43Z" fill="#9C5D39"/>
        <path d="M-69 0 H70 V18 H-69Z" fill="#C27A4C"/>
        <path d="M-34 36 H32" fill="none" stroke="#7A4228" stroke-width="4" opacity=".55"/>
      </g>
      <g transform="translate(242 510)" stroke="${INK}" stroke-width="4.5">
        <path d="M-53 58 H51" fill="none" stroke-width="7"/>
        <path d="M-44 58 L-37 102 M41 58 L35 102" fill="none" stroke-width="6"/>
        <path d="M-28 0 H27 L20 57 H-20Z" fill="#FFF0C9"/>
        <path d="M-27 10 H26" fill="none" stroke="#FF8A3D" stroke-width="5"/>
        <path d="M15 30 Q32 22 38 33" fill="none" stroke="#FFC83D" stroke-width="7" stroke-linecap="round"/>
        <rect x="-40" y="41" width="19" height="18" rx="4" fill="#FFFDF4"/>
        <rect x="-13" y="45" width="19" height="15" rx="4" fill="#FFFDF4"/>
      </g>
      <g transform="translate(396 617)" stroke="${INK}" stroke-width="3.5">
        <ellipse cx="0" cy="6" rx="53" ry="10" fill="#F2D9A5"/>
        <path d="M-28 0 L34 0 C46 2 50 10 47 14 L-33 14Z" fill="#FFE0A0"/>
        <path d="M-24 3 C-10 -7 10 -7 25 3" fill="#FFC93D"/>
        <path d="M-21 3 C-10 -3 6 -3 16 3" fill="#FF6B57"/>
        <path d="M-14 -4 L-8 10 L-3 -4" fill="#7BC88B"/>
      </g>
      <g transform="rotate(-8 203 590)">
        ${A.johnny(191, 604, 0.65, { body: "#4B7BFF", pants: "#FF8FB1", hair: "#38272C", wave: false })}
        <path d="M197 398 C216 392 224 402 218 414" fill="none" stroke="#38272C" stroke-width="13" stroke-linecap="round"/>
        <g transform="translate(156 522)" stroke="${INK}" stroke-width="3.5">
          <rect x="0" y="0" width="45" height="57" rx="5" fill="#FFF4D6" transform="rotate(-6 22 28)"/>
          <path d="M8 14 H36 M8 24 H31 M8 34 H34 M8 44 H26" fill="none" stroke="#7A8AA2" stroke-width="2.5" transform="rotate(-6 22 28)"/>
        </g>
      </g>
      ${A.rocket(584, 593, 1.05, { flame: false, face: true, body: "#FF6B57", fin: "#25BFA6" })}
      <g stroke="${INK}" stroke-width="5" stroke-linejoin="round">
        <path d="M470 596 H700 V648 H470Z" fill="#A5653E"/>
        <path d="M490 596 V648 M535 596 V648 M625 596 V648 M670 596 V648" fill="none" stroke="#7A4228" stroke-width="3.5"/>
        <path d="M523 552 H646 V596 H523Z" fill="#C7834F"/>
        <path d="M523 572 H646" fill="none" stroke="#7A4228" stroke-width="4"/>
      </g>
      <g fill="#FFF7E7" opacity=".78">
        <circle cx="488" cy="621" r="24"/>
        <circle cx="459" cy="640" r="17"/>
        <circle cx="691" cy="624" r="21"/>
        <circle cx="724" cy="642" r="15"/>
      </g>
      <g fill="none" stroke="#FFE0A4" stroke-width="3" stroke-linecap="round" opacity=".8">
        <path d="M470 589 C446 600 432 619 425 644"/>
        <path d="M700 592 C726 597 746 610 760 629"/>
      </g>
      ${A.comet(337, 664, 0.78)}
      <path d="M0 42 C155 86 262 23 407 51 C564 82 658 25 900 61" fill="none" stroke="${INK}" stroke-width="4"/>
      <g>
        <circle cx="78" cy="58" r="8" fill="#FFD85E" stroke="${INK}" stroke-width="3"/>
        <circle cx="180" cy="53" r="8" fill="#FF8FB1" stroke="${INK}" stroke-width="3"/>
        <circle cx="280" cy="47" r="8" fill="#25BFA6" stroke="${INK}" stroke-width="3"/>
        <circle cx="387" cy="51" r="8" fill="#FFD85E" stroke="${INK}" stroke-width="3"/>
        <circle cx="500" cy="62" r="8" fill="#FF8FB1" stroke="${INK}" stroke-width="3"/>
        <circle cx="625" cy="60" r="8" fill="#25BFA6" stroke="${INK}" stroke-width="3"/>
        <circle cx="738" cy="52" r="8" fill="#FFD85E" stroke="${INK}" stroke-width="3"/>
        <circle cx="846" cy="58" r="8" fill="#FF8FB1" stroke="${INK}" stroke-width="3"/>
      </g>
      ${A.tuft(452, 688, 0.95, "#3D7353")}
      ${A.tuft(820, 673, 0.8, "#3D7353")}
    </svg>`;
  }

  function sceneBlastOff() {
    return `<svg viewBox="0 0 900 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="j4Sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#0E1736"/>
          <stop offset="0.42" stop-color="#294B85"/>
          <stop offset="0.72" stop-color="#62B9DD"/>
          <stop offset="1" stop-color="#FFD9A8"/>
        </linearGradient>
      </defs>
      <rect width="900" height="700" fill="url(#j4Sky)"/>
      ${A.starField(42, 55, 900, 430)}
      ${A.cloud(690, 558, 1.15, 0.92)}
      ${A.cloud(180, 625, 1.35, 0.82)}
      ${earth(164, 577, 103)}
      <g fill="none" stroke="#FFF7E7" stroke-linecap="round" opacity=".44">
        <path d="M612 580 C630 516 632 422 615 333" stroke-width="6"/>
        <path d="M676 604 C700 523 701 414 679 302" stroke-width="3.5"/>
        <path d="M372 617 C351 537 354 439 376 344" stroke-width="4"/>
        <path d="M742 538 C771 476 779 407 773 344" stroke-width="2.5"/>
      </g>
      <g opacity=".75" fill="#FFF7E7">
        ${A.sparkle(303, 218, 9, "#FFF7E7", 12, 0.8)}
        ${A.sparkle(721, 264, 7, "#FFD85E", -20, 0.8)}
        ${A.sparkle(146, 269, 6, "#BFEAF7", 15, 0.8)}
      </g>
      ${floatingSock(757, 261, 1.05, 24)}
      <g transform="translate(0 8)">
        ${A.rocket(496, 612, 1.31, { face: true, rotate: -6, body: "#FF6B57", fin: "#25BFA6" })}
      </g>
      <g opacity=".22" fill="#FFC83D">
        <circle cx="528" cy="700" r="58"/>
        <circle cx="449" cy="693" r="45"/>
        <circle cx="604" cy="694" r="37"/>
      </g>
      <path d="M0 683 C111 663 188 690 283 686 C380 682 441 656 535 674 C653 696 751 669 900 686 V700 H0Z" fill="#FFF3D6" opacity=".9"/>
    </svg>`;
  }

  function sceneZeroG() {
    return `<svg viewBox="0 0 900 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="j5Cabin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#1F4C60"/>
          <stop offset="1" stop-color="#163344"/>
        </linearGradient>
        <clipPath id="j5Window">
          <circle cx="357" cy="279" r="169"/>
        </clipPath>
        <linearGradient id="j5WindowSky" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#111936"/>
          <stop offset="1" stop-color="#354A85"/>
        </linearGradient>
      </defs>
      <rect width="900" height="700" fill="url(#j5Cabin)"/>
      <g stroke="#3B7686" stroke-width="3" opacity=".55">
        <path d="M0 90 H900 M0 278 H900 M0 466 H900"/>
        <path d="M94 0 V500 M282 0 V500 M670 0 V500 M835 0 V500"/>
      </g>
      <g fill="#5F9AA6" opacity=".75">
        <circle cx="45" cy="42" r="5"/><circle cx="144" cy="42" r="5"/><circle cx="332" cy="42" r="5"/>
        <circle cx="720" cy="42" r="5"/><circle cx="858" cy="42" r="5"/><circle cx="45" cy="228" r="5"/>
      </g>
      <circle cx="357" cy="279" r="190" fill="#0F1C36" stroke="${INK}" stroke-width="8"/>
      <g clip-path="url(#j5Window)">
        <rect x="188" y="110" width="340" height="340" fill="url(#j5WindowSky)"/>
        ${A.starField(34, 77, 900, 700)}
        ${mars(412, 272, 72)}
        ${earth(286, 386, 23)}
        <path d="M220 158 C267 184 302 226 316 277" fill="none" stroke="#FFF7E7" stroke-width="3" stroke-dasharray="3 12" opacity=".55"/>
      </g>
      <circle cx="357" cy="279" r="174" fill="none" stroke="#E8F7F6" stroke-width="5" opacity=".5"/>
      <circle cx="357" cy="279" r="200" fill="none" stroke="#4E8C99" stroke-width="12" opacity=".55"/>
      <g fill="#BFDAD9">
        <circle cx="202" cy="140" r="7"/><circle cx="512" cy="113" r="7"/>
        <circle cx="548" cy="388" r="7"/><circle cx="179" cy="302" r="7"/>
        <circle cx="285" cy="471" r="7"/><circle cx="465" cy="486" r="7"/>
      </g>
      <path d="M614 151 C677 126 742 133 789 172" fill="none" stroke="#3B7686" stroke-width="6" opacity=".6"/>
      <g transform="translate(760 211) rotate(15)" stroke="${INK}" stroke-width="4" stroke-linejoin="round">
        <path d="M-30 -18 L36 -42 C48 -46 57 -38 52 -27 L31 21 C27 30 17 34 9 29 L-28 8 C-39 2 -40 -10 -30 -18Z" fill="#FFE0A0"/>
        <path d="M-10 -31 L18 7" stroke="#FFC93D" stroke-width="10"/>
        <path d="M19 4 C35 2 41 11 34 17 C27 22 19 17 19 11" fill="#7BC88B"/>
      </g>
      ${floatingSock(804, 394, 1.05, -20)}
      <g transform="rotate(-11 652 270)">
        ${A.johnny(649, 424, 0.91, { helmet: true, wave: false })}
      </g>
      <g transform="rotate(13 159 323)">
        ${A.comet(165, 443, 0.86, { helmet: true })}
      </g>
      <g fill="none" stroke="#FFF7E7" stroke-width="3" stroke-linecap="round" opacity=".65">
        <path d="M590 465 C600 480 610 489 626 494"/>
        <path d="M239 475 C228 488 221 499 219 511"/>
      </g>
      <g stroke="${INK}" stroke-width="6" stroke-linejoin="round">
        <path d="M0 578 C60 545 146 533 247 534 H663 C771 534 838 550 900 585 V700 H0Z" fill="#E5B56A"/>
        <path d="M0 610 H900" fill="none" stroke="#B47D41" stroke-width="5" opacity=".55"/>
        <path d="M243 534 L280 700 M665 534 L630 700" fill="none" stroke="#B47D41" stroke-width="5" opacity=".55"/>
      </g>
      <g stroke="${INK}" stroke-width="4.5">
        <rect x="310" y="576" width="122" height="72" rx="12" fill="#314B5C"/>
        <rect x="327" y="591" width="88" height="31" rx="6" fill="#A8EFE2"/>
        <path d="M337 606 H405 M337 615 H385" fill="none" stroke="#2E6B70" stroke-width="3" stroke-linecap="round"/>
        <circle cx="477" cy="602" r="14" fill="#FF6B57"/>
        <circle cx="512" cy="602" r="14" fill="#FFC83D"/>
        <circle cx="547" cy="602" r="14" fill="#25BFA6"/>
        <rect x="594" y="581" width="109" height="80" rx="14" fill="#2A4354"/>
        <circle cx="626" cy="611" r="9" fill="#FF8FB1"/>
        <circle cx="650" cy="611" r="9" fill="#FFC83D"/>
        <path d="M612 635 H682" fill="none" stroke="#75B9C0" stroke-width="5" stroke-linecap="round"/>
        <path d="M675 574 L695 546" fill="none" stroke-width="8" stroke-linecap="round"/>
        <circle cx="699" cy="540" r="13" fill="#FF6B57"/>
      </g>
      <g opacity=".8" fill="none" stroke="#FFE2A0" stroke-width="3" stroke-linecap="round">
        <path d="M78 87 l8 8 M86 87 l-8 8"/>
        <path d="M815 103 l8 8 M823 103 l-8 8"/>
        <path d="M740 473 l7 7 M747 473 l-7 7"/>
      </g>
    </svg>`;
  }

  function sceneMarsHello() {
    return `<svg viewBox="0 0 900 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="j6Sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#F6A17D"/>
          <stop offset="0.55" stop-color="#FFC39D"/>
          <stop offset="1" stop-color="#FFE3BC"/>
        </linearGradient>
      </defs>
      <rect width="900" height="700" fill="url(#j6Sky)"/>
      <g opacity=".7">
        <circle cx="240" cy="102" r="15" fill="#E38C6B"/>
        <circle cx="302" cy="155" r="8" fill="#D97A5B"/>
        <circle cx="816" cy="91" r="4" fill="#FFF1D6"/>
        <circle cx="646" cy="131" r="3" fill="#FFF1D6"/>
      </g>
      <circle cx="117" cy="113" r="37" fill="#FFDDA9" opacity=".8"/>
      ${earth(164, 221, 18)}
      <g stroke="${INK}" stroke-width="4" opacity=".8">
        <path d="M153 194 L144 183 M175 201 L184 190 M147 230 L134 227" fill="none" stroke-width="3" stroke-linecap="round"/>
      </g>
      <path d="M614 472 L743 254 C751 241 763 241 771 254 L900 472Z" fill="#B95A44" stroke="${INK}" stroke-width="6"/>
      <path d="M710 318 L743 254 C751 241 763 241 771 254 L805 318 C781 332 734 332 710 318Z" fill="#8F4034" stroke="${INK}" stroke-width="5"/>
      <path d="M743 271 L752 288 L740 300 M771 281 L762 296" fill="none" stroke="#E38C6B" stroke-width="4" stroke-linecap="round"/>
      <path d="M0 466 C143 429 235 446 337 467 C465 493 563 449 692 465 C771 475 832 464 900 447 V700 H0Z" fill="#C96147"/>
      <path d="M0 552 C127 511 245 546 376 556 C528 568 626 525 900 548 V700 H0Z" fill="#E47D55"/>
      <path d="M0 630 C157 597 291 623 440 631 C609 640 730 608 900 627 V700 H0Z" fill="#C45E43"/>
      <g fill="#9C4336" opacity=".55">
        <ellipse cx="112" cy="602" rx="51" ry="14"/>
        <ellipse cx="753" cy="592" rx="35" ry="10"/>
        <ellipse cx="505" cy="668" rx="70" ry="15"/>
        <ellipse cx="349" cy="665" rx="23" ry="7"/>
      </g>
      <g stroke="${INK}" stroke-width="4" stroke-linejoin="round">
        <path d="M250 547 L274 527 L296 548 L289 571 L258 572Z" fill="#A84538"/>
        <path d="M812 540 L836 515 L858 541 L849 568 L817 568Z" fill="#A84538"/>
        <path d="M84 494 L102 480 L120 495 L116 512 L90 512Z" fill="#9F4034"/>
      </g>
      <g fill="#8C3A2F" opacity=".55">
        <ellipse cx="612" cy="614" rx="13" ry="6" transform="rotate(-8 612 614)"/>
        <ellipse cx="577" cy="646" rx="13" ry="6" transform="rotate(10 577 646)"/>
        <ellipse cx="674" cy="661" rx="13" ry="6" transform="rotate(-8 674 661)"/>
        <ellipse cx="715" cy="622" rx="13" ry="6" transform="rotate(12 715 622)"/>
      </g>
      <g stroke="${INK}" stroke-width="4" stroke-linecap="round" opacity=".52">
        <path d="M455 591 C477 582 499 582 517 593" fill="none"/>
        <path d="M474 635 C497 626 521 627 540 638" fill="none"/>
        <path d="M221 620 C241 613 259 614 275 622" fill="none"/>
      </g>
      ${pip(394, 598, 1.02)}
      <g fill="none" stroke="#FFF1D6" stroke-width="4" stroke-linecap="round" opacity=".85">
        <path d="M325 507 C306 494 299 476 301 458"/>
        <path d="M307 500 C283 489 270 471 269 451"/>
        <path d="M470 508 C489 495 496 477 494 459"/>
      </g>
      <g transform="rotate(3 641 566)">
        ${A.johnny(643, 638, 0.91, { helmet: true, wave: true })}
      </g>
      ${A.tuft(524, 673, 0.8, "#9D4B35")}
      ${A.tuft(808, 662, 0.7, "#9D4B35")}
      <g>
        <path d="M262 435 C281 424 305 424 324 435" fill="none" stroke="#E88E6D" stroke-width="5" stroke-linecap="round" opacity=".65"/>
        <path d="M287 416 C299 409 313 409 325 416" fill="none" stroke="#E88E6D" stroke-width="3.5" stroke-linecap="round" opacity=".5"/>
      </g>
    </svg>`;
  }

  function sceneMarsGarden() {
    return `<svg viewBox="0 0 900 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="j7Sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#F8A17F"/>
          <stop offset="0.6" stop-color="#FFC9A6"/>
          <stop offset="1" stop-color="#FFE7C8"/>
        </linearGradient>
        <linearGradient id="j7Glass" x1="0" y1="0" x2="0.7" y2="1">
          <stop offset="0" stop-color="#DFFBF5" stop-opacity=".8"/>
          <stop offset="1" stop-color="#9EE3DA" stop-opacity=".4"/>
        </linearGradient>
        <clipPath id="j7DomeClip">
          <path d="M337 474 C337 328 444 219 579 219 C714 219 821 328 821 474Z"/>
        </clipPath>
      </defs>
      <rect width="900" height="700" fill="url(#j7Sky)"/>
      <g opacity=".8">
        <circle cx="109" cy="106" r="33" fill="#FFDCA8"/>
        <path d="M109 51 V34 M109 178 V161 M54 106 H37 M181 106 H164 M70 67 L58 55 M148 145 L160 157 M148 67 L160 55 M70 145 L58 157" stroke="#FFDCA8" stroke-width="5" stroke-linecap="round"/>
      </g>
      ${earth(161, 214, 17)}
      <path d="M0 474 C157 439 274 469 403 477 C569 487 697 447 900 467 V700 H0Z" fill="#CE6C4E"/>
      <path d="M0 561 C151 526 281 555 437 563 C589 571 728 543 900 554 V700 H0Z" fill="#E68359"/>
      <path d="M0 641 C169 610 306 637 459 641 C624 645 753 617 900 633 V700 H0Z" fill="#C35E43"/>
      <g clip-path="url(#j7DomeClip)">
        <path d="M337 474 C337 328 444 219 579 219 C714 219 821 328 821 474Z" fill="url(#j7Glass)"/>
        <path d="M337 474 C400 459 472 456 548 457 C648 458 740 462 821 474 V500 H337Z" fill="#7B3F30"/>
        <g stroke="${INK}" stroke-width="3.5">
          <path d="M368 514 C370 465 378 422 398 388" fill="none" stroke="#4A9B64" stroke-width="8" stroke-linecap="round"/>
          <path d="M380 441 C354 421 345 399 350 372 C375 386 391 408 394 435Z" fill="#79BF83"/>
          <path d="M390 402 C415 383 429 359 428 332 C401 344 386 367 384 395Z" fill="#8FD49A"/>
          <path d="M448 516 C447 465 455 421 476 386" fill="none" stroke="#4A9B64" stroke-width="8" stroke-linecap="round"/>
          <path d="M460 451 C436 431 427 405 432 380 C456 394 470 419 471 444Z" fill="#79BF83"/>
          <path d="M469 405 C492 384 503 359 501 333 C476 347 462 370 462 396Z" fill="#8FD49A"/>
          <path d="M575 514 C575 469 582 428 600 393" fill="none" stroke="#4A9B64" stroke-width="8" stroke-linecap="round"/>
          <path d="M590 439 C615 420 625 394 620 368 C596 382 583 405 582 432Z" fill="#79BF83"/>
          <path d="M596 391 C573 372 563 347 565 322 C589 335 603 358 604 383Z" fill="#8FD49A"/>
          <path d="M690 514 C691 467 698 426 715 392" fill="none" stroke="#4A9B64" stroke-width="8" stroke-linecap="round"/>
          <path d="M704 444 C728 425 738 399 733 373 C709 387 696 410 695 437Z" fill="#79BF83"/>
          <path d="M712 402 C689 383 679 358 681 333 C705 346 719 369 720 394Z" fill="#8FD49A"/>
          <path d="M776 510 C776 466 782 431 797 402" fill="none" stroke="#4A9B64" stroke-width="8" stroke-linecap="round"/>
          <path d="M788 444 C810 426 819 403 815 379 C793 392 781 413 780 438Z" fill="#79BF83"/>
        </g>
        <g fill="#FFC83D">
          <circle cx="374" cy="416" r="6"/>
          <circle cx="560" cy="444" r="6"/>
          <circle cx="731" cy="418" r="6"/>
          <circle cx="793" cy="466" r="5"/>
        </g>
      </g>
      <path d="M337 474 C337 328 444 219 579 219 C714 219 821 328 821 474" fill="none" stroke="${INK}" stroke-width="7"/>
      <g stroke="${INK}" stroke-width="4.5" opacity=".78">
        <path d="M579 219 V474 M480 234 C431 295 403 380 400 474 M678 234 C727 295 755 380 758 474 M369 365 H789"/>
        <path d="M406 474 H752" fill="none" stroke-width="10" stroke="#B9A26E"/>
      </g>
      <g transform="translate(808 348)" stroke="${INK}" stroke-width="4.5" stroke-linejoin="round">
        <path d="M0 240 V0" fill="none" stroke-width="7" stroke-linecap="round"/>
        <path d="M3 8 C42 -10 76 16 112 1 C107 35 109 57 107 87 C72 100 41 79 4 92Z" fill="#FF6B57"/>
        ${A.fiveStar(57, 42, 17, "#FFF7E7", INK, 3)}
        <path d="M72 65 C81 60 91 63 94 71" fill="none" stroke="#FFC83D" stroke-width="5" stroke-linecap="round"/>
      </g>
      <g transform="translate(459 590)" stroke="${INK}" stroke-width="5" stroke-linejoin="round">
        <path d="M-49 -42 H49 L37 45 H-37Z" fill="#C96C46"/>
        <path d="M-56 -42 H56 V-22 H-56Z" fill="#E78A5F"/>
        <path d="M-34 8 H34" fill="none" stroke="#A94F33" stroke-width="4" opacity=".6"/>
        <path d="M0 -42 C-2 -72 -11 -91 -27 -102" fill="none" stroke="#3C8E59" stroke-width="7" stroke-linecap="round"/>
        <path d="M-13 -79 C-38 -92 -45 -112 -39 -130 C-18 -116 -8 -98 -9 -82Z" fill="#75C180"/>
        <path d="M-10 -90 C10 -108 17 -128 11 -146 C-8 -134 -17 -115 -16 -96Z" fill="#8ED89A"/>
      </g>
      <g transform="translate(560 621)" stroke="${INK}" stroke-width="4" stroke-linejoin="round">
        <path d="M-32 -2 H32 L26 39 H-26Z" fill="#7AD0C0"/>
        <path d="M26 -8 H64 L59 33 H23" fill="none" stroke-width="6"/>
        <path d="M64 -4 C82 -14 95 -5 92 11 C88 25 72 27 65 20" fill="none" stroke-width="6"/>
        <path d="M-18 -2 C-9 -20 9 -20 18 -2" fill="none" stroke="#2D877E" stroke-width="5"/>
      </g>
      ${pip(710, 622, 0.76)}
      <g transform="rotate(5 279 578)">
        ${A.johnny(278, 641, 0.9, { helmet: true, wave: false })}
      </g>
      <g transform="translate(327 574)" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round">
        <rect x="0" y="0" width="43" height="55" rx="5" fill="#FFF3D6" transform="rotate(-7 21 27)"/>
        <path d="M10 18 C13 8 29 8 32 18 C35 28 25 36 21 43 C17 36 7 28 10 18Z" fill="#7BC88B" transform="rotate(-7 21 27)"/>
        <path d="M21 20 V38" stroke="#3D7C4F" stroke-width="2.5" transform="rotate(-7 21 27)"/>
      </g>
      ${A.tuft(211, 680, 0.8, "#A04B37")}
      ${A.tuft(609, 688, 0.8, "#A04B37")}
      <circle cx="222" cy="531" r="4" fill="#FFE0A4"/>
      <circle cx="252" cy="507" r="2.5" fill="#FFE0A4"/>
    </svg>`;
  }

  function sceneHome() {
    return `<svg viewBox="0 0 900 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="j8Sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#101936"/>
          <stop offset="0.65" stop-color="#263B68"/>
          <stop offset="1" stop-color="#40557E"/>
        </linearGradient>
      </defs>
      <rect width="900" height="700" fill="url(#j8Sky)"/>
      ${A.starField(45, 19)}
      ${mars(787, 144, 61)}
      <path d="M0 530 C145 489 272 517 421 528 C585 540 731 500 900 519 V700 H0Z" fill="#223F49"/>
      <path d="M0 609 C161 568 294 596 452 604 C621 612 752 582 900 599 V700 H0Z" fill="#2C5A4D"/>
      <g stroke="${INK}" stroke-width="6" stroke-linejoin="round">
        <path d="M-20 487 L95 378 L210 487 V658 H-20Z" fill="#283A55"/>
        <path d="M-37 497 L95 364 L227 497" fill="none" stroke-width="12" stroke-linecap="round"/>
        <rect x="27" y="405" width="105" height="80" rx="5" fill="#FFC83D"/>
        <path d="M79 405 V485 M27 445 H132" fill="none" stroke="#8A5C36" stroke-width="4"/>
        <rect x="157" y="430" width="31" height="49" rx="4" fill="#FFC83D"/>
        <path d="M166 381 V348 H192 V399" fill="#283A55"/>
        <path d="M43 485 V658 M143 485 V658 M-20 540 H210" fill="none" stroke="#1D2C41" stroke-width="4"/>
      </g>
      <g fill="#3A2E35">
        <circle cx="64" cy="431" r="14"/>
        <path d="M41 458 C42 439 53 430 64 430 C77 430 88 440 89 458Z"/>
        <circle cx="101" cy="438" r="12"/>
        <path d="M82 461 C83 446 91 437 101 437 C112 437 120 446 121 461Z"/>
      </g>
      <g transform="translate(212 294) rotate(4 45 50)" stroke="${INK}" stroke-width="4" stroke-linejoin="round">
        <rect x="0" y="0" width="91" height="104" rx="4" fill="#FFF8E3"/>
        <rect x="10" y="10" width="71" height="63" rx="2" fill="#BFEAF7"/>
        <path d="M23 62 L38 38 C41 34 46 34 49 38 L64 62Z" fill="#F17A4C"/>
        <path d="M33 60 L41 46 L49 60Z" fill="#E4574B"/>
        <circle cx="31" cy="27" r="6" fill="#FFD85E"/>
        <path d="M22 51 L33 46 L44 51" fill="none" stroke="#FFF7E7" stroke-width="3"/>
        <path d="M35 80 H62" fill="none" stroke="#7A8AA2" stroke-width="3" stroke-linecap="round"/>
        <path d="M35 88 H54" fill="none" stroke="#7A8AA2" stroke-width="3" stroke-linecap="round"/>
        <path d="M-8 -13 L17 -23 L23 -8 L-2 2Z" fill="#D8E9E4" opacity=".78" stroke="none"/>
        <path d="M78 -10 L98 -4 L93 10 L73 4Z" fill="#D8E9E4" opacity=".78" stroke="none"/>
      </g>
      <g fill="none" stroke="${INK}" stroke-width="4">
        <path d="M206 322 C290 243 444 239 555 280" fill="none"/>
      </g>
      <g>
        <circle cx="252" cy="292" r="6" fill="#FFD85E" stroke="${INK}" stroke-width="3"/>
        <circle cx="329" cy="266" r="6" fill="#FF8FB1" stroke="${INK}" stroke-width="3"/>
        <circle cx="408" cy="252" r="6" fill="#25BFA6" stroke="${INK}" stroke-width="3"/>
        <circle cx="487" cy="255" r="6" fill="#FFD85E" stroke="${INK}" stroke-width="3"/>
        <circle cx="552" cy="278" r="6" fill="#FF8FB1" stroke="${INK}" stroke-width="3"/>
      </g>
      ${A.telescope(305, 650, 0.91, -25)}
      <g transform="translate(718 626)">
        ${A.comet(0, 0, 0.92, { fur: "#EED7A8" })}
      </g>
      <g transform="translate(515 624)">
        ${A.johnny(0, 0, 0.94, { wave: false })}
        <g stroke="${INK}" stroke-width="4.5" stroke-linejoin="round">
          <path d="M-118 42 C-133 -30 -82 -104 3 -107 C90 -110 145 -30 123 44 C99 113 -88 117 -118 42Z" fill="#2DB7A0"/>
          <path d="M-104 25 C-115 -34 -68 -84 0 -86 C71 -88 118 -36 103 29 C84 83 -86 80 -104 25Z" fill="#65D0BC"/>
          ${A.sparkle(-52, -22, 7, "#FFF0B5", 15, 0.95)}
          ${A.sparkle(27, -38, 5, "#FFF0B5", -12, 0.8)}
          ${A.sparkle(57, 3, 6, "#FFF0B5", 22, 0.7)}
          <path d="M36 45 H73 V84 H36Z" fill="#FFF4D6"/>
          <path d="M54 45 V84" fill="none" stroke="#C49C64" stroke-width="3"/>
          <path d="M73 53 C87 51 87 71 73 70" fill="none" stroke="${INK}" stroke-width="5"/>
          <path d="M63 37 C57 26 67 22 61 12 M77 37 C71 27 81 22 76 13" fill="none" stroke="#FFF7E7" stroke-width="3" stroke-linecap="round" opacity=".8"/>
        </g>
      </g>
      <g transform="translate(92 625)" stroke="${INK}" stroke-width="4" stroke-linejoin="round">
        <rect x="0" y="0" width="80" height="46" rx="7" fill="#B97A4B"/>
        <path d="M0 14 H80" fill="none" stroke="#8E562F" stroke-width="3"/>
        <path d="M12 0 V46 M37 0 V46 M61 0 V46" fill="none" stroke="#8E562F" stroke-width="2.5" opacity=".6"/>
        <path d="M15 -37 L27 -63 L41 -34Z" fill="#FFC83D"/>
        <path d="M25 -37 L35 -55 L47 -34Z" fill="#FF6B57"/>
      </g>
      <g fill="#FFE57A">
        <circle cx="426" cy="507" r="4"/>
        <circle cx="461" cy="542" r="3"/>
        <circle cx="849" cy="520" r="4"/>
        <circle cx="810" cy="576" r="3"/>
      </g>
      <g opacity=".55" fill="#FFE57A">
        <circle cx="426" cy="507" r="11"/>
        <circle cx="461" cy="542" r="8"/>
        <circle cx="849" cy="520" r="10"/>
        <circle cx="810" cy="576" r="8"/>
      </g>
      ${A.tuft(383, 685, 0.8, "#357158")}
      ${A.tuft(660, 689, 0.75, "#357158")}
    </svg>`;
  }

  const pages = [
    {
      kicker: "Chapter One",
      title: "The Red Dot",
      text: "Every night, Johnny counted stars from his backyard. But one bright dot did not twinkle like the others. It glowed a rusty red. “That’s Mars,” he whispered. “And one day, I’m going there.”",
      art: sceneRedDot(),
      hotspots: [
        {
          x: 84,
          y: 20,
          label: "Mars",
          title: "Meet Mars",
          text: "Mars is called the Red Planet because its dust is full of rusty iron. It is about half the size of Earth.",
          doodle: "planet",
          accent: "#FF8A3D"
        },
        {
          x: 26,
          y: 76,
          label: "Telescope",
          title: "The wobbly telescope",
          text: "Johnny’s telescope was a paper tube with two glass marbles. It made the moon look like a wobbly egg.",
          doodle: "telescope",
          accent: "#25BFA6"
        },
        {
          x: 73,
          y: 87,
          label: "Comet",
          title: "Comet, co-pilot",
          text: "Comet did not know what Mars was. But if Johnny was going, Comet was going too. Dogs make excellent co-pilots.",
          doodle: "paw",
          accent: "#FFC83D"
        }
      ]
    },
    {
      kicker: "Chapter Two",
      title: "The Cardboard Rocket",
      text: "Johnny dragged boxes out of the garage. A bucket became the nose cone. Cardboard fins went on with forty-seven pieces of tape. Then he painted the whole thing rocket red. “It still needs one thing,” he said. “Imagination.”",
      art: sceneCardboardRocket(),
      hotspots: [
        {
          x: 17,
          y: 32,
          label: "The plan",
          title: "The master plan",
          text: "Step one: find boxes. Step two: add tape. Step three: pack a snack. The plan had one rule in big letters: HAVE FUN.",
          doodle: "book",
          accent: "#4B7BFF"
        },
        {
          x: 37,
          y: 88,
          label: "Tape",
          title: "Forty-seven pieces",
          text: "Grandpa said tape could fix anything. Johnny tested the theory on the wings, the window, and his left shoe.",
          doodle: "tool",
          accent: "#FF8A3D"
        },
        {
          x: 84,
          y: 80,
          label: "Paint",
          title: "Rocket red",
          text: "The paint tin said “Barn Red.” Johnny crossed out “Barn” and wrote “ROCKET.” Much better.",
          doodle: "tool",
          accent: "#FF6B57"
        }
      ]
    },
    {
      kicker: "Chapter Three",
      title: "Three... Two... One...",
      text: "Maya made a countdown sign. Comet hid behind the lemonade. Johnny packed one important sandwich. “Three... two... one...” The cardboard rattled. The garden held its breath. Then — WHOOSH!",
      art: sceneCountdown(),
      hotspots: [
        {
          x: 18,
          y: 60,
          label: "Countdown",
          title: "Ready, set...",
          text: "Try it out loud: Three... two... one... BLAST OFF! A countdown makes every adventure feel official.",
          doodle: "star",
          accent: "#FF8A3D"
        },
        {
          x: 29,
          y: 82,
          label: "Lemonade",
          title: "Mission fuel",
          text: "Lemonade is not real rocket fuel. It is, however, excellent for countdown parties and very sticky hands.",
          doodle: "snack",
          accent: "#FFC83D"
        },
        {
          x: 48,
          y: 87,
          label: "Sandwich",
          title: "The most important cargo",
          text: "Peanut butter, banana, and one chocolate chip. For emergencies only. Or for right now.",
          doodle: "snack",
          accent: "#25BFA6"
        }
      ]
    },
    {
      kicker: "Chapter Four",
      title: "Up, Up, and Away",
      text: "The fence grew tiny. The town grew tinier. The whole Earth became a blue marble below him. Johnny laughed so hard that his helmet fogged up. Space was much bigger than his backyard.",
      art: sceneBlastOff(),
      hotspots: [
        {
          x: 18,
          y: 82,
          label: "Earth",
          title: "Home, sweet home",
          text: "Most of Earth looks blue from space because it is covered in ocean. The white swirls are clouds and storms.",
          doodle: "home",
          accent: "#4B7BFF"
        },
        {
          x: 57,
          y: 88,
          label: "Whoosh",
          title: "Whoosh power",
          text: "Johnny’s rocket ran on imagination, glue, and a very loud WHOOSH. The WHOOSH was the most important part.",
          doodle: "rocket",
          accent: "#FF8A3D"
        },
        {
          x: 83,
          y: 37,
          label: "Sock",
          title: "The runaway sock",
          text: "One sock escaped during lift-off. It is still floating somewhere, being the fastest sock in the solar system.",
          doodle: "star",
          accent: "#FF8FB1"
        }
      ]
    },
    {
      kicker: "Chapter Five",
      title: "Zero-G Snack Time",
      text: "In space, nothing stayed put. Comet floated. The sandwich floated. Even Johnny’s hiccups floated. Outside the window, Mars was getting closer — a giant red ball with a secret.",
      art: sceneZeroG(),
      hotspots: [
        {
          x: 38,
          y: 38,
          label: "Mars",
          title: "Almost there",
          text: "A real trip to Mars takes about seven months. Johnny made it in one bedtime, which is much faster.",
          doodle: "planet",
          accent: "#FF8A3D"
        },
        {
          x: 83,
          y: 30,
          label: "Sandwich",
          title: "Catch it if you can",
          text: "Astronauts eat from sealed packets so crumbs do not float into the buttons. Johnny’s sandwich was not sealed. Oops.",
          doodle: "snack",
          accent: "#FFC83D"
        },
        {
          x: 62,
          y: 88,
          label: "Buttons",
          title: "The big orange button",
          text: "It had a sign that said DO NOT PRESS. Johnny pressed it twice. It made a very satisfying beep.",
          doodle: "star",
          accent: "#25BFA6"
        }
      ]
    },
    {
      kicker: "Chapter Six",
      title: "A Red, Rocky Hello",
      text: "Johnny’s boots crunched on red dust. The sky was peachy pink. Then something rolled out from behind a rock. Beep, beep, boop! A little rover with one wobbly antenna came to say hello.",
      art: sceneMarsHello(),
      hotspots: [
        {
          x: 43,
          y: 78,
          label: "Pip",
          title: "Pip the rover",
          text: "Pip has six wheels, one antenna, and a very beepy heart. First words on Mars: “Beep beep boop.” That means hello.",
          doodle: "friend",
          accent: "#25BFA6"
        },
        {
          x: 83,
          y: 43,
          label: "Volcano",
          title: "The tallest volcano",
          text: "Mars has Olympus Mons, the tallest volcano in our solar system. It is nearly three times as tall as Mount Everest.",
          doodle: "planet",
          accent: "#FF6B57"
        },
        {
          x: 17,
          y: 27,
          label: "Earth",
          title: "The tiny blue dot",
          text: "From Mars, Earth would look like a bright blue star. Everyone Johnny knew would be inside that one little dot.",
          doodle: "home",
          accent: "#4B7BFF"
        }
      ]
    },
    {
      kicker: "Chapter Seven",
      title: "A Garden on Mars",
      text: "Johnny planted one seed in a little red pot. “Every adventure should leave something growing,” he said. The rover beeped and brought a tiny watering can. Mars had never seen anything so green.",
      art: sceneMarsGarden(),
      hotspots: [
        {
          x: 50,
          y: 86,
          label: "Sprout",
          title: "Tiny but mighty",
          text: "Plants need light, water, and air. On Mars, scientists would grow food inside special greenhouses called domes.",
          doodle: "plant",
          accent: "#25BFA6"
        },
        {
          x: 88,
          y: 57,
          label: "Flag",
          title: "The first flag",
          text: "Johnny’s flag had a rocket, a star, and a sandwich. Every flag should show the important things.",
          doodle: "gift",
          accent: "#FF6B57"
        },
        {
          x: 76,
          y: 81,
          label: "Pip",
          title: "Pip’s new job",
          text: "Pip was in charge of watering. Pip took the job very seriously. Maybe a little too seriously.",
          doodle: "friend",
          accent: "#FFC83D"
        }
      ]
    },
    {
      kicker: "Chapter Eight",
      title: "Home in Time for Cocoa",
      text: "The rocket came home just before bedtime. Johnny hung his Mars picture on the fridge. “Same time tomorrow?” he whispered. High above the roof, a red dot twinkled once. That meant yes.",
      art: sceneHome(),
      hotspots: [
        {
          x: 25,
          y: 44,
          label: "Picture",
          title: "The proof",
          text: "The picture showed a wobbly rocket, a red desert, and a six-wheeled friend. Grandpa hung it on the fridge with a magnet shaped like a banana.",
          doodle: "gift",
          accent: "#FFC83D"
        },
        {
          x: 32,
          y: 81,
          label: "Telescope",
          title: "Looking ahead",
          text: "Johnny’s next trip? The Moon, then Jupiter, then maybe the snack cupboard. Space can wait until after breakfast.",
          doodle: "telescope",
          accent: "#25BFA6"
        },
        {
          x: 85,
          y: 20,
          label: "Mars",
          title: "See you tomorrow",
          text: "Mars is millions of kilometers away. But with a good story and a brave imagination, it is only a page-turn away.",
          doodle: "planet",
          accent: "#FF6B57"
        }
      ]
    }
  ];

  window.STORY_BOOKS = window.STORY_BOOKS || [];
  window.STORY_BOOKS.push({
    id: "johnny",
    title: "Johnny Builds to Mars",
    tag: "Space adventure",
    author: "A Story Rocket original",
    blurb: "A cardboard rocket, one brave kid, and a very red planet.",
    accent: "#FF8A3D",
    accentSoft: "#FFD9C1",
    tilt: "-2.2deg",
    ribbon: "New",
    cover: cover(),
    pages: pages
  });
})();
