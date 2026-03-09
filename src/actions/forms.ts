"use server";
import { ContactFormValues, contactSchema } from "@/src/schemas/contact";
import { EbookSchema, ebookSchema } from "../schemas/ebook";


export async function submitContactForm(formData: ContactFormValues) {
  // validate the form data
  const validatedData = contactSchema.safeParse(formData);
  if (!validatedData.success) {
    return {
      success: false,
      error: validatedData.error.message,
    };
  }

  // send the email

  return {
    success: true,
    data: validatedData.data,
  };
}

export async function submitEbookForm(formData: EbookSchema) {
  // validate the form data
  const validatedData = ebookSchema.safeParse(formData);
  
  if (!validatedData.success) {
    return {
      success: false,
      error: validatedData.error.message,
    };
  }

  // send the email

  return {
    success: true,
    data: validatedData.data,
  };
}

// 