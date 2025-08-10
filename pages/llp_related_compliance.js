import Headings from "components/Headings";
import Layout from "Layout/Layout";
import Link from "next/link";
import styles from "styles/LLPCompliance.module.css";
import OptimizedImage from "components/OptimizedImage";

export default function LLPCompliance() {
  const services = [
    {
      icon: "📝",
      title: "LLP Registration",
      description: "Complete LLP formation services with expert guidance through every step of the registration process.",
      features: [
        "Name approval and reservation",
        "Digital signature certificates",
        "LLP agreement drafting",
        "MCA filing and approval",
        "PAN & TAN application"
      ]
    },
    {
      icon: "📊",
      title: "Annual Compliance",
      description: "Stay compliant with all annual filing requirements and avoid penalties with our comprehensive service.",
      features: [
        "Annual return filing (Form 11)",
        "Financial statement filing (Form 8)",
        "Income tax return filing",
        "Statutory audit assistance",
        "Compliance calendar management"
      ]
    },
    {
      icon: "💰",
      title: "Tax Compliance",
      description: "Complete tax management services ensuring your LLP meets all tax obligations efficiently.",
      features: [
        "GST registration & returns",
        "Income tax compliance",
        "TDS/TCS management",
        "Advance tax calculations",
        "Tax planning & optimization"
      ]
    },
    {
      icon: "🔍",
      title: "Compliance Audit",
      description: "Comprehensive audit services to identify and resolve compliance gaps before they become issues.",
      features: [
        "Compliance health check",
        "Gap analysis & reporting",
        "Risk assessment",
        "Remediation planning",
        "Ongoing monitoring"
      ]
    },
    {
      icon: "⚖️",
      title: "Legal Documentation",
      description: "Professional legal documentation services to ensure all your LLP agreements and contracts are compliant.",
      features: [
        "LLP agreement amendments",
        "Partner admission/retirement",
        "Capital contribution changes",
        "Business transfer agreements",
        "Legal opinion services"
      ]
    },
    {
      icon: "🔄",
      title: "LLP Winding Up",
      description: "Hassle-free winding up services with expert guidance through the complete closure process.",
      features: [
        "Voluntary winding up",
        "Creditor settlement",
        "Asset distribution",
        "MCA filings & approvals",
        "Final compliance clearance"
      ]
    }
  ];

  const benefits = [
    {
      icon: "⚡",
      title: "Fast Processing",
      description: "Quick turnaround times with efficient processing"
    },
    {
      icon: "💡",
      title: "Expert Guidance",
      description: "Professional advice from experienced compliance experts"
    },
    {
      icon: "🔒",
      title: "100% Compliance",
      description: "Guaranteed compliance with all regulatory requirements"
    },
    {
      icon: "💰",
      title: "Cost Effective",
      description: "Affordable pricing with transparent fee structure"
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Consultation",
      description: "Schedule a free consultation to discuss your LLP compliance needs"
    },
    {
      step: 2,
      title: "Assessment",
      description: "We assess your current compliance status and requirements"
    },
    {
      step: 3,
      title: "Implementation",
      description: "Our experts handle all filings and compliance procedures"
    },
    {
      step: 4,
      title: "Ongoing Support",
      description: "Continuous monitoring and support for all compliance needs"
    }
  ];

  return (
    <Layout header footer notification>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>LLP Compliance Services</h1>
          <p>Comprehensive LLP compliance solutions to keep your business legally compliant and penalty-free</p>
          <a href="#services" className={styles.ctaButton}>Explore Services</a>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.section} id="services">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our LLP Compliance Services</h2>
          <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#666', maxWidth: '800px', margin: '0 auto 3rem' }}>
            We provide end-to-end LLP compliance services to ensure your business meets all regulatory requirements 
            efficiently and cost-effectively.
          </p>
          
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <span className={styles.serviceIcon}>{service.icon}</span>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
                <ul className={styles.serviceFeatures}>
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={`${styles.section} ${styles.benefitsSection}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Why Choose Our LLP Compliance Services</h2>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                <span className={styles.benefitIcon}>{benefit.icon}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={`${styles.section} ${styles.processSection}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Simple Process</h2>
          <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#666', marginBottom: '3rem' }}>
            We make LLP compliance simple with our streamlined 4-step process
          </p>
          
          <div className={styles.processGrid}>
            {processSteps.map((step, index) => (
              <div key={index} className={styles.processStep}>
                <div className={styles.stepNumber}>{step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Ready to Ensure LLP Compliance?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem', opacity: 0.9 }}>
            Don't let compliance issues affect your business. Get expert help today!
          </p>
          <div className={styles.contactButtons}>
            <a href="mailto:GSTSeva@gmail.com" className={styles.contactButton}>
              Email Us
            </a>
            <a href="tel:+91XXXXXXXXXX" className={styles.contactButton}>
              Call Now
            </a>
            <a href="#services" className={styles.contactButton}>
              Get Quote
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
