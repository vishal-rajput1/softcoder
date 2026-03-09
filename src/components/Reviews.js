// const Reviews = () => {
// const reviews = [
//   {
//     id: 1,
//     name: "Rahul Sharma",
//     company: "Kings Printer",
//     review:
//       "Softcoders built an amazing e-commerce website for us. Their team delivered on time and the design is outstanding.",
//     rating: 5
//   },
//   {
//     id: 2,
//     name: "Anita Verma",
//     company: "Bud & Tulips",
//     review:
//       "Excellent support and professional work. Our online flower store is now running smoothly.",
//     rating: 5
//   },
//   {
//     id: 3,
//     name: "Amit Singh",
//     company: "HSF Foods",
//     review:
//       "The web application they built helped us manage orders and operations efficiently.",
//     rating: 4
//   },
//   {
//     id: 4,
//     name: "Ajay Rajput",
//     company: "Shanmukha Agro",
//     review:
//       "Excellent support and professional work. Our online Products store is now running smoothly.",
//     rating: 5
//   },
// ];
// return (
//     <div className="home"></div>
// <section className="reviews-section">
//   <div className="container">

//     <div className="reviews-title">
//       <h2>What Clients Are Saying About Us</h2>
//       <p>
//         We've served more than 350+ clients globally in the last 8+ years
//         and retained 95% of them.
//       </p>
//     </div>

//     <div className="reviews-grid">
//       {reviews.map((review) => (
//         <div className="review-card" key={review.id}>

//           <div className="quote-icon">❝</div>

//           <div className="stars">
//             {"⭐".repeat(review.rating)}
//           </div>

//           <p className="review-text">{review.review}</p>

//           <div className="review-footer">
//             <div>
//               <h4>{review.name}</h4>
//               <span>{review.company}</span>
//             </div>
//           </div>

//         </div>
//       ))}
//     </div>

//   </div>
// </section>
// )};

// export default Reviews;