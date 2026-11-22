(function () {
  "use strict";

  const INK = "#26324B";
  const CREAM = "#FFF7E7";
  const PAPER = "#FFFDF4";

  function sparkle(x, y, r, color, rot, opacity) {
    const radius = r == null ? 8 : r;
    const fill = color || "#FFE170";
    const angle = rot == null ? 0 : rot;
    const alpha = opacity == null ? 1 : opacity;
    const curve = (radius * 0.22).toFixed(2);
    return `<path d="M0 ${-radius} Q ${curve} ${-curve} ${radius} 0 Q ${curve} ${curve} 0 ${radius} Q -${curve} ${curve} -${radius} 0 Q -${curve} -${curve} 0 ${-radius} Z" fill="${fill}" opacity="${alpha}" transform="translate(${x} ${y}) rotate(${angle})"/>`;
  }

  function starField(count, seed, width, height, options) {
    const w = width || 900;
    const h = height || 700;
    const n = count || 38;
    const o = options || {};
    let s = seed || 17;
    const rand = function () {
      s = (s * 16807) % 2147483647;
      return s / 2147483647;
    };
    const palette = o.colors || ["#FFF4C2", "#FFE170", "#BDD9FF", "#FFFFFF"];
    let output = "";
    for (let i = 0; i < n; i += 1) {
      const x = Math.round(rand() * w);
      const y = Math.round(rand() * h);
      const r = 2 + rand() * 4.5;
      const color = palette[Math.floor(rand() * palette.length)];
      if (i % 4 === 0) {
        output += sparkle(x, y, r + 2.5, color, rand() * 45, 0.55 + rand() * 0.35);
      } else {
        output += `<circle cx="${x}" cy="${y}" r="${r.toFixed(1)}" fill="${color}" opacity="${(0.4 + rand() * 0.55).toFixed(2)}"/>`;
      }
    }
    return `<g>${output}</g>`;
  }

  function fiveStar(cx, cy, radius, fill, stroke, strokeWidth) {
    const outer = radius;
    const inner = radius * 0.46;
    const points = [];
    for (let i = 0; i < 10; i += 1) {
      const angle = -Math.PI / 2 + (i * Math.PI) / 5;
      const r = i % 2 ? inner : outer;
      points.push(`${(cx + Math.cos(angle) * r).toFixed(2)},${(cy + Math.sin(angle) * r).toFixed(2)}`);
    }
    const outline = stroke === null
      ? ""
      : ` stroke="${stroke || INK}" stroke-width="${strokeWidth == null ? 5 : strokeWidth}" stroke-linejoin="round"`;
    return `<polygon points="${points.join(" ")}" fill="${fill}"${outline}/>`;
  }

  function cloud(x, y, scale, opacity, fill) {
    const s = scale == null ? 1 : scale;
    const alpha = opacity == null ? 1 : opacity;
    const color = fill || "#FFFDF4";
    return `<g transform="translate(${x} ${y}) scale(${s})" opacity="${alpha}">
      <path d="M-82 30 C-100 30 -112 17 -109 1 C-106 -14 -93 -23 -79 -20 C-78 -42 -60 -59 -39 -59 C-24 -59 -11 -51 -6 -37 C2 -49 15 -56 30 -56 C53 -56 71 -40 71 -18 C89 -18 103 -5 103 11 C103 26 90 36 75 36 L-82 36 Z" fill="${color}" stroke="${INK}" stroke-width="4.5" stroke-linejoin="round"/>
    </g>`;
  }

  function flower(x, y, scale, petal, center) {
    const s = scale == null ? 1 : scale;
    const p = petal || "#FF8FB1";
    const c = center || "#FFC83D";
    return `<g transform="translate(${x} ${y}) scale(${s})">
      <path d="M0 0 C1 16 1 27 0 42" fill="none" stroke="#2B6C4C" stroke-width="5" stroke-linecap="round"/>
      <path d="M0 21 C-12 14 -17 7 -17 -2 C-6 -2 -2 4 0 12 C2 4 7 -2 17 -2 C17 7 12 14 0 21Z" fill="#68B87A" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
      <circle cx="-13" cy="-4" r="10" fill="${p}" stroke="${INK}" stroke-width="3.5"/>
      <circle cx="13" cy="-4" r="10" fill="${p}" stroke="${INK}" stroke-width="3.5"/>
      <circle cx="0" cy="-14" r="10" fill="${p}" stroke="${INK}" stroke-width="3.5"/>
      <circle cx="0" cy="7" r="10" fill="${p}" stroke="${INK}" stroke-width="3.5"/>
      <circle cx="0" cy="-4" r="8" fill="${c}" stroke="${INK}" stroke-width="3"/>
    </g>`;
  }

  function tuft(x, y, scale, color) {
    const s = scale == null ? 1 : scale;
    const c = color || "#4A9A67";
    return `<g transform="translate(${x} ${y}) scale(${s})" fill="${c}" stroke="${INK}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
      <path d="M-12 0 C-18 -9 -18 -19 -9 -25 C-7 -13 -3 -8 0 0 C3 -14 9 -21 18 -24 C18 -12 12 -4 4 1Z"/>
      <path d="M-18 0 C-26 -4 -31 -10 -32 -18 C-23 -18 -16 -12 -12 -4Z" fill="${c}"/>
    </g>`;
  }

  function sun(x, y, radius, face) {
    const r = radius || 48;
    let rays = "";
    for (let i = 0; i < 10; i += 1) {
      const a = (i * Math.PI * 2) / 10;
      const x1 = x + Math.cos(a) * (r + 10);
      const y1 = y + Math.sin(a) * (r + 10);
      const x2 = x + Math.cos(a) * (r + 25);
      const y2 = y + Math.sin(a) * (r + 25);
      rays += `<path d="M${x1.toFixed(1)} ${y1.toFixed(1)} L${x2.toFixed(1)} ${y2.toFixed(1)}" stroke="${INK}" stroke-width="5" stroke-linecap="round"/>`;
    }
    const smile = face === false
      ? ""
      : `<circle cx="${x - 13}" cy="${y - 4}" r="4.5" fill="${INK}"/><circle cx="${x + 13}" cy="${y - 4}" r="4.5" fill="${INK}"/><path d="M${x - 12} ${y + 14} Q${x} ${y + 26} ${x + 12} ${y + 14}" fill="none" stroke="${INK}" stroke-width="4.5" stroke-linecap="round"/><circle cx="${x - 25}" cy="${y + 12}" r="6" fill="#FF8F74" opacity=".55"/><circle cx="${x + 25}" cy="${y + 12}" r="6" fill="#FF8F74" opacity=".55"/>`;
    return `<g>${rays}<circle cx="${x}" cy="${y}" r="${r}" fill="#FFD85E" stroke="${INK}" stroke-width="6"/>${smile}</g>`;
  }

  function johnny(x, y, scale, options) {
    const s = scale == null ? 1 : scale;
    const o = Object.assign(
      {
        body: "#FF6B57",
        pants: "#2D5E7E",
        skin: "#D38C5C",
        hair: "#55382A",
        helmet: false,
        wave: true
      },
      options || {}
    );

    const raisedArm = `<path d="M36 -145 C63 -152 79 -171 82 -197" fill="none" stroke="${INK}" stroke-width="30" stroke-linecap="round"/>
      <path d="M36 -145 C63 -152 79 -171 82 -197" fill="none" stroke="${o.body}" stroke-width="21" stroke-linecap="round"/>
      <circle cx="84" cy="-205" r="14" fill="${o.skin}" stroke="${INK}" stroke-width="5"/>
      <path d="M85 -214 L86 -220 M94 -208 L100 -211 M77 -211 L71 -214" fill="none" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>`;

    const restingArm = `<path d="M-44 -145 C-68 -132 -73 -111 -65 -91" fill="none" stroke="${INK}" stroke-width="30" stroke-linecap="round"/>
      <path d="M-44 -145 C-68 -132 -73 -111 -65 -91" fill="none" stroke="${o.body}" stroke-width="21" stroke-linecap="round"/>
      <circle cx="-63" cy="-84" r="14" fill="${o.skin}" stroke="${INK}" stroke-width="5"/>`;

    const downArm = `<path d="M43 -145 C68 -132 73 -111 65 -91" fill="none" stroke="${INK}" stroke-width="30" stroke-linecap="round"/>
      <path d="M43 -145 C68 -132 73 -111 65 -91" fill="none" stroke="${o.body}" stroke-width="21" stroke-linecap="round"/>
      <circle cx="63" cy="-84" r="14" fill="${o.skin}" stroke="${INK}" stroke-width="5"/>`;

    const rightArm = o.wave ? raisedArm : downArm;

    const helmet = o.helmet
      ? `<circle cx="0" cy="-208" r="70" fill="#C8EFF8" fill-opacity=".28" stroke="#E8FBFF" stroke-width="5"/>
        <path d="M-48 -224 C-38 -245 -16 -254 5 -250" fill="none" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" opacity=".7"/>
        <rect x="-40" y="-149" width="80" height="22" rx="11" fill="#D9F5FB" fill-opacity=".5" stroke="#E8FBFF" stroke-width="4"/>`
      : "";

    return `<g transform="translate(${x} ${y}) scale(${s})">
      <ellipse cx="0" cy="8" rx="62" ry="11" fill="#132238" opacity=".17"/>
      <g stroke="${INK}" stroke-width="5.5" stroke-linejoin="round" stroke-linecap="round">
        <path d="M-28 -78 L-32 -25" fill="none" stroke="${INK}" stroke-width="33"/>
        <path d="M11 -78 L15 -25" fill="none" stroke="${INK}" stroke-width="33"/>
        <path d="M-28 -78 L-32 -25" fill="none" stroke="${o.pants}" stroke-width="24"/>
        <path d="M11 -78 L15 -25" fill="none" stroke="${o.pants}" stroke-width="24"/>
        <rect x="-54" y="-27" width="41" height="25" rx="11" fill="#EE5A50"/>
        <rect x="8" y="-27" width="41" height="25" rx="11" fill="#EE5A50"/>
        <path d="M-47 -12h23M17 -12h22" fill="none" stroke="#FFF7E7" stroke-width="3" opacity=".8"/>
        ${rightArm}
        ${restingArm}
        <path d="M-46 -169 Q0 -184 46 -169 L40 -84 Q3 -66 -39 -84 Z" fill="${o.body}"/>
        <path d="M-44 -152 Q0 -167 43 -152" fill="none" stroke="#E45148" stroke-width="6" opacity=".55"/>
        ${fiveStar(0, -125, 13, CREAM, INK, 3)}
        <rect x="-14" y="-186" width="28" height="18" rx="7" fill="${o.skin}"/>
        <circle cx="-47" cy="-207" r="10" fill="${o.skin}"/>
        <circle cx="47" cy="-207" r="10" fill="${o.skin}"/>
        <circle cx="0" cy="-209" r="48" fill="${o.skin}"/>
        <path d="M-49 -216 C-55 -256 -28 -274 0 -266 C30 -274 55 -253 49 -211 C39 -235 26 -242 13 -234 C3 -252 -18 -250 -26 -232 C-37 -242 -46 -231 -49 -216 Z" fill="${o.hair}"/>
        <path d="M-23 -258 C-17 -268 -5 -270 2 -264 M13 -266 C22 -266 28 -260 31 -252" fill="none" stroke="${o.hair}" stroke-width="9" stroke-linecap="round"/>
        <path d="M-27 -217 Q-17 -223 -7 -217 M8 -217 Q18 -223 28 -217" fill="none" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>
        <circle cx="-17" cy="-206" r="5" fill="${INK}"/>
        <circle cx="16" cy="-206" r="5" fill="${INK}"/>
        <circle cx="-15.5" cy="-208" r="1.6" fill="#FFFFFF" stroke="none"/>
        <circle cx="17.5" cy="-208" r="1.6" fill="#FFFFFF" stroke="none"/>
        <path d="M-11 -191 Q0 -181 13 -193" fill="none" stroke="${INK}" stroke-width="4.5" stroke-linecap="round"/>
        <circle cx="-32" cy="-190" r="7" fill="#F79D89" stroke="none" opacity=".65"/>
        <circle cx="33" cy="-190" r="7" fill="#F79D89" stroke="none" opacity=".65"/>
        ${helmet}
      </g>
    </g>`;
  }

  function comet(x, y, scale, options) {
    const s = scale == null ? 1 : scale;
    const o = Object.assign({ helmet: false, fur: "#F2D9A5", ear: "#9B6A45", collar: "#FF6B57" }, options || {});
    const helmet = o.helmet
      ? `<circle cx="32" cy="-87" r="47" fill="#C8EFF8" fill-opacity=".27" stroke="#E8FBFF" stroke-width="4.5"/>
        <path d="M1 -108 C11 -121 28 -127 42 -123" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" opacity=".75"/>
        <rect x="3" y="-53" width="58" height="15" rx="7" fill="#D9F5FB" fill-opacity=".55" stroke="#E8FBFF" stroke-width="3"/>`
      : "";
    return `<g transform="translate(${x} ${y}) scale(${s})">
      <ellipse cx="4" cy="4" rx="58" ry="9" fill="#132238" opacity=".16"/>
      <g stroke="${INK}" stroke-width="5" stroke-linejoin="round" stroke-linecap="round">
        <path d="M39 -53 C78 -76 95 -52 76 -29 C100 -18 88 11 57 4" fill="none" stroke="${INK}" stroke-width="25" stroke-linecap="round"/>
        <path d="M39 -53 C78 -76 95 -52 76 -29 C100 -18 88 11 57 4" fill="none" stroke="${o.fur}" stroke-width="16" stroke-linecap="round"/>
        <rect x="-34" y="-37" width="20" height="35" rx="9" fill="${o.fur}"/>
        <rect x="4" y="-37" width="20" height="35" rx="9" fill="${o.fur}"/>
        <path d="M-33 -11h18M5 -11h18" fill="none" stroke="${o.ear}" stroke-width="4" stroke-linecap="round"/>
        <ellipse cx="-3" cy="-58" rx="49" ry="32" fill="${o.fur}"/>
        <path d="M7 -94 C0 -119 21 -126 29 -109 C34 -96 27 -84 21 -78Z" fill="${o.ear}"/>
        <path d="M53 -98 C48 -119 65 -125 73 -109 C77 -97 70 -85 64 -79Z" fill="${o.ear}"/>
        <circle cx="32" cy="-87" r="34" fill="${o.fur}"/>
        <path d="M4 -67 Q31 -50 60 -70" fill="none" stroke="${o.collar}" stroke-width="10" stroke-linecap="round"/>
        <circle cx="31" cy="-54" r="7" fill="#FFC83D"/>
        <ellipse cx="45" cy="-74" rx="21" ry="15" fill="#FFF7E2"/>
        <circle cx="58" cy="-76" r="6" fill="${INK}"/>
        <path d="M56 -68 Q61 -63 67 -68" fill="none" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>
        <circle cx="26" cy="-93" r="4.5" fill="${INK}"/>
        <circle cx="42" cy="-93" r="4.5" fill="${INK}"/>
        <circle cx="27.5" cy="-94.5" r="1.4" fill="#FFFFFF" stroke="none"/>
        <circle cx="43.5" cy="-94.5" r="1.4" fill="#FFFFFF" stroke="none"/>
        ${helmet}
      </g>
    </g>`;
  }

  function telescope(x, y, scale, rotation) {
    const s = scale == null ? 1 : scale;
    const rot = rotation == null ? -18 : rotation;
    return `<g transform="translate(${x} ${y}) scale(${s})">
      <ellipse cx="0" cy="3" rx="53" ry="8" fill="#132238" opacity=".16"/>
      <g stroke="${INK}" stroke-width="5" stroke-linejoin="round" stroke-linecap="round">
        <path d="M0 -90 L-43 0 M0 -90 L42 0 M0 -90 L3 0" fill="none" stroke-width="8"/>
        <g transform="translate(0 -104) rotate(${rot})">
          <rect x="-88" y="-25" width="148" height="50" rx="22" fill="#2AAE9B"/>
          <rect x="-99" y="-15" width="27" height="30" rx="10" fill="#FFC83D"/>
          <rect x="51" y="-31" width="29" height="62" rx="12" fill="#FF6B57"/>
          <rect x="58" y="-22" width="13" height="44" rx="6" fill="#FFE0A8"/>
          <path d="M-58 -8 Q-24 -18 13 -15" fill="none" stroke="#E7FBF6" stroke-width="6" stroke-linecap="round" opacity=".7"/>
          ${fiveStar(-41, 1, 9, "#FFF7E7", null, 0)}
        </g>
        <circle cx="0" cy="-90" r="11" fill="#FFC83D"/>
      </g>
    </g>`;
  }

  function rocket(x, y, scale, options) {
    const s = scale == null ? 1 : scale;
    const o = Object.assign(
      {
        body: "#FF6B57",
        fin: "#25BFA6",
        nose: "#FFE0A6",
        flame: true,
        face: false,
        rotate: 0
      },
      options || {}
    );
    const windowFace = o.face
      ? `<circle cx="-12" cy="-166" r="4.5" fill="${INK}"/><circle cx="12" cy="-166" r="4.5" fill="${INK}"/><path d="M-11 -154 Q0 -145 11 -154" fill="none" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>`
      : `<path d="M-25 -183 Q-8 -192 8 -187" fill="none" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" opacity=".75"/>`;
    const flame = o.flame
      ? `<g class="rocket-flame">
          <path d="M-27 -14 C-20 31 0 72 0 72 C0 72 20 31 27 -14Z" fill="#FF9A3D" stroke="${INK}" stroke-width="5" stroke-linejoin="round"/>
          <path d="M-14 2 C-8 25 0 48 0 48 C0 48 8 25 14 2Z" fill="#FFD85E"/>
        </g>`
      : "";
    return `<g transform="translate(${x} ${y}) scale(${s}) rotate(${o.rotate})">
      ${flame}
      <g stroke="${INK}" stroke-width="5.5" stroke-linejoin="round" stroke-linecap="round">
        <path d="M-47 -105 L-96 -39 L-49 -55Z" fill="${o.fin}"/>
        <path d="M47 -105 L96 -39 L49 -55Z" fill="${o.fin}"/>
        <path d="M0 -298 C50 -236 63 -122 49 -19 L-49 -19 C-63 -122 -50 -236 0 -298Z" fill="${o.body}"/>
        <path d="M0 -298 C18 -275 32 -247 39 -218 L-39 -218 C-32 -247 -18 -275 0 -298Z" fill="${o.nose}"/>
        <circle cx="0" cy="-164" r="43" fill="#C7EFF7"/>
        <circle cx="0" cy="-164" r="34" fill="#E9FBFF"/>
        ${windowFace}
        <path d="M-42 -102 H42" fill="none" stroke="#D94A43" stroke-width="6" opacity=".65"/>
        <path d="M-35 -79 H35" fill="none" stroke="#D94A43" stroke-width="6" opacity=".4"/>
        <rect x="-34" y="-22" width="68" height="19" rx="7" fill="#3E4A62"/>
      </g>
    </g>`;
  }

  function luna(x, y, scale, options) {
    const s = scale == null ? 1 : scale;
    const o = Object.assign(
      { coat: "#4CC9B0", tights: "#413B73", skin: "#F0C29D", hair: "#4D355F", shoe: "#FFC83D" },
      options || {}
    );
    return `<g transform="translate(${x} ${y}) scale(${s})">
      <ellipse cx="0" cy="7" rx="55" ry="10" fill="#111B3D" opacity=".22"/>
      <g stroke="${INK}" stroke-width="5.5" stroke-linejoin="round" stroke-linecap="round">
        <path d="M-26 -65 L-31 -20" fill="none" stroke="${o.tights}" stroke-width="24" stroke-linecap="round"/>
        <path d="M21 -65 L26 -20" fill="none" stroke="${o.tights}" stroke-width="24" stroke-linecap="round"/>
        <rect x="-50" y="-23" width="37" height="23" rx="10" fill="${o.shoe}"/>
        <rect x="16" y="-23" width="37" height="23" rx="10" fill="${o.shoe}"/>
        <path d="M-42 -145 C-66 -130 -71 -109 -63 -89" fill="none" stroke="${INK}" stroke-width="29" stroke-linecap="round"/>
        <path d="M-42 -145 C-66 -130 -71 -109 -63 -89" fill="none" stroke="${o.coat}" stroke-width="20" stroke-linecap="round"/>
        <circle cx="-61" cy="-82" r="13" fill="${o.skin}" stroke="${INK}" stroke-width="5"/>
        <path d="M43 -146 C67 -134 72 -113 64 -92" fill="none" stroke="${INK}" stroke-width="29" stroke-linecap="round"/>
        <path d="M43 -146 C67 -134 72 -113 64 -92" fill="none" stroke="${o.coat}" stroke-width="20" stroke-linecap="round"/>
        <circle cx="62" cy="-85" r="13" fill="${o.skin}" stroke="${INK}" stroke-width="5"/>
        <path d="M-43 -158 Q0 -174 43 -158 L49 -84 Q0 -66 -48 -84 Z" fill="${o.coat}"/>
        <path d="M-34 -156 Q0 -168 32 -157 L36 -119 Q0 -105 -38 -118Z" fill="#FFE6A3"/>
        ${fiveStar(0, -135, 10, "#FFC83D", INK, 3)}
        <rect x="-12" y="-178" width="24" height="17" rx="7" fill="${o.skin}"/>
        <circle cx="-41" cy="-196" r="9" fill="${o.skin}"/>
        <circle cx="41" cy="-196" r="9" fill="${o.skin}"/>
        <circle cx="0" cy="-198" r="42" fill="${o.skin}"/>
        <path d="M-43 -201 C-46 -235 -26 -248 0 -245 C26 -248 46 -234 43 -201 C36 -217 26 -225 16 -220 C7 -235 -12 -235 -20 -217 C-30 -226 -40 -216 -43 -201 Z" fill="${o.hair}"/>
        <path d="M-29 -212 C-37 -230 -28 -250 -8 -257 C9 -262 30 -252 35 -234 L29 -204 C21 -218 10 -224 0 -218 C-12 -214 -19 -208 -25 -200Z" fill="${o.hair}"/>
        ${fiveStar(34, -231, 11, "#FFC83D", INK, 2.5)}
        <path d="M-22 -205 Q-13 -210 -5 -205 M9 -205 Q18 -210 26 -204" fill="none" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>
        <circle cx="-13" cy="-195" r="4.5" fill="${INK}"/>
        <circle cx="16" cy="-195" r="4.5" fill="${INK}"/>
        <circle cx="-11.5" cy="-197" r="1.4" fill="#FFFFFF" stroke="none"/>
        <circle cx="17.5" cy="-197" r="1.4" fill="#FFFFFF" stroke="none"/>
        <path d="M-8 -181 Q0 -173 10 -182" fill="none" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>
        <circle cx="-29" cy="-182" r="6" fill="#F79D89" stroke="none" opacity=".6"/>
        <circle cx="31" cy="-182" r="6" fill="#F79D89" stroke="none" opacity=".6"/>
      </g>
    </g>`;
  }

  function starFriend(x, y, scale, options) {
    const s = scale == null ? 1 : scale;
    const o = Object.assign({ sleepy: false, glow: true }, options || {});
    const eyes = o.sleepy
      ? `<path d="M-18 -66 Q-10 -59 -2 -66 M10 -66 Q18 -59 26 -66" fill="none" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>
        <path d="M2 -48 Q9 -43 16 -48" fill="none" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>`
      : `<circle cx="-10" cy="-66" r="5" fill="${INK}"/>
        <circle cx="18" cy="-66" r="5" fill="${INK}"/>
        <circle cx="-8.5" cy="-68" r="1.6" fill="#FFFFFF" stroke="none"/>
        <circle cx="19.5" cy="-68" r="1.6" fill="#FFFFFF" stroke="none"/>
        <path d="M0 -51 Q8 -42 17 -52" fill="none" stroke="${INK}" stroke-width="4.5" stroke-linecap="round"/>`;
    const glow = o.glow
      ? `<circle cx="0" cy="-52" r="76" fill="#FFE170" opacity=".17"/>
        ${sparkle(-75, -92, 8, "#FFE170", 20, 0.8)}
        ${sparkle(70, -24, 6, "#FFF4C2", -15, 0.75)}`
      : "";
    return `<g transform="translate(${x} ${y}) scale(${s})">
      ${glow}
      <ellipse cx="0" cy="3" rx="45" ry="8" fill="#111B3D" opacity=".15"/>
      <g stroke="${INK}" stroke-width="5.5" stroke-linejoin="round" stroke-linecap="round">
        ${fiveStar(0, -58, 58, "#FFD85E", INK, 5.5)}
        <circle cx="-25" cy="-51" r="7" fill="#FFAA86" stroke="none" opacity=".7"/>
        <circle cx="30" cy="-51" r="7" fill="#FFAA86" stroke="none" opacity=".7"/>
        ${eyes}
      </g>
    </g>`;
  }

  function mochiCat(x, y, scale, options) {
    const s = scale == null ? 1 : scale;
    const o = Object.assign({ fur: "#9B87C3", belly: "#DCD2ED" }, options || {});
    return `<g transform="translate(${x} ${y}) scale(${s})">
      <ellipse cx="0" cy="3" rx="38" ry="7" fill="#111B3D" opacity=".17"/>
      <g stroke="${INK}" stroke-width="4.5" stroke-linejoin="round" stroke-linecap="round">
        <path d="M28 -27 C60 -36 66 -8 45 -4 C70 4 53 22 36 10" fill="none" stroke-width="15" stroke-linecap="round" stroke="${o.fur}"/>
        <ellipse cx="0" cy="-30" rx="31" ry="35" fill="${o.fur}"/>
        <ellipse cx="0" cy="-24" rx="18" ry="23" fill="${o.belly}"/>
        <circle cx="0" cy="-69" r="30" fill="${o.fur}"/>
        <path d="M-28 -84 L-35 -115 L-10 -99Z" fill="${o.fur}"/>
        <path d="M28 -84 L35 -115 L10 -99Z" fill="${o.fur}"/>
        <path d="M-25 -88 L-29 -104 L-14 -95Z" fill="#F4A5B9" stroke="none"/>
        <path d="M25 -88 L29 -104 L14 -95Z" fill="#F4A5B9" stroke="none"/>
        <path d="M-16 -72 Q-9 -76 -3 -72 M3 -72 Q10 -76 16 -72" fill="none" stroke-width="3.5"/>
        <path d="M-8 -58 Q0 -52 8 -58" fill="none" stroke-width="3.5"/>
        <path d="M-24 -61H-46 M-25 -54H-47 M24 -61H46 M25 -54H47" fill="none" stroke-width="2.5" opacity=".75"/>
        <path d="M-10 -47 Q0 -39 10 -47" fill="none" stroke-width="4"/>
      </g>
    </g>`;
  }

  function mouseFriend(x, y, scale, options) {
    const s = scale == null ? 1 : scale;
    const o = Object.assign({ fur: "#B8A7C9", dress: "#FFC83D" }, options || {});
    return `<g transform="translate(${x} ${y}) scale(${s})">
      <ellipse cx="0" cy="3" rx="30" ry="6" fill="#1E2B20" opacity=".16"/>
      <g stroke="${INK}" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
        <path d="M24 -18 C52 -24 54 2 37 6" fill="none" stroke="${o.fur}" stroke-width="5" stroke-linecap="round"/>
        <ellipse cx="0" cy="-26" rx="22" ry="27" fill="${o.dress}"/>
        <circle cx="-18" cy="-54" r="17" fill="${o.fur}"/>
        <circle cx="18" cy="-54" r="17" fill="${o.fur}"/>
        <circle cx="-18" cy="-54" r="9" fill="#F6C2D2"/>
        <circle cx="18" cy="-54" r="9" fill="#F6C2D2"/>
        <circle cx="0" cy="-44" r="23" fill="${o.fur}"/>
        <circle cx="-8" cy="-48" r="3.8" fill="${INK}"/>
        <circle cx="8" cy="-48" r="3.8" fill="${INK}"/>
        <circle cx="0" cy="-38" r="4" fill="#F08B9F"/>
        <path d="M-7 -32 Q0 -27 7 -32" fill="none" stroke-width="3"/>
        <path d="M-24 -34 L-37 -36 M-24 -29 L-37 -27 M24 -34 L37 -36 M24 -29 L37 -27" fill="none" stroke-width="2" opacity=".7"/>
        <circle cx="-16" cy="-38" r="4" fill="#F4A5B9" stroke="none" opacity=".65"/>
        <circle cx="16" cy="-38" r="4" fill="#F4A5B9" stroke="none" opacity=".65"/>
      </g>
    </g>`;
  }

  function duckFriend(x, y, scale, options) {
    const s = scale == null ? 1 : scale;
    const o = Object.assign({ body: "#FFF7E7", wing: "#FFD85E" }, options || {});
    return `<g transform="translate(${x} ${y}) scale(${s})">
      <ellipse cx="0" cy="3" rx="32" ry="6" fill="#1E2B20" opacity=".16"/>
      <g stroke="${INK}" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
        <path d="M-18 -8v9M16 -8v9" stroke="#FF8A3D" stroke-width="5"/>
        <path d="M-29 1h18M11 1h18" stroke="#FF8A3D" stroke-width="4"/>
        <ellipse cx="0" cy="-26" rx="27" ry="30" fill="${o.body}"/>
        <path d="M22 -28 C46 -33 45 -7 24 -8 C35 -18 33 -23 22 -28Z" fill="${o.wing}"/>
        <circle cx="0" cy="-58" r="23" fill="${o.body}"/>
        <path d="M20 -60 Q39 -64 41 -53 Q37 -42 19 -47Z" fill="#FF9A3D"/>
        <path d="M21 -55 Q33 -55 38 -52" fill="none" stroke-width="3"/>
        <circle cx="-7" cy="-63" r="4" fill="${INK}"/>
        <circle cx="6" cy="-63" r="4" fill="${INK}"/>
        <path d="M-5 -78 Q0 -82 5 -78" fill="none" stroke-width="3"/>
        <circle cx="-13" cy="-51" r="4" fill="#F4A5B9" stroke="none" opacity=".65"/>
      </g>
    </g>`;
  }

  function sockDragon(x, y, scale, options) {
    const s = scale == null ? 1 : scale;
    const o = Object.assign(
      { green: "#79BD8B", belly: "#FFF0BF", sock: "#FFF7E7", accent: "#FF6B57", wing: "#FFD85E" },
      options || {}
    );
    return `<g transform="translate(${x} ${y}) scale(${s})">
      <ellipse cx="0" cy="6" rx="124" ry="17" fill="#1F3923" opacity=".16"/>
      <g stroke="${INK}" stroke-width="6" stroke-linejoin="round" stroke-linecap="round">
        <path d="M69 -74 C130 -58 148 -111 121 -146 C160 -158 163 -116 139 -98" fill="none" stroke="${INK}" stroke-width="37" stroke-linecap="round"/>
        <path d="M69 -74 C130 -58 148 -111 121 -146 C160 -158 163 -116 139 -98" fill="none" stroke="${o.green}" stroke-width="27" stroke-linecap="round"/>
        <path d="M-70 -220 C-119 -252 -145 -215 -116 -187 C-139 -169 -116 -139 -83 -158Z" fill="${o.wing}"/>
        <path d="M70 -230 C117 -258 142 -223 114 -194 C135 -177 114 -148 83 -165Z" fill="${o.wing}"/>
        <g transform="translate(-82 -75)">
          <path d="M0 0 H49 V35 C49 47 58 50 58 60 C58 70 46 76 29 76 C12 76 0 68 0 57Z" fill="${o.sock}"/>
          <path d="M0 2 H49 V16 H0Z" fill="${o.accent}"/>
          <path d="M4 27 H44 M4 40 H44" fill="none" stroke="${o.accent}" stroke-width="7"/>
          <path d="M44 55 Q52 54 57 58" fill="none" stroke="${INK}" stroke-width="3" opacity=".3"/>
        </g>
        <g transform="translate(33 -75)">
          <path d="M0 0 H49 V35 C49 47 58 50 58 60 C58 70 46 76 29 76 C12 76 0 68 0 57Z" fill="#9BE3D2"/>
          <path d="M0 2 H49 V16 H0Z" fill="#25BFA6"/>
          <circle cx="14" cy="32" r="4" fill="#FFC83D" stroke="none"/>
          <circle cx="31" cy="47" r="4.5" fill="#FFC83D" stroke="none"/>
          <circle cx="19" cy="61" r="3.5" fill="#FFC83D" stroke="none"/>
        </g>
        <path d="M-87 -72 C-124 -136 -110 -222 -59 -252 C-16 -278 67 -273 98 -218 C123 -173 108 -105 71 -68 C29 -28 -51 -30 -87 -72Z" fill="${o.green}"/>
        <ellipse cx="0" cy="-142" rx="59" ry="84" fill="${o.belly}"/>
        <path d="M-63 -193 l30 -14 l13 29 l-30 14Z" fill="#FF9A8B" stroke-width="4"/>
        <path d="M-55 -187l18 -8M-51 -177l18 -8" fill="none" stroke="${INK}" stroke-width="2.5" opacity=".55"/>
        <path d="M48 -94 l25 13 l-12 25 l-25 -13Z" fill="#9BE3D2" stroke-width="4"/>
        <path d="M-95 -151 C-126 -158 -129 -129 -106 -119" fill="none" stroke="${INK}" stroke-width="24" stroke-linecap="round"/>
        <path d="M-95 -151 C-126 -158 -129 -129 -106 -119" fill="none" stroke="${o.green}" stroke-width="16" stroke-linecap="round"/>
        <path d="M94 -166 C122 -176 130 -149 108 -136" fill="none" stroke="${INK}" stroke-width="24" stroke-linecap="round"/>
        <path d="M94 -166 C122 -176 130 -149 108 -136" fill="none" stroke="${o.green}" stroke-width="16" stroke-linecap="round"/>
        <path d="M-32 -331 C-46 -357 -23 -365 -11 -343 C-4 -331 -9 -321 -14 -316" fill="${o.wing}"/>
        <path d="M37 -331 C51 -357 28 -365 16 -343 C9 -331 14 -321 19 -316" fill="${o.wing}"/>
        <circle cx="0" cy="-278" r="68" fill="${o.green}"/>
        <ellipse cx="0" cy="-251" rx="46" ry="31" fill="#C9EAC2"/>
        <circle cx="-16" cy="-256" r="4" fill="${INK}"/>
        <circle cx="16" cy="-256" r="4" fill="${INK}"/>
        <path d="M-15 -237 Q0 -223 17 -239" fill="none" stroke-width="4.5"/>
        <circle cx="-29" cy="-296" r="6" fill="${INK}"/>
        <circle cx="29" cy="-296" r="6" fill="${INK}"/>
        <circle cx="-27" cy="-298" r="2" fill="#FFFFFF" stroke="none"/>
        <circle cx="31" cy="-298" r="2" fill="#FFFFFF" stroke="none"/>
        <path d="M-39 -308 Q-29 -315 -20 -309 M20 -309 Q29 -315 39 -308" fill="none" stroke-width="4" stroke-linecap="round"/>
        <circle cx="-42" cy="-273" r="8" fill="#FFAA9B" stroke="none" opacity=".55"/>
        <circle cx="42" cy="-273" r="8" fill="#FFAA9B" stroke="none" opacity=".55"/>
        <path d="M-48 -303 C-55 -320 -47 -331 -36 -330 C-28 -329 -24 -319 -28 -309" fill="${o.accent}" stroke-width="4"/>
        <path d="M48 -303 C55 -320 47 -331 36 -330 C28 -329 24 -319 28 -309" fill="${o.accent}" stroke-width="4"/>
        ${flower(43, -318, 0.52, "#FF8FB1", "#FFC83D")}
      </g>
    </g>`;
  }

  function doodle(name, accent) {
    const color = accent || "#FFC83D";
    const art = {
      planet: `<circle cx="32" cy="31" r="18" fill="${color}" stroke="${INK}" stroke-width="3.5"/><ellipse cx="32" cy="31" rx="29" ry="9" fill="none" stroke="${INK}" stroke-width="3" transform="rotate(-17 32 31)"/><circle cx="26" cy="24" r="4" fill="${INK}" opacity=".25"/><circle cx="38" cy="37" r="3" fill="${INK}" opacity=".25"/>`,
      moon: `<path d="M40 13c-12 2-20 12-19 24 1 11 10 19 21 19 4 0 8-1 11-3-13-2-22-13-21-26 0-6 3-11 8-14Z" fill="${color}" stroke="${INK}" stroke-width="3.4" stroke-linejoin="round"/><path d="M47 17l1.8 5.2L54 24l-5.2 1.8L47 31l-1.8-5.2L40 24l5.2-1.8L47 17Z" fill="#FFFDF4" stroke="${INK}" stroke-width="1.8"/>`,
      star: `${fiveStar(32, 32, 22, color, INK, 3.5)}<circle cx="26" cy="30" r="2.3" fill="${INK}"/><circle cx="38" cy="30" r="2.3" fill="${INK}"/><path d="M27 38q5 4 10 0" fill="none" stroke="${INK}" stroke-width="2.2" stroke-linecap="round"/>`,
      rocket: `<path d="M32 7c11 10 15 23 12 38H20C17 30 21 17 32 7Z" fill="${color}" stroke="${INK}" stroke-width="3.2"/><circle cx="32" cy="25" r="7" fill="#C7EFF7" stroke="${INK}" stroke-width="3"/><path d="M21 31L12 44l11-3M43 31l9 13-11-3" fill="#FFFDF4" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/><path d="M26 45h12l-6 13Z" fill="#FFD85E" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round"/>`,
      tool: `<path d="M42 12c-8-3-16 2-17 10-1 5 2 10 7 12L19 49c-3 3-3 6 0 8s6 2 8-1l11-15c8 1 14-5 14-12 0-3-1-5-3-7l-7 8-6-5 7-8c-1-2-3-4-5-5Z" fill="${color}" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>`,
      snack: `<path d="M9 43L34 11c5-6 14-6 19 0L37 45Z" fill="#FFE1A0" stroke="${INK}" stroke-width="3.2" stroke-linejoin="round"/><path d="M18 41l14-19c3-4 8-5 12-2M26 45l13-18" fill="none" stroke="${INK}" stroke-width="2.3" stroke-linecap="round"/><circle cx="29" cy="31" r="2" fill="#FF6B57"/><circle cx="36" cy="23" r="2" fill="#FF6B57"/>`,
      paw: `<ellipse cx="32" cy="41" rx="16" ry="12" fill="${color}" stroke="${INK}" stroke-width="3.2"/><ellipse cx="17" cy="25" rx="6.5" ry="9" fill="${color}" stroke="${INK}" stroke-width="3" transform="rotate(-18 17 25)"/><ellipse cx="47" cy="25" rx="6.5" ry="9" fill="${color}" stroke="${INK}" stroke-width="3" transform="rotate(18 47 25)"/><ellipse cx="27" cy="17" rx="5.5" ry="8" fill="${color}" stroke="${INK}" stroke-width="3"/><ellipse cx="39" cy="17" rx="5.5" ry="8" fill="${color}" stroke="${INK}" stroke-width="3"/>`,
      plant: `<path d="M32 40V23M32 31c-8-2-13-7-14-14 8-1 14 3 16 10M33 25c2-9 8-14 16-15 0 9-5 15-14 18" fill="none" stroke="${INK}" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 39h28l-4 17H22Z" fill="${color}" stroke="${INK}" stroke-width="3.2" stroke-linejoin="round"/><path d="M16 35h32v8H16Z" fill="#FFFDF4" stroke="${INK}" stroke-width="3.2" stroke-linejoin="round"/>`,
      friend: `<circle cx="24" cy="28" r="12" fill="${color}" stroke="${INK}" stroke-width="3.2"/><circle cx="43" cy="36" r="10" fill="#FFFDF4" stroke="${INK}" stroke-width="3.2"/><circle cx="20" cy="27" r="1.8" fill="${INK}"/><circle cx="28" cy="27" r="1.8" fill="${INK}"/><path d="M20 33q4 3 8 0M40 36q3 2 6 0" fill="none" stroke="${INK}" stroke-width="2" stroke-linecap="round"/>`,
      weather: `<path d="M17 39c-7 0-11-5-9-11 1-5 6-8 11-7 2-8 9-13 17-12 7 1 12 6 13 13 6 0 10 4 10 9s-4 8-10 8Z" fill="#FFFDF4" stroke="${INK}" stroke-width="3.2" stroke-linejoin="round"/><path d="M21 46l-3 8M32 45l-3 10M43 46l-3 8" fill="none" stroke="#4B7BFF" stroke-width="3.5" stroke-linecap="round"/>`,
      home: `<path d="M10 31L32 12l22 19" fill="none" stroke="${INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 28v24h32V28" fill="${color}" stroke="${INK}" stroke-width="3.2" stroke-linejoin="round"/><path d="M27 52V38h10v14" fill="#FFFDF4" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/><circle cx="41" cy="33" r="2.5" fill="${INK}"/>`,
      gift: `<rect x="12" y="24" width="40" height="31" rx="4" fill="${color}" stroke="${INK}" stroke-width="3.2"/><path d="M12 34h40M32 24v31" fill="none" stroke="${INK}" stroke-width="3"/><path d="M32 23c-10 0-16-3-16-8 0-4 5-6 9-4 6 2 8 8 8 12 0-4 2-10 8-12 4-2 9 0 9 4 0 5-8 8-18 8Z" fill="#FFFDF4" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>`,
      book: `<path d="M9 16c9-2 17 1 23 6v31c-6-5-14-8-23-6Z" fill="${color}" stroke="${INK}" stroke-width="3.2" stroke-linejoin="round"/><path d="M55 16c-9-2-17 1-23 6v31c6-5 14-8 23-6Z" fill="#FFFDF4" stroke="${INK}" stroke-width="3.2" stroke-linejoin="round"/><path d="M17 26c4 0 8 1 11 3M17 34c4 0 8 1 11 3M36 29c3-2 7-3 11-3" fill="none" stroke="${INK}" stroke-width="2.2" stroke-linecap="round"/>`,
      telescope: `<path d="M32 32L18 54M32 32l14 22M32 32v22" fill="none" stroke="${INK}" stroke-width="3.4" stroke-linecap="round"/><g transform="rotate(-18 32 26)"><rect x="11" y="21" width="37" height="12" rx="6" fill="${color}" stroke="${INK}" stroke-width="3"/><rect x="44" y="19" width="9" height="16" rx="4" fill="#FFDFA0" stroke="${INK}" stroke-width="2.5"/><rect x="7" y="23" width="7" height="8" rx="3" fill="#FFFDF4" stroke="${INK}" stroke-width="2"/></g>`,
      cookie: `<circle cx="32" cy="34" r="20" fill="${color}" stroke="${INK}" stroke-width="3.2"/><circle cx="25" cy="28" r="2.7" fill="${INK}"/><circle cx="38" cy="25" r="2.2" fill="${INK}"/><circle cx="43" cy="38" r="2.8" fill="${INK}"/><circle cx="31" cy="43" r="2" fill="${INK}"/><circle cx="20" cy="39" r="1.8" fill="${INK}"/>`,
      rainbow: `<path d="M10 46c0-14 10-25 22-25s22 11 22 25" fill="none" stroke="${color}" stroke-width="6"/><path d="M18 46c0-9 6-17 14-17s14 8 14 17" fill="none" stroke="#FFFDF4" stroke-width="5"/><path d="M27 46c0-4 2-7 5-7s5 3 5 7" fill="none" stroke="${color}" stroke-width="4"/><circle cx="12" cy="49" r="5" fill="#FFFDF4" stroke="${INK}" stroke-width="2.5"/><circle cx="52" cy="49" r="5" fill="#FFFDF4" stroke="${INK}" stroke-width="2.5"/>`,
      kite: `<path d="M32 7L51 27L32 51L13 27Z" fill="${color}" stroke="${INK}" stroke-width="3.2" stroke-linejoin="round"/><path d="M32 7v44M13 27h38" fill="none" stroke="${INK}" stroke-width="2.2"/><path d="M32 51c-5 6 4 8-2 13" fill="none" stroke="${INK}" stroke-width="2.4" stroke-linecap="round"/><path d="M30 58l4 3-4 3" fill="${INK}"/>`,
      bee: `<ellipse cx="31" cy="34" rx="14" ry="17" fill="#FFD85E" stroke="${INK}" stroke-width="3.2"/><path d="M19 28h24M20 37h22M24 46h14" fill="none" stroke="${INK}" stroke-width="3"/><ellipse cx="23" cy="23" rx="8" ry="11" fill="#FFFDF4" fill-opacity=".75" stroke="${INK}" stroke-width="2.5" transform="rotate(-24 23 23)"/><ellipse cx="40" cy="23" rx="8" ry="11" fill="#FFFDF4" fill-opacity=".75" stroke="${INK}" stroke-width="2.5" transform="rotate(24 40 23)"/><path d="M31 17V9" stroke="${INK}" stroke-width="2.5" stroke-linecap="round"/><circle cx="31" cy="7" r="2.5" fill="${INK}"/>`
    };
    return `<svg viewBox="0 0 64 64" aria-hidden="true">${art[name] || art.star}</svg>`;
  }

  window.StoryArt = {
    INK: INK,
    CREAM: CREAM,
    PAPER: PAPER,
    sparkle: sparkle,
    starField: starField,
    fiveStar: fiveStar,
    cloud: cloud,
    flower: flower,
    tuft: tuft,
    sun: sun,
    johnny: johnny,
    comet: comet,
    telescope: telescope,
    rocket: rocket,
    luna: luna,
    starFriend: starFriend,
    mochiCat: mochiCat,
    mouseFriend: mouseFriend,
    duckFriend: duckFriend,
    sockDragon: sockDragon,
    doodle: doodle
  };
})();
