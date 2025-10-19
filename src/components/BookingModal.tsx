import { X } from 'lucide-react';
import { useState, FormEvent } from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    service: '',
    date: '',
    description: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbzkf5DoPSefAn6QjYYuh7rL3bjK_EnbwixUR0OZoRaMxwR9srcGoBHAR_fRVtBZzVQpJA/exec',
        {
          method: 'POST',
          mode: 'no-cors', // important to avoid CORS blocking
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            formType: 'Booking',
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            address: formData.address,
            serviceType: formData.service,
            preferredDate: formData.date,
            message: '',
            issueDescription: formData.description,
          }),
        }
      );

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
        setFormData({
          name: '',
          phone: '',
          email: '',
          address: '',
          service: '',
          date: '',
          description: '',
        });
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your booking. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Book a Service</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h3>
              <p className="text-gray-600">
                Thank you for choosing us. We'll contact you shortly to confirm the appointment.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  placeholder="Your full name"
                />
              </div>

              {/* Contact */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Address *</label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  placeholder="Your complete address"
                />
              </div>

              {/* Service + Date */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Service Type *</label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  >
                    <option value="">Select a service</option>
                    <option value="Treadmill General Service">Treadmill General Service</option>
                    <option value="Belt and Motor Replacement">Belt and Motor Replacement</option>
                    <option value="Electronic Console Repair">Electronic Console Repair</option>
                    <option value="Lubrication & Maintenance">Lubrication & Maintenance</option>
                    <option value="On-site Diagnosis and Support">On-site Diagnosis and Support</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Preferred Date *</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>

              {/* Issue Description */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Issue Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none"
                  placeholder="Describe the issue with your treadmill..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
              >
                Confirm Booking
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
