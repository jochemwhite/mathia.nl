"use client";

import Image from "next/image";
import { useState } from "react";
import EbookForm from "../forms/EbookForm";

export default function EbookSection() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);

  function handleSubmit() {
    // TODO: connect to your email provider (Mailchimp, ConvertKit, etc.)
    console.log({ firstName, email });
  }

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-8 lg:px-16">
      {/* Teal diagonal slice top-right */}

      <div className="relative mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-(--primary)">Gratis e-book</p>
          <h2 className="font-serif text-4xl font-bold leading-tight text-(--primary) sm:text-5xl">Meer volgers in 3 stappen</h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-primary">
            Lukt het niet om meer volgers te krijgen? Dat hoeft niet! Ik heb drie accounts met meer dan 10.000 volgers, ik wéét <span className="font-bold">welke strategieën werken.</span> Ik deel ze
            graag met je!
          </p>

          {/* Form */}
          <div className="py-16">
            <EbookForm />
          </div>
        </div>

        {/* ── Right: stacked mockup images ── */}
        <div className="relative flex h-[420px] items-center justify-center lg:h-[500px]">
          <Image src="/img/gratis-ebook-meer-volgers-social-media-2.png" width={500} height={500} alt="dfsf" />
        </div>
      </div>
    </section>
  );
}
