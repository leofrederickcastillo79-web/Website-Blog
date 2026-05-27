import React from 'react';

const authors = [
  {
    name: "Ashley Jane N. delos Reyes",
    role: "1st Year BSCE student",
    institution: "Mapúa Malayan Colleges Mindanao",
    bio: "Ashley Jane N. delos Reyes is a 1st Year BSCE student at Mapúa Malayan Colleges Mindanao. She is a curious and goal-driven student who is currently taking the Life and Works of José Rizal (SS038) course under section A241, where she is gradually developing a deeper appreciation for history, nationalism, and personal reflection. She has co-authored the \"Intellect, Conscience, and Nation: The Formation of Jose Rizal's Character and Heroism\" blog. Alongside her academic journey, she is interested in practical self-improvement topics such as personal finance, productivity, and student opportunities, often taking a step-by-step approach when learning new things. She has a strong love for reading, which helps her gain new perspectives and continuously expand her understanding of both academic and real-world topics. She is also actively involved in volunteerism, reflecting her desire to contribute positively to others and her community. In her free time, she enjoys exploring online content that inspires learning, motivation, and creativity, while striving to apply both academic lessons and real-life experiences in meaningful ways.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "Leo Frederick B. Castillo",
    role: "1st Year BSCE student",
    institution: "Mapúa Malayan Colleges Mindanao",
    bio: "Leo Frederick B. Castillo is a 1st Year BSCE student at Mapúa Malayan Colleges Mindanao. He is a dedicated and curious learner who is currently taking the Life and Works of José Rizal (SS038) course under section A241, where he continues to build a deeper appreciation for history, critical thinking, and national identity. As a co-author of the blog “Intellect, Conscience, and Nation: The Formation of Jose Rizal's Character and Heroism,” he actively contributes insights that connect Rizal’s life to modern perspectives and student experiences. Alongside his academic journey, he is interested in improving his analytical skills, productivity, and problem-solving abilities, often taking a practical and step-by-step approach to learning. He has a growing interest in reading and exploring educational content that broadens his understanding of both academic subjects and real-world issues. He also values self-improvement and strives to apply what he learns in meaningful ways. In his free time, he enjoys engaging with online resources that promote learning, motivation, and personal growth, while aiming to balance his academic responsibilities with continuous self-development.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop"
  }
];

export function AboutAuthors() {
  return (
    <section id="about-us" className="pt-10 pb-20 px-6 max-w-5xl mx-auto relative z-10">
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-stone-200 dark:to-stone-800"></div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100 tracking-tight">
            About Us
          </h2>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-stone-200 dark:from-stone-800 to-transparent"></div>
        </div>
      </div>
      
      <div className="space-y-16">
        {authors.map((author, index) => (
          <div 
            key={author.name} 
            className={`flex flex-col md:flex-row gap-8 md:gap-12 items-start ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className="w-full md:w-1/3 shrink-0">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-stone-200 dark:border-stone-800 shadow-xl group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src={author.image} 
                  alt={author.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col pt-4">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#2C1B10] dark:text-[#D2B48C] mb-2">
                {author.name}
              </h3>
              <p className="text-[#B8860B] font-medium tracking-wide uppercase text-xs mb-6">
                {author.role} • {author.institution}
              </p>
              <div className="text-stone-700 dark:text-stone-300 leading-relaxed font-light mt-2 space-y-4">
                <p>{author.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
