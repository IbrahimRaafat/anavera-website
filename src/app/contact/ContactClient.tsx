"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import { PageLayout } from "@/components/templates/PageLayout";
import { SectionLabel, GlowCard } from "@/components/molecules";
import { Button } from "@/components/atoms";
import { fadeUp, staggerContainer, viewport } from "@/design-system/animations";
import { cn } from "@/lib/cn";
import { useCaseDropdown } from "@/data/navigation";

type FormState = "idle" | "sending" | "sent" | "error";

function ContactContent() {
  const searchParams = useSearchParams();
  const urlUseCase = searchParams.get("useCase") || "";

  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", company: "", email: "", useCase: urlUseCase, message: "" });

  useEffect(() => {
    if (urlUseCase) {
      setForm((prev) => ({ ...prev, useCase: urlUseCase }));
    }
  }, [urlUseCase]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setState("sent");
    } catch {
      setState("error");
    }
  }

  return (
    <>
      {/* Form + Info */}
      <section className="py-20 bg-bg">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid lg:grid-cols-3 gap-10"
          >
            {/* Info sidebar */}
            <motion.div variants={fadeUp} className="flex flex-col gap-6">
              <SectionLabel
                eyebrow="Get in Touch"
                heading="We'd Love to Hear From You"
              />
              <div className="flex flex-col gap-4 mt-2">
                <div className="flex gap-3 items-start">
                  <div className="size-8 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center text-teal shrink-0 mt-0.5">
                    <MapPin size={14} />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-text text-sm">Address</p>
                    <p className="text-text-muted text-sm leading-relaxed mt-0.5">
                      6th floor, First Central 200<br />
                      2 Lakeside Drive, Park Royal<br />
                      London NW10 7FQ<br />
                      United Kingdom
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="size-8 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center text-teal shrink-0">
                    <Mail size={14} />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-text text-sm">Email</p>
                    <a href="mailto:info@anavera.com" className="text-teal hover:text-teal-light text-sm transition-colors">
                      info@anavera.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="size-8 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center text-teal shrink-0">
                    <Phone size={14} />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-text text-sm">Phone</p>
                    <a href="tel:+447507609922" className="text-teal hover:text-teal-light text-sm transition-colors">
                      +44 7507 609922
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div variants={fadeUp} className="lg:col-span-2">
              {state === "sent" ? (
                <GlowCard glow="teal" hover={false} className="p-10 flex flex-col items-center text-center gap-6">
                  <div className="size-16 rounded-full bg-teal/15 border border-teal/30 flex items-center justify-center text-3xl">
                    ✓
                  </div>
                  <div>
                    <p className="font-heading font-bold text-text text-xl mb-2">Message Sent</p>
                    <p className="text-text-muted text-sm leading-relaxed">
                      Thanks for reaching out. We'll be in touch soon.
                    </p>
                  </div>
                </GlowCard>
              ) : state === "error" ? (
                <GlowCard hover={false} className="p-10 flex flex-col items-center text-center gap-6">
                  <div className="size-16 rounded-full bg-danger/10 border border-danger/30 flex items-center justify-center text-3xl">
                    ✕
                  </div>
                  <div>
                    <p className="font-heading font-bold text-text text-xl mb-2">Something went wrong</p>
                    <p className="text-text-muted text-sm leading-relaxed mb-4">
                      We couldn't send your message. Please try again or email us directly at{" "}
                      <a href="mailto:info@anavera.com" className="text-teal hover:underline">info@anavera.com</a>.
                    </p>
                    <Button variant="secondary" size="md" onClick={() => setState("idle")}>Try Again</Button>
                  </div>
                </GlowCard>
              ) : (
                <GlowCard hover={false} className="p-8">
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field label="Full Name" name="name" value={form.name} onChange={handleChange} required />
                      <Field label="Company" name="company" value={form.company} onChange={handleChange} />
                    </div>
                    <Field label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} required />

                    <div className="flex flex-col gap-1.5">
                      <label className="font-heading font-medium text-text text-sm">Use Case Interest</label>
                      <select
                        name="useCase"
                        value={form.useCase}
                        onChange={handleChange}
                        className={cn(
                          "h-10 px-3 rounded-lg bg-bg border border-border text-text text-sm font-body",
                          "focus:outline-none focus:border-teal transition-colors",
                          !form.useCase && "text-text-muted",
                        )}
                      >
                        <option value="">Select a use case (optional)</option>
                        {useCaseDropdown.map((item) => (
                          <option key={item.href} value={item.label}>{item.label}</option>
                        ))}
                        <option value="Custom">Custom / Other</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-heading font-medium text-text text-sm">Message <span className="text-danger">*</span></label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="px-3 py-2.5 rounded-lg bg-bg border border-border text-text text-sm font-body leading-relaxed resize-none focus:outline-none focus:border-teal transition-colors"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={state === "sending"}
                      iconRight={<Send size={14} />}
                    >
                      {state === "sending" ? "Sending…" : "Send Message"}
                    </Button>
                  </form>
                </GlowCard>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export function ContactClient() {
  return (
    <PageLayout>
      <Suspense fallback={<div className="py-20 text-center text-text-muted">Loading...</div>}>
        <ContactContent />
      </Suspense>
    </PageLayout>
  );
}

interface FieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}

function Field({ label, name, value, onChange, placeholder, type = "text", required }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-heading font-medium text-text text-sm">
        {label} {required && <span className="text-danger">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="h-10 px-3 rounded-lg bg-bg border border-border text-text text-sm font-body placeholder:text-text-muted focus:outline-none focus:border-teal transition-colors"
      />
    </div>
  );
}
