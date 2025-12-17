// app/about-eric-h-baker/page.tsx
"use client";

import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AuthorImage from "@/public/images/author.jpg";
import BookCoverImage from "@/public/images/bookcover.jpg";

const AboutEricHBakerPage: FC = () => {
  return (
    <main className="bg-slate-50 pt-24">
      {/* Top banner – animates on load */}
      <section className="relative border-b border-neutral-200 bg-slate-100">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={BookCoverImage}
            alt="AJ Washington book background"
            fill
            className="object-cover opacity-25 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/50" />
        </div>

        <motion.div
          className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-10"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-xs font-medium text-slate-600">
            Home <span className="mx-1">/</span>
            <span className="text-slate-900">About Eric H. Baker</span>
          </p>
          <h1 className="text-2xl font-semibold text-slate-900">
            About Eric H. Baker
          </h1>
        </motion.div>
      </section>

      {/* Main content */}
      <section className="py-14 lg:py-18">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center">
            {/* Photo */}
            <motion.div
              className="relative flex w-full justify-center lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            >
              <div className="absolute -left-50 top-1/2 hidden h-[230px] w-[120%] -translate-y-1/2 bg-indigo-50 lg:block" />
              <div className="relative max-w-md overflow-hidden rounded-t-[220px] rounded-b-2xl shadow-[0_24px_70px_rgba(0,0,0,0.16)]">
                <Image
                  src={AuthorImage}
                  alt="Eric H. Baker"
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Intro text */}
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
            >
              <h2 className="mb-6 text-3xl font-semibold text-slate-900">
                About The <span className="font-bold">Author</span>
              </h2>

              <div className="space-y-4 text-sm leading-relaxed text-slate-800">
                <p>
                  For most of my adult life I have dedicated myself to working
                  with at risk youth, primarily in classroom settings. This
                  experience has shaped my perspective on life and
                  storytelling. Engaging with young people facing significant
                  challenges has given me a deep appreciation for resilience,
                  hope and the transformative power of guidance and support.
                </p>
                <p>
                  Unfortunately, due to unforeseen medical issues, I had to step
                  away from teaching. The transition was difficult, but it
                  opened a door to a new chapter in my life: writing. With an
                  overactive imagination and a passion for storytelling, I
                  discovered that creating fictional worlds felt like a natural
                  extension of the work I had always done—reaching hearts and
                  minds through stories.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Long form bio */}
          <motion.div
            className="mt-10 border-t border-neutral-200 pt-8 text-sm leading-relaxed text-slate-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            <p className="mb-4">
              Writing became more than a career for me—it became a form of
              therapy and expression. My first book,{" "}
              <span className="font-semibold">
                AJ Washington and The Brotherhood Of The All Seeing Eye
              </span>
              , is the culmination of my experiences, thoughts and dreams. It
              blends mythology, fantasy and emotional truth in a way that
              reflects not only my imagination but also the journeys of the
              young people I&apos;ve worked with over the years.
            </p>
            <p className="mb-4">
              I am currently immersed in the process of writing the sequel,
              eager to continue AJ&apos;s story and further explore the world I
              have created. Every chapter is an opportunity to dive deeper into
              themes of identity, courage and destiny. My hope is that
              readers—young and old—will see a part of themselves in these
              characters and feel inspired by their growth.
            </p>
            <p>
              Although my time in the classroom ended sooner than I expected,
              the lessons I learned there live on in every page I write. Through
              my stories, I continue my life&apos;s work: encouraging others to
              face their fears, embrace their potential and believe that even in
              the darkest moments, there is always a path forward.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AboutEricHBakerPage;
