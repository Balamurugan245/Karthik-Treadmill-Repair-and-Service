import { Phone, Calendar } from 'lucide-react';

interface HeroProps {
  onBookService: () => void;
}

export default function Hero({ onBookService }: HeroProps) {
  return (
    <section id="home" className="relative pt-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Expert Treadmill Repair & Maintenance Services in{' '}
              <span className="text-blue-600">Your City</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              Fast, reliable, and affordable treadmill repair and service at your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onBookService}
                className="flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book a Service
              </button>
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">10+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">24h</div>
                <div className="text-sm text-gray-600">Response Time</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 shadow-2xl">
              <img
                src="https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional Treadmill Service"
                className="rounded-lg w-full h-auto object-cover shadow-lg"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-3 rounded-full">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Certified Experts</div>
                  <div className="text-sm text-gray-600">Licensed & Insured</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
