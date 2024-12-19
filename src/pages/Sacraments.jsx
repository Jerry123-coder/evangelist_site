import React, { useRef, useEffect, useState } from "react";
import {
  FiDroplet,
  FiCheck,
  FiHeart,
  FiPlusCircle,
  FiActivity,
  FiCrosshair,
  FiUsers,
} from "react-icons/fi";
import eucharist from "../assets/eucharist.jpg";

const Hero = () => (
  <div className="container mx-auto px-4 md:px-8">
    <div className="flex md:flex-row flex-col items-center justify-between p-4 md:p-8 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-sm">
      <img
        src="/1.jpeg"
        alt="Jesus sculpture"
        className="mx-auto md:w-1/4 mb-6 md:mb-0"
      />
      <div className="md:w-1/2 md:pl-8">
        <h1 className="text-2xl md:text-4xl font-bold text-blue-900 mb-4">
          The Seven Sacraments of The Church
        </h1>
        <p className="text-sm md:text-base text-gray-700 mb-6">
          The Latin word "sacramentum" means "a sign of the sacred." The seven
          sacraments of the Catholic Church are profound ceremonies that signify
          what is sacred and important for Christians. These sacraments are
          special moments where we encounter God's saving presence and grace.
        </p>
        <button className="w-full md:w-auto bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800 transition-colors">
          READ MORE
        </button>
      </div>
    </div>
  </div>
);

const SacramentCard = ({ title, description, icon, onClick }) => (
  <div 
    className="text-center p-3 md:p-4 flex flex-col items-center h-full justify-between bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-all duration-300"
    onClick={onClick}
  >
    <div className="text-blue-900 flex justify-center mb-3 transform hover:scale-110 transition-transform duration-300">{icon}</div>
    <div className="flex-grow flex flex-col items-center justify-center">
      <h3 className="font-semibold text-blue-900 text-base mb-2">{title}</h3>
      <p className="text-xs text-gray-600 max-w-[250px]">{description}</p>
    </div>
  </div>
);

const sacraments = [
  {
    title: "Baptism",
    description:
      "The Sacrament of Baptism is the first step in a lifelong journey of commitment and discipleship.",
    icon: <FiDroplet className="text-4xl" />,
  },
  {
    title: "Confirmation",
    description:
      "Confirmation is a Catholic Sacrament of mature Christian commitment and a deepening of baptismal gifts.",
    icon: <FiCheck className="text-4xl" />,
  },
  {
    title: "Holy Eucharist",
    description:
      "Catholics believe the Eucharist, or Communion, is both a sacrifice and a meal. It is the most profound way we encounter Christ.",
    icon: <FiUsers className="text-4xl" />,
  },
  {
    title: "Reconciliation",
    description:
      "The Catholic Sacrament of Reconciliation, also known as Penance, has three elements: conversion, confession and celebration.",
    icon: <FiPlusCircle className="text-4xl" />,
  },
  {
    title: "Anointing of the Sick",
    description:
      "A ritual of healing appropriate not only for physical but also for mental and spiritual sickness.",
    icon: <FiActivity className="text-4xl" />,
  },
  {
    title: "Holy Orders",
    description:
      "In the Sacrament of Holy Orders, the priest being ordained vows to lead other Catholics by bringing them the sacraments.",
    icon: <FiCrosshair className="text-4xl" />,
  },
  {
    title: "Matrimony",
    description:
      "The Sacrament of Marriage, or Holy Matrimony, is a public sign that one gives oneself totally to this other person.",
    icon: <FiHeart className="text-4xl" />,
  },
];

const SacramentsGrid = () => (
  <div className="max-w-6xl mx-auto w-full">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 md:p-6 bg-gradient-to-br from-blue-50/50 to-white rounded-xl shadow-sm">
      {sacraments.map(({ title, description, icon }, index) => (
        <div key={index} className="h-full">
          <SacramentCard
            title={title}
            description={description}
            icon={icon}
          />
        </div>
      ))}
    </div>
  </div>
);

const detailedSacraments = [
  {
    title: "Baptism",
    description:
      "Baptism is the first of the seven sacraments and the 'door' which gives access to the other sacraments. Through Baptism we are freed from sin and reborn as sons and daughters of God; we become members of Christ, are incorporated into the Church and made sharers in her mission.",
    image: "/1.jpeg",
  },
  {
    title: "Holy Eucharist",
    description:
      "The Eucharist, or Holy Communion, is the source and summit of the Christian life. Catholics believe that during the Mass, the bread and wine become the actual Body and Blood of Jesus Christ through the process of transubstantiation.",
    image: eucharist,
    reversed: true,
  },
  {
    title: "Confirmation",
    description:
      "Confirmation completes the grace of Baptism by a special outpouring of the Holy Spirit. It enriches the baptized with the strength of the Holy Spirit so that they can better witness to Christ in word and deed.",
    image: "/2.jpeg",
  },
  {
    title: "Reconciliation",
    description:
      "Also known as Confession or Penance, the Sacrament of Reconciliation is a profound source of God's mercy and forgiveness. Through this sacrament, we acknowledge our sins, express our sorrow, and receive absolution from a priest acting in Christ's name.",
    image: "/4.jpeg",
    reversed: true,
  },
  {
    title: "Anointing of The Sick",
    description:
      "Formerly known as Last Rites or Extreme Unction, the Sacrament of Anointing of the Sick is a ritual of healing appropriate for physical, mental, and spiritual illness. This sacrament offers the grace of the Holy Spirit to strengthen, comfort, and heal the sick.",
    image: "/2.jpeg",
  },
  {
    title: "Holy Orders",
    description:
      "The Sacrament of Holy Orders is the means by which men are ordained as deacons, priests, or bishops. This sacrament confers the grace and spiritual power necessary to perform the sacred duties of the clergy.",
    image: "/4.jpeg",
    reversed: true,
  },
  {
    title: "Matrimony",
    description:
      "Marriage is a covenant by which a man and a woman establish a partnership for their whole life. The sacrament gives spouses the grace to love each other with the love with which Christ has loved his Church, and perfects their human love.",
    image: "/3.jpeg",
  },
];

