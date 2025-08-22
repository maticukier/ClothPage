// src/data/products.js
// === IMPORTS DE IMÁGENES LOCALES ===
import teeAurora from "../assets/opt/tee-aurora.webp";
import novaDenimJacket from "../assets/opt/NovaDenimJacket.webp";
import streetClassicHoodie from "../assets/opt/StreetClassicHoodie.webp";
import urbanCargoPants from "../assets/opt/UrbanCargoPants.webp";
import voltHighSneakers from "../assets/opt/VoltHighSneakers.webp";
import minimalEssentialTee from "../assets/opt/MinimalEssentialTee.webp";
import northWinterParka from "../assets/opt/NorthWinterParka.webp";
import classicFitJeans from "../assets/opt/ClassicFitJeans.webp";
import urbanSnapbackCap from "../assets/opt/UrbanSnapbackCap.webp";
import cozyKnitSweater from "../assets/opt/CozyKnitSweater.webp";
import rebelLeatherJacket from "../assets/opt/RebelLeatherJacket.webp";
import woolWinterScarf from "../assets/opt/WoolWinterScarf.webp";

// === DATA ===
export const products = [
  {
    id: "tee-aurora",
    name: "Aurora Oversized Tee",
    price: 29.90,
    colors: ["Black", "Cream", "Lilac"],
    sizes: ["S", "M", "L", "XL"],
    badge: "NEW",
    category: "Tops",
    image: teeAurora,
  },
  {
    id: "jacket-nova",
    name: "Nova Denim Jacket",
    price: 79.90,
    colors: ["Blue", "Black"],
    sizes: ["S", "M", "L", "XL"],
    badge: "HOT",
    category: "Outerwear",
    image: novaDenimJacket,
  },
  {
    id: "hoodie-street",
    name: "Street Classic Hoodie",
    price: 59.90,
    colors: ["Grey", "Black", "Olive"],
    sizes: ["S", "M", "L", "XL"],
    badge: "DROP",
    category: "Tops",
    image: streetClassicHoodie,
  },
  {
    id: "cargo-urban",
    name: "Urban Cargo Pants",
    price: 54.90,
    colors: ["Khaki", "Black"],
    sizes: ["S", "M", "L", "XL"],
    category: "Bottoms",
    image: urbanCargoPants,
  },
  {
    id: "sneaker-volt",
    name: "Volt High Sneakers",
    price: 89.90,
    colors: ["White", "Black", "Red"],
    sizes: ["40", "41", "42", "43", "44"],
    badge: "NEW",
    category: "Footwear",
    image: voltHighSneakers,
  },
  {
    id: "tee-minimal",
    name: "Minimal Essential Tee",
    price: 25.0,
    colors: ["White", "Black"],
    sizes: ["S", "M", "L", "XL"],
    category: "Tops",
    image: minimalEssentialTee,
  },
  {
    id: "parka-north",
    name: "North Winter Parka",
    price: 119.90,
    colors: ["Navy", "Olive"],
    sizes: ["M", "L", "XL"],
    badge: "HOT",
    category: "Outerwear",
    image: northWinterParka,
  },
  {
    id: "jeans-classic",
    name: "Classic Fit Jeans",
    price: 64.90,
    colors: ["Blue", "Black"],
    sizes: ["S", "M", "L", "XL"],
    category: "Bottoms",
    image: classicFitJeans,
  },
  {
    id: "cap-urban",
    name: "Urban Snapback Cap",
    price: 19.90,
    colors: ["Black", "Beige", "Navy"],
    sizes: ["One Size"],
    category: "Accessories",
    image: urbanSnapbackCap,
  },
  {
    id: "sweater-cozy",
    name: "Cozy Knit Sweater",
    price: 49.90,
    colors: ["Cream", "Grey", "Brown"],
    sizes: ["S", "M", "L"],
    category: "Tops",
    image: cozyKnitSweater,
  },
  {
    id: "jacket-leather",
    name: "Rebel Leather Jacket",
    price: 149.90,
    colors: ["Black"],
    sizes: ["M", "L", "XL"],
    badge: "LIMITED",
    category: "Outerwear",
    image: rebelLeatherJacket,
  },
  {
    id: "scarf-wool",
    name: "Wool Winter Scarf",
    price: 24.90,
    colors: ["Grey", "Burgundy", "Navy"],
    sizes: ["One Size"],
    category: "Accessories",
    image: woolWinterScarf,
  },
];
