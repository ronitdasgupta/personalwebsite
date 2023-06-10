import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  To,
} from "react-router-dom";
import "./App.css";

const PersonalWebsiteHeading = () => {
  return (
    <div>
      <h1>Ronit Dasgupta | Personal Website</h1>
    </div>
  );
};

const AboutMe = () => {
  return (
    <div>
      <h2>About Me</h2>
      <p>
        Hello! My name is Ronit Dasgupta and I am a student at the University of
        Washington with a deep passion for Computer Science / Electrical &
        Computer Engineering. As an engineering student, I am very interested in
        pursuing a profession related to computer science and engineering. I am
        always open to learning and I enjoy working with people to find
        solutions!
      </p>
    </div>
  );
};

const Experience = () => {
  const navigate = useNavigate();

  const handleButtonClick = (target: string) => {
    switch (target) {
      case "codeahead":
        navigate("/codeahead");
        break;
      case "dev0":
        navigate("/dev0");
        break;
      case "gencyber":
        navigate("/gencyber");
        break;
      case "dubhacks":
        navigate("/dubhacks");
        break;
      case "husky":
        navigate("/husky");
        break;
      case "dubvelopers":
        navigate("/dubvelopers");
        break;
      case "interactiveintelligence":
        navigate("/interactiveintelligence");
      case "primerica":
        navigate("/primerica");
      default:
        break;
    }
  };

  return (
    <div className="experience">
      <h2>Experience</h2>
      <button
        className="exp-button"
        onClick={() => handleButtonClick("primerica")}
      >
        Primerica
      </button>
      <button
        className="exp-button"
        onClick={() => handleButtonClick("codeahead")}
      >
        CodeAhead
      </button>
      <button className="exp-button" onClick={() => handleButtonClick("dev0")}>
        Dev0
      </button>
      <button
        className="exp-button"
        onClick={() => handleButtonClick("gencyber")}
      >
        GenCyber Virtual Camp
      </button>
      <button
        className="exp-button"
        onClick={() => handleButtonClick("dubhacks")}
      >
        DubHacks
      </button>
      <button className="exp-button" onClick={() => handleButtonClick("husky")}>
        Husky Coding Project
      </button>
      <button
        className="exp-button"
        onClick={() => handleButtonClick("dubvelopers")}
      >
        Dubvelopers
      </button>
      <button
        className="exp-button"
        onClick={() => handleButtonClick("interactiveintelligence")}
      >
        Interactive Intelligence
      </button>
    </div>
  );
};

const Resume = () => {
  return (
    <div>
      <h2>Resumé</h2>
    </div>
  );
};

const Primerica = () => {
  return (
    <div>
      <h2>Primerica</h2>
      <p>
        I will be working as a full-time paid intern the summer of 2023 working
        with Primerica. During the internship, I will be using SQL Server,
        Python, Docker, ETL / tools, and Node.js to help the company organize
        database tables and transfer large amounts of data in a safe and
        efficient way. I will also be working with CSV files and transferring
        data into database tables using db2.
      </p>
    </div>
  );
};

const CodeAhead = () => {
  return (
    <div>
      <h2>CodeAhead</h2>
      <p>
        In the summer of 2020, I was part of a non-profit organization called
        CodeAhead which hosted beginner friendly coding camps for students
        interested in programming and Computer Science and donated all the
        proceeds to charity. As a programming instructor I instructed kids the
        fundamentals of programming in both Python and Java. The programming
        concepts I taught were variables, arrays, maps, loops, etc. I taught
        several students and collaborated with other instructors within the
        organization to prepare PowerPoint slides to outline the goals for each
        class.
      </p>
    </div>
  );
};

const Dev0 = () => {
  return (
    <div>
      <h2>Dev0</h2>
      <p>
        In March 2023, I led a 2 hour Introduction to Flutter Workshop at the
        University of Washington. Since I have developed several mobile
        applications in the past using the Flutter Framework, I decided to lead
        a workshop to other students interested in using Flutter for mobile app
        development. During the workshop, I taught about 30+ students the
        fundamentals of Flutter (widgets, state maangement, Dart, deployment,
        database integration, etc.). I also explained the various advantages and
        disadvantages associated with using Flutter for mobile app development
        so that developers can make a decision for themselves when deciding if
        Flutter is the right framework to use for their needs. During the
        workshop I prepared a coding walk-through explaining some of the most
        important widgets, libraries, and classes in Flutter to help students
        build a simple Tic-Tac-Toe application at the end of the workshop. At
        the end of the workshop, I answered all the questions students had and
        they left with a working Tic-Tac-Toe solution using the Flutter
        framework.
      </p>
      <p>
        Flutter Workshop Recording - Ronit Dasgupta:{" "}
        <a
          href="https://drive.google.com/file/d/133nUu9CdcGpqTkRvw1b8N_dor96Rs4ih/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://drive.google.com/file/d/133nUu9CdcGpqTkRvw1b8N_dor96Rs4ih/view
        </a>
      </p>
    </div>
  );
};

