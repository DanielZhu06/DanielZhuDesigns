import { useState, useMemo } from "react";
import {
  ShoppingBag, X, Star, Check, Search, Truck, CreditCard,
  Shirt, Plus, Minus, ArrowLeft, ArrowRight,
} from "lucide-react";

/* ---------------------------------------------------------------------
   PERSONA — a clothing e-commerce prototype
   Uniqlo-inspired: white canvas, black/red only, flat (no radius, no
   shadow), dense utilitarian grid, plain system sans, checkbox filters
   with counts, breadcrumb-style checkout.
--------------------------------------------------------------------- */

const C = {
  bg: "#FFFFFF",
  ink: "#111111",
  gray: "#767676",
  line: "#E5E5E5",
  red: "#FF0000",
  panel: "#F7F7F7",
};

const SWATCH = {
  black: "#1C1B19", white: "#F4F4F2", navy: "#233247", red: "#C0392B",
  olive: "#5F6B3A", khaki: "#B7A67E", cream: "#EFE6D8", burgundy: "#6E2436",
  camel: "#B98655", grey: "#8A8A86", indigo: "#3B4A6B", blue: "#3D6FAE",
  natural: "#D8CDB9", tan: "#C19A6B", sage: "#8A9A7B",
};

const PRODUCTS = [
  { id: 1, name: "Everyday Crew Tee", category: "Tops", fit: "Regular", price: 19.9, colors: ["black", "white", "sage"], sizes: ["XS", "S", "M", "L", "XL"], isNew: true, material: "100% organic cotton", care: "Machine wash cold, tumble dry low", pop: 1, img: "tee" },
  { id: 2, name: "Relaxed Oxford Shirt", category: "Tops", fit: "Relaxed", price: 39.9, colors: ["white", "blue"], sizes: ["S", "M", "L", "XL"], material: "Cotton poplin", care: "Machine wash cold, hang dry", pop: 5, img: "oxford" },
  { id: 3, name: "Airknit Polo", category: "Tops", fit: "Slim", price: 24.9, salePrice: 17.9, colors: ["navy", "white", "red"], sizes: ["XS", "S", "M", "L"], material: "Recycled polyester knit", care: "Machine wash cold", pop: 3, img: "polo" },
  { id: 4, name: "Cropped Knit Sweater", category: "Tops", fit: "Oversized", price: 34.9, colors: ["cream", "black"], sizes: ["XS", "S", "M", "L"], isNew: true, material: "Cotton-wool blend", care: "Hand wash cold", pop: 8, img: "sweater" },
  { id: 5, name: "Wide-Leg Trousers", category: "Bottoms", fit: "Wide", price: 49.9, colors: ["black", "khaki"], sizes: ["26", "28", "30", "32", "34"], material: "Brushed twill", care: "Machine wash cold", pop: 6, img: "trousers" },
  { id: 6, name: "Straight Denim Jeans", category: "Bottoms", fit: "Regular", price: 59.9, salePrice: 44.9, colors: ["indigo", "black"], sizes: ["26", "28", "30", "32", "34"], material: "98% cotton, 2% elastane", care: "Machine wash cold, inside out", pop: 2, img: "jeans" },
  { id: 7, name: "Utility Cargo Pants", category: "Bottoms", fit: "Relaxed", price: 54.9, colors: ["olive", "black"], sizes: ["28", "30", "32", "34"], isNew: true, material: "Cotton ripstop", care: "Machine wash cold", pop: 9, img: "cargo" },
  { id: 8, name: "Pleated Midi Skirt", category: "Bottoms", fit: "Regular", price: 44.9, colors: ["black", "burgundy"], sizes: ["XS", "S", "M", "L"], material: "Satin-finish crepe", care: "Hand wash cold", pop: 11, img: "skirt" },
  { id: 9, name: "Ultra Light Down Jacket", category: "Outerwear", fit: "Regular", price: 79.9, salePrice: 59.9, colors: ["black", "navy", "red"], sizes: ["S", "M", "L", "XL"], material: "90% down fill", care: "Dry clean only", pop: 4, img: "downjacket" },
  { id: 10, name: "Oversized Denim Jacket", category: "Outerwear", fit: "Oversized", price: 69.9, colors: ["blue", "black"], sizes: ["S", "M", "L", "XL"], isNew: true, material: "Rigid cotton denim", care: "Machine wash cold", pop: 7, img: "denimjacket" },
  { id: 11, name: "Wool Blend Coat", category: "Outerwear", fit: "Regular", price: 129.9, colors: ["camel", "black"], sizes: ["S", "M", "L"], material: "70% wool blend", care: "Dry clean only", pop: 12, img: "coat" },
  { id: 12, name: "Canvas Tote Bag", category: "Accessories", fit: "Regular", price: 14.9, colors: ["natural", "black"], sizes: ["One Size"], isNew: true, material: "Heavy cotton canvas", care: "Spot clean", pop: 10, img: "tote" },
  { id: 13, name: "Ribbed Beanie", category: "Accessories", fit: "Regular", price: 9.9, salePrice: 6.9, colors: ["black", "grey", "red"], sizes: ["One Size"], material: "Acrylic rib knit", care: "Hand wash cold", pop: 13, img: "beanie" },
  { id: 14, name: "Everyday Crossbody Bag", category: "Accessories", fit: "Regular", price: 29.9, colors: ["black", "tan"], sizes: ["One Size"], material: "Vegan leather", care: "Wipe clean", pop: 14, img: "crossbody" },
  { id: 15, name: "Heavyweight Hoodie", category: "Tops", fit: "Oversized", price: 49.9, colors: ["black", "grey", "cream"], sizes: ["S", "M", "L", "XL"], isNew: true, material: "420 GSM Cotton Fleece", care: "Machine wash cold", pop: 15, img: "hoodie"},
  { id: 16, name: "Essential Zip Hoodie", category: "Outerwear", fit: "Regular", price: 54.9, colors: ["grey", "black"], sizes: ["S", "M", "L", "XL"], material: "Cotton Blend Fleece", care: "Machine wash cold", pop: 16, img: "ziphoodie" },
  { id: 17, name: "Relaxed Sweatpants", category: "Bottoms", fit: "Relaxed", price: 39.9, colors: ["grey", "black"], sizes: ["S", "M", "L", "XL"], material: "Cotton Fleece", care: "Machine wash cold", pop: 17, img: "sweatpants"},
  { id: 18, name: "Baseball Cap", category: "Accessories", fit: "Regular", price: 19.9, colors: ["black", "navy", "cream"], sizes: ["One Size"], material: "100% Cotton Twill", care: "Spot clean", pop: 18, img: "cap"},
  { id: 19, name: "Quarter Zip Pullover", category: "Outerwear", fit: "Regular", price: 59.9, colors: ["cream", "black", "sage"], sizes: ["S", "M", "L", "XL"], isNew: true, material: "French Terry Cotton", care: "Machine wash cold", pop: 19, img: "quarterzip"},
  { id: 20, name: "Crew Socks (3 Pack)", category: "Accessories", fit: "Regular", price: 12.9, colors: ["white", "black"], sizes: ["One Size"], material: "Cotton Blend", care: "Machine wash cold", pop: 20, img: "socks"}
];

