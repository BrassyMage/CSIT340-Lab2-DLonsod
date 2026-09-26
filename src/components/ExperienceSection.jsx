import SectionHeading from "./SectionHeading";
import TimelineItem from "./TimelineItem";

function ExperienceSection() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Experience" subtitle="Where I have learned and worked." />
      <ol className="mt-8 space-y-8 border-l border-stone-200">
        <TimelineItem
          period="2024 – Present"
          title="BS Information Technology"
          place="Cebu Institute of Technology – University"
          description="In a constant state of learning, and worrying about the future."
        />
        <TimelineItem
          period="2022 – 2024"
          title="Senior High School, ICT Strand"
          place="University of Cebu – Talisay and Pardo Campus"
          description="Built my foundation in information and communications technology and developed an interest in computers."
        />
      </ol>
    </section>
  );
}

export default ExperienceSection;