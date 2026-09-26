import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

function ProjectsSection() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Things I have built." />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="2026"
          title="Ocean View Residences"
          description="A web project for a residential development website with property information and an enquiry flow."
          tech="Next.js · Tailwind CSS"
          link="https://oceanviewresidences.ph/"
        />

        <ProjectCard
          year="2026"
          title="CSS Guidelines"
          description="A web project that allows Computer Students' Society members to view the CSS Guidelines and other related information."
          tech="Typescript · Javascript · CSS"
          link="https://css-guidelines.vercel.app/"
        />
        <ProjectCard
          year="2025"
          title="Kababalaghan"
          description="A turn based text game that allows players to play as philippine mythical creatures and battle against each other."
          tech="Java"
          link="https://github.com/elleouvre/Kababalaghan_v3"
        />
          <ProjectCard
          year="2025"
          title="NHEPS Inventory Management System"
          description="A web-based inventory system project focused on managing items and database records."
          tech="PHP · MySQL"
          link="https://nheps.ct.ws/login.php"
        />
      </div>
    </section>
  );
}

export default ProjectsSection;