import { Header } from "../Components/Header";
import { ProjectsContainer } from "../Components/ProjectsContainer";

export const HomePage = () => {
  return (
    <section className="flex h-full flex-col items-center justify-center bg-neutral-50">
      <Header />
      <h1 className="text-center text-3xl font-bold">
        Welcome to my portfolio website
      </h1>
      <p>
        Hi! How great that you found my website! Here you can browse around to
        view some projects of mine and learn more about me!
      </p>
      <p className="text-gray-600">Projects and more coming soon.</p>
      <ProjectsContainer />
    </section>
  );
};
