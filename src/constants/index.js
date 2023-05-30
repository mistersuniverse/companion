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

const BMS = [

  //MicroEconomics
  { syllabus: ["https://drive.google.com/file/d/1U7CK6EhPxYGcWSNqf4VDyFh_EBO6jl8o/view"],
    shortNotes: [],
    shortCourse: ["https://mru.org/principles-economics-microeconomics"], // Principles of Economics: Microeconomics(MRU)
    LongCourse: ["https://ocw.mit.edu/courses/14-01-principles-of-microeconomics-fall-2018/video_galleries/lecture-videos/", "https://www.youtube.com/playlist?list=PLTjEimbqDkpBL55W6wye1jTcYePjehkT3"], // Principle of MicroEconomics(MIT), Principle of MicroEconomics(YouTube Playlist)
    Books: ["https://drive.google.com/file/d/1me1lJWhKor-Cb9HJUHkN848vtq9daBK9/view"], // Principles of MicroEconomics(Mankiw)
    PYQs: ["https://drive.google.com/drive/folders/1On6aTBqfXYDa7ix4XX2StQMKTCoqTouW?usp=share_link"], 
  },

  //Principles of Marketing
  { syllabus: ["https://drive.google.com/file/d/1yRMQRBa3kHaZgy4oTdZwMentWRrGvNvj/view?usp=share_link"],
    shortNotes: [],
    shortCourse: [],
    LongCourse: ["https://www.coursera.org/learn/marketing-management/home/info"], // Coursera
    Books: ["https://drive.google.com/file/d/1T6zUEkKLc87O7ccx0NmgjEjyhxLkeGzv/view", "https://drive.google.com/file/d/1-bW6XmWtcogT_MjUHq7imPXOZJto43yY/view", "https://drive.google.com/file/d/1B9NVe-Ie87z9uNuVELw1QHMoKiJblR0_/view"], // Principles of Marketing(Philio Kotler-2e), Principles of Marketing(Philio Kotler-14e), Principles of Marketing(Openstax)
    PYQs: ["https://drive.google.com/drive/folders/1g14MXI7bBBdeEJ-HGZW9L1etLDDnWAN2?usp=share_link"], 
  },
  
  // Cost & Management Accouting
  { syllabus: ["https://drive.google.com/file/d/1cf2lc93YtIwO06riMl4GPyYlvUV8CiXP/view"],
    shortNotes: [],
    shortCourse: [],
    LongCourse: ["https://www.youtube.com/playlist?list=PLgEEv7JaX_GJpDXickV2gMdsC5qnAOUpn"], // YouTube Playlist
    Books: ["https://drive.google.com/file/d/19dE5HMGRCH9QTVNsOEAuRsJIT-jzu3JJ/view"], // Horngren's Cost Accounting: A Managerial Emphasis. Pearson.
    PYQs: ["https://drive.google.com/drive/folders/1On6aTBqfXYDa7ix4XX2StQMKTCoqTouW?usp=share_link"], 
  }
]
export { navLinks, newCourses};