const GenCyberVirtualCamp = () => {
  return (
    <div>
      <h2>GenCyber Virtual Camp</h2>
      <p>
        In the summer of 2021, I participated in a virtual camp hosted by the
        University of Washington. During this week-long camp I explored the
        fundamentals of Linux commands and gained more familiarity with using
        Raspberry Pi. In the camp, we studied the importance of cybersecurity
        and wireless networks while also learning about the hardware and
        software components of computers.
      </p>
    </div>
  );
};

const DubHacks = () => {
  return (
    <div>
      <h2>DubHacks</h2>
      <p>
        I participated in the DubHacks Hackathon '22 this past fall. During the
        hackathon, my team and I developed a web app that interacted with the
        Google Maps API. Our team fetched data from several APIs to display to
        users the in-depth COVID statistics in various places around the world.
        Through utilizing the Google Maps API along with Javascript, HTML, and
        CSS, we were able to display a graphic of the world and were able to
        shade each country darker depending on the amount of COVID cases there
        were in a specific country. The overall goal of our web app was to show
        users that are wanting to travel the places that have high/low COVID
        numbers.
      </p>
    </div>
  );
};

const HuskyCodingProject = () => {
  return (
    <div>
      <h2>Husky Coding Project</h2>
      <p>
        Husky Coding Project is a club at the University of Washington that
        makes programming teams to create any project they would like.
        Currently, I am part of the Societas team. Our team is planning to
        develop a website which allows UW students to explore their various
        interests and join interesting clubs/organizations that appeal to them.
        Our website will also have the capability to allow users to converse
        with others to connect with like-minded people. We just started working
        on our project and finished prototyping our web app in Figma. After
        prototyping we have delegated tasks to various team members to complete.
        I am working on the back-end for this project and am currently working
        on setting up and integrating a database with our web app. We have
        decided to use Python, Flask, React, and Firebase/Firestore to create
        the website.
      </p>
      <p>
        For the upcoming school year I will be a Club Lead | Onboarding Team in
        which I will attend weekly meetings to ensure Husky Coding Project
        expands as a club and gives more exposure to our members.
      </p>
    </div>
  );
};

const Dubvelopers = () => {
  return (
    <div>
      <h2>Dubvelopers</h2>
      <p>
        Dubvelopers is a club at the University of Washington that forms
        programming teams to help local organizations/communities. The team I am
        part of is working with the Muslim Student Association (MSA) to help
        create and update their website. Our team is split into a design and
        coding team. I am part of the coding team and we just published our
        finished website. In order to create the website, I mainly used React to
        create some of the pages for the website based on the Figma prototypes
        that were provided to us by our design team.
      </p>
      <p>
        Muslim Student Association (MSA) Website Link:{" "}
        <a href="https://msauw.org/" target="_blank" rel="noopener noreferrer">
          https://msauw.org/
        </a>
      </p>
    </div>
  );
};

const InteractiveIntelligence = () => {
  return (
    <div>
      <h2>Interactive Intelligence</h2>
      <p>
        I am currently participating in the Intro to Neur-AI course which covers
        the following topics in detail: ML, DL, neuroanatomy, computer vision,
        RL, language modeling, PyTorch, Jupiter Notebooks, LaTeX, etc. I am also
        conducting research relating to biologically inspired memory and
        exploring the neural networks associated with humans through
        computational algorithms/methods.
      </p>
    </div>
  );
};

const Projects = () => {
  const navigate = useNavigate();

  const handleButtonClick = (target: string) => {
    switch (target) {
      case "anythingle":
        navigate("/anythingle");
        break;
      case "covidbooking":
        navigate("/covidbooking");
        break;
      case "restaurantorderingsystem":
        navigate("/restaurantorderingsystem");
        break;
      case "connectfour":
        navigate("/connectfour");
        break;
      default:
        break;
    }
  };

  return (
    <div className="projects">
      <h2>Projects</h2>
      <button
        className="exp-button"
        onClick={() => handleButtonClick("anythingle")}
      >
        Anythingle
      </button>
      <button
        className="exp-button"
        onClick={() => handleButtonClick("covidbooking")}
      >
        COVID Booking
      </button>
      <button
        className="exp-button"
        onClick={() => handleButtonClick("restaurantorderingsystem")}
      >
        Restaurant Ordering System
      </button>
      <button
        className="exp-button"
        onClick={() => handleButtonClick("connectfour")}
      >
        Connect 4
      </button>
    </div>
  );
};

