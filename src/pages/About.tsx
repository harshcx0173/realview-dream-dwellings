
import { Award, Users, Target, Eye, Heart, Star } from "lucide-react";

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About Realview Reality</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Founded on the principles of trust, expertise, and personalized service, 
            we're committed to making your real estate journey exceptional.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Realview Reality was founded with a simple yet powerful vision: to transform 
                the way people buy, sell, and rent properties. We believe that finding the 
                right property should be an exciting journey, not a stressful ordeal.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our team brings together decades of combined experience in real estate, 
                finance, and customer service. We understand that every client has unique 
                needs, and we pride ourselves on delivering personalized solutions that 
                exceed expectations.
              </p>
              <p className="text-lg text-gray-600">
                From first-time homebuyers to seasoned investors, we've helped hundreds 
                of clients achieve their real estate goals. Our commitment to transparency, 
                integrity, and results has made us a trusted name in the industry.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800&h=600&fit=crop"
                alt="Our Team"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Founder</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="text-center">
                  <img
                    src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=400&h=400&fit=crop"
                    alt="Bhargav Rakholiya"
                    className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-2xl font-bold text-gray-800">Bhargav Rakholiya</h3>
                  <p className="text-primary font-medium">Founder & CEO</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-lg text-gray-600 mb-4">
                    Bhargav Rakholiya founded Realview Reality with over 15 years of experience 
                    in the real estate industry. His vision was to create a company that puts 
                    clients first and delivers exceptional results through personalized service 
                    and deep market expertise.
                  </p>
                  <p className="text-lg text-gray-600 mb-4">
                    Under his leadership, Realview Reality has grown to become a trusted name 
                    in real estate, known for its integrity, professionalism, and commitment 
                    to client success. Bhargav's hands-on approach ensures that every client 
                    receives the attention and expertise they deserve.
                  </p>
                  <p className="text-lg text-gray-600">
                    "Real estate is more than transactions – it's about helping people find 
                    their perfect place in the world," says Bhargav.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="text-center">
              <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide exceptional real estate services that exceed client expectations 
                through personalized attention, market expertise, and unwavering integrity.
              </p>
            </div>

            {/* Vision */}
            <div className="text-center">
              <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted and respected real estate company, known for 
                transforming the property buying and selling experience for our clients.
              </p>
            </div>

            {/* Values */}
            <div className="text-center">
              <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Values</h3>
              <p className="text-gray-600">
                Integrity, transparency, client-first approach, and continuous innovation 
                drive everything we do. We believe in building lasting relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Realview Reality?</h2>
            <p className="text-xl max-w-3xl mx-auto">
              We're not just another real estate company. Here's what sets us apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Expert Knowledge",
                description: "Deep understanding of local markets and property trends"
              },
              {
                icon: Users,
                title: "Personalized Service",
                description: "Tailored solutions that match your unique needs and goals"
              },
              {
                icon: Star,
                title: "Proven Results",
                description: "Track record of successful transactions and satisfied clients"
              },
              {
                icon: Heart,
                title: "Client-First Approach",
                description: "Your success is our success – we're committed to your goals"
              },
              {
                icon: Target,
                title: "Market Insights",
                description: "Data-driven strategies to help you make informed decisions"
              },
              {
                icon: Eye,
                title: "Transparent Process",
                description: "Clear communication and honest guidance every step of the way"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-200">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
