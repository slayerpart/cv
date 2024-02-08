import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Section } from "../ui/section";
import { RESUME_DATA } from "@/data/resume-data";

export const CertificateSection = () => {
  return (
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
  );
};
