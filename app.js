// ═══════════════════════════════════════════════════════════════════════════
// ★ CONFIGURATION — edit this section only
// ═══════════════════════════════════════════════════════════════════════════

// ★ Your 7 brand colours (same set used for background and name colour)
const BRAND_COLORS = [
  "#F9C5D1",
  "#FDDBB4",
  "#FFF3B0",
  "#C7EFC6",
  "#B8E0FF",
  "#D4B8FF",
  "#FFFFFF",
];

// ★ Skin tones
const SKIN_TONES = [
  "#FDDBB4",
  "#F5C48A",
  "#E8A96A",
  "#C47B3A",
  "#8B5A2B",
  "#4A2C0A",
];

// ★ Hair options — replace src with your PNG filenames once ready
// e.g. src: "images/hair-black-pigtails.png"
const HAIR_OPTIONS = [
  { id: "h1", src: null, label: "Hair 1" },
  { id: "h2", src: null, label: "Hair 2" },
  { id: "h3", src: null, label: "Hair 3" },
  { id: "h4", src: null, label: "Hair 4" },
  { id: "h5", src: null, label: "Hair 5" },
  { id: "h6", src: null, label: "Hair 6" },
  { id: "h7", src: null, label: "Hair 7" },
  { id: "h8", src: null, label: "Hair 8" },
];

// ★ Clothes options
const CLOTHES_OPTIONS = [
  { id: "c1", src: null, label: "Outfit 1" },
  { id: "c2", src: null, label: "Outfit 2" },
  { id: "c3", src: null, label: "Outfit 3" },
  { id: "c4", src: null, label: "Outfit 4" },
  { id: "c5", src: null, label: "Outfit 5" },
  { id: "c6", src: null, label: "Outfit 6" },
];

// ★ Accessory options — keep "none" first
const ACCESSORY_OPTIONS = [
  { id: "none", src: null, label: "None" },
  { id: "a1",   src: null, label: "Party hat" },
  { id: "a2",   src: null, label: "Crown" },
  { id: "a3",   src: null, label: "Bow" },
  { id: "a4",   src: null, label: "Glasses" },
  { id: "a5",   src: null, label: "Bunny ears" },
];

// ★ Print canvas size — do not change unless you change your PNG dimensions
const PRINT_W = 1181;
const PRINT_H = 1772;

// ═══════════════════════════════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════════════════════════════
const state = {
  bgColor:   BRAND_COLORS[0],
  skinTone:  SKIN_TONES[1],
  hair:      HAIR_OPTIONS[0].id,
  clothes:   CLOTHES_OPTIONS[0].id,
  accessory: "none",
  name:      "",
  nameColor: BRAND_COLORS[0],
};

// ═══════════════════════════════════════════════════════════════════════════
// DOM REFS
// ═══════════════════════════════════════════════════════════════════════════
const portraitWrap = document.getElementById("portrait-wrap");
const svgFace      = document.getElementById("svg-face");
const svgFaceFill  = document.getElementById("svg-face-fill");
const svgEarL      = document.getElementById("svg-ear-l");
const svgEarR      = document.getElementById("svg-ear-r");
const svgNeck      = document.getElementById("svg-neck");
const layerClothes = document.getElementById("layer-clothes");
const layerHair    = document.getElementById("layer-hair");
const layerAcc     = document.getElementById("layer-acc");
const layerName    = document.getElementById("layer-name");
const nameInput    = document.getElementById("name-input");
const saveBtn      = document.getElementById("save-btn");

// ═══════════════════════════════════════════════════════════════════════════
// RENDER — updates the preview whenever state changes
// ═══════════════════════════════════════════════════════════════════════════
function render() {
  // Background colour
  portraitWrap.style.background = state.bgColor;

  // Skin tone — always update SVG face
  svgFaceFill.setAttribute("fill", state.skinTone);
  svgEarL.setAttribute("fill", state.skinTone);
  svgEarR.setAttribute("fill", state.skinTone);
  svgNeck.setAttribute("fill", state.skinTone);

  // Clothes layer
  const clothes = CLOTHES_OPTIONS.find(c => c.id === state.clothes);
  if (clothes?.src) {
    layerClothes.src = clothes.src;
    layerClothes.style.display = "block";
  } else {
    layerClothes.style.display = "none";
  }

  // Hair layer
  const hair = HAIR_OPTIONS.find(h => h.id === state.hair);
  if (hair?.src) {
    layerHair.src = hair.src;
    layerHair.style.display = "block";
    svgFace.style.display = "none"; // real PNG replaces SVG
  } else {
    layerHair.style.display = "none";
    svgFace.style.display = "block"; // show SVG default face
  }

  // Accessory layer
  const acc = ACCESSORY_OPTIONS.find(a => a.id === state.accessory);
  if (state.accessory !== "none" && acc?.src) {
    layerAcc.src = acc.src;
    layerAcc.style.display = "block";
  } else {
    layerAcc.style.display = "none";
  }

  // Name overlay — always update text and colour
  layerName.textContent = state.name ? state.name.toUpperCase() : "";
  layerName.style.color = state.nameColor;
}

