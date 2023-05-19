import Image from "next/image";
import React from "react";
import Alweena from '../../../public/images/alweena.svg'
import Ecpik from '../../../public/images/ecpik.svg'
import Gazal from '../../../public/images/gazalBig.svg'
import InterCool from '../../../public/images/intercool.svg'

function NewClient() {
  return (
    <div className="clientsHeight1 reveal">
      <div className="ourClientsContainer ">
        <h2 className="whatWeDo">Clients we have worked with</h2>
      </div>
      <div class="slider">
        <div class="slider-track">
            <div class="slide">
                <Image src={Alweena} className="slide"/>
            </div>
            <div class="slide">
                <Image src={Ecpik} className="ecpik slide"/>
            </div>
            <div class="slide">
                <Image src={Gazal} className="slide"/>
            </div>
            <div class="slide">
                <Image src={InterCool} className="slide"/>
            </div>
            <div class="slide">
                <Image src={Alweena} className="slide"/>
            </div>
            <div class="slide">
                <Image src={Ecpik} className="ecpik"/>
            </div>
            <div class="slide">
                <Image src={Gazal} className="slide"/>
            </div>
            <div class="slide">
                <Image src={InterCool} className="slide"/>
            </div>
            <div class="slide">
                <Image src={Alweena} className="slide"/>
            </div>
            <div class="slide">
                <Image src={Ecpik} className="ecpik"/>
            </div>
            <div class="slide">
                <Image src={Gazal} className="slide"/>
            </div>
            <div class="slide">
                <Image src={InterCool} className="slide"/>
            </div>
            <div class="slide">
                <Image src={Alweena} className="slide"/>
            </div>
            <div class="slide">
                <Image src={Ecpik} className="ecpik"/>
            </div>
            <div class="slide">
                <Image src={Gazal} className="slide"/>
            </div>
            <div class="slide">
                <Image src={InterCool} className="slide"/>
            </div>
        </div>
    </div>
    </div>
  );
}

export default NewClient;
