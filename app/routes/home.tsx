import type { Route } from "./+types/home";
import NavBar from "../../Components/NavBar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <div className="home">
    <NavBar />
  </div>
};