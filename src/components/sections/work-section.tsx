import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Section } from "../ui/section";
import { RESUME_DATA } from "@/data/resume-data";
import { clsx } from "clsx";
import Image from "next/image";

export const WorkSection = () => {
  return (
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
                      className={clsx(
                        work.logo.shouldInvertOnDarkMode &&
                          "filter dark:invert",
                      )}
                      width={16}
                      height={16}
                      src={work.logo.src}
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

              <h4 className="font-mono text-sm leading-none">{work.title}</h4>
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
  );
};
