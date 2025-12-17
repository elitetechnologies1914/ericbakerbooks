// app/blogs/testimonials-what-readers-are-saying/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

import BlogHero1 from "@/public/images/blog1.webp";

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

export default function TestimonialsPostPage() {
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
            Testimonials: What Readers Are Saying About Eric Baker’s Work
          </h1>
        </header>

        <figure className="mb-6 overflow-hidden rounded-xl bg-slate-100 shadow-md">
          <Image
            src={BlogHero1}
            alt="Readers holding books with glowing reviews around an open book"
            className="h-auto w-full object-cover"
            priority
          />
        </figure>

        <p className="mb-10 text-sm text-slate-700">
          As <em>AJ Washington and the Brotherhood of the All-Seeing Eye</em>{" "}
          gains traction, readers have begun to share their thoughts and
          experiences with Eric Baker&apos;s debut novel. The book has
          resonated with many, particularly those who relate to AJ&apos;s
          journey.
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
              href="mailto:?subject=Testimonials%20-%20Eric%20Baker"
            >
              <Mail className="h-4 w-4" />
            </SocialIconButton>
          </div>
        </section>

        <hr className="mb-8 border-slate-200" />

        <article className="prose prose-sm max-w-none text-slate-800 prose-em:text-slate-900 prose-strong:text-slate-900">
          <p>
            In <em>AJ Washington and the Brotherhood of the All-Seeing Eye</em>{" "}
            gains traction, readers have begun to share their thoughts and
            experiences with Eric Baker&apos;s debut novel. The book has
            resonated with many, particularly those who see their own
            challenges in AJ&apos;s journey.
          </p>

          <p>
            One reader described the book as{" "}
            <strong>&quot;a captivating read for all ages&quot;</strong>,
            praising its blend of heartfelt character moments and thrilling
            mythological twists. The way Eric weaves ancient Egyptian lore into
            a modern story has left a lasting impression on many, who appreciate
            how the novel balances action with emotional depth.
          </p>

          <p>
            Another reader, Sophia Anderson, shared,{" "}
            <em>
              &quot;Eric&apos;s storytelling transports you to another world
              while reminding you of the struggles we face every day. AJ&apos;s
              journey is both magical and deeply personal.&quot;
            </em>{" "}
            For her, AJ&apos;s struggle to understand his identity mirrors the
            journey many young people face as they navigate trauma, loss, and
            self-discovery.
          </p>

          <p>
            Kyle Roberts, a DVM and avid reader, commented,{" "}
            <em>
              &quot;The blend of ancient mythology and modern challenges makes
              this book a compelling read for all ages. Eric has a gift for
              creating relatable characters that inspire.&quot;
            </em>{" "}
            His words echo the sentiments of many readers who have connected
            with AJ, Jamal, Divia and the rest of the cast.
          </p>

          <p>
            These testimonials highlight the impact of Eric H. Baker&apos;s
            writing, showcasing his ability to connect with readers and bring
            meaningful stories to life. As his audience continues to grow,
            Eric&apos;s work is set to inspire even more young readers on their
            own paths of healing, courage, and self-discovery.
          </p>
        </article>
      </div>
    </main>
  );
}
