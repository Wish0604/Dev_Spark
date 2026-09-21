import fs from 'fs';

// Let's generate a mathematically precise vector SVG matching the user's uploaded logo
const width = 500;
const height = 540;

// Coordinate system:
// Center of the emblem: (250, 195)
// Ring radius: R = 118
// Ring stroke: 16

const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 540" width="100%" height="100%">
  <defs>
    <!-- Pixel X mask on lightning bolt body -->
    <mask id="perfectBoltXMask">
      <rect width="500" height="540" fill="#ffffff" />
      <!-- 5-square pixel cluster "X" -->
      <rect x="238" y="118" width="8" height="8" fill="#000000" />
      <rect x="256" y="118" width="8" height="8" fill="#000000" />
      <rect x="247" y="127" width="8" height="8" fill="#000000" />
      <rect x="238" y="136" width="8" height="8" fill="#000000" />
      <rect x="256" y="136" width="8" height="8" fill="#000000" />
    </mask>
  </defs>

  <g id="DevSparkEmblem" fill="#ffffff" stroke="#ffffff">
    <!-- 1. SATELLITE ARC (Top-Left) -->
    <path
      d="M 132 142 A 148 148 0 0 1 292 48"
      stroke="#ffffff"
      stroke-width="3"
      fill="none"
      stroke-linecap="round"
      opacity="0.9"
    />

    <!-- 2. SPEED SLASH LINES (Clean 45-degree cuts) -->
    <!-- Top-Left slash cutting through circle -->
    <line x1="96" y1="228" x2="162" y2="162" stroke="#ffffff" stroke-width="7" stroke-linecap="square" />
    <!-- Lower-Left speed line beside dagger tip -->
    <line x1="172" y1="368" x2="228" y2="312" stroke="#ffffff" stroke-width="6.5" stroke-linecap="square" />
    <!-- Upper-Right speed line beside arrowhead -->
    <line x1="368" y1="160" x2="426" y2="102" stroke="#ffffff" stroke-width="7" stroke-linecap="square" />

    <!-- 3. FLOATING DATA PIXELS -->
    <rect x="288" y="38" width="9" height="9" fill="#ffffff" stroke="none" />
    <rect x="308" y="54" width="8" height="8" fill="#ffffff" stroke="none" />
    <rect x="390" y="118" width="9" height="9" fill="#ffffff" stroke="none" />
    <rect x="94" y="222" width="8.5" height="8.5" fill="#ffffff" stroke="none" />
    <rect x="230" y="332" width="8" height="8" fill="#ffffff" stroke="none" />
    <rect x="216" y="346" width="7" height="7" fill="#ffffff" stroke="none" />

    <!-- 4. CIRCULAR RING WITH INTENTIONAL GAPS -->
    <!-- Center (250, 195), Radius 118, Stroke 16 -->
    <!-- Upper-Left arc from top gap to bottom gap -->
    <path
      d="M 288 80 A 118 118 0 1 0 162 284"
      stroke="#ffffff"
      stroke-width="16"
      fill="none"
      stroke-linecap="round"
    />
    <!-- Bottom-Right arc from bottom gap to arrow burst -->
    <path
      d="M 210 306 A 118 118 0 0 0 358 140"
      stroke="#ffffff"
      stroke-width="16"
      fill="none"
      stroke-linecap="round"
    />

    <!-- 5. CENTRAL SHARP ARROW & LIGHTNING BOLT (Masked for pixel 'X') -->
    <g mask="url(#perfectBoltXMask)" stroke="none">
      <!-- Arrowhead shooting Up-Right (~45 degrees) -->
      <polygon
        points="
          386,36
          296,94
          322,120
          368,166
        "
        fill="#ffffff"
      />

      <!-- Arrow neck & center anchor -->
      <polygon
        points="
          265,115
          332,115
          352,156
          312,156
        "
        fill="#ffffff"
      />

      <!-- Lightning Bolt Body plunging Down-Left -->
      <polygon
        points="
          234,98
          298,98
          266,168
          324,168
          138,388
          194,276
          164,242
        "
        fill="#ffffff"
      />
    </g>
  </g>

  <!-- 6. TYPOGRAPHY: </Dev_Spark> -->
  <g id="DevSparkWordmark" fill="#ffffff">
    <text
      x="250"
      y="442"
      text-anchor="middle"
      font-family="'Orbitron', 'Chakra Petch', sans-serif"
      font-size="46"
      font-weight="900"
      letter-spacing="2"
      style="text-transform: none;"
    >&lt;/Dev_Spark&gt;</text>

    <!-- Tech Baseline Accent: Line - Three Dots - Line -->
    <line x1="130" y1="466" x2="214" y2="466" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" />
    <rect x="232" y="462" width="7.5" height="7.5" fill="#ffffff" />
    <rect x="246" y="462" width="7.5" height="7.5" fill="#ffffff" />
    <rect x="260" y="462" width="7.5" height="7.5" fill="#ffffff" />
    <line x1="286" y1="466" x2="370" y2="466" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" />
  </g>
</svg>
`;

fs.writeFileSync('public/assets/dev_spark_logo.svg', svgContent);
console.log('Successfully generated public/assets/dev_spark_logo.svg');
