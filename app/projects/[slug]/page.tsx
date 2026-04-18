import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";
import { projects } from "@/lib/data";

// Per-index gradient backgrounds
const cardGradients = [
  "from-violet-100 via-blue-50 to-indigo-100",
  "from-amber-100 via-orange-50 to-yellow-100",
  "from-emerald-100 via-teal-50 to-green-100",
  "from-pink-100 via-rose-50 to-red-100",
  "from-sky-100 via-cyan-50 to-blue-100",
  "from-purple-100 via-fuchsia-50 to-violet-100",
];

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return { title: project?.title ?? "Project" };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const gradient = cardGradients[projectIndex % cardGradients.length];

  return (
    <>
      <Navbar />
      <main className="bg-bg">
        {/* ── Hero ────────────────────────────────────────────────────── */}
        <section className="pt-32 pb-12">
          <div className="container-main">
            {/* Breadcrumb */}
            <p className="text-xs text-fg-muted mb-6">
              <Link
                href="/projects"
                className="hover:text-fg transition-colors"
                style={{ textDecoration: "none" }}
              >
                projects
              </Link>
              {" → "}
              <span>{project.title}</span>
            </p>

            {project.image && (
              <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-md mb-6">
                <Image src={project.image} alt={project.title} width={64} height={64} className="object-cover w-full h-full" />
              </div>
            )}
            <h1 className="section-heading text-fg">{project.title}</h1>
            <p className="text-fg-muted text-lg mt-3 max-w-xl leading-relaxed">
              {project.tagline}
            </p>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-3 mt-6">
              <span className="tag-chip">{project.year}</span>
              <span className="tag-chip">{project.category}</span>
              {project.github && (
                <Button variant="outline" href={project.github} target="_blank">
                  GitHub ↗
                </Button>
              )}
              {project.live && (
                <Button variant="primary" href={project.live} target="_blank">
                  live site ↗
                </Button>
              )}
            </div>
          </div>
        </section>

        {/* ── Case Study ──────────────────────────────────────────────── */}
        <section className="section-pad">
          <div className="container-main">
            {/* Hero image area */}
            <div
              className={`w-full aspect-video bg-gradient-to-br ${gradient} rounded-2xl overflow-hidden mb-12 flex items-center justify-center`}
            >
              <span className="font-display font-medium text-8xl text-fg/10 select-none">
                {project.title[0]}
              </span>
            </div>

            {/* Problem / Approach / Outcome */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { label: "problem", content: project.caseStudy.problem },
                { label: "approach", content: project.caseStudy.approach },
                { label: "outcome", content: project.caseStudy.outcome },
              ].map(({ label, content }) => (
                <div key={label} className="card-base bg-card p-6">
                  <p className="eyebrow mb-3">{label}</p>
                  <p className="text-sm text-fg-muted leading-relaxed">{content}</p>
                </div>
              ))}
            </div>

            {/* Long description */}
            <p className="text-fg-muted leading-relaxed text-base max-w-2xl mb-10">
              {project.description}
            </p>

            {/* Highlights */}
            <div className="h-divider mt-8 pt-8">
              <p className="eyebrow mb-4">highlights</p>
              <ul className="flex flex-col gap-3">
                {project.caseStudy.highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-fg-muted">
                    <span className="text-fg font-medium mt-0.5 flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech stack */}
            <div className="mt-10">
              <p className="eyebrow mb-4">tech stack</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="tag-chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Back link */}
            <div className="mt-12">
              <Button variant="outline" href="/projects">
                ← all projects
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
