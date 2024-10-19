import Marquee from "react-fast-marquee";
import { VscCoffee } from "react-icons/vsc";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const reviewsData = [
  {
    id: 1,
    name: "John Doe",
    review:
      "The ambiance at the cafe is simply unmatched. A perfect place to relax and enjoy a cup of coffee.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    review:
      "Friendly staff and delicious pastries! Highly recommend their cappuccino.",
    rating: 4,
  },
  {
    id: 3,
    name: "Bob Johnson",
    review:
      "Good atmosphere but I found the coffee a bit too strong for my taste.",
    rating: 3,
  },
  {
    id: 4,
    name: "Alice Williams",
    review:
      "Amazing place to work or read a book. The latte art is just beautiful.",
    rating: 5,
  },
  {
    id: 5,
    name: "Tom Brown",
    review:
      "Best espresso in town! Will definitely be coming back for more.",
    rating: 5,
  },
];

const ReviewComponent = () => {
  return (
    <div className="overflow-hidden w-full flex justify-center">
      <Marquee pauseOnHover gradient={false} speed={50} className="py-4">
        {reviewsData.map((review) => (
          <div key={review.id} className="m-4">
            <div className="bg-white p-6 rounded-lg w-[300px] relative shadow-lg transform transition-transform duration-300 hover:scale-105">
              <div className="absolute top-[-20px] left-[-20px] text-4xl text-accent-secondary">
                <FaQuoteLeft />
              </div>
              <h2 className="text-2xl font-semibold text-dark-brown">{review.name}</h2>
              <div className="flex mt-2">
                {Array.from({ length: review.rating }).map((_, index) => (
                  <span key={index} className="text-yellow-500 text-xl">
                    &#9733;
                  </span>
                ))}
              </div>
              <p className="text-md mt-4 text-gray-600">{review.review}</p>
              <div className="absolute bottom-[-20px] right-[-20px] text-4xl text-accent-secondary">
                <FaQuoteRight />
              </div>
              <div className="absolute bottom-4 right-4 text-4xl text-primary">
                <VscCoffee />
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

const Testimonials = () => {
  return (
    <>
      <div className="w-full">
        <svg
          id="visual"
          className="w-full"
          version="1.1"
          viewBox="0 422 960 119"
        >
          <path
            d="M0 467L5.5 462.3C11 457.7 22 448.3 33 446C44 443.7 55 448.3 66 450.8C77 453.3 88 453.7 99 458.2C110 462.7 121 471.3 132.2 471.7C143.3 472 154.7 464 165.8 465.3C177 466.7 188 477.3 199 477C210 476.7 221 465.3 232 456.3C243 447.3 254 440.7 265 439.7C276 438.7 287 443.3 298 450C309 456.7 320 465.3 331 465.8C342 466.3 353 458.7 364 454.7C375 450.7 386 450.3 397 445.3C408 440.3 419 430.7 430 434.2C441 437.7 452 454.3 463.2 460.7C474.3 467 485.7 463 496.8 456.8C508 450.7 519 442.3 530 445.5C541 448.7 552 463.3 563 464.7C574 466 585 454 596 454.8C607 455.7 618 469.3 629 477.5C640 485.7 651 488.3 662 485.3C673 482.3 684 473.7 695 473.3C706 473 717 481 728 485.5C739 490 750 491 761 482.5C772 474 783 456 794.2 455C805.3 454 816.7 470 827.8 471.7C839 473.3 850 460.7 861 450.7C872 440.7 883 433.3 894 440.2C905 447 916 468 927 467.3C938 466.7 949 444.3 954.5 433.2L960 422L960 541L954.5 541C949 541 938 541 927 541C916 541 905 541 894 541C883 541 872 541 861 541C850 541 839 541 827.8 541C816.7 541 805.3 541 794.2 541C783 541 772 541 761 541C750 541 739 541 728 541C717 541 706 541 695 541C684 541 673 541 662 541C651 541 640 541 629 541C618 541 607 541 596 541C585 541 574 541 563 541C552 541 541 541 530 541C519 541 508 541 496.8 541C485.7 541 474.3 541 463.2 541C452 541 441 541 430 541C419 541 408 541 397 541C386 541 375 541 364 541C353 541 342 541 331 541C320 541 309 541 298 541C287 541 276 541 265 541C254 541 243 541 232 541C221 541 210 541 199 541C188 541 177 541 165.8 541C154.7 541 143.3 541 132.2 541C121 541 110 541 99 541C88 541 77 541 66 541C55 541 44 541 33 541C22 541 11 541 5.5 541L0 541Z"
            fill="#6B4226"
            stroke-linecap="round"
            stroke-linejoin="miter"
          />
        </svg>
      </div>

      <div className="px-4 py-12 flex items-center bg-dark-brown justify-center">
        <div className="max-w-screen-xl mx-auto overflow-hidden">
          <div className="flex items-center gap-4 md:w-1/2 mx-auto">
            <div className="h-[2px] bg-accent-secondary flex-1"></div>
            <h1 className="text-4xl text-accent-secondary font-bold">
              What Our Customers Say
            </h1>
            <div className="h-[2px] bg-accent-secondary flex-1"></div>
          </div>
          <p className="text-xl text-white text-center md:w-2/3 md:mx-auto mt-2 mb-4 leading-relaxed">
            Our cafe is loved by customers for its cozy atmosphere and excellent coffee.
            Here are some of the things our visitors have shared about their experience.
          </p>

          {/* Reviews */}
          <ReviewComponent />
        </div>
      </div>

      <div className="w-full rotate-180">
        <svg
          id="visual"
          className="w-full"
          version="1.1"
          viewBox="0 422 960 119"
        >
          <path
            d="M0 467L5.5 462.3C11 457.7 22 448.3 33 446C44 443.7 55 448.3 66 450.8C77 453.3 88 453.7 99 458.2C110 462.7 121 471.3 132.2 471.7C143.3 472 154.7 464 165.8 465.3C177 466.7 188 477.3 199 477C210 476.7 221 465.3 232 456.3C243 447.3 254 440.7 265 439.7C276 438.7 287 443.3 298 450C309 456.7 320 465.3 331 465.8C342 466.3 353 458.7 364 454.7C375 450.7 386 450.3 397 445.3C408 440.3 419 430.7 430 434.2C441 437.7 452 454.3 463.2 460.7C474.3 467 485.7 463 496.8 456.8C508 450.7 519 442.3 530 445.5C541 448.7 552 463.3 563 464.7C574 466 585 454 596 454.8C607 455.7 618 469.3 629 477.5C640 485.7 651 488.3 662 485.3C673 482.3 684 473.7 695 473.3C706 473 717 481 728 485.5C739 490 750 491 761 482.5C772 474 783 456 794.2 455C805.3 454 816.7 470 827.8 471.7C839 473.3 850 460.7 861 450.7C872 440.7 883 433.3 894 440.2C905 447 916 468 927 467.3C938 466.7 949 444.3 954.5 433.2L960 422L960 541L954.5 541C949 541 938 541 927 541C916 541 905 541 894 541C883 541 872 541 861 541C850 541 839 541 827.8 541C816.7 541 805.3 541 794.2 541C783 541 772 541 761 541C750 541 739 541 728 541C717 541 706 541 695 541C684 541 673 541 662 541C651 541 640 541 629 541C618 541 607 541 596 541C585 541 574 541 563 541C552 541 541 541 530 541C519 541 508 541 496.8 541C485.7 541 474.3 541 463.2 541C452 541 441 541 430 541C419 541 408 541 397 541C386 541 375 541 364 541C353 541 342 541 331 541C320 541 309 541 298 541C287 541 276 541 265 541C254 541 243 541 232 541C221 541 210 541 199 541C188 541 177 541 165.8 541C154.7 541 143.3 541 132.2 541C121 541 110 541 99 541C88 541 77 541 66 541C55 541 44 541 33 541C22 541 11 541 5.5 541L0 541Z"
            fill="#6B4226"
            stroke-linecap="round"
            stroke-linejoin="miter"
          />
        </svg>
      </div>
    </>
  );
};

export default Testimonials;
