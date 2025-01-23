import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export function SEO({ 
  title = "Sindhura Sriram - Software Engineer & ML Enthusiast",
  description = "Software engineer with expertise in data modeling, machine learning, cloud platforms, and full-stack development. MS in Computer Science at UF.",
  image = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
  url = "https://sindhura-sriram.com"
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional SEO tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#FF385C" />
      <link rel="canonical" href={url} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Sindhura Sriram",
          "url": url,
          "image": image,
          "sameAs": [
            "https://www.linkedin.com/in/sindhurasriram",
            "https://github.com/SindhuraSriram"
          ],
          "jobTitle": "Software Engineer",
          "worksFor": {
            "@type": "Organization",
            "name": "University of Florida"
          },
          "alumniOf": {
            "@type": "CollegeOrUniversity",
            "name": "SASTRA University"
          }
        })}
      </script>
    </Helmet>
  );
}