const Anythingle = () => {
  return (
    <div>
      <h2>Anythingle</h2>
      <p>
        Last summer (2022), I decided to develop a mobile application. I took
        several courses and watched many videos to understand the process behind
        publishing a mobile application on the AppStore. After many weeks of
        planning, I decided to use Flutter as the main framework with
        Firebase/Firestore as my backend for the application. I wanted to create
        a simple game similar to the popular game Wordle, but I added my own
        spin to it as well to be somewhat creative. My application has different
        game modes (countries, capitals, states, etc.) that users can choose
        from to allow for a more diverse set of topics rather than just guessing
        5-letter words. In addition to completing daily puzzles, users can also
        play previous puzzles as well by navigating through the calendar
        displayed in the application. After weeks of coding and debugging
        through several issues, I finally was able to publish my app,
        Anythingle, onto the AppStore. I am currently still working on updating
        the application as I would like to make further updates and include more
        functionalities for users to enjoy the game even more. Some
        functionalities that I will add in the future include enabling
        multiplayer game modes, unlocking the other game modes, and implementing
        a leaderboard for some friendly competition between users.
      </p>
    </div>
  );
};

const CovidBooking = () => {
  return (
    <div>
      <h2>COVID Booking</h2>
      <p>
        I developed a mobile application using the Flutter framework paired with
        Android Studio. Firebase Authentication and Firestore was used as the
        backend for this application to store the necessary information. My
        application enables users to book COVID testing appointments based on
        what the owner/head of a COVID testing facility inputs as available
        dates and times for COVID testing. Customers are able to view all the
        available slot times/dates and are able to book a COVID test appointment
        while also having the ability to cancel their appointment if needed. The
        owner of the testing facility has the ability to enter the business
        hours for each day and the time length of each COVID test. Extensive use
        of various libraries and classes are used to create and style the UI of
        the application. Currently the application is not available on any
        mobile device, however, I am working on deploying it for iOS and Android
        users in the near future.
      </p>
    </div>
  );
};

const RestaurantOrderingSystem = () => {
  return (
    <div>
      <h2>Restaurant Ordering System</h2>
      <p>
        I developed a desktop application that a real restaurant could use. The
        application is made for customers, restaurant owners, and cooks.
        Customers can view the menu items and order the items they want while
        selecting the quantity and total price they would have to pay. Owners
        can input, edit, and delete items from the restaurant menu and alter the
        pricing of the different menu items. Members of the kitchen, are able to
        view all the orders and can mark the order as completed once they finish
        cooking each order. The application was created in Java and Java Swing
        was used for the UI. SQL Server was also used to store the information
        in a database.
      </p>
    </div>
  );
};

const ConnectFour = () => {
  return (
    <div>
      <h2>Connect 4</h2>
      <p>
        I developed a simple Connect 4 application using Java and Java Swing for
        the UI. I utilized outside sources/libraries to create the traditional
        yellow and red chips and the grid for the game.
      </p>
    </div>
  );
};

const Links = () => {
  return (
    <div>
      <h2>Links</h2>
      <p>
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/ronitdasgupta/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.linkedin.com/in/ronitdasgupta/
        </a>
      </p>
      <p>
        GitHub:{" "}
        <a
          href="https://github.com/ronitdasgupta"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/ronitdasgupta
        </a>
      </p>
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      <h2>Contact</h2>
      <p>Phone Number: +1 (425)-677-0932</p>
      <p>Email(s): ronitd@uw.edu / ronitdasgupta@live.com</p>
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: To) => {
    if (path === "/resume") {
      window.open(
        "https://docs.google.com/document/d/1_5dh9YAO2oPY361O-sDvNUiyUjqvi97TBuVeHHrrM7I/edit?usp=sharing",
        "_blank"
      );
    } else {
      navigate(path);
    }
  };

  return (
    <div className="button-container">
      <button onClick={() => handleNavigate("/about")}>About Me</button>
      <button onClick={() => handleNavigate("/experience")}>Experience</button>
      <button onClick={() => handleNavigate("/resume")}>Resumé</button>
      <button onClick={() => handleNavigate("/projects")}>Projects</button>
      <button onClick={() => handleNavigate("/links")}>Links</button>
      <button onClick={() => handleNavigate("/contact")}>Contact</button>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <PersonalWebsiteHeading />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/links" element={<Links />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/primerica" element={<Primerica />} />
          <Route path="/codeahead" element={<CodeAhead />} />
          <Route path="/dev0" element={<Dev0 />} />
          <Route path="/gencyber" element={<GenCyberVirtualCamp />} />
          <Route path="/dubhacks" element={<DubHacks />} />
          <Route path="/husky" element={<HuskyCodingProject />} />
          <Route path="/dubvelopers" element={<Dubvelopers />} />
          <Route
            path="/interactiveintelligence"
            element={<InteractiveIntelligence />}
          />
          <Route path="/anythingle" element={<Anythingle />} />
          <Route path="/covidbooking" element={<CovidBooking />} />
          <Route
            path="/restaurantorderingsystem"
            element={<RestaurantOrderingSystem />}
          />
          <Route path="/connectfour" element={<ConnectFour />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
