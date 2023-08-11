import "./style.css";
let jobs = [
  {
    logo: "images/photosnap.svg",
    name: "Photosnap",
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    status: 2,
    posted: "1d ago",
    type: "Full Time",
    place: "USA only",
    requirments: ["HTML", "CSS", "JavaScript"],
  },
  {
    logo: "images/manage.svg",
    name: "Manage",
    position: "Midweight Fullstack Developer",
    role: "Fullstack",
    level: "Midweight",
    status: 2,
    posted: "2d ago",
    type: "Part Time",
    place: "Remote",
    requirments: ["HTML", "CSS", "JavaScript"],
  },
  {
    logo: "images/account.svg",
    name: "Account",
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    status: 1,
    posted: "5d ago",
    type: "Contract",
    place: "USA only",
    requirments: ["HTML", "CSS", "JavaScript"],
  },
  {
    logo: "images/myhome.svg",
    name: "MyHome",
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    status: 0,
    posted: "4d ago",
    type: "Part Time",
    place: "UK only",
    requirments: ["HTML", "CSS", "JavaScript"],
  },
];

let job_list = document.querySelector("#jobs");
let txts = document.querySelector("#txts");
let clear = document.querySelector("#clearBtn");

function jobList() {
  let str = "";
  jobs.forEach((job, index) => {
    str += `
    <div
      class="w-2/3 mt-2 bg-white shadow-lg rounded-lg"
    >
      <div class="flex bg-white-200 px-6 py-4 justify-between">
        <div class="flex flex-row items-center pt-3">
          <img
            class="bg-blue-700 w-12 h-12 flex justify-center items-center rounded-full uppercase font-bold text-white"
            src="${job.logo}"
            alt=""
          />
          <div class="ml-4">
            <div class="flex flex-row">
              <p class="text-teal-600 font-bold mx-2">${job.name}</p>
              ${
                job.status >= 1
                  ? `<p
              class="bg-teal-600 text-xs uppercase px-2 py-1 rounded-full border border-gray-200 text-gray-200 font-bold inline mx-1"
            >
            NEW!
            </p>`
                  : ""
              }
              ${
                job.status == 2
                  ? `
              <p
                class="bg-black text-xs uppercase px-2 py-1 rounded-full border border-gray-200 text-gray-200 font-bold inline mx-1"
              >
                FEATURED
              </p>`
                  : ""
              }
            </div>
            <p class="font-bold my-1 mx-2">${job.position}</p>
            <ul class="flex flex-row">
              <li class="text-gray-500 mx-2">${job.posted}</li>
              <li class="text-gray-500 mx-2">${job.type}</li>
              <li class="text-gray-500 mx-2">${job.place}</li>
            </ul>
          </div>
        </div>
        <div class="flex flex-wrap justify-center items-center">
        ${jobRequirements(index)}
        </div>
      </div>
    </div>
    `;
  });
  job_list.innerHTML = str;
}

function jobRequirements(i) {
  console.log(i);
  let s = `<p
    class="bg-gray-300 text-xs uppercase px-2 py-1 rounded-md border border-gray-300 text-teal-600 font-bold inline mx-1" id="req"
    >
    ${jobs[i].role}
    </p><p
    class="bg-gray-300 text-xs uppercase px-2 py-1 rounded-md border border-gray-300 text-teal-600 font-bold inline mx-1" id="req"
    >
    ${jobs[i].level}
    </p>`;

  for (let j = 0; j < jobs[i].requirments.length; j++) {
    s += `<p
    class="bg-gray-300 text-xs uppercase px-2 py-1 rounded-md border border-gray-300 text-teal-600 font-bold inline mx-1" id="req"
    >
    ${jobs[i].requirments[j]}
    </p>`;
  }
  return s;
}

clear.addEventListener("click", () => {
  txts.innerHTML = "";
});

jobList();
