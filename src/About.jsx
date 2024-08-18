import React from 'react';

function Contact() {
  return (
    <main>
      <div className="about-card">
        <h1>About Us</h1>
        <section className="restaurant-overview">
          <h2>Our Story</h2>
          <p>
            Welcome to <strong>Fooders.Com</strong>, where passion meets
            flavor! Located in the heart of the city, we specialize in bringing
            you the freshest and most delicious dishes inspired by global
            cuisines.
          </p>
          <img src="images/foodersss.jpeg" alt="logo" className="restaurant-logo" />
          <p>
            Our journey began in 2010, when our founder, Chef John Doe, set out
            to create a dining experience like no other. With a commitment to
            quality and innovation, we have become a favorite spot for both
            locals and visitors.
          </p>
        </section>

        <section className="mission-values">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide a memorable dining experience by combining
            exceptional service, high-quality ingredients, and a welcoming
            atmosphere. We believe in sourcing locally and sustainably, ensuring
            that every dish is as fresh and flavorful as possible.
          </p>
        </section>

        <section className="chef-team">
          <h2>Meet the Chef</h2>
          <img src="/images/chef.jpg" alt="Chef Petes" className="chef-image" />
          <p>
            Our head chef, Petes, brings over 20 years of culinary expertise
            to our kitchen. His passion for cooking is evident in every dish,
            from our signature appetizers to our decadent desserts.
          </p>

        </section>

        <section className="cuisine-philosophy">
          <h2>Our Cuisine</h2>
          <img src="/images/cuisine2.webp" alt="Cuisine" className="cuisine-image" />
          <p>
            At Fooders, we offer a diverse menu that reflects our love
            for international flavors. From classic Italian pasta to vibrant
            Asian-inspired dishes, theres something for everyone to enjoy.
          </p>
        </section>
        <section className="ambiance-experience">
          <h2>The Ambiance</h2>
          <img src="/images/ambience.jpg" alt="Restaurant" className="restaurant-image" />
          <p>
            Our restaurant is designed to provide a cozy yet elegant dining
            experience. Whether you're here for a romantic dinner or a family
            celebration, our warm and inviting atmosphere will make you feel
            right at home.
          </p>
        </section>

        <section className="contact-info">
          <h2>Contact Information</h2>
          <p>
            Visit us at <strong>123 Moi Avenue, Nairobi</strong>. We are open
            Monday to Saturday from 11 AM to 10 PM.
          </p>
          <p>
            For reservations, please call us at <strong>(254) 123-4567</strong>{" "}
            or book online.
          </p>
          <p>
            Follow us on social media:
            <a
              href="https://www.facebook.com/Fooders"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>{" "}
            |
            <a
              href="https://www.instagram.com/Fooders"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>{" "}
            |
            <a
              href="https://twitter.com/Fooders"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}

export default Contact;
