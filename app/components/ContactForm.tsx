"use client";

export default function ContactForm() {
  return (
    <form className="flex flex-col gap-2">
      <label htmlFor="name" className="text-petal font-mono uppercase text-xs">
        Your Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        className="border-1 border-petal mb-4 py-2 px-4 bg-petal/10"
        required
      />

      <label htmlFor="email" className="text-petal font-mono uppercase text-xs">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        className="border-1 border-petal mb-4 py-2 px-4 bg-petal/10"
        required
      />

      <label
        htmlFor="screening-context"
        className="text-petal font-mono uppercase text-xs"
      >
        Screening Context
      </label>
      <select
        name="screening-context"
        id="screening-context"
        className="border-1 border-petal mb-4 py-2 px-4 bg-petal/10 text-white text-sm"
      >
        <option value="">Select type...</option>
        <option value="school">School/Classroom</option>
        <option value="workshop">Study Circle/Workshop</option>
        <option value="community">Community Event</option>
        <option value="festival">Film Festival/Institution</option>
        <option value="other">Other</option>
      </select>

      <label
        htmlFor="message"
        className="text-petal font-mono uppercase text-xs"
      >
        Message
      </label>
      <textarea
        id="message"
        name="message"
        className="border-1 border-petal mb-4 py-2 px-4 bg-petal/10 text-white text-sm h-32"
        required
      ></textarea>

      <button type="submit" className="uppercase font-mono bg-honey py-2 px-4">
        Send Request
      </button>
    </form>
  );
}
