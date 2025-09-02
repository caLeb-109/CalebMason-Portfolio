import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "AfroTech Flow Café",
      role: "Freelance WordPress Web Developer",
      location: "Lagos, Nigeria",
      rating: 3.9,
      content:
        "Caleb redesigned my website in just 48 hours and increased our conversion rate by 40%! His attention to detail and understanding of user experience helped transform our online presence. The new design perfectly captures our brand's essence while making it easier for customers to navigate and place orders. His WordPress expertise and responsive communication made the whole process smooth.",
      avatar: "/AfroTech.png",
      projectLink: "https://afrotech.com",
    },
    {
      id: 2,
      name: "MoodBoard AI Generator",
      role: "Web/Landing Page Designer",
      location: "Accra, Ghana",
      rating: 4.0,
      content:
        "Caleb's website is a game-changer! I'm blown away by the speed of his work and the quality of the final product. He implemented complex AI integration features seamlessly while maintaining an intuitive user interface. The landing page he designed increased our user signup rate by 65% in the first month. His technical expertise combined with creative design skills makes him a rare find in the industry.",
      avatar: "/MoodBoard.png",
      projectLink: "https://moodboardai.com",
    },
    {
      id: 3,
      name: "Luminous Media",
      role: "Brand Identity Design",
      location: "Nairobi, Kenya",
      rating: 5,
      content:
        "Caleb Mason's designs are sleek and clean modern. Will definitely work with Caleb again!✨ He took our vague concept and transformed it into a cohesive brand identity that perfectly represents our company's values. His process was thorough, from initial mockups to final implementation. The style guide he created has become our bible for maintaining brand consistency across all platforms. His understanding of current design trends while maintaining timeless elements is impressive.",
      avatar: "/luminousMedia.JPG",
      projectLink: "https://luminousmedia.com",
    },
    // {
    //   id: 4,
    //   name: " ",
    //   role: "Freelance Web Developer",
    //   content:
    //     "Caleb's expertise in web development is unmatched. Highly recommend his services for real!",
    //   avatar: "",
    // },
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <i
        key={index}
        className={`fas fa-star ${index < rating ? "text-yellow-400" : ""}`}
      />
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-stone-800 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        ></div>
      </div>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-16"
          >
            <span className="text-stone-400 text-sm font-medium tracking-wider uppercase mb-3 block">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What Clients Say
            </h2>
            <div className="h-1 w-20 bg-stone-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-stone-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 hover:transform hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="relative shrink-0">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover ring-2 ring-stone-500"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-stone-400 text-sm">{testimonial.role}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex gap-0.5">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                </div>

                <blockquote className="mt-6 relative">
                  <svg
                    className="absolute -top-2 -left-2 w-8 h-8 text-stone-700/30"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-stone-300 text-sm md:text-base leading-relaxed pl-6">
                    {testimonial.content}
                  </p>
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Testimonials;
