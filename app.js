// ═══════════════════════════════════════════════════════════════════════════
// ★ CONFIGURATION — edit this section only
// ═══════════════════════════════════════════════════════════════════════════

// ★ Your 7 brand colours (same set used for background and name colour)
const BRAND_COLORS = [
  "#f6d1cb",
  "#f0ce5b",
  "#3351c6",
  "#c2221b",
  "#1c7b1c",
  "#d77326",
  "#FFFFFF",
];

// ★ Face options — one PNG per skin tone
// Each swatch colour is just for the UI button, the PNG is what shows in the preview
const FACE_OPTIONS = [
  { id: "fair",     src: "images/face-fair.png",     color: "#FDDBB4", label: "Fair"     },
  { id: "honey",    src: "images/face-honey.png",    color: "#C47B3A", label: "Honey"    },
  { id: "chestnut", src: "images/face-chestnut.png", color: "#4A2C0A", label: "Chestnut" },
];

// ★ Hair colour options
const HAIR_COLORS = [
  { id: "black",  color: "#000000", label: "Zwart"  },
  { id: "brown",  color: "#8F5A28", label: "Bruin"  },
  { id: "blonde", color: "#F5D532", label: "Blond"  },
];
// ★ Hair options — one entry per hairstyle+colour combo
// color must match an id from HAIR_COLORS so the grid filters correctly
// e.g. { id: "black-pigtails", color: "black", src: "images/hair-black-pigtails.png", label: "Staartjes" }
const HAIR_OPTIONS = [
  { id: "h1",  color: "black",  src: "images/hair-black-1.png", label: "Stijl 1" },
  { id: "h2",  color: "black",  src: "images/hair-black-2.png", label: "Stijl 2" },
  { id: "h3",  color: "black",  src: "images/hair-black-3.png", label: "Stijl 3" },
  { id: "h4",  color: "black",  src: "images/hair-black-4.png", label: "Stijl 4" },
  { id: "h5",  color: "black",  src: "images/hair-black-5.png", label: "Stijl 5" },
  { id: "h6",  color: "black",  src: "images/hair-black-6.png", label: "Stijl 6" },
  { id: "h7",  color: "brown",  src: "images/hair-brown-1.png", label: "Stijl 1" },
  { id: "h8",  color: "brown",  src: "images/hair-brown-2.png", label: "Stijl 2" },
  { id: "h9",  color: "brown",  src: "images/hair-brown-3.png", label: "Stijl 3" },
  { id: "h10", color: "brown",  src: "images/hair-brown-4.png", label: "Stijl 4" },
  { id: "h11", color: "brown",  src: "images/hair-brown-5.png", label: "Stijl 5" },
  { id: "h12", color: "brown",  src: "images/hair-brown-6.png", label: "Stijl 6" },
  { id: "h13", color: "blonde", src: "images/hair-blonde-1.png", label: "Stijl 1" },
  { id: "h14", color: "blonde", src: "images/hair-blonde-2.png", label: "Stijl 2" },
  { id: "h15", color: "blonde", src: "images/hair-blonde-3.png", label: "Stijl 3" },
  { id: "h16", color: "blonde", src: "images/hair-blonde-4.png", label: "Stijl 4" },
  { id: "h17", color: "blonde", src: "images/hair-blonde-5.png", label: "Stijl 5" },
  { id: "h18", color: "blonde", src: "images/hair-blonde-6.png", label: "Stijl 6" },
];

