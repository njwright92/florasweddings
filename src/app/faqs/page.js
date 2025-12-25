import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const metadata = {
  title: "Frequently Asked Questions - Flora's Weddings",
  description:
    "Answers to common questions about wedding floral consultations, booking, deposits, and delivery services in North Idaho.",
};

export default function Faqs() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-5xl">
        <div className="title-container">
          <h1 className="title">Frequently Asked Questions</h1>
          <Image
            src="/img/flower-PhotoRoom.webp"
            width={200}
            height={100}
            alt="Decorative flower"
            className="-mt-20"
            priority
          />
        </div>

        <h2 className="subtitle text-center">
          You have questions, I have answers!
        </h2>

        <div className="body-text pricing-list mx-6 mt-6 mb-12">
          <div className="mb-2 font-bold">Q: Where to start?</div>

          <div className="mb-2 font-bold">A:</div>

          <ol className="flex flex-col gap-4">
            <li>
              1. Begin by filling out a brief event questionnaire to share the
              details for your wedding, such as event location, date, desired
              items, and design style preferences. Feel free to include images
              that capture your preferred design aesthetic. I will work on a
              tentative proposal from the information you give me.
            </li>
            <li>
              2. Schedule a consultation to discuss the proposal and refine the
              details. Consultations can be conducted either via phone or in
              person to ensure we capture your vision accurately.
            </li>
            <li>
              3. After the consultation, any necessary adjustments to the quote
              will be made and submitted to you. You can secure your event date
              by submitting a $250 non-refundable deposit.
            </li>
            <li>
              4. The full payment is due 30 days prior to the wedding. At that
              time we&apos;ll reconnect to address if you need any adjustments
              to your wedding order. Adding a few items is never a problem but
              big changes need to be made 1 month prior to the wedding date.
            </li>
            <li>
              5. Travel and installation fees vary depending on location and
              time needed for set up.
            </li>
            <li>
              6. Tear down fees are extra. If rentals are involved, they can be
              returned up to 3 days after the wedding.
            </li>
          </ol>
        </div>
      </main>
      <Footer />
    </>
  );
}
