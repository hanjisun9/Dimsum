import Contact from "./components/contact";
import Highlight from "./components/highlight";
import Preview from "./components/preview";
import Landing from "./components/landing";

export default function Home() {
  return (
    <div>
      <Landing />
      <Highlight />
      <Preview />
      <Contact />
    </div>
  );
}
