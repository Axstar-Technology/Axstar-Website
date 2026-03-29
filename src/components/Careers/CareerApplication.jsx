import React, { useState } from "react";

const CareerApplication = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    position: "",
    coverLetter: "",
    cv: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "cv") {
      setFormData({ ...formData, cv: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div id="application" className="min-h-screen bg-black flex items-center justify-center py-30 p-4">
      <div className="w-full max-w-4xl bg-[#010807] rounded-2xl shadow-lg p-6 sm:p-8">
        
        {/* Title */}
        <h2 className="text-center text-xl sm:text-2xl font-bold mb-6 text-white">
          CAREERS AT AXSTAR
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Name Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-neutral-100 font-medium">
                First Name <span className="text-[var(--primary-color)]">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                onChange={handleChange}
                className="w-full text-neutral-400 mt-1 p-2 border border-neutral-600 rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)]"
              />
            </div>

            <div>
              <label className="text-sm text-neutral-100 font-medium">
                Last Name <span className="text-[var(--primary-color)]">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                onChange={handleChange}
                className="w-full text-neutral-400 mt-1 p-2 border border-neutral-600 rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)]"
              />
            </div>
          </div>

          {/* Position */}
          <div>
            <label className="text-sm font-medium text-neutral-100">
              Position <span className="text-[var(--primary-color)]">*</span>
            </label>
            <select
              name="position"
              onChange={handleChange}
              className="w-full mt-1 text-neutral-400 p-2 border border-neutral-600 rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)]"
            >
              <option value="">Select a position</option>
              <option>Frontend Developer</option>
              <option>Backend Developer</option>
              <option>UI/UX Designer</option>
              <option>Full Stack Developer</option>
            </select>
          </div>

          {/* Cover Letter */}
          <div>
            <label className="text-neutral-100 text-sm font-medium">
              Cover Letter <span className="text-[var(--primary-color)]">*</span>
            </label>
            <textarea
              name="coverLetter"
              rows="4"
              maxLength="200"
              placeholder="Explain how you can contribute to AXSTAR culture."
              onChange={handleChange}
              className="w-full mt-1 text-neutral-400 p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)] resize-none"
            />
            <p className="text-xs text-gray-400 text-right">0 / 200</p>
          </div>

          {/* Upload CV */}
          <div>
            <label className="text-neutral-100 text-sm font-medium">
              Upload CV <span className="text-[var(--primary-color)]">*</span>
            </label>

            <div className="mt-2 border-2 border-dashed border-neutral-600 rounded-xl p-6 text-center transition">
              <input
                type="file"
                name="cv"
                onChange={handleChange}
                className="hidden"
                id="fileUpload"
              />

              <label htmlFor="fileUpload" className="cursor-pointer">
                <div className="text-3xl mb-2">⬆️</div>
                <p className="text-sm text-neutral-300">
                  Choose a file or drag & drop it here
                </p>
                <p className="text-xs text-neutral-400 mt-1">
                  JPEG, PNG, PDF, DOCX – up to 50MB
                </p>

                <button
                  type="button"
                  className="mt-3 px-4 py-1 text-sm border text-neutral-300 rounded-md"
                >
                  BROWSE FILE
                </button>
              </label>
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-15 cursor-pointer py-2 rounded-md text-white bg-[var(--primary-color)] hover:bg-[var(--primary-color)]/50 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CareerApplication;