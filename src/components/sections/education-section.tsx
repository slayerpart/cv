import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Section } from "../ui/section";
import { RESUME_DATA } from "@/data/resume-data";
import Image from "next/image";

export const EducationSection = () => {
  return (
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
  );
};
