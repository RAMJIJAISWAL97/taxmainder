import Headings from "components/Headings";
import Layout from "Layout/Layout";
import Link from "next/link";
import styles from "styles/Career.module.css";
import OptimizedImage from "components/OptimizedImage";

export default function Career() {
  const benefits = [
    {
      icon: "💰",
      title: "Competitive Salary",
      description: "We offer industry-leading compensation packages with regular performance reviews"
    },
    {
      icon: "🏥",
      title: "Health & Wellness",
      description: "Comprehensive health insurance, gym memberships, and mental wellness programs"
    },
    {
      icon: "📚",
      title: "Learning & Development",
      description: "Annual training budget, certifications, and access to online learning platforms"
    },
    {
      icon: "🏠",
      title: "Flexible Work",
      description: "Remote work options, flexible hours, and generous PTO policy"
    },
    {
      icon: "🎯",
      title: "Career Growth",
      description: "Clear career progression paths with mentorship and leadership programs"
    },
    {
      icon: "🎉",
      title: "Fun Culture",
      description: "Regular team outings, celebrations, and a vibrant work environment"
    }
  ];

  const openPositions = [
    {
      title: "Senior Legal Consultant",
      department: "Legal Services",
      description: "Lead complex legal cases and mentor junior consultants in corporate law matters",
      experience: "5+ years",
      location: "Remote/Hybrid"
    },
    {
      title: "Tax Specialist",
      department: "Accounting & Tax",
      description: "Handle GST returns, income tax filings, and provide strategic tax planning advice",
      experience: "3+ years",
      location: "Remote/Hybrid"
    },
    {
      title: "Full Stack Developer",
      department: "Technology",
      description: "Build scalable web applications and enhance our digital service platform",
      experience: "4+ years",
      location: "Remote/Hybrid"
    },
    {
      title: "Business Development Manager",
      department: "Sales & Marketing",
      description: "Drive business growth, manage client relationships, and expand market presence",
      experience: "3+ years",
      location: "Hybrid"
    },
    {
      title: "IPR Specialist",
      department: "Intellectual Property",
      description: "Manage trademark, patent, and copyright registrations and client consultations",
      experience: "2+ years",
      location: "Remote/Hybrid"
    },
    {
      title: "Compliance Analyst",
      department: "Regulatory Affairs",
      description: "Ensure regulatory compliance across all business operations and client services",
      experience: "2+ years",
      location: "Remote/Hybrid"
    }
  ];

  const cultureValues = [
    {
      icon: "🤝",
      title: "Collaboration",
      description: "We believe in teamwork and open communication"
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "Constantly pushing boundaries and embracing new ideas"
    },
    {
      icon: "🎯",
      title: "Excellence",
      description: "Striving for the highest standards in everything we do"
    },
    {
      icon: "❤️",
      title: "Empathy",
      description: "Understanding and supporting our team and clients"
    }
  ];

  return (
    <Layout header footer notification>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Build Your Career With Us</h1>
          <p>Join India&apos;s fastest-growing business services company and transform your career journey</p>
          <a href="#positions" className={styles.ctaButton}>View Open Positions</a>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Why Join GST Seva?</h2>
          <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#666', maxWidth: '800px', margin: '0 auto 3rem' }}>
            We&apos;re not just offering jobs – we&apos;re building careers. Be part of a team that&apos;s revolutionizing 
            business services in India with cutting-edge technology and exceptional client service.
          </p>
          
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                <div className={styles.benefitIcon}>{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className={styles.section} id="positions">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Current Openings</h2>
          <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#666', marginBottom: '3rem' }}>
            Find your perfect role and take the next step in your career journey
          </p>
          
          <div className={styles.positionsGrid}>
            {openPositions.map((position, index) => (
              <div key={index} className={styles.positionCard}>
                <h3 className={styles.positionTitle}>{position.title}</h3>
                <p className={styles.positionDepartment}>{position.department}</p>
                <p className={styles.positionDescription}>{position.description}</p>
                <div style={{ marginBottom: '1.5rem' }}>
                  <span style={{ background: '#f0f0f0', padding: '5px 10px', borderRadius: '15px', fontSize: '0.9rem', marginRight: '10px' }}>
                    {position.experience}
                  </span>
                  <span style={{ background: '#e8f4f8', padding: '5px 10px', borderRadius: '15px', fontSize: '0.9rem', color: '#667eea' }}>
                    {position.location}
                  </span>
                </div>
                <button className={styles.applyButton} onClick={() => window.location.href = 'mailto:GSTSeva@gmail.com?subject=Application for ' + position.title}>
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className={`${styles.section} ${styles.cultureSection}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Culture & Values</h2>
          <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#666', maxWidth: '800px', margin: '0 auto 3rem' }}>
            We foster an environment where innovation thrives, ideas are valued, and every team member 
            can reach their full potential
          </p>
          
          <div className={styles.cultureGrid}>
            {cultureValues.map((value, index) => (
              <div key={index} className={styles.cultureItem}>
                <div className={styles.cultureIcon}>{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className={`${styles.section} ${styles.applicationProcess}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>How to Apply</h2>
          <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#666', marginBottom: '3rem' }}>
            Our simple 4-step process to join our team
          </p>
          
          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <h3>Send Your Resume</h3>
              <p>Email your updated resume to GSTSeva@gmail.com</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <h3>Initial Screening</h3>
              <p>Our HR team will review your application</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <h3>Technical Interview</h3>
              <p>Showcase your skills in a comprehensive interview</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>4</div>
              <h3>Join Our Team</h3>
              <p>Welcome aboard! Start your exciting journey</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.section} style={{ background: '#f8f9fa', textAlign: 'center' }}>
        <div className={styles.container}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Ready to Start Your Journey?</h2>
          <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Have questions about our open positions or want to learn more about working at GST Seva? 
            We&apos;d love to hear from you!
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <a href="mailto:GSTSeva@gmail.com" className={styles.ctaButton}>
              Email Us
            </a>
            <a href="tel:+91XXXXXXXXXX" className={styles.ctaButton} style={{ background: '#28a745' }}>
              Call Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
