"use client";

export default function ConsultationForm() {
  return (
    <>
      <div className="title-container">
        <h1 className="title">Contact Us for a Consultation</h1>
        <img
          src="/img/flower-PhotoRoom.webp"
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
      <div className="md:flex md:flex-row md:justify-between">
        {/* First Form */}
        <form
          action="https://formsubmit.co/Florasproflowers@gmail.com"
          method="POST"
          className="form m-2 p-6 md:w-1/2"
        >
          <h2 className="subtitle mb-2">
            Create Your Dream Wedding with Custom Floral Designs!
          </h2>
          <hr className="mb-4" />
          {/* Add hidden inputs for configuration */}
          <input
            type="hidden"
            name="_subject"
            value="Wedding Consultation Request"
          />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <div className="mb-4 md:flex">
            <div className="md:mr-2 mb-4 md:mb-0">
              <label className="label" htmlFor="firstName">
                Bride&apos;s Name
              </label>
              <input
                className="shadow border rounded py-2 px-3 text-gray-700"
                id="firstName"
                name="bride_name"
                type="text"
                placeholder="Bride"
                required
              />
            </div>
            <div>
              <label className="label" htmlFor="groomName">
                Groom&apos;s Name
              </label>
              <input
                className="shadow border rounded py-2 px-3 text-gray-700"
                id="groomName"
                name="groom_name"
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
              name="planner_name"
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
                name="bride_email"
                type="email"
                placeholder="email@.com"
                autoComplete="email"
                required
              />
            </div>
            <div>
              <label className="label" htmlFor="email1">
                Planner Email
              </label>
              <input
                className="shadow border rounded w-full py-2 px-3 text-gray-700"
                id="email1"
                name="planner_email"
                type="email"
                placeholder="email@.com"
                autoComplete="email"
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
                name="bride_phone"
                type="tel"
                pattern="(\(?\d{3}\)?|\d{3})([-]?\d{3})([-]?\d{4})"
                placeholder="###-###-####"
                autoComplete="tel"
                required
              />
            </div>
            <div>
              <label className="label" htmlFor="phone1">
                Planner Phone
              </label>
              <input
                className="shadow border rounded w-full py-2 px-3 text-gray-700"
                id="phone1"
                name="planner_phone"
                type="tel"
                pattern="(\(?\d{3}\)?|\d{3})([-]?\d{3})([-]?\d{4})"
                autoComplete="tel"
                placeholder="###-###-####"
              />
            </div>
          </div>

          {/* Additional fields */}
          <div className="mb-4">
            <label className="label" htmlFor="venue">
              Venue
            </label>
            <input
              className="shadow border rounded max-w-md py-2 px-3 text-gray-700"
              id="venue"
              name="venue"
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
              name="reception_venue"
              type="text"
              placeholder="Venue Name"
            />
          </div>

          <div className="mb-4">
            <label className="label" htmlFor="date">
              Date of Event
            </label>
            <input
              className="shadow border rounded max-w-md py-2 px-3 text-gray-700"
              id="date"
              name="event_date"
              type="date"
              required
            />
          </div>

          <div className="mb-4">
            <label className="label" htmlFor="preferredStyle">
              Preferred Style
            </label>
            <div className="flex flex-col max-w-md">
              {[
                "modern",
                "garden",
                "classic",
                "fairytale",
                "wildflower",
                "sophisticated",
              ].map((style) => (
                <label key={style} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    name="preferred_style"
                    value={style}
                  />
                  <span className="ml-2 text-gray-700 capitalize">{style}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="label" htmlFor="additionalInfo">
              Additional Information
            </label>
            <textarea
              className="shadow border rounded w-full py-3 px-3 text-gray-700"
              id="additionalInfo"
              name="additional_info"
              placeholder="Any additional details you want me to know!"
              rows={4}
              required
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button
              className="button"
              type="submit"
              aria-label="Submit Form"
              style={{
                backgroundColor: "rgb(var(--color-green))",
                color: "rgb(var(--color-primary))",
              }}
            >
              Submit
            </button>
          </div>
        </form>
        <div className="form-container md:w-1/2">
          <form
            action="https://formsubmit.co/Florasproflowers@gmail.com"
            method="POST"
            className="form p-6 m-2"
          >
            <h3 className="subtitle text-center mb-2">
              Specify Your Wedding Floral Essentials
            </h3>
            <hr className="mb-4" />

            {/* Add hidden inputs for configuration */}
            <input
              type="hidden"
              name="_subject"
              value="Wedding Floral Essentials Request"
            />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className="mb-4">
              <label className="label" htmlFor="bridal_bouquets">
                Bridal Bouquets
              </label>
              <input
                className="shadow border rounded py-2 px-3 text-gray-700"
                id="bridal_bouquets"
                name="bridal_bouquets"
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
                name="bridesmaids_bouquets"
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
                name="boutonnieres"
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
                name="centerpiecesNeeded"
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
                name="colorPalette"
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
                name="additionalNeeds"
                rows="4"
                placeholder="Installations, Design Concepts, or anything else we need to know!"
              ></textarea>
            </div>

            <div className="flex justify-end ">
              <button
                className="button"
                type="submit"
                aria-label="Submit Form"
                style={{
                  backgroundColor: "rgb(var(--color-green))",
                  color: "rgb(var(--color-primary))",
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
