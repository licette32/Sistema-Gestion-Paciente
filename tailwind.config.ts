import type { Config } from "tailwindcss"; // Importa el tipo `Config` para definir la configuración de Tailwind.

const { fontFamily } = require("tailwindcss/defaultTheme"); // Obtiene las fuentes predeterminadas de Tailwind.

const config = {
  darkMode: ["class"], // Habilita el modo oscuro basado en clases CSS.
  content: [
    // Define las rutas donde Tailwind debe buscar clases CSS para optimización.
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "", // Prefijo opcional para las clases de Tailwind (vacío por defecto).
  theme: {
    container: {
      center: true, // Centra automáticamente los contenedores.
      padding: "2rem", // Aplica un padding de 2rem dentro de los contenedores.
      screens: {
        "2xl": "1400px", // Define el ancho máximo del contenedor para pantallas grandes.
      },
    },
    extend: {
      // Extiende la paleta de colores personalizada.
      colors: {
        green: {
          500: "#24AE7C", // Verde principal.
          600: "#0D2A1F", // Verde oscuro.
        },
        blue: {
          500: "#79B5EC", // Azul claro.
          600: "#152432", // Azul oscuro.
        },
        red: {
          500: "#F37877", // Rojo suave.
          600: "#3E1716", // Rojo oscuro.
          700: "#F24E43", // Rojo intenso.
        },
        light: {
          200: "#E8E9E9", // Gris claro.
        },
        dark: {
          200: "#0D0F10",
          300: "#131619",
          400: "#1A1D21",
          500: "#363A3D",
          600: "#76828D",
          700: "#ABB8C4", // Varios tonos de gris oscuro.
        },
      },
      // Define fuentes personalizadas.
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans], // Usa una variable CSS para la fuente sans-serif.
      },
      // Agrega fondos personalizados con imágenes.
      backgroundImage: {
        appointments: "url('/assets/images/appointments-bg.png')",
        pending: "url('/assets/images/pending-bg.png')",
        cancelled: "url('/assets/images/cancelled-bg.png')",
      },
      // Define animaciones personalizadas con `keyframes`.
      keyframes: {
        "accordion-down": {
          from: { height: "0" }, // Inicia con altura 0.
          to: { height: "var(--radix-accordion-content-height)" }, // Se expande hasta su altura total.
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" }, // Comienza con su altura total.
          to: { height: "0" }, // Se colapsa a altura 0.
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" }, // Hace que el cursor parpadee.
          "20%,50%": { opacity: "0" },
        },
      },
      // Define animaciones personalizadas usando los `keyframes` anteriores.
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")], // Agrega el plugin `tailwindcss-animate` para animaciones adicionales.
} satisfies Config; // Asegura que la configuración cumpla con el tipo `Config` de Tailwind.

export default config;
