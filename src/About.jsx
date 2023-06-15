import HeroSection from './components/HeroSection'
// import { useProductContext } from './context/productContext';

const About = () => {

  // const myName = useProductContext();
  // console.log(myName);

  const data = {
    name: "About Us",
  };

  return (
    <HeroSection myData={data} />
  )
}

export default About