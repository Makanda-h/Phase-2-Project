import React, { useState } from 'react';
import NavBar from "./NavBar"
import '../assets/Review.css'; 

const Review = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Iaculis sagittis pulvinar nec; volutpat etiam amet netus semper. Eleifend nascetur ornare suscipit, nec venenatis et.",
      name: "JOHN DOE",
      title: "CEO & Founder",
    },
    {
      id: 2,
      text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Iaculis sagittis pulvinar nec; volutpat etiam amet netus semper. Eleifend nascetur ornare suscipit, nec venenatis et.",
      name: "JANE DOE",
      title: "CEO & Founder",
    },
    {
      id: 3,
      text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Iaculis sagittis pulvinar nec; volutpat etiam amet netus semper. Eleifend nascetur ornare suscipit, nec venenatis et.",
      name: "JIM DOE",
      title: "CEO & Founder",
    },
  ]);

  const [newReview, setNewReview] = useState({ text: '', name: '', title: '', img: '' });

  const handleChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.text && newReview.name && newReview.img) {
      setReviews([...reviews, { ...newReview, id: reviews.length + 1 }]);
      setNewReview({ text: '', name: '', title: ''});
    }
  };

  const handleDelete = (id) => {
    setReviews(reviews.filter(review => review.id !== id));
  };

  return (
    <>
      <header>
      <NavBar />
      </header>

      <main>

      <div className="feedback-section">
      <h2>CUSTOMER FEEDBACK</h2>
      <h3>WHAT HAVE LOT'S OF HAPPY CUSTOMER EXPLORE FEEDBACK</h3>
      <div className="reviews">
        {reviews.map((review) => (
          <div className="review" key={review.id}>
            <div className="quote">“</div>
            <p>{review.text}</p>
            <div className="reviewer">
             
              <div>
                <strong>{review.name}</strong>
                <span>{review.title}</span>
              </div>
              <button onClick={() => handleDelete(review.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="review-form">
        <h3>Submit a Review</h3>
        <input
          type="text"
          name="text"
          placeholder="Review text"
          value={newReview.text}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={newReview.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="title"
          placeholder="Your Title"
          value={newReview.title}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
      </main>
    
    </>
    
  );
};

export default Review;