// ★ Clothes options
const CLOTHES_OPTIONS = [
  { id: "c1", src: "images/outfit-1.png", label: "Outfit 1" },
  { id: "c2", src: "images/outfit-2.png", label: "Outfit 2" },
  { id: "c3", src: "images/outfit-3.png", label: "Outfit 3" },
  { id: "c4", src: "images/outfit-4.png", label: "Outfit 4" },
  { id: "c5", src: "images/outfit-5.png", label: "Outfit 5" },
  { id: "c6", src: "images/outfit-6.png", label: "Outfit 6" },
  { id: "c1", src: "images/outfit-7.png", label: "Outfit 7" },
  { id: "c2", src: "images/outfit-8.png", label: "Outfit 8" },
  { id: "c3", src: "images/outfit-9.png", label: "Outfit 9" },
  { id: "c4", src: "images/outfit-10.png", label: "Outfit 10" },
  { id: "c5", src: "images/outfit-11.png", label: "Outfit 11" },
  { id: "c6", src: "images/outfit-12.png", label: "Outfit 12" },
];

// ★ Accessory options — keep "none" last
const ACCESSORY_OPTIONS = [
  { id: "a1",   src: "images/acc-partyhat.png", label: "Party hat" },
  { id: "a2",   src: "images/acc-crown.png", label: "Crown" },
  { id: "none", src: null, label: "None" },
];

// ★ Print canvas size — do not change unless you change your PNG dimensions
const PRINT_W = 1181;
const PRINT_H = 1772;

// ═══════════════════════════════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════════════════════════════
const state = {
  bgColor:   BRAND_COLORS[0],
  face:      FACE_OPTIONS[0].id,
  hairColor: HAIR_COLORS[0].id,
  hair:      HAIR_OPTIONS[0].id,
  clothes:   CLOTHES_OPTIONS[0].id,
  accessory: "a1",
  name:      "Naam",
  nameColor: BRAND_COLORS[4],
};

// ═══════════════════════════════════════════════════════════════════════════
// DOM REFS
// ═══════════════════════════════════════════════════════════════════════════
const portraitWrap = document.getElementById("portrait-wrap");
const layerFace    = document.getElementById("layer-face");
const layerClothes = document.getElementById("layer-clothes");
const layerHair    = document.getElementById("layer-hair");
const layerAcc     = document.getElementById("layer-acc");
const layerName    = document.getElementById("layer-name");
const nameText     = document.getElementById("name-text");
const nameInput    = document.getElementById("name-input");
const saveBtn      = document.getElementById("save-btn");

// ═══════════════════════════════════════════════════════════════════════════
// RENDER — updates the preview whenever state changes
// ═══════════════════════════════════════════════════════════════════════════
function render() {
  // Background colour
  portraitWrap.style.background = state.bgColor;

  // Face PNG
  const face = FACE_OPTIONS.find(f => f.id === state.face);
  if (face?.src) {
    layerFace.src = face.src;
    layerFace.style.display = "block";
  }

  // Clothes layer — sits behind face
  const clothes = CLOTHES_OPTIONS.find(c => c.id === state.clothes);
  if (clothes?.src) {
    layerClothes.src = clothes.src;
    layerClothes.style.display = "block";
  } else {
    layerClothes.style.display = "none";
  }

  // Hair layer — sits in front of face
  const hair = HAIR_OPTIONS.find(h => h.id === state.hair);
  if (hair?.src) {
    layerHair.src = hair.src;
    layerHair.style.display = "block";
  } else {
    layerHair.style.display = "none";
  }

  // Accessory layer — on top of everything
  const acc = ACCESSORY_OPTIONS.find(a => a.id === state.accessory);
  if (state.accessory !== "none" && acc?.src) {
    layerAcc.src = acc.src;
    layerAcc.style.display = "block";
  } else {
    layerAcc.style.display = "none";
  }

  // Name — SVG text, font size based on actual portrait pixel dimensions
  const nameVal = state.name ? state.name.toUpperCase() : "";
  nameText.textContent = nameVal;
  nameText.setAttribute("fill", state.nameColor);
  nameText.removeAttribute("textLength");
  nameText.removeAttribute("lengthAdjust");

  setTimeout(() => {
    const w = portraitWrap.offsetWidth;
    const h = portraitWrap.offsetHeight;
    if (!w || !h) return;
    const maxWidth = Math.round(w * 0.82);
    let fontSize = Math.round(h * 0.16); // start bigger
    nameText.setAttribute("font-size", fontSize);
    // Shrink font size until text fits — no condensing
    while (nameText.getComputedTextLength() > maxWidth && fontSize > 10) {
      fontSize -= 1;
      nameText.setAttribute("font-size", fontSize);
    }
  }, 50);
}

