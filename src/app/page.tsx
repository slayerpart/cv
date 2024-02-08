import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";
import Image from "next/image";
import { Certificate } from "crypto";
import { DrawSignature } from "@/components/ui/draw-signature";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
  icons: {
    icon: [
      {
        url: "/static/favicon.ico?v=4",
        // `sizes="any"` is to fix Chrome bug
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
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 pb-24 print:p-12 md:p-16 md:pb-32">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
              {RESUME_DATA.about}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                <GlobeIcon className="size-3" />
                {RESUME_DATA.location}
              </a>
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              {RESUME_DATA.contact.email ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <MailIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`tel:${RESUME_DATA.contact.tel}`}>
                    <PhoneIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={social.url}>
                    <social.icon className="size-4" />
                  </a>
                </Button>
              ))}
            </div>
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
              {RESUME_DATA.contact.email ? (
                <a href={`mailto:${RESUME_DATA.contact.email}`}>
                  <span className="underline">{RESUME_DATA.contact.email}</span>
                </a>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <a href={`tel:${RESUME_DATA.contact.tel}`}>
                  <span className="underline">{RESUME_DATA.contact.tel}</span>
                </a>
              ) : null}
            </div>
          </div>

          <Avatar className="size-28">
            <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
        </div>
        <Section>
          <h2 className="text-xl font-bold">About</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            {RESUME_DATA.summary}
          </p>
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Work Experience</h2>
          {RESUME_DATA.work.map((work) => {
            return (
              <Card key={work.company}>
                <CardHeader>
                  <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 text-base">
                    <h3 className="inline-flex  items-center justify-start gap-x-1 font-semibold leading-none">
                      <a
                        title={work.company}
                        className="truncate py-0.5 hover:underline"
                        href={work.link}
                      >
                        {work.company}
                      </a>
                      {"logo" in work && (
                        <Image
                          width={16}
                          height={16}
                          src={work.logo}
                          alt={`${work.company} logo`}
                        />
                      )}

                      <span className="inline-flex gap-x-1">
                        {work.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <div className="shrink-0 text-sm tabular-nums text-gray-500">
                      {work.start} - {work.end}
                    </div>
                  </div>

                  <h4 className="font-mono text-sm leading-none">
                    {work.title}
                  </h4>
                </CardHeader>
                <CardContent className="mt-2 text-xs">
                  {work.description}
                  <div className="my-3 flex flex-wrap gap-1">
                    {work.technologies.map((technology) => {
                      return (
                        <Badge
                          className="text-xs"
                          variant="outline"
                          key={technology}
                        >
                          {technology}
                        </Badge>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Certificates</h2>
          {RESUME_DATA.certificates.map((certificate) => {
            return (
              <Card key={`${certificate.title}-${certificate.year}`}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 truncate font-semibold leading-none">
                      <a
                        className="truncate hover:underline"
                        title={certificate.title}
                        href={certificate.url}
                      >
                        {certificate.title}
                      </a>
                      <span className="inline-flex gap-x-1">
                        {certificate.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <div className="shrink-0 text-sm tabular-nums text-gray-500">
                      {certificate.year}
                    </div>
                  </div>

                  <h4 className="font-mono text-sm leading-none">
                    {certificate.institution}
                  </h4>
                </CardHeader>
                {"verification" in certificate && (
                  <CardContent className="mt-2 text-xs">
                    {certificate.verification.details}
                    <p>
                      <Button
                        className="mt-2"
                        variant="secondary"
                        size="xs"
                        asChild
                      >
                        <a
                          href={certificate.verification.url}
                          className="hover:underline"
                          target="_blank"
                        >
                          Verify
                        </a>
                      </Button>
                    </p>
                  </CardContent>
                )}
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Education</h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-start gap-x-1 font-semibold leading-none">
                      <a
                        href={education.url}
                        title={education.school}
                        className="truncate hover:underline"
                      >
                        {education.school}
                      </a>
                      {"logo" in education && (
                        <Image
                          width={16}
                          height={16}
                          src={education.logo}
                          alt={`${education.school} logo`}
                        />
                      )}
                    </h3>

                    <div className="text-sm tabular-nums text-gray-500">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2 flex flex-wrap justify-between gap-2">
                  {education.degree}
                  <Badge variant="secondary" className="align-middle text-xs">
                    {education.grade}
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </Section>
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

        <Section className="print-force-new-page scroll-mb-16">
          <h2 className="text-xl font-bold">Projects</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            {RESUME_DATA.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                  logo={project.logo}
                  active={project.active}
                />
              );
            })}
          </div>
        </Section>
        <Section className="flex scroll-mb-16 items-center justify-center p-8 print:hidden">
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
