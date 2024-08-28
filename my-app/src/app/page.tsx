import Post from "@/components/Post";

export default function Home() {
  return (
    <main>
      <section>
        <Post
          image="https://www.dummyimage.co.uk/index.php?generate-image=1&size=60x60&colour=cbcbcb&text-colour=959595&text=Dummy+Image&font-size=40"
          name="max"
          description="lorem test test test"
        />
      </section>
    </main>
  );
}
