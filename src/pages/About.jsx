import Statistic from "../components/StatItem";
import statImage from "../assets/home-bg.jpg";
import thePastor from "../assets/thePastor.png";
import assistantPriest from "../assets/Assistantpriest.jpg";
import dr from "../assets/dr.jpeg";

const About = () => {
  return (
    <div className="mb-5">
      <div
        className="relative flex flex-col lg:flex-row bg-cover bg-center items-center gap-5 w-screen h-[20rem] px-8 lg:px-[20rem] justify-between"
        style={{
          backgroundImage: `url(${statImage})`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute z-2 inset-0 bg-black opacity-80"></div>
        <div className="text-white z-10 flex flex-col items-center">
          <span className="text-2xl text-center w-full lg:text-left mb-10 lg:mb-2 font-semibold opacity-75">
            All About
          </span>
          <span className=" text-3xl text-center lg:text-left lg:text-6xl font-bold">
            St. John The Evangelist Catholic Church,{" "}
            <span className="text-blue-500">Adenta</span>
          </span>
        </div>
      </div>

      <div className="relative flex flex-col  bg-cover bg-center items-center gap-5 w-screen py-10 px-8 lg:px-[20rem]">
        <span className="text-3xl font-bold text-left w-full">Our Story</span>
        <span>
          St. John the Evangelist Catholic Church is currently a Parish of the
          Catholic Archdiocese of Accra, carved out of the Queen of Peace
          Parish, Madina by a letter dated February 2, 2004. On January 25, 1998
          a worshipping community celebrated its first Mass at the rented
          premises of a Catholic Reverend Sister, Rev. Sister Mary Laurene
          Browne, OSF, a Liberian national within the Adentan SSNIT Flats at
          Assisi House. The new catholic community drawn mainly from the Adentan
          SSNIT Flats emerged from the Holy Rosary Catholic Church, Adentan.
        </span>
        <span className="">
          The community Initially called itself St Augustine&aps;s Catholic Church,
          but this was changed to St. John the Evangelist Catholic Church on the
          advice of the then Archbishop of Accra, His Grace Most Rev. Dominic
          Kodwo Andoh. With the availability of priests, the church at Adentan
          saw a steady growth, although members worshipped under very difficult
          conditions at Assisi House; such as worshipping under canopies and
          rented plastic chairs and benches.
        </span>
      </div>

      <div className="relative flex flex-col  bg-cover bg-center items-center gap-5 w-screen py-10 px-8 lg:px-[20rem]">
        <span className="text-3xl font-bold text-left w-full">
          Pioneering Faith
        </span>
        <span>
          As a budding outstation of Queen of Peace Parish, Madina, the
          community was blessed with Resident Priests in the persons of the late
          Rev. Fr. Fritz Hebben, SMA, Rev. Fr. Donatien Djohossou, SMA and Rev.
          Fr. Alan Canoneo, SMA, a Philipino SMA Priest. A special mention must
          be made of Rev. Fr. Donatien Djohossou for his fortitude and
          conviction which have translated into what we are celebrating today.
          The next Resident Priest was Rev. Fr. Harrie van Hoof, SMA (from 1999
          to November 2003) who also lived in the rented premises, Assisi House.
        </span>
        <span className="">
          A key factor in the rapid development of the church at Adentan was the
          acquisition of land by the community. Through the hard work and
          commitment of the founding fathers of the community, a 5.35 acre land
          was acquired for the construction of a place of worship and other
          envisaged projects, such as a Rectory, a school and a social centre.
          At the forefront of this land acquisition efforts were notably, Messrs
          Kwaku Opon Tutu, J. E. Frimpong, W. Atiegar, Charles Nouriyee, Robert
          Naazig, J.P. N. Swatson, Mrs. Rita Kitcher as well as the late Mr.
          Joseph Obeng and the late Margaret Appiah.
        </span>

        <span className="">
          Others were former Community 2 members who had their Bible Sharing
          meetings at the Gbewaa Conference Centre hear the SSNIT Flats Lorry
          Station.
        </span>
      </div>

      <div className="relative flex flex-col  bg-cover bg-center items-center gap-5 w-screen py-10 px-8 lg:px-[20rem]">
        <span className="text-3xl font-bold text-left w-full">
          Meet Our Leadership
        </span>
        <div className="flex w-full gap-8">
          <div
            className="bg-slate-200 h-[30rem] flex-1 rounded-lg relative"
            style={{
              backgroundImage: `url(${thePastor})`,
              backgroundSize: "contain",
              backgroundPosition: "center 10%",
              backgroundRepeat: "no-repeat"
            }}
          >
            <div className="absolute bottom-0 bg-black w-full text-yellow-500 opacity-70 rounded-b-lg px-2">
              <h2 className="font-bold text-lg">
                Very Rev. Fr. Edmund Donkor-Baine
              </h2>
              <p className="text-white pb-5">Parish Priest</p>
            </div>
          </div>

          <div
            className="bg-slate-200 h-[30rem] flex-1 rounded-lg relative"
            style={{
              backgroundImage: `url(${assistantPriest})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute bottom-0 bg-black w-full text-yellow-500 opacity-70 rounded-b-lg px-2">
              <h2 className="font-bold text-lg">Rev. Fr. Joseph Effah Siaw</h2>
              <p className="text-white pb-5">
                Assisting Priest and Youth Chaplain
              </p>
            </div>
          </div>

          <div
            className="bg-slate-200 h-[30rem] flex-1 rounded-lg relative"
            style={{
              backgroundImage: `url(${dr})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute bottom-0 bg-black w-full  text-yellow-500 opacity-70 rounded-b-lg px-2">
              <h2 className="font-bold text-lg">Dr. Benjamin Otchere Ankrah</h2>
              <p className="text-white pb-5">
                Parish Pastoral Council chairperson
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
