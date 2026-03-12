"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { ContactFormValues, contactSchema } from "../../schemas/contact";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Alert, AlertDescription } from "../ui/alert";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues): Promise<void> => {
    // TODO: implement submitContactForm
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} noValidate className="space-y-5 sm:space-y-6">
        {submitted && (
          <Alert className="border-green-200 bg-green-50 rounded-2xl">
            <AlertDescription className="lato text-sm text-green-800 font-semibold">✓ Bedankt! Je bericht is verzonden. Ik neem zo snel mogelijk contact met je op.</AlertDescription>
          </Alert>
        )}

        {/* Name + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="lato font-semibold text-gray-700">
                  Naam <span className="text-orange-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Je volledige naam" {...field} />
                </FormControl>
                <FormMessage className="lato text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="lato font-semibold text-gray-700">
                  E-mailadres <span className="text-orange-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input type="email" placeholder="jouw@email.nl" {...field} />
                </FormControl>
                <FormMessage className="lato text-xs" />
              </FormItem>
            )}
          />
        </div>

        {/* Phone + Subject */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="lato font-semibold text-gray-700">Telefoonnummer</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="+31 6 12345678" {...field} />
                </FormControl>
                <FormMessage className="lato text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="lato font-semibold text-gray-700">
                  Onderwerp <span className="text-orange-500">*</span>
                </FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Kies een onderwerp" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="strategie">Strategie sessie</SelectItem>
                    <SelectItem value="management">Social media management</SelectItem>
                    <SelectItem value="academy">Mathia Academy</SelectItem>
                    <SelectItem value="overig">Overig</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage className="lato text-xs" />
              </FormItem>
            )}
          />
        </div>

        {/* Message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="lato font-semibold text-gray-700">
                Bericht <span className="text-orange-500">*</span>
              </FormLabel>
              <FormControl>
                <Textarea placeholder="Vertel me meer over je vraag of wens..." rows={5} className="resize-none" {...field} />
              </FormControl>
              <FormMessage className="lato text-xs" />
            </FormItem>
          )}
        />

        {/* Privacy checkbox */}
        <FormField
          control={form.control}
          name="privacy"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <div className="flex items-start gap-3">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} className="mt-0.5 shrink-0" />
                </FormControl>
                <span className="lato text-sm text-primary leading-relaxed">
                  Ik ga akkoord met het{" "}
                  <a href="/privacy" className="text-secondary-accent font-semibold hover:underline">
                    privacybeleid
                  </a>{" "}
                  van Mathia.nl
                  <span className="text-secondary-accent ml-0.5">*</span>
                </span>
              </div>
              <FormMessage className="lato text-xs" />
            </FormItem>
          )}
        />

        <div className="border-t border-gray-100 pt-2" />

        {/* Submit */}
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="w-full lato font-bold text-base text-white py-5 sm:py-6 rounded-md transition-all duration-200 hover:brightness-110 active:scale-95 bg-secondary-accent cursor-pointer hover:bg-secondary-accent/80"
        >
          {form.formState.isSubmitting ? "Verzenden…" : "Verstuur bericht"}
        </Button>
      </form>
    </Form>
  );
}