const DetailedSacrament = ({ title, description, image, reversed = false, id }) => (
  <div id={id} className="relative overflow-hidden scroll-mt-8">
    <div
      className={`flex flex-col ${
        reversed ? "md:flex-row-reverse" : "md:flex-row"
      } items-center justify-between p-4 md:p-8 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-sm max-w-6xl mx-auto relative`}
    >
      <div className="w-full md:w-3/5 px-4 md:px-8 mb-6 md:mb-0 relative z-10">
        <p className="text-sm text-blue-600 uppercase mb-2 font-medium">SACRAMENTS</p>
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
          {title}
        </h2>
        <p className="text-sm md:text-base text-gray-700">{description}</p>
      </div>
      <div className="relative w-full md:w-2/5 h-[200px] md:h-[280px]">
        {/* Main decorative circles */}
        <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-orange-500/10" />
        <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-blue-900/10" />
        <div className="absolute top-1/2 -right-12 w-16 h-16 rounded-full bg-orange-500/5" />
        
        {/* Image container with shadow */}
        <div className="relative h-full w-full">
          <img 
            src={image} 
            alt={title} 
            className="rounded-lg w-full h-full object-cover shadow-lg relative z-10" 
          />
        </div>

        {/* Additional small circles */}
        <div className="absolute -bottom-4 left-1/4 w-8 h-8 rounded-full bg-blue-900/20" />
        <div className="absolute top-1/3 -left-4 w-12 h-12 rounded-full bg-orange-500/15" />
      </div>
    </div>
    
    {/* Large background circles */}
    <div className={`absolute ${reversed ? '-left-32' : '-right-32'} top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-blue-900/5 -z-10`} />
    <div className={`absolute ${reversed ? '-left-16' : '-right-16'} top-1/4 w-32 h-32 rounded-full bg-orange-500/5 -z-10`} />
  </div>
);

const Sacraments = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = window.scrollY;
      setScrollProgress(currentProgress / totalScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (title) => {
    const element = document.getElementById(title.toLowerCase().replace(/\s+/g, '-'));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const interpolateColor = (progress) => {
    // Using a blue color palette
    const startColor = { r: 239, g: 246, b: 255 }; // blue-50
    const midColor = { r: 147, g: 197, b: 253 }; // blue-300
    const endColor = { r: 30, g: 58, b: 138 }; // blue-900

    let r, g, b;
    if (progress < 0.5) {
      // Interpolate between start and mid color
      const t = progress * 2;
      r = startColor.r + (midColor.r - startColor.r) * t;
      g = startColor.g + (midColor.g - startColor.g) * t;
      b = startColor.b + (midColor.b - startColor.b) * t;
    } else {
      // Interpolate between mid and end color
      const t = (progress - 0.5) * 2;
      r = midColor.r + (endColor.r - midColor.r) * t;
      g = midColor.g + (endColor.g - midColor.g) * t;
      b = midColor.b + (endColor.b - midColor.b) * t;
    }

    return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
  };

  return (
    <div 
      className="min-h-screen justify-center flex flex-col items-center transition-colors duration-500"
      style={{ 
        backgroundColor: interpolateColor(scrollProgress),
        backgroundImage: `radial-gradient(rgba(30, 58, 138, 0.15) 0.5px, transparent 0.5px)`,
        backgroundSize: '16px 16px',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent pointer-events-none" />
      <div className="relative w-full">
        <Hero />
        <div className="container mx-auto px-4 md:px-8">
          <div className="space-y-12 my-16">
            <div className="w-full">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 md:p-6 bg-gradient-to-br from-blue-50/50 to-white rounded-xl shadow-sm">
                {sacraments.map(({ title, description, icon }, index) => (
                  <div key={index} className="h-full">
                    <SacramentCard
                      title={title}
                      description={description}
                      icon={icon}
                      onClick={() => scrollToSection(title)}
                    />
                  </div>
                ))}
              </div>
            </div>
            {detailedSacraments.map(
              ({ title, description, image, reversed }, index) => (
                <div key={index} className="w-full">
                  <DetailedSacrament
                    title={title}
                    description={description}
                    image={image}
                    reversed={reversed}
                    id={title.toLowerCase().replace(/\s+/g, '-')}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sacraments;
