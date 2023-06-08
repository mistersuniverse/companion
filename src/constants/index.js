import { mobile, backend, creator, web,} from "../assets";

const navLinks = [
  {
    id: "courses",
    title: "Courses",
  },
  // {
  //   id: "vision",
  //   title: "Vision",
  // },
  {
    id: "contact",
    title: "Contact",
  },
];

const semesters = [
  {
    sem: "sem1",
    icon: web,
  },
  {
    sem: "sem2",
    icon: mobile,
  },
  {
    sem: "sem3",
    icon: backend,
  },
  {
    sem: "sem4",
    icon: creator,
  },
];

const VISION = "Your Only College Companion";
const MESSAGEFORAUDIENCE = "Scroll Down"

export { navLinks, semesters, VISION, MESSAGEFORAUDIENCE};