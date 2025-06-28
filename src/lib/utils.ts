import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getTechColor(tech: string): string {
  const colorMap: Record<string, string> = {
    // Vue.js - Vert officiel Vue
    'Vue 3': 'bg-green-500 text-white',
    'Vue.js': 'bg-green-500 text-white',

    // TypeScript - Bleu officiel
    TypeScript: 'bg-blue-600 text-white',

    // Tailwind CSS - Cyan/Teal officiel
    Tailwind: 'bg-cyan-500 text-white',
    'Tailwind CSS': 'bg-cyan-500 text-white',

    // Node.js - Vert Node
    'Node.js': 'bg-green-600 text-white',

    // MongoDB - Vert MongoDB
    MongoDB: 'bg-green-500 text-white',

    // React - Cyan React
    React: 'bg-cyan-400 text-white',

    // Chart.js - Rouge/Orange
    'Chart.js': 'bg-red-500 text-white',

    // Express - Noir/Gris foncé
    Express: 'bg-gray-800 text-white',

    // Shadcn - Noir
    Shadcn: 'bg-slate-900 text-white',

    // Rust - Orange Rust
    Rust: 'bg-orange-600 text-white',

    // Tauri - Bleu Tauri
    Tauri: 'bg-blue-500 text-white',

    // Laravel - Rouge Laravel
    Laravel: 'bg-red-600 text-white',

    // PHP - Violet PHP
    PHP: 'bg-purple-600 text-white',

    // MySQL - Orange MySQL
    MySQL: 'bg-orange-500 text-white',

    // PostgreSQL - Bleu PostgreSQL
    PostgreSQL: 'bg-blue-700 text-white',

    // REST API - Bleu
    'REST API': 'bg-blue-500 text-white',

    // Postman - Orange Postman
    Postman: 'bg-orange-600 text-white',

    // Arduino - Cyan Arduino
    Arduino: 'bg-teal-600 text-white',

    // ESP32 - Rouge ESP
    ESP32: 'bg-red-600 text-white',

    // C++ - Bleu C++
    'C++': 'bg-blue-700 text-white',

    // C# - Violet Microsoft
    'C#': 'bg-purple-700 text-white',

    // WiFi - Bleu
    WiFi: 'bg-blue-500 text-white',

    // HX711 - Jaune électronique
    HX711: 'bg-yellow-600 text-white',

    // IoT - Vert IoT
    IoT: 'bg-emerald-600 text-white',

    // PWA - Violet PWA
    PWA: 'bg-purple-600 text-white',

    // JavaScript - Jaune JS
    JavaScript: 'bg-yellow-500 text-black',

    // HTML - Orange HTML
    HTML: 'bg-orange-600 text-white',
    HTML5: 'bg-orange-600 text-white',

    // CSS - Bleu CSS
    CSS: 'bg-blue-600 text-white',
    CSS3: 'bg-blue-600 text-white',

    // Capacitor - Bleu Capacitor
    Capacitor: 'bg-blue-500 text-white',

    // iOS - Gris Apple
    iOS: 'bg-gray-800 text-white',

    // Android - Vert Android
    Android: 'bg-green-600 text-white',

    // Spring Boot - Vert Spring
    'Spring Boot': 'bg-green-600 text-white',

    // Java - Orange/Rouge Java
    Java: 'bg-red-600 text-white',

    // SQL - Bleu base de données
    SQL: 'bg-blue-600 text-white',

    // Applications
    'Applications mobiles': 'bg-indigo-600 text-white',
    'Applications web': 'bg-cyan-600 text-white',

    // IDE
    'Android Studio': 'bg-green-700 text-white',
    Xcode: 'bg-blue-700 text-white',

    // Concepts généraux
    'Web Development': 'bg-gray-700 text-white',
    'Développement web': 'bg-gray-700 text-white',
    'Développement full-stack': 'bg-gray-800 text-white',
    'Programmation orientée objet (POO)': 'bg-purple-600 text-white',
  }

  return colorMap[tech] || 'bg-gray-500 text-white'
}
