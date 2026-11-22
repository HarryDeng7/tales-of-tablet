(function () {
  "use strict";

  const A = window.StoryArt;
  const INK = A.INK;

  function picnicBasket(x, y, scale) {
    const s = scale == null ? 1 : scale;
    return `<g transform="translate(${x} ${y}) scale(${s})">
      <ellipse cx="0" cy="4" rx="57" ry="8" fill="#2C4B2C" opacity=".15"/>
      <g stroke="${INK}" stroke-width="5" stroke-linejoin="round" stroke-linecap="round">
        <path d="M-47 0 H47 L39 58 H-39Z" fill="#C98A50"/>
        <path d="M-53 0 H53 V-14 H-53Z" fill="#E2A363"/>
        <path d="M-33 -14 C-30 -61 30 -61 33 -14" fill="none" stroke-width="7"/>
        <path d="M-39 23 H39" fill="none" stroke="#9B6137" stroke-width="4" opacity=".65"/>
        <path d="M-20 0 V58 M20 0 V58" fill="none" stroke="#9B6137" stroke-width="3.5" opacity=".6"/>
        <path d="M-10 23 H10 V42 H-10Z" fill="#FFD85E"/>
      </g>
    </g>`;
  }

  function teapot(x, y, scale, rotation) {
    const s = scale == null ? 1 : scale;
    const rot = rotation == null ? 0 : rotation;
    return `<g transform="translate(${x} ${y}) rotate(${rot}) scale(${s})">
      <g stroke="${INK}" stroke-width="4.5" stroke-linejoin="round" stroke-linecap="round">
        <path d="M-36 -12 C-45 7 -37 38 0 38 C37 38 45 7 36 -12Z" fill="#FF8FB1"/>
        <path d="M-24 0 C-8 -6 10 8 25 -2" fill="none" stroke="#FFF0B8" stroke-width="5" opacity=".7"/>
        <path d="M30 -3 C51 -4 58 20 37 28" fill="none" stroke-width="6"/>
        <path d="M-30 -6 L-55 -22 L-60 -12 L-34 6" fill="#FF8FB1"/>
        <ellipse cx="0" cy="-13" rx="30" ry="9" fill="#FFC83D"/>
        <path d="M0 -22 V-33" fill="none" stroke-width="4"/>
        <circle cx="0" cy="-36" r="6" fill="#FFC83D"/>
        <circle cx="-17" cy="18" r="3" fill="#FFF7E7"/>
        <circle cx="8" cy="24" r="4" fill="#FFF7E7"/>
        <circle cx="20" cy="10" r="2.5" fill="#FFF7E7"/>
      </g>
    </g>`;
  }

  function sandwich(x, y, scale, rotation) {
    const s = scale == null ? 1 : scale;
    const rot = rotation == null ? 0 : rotation;
    return `<g transform="translate(${x} ${y}) rotate(${rot}) scale(${s})">
      <g stroke="${INK}" stroke-width="4" stroke-linejoin="round">
        <path d="M-43 17 L13 -31 L49 16 Z" fill="#FFE0A0"/>
        <path d="M-37 15 L13 -24 L42 13 Z" fill="#FF6B57"/>
        <path d="M-27 12 C-10 2 7 0 25 8" fill="none" stroke="#7BC88B" stroke-width="8" stroke-linecap="round"/>
        <path d="M-33 17 H41" fill="none" stroke="#D79A4A" stroke-width="5"/>
      </g>
    </g>`;
  }

  function cookie(x, y, scale, broken) {
    const s = scale == null ? 1 : scale;
    const cracks = broken
      ? `<path d="M-3 -25 L7 -8 L-2 4 L10 19" fill="none" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>`
      : "";
    return `<g transform="translate(${x} ${y}) scale(${s})">
      <circle r="29" fill="#E8B36B" stroke="${INK}" stroke-width="4"/>
      <circle cx="-10" cy="-9" r="3.5" fill="#8E5A33"/>
      <circle cx="11" cy="-16" r="3" fill="#8E5A33"/>
      <circle cx="15" cy="10" r="3.6" fill="#8E5A33"/>
      <circle cx="-14" cy="12" r="2.8" fill="#8E5A33"/>
      <circle cx="-1" cy="2" r="2.4" fill="#8E5A33"/>
      ${cracks}
    </g>`;
  }

  function cake(x, y, scale) {
    const s = scale == null ? 1 : scale;
    return `<g transform="translate(${x} ${y}) scale(${s})">
      <ellipse cx="0" cy="6" rx="45" ry="9" fill="#2C4B2C" opacity=".13"/>
      <g stroke="${INK}" stroke-width="4" stroke-linejoin="round">
        <path d="M-37 0 H37 L31 36 H-31Z" fill="#FFE0A0"/>
        <path d="M-37 0 C-31 -8 -18 2 -10 -5 C-1 -12 8 1 18 -4 C26 -8 32 -4 37 0Z" fill="#FF8FB1"/>
        <path d="M-30 -6 V-17 M0 -9 V-24 M27 -5 V-15" fill="none" stroke="#FFC83D" stroke-width="5" stroke-linecap="round"/>
        <circle cx="-30" cy="-20" r="5" fill="#FF6B57"/>
        <circle cx="0" cy="-27" r="5" fill="#25BFA6"/>
        <circle cx="27" cy="-18" r="5" fill="#FF6B57"/>
        <path d="M-24 18 H24" fill="none" stroke="#D79A4A" stroke-width="3"/>
      </g>
    </g>`;
  }

  function pinwheel(x, y, scale, rotation) {
    const s = scale == null ? 1 : scale;
    const rot = rotation == null ? 0 : rotation;
    return `<g transform="translate(${x} ${y}) scale(${s})">
      <path d="M0 13 V89" fill="none" stroke="#8E5A33" stroke-width="5" stroke-linecap="round"/>
      <g transform="rotate(${rot})" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round">
        <path d="M0 0 L42 -12 L9 10Z" fill="#FF6B57"/>
        <path d="M0 0 L12 42 L-10 9Z" fill="#FFC83D"/>
        <path d="M0 0 L-42 12 L-9 -10Z" fill="#25BFA6"/>
        <path d="M0 0 L-12 -42 L10 -9Z" fill="#FF8FB1"/>
        <circle cx="0" cy="0" r="5" fill="#FFF7E7"/>
      </g>
    </g>`;
  }

  function rainbow(x, y, scale) {
    const s = scale == null ? 1 : scale;
    return `<g transform="translate(${x} ${y}) scale(${s})" fill="none" stroke-linecap="round">
      <path d="M-320 0 A320 320 0 0 1 320 0" stroke="#FF6B57" stroke-width="25"/>
      <path d="M-292 0 A292 292 0 0 1 292 0" stroke="#FF9F45" stroke-width="25"/>
      <path d="M-264 0 A264 264 0 0 1 264 0" stroke="#FFD85E" stroke-width="25"/>
      <path d="M-236 0 A236 236 0 0 1 236 0" stroke="#7BC88B" stroke-width="25"/>
      <path d="M-208 0 A208 208 0 0 1 208 0" stroke="#4B9FE8" stroke-width="25"/>
      <path d="M-180 0 A180 180 0 0 1 180 0" stroke="#A98BE0" stroke-width="25"/>
    </g>`;
  }

  function cover() {
    return `<svg viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="dCoverSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#81D9F4"/>
          <stop offset="1" stop-color="#DFFAFF"/>
        </linearGradient>
      </defs>
      <rect width="600" height="800" fill="url(#dCoverSky)"/>
      ${A.sun(468, 152, 45)}
      ${A.cloud(121, 201, 0.72, 0.92)}
      ${A.cloud(390, 274, 0.5, 0.7)}
      <path d="M0 483 C106 447 197 464 279 483 C374 505 464 470 600 489 V650 H0Z" fill="#7BCF8A"/>
      <path d="M0 548 C121 511 230 528 345 548 C466 569 535 539 600 547 V800 H0Z" fill="#4FA76C"/>
      <path d="M0 599 C131 552 264 573 385 598 C465 615 538 598 600 590 V800 H0Z" fill="#378C5F"/>
      <g transform="translate(300 720)">
        ${A.sockDragon(0, 0, 1.04)}
      </g>
      ${A.mouseFriend(118, 670, 0.82)}
      ${A.duckFriend(484, 684, 0.8)}
      ${teapot(386, 393, 0.62, -14)}
      <g transform="translate(117 645)" stroke="${INK}" stroke-width="3">
        <ellipse cx="0" cy="0" rx="70" ry="17" fill="#FF8F7B"/>
        <path d="M-58 0 H58 M-44 -8 H44 M-27 -14 H27" fill="none" stroke="#FFF0D4" stroke-width="4"/>
      </g>
      ${A.flower(477, 547, 1.02, "#FF8FB1")}
      ${A.flower(73, 562, 0.88, "#FFC83D")}
      ${A.flower(525, 612, 0.72, "#FFF7E7")}
      <g transform="translate(400 314)" stroke="${INK}" stroke-width="3">
        <ellipse cx="0" cy="0" rx="11" ry="8" fill="#FFD85E"/>
        <path d="M-10 -2 H10 M-8 4 H8" fill="none" stroke="${INK}" stroke-width="3"/>
        <ellipse cx="-4" cy="-8" rx="7" ry="9" fill="#FFF7E7" fill-opacity=".7"/>
        <ellipse cx="6" cy="-8" rx="7" ry="9" fill="#FFF7E7" fill-opacity=".7"/>
      </g>
      ${A.sparkle(531, 261, 7, "#FFF7E7", 12, 0.9)}
      ${A.sparkle(75, 343, 6, "#FFF7E7", -8, 0.8)}
    </svg>`;
  }

  function scenePicnic() {
    return `<svg viewBox="0 0 900 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="d1Sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#83DAF5"/>
          <stop offset="1" stop-color="#E4FBFF"/>
        </linearGradient>
      </defs>
      <rect width="900" height="700" fill="url(#d1Sky)"/>
      ${A.sun(782, 116, 47)}
      ${A.cloud(164, 132, 0.78, 0.9)}
      ${A.cloud(555, 78, 0.52, 0.75)}
      <path d="M0 441 C128 402 244 423 350 442 C477 465 587 427 730 445 C803 454 858 447 900 435 V700 H0Z" fill="#8BD491"/>
      <path d="M0 512 C126 477 248 492 365 514 C486 537 623 493 900 521 V700 H0Z" fill="#5BBA79"/>
      <path d="M0 585 C166 544 300 572 448 589 C612 608 737 568 900 584 V700 H0Z" fill="#3E9A65"/>
      <g stroke="${INK}" stroke-width="5" stroke-linejoin="round">
        <path d="M142 590 C326 548 556 548 806 584 L851 700 H91Z" fill="#FF8F7B"/>
        <path d="M192 570 L176 700 M289 560 L283 700 M387 552 L386 700 M486 550 L490 700 M587 552 L594 700 M689 560 L699 700 M789 572 L806 700" fill="none" stroke="#FFF0D4" stroke-width="5" opacity=".8"/>
        <path d="M127 621 C333 586 613 586 829 618 M111 661 C337 625 615 625 842 657" fill="none" stroke="#FFF0D4" stroke-width="5" opacity=".8"/>
      </g>
      <g transform="translate(659 612)">
        ${A.sockDragon(0, 0, 0.94)}
      </g>
      <g transform="translate(462 698)">
        <path d="M-148 -35 C-104 -57 93 -59 144 -31 C165 -21 160 -1 132 4 C58 17 -71 17 -138 2 C-163 -4 -167 -24 -148 -35Z" fill="#FF8F7B" stroke="${INK}" stroke-width="5"/>
        <path d="M-116 -34 C-70 -47 80 -49 121 -32" fill="none" stroke="#FFF0D4" stroke-width="5" opacity=".8"/>
      </g>
      ${picnicBasket(196, 557, 0.95)}
      ${cake(681, 611, 0.92)}
      <g transform="translate(292 545)" stroke="${INK}" stroke-width="4">
        <ellipse cx="0" cy="8" rx="43" ry="9" fill="#FFF7E7"/>
        <path d="M-35 2 L4 -26 L37 2Z" fill="#FFE0A0"/>
        <path d="M-28 1 L3 -18 L30 1" fill="none" stroke="#7BC88B" stroke-width="5"/>
      </g>
      <g transform="translate(735 263)" stroke="${INK}" stroke-width="3">
        <ellipse cx="0" cy="0" rx="12" ry="9" fill="#FFD85E"/>
        <path d="M-11 -2 H11 M-9 4 H9" fill="none" stroke="${INK}" stroke-width="3"/>
        <ellipse cx="-4" cy="-9" rx="8" ry="10" fill="#FFF7E7" fill-opacity=".8"/>
        <ellipse cx="7" cy="-8" rx="8" ry="10" fill="#FFF7E7" fill-opacity=".8"/>
        <path d="M-4 -9 C-25 -30 -22 -42 -14 -47" fill="none" stroke="${INK}" stroke-width="2" opacity=".7"/>
      </g>
      <g fill="#FFF7E7" opacity=".8">
        <circle cx="427" cy="116" r="4"/><circle cx="459" cy="91" r="3"/><circle cx="398" cy="147" r="2.5"/>
      </g>
      ${A.flower(91, 562, 0.9, "#FF8FB1")}
      ${A.flower(826, 545, 0.78, "#FFC83D")}
      ${A.flower(772, 658, 0.64, "#FFF7E7")}
      ${A.tuft(330, 688, 0.85, "#28764E")}
      ${A.tuft(548, 676, 0.6, "#28764E")}
    </svg>`;
  }

  function sceneGust() {
    return `<svg viewBox="0 0 900 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="d2Sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#6FC9E9"/>
          <stop offset="1" stop-color="#DDF8FF"/>
        </linearGradient>
      </defs>
      <rect width="900" height="700" fill="url(#d2Sky)"/>
      ${A.sun(788, 104, 42)}
      ${A.cloud(190, 111, 0.9, 0.92)}
      ${A.cloud(508, 67, 0.58, 0.72)}
      <path d="M0 438 C128 400 235 424 350 443 C477 464 584 428 727 446 C801 455 858 446 900 436 V700 H0Z" fill="#87D08B"/>
      <path d="M0 518 C147 479 264 501 393 519 C524 538 633 492 900 522 V700 H0Z" fill="#54AE72"/>
      <path d="M0 599 C150 560 300 581 445 599 C607 619 751 575 900 592 V700 H0Z" fill="#3A9360"/>
      <g fill="none" stroke="#EFFEFF" stroke-width="5" stroke-linecap="round" opacity=".72">
        <path d="M79 275 C181 227 299 221 398 249"/>
        <path d="M114 315 C213 271 311 265 401 286"/>
        <path d="M767 335 C679 301 607 303 538 328"/>
        <path d="M815 383 C730 346 650 348 589 372"/>
      </g>
      <g fill="#FFE57A">
        <path d="M758 236 C796 218 824 239 818 269 C788 278 764 263 758 236Z"/>
        <path d="M683 176 C712 160 736 178 731 202 C707 210 688 197 683 176Z"/>
        <path d="M104 390 C133 374 156 393 151 416 C127 424 109 411 104 390Z"/>
      </g>
      <g stroke="${INK}" stroke-width="5" stroke-linejoin="round">
        <path d="M373 554 C499 512 628 423 790 388 C842 457 808 551 707 584 C607 617 478 632 371 641Z" fill="#FF8F7B"/>
        <path d="M416 540 C474 507 528 476 580 448 M456 568 C519 534 578 499 636 464 M491 603 C554 569 614 534 676 500 M525 632 C586 599 648 563 704 534" fill="none" stroke="#FFF0D4" stroke-width="5" opacity=".8"/>
        <path d="M371 554 C415 564 455 574 493 583" fill="none" stroke="#FFF0D4" stroke-width="5" opacity=".8"/>
      </g>
      <g transform="translate(480 644)">
        ${A.sockDragon(0, 0, 0.96)}
      </g>
      <path d="M420 587 C514 560 585 523 652 474" fill="none" stroke="#FFF7E7" stroke-width="3" stroke-linecap="round" opacity=".8"/>
      ${pinwheel(160, 430, 0.95, 32)}
      <g transform="translate(707 540)">
        ${picnicBasket(0, 0, 0.75)}
      </g>
      <g transform="translate(285 580) rotate(72)">
        ${sandwich(0, 0, 0.82)}
      </g>
      <g transform="translate(738 198) rotate(-24)">
        ${sandwich(0, 0, 0.76)}
      </g>
      <g transform="translate(606 247) rotate(28)">
        <path d="M-23 -15 H23 V15 H-23Z" fill="#FFF7E7" stroke="${INK}" stroke-width="3.5"/>
        <path d="M-15 -7 H15 M-15 3 H10" fill="none" stroke="#A8B9C9" stroke-width="2.5"/>
      </g>
      <g fill="#FFF7E7" opacity=".9">
        <circle cx="528" cy="135" r="3.5"/><circle cx="560" cy="108" r="2.5"/><circle cx="489" cy="156" r="2.5"/>
      </g>
      ${A.flower(76, 559, 0.82, "#FF8FB1")}
      ${A.flower(833, 568, 0.72, "#FFC83D")}
      ${A.tuft(312, 687, 0.9, "#26734B")}
      ${A.tuft(820, 652, 0.65, "#26734B")}
    </svg>`;
  }

  function sceneFriends() {
    return `<svg viewBox="0 0 900 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="d3Sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#8DDFF7"/>
          <stop offset="1" stop-color="#EAFDFF"/>
        </linearGradient>
      </defs>
      <rect width="900" height="700" fill="url(#d3Sky)"/>
      ${A.sun(789, 112, 43)}
      ${A.cloud(169, 112, 0.66, 0.88)}
      ${A.cloud(540, 83, 0.48, 0.65)}
      <path d="M0 405 C130 371 241 392 352 411 C477 432 588 393 730 412 C804 422 858 413 900 403 V700 H0Z" fill="#8CD392"/>
      <path d="M0 485 C147 447 262 468 391 489 C525 511 634 466 900 497 V700 H0Z" fill="#5AB576"/>
      <path d="M0 568 C156 528 300 549 449 568 C606 588 749 546 900 562 V700 H0Z" fill="#3E9864"/>
      <g stroke="${INK}" stroke-width="5" stroke-linejoin="round">
        <path d="M89 542 C294 503 584 503 816 540 L861 700 H45Z" fill="#FF8F7B"/>
        <path d="M148 525 L126 700 M259 516 L249 700 M370 510 L367 700 M481 508 L483 700 M593 510 L601 700 M704 517 L716 700 M800 528 L825 700" fill="none" stroke="#FFF0D4" stroke-width="5" opacity=".8"/>
        <path d="M71 579 C318 541 610 541 843 572 M53 626 C305 584 620 584 858 618" fill="none" stroke="#FFF0D4" stroke-width="5" opacity=".8"/>
      </g>
      <g transform="translate(491 648)">
        ${A.sockDragon(0, 0, 0.91)}
      </g>
      ${teapot(476, 484, 0.9, -22)}
      <path d="M430 490 C406 514 382 532 354 544" fill="none" stroke="#FFE0A4" stroke-width="7" stroke-linecap="round"/>
      <g transform="translate(336 578)" stroke="${INK}" stroke-width="4" stroke-linejoin="round">
        <path d="M-20 0 H18 V-31 H-20Z" fill="#FFF7E7"/>
        <path d="M-20 -26 H18 V-9 H-20Z" fill="#FFC83D"/>
        <path d="M18 -14 C33 -14 35 0 21 2" fill="none" stroke-width="4"/>
      </g>
      <g transform="translate(390 568)" stroke="${INK}" stroke-width="4" stroke-linejoin="round">
        <path d="M-19 0 H17 V-28 H-19Z" fill="#FFF7E7"/>
        <path d="M-19 -23 H17 V-8 H-19Z" fill="#FFC83D"/>
        <path d="M17 -13 C31 -13 33 0 20 1" fill="none" stroke-width="4"/>
      </g>
      ${A.mouseFriend(214, 625, 0.95)}
      <g transform="translate(301 598)" stroke="${INK}" stroke-width="4" stroke-linejoin="round">
        <path d="M-25 -16 H23 L17 18 H-18Z" fill="#FF8FB1"/>
        <path d="M-25 -16 H23 V-7 H-25Z" fill="#FFC83D"/>
        <path d="M-17 0 H15" fill="none" stroke="#FFF0B8" stroke-width="4"/>
      </g>
      ${A.duckFriend(741, 628, 0.98)}
      <g transform="translate(684 568) rotate(12)" stroke="${INK}" stroke-width="4">
        <rect x="-33" y="-9" width="66" height="16" rx="7" fill="#FFF7E7"/>
        <path d="M-8 -9 C-3 -21 3 -21 8 -9" fill="none" stroke-width="4"/>
      </g>
      <g transform="translate(793 529)" stroke="${INK}" stroke-width="3">
        <ellipse cx="0" cy="0" rx="11" ry="8" fill="#FFD85E"/>
        <path d="M-10 -2 H10 M-8 4 H8" fill="none" stroke="${INK}" stroke-width="3"/>
        <ellipse cx="-4" cy="-8" rx="7" ry="9" fill="#FFF7E7" fill-opacity=".8"/>
        <ellipse cx="6" cy="-8" rx="7" ry="9" fill="#FFF7E7" fill-opacity=".8"/>
      </g>
      ${A.flower(76, 542, 0.85, "#FFF7E7")}
      ${A.flower(855, 526, 0.75, "#FFC83D")}
      ${A.tuft(654, 688, 0.7, "#28754D")}
      ${A.tuft(275, 689, 0.7, "#28754D")}
    </svg>`;
  }

  function sceneRain() {
    return `<svg viewBox="0 0 900 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="d4Sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#4D7B95"/>
          <stop offset="0.6" stop-color="#89AFBE"/>
          <stop offset="1" stop-color="#C6E0E2"/>
        </linearGradient>
      </defs>
      <rect width="900" height="700" fill="url(#d4Sky)"/>
      ${A.cloud(150, 104, 0.9, 1, "#DDE9EC")}
      ${A.cloud(430, 62, 0.66, 1, "#ECF3F4")}
      ${A.cloud(738, 119, 0.83, 1, "#DDE9EC")}
      <path d="M0 445 C137 410 242 435 354 452 C480 472 593 437 735 452 C806 460 858 452 900 443 V700 H0Z" fill="#5D9D6A"/>
      <path d="M0 522 C153 485 272 508 407 523 C546 539 654 497 900 523 V700 H0Z" fill="#437E55"/>
      <path d="M0 596 C154 563 300 581 447 596 C610 613 750 575 900 590 V700 H0Z" fill="#356B49"/>
      <g stroke="#DDF7FF" stroke-width="3.5" stroke-linecap="round" opacity=".7">
        <path d="M102 168 L85 219 M178 125 L160 180 M260 178 L244 227 M346 123 L328 177 M426 181 L410 230 M516 128 L499 181 M603 176 L586 229 M688 121 L670 177 M776 168 L758 222 M848 137 L832 187"/>
        <path d="M132 278 L116 325 M221 247 L204 296 M316 286 L299 334 M409 254 L393 301 M502 292 L485 339 M594 258 L577 308 M691 283 L674 330 M792 249 L775 299"/>
      </g>
      <g stroke="${INK}" stroke-width="5" stroke-linejoin="round">
        <path d="M88 540 C296 501 591 501 820 539 L866 700 H40Z" fill="#FF8F7B"/>
        <path d="M148 523 L126 700 M259 514 L249 700 M370 508 L367 700 M481 506 L483 700 M593 508 L601 700 M705 515 L717 700 M800 526 L826 700" fill="none" stroke="#FFF0D4" stroke-width="5" opacity=".8"/>
        <path d="M71 577 C318 539 611 539 843 570 M53 624 C305 582 620 582 858 616" fill="none" stroke="#FFF0D4" stroke-width="5" opacity=".8"/>
      </g>
      <g transform="translate(609 644)">
        ${A.sockDragon(0, 0, 0.96)}
      </g>
      <g stroke="${INK}" stroke-width="6" stroke-linejoin="round">
        <path d="M569 381 C520 303 401 271 295 289 C205 304 146 347 130 391 C181 432 281 435 356 402 C425 372 509 386 559 414Z" fill="#FFF7E7"/>
        <path d="M295 291 C276 327 272 368 282 401" fill="none" stroke="#FF6B57" stroke-width="12"/>
        <path d="M371 300 C348 335 343 371 351 405" fill="none" stroke="#FF6B57" stroke-width="12"/>
        <path d="M447 328 C426 352 422 379 429 401" fill="none" stroke="#FF6B57" stroke-width="12"/>
        <path d="M513 369 C496 381 490 395 493 406" fill="none" stroke="#FF6B57" stroke-width="12"/>
        <path d="M545 376 C563 376 578 388 581 405 C565 420 546 421 532 413" fill="#FFC83D"/>
      </g>
      <path d="M141 391 C167 380 191 378 214 384" fill="none" stroke="${INK}" stroke-width="4" opacity=".35"/>
      <g transform="translate(303 632)">
        ${A.mouseFriend(0, 0, 0.75)}
      </g>
      <g transform="translate(405 640)">
        ${A.duckFriend(0, 0, 0.73)}
      </g>
      ${cake(499, 596, 0.7)}
      <g transform="translate(343 586)" stroke="${INK}" stroke-width="3.5">
        <path d="M-42 -16 C-25 -26 22 -26 40 -16 C50 -11 48 0 33 4 C5 11 -21 10 -41 3 C-51 0 -52 -11 -42 -16Z" fill="#D9B57E"/>
        <path d="M-28 -12 H26" fill="none" stroke="#B48B59" stroke-width="3"/>
      </g>
      <g stroke="#8FE6FA" stroke-width="4" stroke-linecap="round" opacity=".85">
        <path d="M171 590 C170 603 170 613 170 623"/>
        <path d="M742 591 C741 604 741 614 741 624"/>
        <path d="M213 637 C212 650 212 660 212 670"/>
      </g>
      <g fill="none" stroke="#A5D8E0" stroke-width="4" opacity=".8">
        <ellipse cx="162" cy="672" rx="31" ry="7"/>
        <ellipse cx="741" cy="675" rx="36" ry="8"/>
        <ellipse cx="817" cy="638" rx="17" ry="5"/>
      </g>
      ${A.flower(88, 548, 0.72, "#FFB5C7")}
      ${A.flower(812, 555, 0.65, "#FFD85E")}
    </svg>`;
  }

  function sceneRainbow() {
    return `<svg viewBox="0 0 900 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="d5Sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#7FD7F2"/>
          <stop offset="1" stop-color="#E9FDFF"/>
        </linearGradient>
      </defs>
      <rect width="900" height="700" fill="url(#d5Sky)"/>
      ${rainbow(551, 445, 1.02)}
      ${A.sun(123, 113, 44)}
      ${A.cloud(735, 164, 0.56, 0.96, "#FFFDF4")}
      ${A.cloud(656, 551, 0.7, 0.85, "#FFFDF4")}
      <path d="M0 451 C120 414 235 435 345 451 C479 471 591 430 730 450 C805 460 860 451 900 441 V700 H0Z" fill="#8CD48F"/>
      <path d="M0 526 C144 487 264 509 394 524 C535 540 650 499 900 526 V700 H0Z" fill="#59B674"/>
      <path d="M0 597 C154 560 301 580 449 597 C612 616 752 574 900 591 V700 H0Z" fill="#3F9B65"/>
      <g stroke="${INK}" stroke-width="5" stroke-linejoin="round">
        <path d="M82 544 C291 505 587 505 819 543 L865 700 H38Z" fill="#FF8F7B"/>
        <path d="M146 526 L122 700 M258 515 L246 700 M370 509 L367 700 M482 507 L484 700 M594 509 L603 700 M706 516 L719 700 M799 527 L827 700" fill="none" stroke="#FFF0D4" stroke-width="5" opacity=".8"/>
        <path d="M64 580 C317 540 612 540 846 573 M47 627 C305 585 620 585 859 619" fill="none" stroke="#FFF0D4" stroke-width="5" opacity=".8"/>
      </g>
      <g transform="translate(514 644)">
        ${A.sockDragon(0, 0, 0.93)}
      </g>
      ${teapot(510, 378, 0.7, 9)}
      ${A.mouseFriend(208, 627, 0.92)}
      ${A.duckFriend(778, 629, 0.94)}
      <g transform="translate(471 611)" stroke="${INK}" stroke-width="4">
        <ellipse cx="0" cy="10" rx="61" ry="12" fill="#FFF7E7"/>
        <path d="M-58 9 C-39 -4 33 -5 57 8" fill="none" stroke="#D9B57E" stroke-width="4"/>
      </g>
      <g transform="translate(448 598)">
        ${cookie(0, 0, 0.74, true)}
      </g>
      <path d="M439 590 L425 577 M455 590 L470 577" fill="none" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>
      <g stroke="${INK}" stroke-width="4" stroke-linejoin="round">
        <path d="M270 591 C265 576 276 567 288 567 C300 567 310 576 305 591Z" fill="#FFC83D"/>
        <path d="M279 567 C279 558 293 558 294 567" fill="none" stroke-width="4"/>
        <path d="M686 593 C681 578 692 569 704 569 C716 569 726 578 721 593Z" fill="#FFC83D"/>
        <path d="M695 569 C695 560 709 560 710 569" fill="none" stroke-width="4"/>
      </g>
      <g transform="translate(380 576)" stroke="${INK}" stroke-width="3">
        <ellipse cx="0" cy="0" rx="10" ry="7.5" fill="#FFD85E"/>
        <path d="M-9 -2 H9 M-7 3 H7" fill="none" stroke="${INK}" stroke-width="2.7"/>
        <ellipse cx="-3" cy="-8" rx="6" ry="8" fill="#FFF7E7" fill-opacity=".8"/>
        <ellipse cx="6" cy="-8" rx="6" ry="8" fill="#FFF7E7" fill-opacity=".8"/>
      </g>
      <g fill="#FFF7E7" opacity=".9">
        <circle cx="420" cy="164" r="3.5"/><circle cx="466" cy="126" r="2.5"/><circle cx="370" cy="133" r="2"/>
      </g>
      ${A.flower(82, 548, 0.8, "#FF8FB1")}
      ${A.flower(847, 548, 0.7, "#FFC83D")}
      ${A.tuft(330, 688, 0.75, "#28764E")}
      ${A.tuft(646, 687, 0.65, "#28764E")}
    </svg>`;
  }

  const pages = [
    {
      kicker: "Page One",
      title: "A Very Wobbly Picnic",
      text: "The Sock Dragon set out a blanket, a basket, and a cake. He sat down with a great big flop. The sandwiches bounced. The lemonade wobbled. The cake landed on his nose.",
      art: scenePicnic(),
      hotspots: [
        {
          x: 72,
          y: 50,
          label: "Dragon",
          title: "The Sock Dragon",
          text: "He is made from twelve odd socks, one button, and a very large heart. No two socks match, and that is his favorite part.",
          doodle: "friend",
          accent: "#25BFA6"
        },
        {
          x: 23,
          y: 82,
          label: "Basket",
          title: "The picnic basket",
          text: "Inside: sandwiches, lemonade, a cake, and one emergency cookie. The emergency cookie was for emergencies only.",
          doodle: "snack",
          accent: "#FF8A3D"
        },
        {
          x: 81,
          y: 38,
          label: "Bumble",
          title: "Bumble the bee",
          text: "Bumble came for the jam. Bumble stayed for the cake crumbs. Bumble was very good at picnics.",
          doodle: "bee",
          accent: "#FFC83D"
        }
      ]
    },
    {
      kicker: "Page Two",
      title: "The Gusty Surprise",
      text: "A gust of wind grabbed the blanket. Sandwiches sailed. Napkins fluttered. The Sock Dragon sat on one corner and held the other with his tail. “Picnic emergency!” he said.",
      art: sceneGust(),
      hotspots: [
        {
          x: 19,
          y: 61,
          label: "Pinwheel",
          title: "A picnic breeze",
          text: "The pinwheel spun so fast it looked like a rainbow. The blanket did not agree with the plan.",
          doodle: "weather",
          accent: "#25BFA6"
        },
        {
          x: 76,
          y: 28,
          label: "Sandwich",
          title: "Sandwich in the sky",
          text: "The sandwich did two flips and landed in the basket. It was a very brave sandwich. It got eaten anyway.",
          doodle: "snack",
          accent: "#FF8A3D"
        },
        {
          x: 82,
          y: 65,
          label: "Blanket",
          title: "Hold on!",
          text: "A tail is useful for balancing, hugging, and keeping a blanket on the ground during a gust.",
          doodle: "gift",
          accent: "#FF6B57"
        }
      ]
    },
    {
      kicker: "Page Three",
      title: "Friends Arrive",
      text: "Mouse arrived with a jar of jam. Duck arrived with three spoons and a very loud quack. The Sock Dragon poured lemonade into tiny cups. Somehow, he also poured some on his elbow.",
      art: sceneFriends(),
      hotspots: [
        {
          x: 24,
          y: 82,
          label: "Millie",
          title: "Millie Mouse",
          text: "Millie brought strawberry jam. She also brought a tiny napkin. Millie is very prepared.",
          doodle: "friend",
          accent: "#B8A7C9"
        },
        {
          x: 53,
          y: 73,
          label: "Lemonade",
          title: "Lemonade o’clock",
          text: "The lemonade was too sweet, too cold, and full of fizz. In other words, perfect.",
          doodle: "snack",
          accent: "#FFC83D"
        },
        {
          x: 82,
          y: 83,
          label: "Dabble",
          title: "Dabble Duck",
          text: "Dabble brought three spoons and no napkin. Dabble has different priorities.",
          doodle: "friend",
          accent: "#FF8A3D"
        }
      ]
    },
    {
      kicker: "Page Four",
      title: "A Sock-Sized Umbrella",
      text: "Plip, plop, plip. Rain began to fall. The friends squeezed under a napkin. The Sock Dragon stretched one long sock wing above them. It made a very cozy roof.",
      art: sceneRain(),
      hotspots: [
        {
          x: 84,
          y: 17,
          label: "Rain",
          title: "Plip, plop",
          text: "Raindrops fell on the blanket. The cake stayed dry, because the cake was under the dragon.",
          doodle: "weather",
          accent: "#4B7BFF"
        },
        {
          x: 42,
          y: 51,
          label: "Wing",
          title: "One stretchy wing",
          text: "The wing was made from a long striped sock. It could stretch wide enough for a mouse, a duck, and one important cake.",
          doodle: "gift",
          accent: "#FF6B57"
        },
        {
          x: 40,
          y: 84,
          label: "Cookie",
          title: "The emergency cookie",
          text: "The emergency cookie had been saved for a real emergency. The rain counted. So did being hungry.",
          doodle: "cookie",
          accent: "#FFC83D"
        }
      ]
    },
    {
      kicker: "Page Five",
      title: "One Cookie, Three Friends",
      text: "The rain stopped, and a rainbow leaned over the meadow. There was one cookie left. The Sock Dragon broke it into three perfect pieces. One for Mouse. One for Duck. One for the dragon.",
      art: sceneRainbow(),
      hotspots: [
        {
          x: 61,
          y: 21,
          label: "Rainbow",
          title: "A whole rainbow",
          text: "Rainbows appear when sunlight shines through raindrops. The friends decided this one was especially for them.",
          doodle: "rainbow",
          accent: "#FF8FB1"
        },
        {
          x: 57,
          y: 44,
          label: "Teapot",
          title: "The teapot hat",
          text: "When the picnic was over, the Sock Dragon put the teapot on his head. “For next time,” he said. Everyone agreed it was a good hat.",
          doodle: "snack",
          accent: "#25BFA6"
        },
        {
          x: 50,
          y: 83,
          label: "Cookie",
          title: "One cookie, three friends",
          text: "The pieces were not exactly the same size. Nobody minded. Jam and friendship make up for a lot.",
          doodle: "cookie",
          accent: "#FFC83D"
        }
      ]
    }
  ];

  window.STORY_BOOKS = window.STORY_BOOKS || [];
  window.STORY_BOOKS.push({
    id: "dragon",
    title: "The Sock Dragon's Picnic",
    tag: "Silly",
    author: "A Story Rocket original",
    blurb: "A wobbly picnic, two small friends, and one stretchy sock.",
    accent: "#7BC88B",
    accentSoft: "#DFF3D4",
    tilt: "-1.4deg",
    ribbon: "",
    cover: cover(),
    pages: pages
  });
})();
