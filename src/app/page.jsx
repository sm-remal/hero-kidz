import Banner from "@/components/Home/Banner";
import Products from "@/components/Home/Products";
import Image from "next/image";

export const metadata = {
  title: "Home",
  description:
    "Hero Kidz is a child-focused platform dedicated to education, creativity, and building a strong future for kids.",
};


export default function Home() {
  return (
    <div className="space-y-20">
      <section>
        <Banner></Banner>
      </section>

      <section className="pb-14">
        <Products></Products>
      </section>
    </div>
  );
}
