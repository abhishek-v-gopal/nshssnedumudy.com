<template>
  <div class=" md:mt-1 mt-12">
    <NavBar />
    <template v-if="showModal">
      <div id="successModal" tabindex="-1" aria-hidden="true" class="bg-gray-900 h-screen bg-opacity-35	 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 pt-24 flex justify-right items-right w-full md:inset-0 h-modal md:h-full">
    <div class="relative p-4 w-full max-w-md h-full md:h-auto">
        <!-- Modal content -->
        <div class="relative p-4 text-center bg-Primary bg-opacity-95 rounded-lg shadow dark:bg-gray-800 sm:p-5">
            <button type="button" @click="showModal = false" class="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="successModal">
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
            <a href="#"
              class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-Primary rounded bg-primary hover:bg-secondary">
              Get started
              <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
            <a href="#"
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

    <section id="course" class="bg-Secondary dark:bg-gray-900">
      <div class="py-5 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-Primary dark:text-white">Our Course</h2>
          <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Discover our course offering a
            diverse combination of subjects.</p>
        </div>
        <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src="/assets/illustrations/biologist-animate.svg" alt="Bonnie Avatar">
            </a>
            <div class="p-5">
              <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Biology Science</a>
              </h3>
              <!-- <span class="text-gray-500 dark:text-gray-400">CEO & Web Developer</span> -->
              <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">We offer 50 seats with a mix of science
                subjects.</p>
            </div>
          </div>
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src="/assets/illustrations/typing-animate.svg" alt="Jese Avatar">
            </a>
            <div class="p-5">
              <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Computer Science</a>
              </h3>
              <!-- <span class="text-gray-500 dark:text-gray-400">CTO</span> -->
              <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">We offer 50 seats with a mix of science
                subjects.</p>
            </div>
          </div>
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img class="w-auto h-72  rounded-lg sm:rounded-none sm:rounded-l-lg" src="/assets/illustrations/commerce.svg"
                alt="Michael Avatar">
            </a>
            <div class="p-5">
              <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Commerce</a>
              </h3>
              <!-- <span class="text-gray-500 dark:text-gray-400">Senior Front-end Developer</span> -->
              <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">We offer 50 seats with a standard
                commerce subject combination.</p>
            </div>
          </div>
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="/assets/illustrations/humanities.svg"
                alt="Sofia Avatar">
            </a>
            <div class="p-5">
              <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Humanities</a>
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

    <section id="contact" class="bg-Secondary dark:bg-gray-900">
      <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-Primary dark:text-white">Contact Us</h2>
        <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Keep your smile
          shining bright and stay connected with us!</p>
        <form action="#" class="space-y-8">
          <div>
            <label for="email" class="block mb-2 text-sm font-medium text-Primary dark:text-gray-300">Your email</label>
            <input type="email" id="email"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="example@gmail.com" required>
          </div>
          <div>
            <label for="subject" class="block mb-2 text-sm font-medium text-Primary dark:text-gray-300">Subject</label>
            <input type="text" id="subject"
              class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let us know how we can help you" required>
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="block mb-2 text-sm font-medium text-Primary dark:text-gray-400">Your
              message</label>
            <textarea id="message" rows="6"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit"
            class="py-3 px-5 text-sm inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-Primary rounded border border-Primary hover:bg-Primary hover:text-white">Send
            message</button>
        </form>
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