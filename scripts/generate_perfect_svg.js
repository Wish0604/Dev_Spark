import fs from 'fs';

// Let's create an exact, high-fidelity SVG for the Dev_Spark logo based on the user's image.
// The user's image is a cyber HUD outline/wireframe style:
// - Double concentric rings with breaks
// - Satellite arcs with tech dots
// - Diagonal speed lines
// - Central outline Lightning + Arrowhead with internal crease lines & pixel X
// - Stencil/outline typography for </Dev_Spark>
// - Tech baseline divider (line - 3 square dots - line)

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 540" width="100%" height="100%" fill="none">
  <defs>
    <!-- Filter for subtle crisp glow if needed -->
    <filter id="devSparkGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="1.5" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <g id="DevSparkEmblem" stroke="currentColor" fill="none">
    <!-- ========================================== -->
    <!-- 1. SATELLITE ARCS & ACCENTS (TOP-LEFT)     -->
    <!-- ========================================== -->
    <!-- Outer secondary orbital arc -->
    <path
      d="M 148 116 A 160 160 0 0 1 292 42"
      strokeWidth="1.6"
      strokeDasharray="18 4 6 4"
      strokeLinecap="round"
      opacity="0.75"
    />
    <!-- Outermost delicate satellite tick arc -->
    <path
      d="M 180 84 A 180 180 0 0 1 254 50"
      strokeWidth="1.2"
      opacity="0.5"
    />
    <!-- Floating tech pixel bits around top-left -->
    <rect x="296" y="34" width="6.5" height="6.5" fill="currentColor" stroke="none" />
    <rect x="316" y="48" width="5" height="5" strokeWidth="1" />
    <rect x="124" y="174" width="4.5" height="4.5" fill="currentColor" stroke="none" opacity="0.8" />

    <!-- ========================================== -->
    <!-- 2. CONCENTRIC DOUBLE RINGS WITH BREAKS     -->
    <!-- Center (260, 205), R_outer = 132, R_inner = 120 -->
    <!-- ========================================== -->

    <!-- Outer Ring: Top-left sector -->
    <path
      d="M 300 76 A 132 132 0 0 0 142 268"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <!-- Outer Ring: Bottom-right sector -->
    <path
      d="M 218 326 A 132 132 0 0 0 380 148"
      strokeWidth="2.4"
      strokeLinecap="round"
    />

    <!-- Inner Concentric Ring: Top-left sector -->
    <path
      d="M 292 88 A 120 120 0 0 0 152 260"
      strokeWidth="1.4"
      strokeDasharray="40 6 80 8"
      opacity="0.85"
    />
    <!-- Inner Concentric Ring: Bottom-right sector -->
    <path
      d="M 226 314 A 120 120 0 0 0 368 158"
      strokeWidth="1.4"
      strokeDasharray="60 8 40 6"
      opacity="0.85"
    />

    <!-- Fine perimeter tick marks connecting the rings (HUD style) -->
    <line x1="135" y1="218" x2="147" y2="216" strokeWidth="1.2" opacity="0.6" />
    <line x1="144" y1="184" x2="155" y2="186" strokeWidth="1.2" opacity="0.6" />
    <line x1="365" y1="228" x2="377" y2="230" strokeWidth="1.2" opacity="0.6" />

    <!-- ========================================== -->
    <!-- 3. SPEED SLASH CUTS & AXIS LINES          -->
    <!-- ========================================== -->
    <!-- Upper-left 45-deg speed slash cutting ring -->
    <line x1="102" y1="262" x2="168" y2="196" strokeWidth="2.4" strokeLinecap="square" />
    <line x1="112" y1="272" x2="148" y2="236" strokeWidth="1.2" opacity="0.6" />

    <!-- Lower-left speed slashes beside dagger point -->
    <line x1="188" y1="368" x2="236" y2="320" strokeWidth="2" strokeLinecap="square" />
    <line x1="172" y1="392" x2="212" y2="352" strokeWidth="1.2" opacity="0.5" />

    <!-- Upper-right speed slashes parallel to arrow -->
    <line x1="334" y1="206" x2="368" y2="172" strokeWidth="1.8" />
    <line x1="382" y1="158" x2="432" y2="108" strokeWidth="2" strokeLinecap="square" />

    <!-- Extended arrow axis guide-line piercing out to top-right with tech terminal -->
    <line x1="324" y1="142" x2="418" y2="48" strokeWidth="1.4" strokeDasharray="12 4" opacity="0.85" />
    <rect x="415" y="45" width="6" height="6" fill="currentColor" stroke="none" />
    <!-- Floating pixel bit near lower dagger -->
    <rect x="228" y="348" width="6" height="6" strokeWidth="1" />
    <rect x="242" y="342" width="5" height="5" fill="currentColor" stroke="none" opacity="0.75" />

    <!-- ========================================== -->
    <!-- 4. CENTRAL LIGHTNING + ARROWHEAD OUTLINE   -->
    <!-- ========================================== -->

    <!-- Main Outer Contour of the combined Arrow & Lightning Bolt -->
    <polygon
      points="
        376,50
        302,86
        322,106
        242,106
        192,216
        252,216
        156,380
        236,268
        188,268
        278,166
        336,166
        354,184
      "
      strokeWidth="3"
      strokeLinejoin="miter"
      strokeMiterlimit="6"
      strokeLinecap="round"
      fill="none"
    />

    <!-- Internal wireframe crease lines (faceted 3D lightning geometry) -->
    <!-- Arrowhead central spine -->
    <line x1="376" y1="50" x2="338" y2="145" strokeWidth="1.6" opacity="0.85" />
    <!-- Arrowhead inner wings -->
    <line x1="302" y1="86" x2="338" y2="145" strokeWidth="1.4" opacity="0.6" />
    <line x1="354" y1="184" x2="338" y2="145" strokeWidth="1.4" opacity="0.6" />
    <!-- Center spine from arrow into bolt waist -->
    <line x1="338" y1="145" x2="252" y2="216" strokeWidth="1.4" opacity="0.5" />
    <!-- Dagger blade center spine line to sharp point -->
    <line x1="252" y1="216" x2="156" y2="380" strokeWidth="1.6" opacity="0.7" />

    <!-- Digital "X" / Cross pixel cluster inside upper bolt torso -->
    <!-- 5 small outlined square pixels -->
    <rect x="248" y="126" width="9" height="9" strokeWidth="1.5" />
    <rect x="270" y="126" width="9" height="9" strokeWidth="1.5" />
    <rect x="259" y="137" width="9" height="9" strokeWidth="1.5" />
    <rect x="248" y="148" width="9" height="9" strokeWidth="1.5" />
    <rect x="270" y="148" width="9" height="9" strokeWidth="1.5" />
  </g>

  <!-- ========================================== -->
  <!-- 5. OUTLINE TYPOGRAPHY: </Dev_Spark>       -->
  <!-- ========================================== -->
  <g id="DevSparkWordmark" stroke="currentColor" fill="none" strokeLinejoin="miter" strokeMiterlimit="4">
    <!-- Opening Chevron < -->
    <path
      d="M 72 414 L 38 438 L 72 462 L 64 468 L 24 438 L 64 408 Z"
      strokeWidth="2.2"
      fill="none"
    />

    <!-- Forward Slash / -->
    <polygon
      points="84,468 96,468 116,408 104,408"
      strokeWidth="2.2"
      fill="none"
    />

    <!-- Capital D -->
    <path
      d="M 128 408 L 156 408 C 172 408 180 418 180 438 C 180 458 172 468 156 468 L 128 468 Z M 140 420 L 154 420 C 164 420 168 426 168 438 C 168 450 164 456 154 456 L 140 456 Z"
      strokeWidth="2"
      fill="none"
    />

    <!-- Lowercase e -->
    <path
      d="M 190 422 L 218 422 C 224 422 228 426 228 432 L 228 444 L 202 444 C 202 452 206 456 216 456 C 222 456 226 454 228 450 L 238 454 C 234 464 226 468 216 468 C 200 468 190 456 190 442 C 190 428 200 422 214 422 Z M 202 436 L 216 436 C 216 430 214 428 209 428 C 204 428 202 430 202 436 Z"
      strokeWidth="2"
      fill="none"
    />

    <!-- Lowercase v -->
    <polygon
      points="240,424 252,424 263,454 274,424 286,424 270,468 256,468"
      strokeWidth="2"
      fill="none"
    />

    <!-- Underscore _ -->
    <polygon
      points="292,460 318,460 318,468 292,468"
      strokeWidth="2"
      fill="none"
    />

    <!-- Capital S -->
    <path
      d="M 352 422 L 328 422 L 328 434 L 344 438 C 354 440 356 446 356 454 C 356 464 348 468 334 468 L 322 468 L 322 458 L 344 458 L 344 448 L 328 444 C 322 442 318 438 318 430 C 318 422 324 414 338 414 L 352 414 Z"
      strokeWidth="2"
      fill="none"
    />

    <!-- Lowercase p -->
    <path
      d="M 364 422 L 392 422 C 402 422 408 428 408 438 C 408 448 402 456 392 456 L 376 456 L 376 480 L 364 480 Z M 376 432 L 376 446 L 390 446 C 394 446 396 442 396 438 C 396 434 394 432 390 432 Z"
      strokeWidth="2"
      fill="none"
    />

    <!-- Lowercase a -->
    <path
      d="M 416 422 L 442 422 L 442 468 L 432 468 L 432 460 C 428 466 424 468 418 468 C 410 468 404 462 404 452 C 404 442 412 436 432 436 L 432 432 C 432 428 428 426 422 426 C 418 426 416 428 416 430 Z M 432 444 C 420 444 416 448 416 452 C 416 456 418 458 422 458 C 428 458 432 454 432 448 Z"
      strokeWidth="2"
      fill="none"
    />

    <!-- Lowercase r -->
    <path
      d="M 450 422 L 462 422 L 462 432 C 466 424 472 422 478 424 L 474 436 C 468 434 464 438 462 444 L 462 468 L 450 468 Z"
      strokeWidth="2"
      fill="none"
    />

    <!-- Lowercase k -->
    <polygon
      points="484,408 496,408 496,436 508,422 522,422 506,440 524,468 510,468 496,446 496,468 484,468"
      strokeWidth="2"
      fill="none"
    />

    <!-- Closing Chevron > -->
    <path
      d="M 534 408 L 574 438 L 534 468 L 526 462 L 560 438 L 526 414 Z"
      strokeWidth="2.2"
      fill="none"
    />

    <!-- ========================================== -->
    <!-- 6. BASELINE ACCENT: LINE - 3 BOXES - LINE -->
    <!-- ========================================== -->
    <line x1="160" y1="496" x2="248" y2="496" strokeWidth="2.5" strokeLinecap="round" />
    <rect x="264" y="492" width="7.5" height="7.5" strokeWidth="1.8" />
    <rect x="278" y="492" width="7.5" height="7.5" strokeWidth="1.8" />
    <rect x="292" y="492" width="7.5" height="7.5" strokeWidth="1.8" />
    <line x1="308" y1="496" x2="396" y2="496" strokeWidth="2.5" strokeLinecap="round" />
  </g>
</svg>`;

fs.writeFileSync('public/assets/dev_spark_perfect.svg', svg);
console.log('Saved public/assets/dev_spark_perfect.svg');
