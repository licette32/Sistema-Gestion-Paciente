import { z } from "zod"

export const UserFormValidation = z.object({
    name: z.string()
        .min(2, "El nombre de usuario debe tener al menos 2 caracteres.")
        .max(50, "El nombre de usuario debe tener como máximo 50 caracteres."),
    email: z.string().email("Correo electrónico no válido."),
    phone: z.string().refine((phone) => /^\+\d{10,15}$/.test(phone), "Número de teléfono inválido"),
  })