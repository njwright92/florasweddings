export default function ConsultationForm() {
  return (
    <>
      <div className="title-container">
        <h1 className="title">Contact Us for a Consultation</h1>
        <img
          src="./img/flower-PhotoRoom.webp"
          width={200}
          height={100}
          loading="lazy"
          alt="Flower"
          className="-mt-20"
        />
      </div>
      <p className="body-text p-2">
        At Flora&#39;s, we specialize in personalizing your wedding flowers. We
        believe the flowers for your wedding should be as unique as each
        individual. I like to personally go over each detail of your wedding and
        create a realistic and individualized quote for every budget. Between
        your inspiration board, our creativity, and our knowledge of flowers,
        you&#39;ll have the wedding flowers of your dreams!
      </p>
      <div className="md:flex md:flex-row md:justify-between horizontal-line">
        <form className="form p-8 mb-6 md:w-1/2">
          <h3 className="subtitle mb-2">
            Create Your Dream Wedding with Custom Floral Designs!
          </h3>
          <hr className="mb-4" />
          <div className="mb-4 md:flex">
            <div className="md:mr-2 mb-4 md:mb-0">
              <label className="label" htmlFor="firstName">
                Bride&apos;s Name
              </label>
              <input
                className="shadow border rounded py-2 px-3 text-gray-700"
                id="firstName"
                type="text"
                placeholder="Bride"
                required
              />
            </div>
            <div className="md:ml-2">
              <label className="label" htmlFor="groomName">
                Groom&apos;s Name
              </label>
              <input
                className="shadow border rounded py-2 px-3 text-gray-700"
                id="groomName"
                type="text"
                placeholder="Groom"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="label" htmlFor="plannerName">
              Planner&apos;s Name
            </label>
            <input
              className="shadow border rounded py-2 px-3 text-gray-700"
              id="plannerName"
              type="text"
              placeholder="Planner"
            />
          </div>

          <div className="mb-4 md:flex">
            <div className="md:mr-2 mb-4 md:mb-0">
              <label className="label" htmlFor="email">
                Bride&apos;s Email
              </label>
              <input
                className="shadow border rounded w-full py-2 px-3 text-gray-700"
                id="email"
                type="email"
                placeholder="email@.com"
                required
              />
            </div>
            <div className="md:ml-2">
              <label className="label" htmlFor="email1">
                Planner Email
              </label>
              <input
                className="shadow border rounded w-full py-2 px-3 text-gray-700"
                id="email1"
                type="email"
                placeholder="email@.com"
              />
            </div>
          </div>
          <div className="mb-4 md:flex">
            <div className="md:mr-2 mb-4 md:mb-0">
              <label className="label" htmlFor="phone">
                Bride&apos;s Phone
              </label>
              <input
                className="shadow border rounded w-full py-2 px-3 text-gray-700"
                id="phone"
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="###-###-####"
                required
              />
            </div>
            <div className="md:ml-2">
              <label className="label" htmlFor="phone1">
                Planner Phone
              </label>
              <input
                className="shadow border rounded w-full py-2 px-3 text-gray-700"
                id="phone1"
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="###-###-####"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="label" htmlFor="venue">
              Venue
            </label>
            <input
              className="shadow border rounded max-w-md py-2 px-3 text-gray-700"
              id="venue"
              type="text"
              placeholder="Venue Name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="label" htmlFor="venue1">
              Reception Venue (if different)
            </label>
            <input
              className="shadow border rounded max-w-md py-2 px-3 text-gray-700"
              id="venue1"
              type="text"
              placeholder="Venue Name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="label" htmlFor="date">
              Date of Event
            </label>
            <input
              className="shadow border rounded max-w-md py-2 px-3 text-gray-700"
              id="date"
              type="date"
              required
            />
          </div>

          <div className="mb-4">
            <label className="label" htmlFor="Budget">
              What is your floral budget?
            </label>
            <textarea
              className="shadow border rounded md:w-full py-3 px-3 text-gray-700"
              id="Budget"
              type="number"
              required
              placeholder="2500"
              rows={2}
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="label" htmlFor="preferredStyle">
              Which best describes your preferred style?
            </label>
            <div className="flex flex-col max-w-md">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  name="style"
                  value="modern"
                  id="modern"
                />
                <span className="ml-2 text-gray-700">Modern</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  name="style"
                  value="garden"
                  id="garden"
                />
                <span className="ml-2 text-gray-700">Garden</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  name="style"
                  value="classic"
                  id="classic"
                />
                <span className="ml-2 text-gray-700">Classic</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  name="style"
                  value="fairytale"
                  id="fairytale"
                />
                <span className="ml-2 text-gray-700">Fairytale</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  name="style"
                  value="wildflower"
                  id="wildflower"
                />
                <span className="ml-2 text-gray-700">Wildflower</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  name="style"
                  value="sophisticated"
                  id="sophisticated"
                />
                <span className="ml-2 text-gray-700">Sophisticated</span>
              </label>
            </div>
            <p className="secondary-label text-gray-700">
              Please check all that apply.
            </p>
          </div>

          <div className="mb-4">
            <label className="label" htmlFor="additionalInfo">
              Additional Information
            </label>
            <textarea
              className="shadow border rounded md:w-full py-3 px-3 text-gray-700"
              id="additionalInfo"
              required
              placeholder="Any addition details you want me to know!"
              rows={4}
            ></textarea>
          </div>

          <div className="flex justify-end ">
            <button className="button" type="submit">
              Submit
            </button>
          </div>
        </form>
        <div className="form-container md:w-1/2">
          <form className="form p-8 mb-6">
            <h3 className="subtitle text-center mb-2">
              Specify Your Wedding Floral Essentials
            </h3>
            <hr className="mb-4" />
            <div className="mb-4">
              <label className="label" htmlFor="bridal_bouquets">
                Bridal Bouquets
              </label>
              <input
                className="shadow border rounded py-2 px-3 text-gray-700"
                id="bridal_bouquets"
                type="text"
                placeholder="Bridal Bouquets"
              />
            </div>

            <div className="mb-4">
              <label className="label" htmlFor="bridesmaids_bouquets">
                Bridesmaids Bouquets
              </label>
              <input
                className="shadow border rounded py-2 px-3 text-gray-700"
                id="bridesmaids_bouquets"
                type="text"
                placeholder="Bridesmaids Bouquets"
              />
            </div>

            <div className="mb-4">
              <label className="label" htmlFor="boutonnieres">
                Boutonnieres
              </label>
              <input
                className="shadow border rounded py-2 px-3 text-gray-700"
                id="boutonnieres"
                type="text"
                placeholder="Boutonnieres"
              />
            </div>

            <div className="mb-4">
              <label className="label" htmlFor="centerpiecesNeeded">
                Centerpieces Needed
              </label>
              <input
                className="shadow border rounded w-full py-2 px-3 text-gray-700"
                id="centerpiecesNeeded"
                type="number"
                required
              />
            </div>

            <div className="mb-4">
              <label className="label" htmlFor="colorPalette">
                Color Palette
              </label>
              <input
                className="shadow border rounded w-full py-2 px-3 text-gray-700"
                id="colorPalette"
                type="text"
                required
              />
            </div>

            <div className="mb-4">
              <label className="label" htmlFor="additionalNeeds">
                Additional Needs
              </label>
              <textarea
                className="shadow border rounded w-full py-3 px-3 text-gray-700"
                id="additionalNeeds"
                rows="4"
                placeholder="Installations, Design Concepts, or anything else we need to know!"
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button className="button" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
