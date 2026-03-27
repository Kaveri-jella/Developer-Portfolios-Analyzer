function analyzePortfolio(){

let skills=document.getElementById("skills").value;
let projects=document.getElementById("projects").value;
let github=document.getElementById("github").value;
let resume=document.getElementById("resume").value;

let score=0;
let suggestion="";

if(skills!=""){
score+=20;
}else{
suggestion+="Add technical skills. ";
}

if(projects>=3){
score+=30;
}else{
suggestion+="Build more projects. ";
}

if(github!=""){
score+=30;
}else{
suggestion+="Add GitHub profile. ";
}

if(resume=="yes"){
score+=20;
}else{
suggestion+="Upload your resume. ";
}

let level="";

if(score>=80){
level="Strong Portfolio";
}
else if(score>=50){
level="Average Portfolio";
}
else{
level="Weak Portfolio";
}

document.getElementById("result").innerHTML=
"Portfolio Score: "+score+"/100 ("+level+")";

document.getElementById("suggestion").innerHTML=
"Suggestions: "+suggestion;

}