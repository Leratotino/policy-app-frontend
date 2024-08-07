import React from "react";

const SolutionComponent = () => {
  return (
    <section
      id="solutions"
      class="py-12 bg-gradient-to-b from-green-50 to-green-100 sm:py-16 lg:py-72"
    >
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            Privacy Policy Checker
          </h2>
          <p class="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">
            For your convenience GDPRWise has created a Privacy Policy Checker
            that checks your privacy policy for compliance with the GDPR
            regulation. Paste in the link to your privacy policy web page and
            see how you perform. No personal data is saved.
          </p>
        </div>

        <div class="flex items-center justify-center lg:pl-8">
          <form
            action="#"
            method="POST"
            class="mt-6 flex items-center gap-6 justify-center"
          >
            <div>
              <label for="url" class="sr-only">
                Link to your full privacy policy web page
              </label>
              <input
                type="url"
                name="text"
                id="url"
                placeholder="e.g. https://mydomain.com/privacypolicy.html"
                class="w-[600px] p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-full focus:outline-none focus:border-blue-600 caret-blue-600"
              />
            </div>
            <a
              href="#"
              title=""
              class="inline-flex items-center px-6 py-4 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full hover:bg-yellow-400 focus:bg-yellow-400"
              role="button"
            >
              Run checks
              <svg
                class="w-6 h-6 ml-8 -mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </a>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SolutionComponent;
