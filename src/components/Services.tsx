import { Wrench, Settings, Zap, Droplet, Search, Calendar } from 'lucide-react';

interface ServicesProps {
  onBookService: () => void;
}

export default function Services({ onBookService }: ServicesProps) {
  const services = [
    {
      icon: Wrench,
      title: 'Treadmill General Service',
      description:
        'Complete inspection, cleaning, and tune-up of your treadmill to ensure optimal performance.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjp_BbOcNOzky8ihsZG0alpip6fbBfe0Z1g&s',
    },
    {
      icon: Settings,
      title: 'Belt and Motor Replacement',
      description:
        'Professional replacement of worn-out belts and motors with genuine parts for smooth operation.',
      image: 'https://images.pexels.com/photos/4162485/pexels-photo-4162485.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      icon: Zap,
      title: 'Electronic Console Repair',
      description:
        'Expert diagnosis and repair of display panels, control boards, and electronic components.',
      image: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      icon: Droplet,
      title: 'Lubrication & Maintenance',
      description:
        'Regular lubrication service to reduce friction, noise, and extend your treadmill lifespan.',
      image: 'https://images.pexels.com/photos/4164844/pexels-photo-4164844.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      icon: Search,
      title: 'On-site Diagnosis and Support',
      description:
        'Free on-site inspection and diagnosis with detailed report and repair recommendations.',
      image: 'https://images.pexels.com/photos/3760275/pexels-photo-3760275.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive treadmill repair and maintenance solutions for all major brands
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-600 p-3 rounded-lg shadow-lg">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <button
                  onClick={onBookService}
                  className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
