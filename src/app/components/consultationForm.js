"use client";

export default function ConsultationForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = e.target.elements;
    const composedEmailLink = composeEmailLink(formData);

    const link = document.createElement("a");
    link.href = composedEmailLink;
    link.style.display = "none";
    document.body.appendChild(link);

    link.click();
    document.body.removeChild(link);

    e.target.reset();
    alert(
      "The email client has been opened. Please send the email to complete your request."
    );
  };
  const composeEmailLink = (formData) => {
    const subject = encodeURIComponent("Wedding Consultation Request");
    const styleCheckboxes = document.querySelectorAll(
      "input[name='style']:checked"
    );
    const styles = Array.from(styleCheckboxes)
      .map((checkbox) => checkbox.value)
      .join(", ");

    const body = `
      Bride's Name: ${encodeURIComponent(formData.firstName.value)}
      Groom's Name: ${encodeURIComponent(formData.groomName.value)}
      Planner's Name: ${encodeURIComponent(formData.plannerName.value)}
      Bride's Email: ${encodeURIComponent(formData.email.value)}
      Planner Email: ${encodeURIComponent(formData.email1.value)}
      Bride's Phone: ${encodeURIComponent(formData.phone.value)}
      Planner Phone: ${encodeURIComponent(formData.phone1.value)}
      Venue: ${encodeURIComponent(formData.venue.value)}
      Reception Venue: ${encodeURIComponent(formData.venue1.value)}
      Date of Event: ${encodeURIComponent(formData.date.value)}
      Preferred Style: ${encodeURIComponent(styles)}
      Additional Information: ${encodeURIComponent(
        formData.additionalInfo.value
      )}
    `.replace(/(\r\n|\n|\r)/gm, "%0D%0A");

    return `mailto:florasproflowers@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleFloralEssentialsSubmit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    const link = document.createElement("a");
    link.href = composeFloralEssentialsEmailLink(formData);
    link.style.display = "none";
    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    e.target.reset();
    alert(
      "The email client has been opened. Please send the email to complete your request."
    );
  };

  const composeFloralEssentialsEmailLink = (formData) => {
    const {
      bridal_bouquets,
      bridesmaids_bouquets,
      boutonnieres,
      centerpiecesNeeded,
      colorPalette,
      additionalNeeds,
    } = formData;
    const subject = encodeURIComponent("Wedding Floral Essentials Request");
    const body = `
      Bridal Bouquets: ${encodeURIComponent(bridal_bouquets)}
      Bridesmaids Bouquets: ${encodeURIComponent(bridesmaids_bouquets)}
      Boutonnieres: ${encodeURIComponent(boutonnieres)}
      Centerpieces Needed: ${encodeURIComponent(centerpiecesNeeded)}
      Color Palette: ${encodeURIComponent(colorPalette)}
      Additional Needs: ${encodeURIComponent(additionalNeeds)}
    `.replace(/(\r\n|\n|\r)/gm, "%0D%0A");

    return `mailto:florasproflowers@gmail.com?subject=${subject}&body=${body}`;
  };

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
        <form onSubmit={handleSubmit} className="form m-2 p-6  md:w-1/2">
          <h2 className="subtitle mb-2">
            Create Your Dream Wedding with Custom Floral Designs!
          </h2>
          <hr className="mb-4" />
          <div className="mb-4 md:flex">
            <div className="md:mr-2 mb-4 md:mb-0">
              <label className="label" htmlFor="firstName">
                Bride&apos;s Name
              </label>
              <input
                className="shadow border rounded py-2 px-3 text-gray-700"
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Bride"
                required
              />
            </div>
            <div className="md:">
              <label className="label" htmlFor="groomName">
                Groom&apos;s Name
              </label>
              <input
                className="shadow border rounded py-2 px-3 text-gray-700"
                id="groomName"
                name="groomName"
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
              name="plannerName"
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
                name="email"
                type="email"
                placeholder="email@.com"
                autoComplete="email"
                required
              />
            </div>
            <div className="md:">
              <label className="label" htmlFor="email1">
                Planner Email
              </label>
              <input
                className="shadow border rounded w-full py-2 px-3 text-gray-700"
                id="email1"
                name="email1"
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
                name="phone"
                type="tel"
                pattern="(\(?\d{3}\)?|\d{3})([-]?\d{3})([-]?\d{4})"
                placeholder="###-###-####"
                autoComplete="tel"
                required
              />
            </div>
            <div className="md:">
              <label className="label" htmlFor="phone1">
                Planner Phone
              </label>
              <input
                className="shadow border rounded w-full py-2 px-3 text-gray-700"
                id="phone1"
                name="phone1"
                type="tel"
                pattern="(\(?\d{3}\)?|\d{3})([-]?\d{3})([-]?\d{4})"
                autoComplete="tel"
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
              name="venue1"
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
              name="date"
              type="date"
              required
            />
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
              type="text"
              name="additionalInfo"
              required
              placeholder="Any addition details you want me to know!"
              rows={4}
            ></textarea>
          </div>

          <div className="flex justify-end ">
            <button className="button" type="submit" aria-label="Submit Form">
              Submit
            </button>
          </div>
        </form>
        <div className="form-container md:w-1/2">
          <form
            onSubmit={handleFloralEssentialsSubmit}
            className="form p-6 m-2"
          >
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
              <button className="button" type="submit" aria-label="Submit Form">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
