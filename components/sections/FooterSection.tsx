"use client"

import { motion } from "framer-motion"
import { Logo } from "../ui/Logo"

/* ── SVG Social Icons ────────────────────────────────────────── */
const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
)

const YouTubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

/* ── Footer Section ─────────────────────────────────────────── */
export function FooterSection() {
  const quickLinks = [
    { label: "The Hero Group", href: "#" },
    { label: "Rockman Industries", href: "#" },
    { label: "Careers", href: "#" },
    { label: "CSR", href: "#" },
  ]

  const products = [
    { label: "Aluminium Die Casting", href: "#" },
    { label: "Alloy Wheels", href: "#" },
    { label: "Auto Chain Division", href: "#" },
    { label: "Carbon Composites", href: "#" },
    { label: "After Market Division", href: "#" },
    { label: "Industrial Chain Division", href: "#" },
  ]

  const socials = [
    { icon: <LinkedInIcon />, href: "#", label: "LinkedIn" },
    { icon: <FacebookIcon />, href: "#", label: "Facebook" },
    { icon: <InstagramIcon />, href: "#", label: "Instagram" },
    { icon: <YouTubeIcon />, href: "#", label: "YouTube" },
    { icon: <XIcon />, href: "#", label: "X (Twitter)" },
  ]

  return (
    <footer className="relative bg-background pt-32 pb-12 overflow-hidden border-t border-accent-metal/20">
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-accent-orange/5 rounded-t-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* ── Logo & Tagline ──────────────────────────────────── */}
        <div className="flex flex-col items-center justify-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-64 h-16 md:w-[400px] md:h-[100px] lg:w-[480px] lg:h-[120px]"
          >
            <Logo />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 text-accent-metal tracking-[0.2em] uppercase text-sm md:text-base"
          >
            Engineering The Future Since 1960
          </motion.p>
        </div>

        {/* ── 4-Column Grid ───────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-12 border-t border-accent-metal/10">
          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-foreground font-semibold uppercase tracking-[0.2em] text-xs mb-3">
              Quick Links
            </h4>
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted text-sm hover:text-accent-orange transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Products */}
          <div className="flex flex-col gap-3">
            <h4 className="text-foreground font-semibold uppercase tracking-[0.2em] text-xs mb-3">
              Products
            </h4>
            {products.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted text-sm hover:text-accent-orange transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact Us */}
          <div className="flex flex-col gap-3">
            <h4 className="text-foreground font-semibold uppercase tracking-[0.2em] text-xs mb-3">
              Contact Us
            </h4>
            <p className="text-foreground font-semibold text-sm">Rockman Industries Ltd.</p>
            <p className="text-muted text-sm leading-relaxed">
              Rockman Industries Ltd 9th Floor,
              <br />Unit 3&4, Emaar Capital Tower – 2
              <br />Sec. 26, Sikanderpur Ghosi, M G
              <br />Road, Gurugram – 122002
            </p>
            <p className="text-muted text-sm">
              Phone:{" "}
              <a href="tel:+911244707700" className="hover:text-accent-orange transition-colors duration-300">
                +91 1244707700
              </a>
            </p>
            <p className="text-muted text-sm">
              Email:{" "}
              <a href="mailto:corporate@rockman.in" className="hover:text-accent-orange transition-colors duration-300">
                corporate@rockman.in
              </a>
            </p>
          </div>

          {/* Registered Office */}
          <div className="flex flex-col gap-3">
            <h4 className="text-foreground font-semibold uppercase tracking-[0.2em] text-xs mb-3">
              Registered Office
            </h4>
            <p className="text-foreground font-semibold text-sm">Rockman Industries Ltd.</p>
            <p className="text-muted text-sm leading-relaxed">
              A -7, Focal Point, Phase V,
              <br />Ludhiana, Punjab-141010.
            </p>
          </div>
        </div>

        {/* ── Social Icons Row ────────────────────────────────── */}
        <div className="flex items-center justify-center gap-4 py-8 border-t border-accent-metal/10">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-accent-metal/20 text-muted
                         hover:text-accent-orange hover:border-accent-orange/50 hover:bg-accent-orange/5
                         transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* ── Bottom Bar ──────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-accent-metal/10 text-xs text-muted/60">
          <p>© {new Date().getFullYear()} Rockman Industries. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>

        {/* SITE CREDITS */}
        <div className="mt-5 flex justify-end">
          <div className="inline-flex items-center gap-2 rounded-lg border border-foreground/15 bg-foreground/5 px-3 py-2 transition-all duration-300 hover:bg-foreground/10">

            <a
              href="https://fabulousmedia.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-90 hover:opacity-100 transition-opacity"
              aria-label="FabulousMedia"
            >
              <img
                src="/fabulous-logo.png"
                alt="FabulousMedia"
                className="h-3 w-auto fab-logo-dark"
              />
              <img
                src="/fabulous-logo-light-mode.png"
                alt="FabulousMedia"
                className="h-3 w-auto fab-logo-light"
              />
            </a>

            <span className="h-3 w-px bg-foreground/20" />

            <a
              href="https://gocommercially.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-90 hover:opacity-100 transition-opacity"
              aria-label="GoCommercially"
            >
              <img
                src="/go_tm logo white.png"
                alt="GoCommercially"
                className="h-3 w-auto gc-logo-dark"
              />
              <img
                src="/go_tm logo black.png"
                alt="GoCommercially"
                className="h-3 w-auto gc-logo-light"
              />
            </a>

          </div>
        </div>
      </div>
    </footer>
  )
}
