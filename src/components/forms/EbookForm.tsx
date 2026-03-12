"use client";

// import { submitEbookForm } from "@/src/actions/forms";
import { Button } from "@/src/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/src/components/ui/form";
import { Input } from "@/src/components/ui/input";
import { ebookSchema, EbookSchema } from "@/src/schemas/ebook";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FormSubmission from "../modals/ebookFormSubmission";

export default function EbookForm() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const form = useForm<EbookSchema>({
    resolver: zodResolver(ebookSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  async function onSubmit(data: EbookSchema): Promise<void> {
    // TODO: implement submitEbookForm
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Naam</FormLabel>
                <FormControl>
                  <Input placeholder="Naam" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input placeholder="E-mail" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="bg-secondary-accent cursor-pointer hover:bg-secondary-accent/80" disabled={loading}>
            {/* {loading && <Spinner />} */}
            ONTVANG DE TIPS
          </Button>
        </form>
      </Form>
      <FormSubmission open={open} onClose={() => setOpen(false)} />
    </>
  );
}
