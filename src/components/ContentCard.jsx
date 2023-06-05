const ContentCard = ({element}) => (
    <div className="pb-12 mb-16">
        <h1 className='text-white sm:text-[40px] text-[32px] font-bold text-center pb-8'>
            {element.title}
        </h1>
        <div className="flex justify-between flex-wrap gap-10"> 
        {element.content.map((content, index) => (
            <div key={index} className="sm:min-w-[45%] min-w-full green-pink-gradient p-3 rounded-lg sm:text-lg text-sm break-words">
                <a href={content.link} target={!(content.title === "coming soon")? "_blank": ""}>{content.title}</a>
            </div>
        ))}
        </div>
    </div>
);

export default ContentCard;