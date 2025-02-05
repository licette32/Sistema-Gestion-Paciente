// Importar tipos y dependencias necesarias
import type { Metadata } from "next"; // Definir el tipo `Metadata` para metadatos de la aplicación.
import { Plus_Jakarta_Sans } from "next/font/google"; // Importar la fuente desde Google Fonts.
import "./globals.css"; // Importar los estilos globales CSS.

import { cn } from '@/lib/utils'; // Importar la función `cn` para manejar clases CSS dinámicamente.
import { ThemeProvider } from "@/components/theme-provider"; // Importar el proveedor de temas para manejar el modo oscuro o claro.

// Configuración de la fuente personalizada `Plus Jakarta Sans`
const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"], // Se define el subconjunto de caracteres a usar.
  weight: ['300', '400', '500', '600', '700'], // Se definen los pesos de la fuente disponibles.
  variable: '--font-sans' // Se define una variable CSS para la fuente.
});

// Definición de los metadatos de la aplicación
export const metadata: Metadata = {
  title: "CarePulse", // Título de la aplicación.
  description: "Sistema de Gestión de Pacientes", // Descripción breve de la app.
};

// Componente de layout principal que envuelve la aplicación
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en"> {/* Define el idioma de la página como inglés */}
      <body
        className={cn(
          'min-h-screen bg-dark-300 font-sans antialiased', // Clases CSS para el body.
          fontSans.variable // Aplica la fuente personalizada como variable CSS.
        )}
      >
        {/* Proveedor de temas que permite cambiar entre modo oscuro y claro */}
        <ThemeProvider 
          attribute="class" // Usa una clase CSS para definir el tema.
          defaultTheme="dark" // Establece el tema oscuro como predeterminado.
        >
          {children} {/* Renderiza los componentes hijos dentro del layout */}
        </ThemeProvider>
      </body>
    </html>
  );
}
