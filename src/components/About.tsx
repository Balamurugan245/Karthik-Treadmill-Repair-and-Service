import { Award, Users, Wrench, Clock } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Award,
      title: 'Certified Technician',
      description: 'Factory-trained and certified professional',
    },
    {
      icon: Users,
      title: 'Customer First',
      description: '500+ satisfied customers across the city',
    },
    {
      icon: Wrench,
      title: 'Quality Service',
      description: 'Genuine parts and expert workmanship',
    },
    {
      icon: Clock,
      title: 'Quick Response',
      description: 'Same-day service available',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.pexels.com/photos/3775123/pexels-photo-3775123.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Karthik - Treadmill Expert"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">Karthick</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over 3 years of experience in treadmill repair and fitness equipment servicing,
              Karthik has become a trusted name in the industry. Starting as an apprentice in a
              leading fitness equipment company, he developed a deep understanding of all major
              treadmill brands and models.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Today, Karthick Treadmill Repair and Service is known for its commitment to quality,
              reliability, and customer satisfaction. We believe in honest service, transparent
              pricing, and building lasting relationships with our customers.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <feature.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{feature.title}</div>
                    <div className="text-sm text-gray-600">{feature.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
