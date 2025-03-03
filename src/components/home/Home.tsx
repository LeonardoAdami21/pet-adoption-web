import "./Home.css";
import CardBelowHome from "./Card-Below/CardBelowHome";
import HomeLandingContainer from "./Home-landing/Home-Landing";
import PlanningToAdoptAPet from "./Planning-Adopt/PlanningAdoptPet";

interface HomeProps {
  description: string;
}

const Home = (props: HomeProps) => {
  return (
    <>
      <HomeLandingContainer description={props.description} />
      <CardBelowHome />
      <PlanningToAdoptAPet />
    </>
  );
};

export default Home;
