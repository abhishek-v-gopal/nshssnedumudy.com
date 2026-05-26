<template>
  <div class=" md:mt-1 mt-12">
    <NavBar />
    <template v-if="showModal">
      <div class="fixed inset-0 z-50 flex items-end justify-center bg-gray-900/40 p-3 sm:items-end sm:justify-end sm:p-6">
        <div class="w-full max-w-lg rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 sm:max-w-md">
          <div class="flex items-start justify-between gap-3 rounded-t-2xl bg-Primary px-4 py-4 sm:gap-4 sm:px-5">
            <div>
              <p class="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/70 sm:text-xs sm:tracking-[0.3em]">School update</p>
              <h1 class="mt-1 text-xl font-bold text-white sm:text-2xl">Proud achievement</h1>
            </div>
            <button
              type="button"
              @click="closeCelebration"
              class="rounded-full p-2 text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              <svg aria-hidden="true" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
              <span class="sr-only">Close popup</span>
            </button>
          </div>

          <div class="px-4 py-4 sm:px-5 sm:py-5">
            <div class="grid gap-3 sm:grid-cols-2">
              <div class="rounded-xl bg-Secondary p-3 text-center sm:p-4">
                <p class="text-xs font-medium text-gray-600 sm:text-sm">+2 exam result</p>
                <p class="mt-2 text-2xl font-extrabold text-Primary sm:text-3xl">93%</p>
                <p class="mt-1 text-sm text-gray-500">Pass percentage</p>
              </div>
              <div class="rounded-xl bg-Secondary p-3 text-center sm:p-4">
                <p class="text-xs font-medium text-gray-600 sm:text-sm">Kuttanad</p>
                <p class="mt-2 text-2xl font-extrabold text-Primary sm:text-3xl">1st</p>
                <p class="mt-1 text-sm text-gray-500">Position</p>
              </div>
            </div>

            <p class="mt-4 text-sm leading-6 text-gray-600 sm:text-[15px]">
              We are proud to share that our Higher Secondary students achieved a 93% pass rate in the +2 examination and secured first position in Kuttanad and 6th position in the district. This remarkable achievement reflects the dedication of our students and the unwavering support of our staff and management.
            </p>

            <div class="mt-4 flex flex-wrap gap-3">
              <button
                type="button"
                @click="showAdmissionModal = true"
                class="inline-flex items-center rounded-full border border-Primary px-4 py-2 text-sm font-semibold text-Primary transition hover:bg-Primary hover:text-white"
              >
                View admission details
              </button>
            </div>

            <div class="mt-5 flex justify-end">
              <button
                type="button"
                @click="closeCelebration"
                class="inline-flex items-center rounded-full bg-Primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-secondary sm:px-5"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-if="showAdmissionModal">
      <div class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50 p-3 sm:p-6">
        <div class="w-full max-w-lg rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 sm:max-w-md">
          <div class="flex items-start justify-between gap-3 rounded-t-2xl bg-Primary px-4 py-4 sm:gap-4 sm:px-5">
            <div>
              <p class="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/70 sm:text-xs sm:tracking-[0.3em]">Admissions</p>
              <h2 class="mt-1 text-xl font-bold text-white sm:text-2xl">2026-2027 admission details</h2>
            </div>
            <button
              type="button"
              @click="showAdmissionModal = false"
              class="rounded-full p-2 text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              <svg aria-hidden="true" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
              <span class="sr-only">Close admission popup</span>
            </button>
          </div>

          <div class="px-4 py-4 sm:px-5 sm:py-5">
            <div class="rounded-xl border border-Primary/20 bg-Secondary p-4">
              <p class="text-sm font-semibold text-Primary">Admission details</p>
              <ul class="mt-2 space-y-2 text-sm leading-6 text-gray-600 sm:text-[15px]">
                <li>Admission started for the 2026-2027 academic year.</li>
                <li>Contact the school office for seat availability and course details.</li>
                <li>Call <a href="tel:+919447506088" class="text-Primary hover:underline">+91 94475 06088</a> for admission enquiries.</li>
                <li>School code: <b>04032</b></li>
              </ul>
            </div>

            <div class="mt-5 flex justify-end">
              <button
                type="button"
                @click="showAdmissionModal = false"
                class="inline-flex items-center rounded-full bg-Primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-secondary sm:px-5"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </template>
