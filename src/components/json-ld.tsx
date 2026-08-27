import { RESUME_DATA } from "@/data/resume-data";

const currentRole = RESUME_DATA.work.find((job) => job.end === "now");

// Both degrees are from the same institution; list it once.
const uniqueSchools = RESUME_DATA.education.filter(
  (entry, index, all) =>
    all.findIndex((other) => other.school === entry.school) === index,
);

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: RESUME_DATA.name,
  jobTitle: currentRole?.title,
  description: RESUME_DATA.summary,
  url: RESUME_DATA.personalWebsiteUrl,
  image: RESUME_DATA.avatarUrl,
  email: `mailto:${RESUME_DATA.contact.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Berlin",
    addressCountry: "DE",
  },
  sameAs: RESUME_DATA.contact.social.map((profile) => profile.url),
  knowsAbout: RESUME_DATA.skills.flatMap((group) => group.items),
  worksFor: currentRole && {
    "@type": "Organization",
    name: currentRole.company,
    url: currentRole.link,
  },
  alumniOf: uniqueSchools.map((school) => ({
    "@type": "CollegeOrUniversity",
    name: school.school,
    url: school.url,
  })),
  hasCredential: RESUME_DATA.certificates.map((certificate) => ({
    "@type": "EducationalOccupationalCredential",
    name: certificate.title,
    credentialCategory: "certificate",
    url: certificate.url,
    recognizedBy: {
      "@type": "Organization",
      name: certificate.institution,
    },
  })),
};

export const JsonLd = () => {
  return (
    <script
      type="application/ld+json"
      // Escaping "<" prevents a "</script>" sequence in the data from breaking
      // out of the script element. The data is ours, but the guard is cheap.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
      }}
    />
  );
};
