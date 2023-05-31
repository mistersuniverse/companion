import { mobile, backend, creator, web,} from "../assets";

const navLinks = [
  {
    id: "courses",
    title: "Courses",
  },
  {
    id: "vision",
    title: "Vision",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const semesters = [
  {
    title: "sem 1",
    icon: web,
  },
  {
    title: "sem 2",
    icon: mobile,
  },
  {
    title: "sem 3",
    icon: backend,
  },
  {
    title: "sem 4",
    icon: creator,
  },
];

const Courses = {

bms_sem2: 
  {
    micro_economics: 
    { 
      syllabus: 
        {
          title: "Syllabus", 
          content: 
            [
              {link: "https://drive.google.com/file/d/1U7CK6EhPxYGcWSNqf4VDyFh_EBO6jl8o/view", title:"Syllabus"}
            ]
        },

      short_notes: 
        {
          title: "Short Notes", 
          content: 
          [
            {link:"", title:"coming soon"}
          ]
        },

      short_course: 
        {
          title: "Short Course", 
          content: 
            [
              {link: "https://mru.org/principles-economics-microeconomics", title: "Principles of Economics: Microeconomics(MRU)"}
            ]
        }, // Principles of Economics: Microeconomics(MRU)

      long_course: 
        {
          title: "Long Course",
          content: 
            [
              {link: "https://ocw.mit.edu/courses/14-01-principles-of-microeconomics-fall-2018/video_galleries/lecture-videos/", title:"Principle of MicroEconomics(MIT)"}, 
              {link: "https://www.youtube.com/playlist?list=PLTjEimbqDkpBL55W6wye1jTcYePjehkT3", title:"Principle of MicroEconomics(YouTube Playlist)"}
            ]
        }, // Principle of MicroEconomics(MIT), Principle of MicroEconomics(YouTube Playlist)

      books: 
        {
          title: "Books",
          content: 
            [
              {link: "https://drive.google.com/file/d/1me1lJWhKor-Cb9HJUHkN848vtq9daBK9/view", title:"Principles of MicroEconomics(Mankiw)"}
            ], // Principles of MicroEconomics(Mankiw)
        },

      pyqs: 
        {
          title: "PYQs",
          content: 
            [
              {link:"https://drive.google.com/drive/folders/1On6aTBqfXYDa7ix4XX2StQMKTCoqTouW?usp=share_link", title:"Open"}
            ], 
        },
    },

    //Principles of Marketing
    principles_of_marketing: 
    { 
      syllabus: ["https://drive.google.com/file/d/1yRMQRBa3kHaZgy4oTdZwMentWRrGvNvj/view?usp=share_link"],
      short_notes: [],
      short_nourse: [],
      Long_course: ["https://www.coursera.org/learn/marketing-management/home/info"], // Coursera
      books: ["https://drive.google.com/file/d/1T6zUEkKLc87O7ccx0NmgjEjyhxLkeGzv/view", "https://drive.google.com/file/d/1-bW6XmWtcogT_MjUHq7imPXOZJto43yY/view", "https://drive.google.com/file/d/1B9NVe-Ie87z9uNuVELw1QHMoKiJblR0_/view"], // Principles of Marketing(Philio Kotler-2e), Principles of Marketing(Philio Kotler-14e), Principles of Marketing(Openstax)
      pyqs: ["https://drive.google.com/drive/folders/1g14MXI7bBBdeEJ-HGZW9L1etLDDnWAN2?usp=share_link"], 
    },
    
    // Cost & Management Accouting
    cost_and_management_accouting: 
    { 
      syllabus: ["https://drive.google.com/file/d/1cf2lc93YtIwO06riMl4GPyYlvUV8CiXP/view"],
      shortNotes: [],
      shortCourse: [],
      LongCourse: ["https://www.youtube.com/playlist?list=PLgEEv7JaX_GJpDXickV2gMdsC5qnAOUpn"], // YouTube Playlist
      Books: ["https://drive.google.com/file/d/19dE5HMGRCH9QTVNsOEAuRsJIT-jzu3JJ/view"], // Horngren's Cost Accounting: A Managerial Emphasis. Pearson.
      PYQs: ["https://drive.google.com/drive/folders/1On6aTBqfXYDa7ix4XX2StQMKTCoqTouW?usp=share_link"], 
    }

  }
}
export { navLinks, semesters, Courses};