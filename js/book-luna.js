(function () {
  "use strict";

  const A = window.StoryArt;
  const INK = A.INK;

  function moon(x, y, radius) {
    const r = radius;
    return `<g transform="translate(${x} ${y})">
      <circle r="${r + 22}" fill="#FFF3C9" opacity=".16"/>
      <circle r="${r}" fill="#FFF3C9" stroke="${INK}" stroke-width="5.5"/>
      <circle cx="${-r * 0.32}" cy="${-r * 0.2}" r="${r * 0.18}" fill="#EAD9A2" opacity=".75"/>
      <circle cx="${r * 0.28}" cy="${r * 0.22}" r="${r * 0.24}" fill="#EAD9A2" opacity=".55"/>
      <circle cx="${r * 0.34}" cy="${-r * 0.38}" r="${r * 0.1}" fill="#EAD9A2" opacity=".65"/>
      <path d="M${-r * 0.56} ${-r * 0.56} C${-r * 0.18} ${-r * 0.72} ${r * 0.26} ${-r * 0.64} ${r * 0.5} ${-r * 0.38}" fill="none" stroke="#FFFDF4" stroke-width="5" stroke-linecap="round" opacity=".7"/>
    </g>`;
  }

  function kite(x, y, scale, rotation, hasStar) {
    const s = scale == null ? 1 : scale;
    const rot = rotation == null ? 0 : rotation;
    const star = hasStar
      ? `<g transform="translate(0 2) scale(0.43)">
          <circle r="66" fill="#FFE170" opacity=".28"/>
          ${A.fiveStar(0, -58, 53, "#FFD85E", INK, 5)}
          <circle cx="-10" cy="-66" r="4.5" fill="${INK}"/>
          <circle cx="18" cy="-66" r="4.5" fill="${INK}"/>
          <path d="M0 -51 Q8 -42 17 -52" fill="none" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>
        </g>`
      : `<g transform="translate(0 2)">
          <path d="M0 -36 L30 0 L0 36 L-30 0Z" fill="#FFF3CC" stroke="${INK}" stroke-width="3" stroke-dasharray="5 5"/>
        </g>`;
    return `<g transform="translate(${x} ${y}) rotate(${rot}) scale(${s})">
      <path d="M0 -103 L86 0 L0 111 L-86 0Z" fill="#FF8FB1" stroke="${INK}" stroke-width="6" stroke-linejoin="round"/>
      <path d="M0 -103 V111 M-86 0 H86" fill="none" stroke="#FFE0A6" stroke-width="5"/>
      <path d="M-64 -18 L64 -18 L48 18 L-48 18Z" fill="#FFF0B8" fill-opacity=".8" stroke="${INK}" stroke-width="3" opacity=".75"/>
      <path d="M0 111 C-18 145 14 160 -2 194 C-16 223 12 242 5 274" fill="none" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>
      <path d="M-9 139 L9 153 L-5 163 L10 177" fill="none" stroke="#FFC83D" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
      ${star}
    </g>`;
  }

  function cover() {
    return `<svg viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="lCoverSky" x1="0" y1="0" x2="0.7" y2="1">
          <stop offset="0" stop-color="#171A44"/>
          <stop offset="0.55" stop-color="#39336E"/>
          <stop offset="1" stop-color="#68588F"/>
        </linearGradient>
      </defs>
      <rect width="600" height="800" fill="url(#lCoverSky)"/>
      ${A.starField(64, 121, 600, 590, { colors: ["#FFF4C2", "#FFD85E", "#D8D3FF", "#FFFFFF"] })}
      ${moon(430, 188, 110)}
      ${A.starFriend(160, 350, 0.78)}
      <path d="M135 414 Q171 448 207 411" fill="none" stroke="#FFF0B8" stroke-width="3" stroke-linecap="round" opacity=".6"/>
      <path d="M80 577 C160 519 250 497 341 494 C445 491 525 512 600 556 V640 H0V590Z" fill="#2C3C66"/>
      <g fill="#FFD77A">
        <path d="M86 553 L103 536 L120 553 L116 575 L90 575Z" fill="#2B395E" stroke="${INK}" stroke-width="3"/>
        <rect x="109" y="551" width="12" height="10" fill="#FFC83D"/>
        <path d="M486 534 L502 520 L518 534 L515 551 L489 551Z" fill="#2B395E" stroke="${INK}" stroke-width="3"/>
        <rect x="497" y="531" width="10" height="9" fill="#FFC83D"/>
      </g>
      <path d="M0 648 C102 608 196 622 292 633 C393 645 504 617 600 639 V800 H0Z" fill="#203D50"/>
      ${A.luna(276, 650, 1.04, { coat: "#4CC9B0", hair: "#4D355F" })}
      ${A.telescope(487, 665, 0.83, -24)}
      ${A.mochiCat(416, 682, 0.76)}
      <g transform="translate(512 340) rotate(9)">
        <path d="M0 -76 L52 0 L0 74 L-52 0Z" fill="#FF8FB1" stroke="${INK}" stroke-width="4"/>
        <path d="M0 -76 V74 M-52 0 H52" fill="none" stroke="#FFE0A6" stroke-width="3.5"/>
        <path d="M0 74 C-10 100 8 116 0 141" fill="none" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>
      </g>
      <path d="M188 480 C245 455 312 452 365 468" fill="none" stroke="#FFF0B8" stroke-width="2.5" stroke-dasharray="3 11" opacity=".6"/>
      ${A.sparkle(520, 418, 8, "#FFF4C2", 18, 0.9)}
      ${A.sparkle(79, 409, 7, "#FFD85E", -12, 0.9)}
    </svg>`;
  }

  function sceneGarden() {
    return `<svg viewBox="0 0 900 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="l1Sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#151838"/>
          <stop offset="0.6" stop-color="#333361"/>
          <stop offset="1" stop-color="#5A507B"/>
        </linearGradient>
      </defs>
      <rect width="900" height="700" fill="url(#l1Sky)"/>
      ${A.starField(54, 211)}
      ${moon(769, 133, 48)}
      <g fill="none" stroke="#FFE9A3" stroke-width="3" stroke-linecap="round" opacity=".8">
        <path d="M557 55 C505 143 474 239 452 349" stroke-dasharray="4 15"/>
        <path d="M604 88 C566 170 537 247 514 331" stroke-dasharray="3 18"/>
      </g>
      ${A.sparkle(540, 95, 8, "#FFD85E", 12, 0.9)}
      ${A.sparkle(468, 252, 6, "#FFF4C2", -14, 0.9)}
      ${A.sparkle(447, 374, 7, "#FFD85E", 20, 0.85)}
      <path d="M0 482 C106 446 214 459 310 477 C448 502 558 455 690 474 C792 489 847 475 900 459 V700 H0Z" fill="#253E4B"/>
      <path d="M0 562 C116 519 228 548 350 558 C500 571 627 526 900 550 V700 H0Z" fill="#2D5A50"/>
      <g stroke="${INK}" stroke-width="4">
        <path d="M25 440 L83 384 L143 440 V513 H25Z" fill="#26334D"/>
        <path d="M18 446 L83 378 L149 446" fill="none" stroke-width="8" stroke-linecap="round"/>
        <rect x="54" y="417" width="27" height="29" fill="#FFC83D"/>
        <path d="M154 460 L204 414 L255 460 V522 H154Z" fill="#283A51"/>
        <path d="M147 465 L204 407 L262 465" fill="none" stroke-width="7" stroke-linecap="round"/>
        <rect x="180" y="439" width="23" height="25" fill="#FFC83D"/>
      </g>
      <g stroke="${INK}" stroke-width="5" stroke-linejoin="round">
        <path d="M690 530 L860 530 M690 570 L860 570" fill="none" stroke-width="5"/>
        <path d="M713 530 V598 M747 530 V598 M781 530 V598 M815 530 V598 M849 530 V598" fill="none" stroke-width="4"/>
      </g>
      <g transform="translate(706 510)">
        <path d="M0 0 C-19 15 -16 45 2 60 L21 45 C6 29 8 15 22 3Z" fill="#315E59" stroke="${INK}" stroke-width="3"/>
      </g>
      ${A.mochiCat(728, 528, 0.72)}
      ${A.telescope(162, 642, 0.82, -24)}
      <g transform="translate(361 624)">
        ${A.starFriend(0, 0, 0.83, { sleepy: true })}
      </g>
      <g transform="rotate(-4 531 651)">
        ${A.luna(530, 651, 0.94, { coat: "#4CC9B0" })}
      </g>
      <ellipse cx="361" cy="631" rx="94" ry="25" fill="#1B2F35" opacity=".55"/>
      <g>
        ${A.flower(285, 620, 0.78, "#FF8FB1")}
        ${A.flower(443, 646, 0.66, "#FFD85E")}
        ${A.flower(475, 602, 0.58, "#FF8FB1")}
        ${A.flower(253, 666, 0.56, "#B9DDF5")}
      </g>
      <g fill="#FFE57A">
        <circle cx="207" cy="563" r="4"/>
        <circle cx="628" cy="538" r="3"/>
        <circle cx="657" cy="585" r="2.5"/>
      </g>
      <g opacity=".5" fill="#FFE57A">
        <circle cx="207" cy="563" r="10"/>
        <circle cx="628" cy="538" r="8"/>
        <circle cx="657" cy="585" r="7"/>
      </g>
      ${A.tuft(117, 680, 0.85, "#3C7762")}
      ${A.tuft(582, 687, 0.7, "#3C7762")}
    </svg>`;
  }

  function sceneCocoa() {
    return `<svg viewBox="0 0 900 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="l2Wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#FFE1BD"/>
          <stop offset="1" stop-color="#F4C994"/>
        </linearGradient>
        <linearGradient id="l2Night" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#1A1D46"/>
          <stop offset="1" stop-color="#4B487A"/>
        </linearGradient>
      </defs>
      <rect width="900" height="700" fill="url(#l2Wall)"/>
      <g opacity=".35" stroke="#D8985B" stroke-width="2">
        <path d="M0 92 H900 M0 186 H900 M0 280 H900"/>
        <path d="M180 0 V448 M370 0 V448 M560 0 V448 M750 0 V448"/>
      </g>
      <g stroke="${INK}" stroke-width="6" stroke-linejoin="round">
        <rect x="57" y="102" width="235" height="228" rx="11" fill="url(#l2Night)"/>
        <rect x="69" y="114" width="211" height="204" rx="6" fill="none" stroke="#6C5D84" stroke-width="5"/>
        <path d="M174 114 V318 M69 214 H280" fill="none" stroke="#8F6B4E" stroke-width="7"/>
        ${moon(236, 163, 30)}
        <circle cx="114" cy="186" r="3" fill="#FFF7E7"/>
        <circle cx="145" cy="156" r="2" fill="#FFF7E7"/>
        <circle cx="102" cy="272" r="2.5" fill="#FFF7E7"/>
      </g>
      <g stroke="#A66A43" stroke-width="4">
        <path d="M59 363 Q176 340 291 363" fill="none" stroke-width="9"/>
        <path d="M57 373 Q59 423 45 444 M291 373 Q289 423 306 444" fill="none"/>
      </g>
      <g stroke="${INK}" stroke-width="4" stroke-linejoin="round">
        <rect x="612" y="96" width="210" height="18" rx="7" fill="#9B6440"/>
        <path d="M626 114 V265 M807 114 V265" fill="none" stroke="#9B6440" stroke-width="8"/>
        <path d="M626 142 H807 M626 189 H807 M626 236 H807" fill="none" stroke="#9B6440" stroke-width="5"/>
        <rect x="642" y="101" width="27" height="31" rx="4" fill="#FFC83D"/>
        <rect x="681" y="105" width="23" height="27" rx="4" fill="#FF8FB1"/>
        <rect x="716" y="99" width="29" height="33" rx="4" fill="#25BFA6"/>
        <path d="M756 112 h27 l-5 23 h-17Z" fill="#FFF7E7"/>
        <circle cx="760" cy="177" r="12" fill="#FFF7E7"/>
        <path d="M747 201 h26 l-4 26 h-18Z" fill="#FF8FB1"/>
      </g>
      <g transform="translate(481 116)" stroke="${INK}" stroke-width="4">
        <path d="M0 0 V51" fill="none" stroke-width="3"/>
        <path d="M-37 55 C-37 30 -19 16 0 16 C19 16 37 30 37 55Z" fill="#25BFA6"/>
        <ellipse cx="0" cy="56" rx="37" ry="9" fill="#FFD85E"/>
        <path d="M-15 58 V86 M16 58 V82" fill="none" stroke="#FFD85E" stroke-width="4" stroke-linecap="round"/>
        <circle cx="0" cy="99" r="5" fill="#FFD85E"/>
      </g>
      <path d="M0 478 C107 458 197 470 300 475 C453 483 614 459 900 476 V700 H0Z" fill="#C88A55"/>
      <g stroke="${INK}" stroke-width="6" stroke-linejoin="round">
        <path d="M0 514 C174 493 318 502 462 509 C627 517 763 499 900 510 V700 H0Z" fill="#F0D2A4"/>
        <path d="M0 545 C152 526 302 533 454 538 C628 544 766 528 900 539" fill="none" stroke="#C99E67" stroke-width="4" opacity=".6"/>
        <path d="M68 700 L82 520 M844 700 L824 520" fill="none" stroke="#A66A43" stroke-width="10"/>
      </g>
      <g transform="translate(365 532)" stroke="${INK}" stroke-width="4.5" stroke-linejoin="round">
        <path d="M-27 0 H27 V-34 H-27Z" fill="#FFF7E7"/>
        <path d="M-10 0 V-34" fill="none" stroke="#FF8FB1" stroke-width="5"/>
        <path d="M27 -13 C48 -13 53 4 33 7" fill="none" stroke-width="5"/>
        <path d="M-20 -16 C-13 -27 13 -27 20 -16" fill="none" stroke="#A66A43" stroke-width="4"/>
        <path d="M-14 -77 C-19 -94 -7 -98 -13 -114 M7 -77 C2 -94 14 -98 8 -114" fill="none" stroke="#FFFDF4" stroke-width="4" stroke-linecap="round" opacity=".9"/>
      </g>
      <g transform="translate(608 549)" stroke="${INK}" stroke-width="4">
        <ellipse cx="0" cy="0" rx="55" ry="13" fill="#FFF7E7"/>
        <ellipse cx="0" cy="-4" rx="38" ry="9" fill="#FFC83D"/>
        <circle cx="-16" cy="-8" r="8" fill="#D99654"/>
        <circle cx="8" cy="-5" r="8" fill="#D99654"/>
        <circle cx="25" cy="-10" r="6" fill="#D99654"/>
      </g>
      <g transform="translate(487 586)">
        ${A.starFriend(0, 0, 0.76, { sleepy: true })}
        <g stroke="${INK}" stroke-width="4.5" stroke-linejoin="round">
          <path d="M-70 -21 C-34 -8 14 -3 65 -25" fill="none" stroke="${INK}" stroke-width="23" stroke-linecap="round"/>
          <path d="M-70 -21 C-34 -8 14 -3 65 -25" fill="none" stroke="#FF8FB1" stroke-width="15" stroke-linecap="round"/>
          <path d="M49 -32 C65 -17 58 7 41 18" fill="none" stroke="${INK}" stroke-width="21" stroke-linecap="round"/>
          <path d="M49 -32 C65 -17 58 7 41 18" fill="none" stroke="#FF8FB1" stroke-width="13" stroke-linecap="round"/>
          <path d="M26 -8 l12 -11 10 12 -13 9Z" fill="#FFC83D"/>
          <path d="M48 3 l11 -11 10 12 -12 9Z" fill="#FFC83D"/>
        </g>
      </g>
      ${A.luna(690, 662, 0.93, { coat: "#4CC9B0" })}
      ${A.mochiCat(800, 660, 0.64)}
      <g transform="translate(760 296)" stroke="${INK}" stroke-width="4">
        <path d="M-32 0 H32 L25 37 H-25Z" fill="#FF8A3D"/>
        <path d="M25 7 C50 4 55 28 31 28" fill="none" stroke-width="7"/>
        <path d="M-18 -7 C-10 -24 10 -24 18 -7" fill="none" stroke="#5EAA7A" stroke-width="6" stroke-linecap="round"/>
      </g>
      <g fill="#FFF7E7" opacity=".55">
        <circle cx="340" cy="90" r="4"/><circle cx="414" cy="80" r="2.5"/><circle cx="376" cy="131" r="3"/>
      </g>
    </svg>`;
  }

  function sceneKiteWorkshop() {
    return `<svg viewBox="0 0 900 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="l3Wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#8FCFC7"/>
          <stop offset="1" stop-color="#5FA9A4"/>
        </linearGradient>
        <linearGradient id="l3Night" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#1D204B"/>
          <stop offset="1" stop-color="#4B487B"/>
        </linearGradient>
      </defs>
      <rect width="900" height="700" fill="url(#l3Wall)"/>
      <g stroke="#4A928D" stroke-width="3" opacity=".55">
        <path d="M0 88 H900 M0 176 H900 M0 264 H900"/>
        <path d="M113 0 V420 M250 0 V420 M387 0 V420 M524 0 V420 M661 0 V420 M798 0 V420"/>
      </g>
      <g stroke="${INK}" stroke-width="5" stroke-linejoin="round">
        <rect x="70" y="94" width="214" height="202" rx="9" fill="url(#l3Night)"/>
        <rect x="81" y="105" width="192" height="180" rx="5" fill="none" stroke="#7A6A95" stroke-width="4"/>
        <path d="M177 105 V285 M81 195 H273" fill="none" stroke="#74573D" stroke-width="6"/>
        ${moon(236, 152, 27)}
        <circle cx="124" cy="161" r="2.5" fill="#FFF7E7"/>
        <circle cx="150" cy="243" r="2" fill="#FFF7E7"/>
      </g>
      <g transform="translate(640 88)" stroke="${INK}" stroke-width="4">
        <rect x="0" y="0" width="175" height="130" rx="7" fill="#F4E3BC"/>
        <path d="M0 0 L58 52 L175 0" fill="none" stroke="#D4BA88" stroke-width="3"/>
        <path d="M28 30 h48 M28 46 h38 M28 66 C43 56 61 56 78 66 C93 76 111 75 126 64" fill="none" stroke="#A28E6A" stroke-width="3" stroke-linecap="round"/>
        <circle cx="36" cy="89" r="6" fill="#FFC83D"/>
        <path d="M77 90 l7 12 14 3-10 10 2 14-13-6-13 6 2-14-10-10 14-3Z" fill="#FF8FB1"/>
      </g>
      <g transform="translate(625 305) rotate(7)" stroke="${INK}" stroke-width="5" stroke-linejoin="round">
        <path d="M0 -118 L99 0 L0 126 L-99 0Z" fill="#FF8FB1"/>
        <path d="M0 -118 V126 M-99 0 H99" fill="none" stroke="#FFE0A6" stroke-width="4.5"/>
        <path d="M-72 -20 L72 -20 L54 20 L-54 20Z" fill="#FFF0B8" fill-opacity=".9" stroke-width="3"/>
        <path d="M0 126 C-18 161 16 178 -1 213 C-18 245 16 263 7 293" fill="none" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>
        <path d="M-11 154 L11 170 L-6 182 L12 198" fill="none" stroke="#FFC83D" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M-22 -7 l10 -10 9 10 -9 11Z" fill="#FFF7E7" stroke-width="3"/>
      </g>
      <path d="M632 431 C584 474 488 500 391 545 C343 567 319 588 302 615" fill="none" stroke="#FFF3CC" stroke-width="3" stroke-linecap="round"/>
      <g stroke="${INK}" stroke-width="6" stroke-linejoin="round">
        <path d="M0 519 C164 500 323 511 477 514 C641 517 782 503 900 511 V700 H0Z" fill="#E8C78F"/>
        <path d="M0 542 C170 525 329 536 490 539 C651 542 785 529 900 536" fill="none" stroke="#C3945A" stroke-width="4" opacity=".6"/>
        <path d="M48 700 L72 530 M860 700 L838 530" fill="none" stroke="#9A6238" stroke-width="9"/>
      </g>
      <g transform="translate(302 598)" stroke="${INK}" stroke-width="4" stroke-linejoin="round">
        <ellipse cx="0" cy="16" rx="36" ry="9" fill="#C98D52"/>
        <path d="M-27 -1 H27 V15 H-27Z" fill="#B47740"/>
        <path d="M-18 5 C-4 -5 8 -4 20 5" fill="none" stroke="#F4E3BC" stroke-width="5" stroke-linecap="round"/>
        <path d="M0 0 C-2 -35 15 -47 34 -38" fill="none" stroke="#FFF3CC" stroke-width="2.5" stroke-linecap="round"/>
      </g>
      <g transform="translate(440 592)" stroke="${INK}" stroke-width="4">
        <rect x="-55" y="-76" width="110" height="76" rx="3" fill="#FFF7E1" transform="rotate(-2 0 -38)"/>
        <path d="M-45 -61 H37 M-45 -48 H30 M-45 -35 H41 M-45 -22 H22" fill="none" stroke="#A7B5C9" stroke-width="2.5" transform="rotate(-2 0 -38)"/>
        <path d="M-20 -13 C-8 -22 11 -22 23 -12" fill="none" stroke="#FF8FB1" stroke-width="3"/>
      </g>
      <g transform="translate(520 602)" stroke="${INK}" stroke-width="4">
        <path d="M-25 0 L-19 -38 L28 -31 L22 4Z" fill="#FFC83D"/>
        <path d="M-12 1 L-8 -31" fill="none" stroke="#E2A72D" stroke-width="5"/>
        <path d="M-19 -31 C-4 -38 13 -33 27 -24" fill="none" stroke="#8C4A38" stroke-width="5" stroke-linecap="round"/>
      </g>
      <g transform="translate(455 530)">
        ${A.starFriend(0, 0, 0.56)}
      </g>
      <g transform="rotate(3 660 660)">
        ${A.luna(660, 662, 0.91, { coat: "#4CC9B0" })}
      </g>
      ${A.mochiCat(212, 663, 0.68)}
      <g transform="translate(758 523)" stroke="${INK}" stroke-width="4">
        <circle cx="0" cy="0" r="19" fill="#FFF7E7"/>
        <path d="M-13 0 H13 M0 -13 V13" fill="none" stroke="#FF8A3D" stroke-width="3.5"/>
        <path d="M17 9 L39 27" fill="none" stroke-width="5" stroke-linecap="round"/>
      </g>
      <g fill="#FFE57A" opacity=".85">
        <circle cx="843" cy="458" r="4"/><circle cx="818" cy="478" r="2.5"/>
      </g>
    </svg>`;
  }

  function sceneWindyHill() {
    return `<svg viewBox="0 0 900 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="l4Sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#111537"/>
          <stop offset="0.55" stop-color="#303563"/>
          <stop offset="1" stop-color="#6A5985"/>
        </linearGradient>
      </defs>
      <rect width="900" height="700" fill="url(#l4Sky)"/>
      ${A.starField(52, 313, 900, 470, { colors: ["#FFF4C2", "#FFD85E", "#D8D3FF", "#FFFFFF"] })}
      ${moon(151, 141, 52)}
      <g fill="#FFE6A0" opacity=".72">
        <circle cx="260" cy="457" r="2.5"/>
        <circle cx="309" cy="472" r="2"/>
        <circle cx="341" cy="458" r="2.5"/>
        <circle cx="392" cy="476" r="2"/>
        <circle cx="708" cy="466" r="2.5"/>
        <circle cx="747" cy="454" r="2"/>
      </g>
      <path d="M0 490 C104 468 197 477 287 485 C410 496 522 462 632 476 C760 492 837 473 900 480 V700 H0Z" fill="#243E4E"/>
      <g fill="#FFD77A" opacity=".8">
        <path d="M80 458 L99 439 L119 458 L114 482 L85 482Z" fill="#253B4A" stroke="${INK}" stroke-width="3"/>
        <path d="M184 470 L201 453 L219 470 L215 491 L188 491Z" fill="#253B4A" stroke="${INK}" stroke-width="3"/>
        <path d="M289 465 L305 449 L322 465 L318 484 L293 484Z" fill="#253B4A" stroke="${INK}" stroke-width="3"/>
        <rect x="94" y="460" width="10" height="9" fill="#FFC83D"/>
        <rect x="197" y="471" width="8" height="8" fill="#FFC83D"/>
        <rect x="302" y="466" width="9" height="8" fill="#FFC83D"/>
      </g>
      <path d="M0 583 C136 531 266 540 401 561 C558 586 698 530 900 557 V700 H0Z" fill="#254E4D"/>
      <g stroke="${INK}" stroke-width="4" fill="#1C383E">
        <path d="M63 537 L87 474 L111 537Z"/>
        <path d="M89 537 V575" fill="none" stroke-width="5"/>
        <path d="M806 536 L832 470 L858 536Z"/>
        <path d="M832 536 V575" fill="none" stroke-width="5"/>
      </g>
      ${kite(626, 229, 1.04, -8, true)}
      <g fill="none" stroke="#E7DFFF" stroke-width="4" stroke-linecap="round" opacity=".65">
        <path d="M743 164 C777 171 789 194 768 210 C751 223 755 244 779 249"/>
        <path d="M798 296 C831 301 844 320 825 338 C810 352 817 369 838 373"/>
        <path d="M718 388 C741 391 751 404 740 417 C730 429 736 441 753 443"/>
      </g>
      <g fill="#FFC83D">
        <path d="M769 380 C783 371 798 379 798 393 C786 399 773 395 769 380Z"/>
        <path d="M803 220 C817 211 832 220 831 234 C819 240 807 235 803 220Z"/>
      </g>
      <path d="M612 331 C575 374 540 422 524 476 C513 512 512 542 514 565" fill="none" stroke="#FFF3CC" stroke-width="3" stroke-linecap="round"/>
      ${A.luna(478, 662, 0.94, { coat: "#4CC9B0" })}
      <g stroke="${INK}" stroke-width="3.5" stroke-linecap="round">
        <path d="M522 575 C538 568 548 557 553 543" fill="none"/>
      </g>
      <g fill="none" stroke="#E7DFFF" stroke-width="3" stroke-linecap="round" opacity=".4">
        <path d="M129 355 C100 372 86 396 88 426"/>
        <path d="M116 398 C91 409 78 428 79 451"/>
      </g>
      ${A.mochiCat(656, 668, 0.7)}
      ${A.tuft(357, 680, 0.8, "#3D7462")}
      ${A.tuft(738, 686, 0.7, "#3D7462")}
      ${A.sparkle(558, 195, 8, "#FFE170", 15, 0.9)}
    </svg>`;
  }

  function sceneStarHome() {
    return `<svg viewBox="0 0 900 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="l5Room" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#41345F"/>
          <stop offset="1" stop-color="#242441"/>
        </linearGradient>
        <linearGradient id="l5Sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#0F1431"/>
          <stop offset="0.65" stop-color="#303663"/>
          <stop offset="1" stop-color="#665B8B"/>
        </linearGradient>
        <clipPath id="l5WindowClip">
          <path d="M182 700 V490 C182 318 297 190 450 190 C603 190 718 318 718 490 V700Z"/>
        </clipPath>
      </defs>
      <rect width="900" height="700" fill="url(#l5Room)"/>
      <g opacity=".22" fill="#FFF0B5">
        <circle cx="73" cy="92" r="3"/><circle cx="137" cy="147" r="2"/><circle cx="824" cy="115" r="3"/>
        <circle cx="776" cy="195" r="2"/><circle cx="848" cy="300" r="2.5"/><circle cx="53" cy="384" r="2"/>
      </g>
      <path d="M146 700 V486 C146 294 270 154 450 154 C630 154 754 294 754 486 V700Z" fill="#292444" stroke="${INK}" stroke-width="8"/>
      <path d="M182 700 V490 C182 318 297 190 450 190 C603 190 718 318 718 490 V700Z" fill="url(#l5Sky)" stroke="#77709A" stroke-width="5"/>
      <g clip-path="url(#l5WindowClip)">
        ${A.starField(56, 611, 900, 620, { colors: ["#FFF4C2", "#FFD85E", "#D8D3FF", "#FFFFFF"] })}
        ${moon(618, 347, 27)}
        <g fill="none" stroke="#FFE6A0" stroke-width="3" stroke-dasharray="3 7" opacity=".8">
          <path d="M330 297 L368 256 L402 288 L430 328 L470 346 L514 312 L557 267"/>
          <path d="M402 288 L430 328 L368 256"/>
        </g>
        <g fill="#FFE6A0">
          <circle cx="330" cy="297" r="5"/>
          <circle cx="368" cy="256" r="5"/>
          <circle cx="402" cy="288" r="5"/>
          <circle cx="430" cy="328" r="5"/>
          <circle cx="470" cy="346" r="5"/>
          <circle cx="514" cy="312" r="5"/>
        </g>
        <g transform="translate(557 267)">
          <circle r="57" fill="#FFE170" opacity=".2"/>
          <circle r="34" fill="#FFE170" opacity=".14"/>
          ${A.fiveStar(0, 0, 27, "#FFD85E", INK, 4)}
          <circle cx="-8" cy="-3" r="2.4" fill="${INK}"/>
          <circle cx="8" cy="-3" r="2.4" fill="${INK}"/>
          <path d="M-6 7 Q0 12 7 7" fill="none" stroke="${INK}" stroke-width="2.4" stroke-linecap="round"/>
        </g>
        ${A.sparkle(594, 220, 6, "#FFF4C2", 15, 0.9)}
        ${A.sparkle(486, 293, 5, "#FFF4C2", -12, 0.8)}
      </g>
      <g stroke="${INK}" stroke-width="5" stroke-linejoin="round">
        <path d="M182 208 C238 280 250 398 228 576 L302 576 C324 406 318 288 264 198Z" fill="#FF8FB1"/>
        <path d="M718 208 C662 280 650 398 672 576 L598 576 C576 406 582 288 636 198Z" fill="#FF8FB1"/>
        <path d="M214 253 C239 344 240 446 226 548 M656 548 C645 445 647 345 674 251" fill="none" stroke="#DB648C" stroke-width="4" opacity=".65"/>
        <path d="M182 208 C226 242 252 267 264 300 M718 208 C674 242 648 267 636 300" fill="none" stroke="#FFC2D5" stroke-width="5" opacity=".7"/>
      </g>
      <path d="M226 584 C302 566 598 566 674 584 L674 612 C592 628 310 628 226 612Z" fill="#4CC9B0" stroke="${INK}" stroke-width="6"/>
      <path d="M222 612 H678 V642 H222Z" fill="#F3C885" stroke="${INK}" stroke-width="6"/>
      <path d="M253 642 V700 M647 642 V700" fill="none" stroke="${INK}" stroke-width="7"/>
      <g transform="translate(402 686)">
        <path d="M-79 0 C-92 -54 -70 -122 -7 -139 C62 -122 86 -54 73 0Z" fill="#171A36"/>
        <path d="M-44 -151 C-62 -202 -31 -237 0 -225 C32 -239 64 -204 46 -151 C38 -173 25 -183 8 -177 C-5 -193 -24 -190 -31 -172 C-38 -162 -42 -156 -44 -151Z" fill="#171A36"/>
        <circle cx="1" cy="-168" r="47" fill="#171A36"/>
        <path d="M-45 -168 C-52 -209 -21 -232 2 -223 C27 -234 56 -208 45 -168 C39 -188 27 -197 12 -194 C4 -210 -16 -208 -24 -191 C-33 -190 -42 -182 -45 -168Z" fill="#171A36"/>
        ${A.fiveStar(35, -218, 11, "#FFC83D", INK, 3)}
        <path d="M-44 -177 C-50 -208 -26 -226 -4 -226" fill="none" stroke="#8B82B5" stroke-width="3" stroke-linecap="round" opacity=".65"/>
        <path d="M-71 -18 C-82 -59 -59 -111 -9 -126" fill="none" stroke="#6C6895" stroke-width="3" stroke-linecap="round" opacity=".55"/>
        <path d="M-26 0 C-18 -49 6 -92 29 -100" fill="none" stroke="#25294E" stroke-width="8" stroke-linecap="round"/>
      </g>
      <g transform="translate(649 655)">
        <path d="M28 -27 C60 -36 66 -8 45 -4 C70 4 53 22 36 10" fill="none" stroke="#151A34" stroke-width="16" stroke-linecap="round"/>
        <ellipse cx="0" cy="-31" rx="32" ry="36" fill="#151A34"/>
        <circle cx="-1" cy="-71" r="31" fill="#151A34"/>
        <path d="M-29 -86 L-36 -118 L-10 -101Z" fill="#151A34"/>
        <path d="M29 -86 L36 -118 L10 -101Z" fill="#151A34"/>
        <circle cx="-10" cy="-74" r="3" fill="#FFD85E"/>
        <circle cx="9" cy="-74" r="3" fill="#FFD85E"/>
        <path d="M-45 -83 C-50 -105 -35 -113 -22 -105" fill="none" stroke="#6C6895" stroke-width="2.5" stroke-linecap="round" opacity=".5"/>
        <path d="M-32 0 C-38 -39 -23 -66 0 -66" fill="none" stroke="#292E55" stroke-width="3" stroke-linecap="round" opacity=".8"/>
      </g>
      <g transform="translate(94 543)" stroke="${INK}" stroke-width="4">
        <rect x="0" y="0" width="68" height="83" rx="5" fill="#F4D6A5"/>
        <path d="M8 18 H60 M8 31 H53 M8 44 H57" fill="none" stroke="#CBA26E" stroke-width="3"/>
        <path d="M35 18 V63" fill="none" stroke="${INK}" stroke-width="3"/>
        <path d="M35 51 C23 49 18 41 20 33 C30 35 35 41 35 48 C39 39 47 35 55 37 C55 47 47 52 35 51Z" fill="#79BF83" stroke="${INK}" stroke-width="2.5"/>
      </g>
      <g fill="#FFE57A">
        <circle cx="817" cy="509" r="3"/>
        <circle cx="789" cy="534" r="2"/>
      </g>
    </svg>`;
  }

  const pages = [
    {
      kicker: "Page One",
      title: "A Star in the Garden",
      text: "Luna was looking for the moon when something small and golden tumbled out of the sky. It landed in the flowerbed with a soft plink. It was a star — and it was crying sparkles.",
      art: sceneGarden(),
      hotspots: [
        {
          x: 40,
          y: 86,
          label: "Star",
          title: "A wobbly glow",
          text: "The little star had lost its shine. It blinked twice, then sneezed a tiny galaxy of sparkles.",
          doodle: "star",
          accent: "#FFC83D"
        },
        {
          x: 18,
          y: 81,
          label: "Telescope",
          title: "The sky watcher",
          text: "Luna’s telescope was almost as tall as she was. It was very good at finding moons and very bad at finding lost socks.",
          doodle: "telescope",
          accent: "#25BFA6"
        },
        {
          x: 81,
          y: 76,
          label: "Mochi",
          title: "Mochi the cat",
          text: "Mochi was not impressed by the star. Mochi was only impressed by warm blankets and fish sandwiches.",
          doodle: "friend",
          accent: "#FF8FB1"
        }
      ]
    },
    {
      kicker: "Page Two",
      title: "Too Tired to Twinkle",
      text: "Luna carried the star inside and wrapped it in her softest scarf. She made cocoa with three marshmallows. The star took one sip and glowed a little brighter.",
      art: sceneCocoa(),
      hotspots: [
        {
          x: 39,
          y: 84,
          label: "Cocoa",
          title: "A very big mug",
          text: "The star drank three tiny sips. Marshmallows are not rocket fuel, but they do help with being brave.",
          doodle: "snack",
          accent: "#FF8A3D"
        },
        {
          x: 54,
          y: 76,
          label: "Star",
          title: "Almost better",
          text: "The star was too tired to fly home. It needed one good idea and a little help from a friend.",
          doodle: "star",
          accent: "#FFC83D"
        },
        {
          x: 17,
          y: 37,
          label: "Window",
          title: "The moon kept watch",
          text: "The moon peeped through the window all night. It did not say anything, but it stayed close.",
          doodle: "moon",
          accent: "#B9DDF5"
        }
      ]
    },
    {
      kicker: "Page Three",
      title: "The Kite with a Star",
      text: "Luna found paper, string, and two bendy straws. She made a kite with a star-sized pocket. “We will fly you home,” she said. Mochi hid under the table.",
      art: sceneKiteWorkshop(),
      hotspots: [
        {
          x: 69,
          y: 54,
          label: "Kite",
          title: "A paper rocket? No — a kite!",
          text: "A kite flies because moving air pushes against it. Luna’s kite needed a very windy night.",
          doodle: "kite",
          accent: "#FF8FB1"
        },
        {
          x: 33,
          y: 82,
          label: "String",
          title: "A very long string",
          text: "Luna tied the string to a spoon, a chair, and finally a knot. That knot was not going anywhere.",
          doodle: "tool",
          accent: "#25BFA6"
        },
        {
          x: 50,
          y: 82,
          label: "Star",
          title: "Ready for lift-off",
          text: "The star climbed into the kite pocket and held on tight. Its glow made the paper look like a lantern.",
          doodle: "star",
          accent: "#FFC83D"
        }
      ]
    },
    {
      kicker: "Page Four",
      title: "Up the Windy Hill",
      text: "Luna climbed the hill behind her house. The wind tugged, the kite wobbled, and the star began to twinkle. “Higher!” it chimed. “Just a little higher!”",
      art: sceneWindyHill(),
      hotspots: [
        {
          x: 70,
          y: 32,
          label: "Kite",
          title: "Fly, little kite",
          text: "The kite danced across the sky. Its tail made a curly line all the way to the stars.",
          doodle: "kite",
          accent: "#FF8FB1"
        },
        {
          x: 85,
          y: 50,
          label: "Wind",
          title: "The gust",
          text: "The wind pushed the kite up, up, up. Luna held on with both hands and one very determined toe.",
          doodle: "weather",
          accent: "#B9DDF5"
        },
        {
          x: 17,
          y: 20,
          label: "Moon",
          title: "The moon’s advice",
          text: "The moon watched from above. Its advice was simple: hold on, and let the wind do the tricky part.",
          doodle: "moon",
          accent: "#FFC83D"
        }
      ]
    },
    {
      kicker: "Page Five",
      title: "The Brightest Hello",
      text: "The star hopped out of the kite pocket and settled into the sky. It became the brightest point of light in Luna’s window. Every night, it winked at her. Luna always winked back.",
      art: sceneStarHome(),
      hotspots: [
        {
          x: 42,
          y: 42,
          label: "Stars",
          title: "A new constellation",
          text: "The star joined four other stars to make a curly shape. Luna named it “The Wobbly Cat.” Mochi said that was acceptable.",
          doodle: "star",
          accent: "#FFC83D"
        },
        {
          x: 63,
          y: 39,
          label: "Star",
          title: "Twinkle, twinkle",
          text: "A star’s light takes many years to reach us. Luna’s new friend was sending a hello from the past.",
          doodle: "star",
          accent: "#FFE170"
        },
        {
          x: 72,
          y: 83,
          label: "Mochi",
          title: "Mochi’s view",
          text: "Mochi watched the star from the windowsill. Mochi did not wink. Mochi blinked very slowly, which is a cat’s wink.",
          doodle: "friend",
          accent: "#FF8FB1"
        }
      ]
    }
  ];

  window.STORY_BOOKS = window.STORY_BOOKS || [];
  window.STORY_BOOKS.push({
    id: "luna",
    title: "Luna and the Lost Star",
    tag: "Bedtime",
    author: "A Story Rocket original",
    blurb: "A sleepy star needs help finding its way home.",
    accent: "#B9DDF5",
    accentSoft: "#D8D3F4",
    tilt: "1.6deg",
    ribbon: "",
    cover: cover(),
    pages: pages
  });
})();
