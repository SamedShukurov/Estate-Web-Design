import HeaderComponent from "./components/Header/Header.jsx";
import MainComponent from "./components/Main/Main.jsx";
import ContentComponent from "./components/Content/Content.jsx";
function App() {
  const sales = [
    {
      price:"290.000 $",
      title:"Apartment for sale",
      location:"London, Oxford St.",
      deadline:"26 November 2020",
      room:"3+1",
      floor:10,
      size:"150 m²"
    },
    {
      price:"290.000 $",
      title:"Apartment for sale",
      location:"London, Oxford St.",
      deadline:"26 November 2020",
      room:"3+1",
      floor:10,
      size:"150 m²"
    },
    {
      price:"290.000 $",
      title:"Apartment for sale",
      location:"London, Oxford St.",
      deadline:"26 November 2020",
      room:"3+1",
      floor:10,
      size:"150 m²"
    },
    {
      price:"290.000 $",
      title:"Apartment for sale",
      location:"London, Oxford St.",
      deadline:"26 November 2020",
      room:"3+1",
      floor:10,
      size:"150 m²"
    }
  ]
  // const rental = [
  //   {
  //     price:"290.000 $",
  //     title:"Apartment for sale",
  //     location:"London, Oxford St.",
  //     deadline:"26 November 2020",
  //     room:"3+1",
  //     floor:10,
  //     size:"150 m²"
  //   },
  //   {
  //     price:"290.000 $",
  //     title:"Apartment for sale",
  //     location:"London, Oxford St.",
  //     deadline:"26 November 2020",
  //     room:"3+1",
  //     floor:10,
  //     size:"150 m²"
  //   },
  //   {
  //     price:"290.000 $",
  //     title:"Apartment for sale",
  //     location:"London, Oxford St.",
  //     deadline:"26 November 2020",
  //     room:"3+1",
  //     floor:10,
  //     size:"150 m²"
  //   },
  //   {
  //     price:"290.000 $",
  //     title:"Apartment for sale",
  //     location:"London, Oxford St.",
  //     deadline:"26 November 2020",
  //     room:"3+1",
  //     floor:10,
  //     size:"150 m²"
  //   }
  // ]
  return (
    <>
      <HeaderComponent />
      <MainComponent />
      <ContentComponent sales={sales}/>

    </>
  );
}

export default App;
