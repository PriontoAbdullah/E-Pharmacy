import React from 'react';
import ClientReview from './ClientReview';

const ClientReviewContainer = () => {
  return (
    <div>
      <h2 className="text-2xl pt-2 pl-10 font-display text-teal-600 font-medium tracking-wide">
        Client Reviews
      </h2>
      <ClientReview />
      <ClientReview />
      <ClientReview />
    </div>
  );
};

export default ClientReviewContainer;
