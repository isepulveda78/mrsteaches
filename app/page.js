import AboutHome from "@/components/AboutHome"
import Hero from "@/components/Hero"
import CoursesHome from "@/components/CoursesHome"

export default function Home() {
  return (
    <>
      <div className="page-section">
          <Hero />
      </div>
        <div className="page-section bg-primary">
          <AboutHome />
        </div>
        <div className="page-section">
                 <CoursesHome />
        </div>
    </>
  );
}