// ═══════════════════════════════════════════════════════════════════════════
// BUILD SWATCHES
// ═══════════════════════════════════════════════════════════════════════════
function buildSwatches(containerId, items, getSelected, onSelect) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  items.forEach(item => {
    // item can be a plain hex string or { id, color }
    const color = item.color || item;
    const value = item.id   || item;

    const btn = document.createElement("button");
    btn.className = "swatch";
    btn.style.background = color;
    btn.dataset.value = value;
    btn.dataset.color = color;
    updateSwatchStyle(btn, value, getSelected());

    btn.addEventListener("click", () => {
      onSelect(value);
      render();
      container.querySelectorAll(".swatch").forEach(b => {
        updateSwatchStyle(b, b.dataset.value, getSelected());
      });
    });

    container.appendChild(btn);
  });
}

function updateSwatchStyle(btn, value, selected) {
  const isSelected = value === selected;
  const color = btn.dataset.color;
  btn.classList.toggle("selected", isSelected);
  if (isSelected) {
    btn.style.boxShadow = "none";
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

    // Tick mark
    const tick = document.createElement("div");
    tick.className = "thumb-tick";
    tick.textContent = "✓";
    tick.style.cssText = "position:absolute;top:5px;right:5px;width:18px;height:18px;border-radius:50%;background:#c2221b;color:white;font-size:10px;font-weight:900;align-items:center;justify-content:center;display:none;";
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
  btn.style.borderColor = isSelected ? "#9a8a78" : "#e8ddd0";
  btn.style.borderWidth  = isSelected ? "3px" : "2px";
  btn.style.boxShadow    = isSelected
    ? "none"
    : "0 2px 8px rgba(0,0,0,0.07)";
  const tick = btn.querySelector(".thumb-tick");
  // tick hidden
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

    const face    = FACE_OPTIONS.find(f => f.id === state.face);
    const clothes = CLOTHES_OPTIONS.find(c => c.id === state.clothes);
    const hair    = HAIR_OPTIONS.find(h => h.id === state.hair);
    const acc     = ACCESSORY_OPTIONS.find(a => a.id === state.accessory);

    await drawImage(clothes?.src);
    await drawImage(face?.src);
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
// SPECIALISED BUILDERS
// ═══════════════════════════════════════════════════════════════════════════

// Face thumbnails — portrait image buttons
function buildFaceGrid(containerId, options, getSelected, onSelect) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "face-btn" + (getSelected() === opt.id ? " selected" : "");
    btn.dataset.id = opt.id;

    if (opt.src) {
      const img = document.createElement("img");
      img.src = opt.src;
      img.alt = opt.label;
      img.onerror = () => { btn.style.background = opt.color; };
      btn.appendChild(img);
    } else {
      btn.style.background = opt.color;
    }

    const tick = document.createElement("div");
    tick.className = "thumb-tick";
    tick.textContent = "✓";
    tick.style.display = getSelected() === opt.id ? "flex" : "none";
    btn.appendChild(tick);

    btn.addEventListener("click", () => {
      onSelect(opt.id);
      render();
      container.querySelectorAll(".face-btn").forEach(b => {
        const isSelected = b.dataset.id === getSelected();
        b.classList.toggle("selected", isSelected);
        b.querySelector(".thumb-tick").style.display = isSelected ? "flex" : "none";
      });
    });
    container.appendChild(btn);
  });
}

