import React from 'react';
import FAQItem from './FAQItem';

  export const Faq = () => {
    return (
      <div class=" mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
        <div class="">
          <div class="space-y-4">
            <FAQItem title="The quick, brown fox jumps over a lazy dog?">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae.
            </FAQItem>
            <FAQItem title="The first mate and his Skipper too will do?">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae.
            </FAQItem>
            <FAQItem title="Is the Space Pope reptilian!?">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae.
            </FAQItem>
            <FAQItem title="How much money you got on you?">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae.
            </FAQItem>
          </div>
        </div>
      </div>
    );
  };