import { ProjectCard } from "../project-card";
import { Section } from "../ui/section";
import { RESUME_DATA } from "@/data/resume-data";

export const ProjectSection = () => {
  return (
    <Section className="print-force-new-page">
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
  );
};
