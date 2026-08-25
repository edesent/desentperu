import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ScheduleForm } from "@/components/ScheduleForm";
import { VideoFeature } from "@/components/VideoFeature";

export const metadata: Metadata = {
  title: "Have Us Present to Your Church",
  description:
    "Nash and Suzanne Desent will present the work in Peru to your church by live video from the field — or in person during their September 2026 stateside trip. No travel cost, no honorarium expected.",
  alternates: { canonical: "/schedule" },
};

const steps = [
  {
    n: "01",
    h: "You tell us a time",
    b: "A Sunday service, a midweek meeting, a missions conference night, or just a call with your missions committee. Fifteen minutes or forty-five — your call.",
  },
  {
    n: "02",
    h: "We send a link and a test",
    b: "We will test the connection with your media person beforehand so nothing fails in front of your congregation. We can send the video and slides in advance as a backup.",
  },
  {
    n: "03",
    h: "We present live from Peru",
    b: "The works, the fields, the tent, the scriptures — and we stay on for questions from your people afterward.",
  },
  {
    n: "04",
    h: "You decide, later",
    b: "There is no ask at the end and no pressure. If your church later wants to take us on, that conversation can happen on your timing.",
  },
];

export default function SchedulePage() {
  return (
    <>
      <PageHero
        eyebrow="For pastors"
        title={<>Let us bring the field<br />into your church.</>}
      >
        <p>
          We are on the field in Peru, so most of the year we cannot stand in
          your church. But we can join you live by video from the works
          themselves — and there is no travel cost, no lodging, and no
          honorarium expected.
        </p>
      </PageHero>

      {/* The offer, plus the video as a preview of what they'd get. */}
      <section className="section-pad">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <p className="eyebrow">A virtual presentation</p>
            <h2 className="display-md mt-4">
              What your church would see
            </h2>
            <span className="flag-rule mt-6" />
            <div className="prose-field lede mt-7">
              <p>
                This three-minute video is the short version. A live
                presentation goes further: we walk your people through each
                work, show them what their missions dollars have already built
                in Tarapoto, and answer whatever they want to ask.
              </p>
              <p className="!mb-0">
                We are also planning a month of stateside meetings in{" "}
                <strong className="font-semibold text-ink">
                  September 2026
                </strong>
                . If you would rather have us in person, say so on the form and
                we will try to route the trip your way.
              </p>
            </div>
            <div className="mt-9">
              <VideoFeature label="Watch the short version" duration="3 min" />
            </div>
          </div>

          <div>
            <ol className="space-y-8">
              {steps.map((s) => (
                <li key={s.n} className="flex gap-5">
                  <span className="font-serif text-[1.7rem] leading-none text-peru/35">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="display-sm">{s.h}</h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-body">
                      {s.b}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-10 border-l-2 border-peru bg-cream px-5 py-4 font-serif text-[1.1rem] italic leading-snug text-ink">
              “I will know you read this if you schedule me.”
              <span className="mt-2 block font-sans text-[0.8rem] not-italic tracking-wide text-muted">
                — from the May 2026 report letter
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* The form. */}
      <section
        id="form"
        className="scroll-mt-24 border-t border-hairline bg-cream section-pad"
      >
        <div className="shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="eyebrow">Get in touch</p>
            <h2 className="display-md mt-4">Set a time</h2>
            <span className="flag-rule mt-6" />
            <p className="lede mt-6">
              Tell us who you are and roughly when suits you. We will write back
              to arrange it.
            </p>
            <p className="mt-6 text-[0.95rem] leading-relaxed text-muted">
              Not ready for a presentation? You can{" "}
              <Link
                href="/updates"
                className="font-semibold text-peru underline decoration-peru/30 underline-offset-4 hover:decoration-peru"
              >
                read the latest field report
              </Link>{" "}
              or{" "}
              <Link
                href="/the-work"
                className="font-semibold text-peru underline decoration-peru/30 underline-offset-4 hover:decoration-peru"
              >
                look through the works
              </Link>{" "}
              first.
            </p>
          </div>
          <ScheduleForm />
        </div>
      </section>
    </>
  );
}
