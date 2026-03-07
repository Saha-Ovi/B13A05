
const issueCount=(issues)=>
{
    const allCount=document.getElementById("allCount");
    const openCount=document.getElementById("openCount");
    const closedCount=document.getElementById("closeCount");
    allCount.innerText=issues.length;
    openCount.innerText=issues.filter(issue=>issue.status==="open").length;
    closedCount.innerText=issues.filter(issue=>issue.status=== "closed").length;
}

// All data
async function loadIssues() {
  const res = await fetch(
    "https://phi-lab-server.vercel.app/api/v1/lab/issues",
  );
  const data = await res.json();
  const issues=data.data;
//   issue count called
  issueCount(issues);
//   display issue called
  displayIssues(issues);
  // console.log(data);
}

function displayIssues(issues) {
    const container = document.getElementById("issue-container");
    container.innerHTML = "";
  
  issues.forEach((issue) => {
    const icon=issue.status=="open"?
    "./assets/Open-Status.png":"./assets/Closed-Status.png";
    const borderColor=issue.status=="open"?
    "border-green-600":"border-purple-600";
    const labelContainer=issue.labels.map(label=>`<span class="badge badge-warning ">${label}</span>`).join(" ");

    const div = document.createElement("div");
    div.className=`"card border-2 rounded-lg  p-5 ${borderColor} bg-base-100 shadow-sm`
    div.innerHTML = `<div ">

  <!-- Top section -->
  <div class="flex justify-between items-center">
    <img src="${icon}" alt="">
    <p class="text-sm font-semibold badge badge-primary">${issue.priority}</p>
  </div>

  <!-- Content -->
  <div class="mt-3 space-y-2">
    <h4 class="font-semibold text-lg">
      ${issue.title} </h4>

    <p class="text-gray-500">
     ${issue.description}
    </p>

    <div class="flex gap-2">
      ${labelContainer}
    </div>

    <hr>

    <!-- Footer -->
    <div class=" text-sm text-gray-500">
      <p>${issue.id} ${issue.author}</p>
      <span> ${issue.createdAt} </span>
    </div>
  </div>

</div>`;
    container.appendChild(div);
  });
}
loadIssues();

// document.getElementById("all-filter-btn").addEventListener("click", loadIssues);
