// components/AvailableAtSection.tsx
import Link from "next/link";
import Image from "next/image";
import type { FC } from "react";

type Variant = "home" | "full";

type Store = {
  id: string;
  name: string;
  url: string;
  imageSrc: string;
};

const ALL_STORES: Store[] = [
  {
    id: "amazon",
    name: "Amazon",
    url: "https://www.amazon.com/J-Washington-Brotherhood-All-Seeing/dp/B0DH545ZQ3",
    imageSrc: "/images/amazon.png",
  },
  {
    id: "barnesandnoble",
    name: "Barnes & Noble",
    url: "https://www.barnesandnoble.com/w/aj-washington-and-the-brotherhood-of-the-all-seeing-eye-eric-baker/1147626914",
    imageSrc: "/images/barnesandnoble.png",
  },
  {
    id: "bol",
    name: "Bol.com",
    url: "https://www.bol.com/nl/nl/p/a-j-washington-and-the-brotherhood-of-the-all-seeing-eye/9300000233336865/",
    imageSrc: "/images/bol.png",
  },
  {
    id: "goodreads",
    name: "Goodreads",
    url: "https://www.goodreads.com/book/show/219230877-a-j-washington-and-the-brotherhood-of-the-all-seeing-eye#?ref=nav_brws",
    imageSrc: "/images/goodreads.png",
  },
  {
    id: "googlebooks",
    name: "Google Books",
    url: "https://books.google.com.pk/books/about/AJ_Washington_and_the_Brotherhood_of_the.html?id=r_u10AEACAAJ&redir_esc=y",
    imageSrc: "/images/google.png",
  },
  {
    id: "thriftbooks",
    name: "ThriftBooks",
    url: "https://www.thriftbooks.com/w/aj-washington-and-the-brotherhood-of-the-all-seeing-eye_eric-baker/55962664/",
    imageSrc: "/images/thriftbooks.png",
  },
];

interface AvailableAtSectionProps {
  /**
   * "home"  = show only the first 3 (Amazon, B&N, Bol.com)
   * "full"  = show all platforms
   */
  variant?: Variant;
}

const AvailableAtSection: FC<AvailableAtSectionProps> = ({ variant = "home" }) => {
  const stores = variant === "home" ? ALL_STORES.slice(0, 3) : ALL_STORES;

  const layoutClass =
    variant === "home"
      ? // Home page: simple 3-column grid
        "grid w-full gap-4 sm:grid-cols-3 lg:w-auto"
      : // About-book page: flex row that wraps nicely
        "flex w-full flex-wrap gap-4 lg:justify-start";

  return (
    <section className="border-b border-slate-200 bg-slate-50 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Left copy */}
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            Available At
          </p>
          <h2 className="mt-2 text-xl font-semibold text-slate-900">
            Where to find{" "}
            <span className="font-bold">
              AJ Washington and the Brotherhood of the All Seeing Eye
            </span>
          </h2>
          {variant === "home" && (
            <p className="mt-2 max-w-md text-xs text-slate-600">
              Also available on additional retailers including Goodreads,
              Google Books, and ThriftBooks.
            </p>
          )}
        </div>

        {/* Logos */}
        <div className={layoutClass}>
          {stores.map((store) => (
            <Link
              key={store.id}
              href={store.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${store.name} listing`}
              className="group relative flex min-w-[180px] items-center justify-start gap-3 rounded-md border border-slate-200 bg-white px-4 py-3 text-left shadow-sm transition hover:-translate-y-1 hover:border-indigo-400 hover:shadow-md"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50">
                <Image
                  src={store.imageSrc}
                  alt={`${store.name} logo`}
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <span className="text-xs font-semibold text-slate-800">
                {store.name}
              </span>

              <span className="pointer-events-none absolute inset-0 rounded-md border border-transparent transition group-hover:border-indigo-300 group-hover:bg-indigo-50/40" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvailableAtSection;
