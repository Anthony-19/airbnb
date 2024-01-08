import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Card from "./components/Card";
import data from "./data";
import "./style.css";
export default function App() {
  // const firstName = "joe";
  // const lastName = "fred";
  // const space = " ";
  const dataElements = data.map((item) => (
    <Card
      // img={require(`./images/${item.coverImg}`).default}
      key={item.id}
      // items={item} but i will prefer this
      {...item}
      // img={item.coverImg}
      // rating={item.stats.rating}
      // reviewCount={item.stats.reviewCount}
      // country={item.location}
      // title={item.title}
      // price={item.price}
      // openspot={item.openSpots}
    /> 
  ));
  console.log(dataElements);
  return (
    <div className="containers">
      <Navbar />
      <Main />
      <section className="cards--list">{dataElements}</section>
    </div>
  );
}

{
  /* <div className="container">
<Navbar />
<Main />
<Card 
    img={Logo1}
    rating = {5.0}
    buttons = 'Sold out'
    reviewCount = {6}
    country = 'USA'
    title = "Life lessons with Katie Zaferes"
    price="From $136 /"
    person = "person"
/>
<Card 
    img={Logo1}
    rating = {5.0}
    buttons = 'Sold out'
    reviewCount = "(6) •"
    country = 'USA'
    title = "Life lessons with Katie Zaferes"
    price="From $136 /"
    person = "person"
/> 
<h1> Hello {firstName} {lastName}!</h1>
</div> */
}
