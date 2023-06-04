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

const Courses = {

bms_sem2: 
  {
    micro_economics: 
    { 
      title:"Micro Economics",
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
              {link: "https://drive.google.com/file/d/1U7CK6EhPxYGcWSNqf4VDyFh_EBO6jl8o/view", title:"Syllabus"}
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

    principles_of_marketing:  
    { 
      title:"Principles of Marketing",
      syllabus: 
        {
          title: "Syllabus", 
          content: 
            [
              {link: "https://drive.google.com/file/d/1yRMQRBa3kHaZgy4oTdZwMentWRrGvNvj/view?usp=share_link", title:"Syllabus"}
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
              {link:"", title:"coming soon"}
            ]
        }, 

      long_course: 
        {
          title: "Long Course",
          content: 
            [
              {link: "https://www.coursera.org/learn/marketing-management/home/info", title:"Coursera"}, 
            ]
        }, 
      books: 
        {
          title: "Books",
          content: 
            [
              {link: "https://drive.google.com/file/d/1T6zUEkKLc87O7ccx0NmgjEjyhxLkeGzv/view", title:"Principles of Marketing(Philio Kotler-2e)"},
              {link: "https://drive.google.com/file/d/1-bW6XmWtcogT_MjUHq7imPXOZJto43yY/view", title:"Principles of Marketing(Philio Kotler-14e)"},
              {link: "https://drive.google.com/file/d/1B9NVe-Ie87z9uNuVELw1QHMoKiJblR0_/view", title:"Principles of Marketing(Openstax)"}
            ], 
        },

      pyqs: 
        {
          title: "PYQs",
          content: 
            [
              {link:"https://drive.google.com/drive/folders/1g14MXI7bBBdeEJ-HGZW9L1etLDDnWAN2?usp=share_link", title:"Open"}
            ], 
        },
    },
    
    // Cost & Management Accouting
    cost_and_management_accouting:
    { 
      title:"Cost & Management Accouting",
      syllabus: 
        {
          title: "Syllabus", 
          content: 
            [
              {link: "https://drive.google.com/file/d/1cf2lc93YtIwO06riMl4GPyYlvUV8CiXP/view", title:"Syllabus"}
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
              {link: "", title: "coming soon"}
            ]
        },

      long_course: 
        {
          title: "Long Course",
          content: 
            [
              {link: "https://www.youtube.com/playlist?list=PLgEEv7JaX_GJpDXickV2gMdsC5qnAOUpn", title:"YouTube Playlist"}, 
            ]
        },

      books: 
        {
          title: "Books",
          content: 
            [
              {link: "https://drive.google.com/file/d/19dE5HMGRCH9QTVNsOEAuRsJIT-jzu3JJ/view", title:"Horngren's Cost Accounting: A Managerial Emphasis. Pearson."}
            ], 
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
  },

bms_sem1: 
  {
    micro_economics1: 
    { 
      title:"Micro Economics",
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

    principles_of_marketing1:  
    { 
      title:"Principles of Marketing",
      syllabus: 
        {
          title: "Syllabus", 
          content: 
            [
              {link: "https://drive.google.com/file/d/1yRMQRBa3kHaZgy4oTdZwMentWRrGvNvj/view?usp=share_link", title:"Syllabus"}
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
              {link:"", title:"coming soon"}
            ]
        }, 

      long_course: 
        {
          title: "Long Course",
          content: 
            [
              {link: "https://www.coursera.org/learn/marketing-management/home/info", title:"Coursera"}, 
            ]
        }, 
      books: 
        {
          title: "Books",
          content: 
            [
              {link: "https://drive.google.com/file/d/1T6zUEkKLc87O7ccx0NmgjEjyhxLkeGzv/view", title:"Principles of Marketing(Philio Kotler-2e)"},
              {link: "https://drive.google.com/file/d/1-bW6XmWtcogT_MjUHq7imPXOZJto43yY/view", title:"Principles of Marketing(Philio Kotler-14e)"},
              {link: "https://drive.google.com/file/d/1B9NVe-Ie87z9uNuVELw1QHMoKiJblR0_/view", title:"Principles of Marketing(Openstax)"}
            ], 
        },

      pyqs: 
        {
          title: "PYQs",
          content: 
            [
              {link:"https://drive.google.com/drive/folders/1g14MXI7bBBdeEJ-HGZW9L1etLDDnWAN2?usp=share_link", title:"Open"}
            ], 
        },
    },
    
    // Cost & Management Accouting
    cost_and_management_accouting1:
    { 
      title:"Cost & Management Accouting",
      syllabus: 
        {
          title: "Syllabus", 
          content: 
            [
              {link: "https://drive.google.com/file/d/1cf2lc93YtIwO06riMl4GPyYlvUV8CiXP/view", title:"Syllabus"}
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
              {link: "", title: "coming soon"}
            ]
        },

      long_course: 
        {
          title: "Long Course",
          content: 
            [
              {link: "https://www.youtube.com/playlist?list=PLgEEv7JaX_GJpDXickV2gMdsC5qnAOUpn", title:"YouTube Playlist"}, 
            ]
        },

      books: 
        {
          title: "Books",
          content: 
            [
              {link: "https://drive.google.com/file/d/19dE5HMGRCH9QTVNsOEAuRsJIT-jzu3JJ/view", title:"Horngren's Cost Accounting: A Managerial Emphasis. Pearson."}
            ], 
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
  },

bcom_sem2: 
  {
    micro_economics3: 
    { 
      title:"Micro Economics",
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

    principles_of_marketing3:  
    { 
      title:"Principles of Marketing",
      syllabus: 
        {
          title: "Syllabus", 
          content: 
            [
              {link: "https://drive.google.com/file/d/1yRMQRBa3kHaZgy4oTdZwMentWRrGvNvj/view?usp=share_link", title:"Syllabus"}
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
              {link:"", title:"coming soon"}
            ]
        }, 

      long_course: 
        {
          title: "Long Course",
          content: 
            [
              {link: "https://www.coursera.org/learn/marketing-management/home/info", title:"Coursera"}, 
            ]
        }, 
      books: 
        {
          title: "Books",
          content: 
            [
              {link: "https://drive.google.com/file/d/1T6zUEkKLc87O7ccx0NmgjEjyhxLkeGzv/view", title:"Principles of Marketing(Philio Kotler-2e)"},
              {link: "https://drive.google.com/file/d/1-bW6XmWtcogT_MjUHq7imPXOZJto43yY/view", title:"Principles of Marketing(Philio Kotler-14e)"},
              {link: "https://drive.google.com/file/d/1B9NVe-Ie87z9uNuVELw1QHMoKiJblR0_/view", title:"Principles of Marketing(Openstax)"}
            ], 
        },

      pyqs: 
        {
          title: "PYQs",
          content: 
            [
              {link:"https://drive.google.com/drive/folders/1g14MXI7bBBdeEJ-HGZW9L1etLDDnWAN2?usp=share_link", title:"Open"}
            ], 
        },
    },
    
    // Cost & Management Accouting
    cost_and_management_accouting3:
    { 
      title:"Cost & Management Accouting",
      syllabus: 
        {
          title: "Syllabus", 
          content: 
            [
              {link: "https://drive.google.com/file/d/1cf2lc93YtIwO06riMl4GPyYlvUV8CiXP/view", title:"Syllabus"}
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
              {link: "", title: "coming soon"}
            ]
        },

      long_course: 
        {
          title: "Long Course",
          content: 
            [
              {link: "https://www.youtube.com/playlist?list=PLgEEv7JaX_GJpDXickV2gMdsC5qnAOUpn", title:"YouTube Playlist"}, 
            ]
        },

      books: 
        {
          title: "Books",
          content: 
            [
              {link: "https://drive.google.com/file/d/19dE5HMGRCH9QTVNsOEAuRsJIT-jzu3JJ/view", title:"Horngren's Cost Accounting: A Managerial Emphasis. Pearson."}
            ], 
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
  },

bcom_sem1: 
  {
    micro_economics4: 
    { 
      title:"Micro Economics",
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

    principles_of_marketing4:  
    { 
      title:"Principles of Marketing",
      syllabus: 
        {
          title: "Syllabus", 
          content: 
            [
              {link: "https://drive.google.com/file/d/1yRMQRBa3kHaZgy4oTdZwMentWRrGvNvj/view?usp=share_link", title:"Syllabus"}
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
              {link:"", title:"coming soon"}
            ]
        }, 

      long_course: 
        {
          title: "Long Course",
          content: 
            [
              {link: "https://www.coursera.org/learn/marketing-management/home/info", title:"Coursera"}, 
            ]
        }, 
      books: 
        {
          title: "Books",
          content: 
            [
              {link: "https://drive.google.com/file/d/1T6zUEkKLc87O7ccx0NmgjEjyhxLkeGzv/view", title:"Principles of Marketing(Philio Kotler-2e)"},
              {link: "https://drive.google.com/file/d/1-bW6XmWtcogT_MjUHq7imPXOZJto43yY/view", title:"Principles of Marketing(Philio Kotler-14e)"},
              {link: "https://drive.google.com/file/d/1B9NVe-Ie87z9uNuVELw1QHMoKiJblR0_/view", title:"Principles of Marketing(Openstax)"}
            ], 
        },

      pyqs: 
        {
          title: "PYQs",
          content: 
            [
              {link:"https://drive.google.com/drive/folders/1g14MXI7bBBdeEJ-HGZW9L1etLDDnWAN2?usp=share_link", title:"Open"}
            ], 
        },
    },
    
    // Cost & Management Accouting
    cost_and_management_accouting4:
    { 
      title:"Cost & Management Accouting",
      syllabus: 
        {
          title: "Syllabus", 
          content: 
            [
              {link: "https://drive.google.com/file/d/1cf2lc93YtIwO06riMl4GPyYlvUV8CiXP/view", title:"Syllabus"}
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
              {link: "", title: "coming soon"}
            ]
        },

      long_course: 
        {
          title: "Long Course",
          content: 
            [
              {link: "https://www.youtube.com/playlist?list=PLgEEv7JaX_GJpDXickV2gMdsC5qnAOUpn", title:"YouTube Playlist"}, 
            ]
        },

      books: 
        {
          title: "Books",
          content: 
            [
              {link: "https://drive.google.com/file/d/19dE5HMGRCH9QTVNsOEAuRsJIT-jzu3JJ/view", title:"Horngren's Cost Accounting: A Managerial Emphasis. Pearson."}
            ], 
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

  }
}

export { navLinks, semesters, Courses};