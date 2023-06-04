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
    title: "sem1",
    icon: web,
  },
  {
    title: "sem2",
    icon: mobile,
  },
  {
    title: "sem3",
    icon: backend,
  },
  {
    title: "sem4",
    icon: creator,
  },
];

export { navLinks, semesters};