<!-- main section --> 
    <section>
      <div
        class="flex flex-col lg:flex-row w-full mx-auto max-w-screen-xl p-4 items-center justify-center lg:py-4 mt-12 ">
        <div class="mx-auto max-w-screen-xl text-left w-full lg:w-2/3 py-4 lg:py-20">
          <h1 class="mb-4 text-3xl font-bold text-Primary md:text-5xl lg:text-6xl">Nair Samajam Higher Secondary School
          </h1>
          <p class="mb-8 text-lg font-light text-secondary lg:text-xl">NS HSS in Nedumudy,
            run by Kottaram Devaswom, is a leading Alappuzha school. Since 1998, its Higher Secondary wing has achieved
            over 93% pass rates and many A+ grades in HSE exams, thanks to dedicated staff, enthusiastic students, and
            strong management.</p>
          <!-- count -->
          <div data-aos="fade-up" class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            <div class="bg-white p-6 rounded-md border shadow-md flex flex-col items-center justify-center">
              <span class="text-2xl font-bold text-Primary">5900+</span>
              <h3 class="text-sm font-medium text-center text-gray-500 mb-2">Students engaged with as and learned new
                things</h3>
            </div>
            <div class="bg-white p-6 rounded-md border shadow-md flex flex-col items-center justify-center">
              <span class="text-2xl font-bold text-Primary">25+</span>
              <h3 class="text-sm font-medium text-center text-gray-500 mb-2">Years of experience with students and their
                activities
              </h3>
            </div>
            <div class="bg-white p-6 rounded-md border shadow-md flex flex-col items-center justify-center">
              <span class="text-2xl font-bold text-Primary">22+</span>
              <h3 class="text-sm font-medium text-gray-500 mb-2">Skilled Teachers</h3>
            </div>
          </div>
          <!-- learn more and get started button -->
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-left sm:space-y-0 sm:space-x-4 mt-8">
            <a href="#course"
              class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-Primary rounded bg-primary hover:bg-secondary">
              Get started
              <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
            <a href="/history"
              class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-Primary rounded border border-Primary hover:bg-Primary hover:text-white">
              Learn more
            </a>
          </div>
        </div>
        <div class="w-full lg:w-1/3 py-4 lg:py-20">
          <img class="w-full h-full" src="/assets/illustrations/education-animate.svg" alt="Gallery" />
        </div>
      </div>
    </section>
    <!-- course -->

    <section id="course" class="bg-Secondary  dark:bg-gray-900">
      <div class="py-5 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-Primary dark:text-white">Our Course</h2>
          <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Discover our course offering a
            diverse combination of subjects.</p>
        </div>
        <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          <!-- first subject -->
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <a>
              <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg  hover:animate-bounce"
                src="/assets/illustrations/biologist-animate.svg" alt="Bonnie Avatar">
            </a>
            <div class="p-5">
              <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a>Biology Science — Code: 01</a>
              </h3>
              <p class="mt-3 mb-1 font-medium text-gray-700 dark:text-gray-300">Subjects:</p>
              <ul class="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mb-4">
                <li>Biology</li>
                <li>Physics</li>
                <li>Chemistry</li>
                <li>Mathematics</li>
              </ul>
              <p class="mt-0 font-light text-gray-500 dark:text-gray-400">We offer 100 seats in the Biology science stream.</p>
            </div>
          </div>
          <!-- Second Subject -->
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <a>
              <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg  hover:animate-bounce"
                src="/assets/illustrations/typing-animate.svg" alt="Jese Avatar">
            </a>
            <div class="p-5">
              <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a>Computer Science — Code: 05</a>
              </h3>
              <p class="mt-3 mb-1 font-medium text-gray-700 dark:text-gray-300">Subjects:</p>
              <ul class="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mb-4">
                <li>Computer Science</li>
                <li>Physics</li>
                <li>Chemistry</li>
                <li>Mathematics</li>
              </ul>
              <p class="mt-0 font-light text-gray-500 dark:text-gray-400">We offer 50 seats in the Computer Science stream.</p>
            </div>
          </div>
          <!-- Third subject -->
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <a>
              <img class="w-auto h-72  rounded-lg sm:rounded-none sm:rounded-l-lg  hover:animate-bounce" src="/assets/illustrations/commerce.svg"
                alt="Michael Avatar">
            </a>
            <div class="p-5">
              <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a>Commerce — Code: 39</a>
              </h3>
              <p class="mt-3 mb-1 font-medium text-gray-700 dark:text-gray-300">Subjects:</p>
              <ul class="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mb-4">
                <li>Business Studies</li>
                <li>Accountancy</li>
                <li>Computer Application</li>
                <li>Economics</li>
              </ul>
              <p class="mt-0 font-light text-gray-500 dark:text-gray-400">We offer 50 seats in the Commerce stream.</p>
            </div>
          </div>
          <!-- fourth subjects -->
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <a>
              <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg  hover:animate-bounce" src="/assets/illustrations/humanities.svg"
                alt="Sofia Avatar">
            </a>
            <div class="p-5">
              <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a>Humanities — Code: 33</a>
              </h3>
              <p class="mt-3 mb-1 font-medium text-gray-700 dark:text-gray-300">Subjects:</p>
              <ul class="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mb-4">
                <li>Gandhian Studies</li>
                <li>Economics</li>
                <li>Computer Application</li>
                <li>Communicative English</li>
              </ul>
              <p class="mt-0 font-light text-gray-500 dark:text-gray-400">We offer 50 seats in the Humanities stream.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="clubs">
      <ClubsView />

    </section>
