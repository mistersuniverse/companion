export default ({subject, books, long_course, short_course, pyqs, short_notes, syllabus}) => (
    { 
      title: subject,
      syllabus: {
          title: "Syllabus", 
          content: syllabus
        },
    
      short_notes: 
        {
          title: "Short Notes", 
          content: short_notes
        },
    
      short_course: {
          title: "Short Course", 
          content: short_course
        },
    
      long_course: 
        {
          title: "Long Course",
          content: long_course
        }, 
    
      books: 
        {
          title: "Books",
          content: books
        },
    
      pyqs: 
        {
          title: "PYQs",
          content: pyqs
        },
    })
    