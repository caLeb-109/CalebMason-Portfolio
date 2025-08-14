import React from 'react';
import { Link } from 'react-router-dom';

const Testimonials = () => {
const testimonials = [{
    id: 1,
    name: "Jane Smith",
    role: "Small Business Owner",
    content: "Caleb redesigned my website in just 48 hours and increased our conversion rate by 40%!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    name: "Mike Johnson",
    role: "Startup Founder",
    content: "Incredible attention to detail and fast turnaround. Will definitely work with Caleb again!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    name: "Edgar Davis",
    role: "Freelance Web Developer",
    content: "Caleb's website is a game-changer! I'm blown away by the speed of his work.",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  ]
  return (
    <div id="testimonials" className="testimonials">
      <h2>Testimonials</h2>
      <section className="py-12 bg-gray-50" id="testimonials">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Client Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>
    </div>
  );
};

export default Testimonials;