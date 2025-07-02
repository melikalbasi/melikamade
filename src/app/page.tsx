import AboutCard from '@/components/AboutCard';
import LargeNav from '@/components/LargeNav';

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-stretch h-screen p-4 md:p-10 gap-10">
      {/* AboutCard on top (mobile), left (desktop) */}
      <div className="flex-1 flex items-center justify-center md:justify-start">
        <AboutCard />
      </div>

      {/* LargeNav below (mobile), right (desktop) */}
      <div className="flex-1 flex items-center justify-center md:justify-end">
        <LargeNav />
      </div>
    </div>
  );
}
