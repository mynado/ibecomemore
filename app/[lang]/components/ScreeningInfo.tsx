"use client";
import React from "react";
import Section from "./Section";
import SectionLabel from "./SectionLabel";
import ContactForm from "./ContactForm";

export default function ScreeningInfo() {
  return (
    <Section id="screening">
      <div className="w-full md:w-1/2 flex flex-col gap-4 justify-start px-8 py-12">
        <SectionLabel label="Screen the film" />
        <h2 className="text-4xl font-extrabold mb-2 max-w-xs">
          Bring the Film to Your Audience
        </h2>
        <p className="text-bark">
          This film is made to be shared. Whether you´re a teacher, youth
          worker, community organiser, or cultural institution — we want the
          film to reach the people who need it most. Screenings can be adapted
          for many different contexts.
        </p>
        <ul className="flex flex-col gap-4 mt-8 font-mono uppercase text-xs">
          <li className="border-[2px] border-black w-fit py-2 px-4">
            <span className="text-ember">→</span> School & classroom screenings
          </li>
          <li className="border-[2px]  border-black w-fit py-2 px-4">
            <span className="text-ember">→</span> Study circles & workshops
          </li>
          <li className="border-[2px] border-black w-fit py-2 px-4">
            <span className="text-ember">→</span> Community & cultural events
          </li>
          <li className="border-[2px] border-black w-fit py-2 px-4">
            <span className="text-ember">→</span> Film festivals & institutions
          </li>
        </ul>
      </div>
      <div className="w-full md:w-1/2 md:h-full bg-ember flex flex-col gap-4 justify-start px-8 py-12">
        <SectionLabel label="Contact" color="petal" />
        <h2 className="text-white text-4xl font-extrabold mb-2">
          Request a Screening
        </h2>
        <ContactForm />
      </div>
    </Section>
  );
}
