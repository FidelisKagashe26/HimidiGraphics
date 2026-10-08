"use client";

import { useState } from "react";
import { Mail } from "lucide-react";

import { WhatsAppIcon } from "@/components/BrandIcons";
import { services } from "@/lib/services";
import { site, whatsappLink } from "@/lib/site";
import styles from "./ContactForm.module.css";

type Errors = Partial<Record<"name" | "message", string>>;

/**
 * Builds the brief into a WhatsApp or email message, so it works on any static
 * host with no backend, and lands where the studio already answers clients.
 */
export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const service = String(data.get("service") ?? "").trim();
    const deadline = String(data.get("deadline") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const next: Errors = {};
    if (!name) next.name = "Please enter your name.";
    if (message.length < 10) next.message = "Please describe your project in a sentence or two.";
    setErrors(next);

    if (Object.keys(next).length > 0) {
      const first = Object.keys(next)[0];
      (form.elements.namedItem(first) as HTMLElement | null)?.focus();
      setStatus("");
      return;
    }

    const lines = [`Hello ${site.name}, my name is ${name}.`];
    if (service) lines.push(`Service: ${service}`);
    if (deadline) lines.push(`Deadline: ${deadline}`);
    lines.push("", message);
    const text = lines.join("\n");

    const submitter = (e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
    if (submitter?.value === "email") {
      const subject = `Project enquiry from ${name}`;
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
      setStatus("Your email app should open with the message ready. Just press send.");
    } else {
      window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
      setStatus("WhatsApp opened in a new tab with your message ready. Just press send.");
    }
  }

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <div className={styles.field}>
        <label htmlFor="name">
          Your name <span className={styles.req}>(required)</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className={styles.error}>
            {errors.name}
          </p>
        )}
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="service">What do you need?</label>
          <select id="service" name="service" defaultValue="">
            <option value="">Not sure yet</option>
            {services.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor="deadline">Deadline</label>
          <input id="deadline" name="deadline" type="text" placeholder="e.g. Friday 14 Nov" aria-describedby="deadline-hint" />
          <p id="deadline-hint" className={styles.hint}>
            Optional
          </p>
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="message">
          Tell me about the project <span className={styles.req}>(required)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={`message-hint${errors.message ? " message-error" : ""}`}
        />
        <p id="message-hint" className={styles.hint}>
          What is it for, where will it be used (Instagram, print, screens) and what should it say?
        </p>
        {errors.message && (
          <p id="message-error" className={styles.error}>
            {errors.message}
          </p>
        )}
      </div>

      <div className={styles.actions}>
        <button type="submit" value="whatsapp" className="btn btn--primary btn--lg">
          <WhatsAppIcon size={22} /> Send on WhatsApp
        </button>
        <button type="submit" value="email" className="btn btn--ghost btn--lg">
          <Mail size={20} aria-hidden="true" /> Send by email
        </button>
      </div>

      <p role="status" className={styles.status}>
        {status}
      </p>
    </form>
  );
}
