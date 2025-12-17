// components/Footer.tsx
"use client";

import { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  type LucideIcon,
} from "lucide-react";

import {
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcPaypal,
  FaCcApplePay,
} from "react-icons/fa";
import type { IconType } from "react-icons";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Eric H. Baker", href: "/about-eric-h-baker" },
  { label: "About Book", href: "/about-book" },
  { label: "Store", href: "/store" },
  { label: "Blogs", href: "/blogs" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact us", href: "/contact-us" },
];

type SocialLink = {
  label: string;
  href: string;
  Icon: LucideIcon;
};

const socialLinks: SocialLink[] = [
  { label: "Facebook", href: "#", Icon: Facebook },
  { label: "Twitter / X", href: "#", Icon: Twitter },
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "YouTube", href: "#", Icon: Youtube },
  { label: "LinkedIn", href: "#", Icon: Linkedin },
];

type PaymentIcon = {
  label: string;
  Icon: IconType;
  colorClass: string;
};

const paymentIcons: PaymentIcon[] = [
  { label: "Visa", Icon: FaCcVisa, colorClass: "text-[#1A1F71]" },
  { label: "Mastercard", Icon: FaCcMastercard, colorClass: "text-[#EB001B]" },
  { label: "American Express", Icon: FaCcAmex, colorClass: "text-[#016FD0]" },
  { label: "PayPal", Icon: FaCcPaypal, colorClass: "text-[#003087]" },
  { label: "Apple Pay", Icon: FaCcApplePay, colorClass: "text-black" },
];

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-slate-950 text-slate-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Top band */}
      <div className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 pt-14 pb-24">
          <motion.h2
            className="text-center text-3xl font-semibold tracking-[0.25em] text-slate-100"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            ERIC H. <span className="font-bold">BAKER</span>
          </motion.h2>

          <motion.div
            className="mx-auto mt-10 max-w-4xl rounded-xl bg-slate-800/90 px-8 py-10 shadow-[0_18px_60px_rgba(0,0,0,0.5)] backdrop-blur"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Stay in the loop
                </p>
                <p className="mt-2 text-3xl font-semibold leading-snug text-slate-50">
                  Subscribe
                  <br />
                  <span className="font-bold">Newsletters</span>
                </p>
                <p className="mt-3 max-w-xs text-sm text-slate-400">
                  Be the first to hear about new releases, events, and special
                  offers from Eric H. Baker.
                </p>
              </div>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="w-full md:w-[60%]"
              >
                <div className="flex overflow-hidden rounded-full border border-slate-600 bg-slate-900">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent px-5 py-3 text-sm text-slate-100 outline-none placeholder:text-slate-500"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-gradient-to-r from-indigo-500 to-sky-500 px-6 text-sm font-semibold uppercase tracking-wide text-white transition hover:brightness-110"
                  >
                    Subscribe
                  </motion.button>
                </div>
                <p className="mt-2 text-[0.7rem] text-slate-500">
                  No spam. Only book news and occasional surprises.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Middle strip */}
      <div className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-8 md:flex-row md:justify-between">
          <motion.nav
            className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-slate-300 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </motion.nav>

          <motion.div
            className="flex gap-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            {socialLinks.map(({ label, href, Icon }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
              >
                <motion.div
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-600 bg-slate-900 text-slate-200 shadow-sm transition hover:border-transparent hover:bg-slate-100 hover:text-slate-900"
                >
                  <Icon className="h-4 w-4" />
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-slate-900">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-4 text-xs text-slate-400 md:flex-row">
          <p className="text-center md:text-left">
            © Copyrights {currentYear}{" "}
            <span className="font-semibold text-slate-100">
              Eric H. Baker
            </span>
            . All Rights Reserved
          </p>

          <motion.div
            className="flex flex-wrap justify-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            {paymentIcons.map(({ label, Icon, colorClass }) => (
              <motion.div
                key={label}
                whileHover={{ y: -2, scale: 1.03 }}
                className="flex items-center rounded-md bg-slate-100 px-2 py-1 shadow-sm"
              >
                <Icon className={`h-6 w-6 ${colorClass}`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
