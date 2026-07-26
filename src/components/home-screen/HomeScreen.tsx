import HeroSection from "./HeroSection";
import ActionCard from "./ActionCard";


import { Users, LogIn } from "lucide-react";
import FooterIllustration from "./BottomIllustration";

export default function HomeScreen() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-violet-50 via-white to-white flex justify-center">

      {/* Mobile Container */}
      <div className="w-full max-w-md min-h-screen bg-white shadow-xl">

        {/* Hero */}
        <HeroSection />

        {/* Buttons */}
        <div className="px-6 mt-8 space-y-5">

          <ActionCard
            title="Create New Group"
            name="createGroup"
            subtitle="Create a new room and invite friends"
            icon={<Users size={28} />}
            color="purple"
            
          />

          <ActionCard
            name="joinExistingGroup"
            title="Join Existing Group"
            subtitle="Join using an invite code"
            icon={<LogIn size={28} />}
            color="white"
          />

        </div>

        {/* Bottom Illustration */}
        <FooterIllustration />

      </div>

    </main>
  );
}