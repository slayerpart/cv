import { CommandMenu } from "@/components/command-menu";
import {
  CertificateSection,
  EducationSection,
  HeaderSection,
  ProjectSection,
  WorkSection,
} from "@/components/sections";
import { Badge } from "@/components/ui/badge";
import { DrawSignature } from "@/components/ui/draw-signature";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";
import { Metadata } from "next";

export const metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
  icons: {
    icon: [
      {
        url: "/static/favicon.ico?v=4",
        sizes: "any",
      },
      {
        url: "/static/icon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/static/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/static/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: ["/static/apple-touch-icon.png?v=4"],
    shortcut: ["/static/apple-touch-icon.png"],
  },
  openGraph: {
    title: `${RESUME_DATA.name} | CV`,
    description: RESUME_DATA.about,
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: `Marvin Gorecki's CV`,
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
} satisfies Metadata;

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-background print:space-y-6">
        <HeaderSection />
        <Section>
          <h2 className="text-xl font-bold">About</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            {RESUME_DATA.summary}
          </p>
        </Section>
        <WorkSection />
        <CertificateSection />
        <EducationSection />
        <Section>
          <h2 className="text-xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.skills.map((skill) => {
              return (
                <Badge variant="secondary" key={skill}>
                  {skill}
                </Badge>
              );
            })}
          </div>
        </Section>
        <ProjectSection />
        <Section className="scroll-mb-16 lex items-center justify-center p-16 pb-32 print:hidden">
          <DrawSignature />
        </Section>
      </section>
      <CommandMenu
        links={[
          {
            url: RESUME_DATA.personalWebsiteUrl,
            title: "Personal Website",
          },
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
        certificates={RESUME_DATA.certificates.map(
          ({ verification, abbreviation }) => ({ verification, abbreviation }),
        )}
      />
    </main>
  );
}
