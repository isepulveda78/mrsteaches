import AboutHome from "@/components/AboutHome";
import Hero from "@/components/Hero";
import CoursesHome from "@/components/CoursesHome";
import TaughtHome from "@/components/TaughtHome";
export default function Home() {
  return (
    <main>
      <section className="gradient-background-primary">
          <Hero />
      </section>
        <section className="gradient-background-secondary">
          <AboutHome />
        </section>
        <section className="gradient-background-primary">
            <div className="pt-3">
              <h2 className="text-white mb-3 text-center">Courses</h2>
                 <CoursesHome />
            </div>
        </section>
        <section className="gradient-background-secondary">
          <TaughtHome className="" />
        </section>
    </main>
  );
}
