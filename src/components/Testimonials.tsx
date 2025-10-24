import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Padmanaban N',
      rating: 5,
      text: 'I recently had an outstanding experience with Karthick Treadmill Repair & Service! Their knowledgeable staff quickly diagnosed the issue with my treadmill and provided efficient repairs. What truly stood out was their helpful behavior, making the entire process seamless and stress-free. I highly recommend Karthick for anyone in need of reliable equipment repair. Their expertise and customer service are top-notch!',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'SRIVIDYA',
      rating: 5,
      text: 'I had a great experience with Karthick Treadmill Repair & Service. The business is very easy to reach. I found their services to be well priced, which made me happy. The staff was friendly and helpful. They fixed my treadmill quickly and did a good job. Overall, I recommend Karthick Treadmill Repair & Service for anyone who needs help with fitness equipment!',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'MUTHUKUMAR',
      rating: 5,
      text: 'I had an excellent experience with Karthick Treadmill Repair & Service! They are very well connected and easy to reach. The customer service is great; they answered all my questions quickly. The staff is attentive and really cares about helping you. Plus, their location is easy to find, making the whole process smooth and convenient. Highly recommend!',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'anisha vignesh',
      rating: 5,
      text: 'The customer service was excellent. They were friendly and helpful. They listened to my problems and fixed my treadmill quickly. I felt very happy with their work. I would recommend them to everyone who needs help with fitness equipment. Their service is really good!',
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
