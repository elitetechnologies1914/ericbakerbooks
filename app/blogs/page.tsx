// app/blogs/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import BgImage from "@/public/images/latestnewsandblogsbg.webp";
import Blog1Image from "@/public/images/blog1.webp";
import Blog2Image from "@/public/images/blog2.webp";
import Blog3Image from "@/public/images/blog3.webp";

type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  href: string;
  image: any; // eslint-disable-line @typescript-eslint/no-explicit-any
};

const posts: BlogPost[] = [
  {
    title: "Testimonials: What Readers Are Saying About Eric Baker’s Work",
    excerpt:
      "As AJ Washington and the Brotherhood of the All-Seeing Eye gains traction, readers have begun to share their thoughts, reactions and favorite moments from the story.",
    date: "February 6, 2025",
    href: "/blogs/testimonials-what-readers-are-saying",
    image: Blog1Image,
  },
  {
    title: "Unveiling the Magic: The Inspiration Behind AJ Washington",
    excerpt:
      "Eric Baker draws from mythology, personal experience and a passion for storytelling to bring the world of AJ Washington and the Brotherhood of the All-Seeing Eye to life.",
    date: "February 6, 2025",
    href: "/blogs/unveiling-the-magic",
    image: Blog2Image,
  },
  {
    title: "The Journey of Eric H. Baker: From Educator to Author",
    excerpt:
      "Years spent working with at-risk youth shaped Eric H. Baker’s voice as an author, inspiring stories that are filled with empathy, imagination and heart.",
    date: "February 6, 2025",
    href: "/blogs/journey-of-eric-h-baker",
    image: Blog3Image,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function BlogsPage() {
  return (
    <main className="bg-slate-50 pt-24">
      <section className="relative overflow-hidden bg-slate-100 py-16 lg:py-20">
        <Image
          src={BgImage}
          alt="Bookshelf background"
          fill
          priority
          className="pointer-events-none object-cover opacity-70"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/85 via-white/90 to-white/70" />

        <div className="relative mx-auto max-w-6xl px-6">
          <motion.div
            className="mb-10 flex items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="text-xs font-medium text-slate-600">
              Home <span className="mx-1">/</span>
              <span className="text-slate-900">Blogs</span>
            </p>
            <h1 className="text-2xl font-semibold text-slate-900">
              Latest News &amp; Blogs
            </h1>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            {posts.map((post) => (
              <motion.article
                key={post.title}
                variants={cardVariants}
                className="flex h-full flex-col overflow-hidden rounded-md bg-white shadow-[0_18px_60px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
                  <Link href={post.href} className="hover:underline">
                    <h2 className="mb-3 text-base font-semibold text-slate-900">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-700">
                    {post.excerpt}
                  </p>

                  <Link
                    href={post.href}
                    className="mb-4 text-xs font-semibold uppercase tracking-wide text-indigo-600"
                  >
                    Read more »
                  </Link>

                  <div className="mt-auto border-t border-neutral-200 pt-3 text-[0.7rem] text-slate-500">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>No Comments</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
