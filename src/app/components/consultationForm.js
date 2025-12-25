"use client";

import { useRef, useState, useCallback } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";

const STYLES = [
  "modern",
  "garden",
  "classic",
  "fairytale",
  "wildflower",
  "sophisticated",
];

const inputClasses =
  "w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-700 shadow-sm focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600";

export default function ConsultationForm({ headingLevel = "h2" }) {
  const Heading = headingLevel;
  const form = useRef(null);
  const [status, setStatus] = useState({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = useCallback(async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      await emailjs.sendForm(
        "service_2izjn67",
        "template_mkjsg5j",
        form.current,
        "l_dBdAXi6ypIv9WaA"
      );
      setStatus({
        type: "success",
        message: "Form submitted successfully! We'll be in touch soon.",
      });
      form.current?.reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatus({
        type: "error",
        message:
          "Failed to send the form. Please try again or call us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  return (
    <section className="px-4">
      <div className="title-container">
        <Heading className="title">Contact Us for a Consultation</Heading>
        <Image
          src="/img/flower-PhotoRoom.webp"
          width={200}
          height={100}
          alt="Decorative flower"
          className="-mt-20"
        />
      </div>

      <p className="body-text mx-auto max-w-3xl p-2">
        At Flora&apos;s, we specialize in personalizing your wedding flowers. We
        believe the flowers for your wedding should be as unique as each
        individual. I like to personally go over each detail of your wedding and
        create a realistic and individualized quote for every budget. Between
        your inspiration board, our creativity, and our knowledge of flowers,
        you&apos;ll have the wedding flowers of your dreams!
      </p>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="mx-auto mt-6 max-w-2xl rounded-lg border-2 border-green-700 bg-gray-100 p-6 shadow-md"
      >
        <h2 className="subtitle mb-2">
          Create Your Dream Wedding with Custom Floral Designs!
        </h2>
        <hr className="mb-6" />

        {/* Status Message */}
        {status.type && (
          <div
            className={`mb-6 rounded-lg p-4 text-center ${
              status.type === "success"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
            role="alert"
          >
            {status.message}
          </div>
        )}

        {/* Names Row */}
        <div className="mb-4 grid gap-4 md:grid-cols-2">
          <div>
            <label className="label" htmlFor="firstName">
              Bride&apos;s Name *
            </label>
            <input
              className={inputClasses}
              id="firstName"
              name="bride_name"
              type="text"
              placeholder="Bride's name"
              required
            />
          </div>
          <div>
            <label className="label" htmlFor="groomName">
              Groom&apos;s Name *
            </label>
            <input
              className={inputClasses}
              id="groomName"
              name="groom_name"
              type="text"
              placeholder="Groom's name"
              required
            />
          </div>
        </div>

        {/* Planner Name */}
        <div className="mb-4">
          <label className="label" htmlFor="plannerName">
            Planner&apos;s Name
          </label>
          <input
            className={inputClasses}
            id="plannerName"
            name="planner_name"
            type="text"
            placeholder="Optional"
          />
        </div>

        {/* Emails Row */}
        <div className="mb-4 grid gap-4 md:grid-cols-2">
          <div>
            <label className="label" htmlFor="email">
              Email *
            </label>
            <input
              className={inputClasses}
              id="email"
              name="bride_email"
              type="email"
              placeholder="your@email.com"
              autoComplete="email"
              required
            />
          </div>
          <div>
            <label className="label" htmlFor="plannerEmail">
              Planner Email
            </label>
            <input
              className={inputClasses}
              id="plannerEmail"
              name="planner_email"
              type="email"
              placeholder="Optional"
              autoComplete="email"
            />
          </div>
        </div>

        {/* Phones Row */}
        <div className="mb-4 grid gap-4 md:grid-cols-2">
          <div>
            <label className="label" htmlFor="phone">
              Bride&apos;s Phone *
            </label>
            <input
              className={inputClasses}
              id="phone"
              name="bride_phone"
              type="tel"
              placeholder="(208) 555-1234"
              autoComplete="tel"
              required
            />
          </div>
          <div>
            <label className="label" htmlFor="plannerPhone">
              Planner Phone
            </label>
            <input
              className={inputClasses}
              id="plannerPhone"
              name="planner_phone"
              type="tel"
              placeholder="Optional"
              autoComplete="tel"
            />
          </div>
        </div>

        {/* Venues Row */}
        <div className="mb-4 grid gap-4 md:grid-cols-2">
          <div>
            <label className="label" htmlFor="venue">
              Ceremony Venue *
            </label>
            <input
              className={inputClasses}
              id="venue"
              name="venue"
              type="text"
              placeholder="Venue name"
              required
            />
          </div>
          <div>
            <label className="label" htmlFor="receptionVenue">
              Reception Venue
            </label>
            <input
              className={inputClasses}
              id="receptionVenue"
              name="reception_venue"
              type="text"
              placeholder="If different"
            />
          </div>
        </div>

        {/* Event Date */}
        <div className="mb-4">
          <label className="label" htmlFor="eventDate">
            Date of Event *
          </label>
          <input
            className={`${inputClasses} max-w-xs`}
            id="eventDate"
            name="event_date"
            type="date"
            required
          />
        </div>

        {/* Preferred Styles */}
        <fieldset className="mb-4">
          <legend className="label">Preferred Style(s)</legend>
          <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {STYLES.map((style) => (
              <label
                key={style}
                className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-200 bg-white p-2 transition-colors hover:bg-gray-50"
              >
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded border-gray-300 text-green-600 focus:ring-green-500"
                  name="preferred_style"
                  value={style}
                />
                <span className="text-gray-700 capitalize">{style}</span>
              </label>
            ))}
          </div>
        </fieldset>

        {/* Additional Info */}
        <div className="mb-6">
          <label className="label" htmlFor="additionalInfo">
            Additional Information *
          </label>
          <textarea
            className={inputClasses}
            id="additionalInfo"
            name="additional_info"
            placeholder="Tell us about your vision, color preferences, budget range, or any other details..."
            rows={4}
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-lg bg-green-700 px-8 py-3 font-semibold text-white uppercase shadow-md transition-all hover:bg-green-600 hover:shadow-lg focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Sending...
              </span>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </section>
  );
}
