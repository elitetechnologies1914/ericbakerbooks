// app/blogs/journey-of-eric-h-baker/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

import BlogHero3 from "@/public/images/blog3.webp";

type SocialIconButtonProps = {
  href: string;
  label: string;
  children: React.ReactNode;
};

function SocialIconButton({ href, label, children }: SocialIconButtonProps) {
  return (
    <Link
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-600"
    >
      {children}
    </Link>
  );
}

export default function JourneyOfEricPostPage() {
  return (
    <main className="bg-slate-50 pb-20 pt-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-6 text-xs text-slate-500">
          <Link
            href="/blogs"
            className="font-medium text-indigo-600 hover:text-indigo-700"
          >
            ← Back to Latest News &amp; Blogs
          </Link>
        </div>

        <header className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            Blog
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
            The Journey of Eric H. Baker: From Educator to Author
          </h1>
        </header>

        <figure className="mb-6 overflow-hidden rounded-xl bg-slate-100 shadow-md">
          <Image
            src={BlogHero3}
            alt="Eric H. Baker depicted as a teacher and writer in a warm classroom"
            className="h-auto w-full object-cover"
            priority
          />
        </figure>

        <p className="mb-10 text-sm text-slate-700">
          Eric H. Baker has dedicated much of his adult life to working with
          at-risk youth, fostering a deep understanding of their struggles and
          aspirations.
        </p>

        <hr className="mb-6 border-slate-200" />

        <section className="mb-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-sm font-semibold text-slate-900">
            Share This Post
          </h2>
          <div className="flex gap-3">
            <SocialIconButton
              label="Share on Facebook"
              href="https://www.facebook.com/sharer/sharer.php"
            >
              <Facebook className="h-4 w-4" />
            </SocialIconButton>
            <SocialIconButton
              label="Share on X / Twitter"
              href="https://twitter.com/intent/tweet"
            >
              <Twitter className="h-4 w-4" />
            </SocialIconButton>
            <SocialIconButton
              label="Share on LinkedIn"
              href="https://www.linkedin.com/shareArticle"
            >
              <Linkedin className="h-4 w-4" />
            </SocialIconButton>
            <SocialIconButton
              label="Share via Email"
              href="mailto:?subject=The%20Journey%20of%20Eric%20H.%20Baker"
            >
              <Mail className="h-4 w-4" />
            </SocialIconButton>
          </div>
        </section>

        <hr className="mb-8 border-slate-200" />

        <article className="prose prose-sm max-w-none text-slate-800 prose-em:text-slate-900 prose-strong:text-slate-900">
          <p>
            Eric H. Baker has dedicated much of his adult life to working with
            at-risk youth, fostering a deep understanding of their struggles and
            aspirations. His experiences in the classroom inspired him to weave
            narratives that resonate with young readers and shine a light on the
            resilience he witnessed every day.
          </p>

          <p>
            For years, Eric taught students who were navigating complex
            challenges—family instability, trauma, and systems that often failed
            to see their potential. In those classrooms, he saw firsthand how
            stories could open doors: a novel, a character or a moment of
            connection could help a student feel seen and understood.
          </p>

          <p>
            When unforeseen medical issues forced Eric to step away from
            teaching, the transition was difficult. Yet it also opened a door to
            a new chapter in his life: writing. Drawing on his overactive
            imagination and the countless stories he carried from the classroom,
            Eric began crafting fiction that blends adventure, heart and hope.
          </p>

          <p>
            With his debut novel,{" "}
            <em>AJ Washington and the Brotherhood of the All-Seeing Eye</em>,
            Eric takes readers on an exhilarating journey through the eyes of a
            young foster child who learns he is the reincarnation of Pharaoh
            Ramses. The story artfully combines themes of resilience,
            friendship, and the power of belief, showing how AJ navigates both
            real and mythical challenges.
          </p>

          <p>
            Eric&apos;s unique background allows him to craft characters who are
            both relatable and inspirational. The emotional truths he witnessed
            as an educator give depth to his fantasy worlds, making them feel
            grounded and authentic even as they soar into the realm of gods and
            ancient magic.
          </p>

          <p>
            As Eric continues to write, his goal remains the same as it was in
            the classroom: to encourage, uplift and empower young people. His
            journey from educator to author is a testament to the idea that
            while roles may change, a calling to inspire others never truly
            disappears—it simply finds new pages to live on.
          </p>
        </article>
      </div>
    </main>
  );
}