const GRADIENTS = [
  "linear-gradient(135deg, #FF0000 0%, #111111 100%)",
  "linear-gradient(135deg, #767676 0%, #111111 100%)",
  "linear-gradient(135deg, #111111 0%, #FF0000 100%)",
  "linear-gradient(135deg, #3D6FAE 0%, #111111 100%)",
  "linear-gradient(135deg, #111111 0%, #767676 100%)",
  "linear-gradient(135deg, #FF0000 0%, #767676 100%)",
];
function gradientFor(seed) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return GRADIENTS[h % GRADIENTS.length];
}
/* Auto-load any real photos dropped into src/assets/products/.
   Filename (without extension) must match the "key" passed to PhotoTile
   below — e.g. src/assets/products/tee.jpg matches imgKey="tee".
   If no matching file exists yet, PhotoTile falls back to a gradient
   placeholder automatically — nothing breaks while photos are missing. */
const localImages = import.meta.glob(
  "../assets/products/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  { eager: true, import: "default" }
);
function findLocalImage(key) {
  if (!key) return null;
  const entry = Object.entries(localImages).find(([path]) => {
    const filename = path.split("/").pop().split(".")[0];
    return filename.toLowerCase() === key.toLowerCase();
  });
  return entry ? entry[1] : null;
}

/* Photo tile: renders a real local image if one has been dropped into
   src/assets/products/ matching imgKey, otherwise falls back to a
   generated gradient + icon placeholder. */
function PhotoTile({ seed, imgKey, tint = "rgba(255,255,255,0.45)", iconSize = 60, className = "", style = {} }) {
  const real = findLocalImage(imgKey);
  if (real) {
    return <img src={real} alt="" className={`object-cover ${className}`} style={style} />;
  }
  return (
    <div className={`flex items-center justify-center ${className}`} style={{ background: gradientFor(seed), ...style }}>
      <Shirt size={iconSize} strokeWidth={1} color={tint} />
    </div>
  );
}

const CATEGORIES = ["All", "Tops", "Bottoms", "Outerwear", "Accessories"];

function money(n) { return `$${n.toFixed(2)}`; }

function Checkbox({ label, count, checked, onChange }) {
  return (
    <label className="flex items-center justify-between py-1.5 cursor-pointer text-sm">
      <span className="flex items-center gap-2">
        <input type="checkbox" checked={checked} onChange={onChange} className="w-3.5 h-3.5" style={{ accentColor: C.ink }} />
        {label}
      </span>
      <span style={{ color: C.gray }}>({count})</span>
    </label>
  );
}

