import  React from 'react'
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import './Main.css'
import {Route} from "react-router-dom";
function Main() {
return (
    <section className='main'>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
    </section>
)
}
export default Main
