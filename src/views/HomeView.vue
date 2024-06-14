<template>
  <div class=" md:mt-1 mt-12">
    <NavBar />
    <template v-if="showModal">
      <div class="bg-gray-900 h-screen bg-opacity-35	 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 pt-24 flex justify-end items-left w-full md:inset-0 h-modal md:h-full">
    <div class="relative p-4 w-full max-w-md h-full md:h-auto">
        <!-- Modal content -->
        <div class="relative p-4 text-center bg-Primary bg-opacity-95 rounded-lg shadow dark:bg-gray-800 sm:p-5">
            <button type="button" @click="showModal = false" class="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Close modal</span>
            </button>
            <div class="dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
                <h1 class="text-white font-bold">Importent News</h1>
            </div>
            <!-- <p class="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Successfully removed product.</p> -->
            <marquee behavior="scroll" direction="up" scrollamount="2" class="text-center">
              <p class="text-white">Addmission started for 2024-2025 academic year. For more details contact the office directly or contact the number given below
              </p>
              <hr>
              <p class="text-white">Bus service is provided for the students from school to Alappuzha town
              </p>
              <hr>
              <p class="text-white">2nd allotment will be published on or before 30th june 2023
              </p>
              <hr>
            </marquee>
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
          <p class="mb-8 text-lg font-light text-secondary lg:text-xl">Nair Samajam Higher Secondary School in Nedumudy,
            run by Kottaram Devaswom, is a leading Alappuzha school. Since 1998, its Higher Secondary wing has achieved
            over 90% pass rates and many A+ grades in HSE exams, thanks to dedicated staff, enthusiastic students, and
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
            <a href="/"
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
                <a>Biology Science</a>
              </h3>
              <!-- <span class="text-gray-500 dark:text-gray-400">CEO & Web Developer</span> -->
              <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">We offer 50 seats with a mix of science
                subjects.</p>
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
                <a>Computer Science</a>
              </h3>
              <!-- <span class="text-gray-500 dark:text-gray-400">CTO</span> -->
              <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">We offer 50 seats with a mix of science
                subjects.</p>
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
                <a>Commerce</a>
              </h3>
              <!-- <span class="text-gray-500 dark:text-gray-400">Senior Front-end Developer</span> -->
              <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">We offer 50 seats with a standard
                commerce subject combination.</p>
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
                <a>Humanities</a>
              </h3>
              <!-- <span class="text-gray-500 dark:text-gray-400">Marketing & Sale</span> -->
              <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">We offer 50 seats with a rare subject
                combination.</p>
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


export default {
  name: 'HomeView',
  components: {
    NavBar,
    ClubsView,
    Footer,
  },
  data() {
    return {
      showModal: false
    }
  },
  mounted() {
    this.showModal = true;
  }
}
</script>