// ═══════════════════════════════════════════════════════════════════════════
// BUILD SWATCHES
// ═══════════════════════════════════════════════════════════════════════════
function buildSwatches(containerId, colors, getSelected, onSelect) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  colors.forEach(color => {
    const btn = document.createElement("button");
    btn.className = "swatch";
    btn.style.background = color;
    btn.dataset.color = color;
    updateSwatchStyle(btn, color, getSelected());

    btn.addEventListener("click", () => {
      onSelect(color);
      render();
      // Refresh all swatch styles in this group
      container.querySelectorAll(".swatch").forEach(b => {
        updateSwatchStyle(b, b.dataset.color, getSelected());
      });
    });

    container.appendChild(btn);
  });
}

function updateSwatchStyle(btn, color, selected) {
  const isSelected = color === selected;
  btn.classList.toggle("selected", isSelected);
  if (isSelected) {
    btn.style.boxShadow = "0 0 0 2px white, 0 0 0 6px #FF8FAB";
  } else if (color === "#FFFFFF") {
    btn.style.boxShadow = "inset 0 0 0 1.5px #ddd";
  } else {
    btn.style.boxShadow = "0 2px 6px rgba(0,0,0,0.15)";
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// BUILD THUMB GRID
// ═══════════════════════════════════════════════════════════════════════════
function buildThumbGrid(containerId, options, getSelected, onSelect) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "thumb-btn" + (opt.id === "none" ? " none-btn" : "");
    btn.dataset.id = opt.id;
    updateThumbStyle(btn, opt.id, getSelected());

    // Inner content
    if (opt.id === "none") {
      const x = document.createElement("span");
      x.style.cssText = "font-size:22px;opacity:0.3";
      x.textContent = "✕";
      btn.appendChild(x);
    } else if (opt.src) {
      // Try loading the image
      const img = document.createElement("img");
      img.alt = opt.label;
      img.style.cssText = "width:100%;height:100%;object-fit:cover;display:block";
      img.onerror = () => {
        // File not on disk yet — show label placeholder instead
        img.replaceWith(makePlaceholderLabel(opt.label));
      };
      img.src = opt.src;
      btn.appendChild(img);
    } else {
      // src is null — always show placeholder
      btn.appendChild(makePlaceholderLabel(opt.label));
    }

    // Tick mark (always present, shown via CSS when selected)
    const tick = document.createElement("div");
    tick.className = "thumb-tick";
    tick.textContent = "✓";
    btn.appendChild(tick);

    btn.addEventListener("click", () => {
      onSelect(opt.id);
      render();
      container.querySelectorAll(".thumb-btn").forEach(b => {
        updateThumbStyle(b, b.dataset.id, getSelected());
      });
    });

    container.appendChild(btn);
  });
}

function makePlaceholderLabel(label) {
  const span = document.createElement("span");
  span.className = "thumb-label";
  span.textContent = label;
  return span;
}

function updateThumbStyle(btn, id, selected) {
  const isSelected = id === selected;
  btn.classList.toggle("selected", isSelected);
  btn.style.borderColor = isSelected ? "#FF8FAB" : "#f0dde8";
  btn.style.borderWidth  = isSelected ? "3px" : "2px";
  btn.style.boxShadow    = isSelected
    ? "0 0 0 2px white, 0 0 0 5px #FF8FAB"
    : "0 2px 8px rgba(0,0,0,0.07)";
}

