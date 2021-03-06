import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "icki cok icmeyin sagliginiza zararlidir lutfen icki yerine elma yada armut suyu iciniz"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "hotelimizde size rehberlik edecek izci arkadaslarimiz bulunmaktadir herhangi bir ihtiyac duyuldugunda reception bildiriniz"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free shuttle",
        info:
          "harhangi bir transport lazimsa lutfen reception arkadasimiza veya direk hetel app adresine bildiriniz"
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "icki cok icmeyin sagliginiza zararlidir lutfen icki yerine elma yada armut suyu iciniz"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
            {this.state.services.map((item, index) => {
            return  <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
            
            </article>
            
            })}

        </div>
      </section>
    );
  }
}
