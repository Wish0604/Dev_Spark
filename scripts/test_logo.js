import fs from 'fs';

// Let's create an exact visual comparison SVG with both Emblem and Full Wordmark
const testSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 520" width="500" height="520" style="background:#000000">
  <defs>
    <!-- Pixel X mask on lightning bolt body -->
    <mask id="testBoltXMask">
      <rect width="500" height="520" fill="#ffffff" />
      <rect x="236" y="122" width="8" height="8" fill="#000000" />
      <rect x="256" y="122" width="8" height="8" fill="#000000" />
      <rect x="246" y="132" width="8" height="8" fill="#000000" />
      <rect x="236" y="142" width="8" height="8" fill="#000000" />
      <rect x="256" y="142" width="8" height="8" fill="#000000" />
    </mask>
  </defs>

  <g fill="#ffffff" stroke="#ffffff">
    <!-- Concentric satellite orbital arc (top-left) -->
    <path
      d="M 124 146 A 150 150 0 0 1 292 48"
      stroke="#ffffff"
      stroke-width="3.5"
      fill="none"
      stroke-linecap="butt"
      opacity="0.9"
    />

    <!-- Speed Slashes -->
    <line x1="94" y1="226" x2="162" y2="158" stroke="#ffffff" stroke-width="7.5" stroke-linecap="square" />
    <line x1="170" y1="372" x2="226" y2="316" stroke="#ffffff" stroke-width="6.5" stroke-linecap="square" />
    <line x1="370" y1="162" x2="430" y2="102" stroke="#ffffff" stroke-width="7.5" stroke-linecap="square" />

    <!-- Floating data bit squares -->
    <rect x="288" y="36" width="9" height="9" fill="#ffffff" stroke="none" />
    <rect x="308" y="52" width="8" height="8" fill="#ffffff" stroke="none" />
    <rect x="392" y="116" width="9" height="9" fill="#ffffff" stroke="none" />
    <rect x="92" y="222" width="8.5" height="8.5" fill="#ffffff" stroke="none" />
    <rect x="230" y="336" width="8" height="8" fill="#ffffff" stroke="none" />
    <rect x="216" y="350" width="7" height="7" fill="#ffffff" stroke="none" />

    <!-- Outer Ring Arcs with flat butt caps -->
    <path
      d="M 288 84 A 122 122 0 1 0 164 286"
      stroke="#ffffff"
      stroke-width="16"
      fill="none"
      stroke-linecap="butt"
    />
    <path
      d="M 208 314 A 122 122 0 0 0 358 143"
      stroke="#ffffff"
      stroke-width="16"
      fill="none"
      stroke-linecap="butt"
    />

    <!-- Combined Arrow + Lightning Bolt -->
    <g mask="url(#testBoltXMask)" stroke="none">
      <polygon
        points="
          392,58
          304,83
          326,105
          285,102
          215,102
          200,178
          246,178
          166,246
          196,276
          128,400
          324,182
          272,182
          346,124
          368,146
        "
        fill="#ffffff"
      />
    </g>

    <!-- Wordmark -->
    <text
      x="250"
      y="446"
      text-anchor="middle"
      font-family="'Orbitron', sans-serif"
      font-size="46"
      font-weight="900"
      letter-spacing="2"
      fill="#ffffff"
      stroke="none"
    >&lt;/Dev_Spark&gt;</text>

    <!-- Underline -->
    <line x1="125" y1="472" x2="212" y2="472" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" />
    <rect x="230" y="468" width="8" height="8" fill="#ffffff" stroke="none" />
    <rect x="246" y="468" width="8" height="8" fill="#ffffff" stroke="none" />
    <rect x="262" y="468" width="8" height="8" fill="#ffffff" stroke="none" />
    <line x1="284" y1="472" x2="371" y2="472" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" />
  </g>
</svg>`;

fs.writeFileSync('public/assets/perfect_logo.svg', testSvg);
console.log('Written public/assets/perfect_logo.svg');
