// components/LatestNewsAndBlogs.tsx
"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import BgImage from "@/public/images/latestnewsandblogsbg.webp";
import Blog1Image from "@/public/images/blog1.webp";
import Blog2Image from "@/public/images/blog2.webp";
import Blog3Image from "@/public/images/blog3.webp";

type BlogPost = {
  title: string;
  dateLabel: string;
  image: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  href: string;
  excerpt: string;
};

const posts: BlogPost[] = [
  {
    title: "Testimonials: What Readers Are Saying About Eric Baker’s Work",
    dateLabel: "6 Feb",
    image: Blog1Image,
    href: "/blogs/testimonials-what-readers-are-saying",
    excerpt:
      "As AJ Washington and the Brotherhood of the All-Seeing Eye gains traction, readers have begun to share their thoughts and experiences with Eric Baker’s debut novel.",
  },
  {
    title: "Unveiling the Magic: The Inspiration Behind AJ Washington",
    dateLabel: "6 Feb",
    image: Blog2Image,
    href: "/blogs/unveiling-the-magic",
    excerpt:
      "Eric Baker draws from mythology, personal experience and a passion for storytelling to bring the world of AJ Washington and the Brotherhood of the All-Seeing Eye to life.",
  },
  {
    title: "The Journey of Eric H. Baker: From Educator to Author",
    dateLabel: "6 Feb",
    image: Blog3Image,
    href: "/blogs/journey-of-eric-h-baker",
    excerpt:
      "Years spent working with at-risk youth shaped Eric H. Baker’s voice as an author, inspiring stories filled with empathy, imagination and heart.",
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

const LatestNewsAndBlogs: FC = () => {
  return (
    <section
      id="blogs"
      className="relative overflow-hidden bg-slate-100 py-20 lg:py-24"
    >
      <Image
        src={BgImage}
        alt="Books on a shelf"
        fill
        priority
        className="pointer-events-none object-cover opacity-70"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/80 via-white/90 to-white/60" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Latest News And <span className="font-bold">Blogs</span>
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Stay up to date with new insights, behind-the-scenes stories, and
            reader highlights from the world of AJ Washington.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {posts.map((post) => (
            <motion.article
              key={post.title}
              variants={cardVariants}
              className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_18px_60px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute right-4 top-4 rounded-md bg-white/95 px-3 py-2 text-xs font-semibold text-slate-900 shadow-md">
                  {post.dateLabel}
                </div>
              </div>

              <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  {post.title}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-700">
                  {post.excerpt}
                </p>

                <div className="flex justify-center">
                  <Link
                    href={post.href}
                    className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-sm font-semibold text-slate-900 shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition hover:bg-slate-50"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LatestNewsAndBlogs;
