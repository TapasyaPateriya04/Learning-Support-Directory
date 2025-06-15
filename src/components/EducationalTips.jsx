import dyslexiaImg from '../assets/dyslexia.png';
import adhdImg from '../assets/adhd.png';
import autismImg from '../assets/autism.png';
import executiveImg from '../assets/executive.png';

const EducationalTips = () => {
  const tips = [
    {
      title: 'What is Dyslexia?',
      content:
        'Dyslexia affects reading and writing skills. Children may mix up letters, struggle to decode words, or have slow reading fluency.',
      image: dyslexiaImg,
    },
    {
      title: 'What is ADHD?',
      content:
        'ADHD impacts attention, organization, and impulse control. Children may be easily distracted, restless, or struggle with focus.',
      image: adhdImg,
    },
    {
      title: 'What is Autism?',
      content:
        'Autism is a neurodevelopmental condition that influences communication, sensory processing, social interaction, and behavior.',
      image: autismImg,
    },
    {
      title: 'What is Executive Dysfunction?',
      content:
        'It affects planning, memory, self-regulation, and task execution. It often occurs alongside ADHD, Autism, or other learning challenges.',
      image: executiveImg,
    },
  ];

  return (
    <section className="w-full py-14 px-4 sm:px-8 md:px-12 bg-white dark:bg-[#0f0f13] transition-colors duration-300">
      <h2 className="text-3xl font-extrabold text-center text-blue-700 dark:text-blue-400 mb-12">
        Understand Learning Difficulties
      </h2>

      <div className="flex flex-wrap justify-center gap-10">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="relative w-72 h-64 perspective group"
          >
            <div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180">
              {/* FRONT SIDE */}
              <div className="absolute inset-0 rounded-xl overflow-hidden bg-white dark:bg-[#29292c] text-[16px] isolate shadow-md z-10 backface-hidden">
                {/* Side glow bar */}
                <div className="absolute w-1 h-[calc(100%-1.3rem)] top-[0.65rem] left-2 rounded-sm bg-gradient-to-b from-[#2eadff] via-[#3d83ff] to-[#7e61ff] z-[4] transition-transform duration-300 group-hover:translate-x-[0.15rem]" />

                {/* Inner background */}
                <div className="absolute inset-[1px] rounded-[15px] bg-gray-100 dark:bg-[#18181b] z-[2]" />

                {/* Title & Content */}
                <div className="relative z-[5] px-5 pt-4 text-blue-700 dark:text-[#32a6ff] font-semibold text-lg transition-transform duration-300 group-hover:translate-x-[0.15rem]">
                  {tip.title}
                </div>
                <div className="relative z-[5] px-5 pb-2 pt-2 text-gray-700 dark:text-[#99999d] text-sm transition-transform duration-300 group-hover:translate-x-[0.25rem]">
                  {tip.content}
                </div>
              </div>

              {/* BACK SIDE */}
              <div className="absolute inset-0 rounded-xl overflow-hidden bg-gray-100 dark:bg-[#18181b] shadow-md transform rotate-y-180 backface-hidden flex items-center justify-center">
                <img src={tip.image} alt={tip.title} className="w-40 h-40 object-contain" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationalTips;