// Hair colour — circle swatches
function buildHairColorRow(containerId, options, getSelected, onSelect) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "haircolor-btn" + (getSelected() === opt.id ? " selected" : "");
    btn.dataset.id = opt.id;
    btn.style.background = opt.color;
    if (opt.color === "#000000") btn.style.border = "2px solid #555";
    btn.title = opt.label;

    btn.addEventListener("click", () => {
      onSelect(opt.id);
      container.querySelectorAll(".haircolor-btn").forEach(b => {
        b.classList.toggle("selected", b.dataset.id === getSelected());
      });
    });
    container.appendChild(btn);
  });
}

// Name colour — "A" letter buttons
function buildNameColorRow(containerId, colors, getSelected, onSelect) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  colors.forEach(color => {
    const btn = document.createElement("button");
    btn.className = "namecolor-btn" + (getSelected() === color ? " selected" : "");
    btn.dataset.color = color;
    btn.textContent = "A";
    btn.style.color = color;
    if (color === "#FFFFFF") btn.style.textShadow = "0 0 0 1px #ddd";

    btn.addEventListener("click", () => {
      onSelect(color);
      render();
      container.querySelectorAll(".namecolor-btn").forEach(b => {
        b.classList.toggle("selected", b.dataset.color === getSelected());
      });
    });
    container.appendChild(btn);
  });
}

// Background colour — portrait rectangles
function buildBgColorGrid(containerId, colors, getSelected, onSelect) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  colors.forEach(color => {
    const btn = document.createElement("button");
    btn.className = "bgcolor-btn" + (getSelected() === color ? " selected" : "");
    btn.dataset.color = color;
    btn.style.background = color;
    if (color === "#FFFFFF") btn.style.borderColor = "#ddd";

    btn.addEventListener("click", () => {
      onSelect(color);
      render();
      container.querySelectorAll(".bgcolor-btn").forEach(b => {
        b.classList.toggle("selected", b.dataset.color === getSelected());
      });
    });
    container.appendChild(btn);
  });
}

// Filtered hair grid
function buildFilteredHairGrid() {
  const filtered = HAIR_OPTIONS.filter(h => h.color === state.hairColor);
  buildThumbGrid("hair-grid", filtered, () => state.hair, v => { state.hair = v; });
  render();
}

function init() {
  buildFaceGrid("skin-swatches",       FACE_OPTIONS,
    () => state.face,      v => { state.face      = v; });
  buildHairColorRow("hair-color-swatches", HAIR_COLORS,
    () => state.hairColor, v => {
      state.hairColor = v;
      const first = HAIR_OPTIONS.find(h => h.color === v);
      if (first) state.hair = first.id;
      buildFilteredHairGrid();
    });
  buildNameColorRow("name-swatches",   BRAND_COLORS,
    () => state.nameColor, v => { state.nameColor = v; });
  buildBgColorGrid("bg-swatches",      BRAND_COLORS,
    () => state.bgColor,   v => { state.bgColor   = v; });
  buildFilteredHairGrid();
  buildThumbGrid("clothes-grid",  CLOTHES_OPTIONS,   () => state.clothes,   v => { state.clothes   = v; });
  buildThumbGrid("acc-grid",      ACCESSORY_OPTIONS, () => state.accessory, v => { state.accessory = v; });

  // Set default name value
  nameInput.value = state.name;

  nameInput.addEventListener("focus", () => {
    // Clear "Naam" placeholder when kid taps the field
    if (nameInput.value === "Naam") {
      nameInput.value = "";
      state.name = "";
      render();
    }
  });
  nameInput.addEventListener("blur", () => {
    // Restore "Naam" if left empty
    if (!nameInput.value.trim()) {
      nameInput.value = "Naam";
      state.name = "Naam";
      render();
    }
  });
  nameInput.addEventListener("input", () => {
    state.name = nameInput.value;
    render();
  });

  saveBtn.addEventListener("click", exportPortrait);

  render();
}

init();
