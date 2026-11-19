/**
 * About
 * -----
 * Dashboard-style section:
 *   Row 1: career timeline (wide card) + two gauges (uptime, first-contact
 *          resolution).
 *   Row 2: short bio + "tools by area" bar chart (from the skills list).
 * Text and data: content.about (heading, stats, timeline, bio) and
 * content.skills.groups. Charts live in components/Charts.tsx.
 */
import { content } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { BarList, CareerTimeline, DashCard, Gauge } from "./Charts";

export default function About() {
  const { about, skills } = content;
  const stat = (label: string) => about.stats.find((s) => s.label.includes(label));
  const uptime = stat("uptime");
  const fcr = stat("first-contact");
  const years = stat("enterprise");
  const devices = stat("workstations");

  return (
    <section id="about" className="container-page py-20 sm:py-28">
      <SectionHeading title={about.heading} kicker={about.kicker} />

      {/* Row 1: timeline + gauges */}
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        <Reveal className="lg:col-span-2">
          <DashCard
            title="Career timeline"
            note={`${years?.value ?? "6 yrs"} in enterprise IT · ${devices?.value ?? "80+"} workstations deployed`}
            className="h-full"
          >
            <CareerTimeline items={about.timeline} from={2019} to={2027} now="2026-11" />
          </DashCard>
        </Reveal>
        <div className="grid gap-5">
          {uptime ? (
            <Reveal delay={0.05}>
              <DashCard title="Uptime">
                <Gauge value={parseFloat(uptime.value)} display={uptime.value} label={uptime.label} />
              </DashCard>
            </Reveal>
          ) : null}
          {fcr ? (
            <Reveal delay={0.1}>
              <DashCard title="Support quality">
                <Gauge value={parseFloat(fcr.value)} display={fcr.value} label={fcr.label} />
              </DashCard>
            </Reveal>
          ) : null}
        </div>
      </div>

      {/* Row 2: bio + tools by area */}
      <div className="mt-14 grid items-start gap-10 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          {about.bio.map((para, i) => (
            <p
              key={i}
              className={`text-lg leading-relaxed text-slate-700 dark:text-slate-300 ${i ? "mt-4" : ""}`}
            >
              {para}
            </p>
          ))}
        </Reveal>
        <Reveal delay={0.1}>
          <div id="skills">
            <DashCard title="Tools I've used hands-on, by area">
              <BarList
                unit="tools"
                rows={skills.groups.map((g) => ({
                  label: g.category,
                  value: g.items.length,
                  detail: g.items.join(" · "),
                }))}
              />
            </DashCard>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
