import React from 'react'

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 1500);
  };

  const socialLinks = [
    { name: 'GitHub', icon: 'github', url: 'https://github.com/Butterfly1411', color: 'text-gray-800' },
    { name: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/butterfly_sbt/', color: 'text-pink-600' },
    { name: 'Telegram', icon: 'telegram', url: 'https://t.me/Butterfly_sbt', color: 'text-blue-400' }
  ];
  return (
    <section>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Let's Connect</h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card-glass p-8">
            <h3 className="text-2xl font-semibold mb-6 text-[var(--text-primary)]">
              Send me a message
            </h3>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg">
                <p className="text-green-700 font-medium">Thank you! Your message has been sent successfully.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-colors bg-[var(--input-bg)] text-[var(--text-primary)]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-colors bg-[var(--input-bg)] text-[var(--text-primary)]"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-colors bg-[var(--input-bg)] text-[var(--text-primary)] resize-none"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <div className="icon-loader animate-spin mr-2 text-lg"></div>
                    Sending...
                  </span>
                ) : (
                  "Let's Connect ✨"
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="card-glass p-8">
              <h3 className="text-2xl font-semibold mb-6 text-[var(--text-primary)]">
                Get in touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="icon-mail text-[var(--primary-color)] mr-4 text-xl"></div>
                  <span className="text-[var(--text-secondary)]">sabohattoshpolatova72@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <div className="icon-map-pin text-[var(--primary-color)] mr-4 text-xl"></div>
                  <span className="text-[var(--text-secondary)]">Toshkent , Almalyk</span>
                </div>
                <div className="flex items-center">
                  <div className="icon-clock text-[var(--primary-color)] mr-4 text-xl"></div>
                  <span className="text-[var(--text-secondary)]">Available for freelance work</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="card-glass p-8">
              <h3 className="text-xl font-semibold mb-6 text-[var(--text-primary)]">
                Follow me
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-12 h-12 bg-[var(--card-bg)] rounded-full flex items-center justify-center hover:bg-[var(--primary-color)]/10 transition-colors shadow-md border border-[var(--border-color)]"
                    title={social.name}
                  >
                    <i className={`bi bi-${social.icon} text-xl text-[var(--secondary-color)]`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact