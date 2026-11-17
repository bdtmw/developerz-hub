'use client';
import { ServiceSlider } from '@/components/service-slider';

const reviews = [
  { name: 'Derick', country: 'United States', project: 'WordPress development', quote: 'Clean code, fast performance, responsive design, and great communication from start to finish. He understood our requirements immediately, offered smart suggestions, and delivered exactly what we needed—on time and without shortcuts.' },
  { name: 'Zachary', country: 'Canada', project: 'Corporate website development', quote: 'He quickly understood our needs and delivered high-quality work that exceeded expectations. Communication was clear throughout the process, and he handled revisions promptly and professionally.' },
  { name: 'Leonor', country: 'United States', project: 'Booking website development', quote: 'They were very attentive to detail and made sure to deliver everything exactly as I asked for. Communication was smooth and timely throughout the entire project.' },
  { name: 'Sean', country: 'United States', project: 'Laravel troubleshooting', quote: 'He knew instantly how to diagnose the issue, access the coding issue, and fix the issue. Even more importantly, he communicated regularly and kept my team involved on his progress.' },
  { name: 'Avishek', country: 'United States', project: 'React application integration', quote: 'He made sure he had the perfect understanding of the requirements and was able to deliver the project on time. Highly recommended freelancer.' },
  { name: 'Brian', country: 'United States', project: 'WordPress customization', quote: 'Really professional and strong support after delivery. Much appreciated, will be back, A++++' },
  { name: 'Adel', country: 'Egypt', project: 'Custom API development', quote: 'The integration works perfectly, streamlining my processes and saving valuable time.' },
  { name: 'Mohamad', country: 'Saudi Arabia', project: 'Virtual exhibition MVP', quote: 'The communication was smooth and professional throughout, and the work was completed exactly as required. He was responsive, supportive, and demonstrated strong technical skills.' },
];

function ReviewCard({ review }: { review: typeof reviews[number] }) {
  return (
    <figure className="client-review cr-slide">
      <div className="client-review-top">
        <span className="client-review-project">{review.project}</span>
        <span className="client-review-rating" aria-label="Rated 5 out of 5">
          <span aria-hidden="true">★★★★★</span><b>5.0</b>
        </span>
      </div>
      <blockquote><p>"{review.quote}"</p></blockquote>
      <figcaption>
        <span className="client-review-avatar" aria-hidden="true">{review.name.charAt(0)}</span>
        <span><strong>{review.name}</strong><small>{review.country}</small></span>
      </figcaption>
    </figure>
  );
}

export default function ClientReviews() {
  return (
    <section id="client-reviews" className="section client-reviews" aria-labelledby="client-reviews-title">
      <div className="client-reviews-heading">
        <div>
          <p className="eyebrow">CLIENT EXPERIENCES</p>
          <h2 id="client-reviews-title">Good work.<br /><em>In our clients' words.</em></h2>
        </div>
        <p>From websites to custom applications, clients share what mattered most: clear communication, thoughtful delivery and support along the way.</p>
      </div>
      <ServiceSlider stepPx={440} label="reviews">
        {reviews.map(review => <ReviewCard key={review.name} review={review} />)}
      </ServiceSlider>
      <div className="client-reviews-bottom">
        <p>Selected excerpts from individual project reviews. Ratings shown belong to each review.</p>
        <a className="client-reviews-cta" href="/contact/">Let's build your next project <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  );
}
