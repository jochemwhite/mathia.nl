import z from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Naam moet minimaal 2 tekens bevatten"),
  email: z.string().email("Voer een geldig e-mailadres in"),
  phone: z
    .string()
    .regex(/^[+\d\s\-()]{6,20}$/, "Voer een geldig telefoonnummer in")
    .optional()
    .or(z.literal("")),
  subject: z.enum(["strategie", "management", "academy", "overig"], {
    error: () => ({ message: "Selecteer een onderwerp" }),
  }),
  message: z.string().min(10, "Bericht moet minimaal 10 tekens bevatten"),
  privacy: z.literal(true, {
    error: () => ({ message: "Je moet akkoord gaan met het privacybeleid" }),
  }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
