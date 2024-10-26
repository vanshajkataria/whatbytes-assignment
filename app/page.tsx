'use client'
import Navbar from "@/components/navbar";
import SkillsPage from "@/components/skillsPage"

export default function Home() {
  return (
    <>
      <main className="grid grid-cols-12">
        <aside className="col-span-2">
          <Navbar />
        </aside>
        <section className="col-span-10">
          <SkillsPage />
        </section>
      </main>
    </>
  );
}
