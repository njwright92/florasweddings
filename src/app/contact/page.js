import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Contact() {
  return (
    <div>
      <Header />
      <h1 className="title">Contact Us for a Consultation</h1>
      <div className="form-container">
        <p className="body-text p-2">
          At Flora&#39;s, we specialize in personalizing your wedding flowers.
          We believe the flowers for your wedding should be as unique as each
          individual. I like to personally go over each detail of your wedding
          and create a realistic and individualized quote for every budget.
          Between your inspiration board, our creativity, and our knowledge of
          flowers, you&#39;ll have the wedding flowers of your dreams!
        </p>


        <form className="form p-8 mb-6 horizontal-line">
          <div className="mb-4 md:flex">
            <div className="md:mr-2 mb-4 md:mb-0">
              <label className="label" htmlFor="firstName">
                First Name
              </label>
              <input
                className="shadow border rounded py-2 px-3 text-gray-700 leading-tight"
                id="firstName"
                type="text"
                placeholder="First"
                required
              />
            </div>
            <div className="md:ml-2">
              <label className="label" htmlFor="lastName">
                Last Name
              </label>
              <input
                className="shadow border rounded py-2 px-3 text-gray-700 leading-tight"
                id="lastName"
                type="text"
                placeholder="Last"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              className="shadow border rounded max-w-md py-2 px-3 text-gray-700 leading-tight"
              id="email"
              type="email"
              placeholder="email@.com"
              required
            />
          </div>

          <div className="mb-4">
            <label className="label" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="shadow border rounded max-w-md py-2 px-3 text-gray-700 leading-tight"
              id="phone"
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="###-###-####"
              required
            />
          </div>

          <div className="mb-4">
            <label className="label" htmlFor="date">
              Event Date
            </label>
            <input
              className="shadow border rounded max-w-md py-2 px-3 text-gray-700 leading-tight"
              id="date"
              type="date"
              required
            />
          </div>

          <div className="mb-4">
            <label className="label" htmlFor="additionalInfo">
              Additional Information
            </label>
            <textarea
              className="shadow border rounded md:w-3/4 py-3 px-3 text-gray-700 leading-tight"
              id="additionalInfo"
              required
              placeholder="Additional Information details for my special day!"
              rows={6}
            ></textarea>
          </div>

          <div className="md:w-3/4 flex justify-end">
            <button className="button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
