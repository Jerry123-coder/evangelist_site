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
    } items-center justify-between md:pt-[50px] bg-white`}
  >
    <div className="w-full md:w-7/12 px-4 md:px-20 mb-6 md:mb-0">
      <p className="text-sm text-gray-600 uppercase sm:mt-10 md:mt-0  md:mb-2">SACRAMENTS</p>
      <h2 className="text-2xl md:text-3xl mt- font-bold text-blue-900 mb-4">
        {title}
      </h2>
      <p className="text-sm md:text-base text-gray-700">{description}</p>
    </div>
    <img src={image} alt={title} className="md:h-[30rem] w-full md:w-5/12   " />
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
    title: "Baptism",
    description:
      "For Catholics, the Sacrament of Baptism is the gateway to the Christian life. It is the first of the three Sacraments of Initiation, followed by Confirmation and the Eucharist. Baptism cleanses us from original sin, makes us members of Christ and His Church, and provides us with the grace to live a life of faith. Whether administered to infants or adults, Baptism represents the Church's celebration of God’s embrace and the beginning of a lifelong journey of faith.",
    image: "/2.jpeg",
    reversed: true,
  },
  {
    title: "Holy Eucharist",
    description:
      "The Eucharist, or Holy Communion, is the source and summit of the Christian life. Catholics believe that during the Mass, the bread and wine become the actual Body and Blood of Jesus Christ through the process of transubstantiation. Participating in the Eucharist allows the faithful to receive Jesus Christ into their hearts and souls, providing spiritual nourishment and strengthening their bond with God. The Eucharist is a sacrificial meal, commemorating Jesus' Last Supper and His sacrifice on the cross.",
    image: "/4.jpeg",
  },
  {
    title: "Confirmation",
    description:
      "Confirmation is the Sacrament of mature Christian commitment and a deepening of baptismal gifts. It is the second of the three Sacraments of Initiation and is typically received by adolescents, though adults can also be confirmed. Through Confirmation, the Holy Spirit bestows His gifts, strengthening the recipient to live out their faith with courage and conviction. It is a call to witness and proclaim the Gospel in word and deed.",
    image: "/3.jpeg",
    reversed: true,
  },

  // {
  //   title: "Reconciliation",
  //   description:
  //     "Also known as Confession or Penance, the Sacrament of Reconciliation is a profound expression of God's mercy. This sacrament involves three parts: conversion, confession, and celebration. By confessing our sins to a priest and performing an act of penance, we receive God's forgiveness and are reconciled with Him and the Church. This sacrament reminds us of God's unconditional love and calls us to forgive others as we have been forgiven.",
  //   image: "/5.jpeg",
  // },
  {
    title: "Anointing of The Sick",
    description:
      "Formerly known as Last Rites or Extreme Unction, the Sacrament of Anointing of the Sick is a ritual of healing appropriate for physical, mental, and spiritual illness. This sacrament offers the grace of the Holy Spirit to strengthen, comfort, and heal the sick. It can be received more than once, especially in cases of serious illness or impending surgery. The Anointing of the Sick brings the comforting presence of Christ to those in need.",
    image: "/6.jpeg",
    // reversed: true,
  },
  {
    title: "Holy Orders",
    description:
      "The Sacrament of Holy Orders is the means by which men are ordained as deacons, priests, or bishops. This sacrament confers the grace and spiritual power necessary to perform the sacred duties of the clergy. Those who receive Holy Orders are called to lead the Church, administer the sacraments, and proclaim the Gospel. It is a lifelong commitment to serve God and His people, guiding them on their spiritual journey.",
    image: "/7.jpeg",
    reversed: true,
  },

  {
    title: "Matrimony",
    description:
      "The Sacrament of Marriage, or Holy Matrimony, is a covenant by which a man and a woman establish a partnership for their whole life. This sacrament reflects the union of Christ and His Church and is a public declaration of love and commitment. Through marriage, couples are called to reflect God's love in their relationship, support each other in faith, and raise their children in the teachings of the Church. Marriage is a vocation of self-giving love and service.",
    image: "/8.jpeg",
    // reversed: true,
  },
];

const ParishCalender = () => (
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
    <div className="mt-20"></div>
  </div>
);

export default ParishCalender;
