import { CommandMenu } from "./command-menu";
import { DrawSignature } from "./ui/draw-signature";
import { RESUME_DATA } from "@/data/resume-data";

export const Footer = () => {
  return (
    <footer className="mb-16">
      <DrawSignature />
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
          ({ verification, abbreviation }) => ({
            verification,
            abbreviation,
          }),
        )}
      />
    </footer>
  );
};