function CheckoutProgressBar({ step }) {
  const steps = ["Bag", "Delivery", "Payment", "Confirm"];
  const halfCol = 100 / (steps.length * 2); // % offset to the center of the first/last column

  return (
    <div className="w-full mb-10">
      <div className="relative grid" style={{ gridTemplateColumns: `repeat(${steps.length}, 1fr)` }}>

        {/* background line — spans exactly between the first and last node centers */}
        <div
          className="absolute h-[2px]"
          style={{
            top: "16px",
            left: `${halfCol}%`,
            right: `${halfCol}%`,
            background: "#E5E5E5",
          }}
        />

        {steps.map((label, i) => {
          const n = i + 1;
          const isDone = step > n;
          const isActive = step === n;

          return (
            <div key={label} className="relative flex flex-col items-center z-10">
              {/* node */}
              <div
                className="w-8 h-8 flex items-center justify-center rounded-full text-xs font-bold"
                style={{
                  background: isDone ? "#111111" : isActive ? "#FF0000" : "#FFFFFF",
                  border: "2px solid #111111",
                  color: isDone || isActive ? "#FFFFFF" : "#111111",
                }}
              >
                {isDone ? "✓" : n}
              </div>

              {/* label */}
              <span
                className="mt-2 text-[10px] uppercase tracking-wide font-bold"
                style={{ color: isActive ? "#111111" : "#767676" }}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function PersonaStore() {
  const [searchQuery, setSearchQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [filters, setFilters] = useState({
    category: "All", sizes: [], colors: [], fits: [], priceMax: 150,
    saleOnly: false, newOnly: false, sort: "popularity",
  });
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [quickView, setQuickView] = useState(null);
  const [page, setPage] = useState("shop");
  const [checkoutStep, setCheckoutStep] = useState(2);
  const [form, setForm] = useState({ name: "", email: "", address: "", city: "", zip: "", cardNumber: "", expiry: "", cvv: "" });
  const [showSurvey, setShowSurvey] = useState(false);
  const [surveyDone, setSurveyDone] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [orderNum] = useState(() => `PS-${Math.floor(10000 + Math.random() * 90000)}`);

  const categoryProducts = useMemo(
    () => (filters.category === "All" ? PRODUCTS : PRODUCTS.filter(p => p.category === filters.category)),
    [filters.category]
  );
  const availableSizes = useMemo(() => [...new Set(categoryProducts.flatMap(p => p.sizes))], [categoryProducts]);
  const availableColors = useMemo(() => [...new Set(categoryProducts.flatMap(p => p.colors))], [categoryProducts]);
  const availableFits = useMemo(() => [...new Set(categoryProducts.map(p => p.fit))], [categoryProducts]);

  const countFor = (key, val) => categoryProducts.filter(p => key === "sizes" ? p.sizes.includes(val) : key === "colors" ? p.colors.includes(val) : p.fit === val).length;

  const filtered = useMemo(() => {
    const q = submittedQuery.toLowerCase().trim();

    let list = categoryProducts.filter(p => {
      const matchSearch =
        q === "" ||
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.fit.toLowerCase().includes(q) ||
        p.colors.some(c => c.toLowerCase().includes(q)) ||
        (p.material && p.material.toLowerCase().includes(q));

      if (!matchSearch) return false;

      const eff = p.salePrice ?? p.price;
      if (eff > filters.priceMax) return false;
      if (filters.saleOnly && !p.salePrice) return false;
      if (filters.newOnly && !p.isNew) return false;
      if (filters.sizes.length && !p.sizes.some(s => filters.sizes.includes(s))) return false;
      if (filters.colors.length && !p.colors.some(c => filters.colors.includes(c))) return false;
      if (filters.fits.length && !filters.fits.includes(p.fit)) return false;

      return true;
    });

    return list.sort((a, b) => (b.pop ?? 0) - (a.pop ?? 0));
  }, [categoryProducts, filters, submittedQuery]);

  const toggleArr = (key, val) => setFilters(f => ({ ...f, [key]: f[key].includes(val) ? f[key].filter(v => v !== val) : [...f[key], val] }));
  const setCategory = (cat) => setFilters(f => ({ ...f, category: cat, sizes: [], colors: [], fits: [] }));

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const cartTotal = cart.reduce((s, i) => s + i.qty * i.price, 0);
  const freeShipGap = Math.max(0, 50 - cartTotal);

  function addToCart(product, size, color) {
    const price = product.salePrice ?? product.price;
    setCart(prev => {
      const idx = prev.findIndex(i => i.id === product.id && i.size === size && i.color === color);
      if (idx > -1) {
        const next = [...prev];
        next[idx] = { ...next[idx], qty: next[idx].qty + 1 };
        return next;
      }
      return [...prev, { id: product.id, name: product.name, price, size, color, qty: 1 }];
    });
    setQuickView(null);
    setCartOpen(true);
  }
  function updateQty(idx, delta) {
    setCart(prev => prev.map((it, i) => i === idx ? { ...it, qty: Math.max(1, it.qty + delta) } : it).filter(it => it.qty > 0));
  }
  function removeItem(idx) { setCart(prev => prev.filter((_, i) => i !== idx)); }
  function placeOrder(e) { e.preventDefault(); setPage("confirmation"); setCart([]); }
  function scrollToProducts() {
    document.getElementById("grid")?.scrollIntoView({ behavior: "smooth" });
  }

  const styleBlock = (
    <style>{`
      * { font-family: -apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif; }
      .cat-tile { position: relative; overflow: hidden; }
      .cat-tile:hover .cat-label { text-decoration: underline; }
    `}</style>
  );

  return (
    <div className="min-h-screen" style={{ background: C.bg, color: C.ink }}>
      {styleBlock}

      {/* Utility bar */}
      <div className="text-center py-1.5 text-xs" style={{ background: C.ink, color: "#fff" }}>
        FREE SHIPPING ON ORDERS OVER $50
      </div>

      {/* Header */}
      <header className="sticky top-0 z-30" style={{ background: C.bg, borderBottom: `1px solid ${C.line}` }}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <button onClick={() => setPage("shop")} className="text-2xl font-extrabold tracking-tight">
            PERSONA
          </button>
          <nav className="hidden md:flex gap-6 text-xs font-bold tracking-wide">
            {CATEGORIES.map(c => (
              <button
                key={c}
                onClick={() => { setPage("shop"); setCategory(c); }}
                style={{ color: filters.category === c && page === "shop" ? C.ink : C.gray, borderBottom: filters.category === c && page === "shop" ? `2px solid ${C.ink}` : "2px solid transparent" }}
                className="pb-1 uppercase"
              >
                {c}
              </button>
            ))}
            <button onClick={() => { setPage("shop"); setFilters(f => ({ ...f, saleOnly: true, category: "All", sizes: [], colors: [], fits: [] })); }} style={{ color: C.red }} className="uppercase">
              Sale
            </button>
          </nav>
          <div className="flex items-center gap-3">
            {searchOpen ? (
              <div className="flex items-center border px-2 py-1" style={{ borderColor: C.line }}>
                <Search size={14} />

                <input
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      setSubmittedQuery(searchQuery);
                      document.getElementById("grid")?.scrollIntoView({ behavior: "smooth" });
                    }
                    if (e.key === "Escape") {
                      setSearchOpen(false);
                    }
                  }}
                  placeholder="Search"
                  className="ml-2 text-xs outline-none w-32"
                />

                <button
                  onClick={() => {
                    setSubmittedQuery(searchQuery);
                    document.getElementById("grid")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="ml-2 text-xs font-bold"
                >
                  Go
                </button>

                <button
                  onClick={() => {
                    setSearchOpen(false);
                    setSearchQuery("");
                    setSubmittedQuery("");
                  }}
                  className="ml-2"
                >
                  <X size={14} />
                </button>
              </div>
            ) : (
              <button onClick={() => setSearchOpen(true)}>
                <Search size={19} />
              </button>
            )}

            <button onClick={() => setCartOpen(true)} className="relative">
              <ShoppingBag size={18} />

              {cartCount > 0 && (
                <span
                  className="absolute -top-2 -right-2 text-[10px] w-4 h-4 flex items-center justify-center rounded-full text-white"
                  style={{ background: C.red }}
                >
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {page === "shop" && (
        <>
          {/* Hero — full-bleed, high contrast campaign banner */}
          <section className="relative flex items-center overflow-hidden" style={{ background: C.ink, height: 480 }}>
            {findLocalImage("hero") && (
              <img src={findLocalImage("hero")} alt="" className="absolute inset-0 w-full h-full object-cover" />
            )}
            <div
              className="absolute inset-0"
              style={{ background: `linear-gradient(115deg, ${C.ink} 0%, rgba(17,17,17,0.55) 45%, ${C.red} 45%, rgba(255,0,0,0.55) 100%)` }}
            />
            {!findLocalImage("hero") && (
              <Shirt size={420} strokeWidth={0.6} color="rgba(255,255,255,0.08)" className="absolute -right-16 top-1/2 -translate-y-1/2 hidden sm:block" />
            )}
            <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 w-full">
              <p className="text-xs font-bold tracking-[0.2em] mb-3 text-white">SS26 COLLECTION</p>
              <h1 className="text-5xl sm:text-8xl font-extrabold uppercase leading-[0.85] mb-6 text-white">
                Everyday<br />Essentials
              </h1>
              <button
                onClick={() => document.getElementById("grid")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold uppercase bg-white hover:opacity-80 transition-opacity"
                style={{ color: C.ink }}
              >
                Shop now <ArrowRight size={14} />
              </button>
            </div>
          </section>

          {/* Split promo tiles — New / Sale */}
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <button
              onClick={() => {
                setCategory("All");
                setFilters(f => ({ ...f, newOnly: true, saleOnly: false }));
                scrollToProducts();
              }}
              className="relative flex flex-col justify-end p-8 sm:p-10 text-left overflow-hidden group"
              style={{ background: C.panel, height: 260 }}
            >
              {findLocalImage("promo-new") ? (
                <>
                  <img src={findLocalImage("promo-new")} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 60%)" }} />
                </>
              ) : (
                <Shirt size={160} strokeWidth={0.8} color="rgba(0,0,0,0.06)" className="absolute -right-6 -top-6 transition-transform group-hover:scale-110" />
              )}
              <p className="relative text-xs font-bold tracking-widest mb-2" style={{ color: findLocalImage("promo-new") ? "rgba(255,255,255,0.85)" : C.gray }}>JUST IN</p>
              <h2 className="relative text-3xl sm:text-4xl font-extrabold uppercase leading-none mb-3" style={{ color: findLocalImage("promo-new") ? "#fff" : C.ink }}>New<br />Arrivals</h2>
              <span className="relative inline-flex items-center gap-1.5 text-sm font-bold uppercase underline" style={{ color: findLocalImage("promo-new") ? "#fff" : C.ink }}>Shop new <ArrowRight size={13} /></span>
            </button>
            <button
              onClick={() => {
                setCategory("All");
                setFilters(f => ({ ...f, saleOnly: true, newOnly: false }));
                scrollToProducts();
              }}
              className="relative flex flex-col justify-end p-8 sm:p-10 text-left overflow-hidden group text-white"
              style={{ background: C.red, height: 260 }}
            >
              {findLocalImage("promo-sale") ? (
                <>
                  <img src={findLocalImage("promo-sale")} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(0deg, rgba(255,0,0,0.75) 0%, rgba(255,0,0,0.3) 60%)" }} />
                </>
              ) : (
                <Shirt size={160} strokeWidth={0.8} color="rgba(255,255,255,0.15)" className="absolute -right-6 -top-6 transition-transform group-hover:scale-110" />
              )}
              <p className="relative text-xs font-bold tracking-widest mb-2 text-white/80">UP TO 40% OFF</p>
              <h2 className="relative text-3xl sm:text-4xl font-extrabold uppercase leading-none mb-3">Mid-Season<br />Sale</h2>
              <span className="relative inline-flex items-center gap-1.5 text-sm font-bold uppercase underline">Shop sale <ArrowRight size={13} /></span>
            </button>
          </div>

          {/* Category shortcuts */}
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 py-10">
            <h2 className="text-sm font-extrabold uppercase mb-4" style={{ color: C.gray }}>Shop by category</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {CATEGORIES.filter(c => c !== "All").map((c, i) => {
                const bg = [C.ink, "#3A3A3A", C.red, C.panel][i % 4];
                const isDark = bg !== C.panel;
                const catImg = findLocalImage(`cat-${c.toLowerCase()}`);
                return (
                  <button
                    key={c}
                    onClick={() => setCategory(c)}
                    className="cat-tile aspect-[4/3] flex items-end p-4 relative overflow-hidden group transition-transform hover:-translate-y-1"
                    style={{ background: bg }}
                  >
                    {catImg ? (
                      <>
                        <img src={catImg} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105" />
                        <div className="absolute inset-0" style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.05) 55%)" }} />
                      </>
                    ) : (
                      <Shirt size={90} strokeWidth={0.9} color={isDark ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.1)"} className="absolute -right-3 -top-3 transition-transform group-hover:scale-110" />
                    )}
                    <span className="cat-label text-base font-extrabold uppercase relative" style={{ color: catImg ? "#fff" : (isDark ? "#fff" : C.ink) }}>{c}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <main id="grid" className="max-w-[1600px] mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8">
            {/* FILTERS — checkbox list, Uniqlo-style */}
            <aside>
              <h2 className="text-sm font-extrabold uppercase mb-4 pb-3" style={{ borderBottom: `2px solid ${C.ink}` }}>Refine</h2>
              <div className="space-y-5">
                <div>
                  <p className="text-xs font-bold uppercase mb-1.5" style={{ color: C.gray }}>Category</p>
                  {CATEGORIES.filter(c => c !== "All").map(c => (
                    <Checkbox key={c} label={c} count={PRODUCTS.filter(p => p.category === c).length} checked={filters.category === c} onChange={() => setCategory(filters.category === c ? "All" : c)} />
                  ))}
                </div>
                <div>
                  <p className="text-xs font-bold uppercase mb-1.5" style={{ color: C.gray }}>Size</p>
                  {availableSizes.map(s => (
                    <Checkbox key={s} label={s} count={countFor("sizes", s)} checked={filters.sizes.includes(s)} onChange={() => toggleArr("sizes", s)} />
                  ))}
                </div>
                <div>
                  <p className="text-xs font-bold uppercase mb-2" style={{ color: C.gray }}>Color</p>
                  <div className="flex flex-wrap gap-2">
                    {availableColors.map(c => (
                      <button key={c} onClick={() => toggleArr("colors", c)} title={c} className="w-6 h-6" style={{ background: SWATCH[c], border: filters.colors.includes(c) ? `2px solid ${C.ink}` : `1px solid ${C.line}` }} />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase mb-1.5" style={{ color: C.gray }}>Fit</p>
                  {availableFits.map(f => (
                    <Checkbox key={f} label={f} count={categoryProducts.filter(p => p.fit === f).length} checked={filters.fits.includes(f)} onChange={() => toggleArr("fits", f)} />
                  ))}
                </div>
                <div>
                  <p className="text-xs font-bold uppercase mb-2" style={{ color: C.gray }}>Max price — {money(filters.priceMax)}</p>
                  <input type="range" min="10" max="150" value={filters.priceMax} onChange={e => setFilters(f => ({ ...f, priceMax: Number(e.target.value) }))} className="w-full" style={{ accentColor: C.ink }} />
                </div>
                <div>
                  <Checkbox label="Sale only" count={PRODUCTS.filter(p => p.salePrice).length} checked={filters.saleOnly} onChange={() => setFilters(f => ({ ...f, saleOnly: !f.saleOnly }))} />
                  <Checkbox label="New arrivals" count={PRODUCTS.filter(p => p.isNew).length} checked={filters.newOnly} onChange={() => setFilters(f => ({ ...f, newOnly: !f.newOnly }))} />
                </div>
              </div>
            </aside>

            {/* GRID */}
            <div>
              <div className="flex items-center justify-between mb-4 pb-3" style={{ borderBottom: `2px solid ${C.ink}` }}>
                <p className="text-sm font-bold uppercase">{filtered.length} items</p>
                <select value={filters.sort} onChange={e => setFilters(f => ({ ...f, sort: e.target.value }))} className="text-xs font-bold uppercase border px-2 py-1.5 bg-white" style={{ borderColor: C.line }}>
                  <option value="popularity">Popularity</option>
                  <option value="newest">Newest</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>

              {filtered.length === 0 ? (
                <p className="text-center py-20 text-sm" style={{ color: C.gray }}>No matches — try clearing a filter.</p>
              ) : (
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-8">
                  {filtered.map(p => (
                    <button key={p.id} onClick={() => setQuickView({ ...p, selSize: p.sizes[0], selColor: p.colors[0] })} className="text-left group">
                      <div className="aspect-[3/4] mb-2.5 relative overflow-hidden">
                        <PhotoTile seed={`p${p.id}`} imgKey={p.img} iconSize={44} className="w-full h-full" tint={SWATCH[p.colors[0]]} />
                        {p.isNew && <span className="absolute top-2 left-2 text-[9px] font-bold uppercase px-1.5 py-0.5 text-white" style={{ background: C.ink }}>New</span>}
                        {p.salePrice && <span className="absolute top-2 left-2 text-[9px] font-bold uppercase px-1.5 py-0.5 text-white" style={{ background: C.red }}>Sale</span>}
                      </div>
                      <p className="text-sm leading-snug">{p.name}</p>
                      <div className="flex gap-2 mt-0.5 text-sm">
                        {p.salePrice ? (
                          <>
                            <span className="font-bold" style={{ color: C.red }}>{money(p.salePrice)}</span>
                            <span className="line-through" style={{ color: C.gray }}>{money(p.price)}</span>
                          </>
                        ) : <span className="font-bold">{money(p.price)}</span>}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </main>

          <footer className="text-center py-8 text-xs" style={{ borderTop: `1px solid ${C.line}`, color: C.gray }}>
            PERSONA. © 2026 — Everyday wear, made simple.
          </footer>
        </>
      )}

      {page === "checkout" && (
        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <button onClick={() => setPage("shop")} className="flex items-center gap-1 text-xs font-bold uppercase mb-8">
            <ArrowLeft size={14} /> Continue shopping
          </button>
          <CheckoutProgressBar step={checkoutStep} />
          <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-10">
            <div>
              {checkoutStep === 2 && (
                <form onSubmit={e => { e.preventDefault(); setCheckoutStep(3); }} className="space-y-3">
                  <h2 className="text-lg font-extrabold uppercase mb-3">Delivery info</h2>
                  <input required placeholder="Full name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className="w-full px-3 py-2.5 text-sm" style={{ border: `1px solid ${C.line}` }} />
                  <input required type="email" placeholder="Email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} className="w-full px-3 py-2.5 text-sm" style={{ border: `1px solid ${C.line}` }} />
                  <input required placeholder="Street address" value={form.address} onChange={e => setForm(f => ({ ...f, address: e.target.value }))} className="w-full px-3 py-2.5 text-sm" style={{ border: `1px solid ${C.line}` }} />
                  <div className="grid grid-cols-2 gap-3">
                    <input required placeholder="City" value={form.city} onChange={e => setForm(f => ({ ...f, city: e.target.value }))} className="px-3 py-2.5 text-sm" style={{ border: `1px solid ${C.line}` }} />
                    <input required placeholder="Postal code" value={form.zip} onChange={e => setForm(f => ({ ...f, zip: e.target.value }))} className="px-3 py-2.5 text-sm" style={{ border: `1px solid ${C.line}` }} />
                  </div>
                  <button type="submit" className="px-6 py-3 text-sm font-bold uppercase text-white mt-2" style={{ background: C.ink }}>Continue to payment</button>
                </form>
              )}
              {checkoutStep === 3 && (
                <form onSubmit={placeOrder} className="space-y-3">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-lg font-extrabold uppercase">Payment</h2>
                    <button type="button" onClick={() => setCheckoutStep(2)} className="text-xs underline">Back</button>
                  </div>
                  <div className="flex items-center gap-2 mb-2 text-xs" style={{ color: C.gray }}>
                    <CreditCard size={14} /> Demo only — nothing is charged
                  </div>
                  <input required placeholder="Card number" value={form.cardNumber} onChange={e => setForm(f => ({ ...f, cardNumber: e.target.value }))} className="w-full px-3 py-2.5 text-sm" style={{ border: `1px solid ${C.line}` }} />
                  <div className="grid grid-cols-2 gap-3">
                    <input required placeholder="MM/YY" value={form.expiry} onChange={e => setForm(f => ({ ...f, expiry: e.target.value }))} className="px-3 py-2.5 text-sm" style={{ border: `1px solid ${C.line}` }} />
                    <input required placeholder="CVV" value={form.cvv} onChange={e => setForm(f => ({ ...f, cvv: e.target.value }))} className="px-3 py-2.5 text-sm" style={{ border: `1px solid ${C.line}` }} />
                  </div>
                  <button type="submit" className="px-6 py-3 text-sm font-bold uppercase text-white mt-2" style={{ background: C.red }}>Place order — {money(cartTotal)}</button>
                </form>
              )}
            </div>
            <div className="p-5 h-fit" style={{ background: C.panel }}>
              <p className="text-xs font-bold uppercase mb-3" style={{ color: C.gray }}>Order summary</p>
              {cart.map((it, i) => (
                <div key={i} className="flex justify-between text-sm mb-2">
                  <span>{it.name} × {it.qty}</span><span>{money(it.price * it.qty)}</span>
                </div>
              ))}
              <div className="pt-3 mt-3 flex justify-between font-bold text-sm" style={{ borderTop: `1px solid ${C.line}` }}>
                <span>Total</span><span>{money(cartTotal)}</span>
              </div>
            </div>
          </div>
        </main>
      )}

      {page === "confirmation" && (
        <main className="max-w-md mx-auto px-4 sm:px-6 py-20 text-center">
          <div
            className="w-14 h-14 flex items-center justify-center mx-auto mb-5 text-white"
            style={{ background: C.ink }}
          >
            <Check size={24} />
          </div>

          <h1 className="text-2xl font-extrabold uppercase mb-1">
            Order confirmed
          </h1>

          <p className="text-xs mb-4" style={{ color: C.gray }}>
            Order #{orderNum}
          </p>

          <p className="text-sm" style={{ color: C.gray }}>
            We're packing it up now. You'll get a shipping confirmation by email within 24 hours — most orders arrive in 3–5 business days.
          </p>

          <button
            onClick={() => setPage("shop")}
            className="mt-8 px-6 py-3 text-sm font-bold uppercase text-white"
            style={{ background: C.ink }}
          >
            Continue shopping
          </button>

          {/* feedback block */}
          <div className="mt-10 p-5 text-left" style={{ background: C.panel }}>
            <p className="text-xs font-bold uppercase mb-1" style={{ color: C.red }}>
              Got 30 seconds?
            </p>
            <p className="text-sm mb-3">
              I'd genuinely like to know how that felt — the good and the annoying parts.
            </p>
            <button
              onClick={() => setShowSurvey(true)}
              className="text-xs font-bold uppercase px-4 py-2.5 text-white"
              style={{ background: C.red }}
            >
              Share feedback
            </button>
          </div>
        </main>
      )}

      {/* CART */}
      {cartOpen && (
        <div className="fixed inset-0 z-40 flex justify-end">
          <div className="absolute inset-0 bg-black/25" onClick={() => setCartOpen(false)} />
          <div className="relative w-full max-w-sm h-full flex flex-col" style={{ background: "#fff" }}>
            <div className="flex items-center justify-between p-5" style={{ borderBottom: `1px solid ${C.line}` }}>
              <h2 className="text-lg font-extrabold uppercase">Your bag</h2>
              <button onClick={() => setCartOpen(false)}><X size={20} /></button>
            </div>
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {cart.length === 0 ? (
                <p className="text-sm" style={{ color: C.gray }}>Your bag is empty.</p>
              ) : cart.map((it, i) => (
                <div key={i} className="flex gap-3 pb-4" style={{ borderBottom: `1px solid ${C.line}` }}>
                  <div className="w-16 h-16 shrink-0 overflow-hidden">
                    <PhotoTile seed={`p${it.id}`} imgKey={PRODUCTS.find(pr => pr.id === it.id)?.img} iconSize={26} className="w-full h-full" tint={SWATCH[it.color]} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{it.name}</p>
                    <p className="text-xs" style={{ color: C.gray }}>{it.size} · {it.color}</p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <button onClick={() => updateQty(i, -1)} className="w-6 h-6 border flex items-center justify-center" style={{ borderColor: C.line }}><Minus size={12} /></button>
                      <span className="text-sm w-4 text-center">{it.qty}</span>
                      <button onClick={() => updateQty(i, 1)} className="w-6 h-6 border flex items-center justify-center" style={{ borderColor: C.line }}><Plus size={12} /></button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold">{money(it.price * it.qty)}</p>
                    <button onClick={() => removeItem(i)} className="text-[10px] mt-2 underline">Remove</button>
                  </div>
                </div>
              ))}
            </div>
            {cart.length > 0 && (
              <div className="p-5" style={{ borderTop: `1px solid ${C.line}` }}>
                <p className="text-xs mb-3 flex items-center gap-1.5" style={{ color: C.gray }}>
                  <Truck size={13} /> {freeShipGap > 0 ? `Add ${money(freeShipGap)} more for free shipping.` : "You've got free shipping."}
                </p>
                <div className="flex justify-between font-bold mb-3">
                  <span>Subtotal</span><span>{money(cartTotal)}</span>
                </div>
                <button onClick={() => { setCartOpen(false); setPage("checkout"); setCheckoutStep(2); }} className="w-full py-3 text-sm font-bold uppercase text-white" style={{ background: C.red }}>
                  Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* QUICK VIEW */}
      {quickView && (
        <div className="fixed inset-0 z-40 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/25" onClick={() => setQuickView(null)} />
          <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto" style={{ background: "#fff" }}>
            <button onClick={() => setQuickView(null)} className="absolute top-4 right-4 z-10"><X size={20} /></button>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="aspect-square overflow-hidden">
                <PhotoTile seed={`p${quickView.id}`} imgKey={quickView.img} iconSize={90} className="w-full h-full" tint={SWATCH[quickView.selColor]} />
              </div>
              <div className="p-6">
                <p className="text-xs mb-1" style={{ color: C.gray }}>{quickView.category}</p>
                <h2 className="text-lg font-bold mb-2">{quickView.name}</h2>
                <div className="flex gap-2 mb-4 text-sm">
                  {quickView.salePrice ? (
                    <>
                      <span className="font-bold" style={{ color: C.red }}>{money(quickView.salePrice)}</span>
                      <span className="line-through" style={{ color: C.gray }}>{money(quickView.price)}</span>
                    </>
                  ) : <span className="font-bold">{money(quickView.price)}</span>}
                </div>
                <p className="text-xs font-bold uppercase mb-2" style={{ color: C.gray }}>Color — {quickView.selColor}</p>
                <div className="flex gap-2 mb-4">
                  {quickView.colors.map(c => (
                    <button key={c} onClick={() => setQuickView(q => ({ ...q, selColor: c }))} className="w-7 h-7" style={{ background: SWATCH[c], border: quickView.selColor === c ? `2px solid ${C.ink}` : `1px solid ${C.line}` }} />
                  ))}
                </div>
                <p className="text-xs font-bold uppercase mb-2" style={{ color: C.gray }}>Size</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {quickView.sizes.map(s => (
                    <button key={s} onClick={() => setQuickView(q => ({ ...q, selSize: s }))} className="px-3 py-1.5 text-sm" style={{ border: `1px solid ${quickView.selSize === s ? C.ink : C.line}`, background: quickView.selSize === s ? C.ink : "#fff", color: quickView.selSize === s ? "#fff" : C.ink }}>
                      {s}
                    </button>
                  ))}
                </div>
                <button onClick={() => addToCart(quickView, quickView.selSize, quickView.selColor)} className="w-full py-3 text-sm font-bold uppercase text-white mb-5" style={{ background: C.ink }}>
                  Add to bag
                </button>
                <div className="text-xs p-3" style={{ color: C.gray, background: C.panel }}>
                  {quickView.material}. {quickView.care}.<br />Style #PS-{String(quickView.id).padStart(4, "0")}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SURVEY */}
      {showSurvey && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/25" onClick={() => setShowSurvey(false)} />
          <div className="relative w-full max-w-sm p-6" style={{ background: "#fff" }}>
            <button onClick={() => setShowSurvey(false)} className="absolute top-4 right-4"><X size={18} /></button>
            {!surveyDone ? (
              <>
                <p className="text-xs font-bold uppercase mb-1" style={{ color: C.red }}>Quick chat?</p>
                <h2 className="text-lg font-bold mb-4">How was your visit?</h2>
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(n => (
                    <button key={n} onClick={() => setRating(n)}>
                      <Star size={24} fill={n <= rating ? C.ink : "none"} color={n <= rating ? C.ink : C.line} />
                    </button>
                  ))}
                </div>
                <textarea value={comment} onChange={e => setComment(e.target.value)} placeholder="Tell me what stood out, or what didn't." rows={3} className="w-full px-3 py-2.5 text-sm mb-4" style={{ border: `1px solid ${C.line}` }} />
                <button onClick={() => setSurveyDone(true)} disabled={rating === 0} className="w-full py-3 text-sm font-bold uppercase text-white disabled:opacity-40" style={{ background: C.red }}>
                  Send feedback
                </button>
              </>
            ) : (
              <div className="text-center py-6">
                <Check size={24} className="mx-auto mb-3" />
                <p className="font-bold uppercase mb-2">Thank you</p>
                <p className="text-sm" style={{ color: C.gray }}>That helps a lot. See you again soon.</p>
                <button onClick={() => { setShowSurvey(false); setSurveyDone(false); setRating(0); setComment(""); }} className="mt-5 text-xs underline">Close</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}