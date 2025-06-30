import BorderFrame from '@/components/BorderFrame';
import CustomCursor from '@/components/CustomCursor';

export default function EngineeringPage() {
  return (
    <BorderFrame>
      <CustomCursor />
      <div className="flex flex-col items-start justify-center h-screen px-10 lg:px-20">
        <h1 className="text-4xl font-bold uppercase font-serif">Engineering</h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed font-mono">
          Welcome to my engineering portfolio. Here you’ll find a collection of
          projects that showcase my front-end development skills, creative
          problem-solving, and experimentation with technology.
        </p>
        {/* Add project links or cards here later */}
      </div>
    </BorderFrame>
  );
}
