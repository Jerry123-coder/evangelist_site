import React from "react";
import {
  FiDroplet,
  FiCheck,
  FiHeart,
  FiPlusCircle,
  FiActivity,
  FiCrosshair,
  FiUsers,
} from "react-icons/fi";

const Hero = () => (
  <div className="flex md:m-20 flex-col md:flex-row items-center justify-between p-4 md:p-8 bg-white">
    <img
      src="/1.jpeg"
      alt="Jesus sculpture"
      className="mx-auto  md:w-1/4  mb-6 md:mb-0"
    />
    <div className=" md:w-1/2  md:pl-8">
      <h1 className="text-2xl md:text-4xl font-bold text-blue-900 mb-4">
        The Seven Sacraments of The Church
      </h1>
      <p className="text-sm md:text-base text-gray-700 mb-6">
        The Latin word "sacramentum" means "a sign of the sacred." The seven
        sacraments of the Catholic Church are profound ceremonies that signify
        what is sacred and important for Christians. These sacraments are
        special moments where we encounter God's saving presence and grace.
      </p>
      <button className="w-full md:w-auto bg-blue-900 text-white px-6 py-2 rounded">
        READ MORE
      </button>
    </div>
  </div>
);

const SacramentCard = ({ title, description, icon }) => (
  <div className="text-center p-4 md:p-6">
    <div className="text-blue-900 flex justify-center mb-4">{icon}</div>
    <h3 className="font-semibold text-blue-900 text-lg mb-2">{title}</h3>
    <p className="text-xs md:text-sm text-gray-600">{description}</p>
  </div>
);

const DetailedSacrament = ({ title, description, image, reversed = false }) => (
  <div
    className={`flex flex-col ${
      reversed ? "md:flex-row-reverse" : "md:flex-row"
    } items-center justify-between p-4 md:p-8 bg-white`}
  >
    <div className="w-full md:w-1/2 px-4 md:px-8 mb-6 md:mb-0">
      <p className="text-sm text-gray-600 uppercase mb-2">SACRAMENTS</p>
      <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
        {title}
      </h2>
      <p className="text-sm md:text-base text-gray-700">{description}</p>
    </div>
    <img src={image} alt={title} className=" md:w-1/2 rounded-lg" />
  </div>
);

const sacraments = [
  {
    title: "Baptism",
    description:
      "The Sacrament of Baptism is the first step in a lifelong journey of commitment and discipleship.",
    icon: <FiDroplet className="text-6xl" />,
  },
  {
    title: "Confirmation",
    description:
      "Confirmation is a Catholic Sacrament of mature Christian commitment and a deepening of baptismal gifts.",
    icon: <FiCheck className="text-6xl" />,
  },
  // {
  //   title: "Holy Eucharist",
  //   description:
  //     "Catholics believe the Eucharist, or Communion, is both a sacrifice and a meal.",
  //   icon: <FiUsers className="text-6xl" />,
  // },
  {
    title: "Reconciliation",
    description:
      "The Catholic Sacrament of Reconciliation also known as Penance, has three elements: conversion, confession and celebration.",
    icon: <FiPlusCircle className="text-6xl" />,
  },
  {
    title: "Anointing of the Sick",
    description:
      "The Sacrament of Anointing of the Sick is a ritual of healing appropriate not only for physical but also for mental and spiritual sickness.",
    icon: <FiActivity className="text-6xl" />,
  },
  {
    title: "Holy Orders",
    description:
      "In the Sacrament of Holy Orders, the priest being ordained vows to lead other Catholics by bringing them the sacraments.",
    icon: <FiCrosshair className="text-6xl" />,
  },
  {
    title: "Matrimony",
    description:
      "The Sacrament of Marriage, or Holy Matrimony, is a public sign that one gives oneself totally to this other person.",
    icon: <FiHeart className="text-6xl" />,
  },
];

const SacramentsGrid = () => (
  <div className="grid max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 p-4 md:p-8 bg-gray-50">
    {sacraments.map(({ title, description, icon }, index) => (
      <SacramentCard
        key={index}
        title={title}
        description={description}
        icon={icon}
      />
    ))}
  </div>
);

const detailedSacraments = [
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
    title: "Holy Eucharist",
    description:
      "The Eucharist, or Holy Communion, is the source and summit of the Christian life. Catholics believe that during the Mass, the bread and wine become the actual Body and Blood of Jesus Christ through the process of transubstantiation.",
    image: "/3.jpeg",
  },
];

const Sacraments = () => (
  <div className="bg-white justify-center flex flex-col items-center">
    <Hero />
    <SacramentsGrid />
    {detailedSacraments.map(
      ({ title, description, image, reversed }, index) => (
        <DetailedSacrament
          key={index}
          title={title}
          description={description}
          image={image}
          reversed={reversed}
        />
      )
    )}
  </div>
);

export default Sacraments;
