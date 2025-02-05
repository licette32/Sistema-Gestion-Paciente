// Importar las funciones `clsx` y `twMerge`
// - `clsx` permite combinar nombres de clases condicionalmente.
// - `twMerge` optimiza y fusiona clases de Tailwind CSS eliminando redundancias.
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Función para fusionar clases CSS utilizando `clsx` y `twMerge`
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Convierte un valor a JSON y lo vuelve a parsear para eliminar referencias
export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));

// Convierte un archivo en una URL local para su previsualización
export const convertFileToUrl = (file: File) => URL.createObjectURL(file);

// FORMATEO DE FECHA Y HORA
export const formatDateTime = (dateString: Date | string) => {
  const dateTimeOptions: Intl.DateTimeFormatOptions = {
    // Formato de fecha y hora con mes abreviado, día numérico, año, hora y minutos.
    month: "short", // Ejemplo: 'Oct'
    day: "numeric", // Ejemplo: '25'
    year: "numeric", // Ejemplo: '2023'
    hour: "numeric", // Ejemplo: '8'
    minute: "numeric", // Ejemplo: '30'
    hour12: true, // Define si usa el formato de 12 horas (true) o 24 horas (false)
  };

  const dateDayOptions: Intl.DateTimeFormatOptions = {
    // Formato con el día de la semana abreviado, día, mes y año
    weekday: "short", // Ejemplo: 'Mon'
    year: "numeric", // Ejemplo: '2023'
    month: "2-digit", // Ejemplo: '10' (mes con dos dígitos)
    day: "2-digit", // Ejemplo: '25'
  };

  const dateOptions: Intl.DateTimeFormatOptions = {
    // Solo fecha con mes abreviado, día y año
    month: "short", // Ejemplo: 'Oct'
    year: "numeric", // Ejemplo: '2023'
    day: "numeric", // Ejemplo: '25'
  };

  const timeOptions: Intl.DateTimeFormatOptions = {
    // Solo la hora con minutos en formato de 12 o 24 horas
    hour: "numeric", // Ejemplo: '8'
    minute: "numeric", // Ejemplo: '30'
    hour12: true, // Define si usa el formato de 12 horas (true) o 24 horas (false)
  };

  // Formatea la fecha según las opciones definidas
  const formattedDateTime: string = new Date(dateString).toLocaleString(
    "en-US",
    dateTimeOptions
  );

  const formattedDateDay: string = new Date(dateString).toLocaleString(
    "en-US",
    dateDayOptions
  );

  const formattedDate: string = new Date(dateString).toLocaleString(
    "en-US",
    dateOptions
  );

  const formattedTime: string = new Date(dateString).toLocaleString(
    "en-US",
    timeOptions
  );

  return {
    dateTime: formattedDateTime, // Fecha y hora completa
    dateDay: formattedDateDay, // Día de la semana, día, mes y año
    dateOnly: formattedDate, // Solo la fecha
    timeOnly: formattedTime, // Solo la hora
  };
};

// ENCRIPTACIÓN Y DESENCRIPTACIÓN BÁSICA
export function encryptKey(passkey: string) {
  return btoa(passkey); // Codifica la clave en Base64
}

export function decryptKey(passkey: string) {
  return atob(passkey); // Decodifica la clave desde Base64
}
