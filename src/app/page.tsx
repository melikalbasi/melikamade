import AboutCard from '@/components/AboutCard';
import LargeNav from '@/components/LargeNav';

export default function Home() {
  return (
    <div className="combined-layout flex flex-col lg:flex-row">
      <AboutCard title="MELIKA KALBASI" subtitle="currently based in London." />
      <LargeNav />
    </div>
  );
}