<!-- Contact form -->

   <section class="bg-Secondary dark:bg-slate-800" id="contact">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div class="mb-4">
            <div class="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                <h2
                    class="font-heading mb-4 font-bold tracking-tight text-Primary dark:text-white text-3xl sm:text-5xl">
                    Get in Touch
                </h2>
                <p class="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">Keep your smile shining bright and stay connected with us!
                </p>
            </div>
        </div>
        <div class="flex items-stretch justify-center">
            <div class="grid md:grid-cols-2">
                <div class="h-full pr-6">
                    <p class="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                      Reach out to us with any questions or for additional information about our programs and admissions.
                    </p>
                    <ul class="mb-6 md:mb-0">
                        <li class="flex">
                            <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="h-6 w-6">
                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                    <path
                                        d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                                    </path>
                                </svg>
                            </div>
                            <div class="ml-4 mb-4">
                                <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Our Address
                                </h3>
                                <p class="text-gray-600 dark:text-slate-400">Nedumudy Kruvata Rd, Nedumudy, Kuttanad Taluk</p>
                                <p class="text-gray-600 dark:text-slate-400">Kerala, India 688505</p>
                            </div>
                        </li>
                        <li class="flex">
                            <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="h-6 w-6">
                                    <path
                                        d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                                    </path>
                                    <path d="M15 7a2 2 0 0 1 2 2"></path>
                                    <path d="M15 3a6 6 0 0 1 6 6"></path>
                                </svg>
                            </div>
                            <div class="ml-4 mb-4">
                                <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Contact
                                </h3>
                                <p class="text-gray-600 dark:text-slate-400">Mobile: +919447506088</p>
                                <p class="text-gray-600 dark:text-slate-400">Mail: nshsnedumudy@gmail.com</p>
                            </div>
                        </li>
                        <li class="flex">
                            <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="h-6 w-6">
                                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                    <path d="M12 7v5l3 3"></path>
                                </svg>
                            </div>
                            <div class="ml-4 mb-4">
                                <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Working
                                    hours</h3>
                                <p class="text-gray-600 dark:text-slate-400">Monday - Friday: 09:00 - 04:00</p>
                                <!-- <p class="text-gray-600 dark:text-slate-400">Saturday &amp; Sunday: 08:00 - 12:00</p> -->
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="card h-fit max-w-6xl p-5 md:p-12" id="form">
                    <h2 class="mb-4 text-2xl font-bold text-Primary dark:text-white">Ready to Get Started?</h2>
                    <form id="contactForm">
                        <div class="mb-6">
                            <div class="mx-0 mb-1 sm:mb-4">
                                <div class="mx-0 mb-1 sm:mb-4">
                                    <label for="name" class="pb-1 text-xs uppercase tracking-wider"></label><input type="text" id="name" autocomplete="given-name" placeholder="Your name" class="mb-2 w-full rounded-md border border-Primary py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0 " name="name">
                                </div>
                                <div class="mx-0 mb-1 sm:mb-4">
                                    <label for="email" class="pb-1 text-xs uppercase tracking-wider"></label><input type="email" id="email" autocomplete="email" placeholder="Your email address" class="mb-2 w-full rounded-md border border-Primary py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="email">
                                </div>
                            </div>
                            <div class="mx-0 mb-1 sm:mb-4">
                                <label for="textarea" class="pb-1 text-xs uppercase tracking-wider"></label><textarea id="textarea" name="textarea" cols="30" rows="5" placeholder="Write your message..." class="mb-2 w-full rounded-md border border-Primary py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"></textarea>
                            </div>
                        </div>
                        <div class="text-center">
                            <button type="submit" class="w-full hover:bg-Primary border border-Primary text-gray-900 hover:text-white px-6 py-3 font-xl rounded-md sm:mb-0">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>



    <Footer />
  </div>
