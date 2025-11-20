var taskInputText=document.getElementById("input-task").value;

const submitBtn=document.querySelector(".submitBtn");
submitBtn.addEventListener('click',doSubmitButton);
function doSubmitButton(event){
alert(taskInputText);
};