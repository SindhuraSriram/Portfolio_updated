import { Calendar, MapPin } from 'lucide-react';
import { AnimatedSection } from './shared/AnimatedSection';

const education = [
  {
    school: 'University of Florida',
    degree: 'Master of Science - MS, Computer and Information Sciences',
    date: 'January 2023 - December 2024',
    location: 'Gainesville, Florida',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcourses.flvc.org%2FCollege%2FFlorida&psig=AOvVaw2CRzm5u4f5EuoVkb80ua-O&ust=1751236019614000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLiZld-UlY4DFQAAAAAdAAAAABAE'
  },
  {
    school: 'SASTRA University',
    degree: 'Bachelor of Technology - BTech, Computer Science',
    date: 'June 2016 - May 2020',
    location: 'Thanjavur, India',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.biophysics.org%2Fimportantdates%2Fbig-data-and-machine-learning-era-modeling-of-cells-and-systems&psig=AOvVaw3h6oTM5_ZgbswLpVDmcIyc&ust=1751236117628000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKja_I6VlY4DFQAAAAAdAAAAABAE'
  }
];

export function Education() {
  return (
    <section id="education" className="py-24 bg-gray-50 dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 dark:text-dark-text-primary">Education</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <AnimatedSection key={index}>
              <div className="bg-white dark:bg-dark-card rounded-2xl overflow-hidden card-shadow hover-scale">
                <div className="relative h-56">
                  <img
                    src={edu.image}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{edu.school}</h3>
                    <p className="text-white/90">{edu.degree}</p>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center text-gray-600 dark:text-dark-text-secondary">
                    <Calendar size={18} className="mr-2" />
                    {edu.date}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-dark-text-secondary">
                    <MapPin size={18} className="mr-2" />
                    {edu.location}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
