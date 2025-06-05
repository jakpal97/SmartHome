import { groq } from 'next-sanity'

export const heroQuery = groq`
  *[_type == "hero"][0] {
    _id,
    title,
    subtitle,
    description,
    primaryButtonText,
    secondaryButtonText,
    heroImage {
      asset,
      hotspot
    }
  }
`

export const featuresQuery = groq`
  *[_type == "feature"] | order(order asc) {
    _id,
    title,
    description,
    icon,
    order
  }
`

export const productsQuery = groq`
  *[_type == "product"] | order(order asc) {
    _id,
    name,
    description,
    price,
    image {
      asset,
      hotspot
    },
    features,
    category,
    order
  }
`

export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(order asc) {
    _id,
    name,
    role,
    location,
    content,
    rating,
    avatar {
      asset,
      hotspot
    },
    order
  }
`

export const statsQuery = groq`
  *[_type == "stats"][0] {
    _id,
    homesAutomated,
    energySaved,
    countries,
    satisfaction
  }
`

export const contactPageQuery = groq`
  *[_type == "contactPage"][0] {
    _id,
    title,
    heroSection {
      title,
      subtitle,
      description
    },
    contactInfo {
      title,
      subtitle,
      description,
      office {
        title,
        address
      },
      phone {
        title,
        number,
        hours
      },
      email {
        title,
        address,
        responseTime
      },
      liveChat {
        title,
        description,
        availability
      }
    },
    contactForm {
      title,
      departments
    },
    mapSection {
      title,
      mapUrl
    },
    faqSection {
      title,
      subtitle,
      faqs[] {
        question,
        answer
      }
    }
  }
`

export const productsPageQuery = groq`
  *[_type == "productsPage"][0] {
    _id,
    title,
    heroSection {
      title,
      subtitle,
      description,
      backgroundImage {
        asset,
        hotspot
      }
    },
    featuredProducts {
      title,
      subtitle,
      description
    },
    categories[] {
      name,
      slug,
      description,
      icon,
      image {
        asset,
        hotspot
      }
    },
    ctaSection {
      title,
      description,
      buttonText,
      buttonLink
    },
    seo {
      metaTitle,
      metaDescription
    }
  }
`
