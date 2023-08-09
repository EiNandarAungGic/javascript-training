// Template Literal, Template String

let person_detail = {
  name: "Mg Mg",
  brother: "Aung Aung",
  sister: "Su Su",
  parents: ["U Mya", "Daw Nu"],
  age: 20,
};

let dt = `
<h5>${person_detail.name} Resume</h5>
<ul>
    <li>Father:${person_detail.parents[0]}</li>
    <li>Mother:${person_detail.parents[1]}</li>
    <li>Brother:${person_detail.brother}</li>
    <li>Sister:${person_detail.sister}</li>
    <li>Age:${person_detail.age}</li>
</ul>
`;
document.querySelector(".para").innerHTML = dt;
