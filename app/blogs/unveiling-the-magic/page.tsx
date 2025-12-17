// app/blogs/unveiling-the-magic/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

import BlogHero2 from "@/public/images/blog2.webp";

export default function UnveilingTheMagicPostPage() {
  return (
    <main className="bg-slate-50 pb-20 pt-28">
      <div className="mx-auto max-w-4xl px-6">
        {/* (Optional) breadcrumb back to blog list */}
        <div className="mb-6 text-xs text-slate-500">
          <Link
            href="/blogs"
            className="font-medium text-indigo-600 hover:text-indigo-700"
          >
            ← Back to Latest News & Blogs
          </Link>
        </div>

        {/* Title */}
        <header className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            Blog
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
            Unveiling the Magic: The Inspiration Behind AJ Washington
          </h1>
        </header>

        {/* Hero image card */}
        <figure className="mb-6 overflow-hidden rounded-xl bg-slate-100 shadow-md">
          <Image
            src={BlogHero2}
            alt="AJ Washington writing at his desk, imagining a magical figure"
            className="h-auto w-full object-cover"
            priority
          />
        </figure>

        {/* Short intro (caption style) */}
        <p className="mb-10 text-sm text-slate-700">
          In <em>AJ Washington and the Brotherhood of the All-Seeing Eye</em>,
          Eric Baker crafts a tale that merges ancient mythology with
          contemporary challenges.
        </p>

        {/* Divider */}
        <hr className="mb-6 border-slate-200" />

        {/* Share row */}
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
              href="mailto:?subject=Unveiling%20the%20Magic%20-%20AJ%20Washington"
            >
              <Mail className="h-4 w-4" />
            </SocialIconButton>
          </div>
        </section>

        <hr className="mb-8 border-slate-200" />

        {/* Article body */}
        <article className="prose prose-sm max-w-none text-slate-800 prose-headings:text-slate-900 prose-strong:text-slate-900 prose-em:text-slate-900">
          <p>
            In <em>AJ Washington and the Brotherhood of the All-Seeing Eye</em>,
            Eric Baker crafts a tale that merges ancient mythology with
            contemporary challenges. The story follows AJ, a foster child, as he
            discovers his true identity amidst the chaos of his life. Eric draws
            on his experiences with youth in the foster care system to create a
            narrative that is both authentic and magical.
          </p>

          <p>
            The novel introduces readers to a world where Egyptian gods come to
            life, and AJ must learn to harness their power to confront the
            demons of his past. Eric&apos;s meticulous research into Egyptian
            mythology enriches the story, adding layers of depth to AJ&apos;s
            journey.
          </p>

          <p>
            As AJ faces external monsters, he also battles internal fears,
            making this not just a fantasy adventure but a profound exploration
            of courage and growth. Through AJ&apos;s journey, readers are
            invited to reflect on their own struggles and the hidden strengths
            that lie within them.
          </p>

          <p>
            Eric&apos;s ability to blend heart-pounding action with emotional
            resonance is what sets <em>AJ Washington and the Brotherhood of the
            All-Seeing Eye</em> apart. It&apos;s a story that lingers long after
            the final page, reminding readers that even in the darkest moments,
            there is always a spark of light waiting to be found.
          </p>
        </article>
      </div>
    </main>
  );
}

/**
 * Small helper for circular social buttons
 */
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
