import Hero from '@/components/home/Hero';
import StatsRow from '@/components/home/StatsRow';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import InternshipHighlight from '@/components/home/InternshipHighlight';
import TechArsenal from '@/components/home/TechArsenal';
import AchievementsGrid from '@/components/home/AchievementsGrid';
import BookTeaser from '@/components/home/BookTeaser';
import ContactCTA from '@/components/home/ContactCTA';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <StatsRow />
      <FeaturedProjects />
      <InternshipHighlight />
      <TechArsenal />
      <AchievementsGrid />
      <BookTeaser />
      <ContactCTA />
    </div>
  );
}
