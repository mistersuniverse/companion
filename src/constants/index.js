import { mobile, backend, creator, web,} from "../assets";

const navLinks = [
  {
    id: "Courses",
    title: "Courses",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const newCourses = [
  {
    title: "BMS",
    icon: web,
  },
  {
    title: "B.COM",
    icon: mobile,
  },
  {
    title: "Coming Soon",
    icon: backend,
  },
  {
    title: "Coming Soon",
    icon: creator,
  },
];

export { navLinks, newCourses};