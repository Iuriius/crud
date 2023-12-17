import TopicsList from "@/components/TopicsList";
import Navbar from "@/components/Navbar";

export default function MainPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <Navbar />
      </div>
      <TopicsList />
    </div>
  );
}
