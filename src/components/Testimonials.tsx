import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Bangalore',
      rating: 5,
      text: 'Excellent service! Karthik fixed my treadmill motor issue in just 2 hours. Very professional and reasonable pricing. Highly recommended!',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      text: 'My treadmill was making loud noises and the belt was slipping. Karthik diagnosed the issue quickly and fixed it at a very fair price. Great experience!',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'Amit Patel',
      location: 'Pune',
      rating: 5,
      text: 'Been using his services for 3 years now. Always on time, honest about repairs needed, and uses quality parts. Trustworthy technician!',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'Sneha Reddy',
      location: 'Hyderabad',
      rating: 5,
      text: 'The console on my treadmill stopped working. Karthik came the same day, replaced the circuit board, and it works perfectly now. Thank you!',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-blue-600">Customers Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real feedback from satisfied customers who trust us with their fitness equipment
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
