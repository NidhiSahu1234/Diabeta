import Container from "../common/Container";
import { HeartPulse } from "lucide-react";
/**
 * Footer
 *
 * Site-wide footer: brand mark, quick links, resource links, and
 * social/contact links, with a copyright line. Link groups are stored
 * as arrays and rendered with map() so new links can be added without
 * touching the markup.
 */

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Prediction", href: "/prediction" },
];

const RESOURCE_LINKS = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

function GitHubIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.8 1.18 1.83 1.18 3.09 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.15 1.45-2.15 2.94v5.66H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/NidhiSahu1234",
    Icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/diabeta-ai",
    Icon: LinkedInIcon,
  },
  {
    label: "Email",
    href: "nidhisahu2906@gmail.com",
    Icon: EmailIcon,
  },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-slate-200 border-slate-100">
      <Container>
        <div className="py-12 lg:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <span className="text-xl font-extrabold text-slate-900 tracking-tight">
              <HeartPulse className="inline-block h-5 w-6 mr-1 text-teal-600" />
              Dia<span className="text-teal-600">Beta</span> AI
            </span>
            <p className="mt-3 text-sm text-slate-500 max-w-xs mx-auto sm:mx-0">
              AI-powered diabetes risk prediction, intelligent health insights,
              and personalized preventive healthcare guidance.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links" className="text-center sm:text-left">
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="
text-slate-600
transition-colors
duration-200
hover:text-teal-600
"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Resources */}
          <nav aria-label="Resources" className="text-center sm:text-left">
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">
              Resources
            </h3>
            <ul className="mt-4 space-y-3">
              {RESOURCE_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="
text-slate-600
transition-colors
duration-200
hover:text-teal-600
"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <div className="text-center sm:text-left">
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">
              Connect
            </h3>
            <ul className="mt-4 flex items-center justify-center sm:justify-start gap-3">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="
flex
h-12
w-12
items-center
justify-center
rounded-full
bg-teal-50
text-teal-600
transition-all
duration-300
hover:bg-teal-100
hover:scale-110
hover:shadow-md
"
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-slate-200 border-slate-100 py-6 text-center">
          <p className="text-sm text-slate-500">
            © {year} © 2026 DiaBeta AI Built with <HeartPulse /> using React,
            Flask & Machine Learning
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
