// for all on click it will work for all  event listener
let allIssue=[];

// all issues are counted here once  when loaded 
const issueCount=(issues)=>
{
    const allCount=document.getElementById("allCount");
    const openCount=document.getElementById("openCount");
    const closedCount=document.getElementById("closeCount");
    allCount.innerText=issues.length;
    openCount.innerText=issues.filter(issue=>issue.status==="open").length;
    closedCount.innerText=issues.filter(issue=>issue.status=== "closed").length;
}
// count active used for count hide show and active toggle button for color change
function countActive(type,activeBtnId)
{
  // active btn receives all open and closed id for color change
  const buttons=document.querySelectorAll(".filterBtn");
  buttons.forEach(button=>
  {
    button.classList.remove("btn-primary","text-white");
    button.classList.add("bg-base-200","text-neutral");
  }
  )
  const activeBtn=document.getElementById(activeBtnId);
  activeBtn.classList.remove("bg-base-200","text-neutral");
  activeBtn.classList.add("btn-primary","text-white");

  // count button hide and shown
   const Counts=document.querySelectorAll(".all-count-class");
   Counts.forEach(count=>
    count.classList.add("hidden")
   );
   if(type==="all")
   {
      Counts[0].classList.remove("hidden");
   }
   else if(type==="open")
   {
      Counts[1].classList.remove("hidden");
   }
   else
   {
      Counts[2].classList.remove("hidden");
   }
}

// All data
async function loadIssues() {
  const res = await fetch(
    "https://phi-lab-server.vercel.app/api/v1/lab/issues",
  );
  const data = await res.json();
  const issues=data.data;
  allIssue=issues;
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
    // color change here
    const icon=issue.status=="open"?
    "./assets/Open-Status.png":"./assets/Closed-Status.png";
    const borderColor=issue.status=="open"?
    "border-green-600":"border-purple-600";
    // const labelContainer=issue.labels.map(label=>`<span class="badge badge-warning ">${label}</span>`).join(" ");
     const labelContainer=issue.labels.map(label=>
      { const labelColors=label==="bug"?"badge-error":label=== "enhancement"?"badge-success":label==="help wanted"?"badge-warning":label=="documentation"?"badge-info":"badge-primary";
        return `<span class="badge ${labelColors}">${label}</span>`;
      }).join(" ");
    const priorityBtn=issue.priority==="low"? "badge-base-200":issue.priority==="medium" ?"badge-success":"badge-error";

    // element creation for each issue

    const div = document.createElement("div");
    div.className=`card border-2 rounded-lg  p-5 ${borderColor} bg-base-100 shadow-sm`
    div.innerHTML = `
    <div  class="cursor-pointer">

  <!-- Top section -->
  <div class="flex justify-between items-center">
    <img onclick="modalShow(${issue.id})" src="${icon}" alt="">
    <p onclick="modalShow(${issue.id})" class="text-sm font-semibold badge ${priorityBtn}">${issue.priority}</p>
  </div>

  <!-- Content -->
  <div class="mt-3 space-y-2">
    <h4 onclick="modalShow(${issue.id})" class="font-semibold text-lg">
      ${issue.title} </h4>

    <p onclick="modalShow(${issue.id})" class="text-gray-500 ">
     ${issue.description}
    </p>

    <div onclick="modalShow(${issue.id})" class="flex gap-2">
      ${labelContainer}
    </div>

    <hr>

    <!-- Footer -->
    <div onclick="modalShow(${issue.id})" class=" text-sm text-gray-500">
      <p>${issue.id} ${issue.author}</p>
      <span> ${issue.createdAt} </span>
    </div>
  </div>

</div>`;
    container.appendChild(div);
  });
}
// all button
document.getElementById("all-filter-btn").addEventListener("click",()=>
{
    countActive("all","all-filter-btn");
    displayIssues(allIssue);
} );

// open button
document.getElementById("open-filter-btn").addEventListener("click",async ()=>
{
  const res=await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
  const data= await res.json();
  // console.log(data.data);
  const issues=data.data;
  const issuesContainer=issues.filter(issue=>issue.status==="open");
  // console.log(issuesContainer);
  countActive("open","open-filter-btn")
  displayIssues(issuesContainer);

})

// close button done
document.getElementById("close-filter-btn").addEventListener("click",async ()=>
{
  const res=await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
  const data= await res.json();
  // console.log(data.data);
  const issues=data.data;
  const issuesContainer=issues.filter(issue=>issue.status==="closed");
  // console.log(issuesContainer);
  countActive("closed","close-filter-btn")
  displayIssues(issuesContainer);

})

// search function

document.getElementById("search-btn").addEventListener("click",async ()=>
{
    const searchInput=document.getElementById("search-input");
    const input=searchInput.value;
    const res=await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${input}`);
    const data=await res.json();
    // console.log(data.data);
    displayIssues(data.data);
})

async function modalShow(id)
{
     const res=await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`);
     const data= await res.json();
    //  console.log(data.data);
    const issue=data.data;
    const modalContainer=document.getElementById("issue_Modal");
    modalContainer.innerHTML="";

   const labelContainer=issue.labels.map(label=>
      { const labelColors=label==="bug"?"badge-error":label=== "enhancement"?"badge-success":label==="help wanted"?"badge-warning":label=="documentation"?"badge-info":"badge-primary";
        return `<span class="badge ${labelColors}">${label}</span>`;
      }).join(" ");
    
    const priorityBtn=issue.priority==="low"? "badge-base-200":issue.priority==="medium" ?"badge-success":"badge-error";
    const statusBtn=issue.status==="open"?"badge-success":"badge-primary";

    const div=document.createElement("div");
    div.innerHTML=`
     <div class="modal-box space-y-4">
                <h3 class="text-xl font-bold">${issue.title}</h3>
              <div class="flex items-center gap-2">
                <p class="badge font-medium ${statusBtn}"> ${issue.status}</p>
                <p class="text-[#64748B]">${issue.author}</p>
                <p class="text-[#64748B]">${issue.createdAt}</p>
              </div>
              <div class=" font-medium ">
                ${labelContainer}
              </div>
              <p class="text-[#64748B]">${issue.description}</p>
              <div class="grid grid-cols-2 justify-between items-center p-4 card bg-base-200 shadow-xl">
                <div>
                  <p>Assignee:</p>
                  <p class="font-semibold">${issue.assignee} </p>
                </div>
                <div>
                  <p>Priority:</p>
                  <p class="badge font-medium ${priorityBtn}"> ${issue.priority} </p>
                </div>
              </div>
            <div class="modal-action">
           <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
          <button class="btn btn-primary">Close</button>
       </form>
     </div>
              

        </div>
    
    
    `
    modalContainer.appendChild(div);
    modalContainer.showModal();
}



loadIssues();

