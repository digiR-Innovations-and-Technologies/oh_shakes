import Hero from "@/components/Home/Hero";
import Announcement from "@/components/ui/Announcement";
import Navbar from "@/components/ui/Navbar";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
