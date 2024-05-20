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
          <CoursesHome />
        </section>
        <section className="gradient-background-secondary">
          <TaughtHome />
        </section>
    </main>
  );
}
