import * as z from "zod";

export const ebookSchema = z.object({
  name: z.string().min(1, "Naam is verplicht"),
  email: z.string().email("Ongeldig e-mailadres"),
});

export type EbookSchema = z.infer<typeof ebookSchema>;
