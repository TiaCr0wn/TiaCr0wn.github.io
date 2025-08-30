"use client";
import { useState } from "react";
import Image from "next/image";

type Section = {
  title: string;
  image: string;   // put files under /public/about/...
  blurb: string;
  body: string;
};

const SECTIONS: Section[] = [
  {
    title: "Who Am I",
    image: "/about/whoami.jpg",
    blurb: "BSc Physics at Edinburgh ",
    body:
      "I'm studying Physics at the University of Edinburgh, exploring everything from Robotics to Quantum Mechanics. My curiosity started early—my dad’s love of travel, photography, antique maps, and fossils sparked a lifetime habit of asking how things work. My mum’s thoughtful, creative spirit pushed me toward making: scrapbooks, jewellery, clay figures, and little painted cards for the people I love.",
  },
  {
    title: "Experience",
    image: "/about/experience.jpg",
    blurb: "Projects, teamwork, problem-solving",
    body:
      "Hands-on projects in robotics and data analysis, plus team coursework and personal builds. I enjoy turning messy problems into clean models and visualisations, and I’m happiest when I can blend physics, code, and design.",
  },
  {
    title: "Academics",
    image: "/about/academics.jpg",
    blurb: "Robotics • Quantum • Data & modelling",
    body:
      "Core physics with a focus on modelling and computation. Comfort with Python/NumPy/Matplotlib, LaTeX, and simulation workflows. I like connecting theory to real-world behaviour and communicating results clearly.",
  },
  {
    title: "Volunteering",
    image: "/about/volunteering.jpg",
    blurb: "STEM outreach • tutoring • community",
    body:
      "I care about opening doors in STEM—through mentoring, tutoring, and helping at outreach events. These have grown my confidence in explaining complex ideas simply and empathetically.",
  },
  {
    title: "Interests",
    image: "/about/interests.jpg",
    blurb: "Photography • design • anime • travel",
    body:
      "Travel keeps me wide-eyed. A highlight was visiting Japan—the blend of anime, design, and robotics felt totally my vibe and keeps inspiring how I mix science, art, and discovery.",
  },
];

export default function About() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="space-y-8">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-extrabold tracking-tight text-pink-700">
          About Me
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore the banners to learn more — click to reveal details.
        </p>
      </header>

      <ul className="space-y-6">
        {SECTIONS.map((s, i) => {
          const isOpen = open === i;
          return (
            <li
              key={s.title}
              className="rounded-2xl border border-pink-200 bg-white shadow-sm overflow-hidden"
            >
              {/* Banner */}
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="relative w-full text-left group"
                aria-expanded={isOpen}
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    priority={i === 0}
                    className="object-cover"
                  />
                  {/* Pink gradient overlay to match your layout theme */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-pink-700/30 to-pink-300/20 group-hover:from-black/35 transition" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-4 flex items-center justify-between">
                  <div>
                    <h2 className="text-white text-2xl font-semibold drop-shadow">
                      {s.title}
                    </h2>
                    <p className="text-pink-50 text-sm drop-shadow">{s.blurb}</p>
                  </div>
                  <svg
                    className={`h-6 w-6 text-white drop-shadow transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </button>

              {/* Reveal panel */}
              <div
                className={`px-5 pb-6 pt-4 text-gray-700 bg-pink-50/60 transition-[max-height,opacity] duration-300 ${
                  isOpen ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  maxHeight: isOpen ? 500 : 0,
                  overflow: "hidden",
                }}
              >
                <p className="leading-relaxed">{s.body}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