</template>
<script>
import NavBar from '../components/reuse/NavBar.vue'
import ClubsView from '../components/ClubsView.vue'
import Footer from '../components/reuse/Footer.vue'

const festiveScriptUrl = 'https://cdn.jsdelivr.net/npm/festive-js/core.min.js'


export default {
  name: 'HomeView',
  components: {
    NavBar,
    ClubsView,
    Footer,
  },
  data() {
    return {
      showModal: false,
      showAdmissionModal: false,
      festiveScriptLoaded: false,
      festiveScriptPromise: null,
    }
  },
  methods: {
    loadFestiveScript() {
      if (this.festiveScriptLoaded) {
        return Promise.resolve()
      }

      if (this.festiveScriptPromise) {
        return this.festiveScriptPromise
      }

      this.festiveScriptPromise = new Promise((resolve, reject) => {
        const existingScript = document.querySelector(`script[src="${festiveScriptUrl}"]`)

        if (existingScript) {
          this.festiveScriptLoaded = true
          resolve()
          return
        }

        const script = document.createElement('script')
        script.src = festiveScriptUrl
        script.async = true
        script.onload = () => {
          this.festiveScriptLoaded = true
          resolve()
        }
        script.onerror = () => {
          reject(new Error('Unable to load festive-js'))
        }
        document.head.appendChild(script)
      })

      return this.festiveScriptPromise
    },
    registerCrackerTheme() {
      if (!window.Festive) {
        return
      }

      if (window.Festive.getRegisteredThemes().some((theme) => theme.key === 'cracker')) {
        return
      }

      window.Festive.registerTheme({
        key: 'cracker',
        name: 'Cracker Burst',
        triggers: [{ type: 'always' }],
        apply(container) {
          const particles = []

          const styleId = 'cracker-theme-styles'
          if (!document.getElementById(styleId)) {
            const style = document.createElement('style')
            style.id = styleId
            style.textContent = `
              @keyframes cracker-pulse-left {
                0%, 100% { transform: translateY(-50%) scale(0.85) rotate(-8deg); }
                45% { transform: translateY(-50%) scale(1) rotate(4deg); }
                60% { transform: translateY(-50%) scale(1.08) rotate(8deg); }
              }

              @keyframes cracker-pulse-right {
                0%, 100% { transform: translateY(-50%) scale(0.85) rotate(8deg); }
                45% { transform: translateY(-50%) scale(1) rotate(-4deg); }
                60% { transform: translateY(-50%) scale(1.08) rotate(-8deg); }
              }

              @keyframes cracker-burst-left {
                0% { transform: translate(0, -50%) scale(0.2); opacity: 0; }
                12% { opacity: 1; }
                60% { transform: translate(18vw, -60%) scale(1); opacity: 1; }
                100% { transform: translate(28vw, -80%) scale(0.7); opacity: 0; }
              }

              @keyframes cracker-burst-right {
                0% { transform: translate(0, -50%) scale(0.2); opacity: 0; }
                12% { opacity: 1; }
                60% { transform: translate(-18vw, -60%) scale(1); opacity: 1; }
                100% { transform: translate(-28vw, -80%) scale(0.7); opacity: 0; }
              }

              @keyframes cracker-spark {
                0% { transform: translate(-50%, -50%) scale(0.2); opacity: 0; }
                15% { opacity: 1; }
                55% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
                100% { transform: translate(-50%, -50%) scale(0.45); opacity: 0; }
              }
            `
            document.head.appendChild(style)
          }

          const createSidePopper = (side, top, delay) => {
            const popper = document.createElement('div')
            popper.textContent = '🎉'
            popper.style.cssText = [
              'position: fixed',
              'pointer-events: none',
              'z-index: 2147483647',
              `top: ${top}%`,
              side === 'left' ? 'left: 0' : 'right: 0',
              'font-size: 36px',
              'filter: drop-shadow(0 0 12px rgba(255, 140, 0, 0.9))',
              `animation: ${side === 'left' ? 'cracker-pulse-left' : 'cracker-pulse-right'} 2.8s ease-in-out ${delay}s infinite`,
            ].join('; ')
            container.appendChild(popper)
            particles.push(popper)

            const burstCount = 6
            for (let index = 0; index < burstCount; index += 1) {
              const spark = document.createElement('span')
              spark.textContent = index % 2 === 0 ? '✦' : '•'
              const offsetY = (index - 2.5) * 9
              const scale = 12 + index * 2

              spark.style.cssText = [
                'position: fixed',
                'pointer-events: none',
                'z-index: 2147483647',
                side === 'left' ? 'left: 2.2rem' : 'right: 2.2rem',
                `top: calc(${top}% + ${offsetY}px)`,
                'font-size: 16px',
                'color: #ffd54f',
                'text-shadow: 0 0 10px rgba(255, 213, 79, 0.9)',
                `animation: ${side === 'left' ? 'cracker-burst-left' : 'cracker-burst-right'} 1.6s ease-out ${delay + index * 0.05}s infinite`,
                `transform: translate(0, -50%) scale(${scale / 18})`,
              ].join('; ')

              container.appendChild(spark)
              particles.push(spark)
            }
          }

          createSidePopper('left', 18, 0)
          createSidePopper('left', 48, 0.8)
          createSidePopper('left', 78, 1.6)

          createSidePopper('right', 24, 0.3)
          createSidePopper('right', 56, 1.1)
          createSidePopper('right', 84, 1.9)

          return () => {
            particles.forEach((particle) => particle.remove())
            const style = document.getElementById(styleId)
            if (style) {
              style.remove()
            }
          }
        },
      })
    },
    openCelebration() {
      if (!window.Festive) {
        return
      }

      this.registerCrackerTheme()

      window.Festive.init({
        forceTheme: 'cracker',
      })
    },
    closeCelebration() {
      this.showModal = false
      this.showAdmissionModal = false
      if (window.Festive) {
        window.Festive.destroy()
      }
    },
  },
  async mounted() {
    this.showModal = true;
    await this.loadFestiveScript()
    this.openCelebration()
  },
  beforeUnmount() {
    if (window.Festive) {
      window.Festive.destroy()
    }
  }
}
</script>