// ═══════════════════════════════════════════════════════════════════════════
// EXPORT + SHARE
// ═══════════════════════════════════════════════════════════════════════════
async function exportPortrait() {
  saveBtn.disabled = true;
  saveBtn.textContent = "Getting ready…";

  try {
    const canvas = document.createElement("canvas");
    canvas.width  = PRINT_W;
    canvas.height = PRINT_H;
    const ctx = canvas.getContext("2d");

    // Background
    ctx.fillStyle = state.bgColor;
    ctx.fillRect(0, 0, PRINT_W, PRINT_H);

    const drawImage = (src) => new Promise((resolve) => {
      if (!src) return resolve();
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload  = () => { ctx.drawImage(img, 0, 0, PRINT_W, PRINT_H); resolve(); };
      img.onerror = () => resolve();
      img.src = src;
    });

    const clothes = CLOTHES_OPTIONS.find(c => c.id === state.clothes);
    const hair    = HAIR_OPTIONS.find(h => h.id === state.hair);
    const acc     = ACCESSORY_OPTIONS.find(a => a.id === state.accessory);

    await drawImage(clothes?.src);
    await drawImage(hair?.src);
    if (state.accessory !== "none") await drawImage(acc?.src);

    // Name text
    if (state.name.trim()) {
      const fontSize = Math.round(PRINT_H * 0.072);
      ctx.font         = `900 ${fontSize}px InterMush, system-ui, sans-serif`;
      ctx.fillStyle    = state.nameColor;
      ctx.textAlign    = "center";
      ctx.textBaseline = "bottom";
      ctx.fillText(
        state.name.toUpperCase(),
        PRINT_W / 2,
        PRINT_H - Math.round(PRINT_H * 0.04)
      );
    }

    const fileName = (state.name.trim() || "portrait") + ".png";

    const blob = await new Promise(resolve => canvas.toBlob(resolve, "image/png"));
    const file = new File([blob], fileName, { type: "image/png" });

    // Try AirDrop / native share sheet first
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({ files: [file], title: "My Portrait" });
        showMessage("✅ Shared! Check AirDrop on your Mac.", "success");
        return;
      } catch (err) {
        if (err.name === "AbortError") {
          // User cancelled — that's fine, no error needed
          return;
        }
        // Share failed for another reason — fall through to download
      }
    }

    // Fallback: download to device
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
    showMessage("📥 Saved to your downloads! (Open Safari to use AirDrop)", "info");

  } catch (err) {
    showMessage("Something went wrong. Please try again.", "error");
    console.error(err);
  } finally {
    saveBtn.disabled = false;
    saveBtn.innerHTML = "⬆️ Save & AirDrop";
  }
}

// ── Toast message ──────────────────────────────────────────────────────────
function showMessage(text, type) {
  // Remove any existing toast
  const existing = document.getElementById("toast");
  if (existing) existing.remove();

  const colors = {
    success: { bg: "#2AA84A", icon: "✅" },
    info:    { bg: "#3B6FE8", icon: "ℹ️" },
    error:   { bg: "#E84040", icon: "⚠️" },
  };
  const c = colors[type] || colors.info;

  const toast = document.createElement("div");
  toast.id = "toast";
  toast.textContent = text;
  toast.style.cssText = `
    position: fixed; bottom: 28px; left: 50%; transform: translateX(-50%);
    background: ${c.bg}; color: white;
    font-family: inherit; font-weight: 800; font-size: 14px;
    padding: 14px 24px; border-radius: 40px;
    box-shadow: 0 6px 24px rgba(0,0,0,0.2);
    z-index: 9999; white-space: nowrap;
    animation: fadeIn 0.2s ease;
  `;

  const style = document.createElement("style");
  style.textContent = `@keyframes fadeIn { from { opacity:0; transform:translateX(-50%) translateY(10px); } to { opacity:1; transform:translateX(-50%) translateY(0); } }`;
  document.head.appendChild(style);

  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 4000);
}

// ═══════════════════════════════════════════════════════════════════════════
// SERVICE WORKER
// ═══════════════════════════════════════════════════════════════════════════
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}

// ═══════════════════════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════════════════════
function init() {
  buildSwatches("skin-swatches",  SKIN_TONES,    () => state.skinTone,  v => { state.skinTone  = v; });
  buildSwatches("bg-swatches",    BRAND_COLORS,  () => state.bgColor,   v => { state.bgColor   = v; });
  buildSwatches("name-swatches",  BRAND_COLORS,  () => state.nameColor, v => { state.nameColor = v; });
  buildThumbGrid("hair-grid",     HAIR_OPTIONS,      () => state.hair,      v => { state.hair      = v; });
  buildThumbGrid("clothes-grid",  CLOTHES_OPTIONS,   () => state.clothes,   v => { state.clothes   = v; });
  buildThumbGrid("acc-grid",      ACCESSORY_OPTIONS, () => state.accessory, v => { state.accessory = v; });

  nameInput.addEventListener("input", () => {
    state.name = nameInput.value;
    render();
  });

  saveBtn.addEventListener("click", exportPortrait);

  render();
}

init();
