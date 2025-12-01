"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Gauge, Linkedin, Mail, Rocket, Twitter, Wind, Zap, Github } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="small"
      sizing="small"
      background="floatingGradient"
      cardStyle="layered-gradient"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="minimal"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="F1 Elite Motors"
          navItems={[
            { name: "Featured", id: "featured" },
            { name: "Performance", id: "metrics" },
            { name: "Team", id: "team" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="F1 Elite Motors"
          description="Experience the pinnacle of automotive engineering. Introducing our exclusive collection of Formula 1 racing vehicles."
          buttons={[
            { text: "View Collection", href: "featured" },
            { text: "Schedule Test Drive", href: "contact" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/tmp/formula-1-race-car-high-speed-motion-1764590865872-08a77466.jpg"
          imageAlt="Formula 1 race car at high speed"
          showDimOverlay={true}
        />
      </div>

      <div id="featured" data-section="featured">
        <ProductCardOne
          title="Featured Collection"
          description="Explore our premium selection of high-performance Formula 1 vehicles"
          tag="New Arrivals"
          tagIcon={Zap}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          carouselMode="buttons"
          products={[
            {
              id: "1",
              name: "Championship Red Special",
              price: "2.8M USD",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/tmp/red-formula-1-racing-car-premium-1764590867691-73a31833.jpg",
              imageAlt: "Championship Red F1 car"
            },
            {
              id: "2",
              name: "Silver Arrow Elite",
              price: "3.2M USD",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/tmp/silver-formula-1-race-car-professional-1764590869922-34fad384.jpg",
              imageAlt: "Silver Arrow Elite F1 racing vehicle"
            },
            {
              id: "3",
              name: "Midnight Black Edition",
              price: "2.9M USD",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/tmp/black-formula-1-racing-vehicle-1764590872775-bc3c3373.jpg",
              imageAlt: "Midnight Black Edition F1 car"
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Performance Specifications"
          description="Industry-leading technology and engineering excellence"
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="scale-rotate"
          carouselMode="buttons"
          metrics={[
            {
              id: "1",
              value: "370",
              title: "km/h",
              description: "Maximum speed capability",
              icon: Zap
            },
            {
              id: "2",
              value: "1050",
              title: "bhp",
              description: "Engine power output",
              icon: Gauge
            },
            {
              id: "3",
              value: "1.8",
              title: "seconds",
              description: "0-100 km/h acceleration",
              icon: Rocket
            },
            {
              id: "4",
              value: "900",
              title: "kg",
              description: "Aerodynamic downforce",
              icon: Wind
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Elite Racing Team"
          description="Meet the champions behind our legendary vehicles"
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="opacity"
          carouselMode="buttons"
          members={[
            {
              id: "1",
              name: "Marcus Sterling",
              role: "Lead Driver",
              description: "10-time champion with 15 years of F1 racing experience",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/tmp/professional-race-driver-portrait-f1-1764590874590-ca7ffd8d.jpg",
              imageAlt: "Marcus Sterling - Lead Driver",
              socialLinks: [
                { icon: Twitter, url: "https://twitter.com" },
                { icon: Linkedin, url: "https://linkedin.com" }
              ]
            },
            {
              id: "2",
              name: "Elena Rodriguez",
              role: "Co-Driver",
              description: "Championship winner with expertise in precision driving and strategy",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/tmp/race-car-driver-professional-headshot-1764590876453-205fa7f1.jpg",
              imageAlt: "Elena Rodriguez - Co-Driver",
              socialLinks: [
                { icon: Twitter, url: "https://twitter.com" },
                { icon: Linkedin, url: "https://linkedin.com" }
              ]
            },
            {
              id: "3",
              name: "Dr. James Chen",
              role: "Chief Engineer",
              description: "Pioneering aerodynamic engineer with 20 years in motorsport innovation",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/tmp/automotive-engineer-professional-portrai-1764590878249-fc0a56ae.jpg",
              imageAlt: "Dr. James Chen - Chief Engineer",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Mail, url: "mailto:james@f1elite.com" }
              ]
            },
            {
              id: "4",
              name: "Sofia Bergstrom",
              role: "Technical Director",
              description: "Mechanical expert specializing in performance optimization and reliability",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/tmp/racing-team-member-professional-photo-1764590880009-2cf9d863.jpg",
              imageAlt: "Sofia Bergstrom - Technical Director",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Github, url: "https://github.com" }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Clients Say"
          description="Hear from passionate F1 enthusiasts and collectors who trust our vehicles"
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="blur-reveal"
          carouselMode="buttons"
          testimonials={[
            {
              id: "1",
              name: "David Thompson",
              role: "Racing Enthusiast",
              company: "Motorsport Collector",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/tmp/professional-businessman-portrait-1764590881757-9f5d0acf.jpg",
              imageAlt: "David Thompson - Racing Enthusiast"
            },
            {
              id: "2",
              name: "Sophia Laurent",
              role: "CEO",
              company: "Performance Automotive",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/tmp/professional-woman-portrait-headshot-1764590883551-6aa7e059.jpg",
              imageAlt: "Sophia Laurent - CEO"
            },
            {
              id: "3",
              name: "Michael Anderson",
              role: "Director",
              company: "Elite Racing Team",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/tmp/professional-man-portrait-business-1764590885340-89f60c87.jpg",
              imageAlt: "Michael Anderson - Director"
            },
            {
              id: "4",
              name: "Victoria Chen",
              role: "Founder",
              company: "Automotive Innovation Group",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/tmp/professional-woman-headshot-portrait-1764590887307-16ab0e9c.jpg",
              imageAlt: "Victoria Chen - Founder"
            },
            {
              id: "5",
              name: "James Patterson",
              role: "Chief Driver",
              company: "International Racing Federation",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/tmp/professional-businessman-portrait-photo-1764590889054-71bb94ad.jpg",
              imageAlt: "James Patterson - Chief Driver"
            },
            {
              id: "6",
              name: "Rebecca Williams",
              role: "Manager",
              company: "Grand Prix Holdings",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/tmp/professional-woman-business-portrait-1764590891216-df48beea.jpg",
              imageAlt: "Rebecca Williams - Manager"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about our F1 vehicles and services"
          textPosition="left"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What makes these F1 vehicles special?",
              content: "Our vehicles feature cutting-edge technology, precision engineering, and performance optimization that exceeds standard F1 specifications. Each vehicle is meticulously maintained and customized for ultimate driving experience."
            },
            {
              id: "2",
              title: "Can I customize my vehicle?",
              content: "Yes, we offer comprehensive customization options including performance tuning, aesthetic modifications, and interior upgrades. Our expert team works directly with you to create your perfect vehicle."
            },
            {
              id: "3",
              title: "What warranty is included?",
              content: "All vehicles come with a comprehensive 5-year warranty covering mechanical components, performance systems, and bodywork. Extended warranty options are also available for up to 10 years."
            },
            {
              id: "4",
              title: "How do I arrange a test drive?",
              content: "Simply contact our team through the website or phone. We schedule test drives at our premium facility with professional instructors available to guide you through the experience."
            },
            {
              id: "5",
              title: "What financing options are available?",
              content: "We offer flexible financing solutions including direct purchase, leasing programs, and exclusive partnership arrangements with leading financial institutions."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Get In Touch"
          description="Connect with our team to schedule a consultation or test drive. We look forward to working with you."
          buttonText="Send Message"
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Email",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your interest in our vehicles...",
            rows: 5,
            required: true
          }}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="F1 Elite Motors"
          columns={[
            {
              items: [
                { label: "Featured Vehicles", href: "featured" },
                { label: "Performance Specs", href: "metrics" },
                { label: "Our Team", href: "team" }
              ]
            },
            {
              items: [
                { label: "Customer Reviews", href: "testimonials" },
                { label: "FAQ", href: "faq" },
                { label: "Contact Us", href: "contact" }
              ]
            },
            {
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms & Conditions", href: "#" },
                { label: "Careers", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}