"use client";

import { useState } from "react";
import { Send, LoaderCircle } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const fieldClass =
  "w-full rounded-xl border border-ink-soft/15 bg-cream px-5 py-3.5 text-ink-soft outline-none transition-all placeholder:text-ink-soft/40 focus:border-green focus:bg-white focus:ring-2 focus:ring-green/25";
const labelClass =
  "mb-2 block text-xs font-semibold uppercase tracking-wider text-ink-soft/70";

export function VendorContactForm({ vendorName }: { vendorName: string }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("loading");

    try {
      // TODO: wire real backend (Server Action + Resend, or a form service).
      // The submitted payload is ready to send:
      //   const data = Object.fromEntries(new FormData(form));
      //   data.vendor = vendorName;
      await new Promise((resolve) => setTimeout(resolve, 900));

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 5000);
    }
  }

  const loading = status === "loading";

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      <div className="grid gap-7 md:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="inquiry_type" className={labelClass}>
          I&apos;d Like To
        </label>
        <select id="inquiry_type" name="inquiry_type" className={fieldClass}>
          <option value="Leave a review">Leave a review</option>
          <option value="Ask a question">Ask a question</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Share your experience or ask your question…"
          className={`${fieldClass} resize-none`}
        />
      </div>

      <div className="flex flex-col items-center gap-5 pt-1 md:flex-row md:justify-between">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-ink px-9 py-4 text-lg font-semibold text-cream transition-all duration-300 hover:bg-green disabled:opacity-70 md:w-auto"
        >
          {loading ? (
            <>
              Sending…
              <LoaderCircle className="h-5 w-5 animate-spin" strokeWidth={2} />
            </>
          ) : (
            <>
              Send Message
              <Send className="h-5 w-5" strokeWidth={2} />
            </>
          )}
        </button>

        <p
          className="text-sm font-semibold"
          role="status"
          aria-live="polite"
        >
          {status === "success" && (
            <span className="text-green">
              Message sent! Thanks for reaching out to {vendorName}.
            </span>
          )}
          {status === "error" && (
            <span className="text-red-600">
              Something went wrong. Please try again.
            </span>
          )}
        </p>
      </div>
    </form>
  );
}
