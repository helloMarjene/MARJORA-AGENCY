"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { coffeeCategories } from "@/data/coffee-data";
import { enquiryTypes, buildEnquiryMessage, whatsappUrl } from "@/lib/whatsapp";

const inputClass =
  "w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/35 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30";

const labelClass =
  "mb-1.5 block text-xs font-bold uppercase tracking-[0.14em] text-charcoal/60";

function ContactFormInner() {
  const params = useSearchParams();
  const [form, setForm] = useState({
    name: "",
    company: "",
    country: "",
    email: "",
    phone: "",
    enquiryType: "",
    coffeeInterest: "",
    quantity: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const interest = params.get("interest");
    if (interest) {
      setForm((f) => ({ ...f, coffeeInterest: interest }));
    }
  }, [params]);

  const set = (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => {
      setForm((f) => ({ ...f, [key]: e.target.value }));
      setErrors((err) => ({ ...err, [key]: "" }));
    };

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Full name is required";
    if (!form.country.trim()) next.country = "Country is required";
    if (!form.enquiryType) next.enquiryType = "Please select one";
    if (!form.email.trim()) next.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      next.email = "Enter a valid email address";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const url = whatsappUrl(buildEnquiryMessage(form));
    window.open(url, "_blank", "noopener,noreferrer");
    setOpened(true);
  };

  return (
    <div>
      <form
        onSubmit={submit}
        noValidate
        className="rounded-[2rem] border border-charcoal/10 bg-cream/60 p-6 shadow-xl shadow-black/5 backdrop-blur-sm md:p-10"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelClass}>
              Full Name *
            </label>
            <input
              id="name"
              value={form.name}
              onChange={set("name")}
              className={inputClass}
              placeholder="Your full name"
            />
            {errors.name && (
              <p className="mt-1 text-xs font-semibold text-red-700">
                {errors.name}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="company" className={labelClass}>
              Company Name
            </label>
            <input
              id="company"
              value={form.company}
              onChange={set("company")}
              className={inputClass}
              placeholder="Company or organisation"
            />
          </div>
          <div>
            <label htmlFor="country" className={labelClass}>
              Country *
            </label>
            <input
              id="country"
              value={form.country}
              onChange={set("country")}
              className={inputClass}
              placeholder="e.g. Uganda, Kenya, UAE"
            />
            {errors.country && (
              <p className="mt-1 text-xs font-semibold text-red-700">
                {errors.country}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>
              Email Address *
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={set("email")}
              className={inputClass}
              placeholder="you@company.com"
            />
            {errors.email && (
              <p className="mt-1 text-xs font-semibold text-red-700">
                {errors.email}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone Number
            </label>
            <input
              id="phone"
              value={form.phone}
              onChange={set("phone")}
              className={inputClass}
              placeholder="+256 ..."
            />
          </div>
          <div>
            <label htmlFor="enquiryType" className={labelClass}>
              I am a *
            </label>
            <select
              id="enquiryType"
              value={form.enquiryType}
              onChange={set("enquiryType")}
              className={inputClass}
            >
              <option value="">Select one</option>
              {enquiryTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            {errors.enquiryType && (
              <p className="mt-1 text-xs font-semibold text-red-700">
                {errors.enquiryType}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="coffeeInterest" className={labelClass}>
              Coffee Interest
            </label>
            <select
              id="coffeeInterest"
              value={form.coffeeInterest}
              onChange={set("coffeeInterest")}
              className={inputClass}
            >
              <option value="">Select coffee type</option>
              {coffeeCategories.map((c) => (
                <option key={c.slug} value={c.name}>
                  {c.name}
                </option>
              ))}
              <option value="Not sure yet">Not sure yet</option>
            </select>
          </div>
          <div>
            <label htmlFor="quantity" className={labelClass}>
              Estimated Quantity
            </label>
            <input
              id="quantity"
              value={form.quantity}
              onChange={set("quantity")}
              className={inputClass}
              placeholder="e.g. 50 tonnes"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className={labelClass}>
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              value={form.message}
              onChange={set("message")}
              className={`${inputClass} resize-none`}
              placeholder="Tell us about your enquiry..."
            />
          </div>
        </div>

        <button
          type="submit"
          className="group mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-forest px-8 py-4 text-sm font-bold text-warmwhite transition-colors hover:bg-coffee sm:w-auto"
        >
          Send via WhatsApp
          <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
        <p className="mt-4 text-xs leading-relaxed text-charcoal/50">
          Submitting opens WhatsApp in a new tab with your message ready to
          send. Review it there and press send — nothing is delivered until you
          do.
        </p>
      </form>

      {opened && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 flex items-start gap-3 rounded-2xl border border-forest/25 bg-forest/10 p-5"
        >
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-forest" />
          <p className="text-sm leading-relaxed text-charcoal/75">
            WhatsApp has opened in a new tab with your enquiry prepared. Please
            review the message and press send so it reaches our team. If it did
            not open, check your browser&apos;s pop-up blocker.
          </p>
        </motion.div>
      )}
    </div>
  );
}

export default function ContactForm() {
  return (
    <Suspense
      fallback={<div className="h-96 animate-pulse rounded-[2rem] bg-cream" />}
    >
      <ContactFormInner />
    </Suspense>
  );
}
