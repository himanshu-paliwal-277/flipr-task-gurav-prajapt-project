import AuthorCard from "../components/AuthorCard";
import JoinNow from "../components/JoinNow";
import Bloger1 from "../assets/Client-First-IMAGES/man-in-yellow-button-up-shirt-wearing-black-framed-eyeglasses-7562313.svg";
import Bloger2 from "../assets/Client-First-IMAGES/woman-in-white-and-black-striped-shirt-wearing-black-sunglasses-3671083.svg";
import Bloger3 from "../assets/Client-First-IMAGES/fashion-woman-cute-shoes-.svg";
import Bloger4 from "../assets/Client-First-IMAGES/content-baker-with-delicious-puff-in-cafeteria-6205509.svg";
import Bloger5 from "../assets/Client-First-IMAGES/man -with-eyeglasses.svg";
import Bloger6 from "../assets/Client-First-IMAGES/woman-in-blue-shirt.svg";
import Bloger7 from "../assets/Client-First-IMAGES/content-unshaven-man-covering-eye-with-yellow-flower-.svg";
import Bloger8 from "../assets/Client-First-IMAGES/cheerful-young-ethnic-male-millennial-standing-near-stone-wall-and-smiling-6147118.svg";
import bgImg from "../assets/Client-First-IMAGES/group of friends seen sea.svg";
import shape1 from "../assets/Client-First-IMAGES/shape-1.svg";
import shape from "../assets/Client-First-IMAGES/shape.svg";
import handShake from "../assets/Client-First-IMAGES/ground-group-growth-hands-461049.svg";
import yellowShape from "../assets/Client-First-IMAGES/shapes.svg";
import threePersons from "../assets/Client-First-IMAGES/three-persons-sitting-on-the-stairs-talking-with-each-other.svg";
import circle from "../assets/Client-First-IMAGES/circle.svg";

function AboutUs() {
  const Authors = [
    {
      Name: "Floyd Miles",
      ImageUrl: Bloger1,
      description: "lorem ipsum dolor",
    },
    {
      Name: "Dianne Russell",
      ImageUrl: Bloger2,
      description: "lorem ipsum dolor",
    },
    {
      Name: "Jenny Wilson",
      ImageUrl: Bloger3,
      description: "lorem ipsum dolor",
    },
    {
      Name: "Lestie Alexander",
      ImageUrl: Bloger4,
      description: "lorem ipsum dolor",
    },
    {
      Name: "Guy Hawkins",
      ImageUrl: Bloger5,
      description: "lorem ipsum dolor",
    },
    {
      Name: "Eleanor Pena",
      ImageUrl: Bloger6,
      description: "lorem ipsum dolor",
    },
    {
      Name: "Robert Fox",
      ImageUrl: Bloger7,
      description: "lorem ipsum dolor",
    },
    {
      Name: "Lacob Jones",
      ImageUrl: Bloger8,
      description: "lorem ipsum dolor",
    },
  ];
  return (
    <div>
      <div className="bg-white">
        <section className="flex px-24 pt-24 text-center">
          <div className="w-2/3 px-20 relative top-20 shadow-lg h-[40vh]">
            <h2 className="mb-2 text-gray-500 uppercase ">About Us</h2>
            <h1 className="mb-4 text-4xl font-bold">
              We are a team of content writers who share their learnings
            </h1>
          </div>
          <p className="w-1/2 mx-auto text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </section>
        <section className="relative px-10">
          <img
            src={bgImg}
            alt="Group of people with a scenic background"
            className="w-full h-[90vh] object-cover"
          />
          <div className="relative bottom-[111px] right-60 flex justify-center items-center">
            <div className="p-4 text-center bg-secondary">
              <h3 className="text-4xl font-bold">12+</h3>
              <p>Blogs Published</p>
            </div>
            <div className="p-4 text-center bg-secondary">
              <h3 className="text-4xl font-bold">18K+</h3>
              <p>Views on Finservet</p>
            </div>
            <div className="p-4 text-center bg-secondary">
              <h3 className="text-4xl font-bold">30K+</h3>
              <p>Total active Users</p>
            </div>
          </div>
          <div className="inline-flex relative bottom-[111px] left-[165px] ">
            <img src={shape1} alt="" />
            <img src={shape} alt="" />
          </div>
        </section>
       
    {/* <!-- Mission and Vision Sections --> */}
    <section className="grid grid-cols-1 gap-8 px-8 md:grid-cols-2 sm:px-12">
      <div className="p-6 bg-gray-100 rounded shadow-lg sm:p-8">
        <h2 className="mb-2 text-gray-500 uppercase">Our Mission</h2>
        <h3 className="mb-4 text-2xl font-bold">
          Creating valuable content for creatives all around the world
        </h3>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing in tellus.
        </p>
      </div>
      <div className="p-6 bg-gray-100 rounded shadow-lg sm:p-8">
        <h2 className="mb-2 text-gray-500 uppercase">Our Vision</h2>
        <h3 className="mb-4 text-2xl font-bold">
          A platform that empowers individuals to improve
        </h3>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing in tellus.
        </p>
      </div>
    </section>

    {/* <!-- Team Section --> */}
    <div className="flex items-center justify-center px-6 my-10 bg-white sm:px-12">
      <div className="flex flex-col items-center max-w-6xl mx-auto sm:flex-row">
        <div className="w-full pr-6 sm:w-1/2 sm:pr-10">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">Our team of creatives</h2>
          <p className="mb-4 text-lg font-semibold text-gray-700 sm:text-xl">
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </p>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
          </p>
        </div>
        <div className="relative w-full mt-6 sm:w-1/2 sm:mt-0">
          <img src={handShake} alt="Team working together" className="object-cover w-full h-auto rounded-lg" />
          <div className="absolute left-0 z-10 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 top-1/2">
            <img src={yellowShape} alt="yellow shape decoration" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Why We Started Section --> */}
    <div className="flex items-center justify-center px-6 mb-10 bg-white sm:px-12">
      <div className="flex flex-col items-center max-w-6xl mx-auto sm:flex-row">
        <div className="relative w-full sm:w-1/2">
          <img src={threePersons} alt="People collaborating" className="object-cover w-full h-auto rounded-lg" />
          <div className="absolute z-10 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 top-full left-28">
            <img src={circle} alt="circle shape decoration" className="w-full h-full" />
          </div>
        </div>
        <div className="w-full pl-6 sm:w-1/2 sm:pl-10">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">Why we started this Blog</h2>
          <p className="mb-4 text-lg font-semibold text-gray-700 sm:text-xl">
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </p>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
          </p>
        </div>
      </div>
    
        </div>
        <div className="px-8">
          <h2 className="text-2xl font-bold text-center">Authors List</h2>
          <AuthorCard AuthorsData={Authors} />
        </div>
        <JoinNow />
      </div>
    </div>
  );
}

export default AboutUs;
