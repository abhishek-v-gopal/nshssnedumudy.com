<template>    
<template v-for="staff in staffs" :key="staff.id">
   <div class="text-center text-gray-500 dark:text-gray-400">
              <img class="mx-auto mb-4 w-36 h-36 rounded-full" :src="staff.image" :alt=staff.name>
              <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">{{ staff.name }}</a>
              </h3>
              <p>{{ staff.position }}</p>
              <!-- <p>{{ staff.subject }}</p> -->

          </div>
</template>
</template>
<script>
export default{
    name: 'StaffCard',
    data(){
        return{
            staffs: [
            {
                    id: 0,
                    name: "Dr. K Gopakumar",
                    position: "School Manager",
                    image: "/assets/staff/Gopakumar.jpg",
                    subject: "Commerce"

                },
                {
                    id: 1,
                    name: "Rajesh J",
                    position: "Principal",
                    image: "/assets/staff/Rajesh sir.jpg",
                    subject: "Commerce"

                },
                {
                    id: 2,
                    name: "Narayana Iyer R",
                    position: "HSST",
                    image: "/assets/staff/Iyer sir.jpg",
                    subject: "Mathematics"

                },
                {
                    id: 3,
                    name: "Narayanan Namboothiri K",
                    position: "HSST",
                    image: "/assets/staff/Naboothiri sir.jpg",
                    subject: "Chemistry"

                },
                {
                    id: 4,
                    name: "Biju K V",
                    position: "HSST",
                    image: "/assets/staff/biju .jpg",
                    subject: "Malayalam"

                },
                {
                    id: 5,
                    name: "Deepa M",
                    position: "HSST",
                    image: "/assets/staff/Deepa tr.jpg",
                    subject: "Zoology"

                },
                {
                    id: 6,
                    name: "Bindu B Nair",
                    position: "HSST",
                    image: "/assets/staff/Bindu.jpg",
                    subject: "English"

                },
                {
                    id: 7,
                    name: "Krishnakumar N",
                    position: "HSST",
                    image: "/assets/staff/KK.jpg",
                    subject: "Computer Science"

                },
                {
                    id: 8,
                    name: "Lekshmi Das",
                    position: "HSST",
                    image: "/assets/staff/Lekshmi 1.jpg",
                    subject: "Economics"

                },
                {
                    id: 9,
                    name: "Sreelatha A",
                    position: "HSST",
                    image: "/assets/staff/sreelatha.jpg",
                    subject: "Mathematics"

                },
                {
                    id: 10,
                    name: "Sandhya Karnavar",
                    position: "HSST",
                    image: "/assets/staff/sandhya.jpg",
                    subject: "English"

                },
                {
                    id: 11,
                    name: "Suresh P V",
                    position: "HSST",
                    image: "/assets/staff/Suresh.jpg",
                    subject: "Computer Science"

                },
                {
                    id: 12,
                    name: "Sherly Joseph",
                    position: "HSST",
                    image: "/assets/staff/sherly.jpg",
                    subject: "English"

                },
                {
                    id: 13,
                    name: "Anitha J",
                    position: "HSST",
                    image: "/assets/staff/Anita.jpg",
                    subject: "Commerce"

                },
                {
                    id: 14,
                    name: "Abhilash Chandran",
                    position: "HSST",
                    image: "/assets/staff/Abhilash sir.jpg",
                    subject: "Gandhian Studies"

                },
                {
                    id: 15,
                    name: "Lekshmi Rajamani",
                    position: "HSST",
                    image: "/assets/staff/Lekshmi R tr.jpg",
                    subject: "Communicative English"

                },
                {
                    id: 16,
                    name: "Soumya I",
                    position: "HSST",
                    image: "/assets/staff/Soummya tr.jpg",
                    subject: "Economics"

                },
                {
                    id: 17,
                    name: "Chithra Rajagopal",
                    position: "HSST",
                    image: "/assets/staff/Chithra tr.jpg",
                    subject: "Malayalam"

                },
                {
                    id: 18,
                    name: "Sreejith V S",
                    position: "HSST",
                    image: "/assets/staff/sreejith sir.jpg",
                    subject: "Hindi"
                },
                {
                    id: 19,
                    name: "Ligi George",
                    position: "HSST",
                    image: "/assets/staff/Ligy tr.jpg",
                    subject: "Physics"
                },
                {
                    id: 20,
                    name: "Harikumar V",
                    position: "Lab Assistant",
                    image: "/assets/staff/Harikumar.jpg",
                    subject: ""
                },
                {
                    id: 21,
                    name: "Binu V",
                    position: "Lab Assistant",
                    image: "/assets/staff/Binu .jpg",
                    subject: ""
                },
                {
                    id: 22,
                    name: "Shemmy L",
                    position: "Lab Assistant",
                    image: "/assets/staff/Shemmy.jpg",
                    subject: ""
                },
                {
                    id: 23,
                    name: "Vidya T",
                    position: "Office Staff",
                    image: "/assets/staff/Vidya T.jpg",
                    subject: ""
                },


            ]
        }
    }
} 
</script>