const data = {
    labels: [
        'Sunday',
        'Monday',
        'Tuesday'
    ],
    datasets: [{
        data: [10, 20, 70],
        backgroundColor: [
            'rgba(0, 209, 113, 1)',
            'rgba(255, 104, 77, 1)',
            'rgba(1, 190, 255, 1)'
        ],
        hoverOffset: 4
    }]
};

const config = {
    type: 'doughnut',
    data: data,
};

function setData(){
let data1=Math.floor(Math.random()*100);
let data2=Math.floor(Math.random()*(100-data1));
let data3=100-data1-data2;


data.datasets[0].data[0]=data1;   
data.datasets[0].data[1]=data2;   
data.datasets[0].data[2]=data3;  
}
 setData();
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);
const ctx = document.getElementById('myChart1').getContext('2d');
const myChart1 = new Chart(ctx, {
type: 'bar',
data: {
labels: ['Red', 'Blue', 'Green'],
datasets: [{
    label: 'Statisctics',
    data: [0, 250, 500],
    backgroundColor: [
        'rgba(255, 104, 77, 1)',
        'rgba(14, 110, 255, 1)',
        'rgba(0, 209, 113, 1)'
    ],
    borderColor: [
        'rgba(255, 104, 77, 1)',
        'rgba(14, 110, 255, 1)',
        'rgba(0, 209, 113, 1)'
    ],
    borderWidth: 1
}]
},
options: {
scales: {
    y: {
        beginAtZero: true
    }
}
}
});
dashboardLeft.onclick=function(){
dashboardLeft.style.backgroundColor="#0E6EFF";
dashboardLeft.style.color="#ffff";
walletLeft.style.backgroundColor="#ffff";
walletLeft.style.color="#72757A";
paymentLeft.style.backgroundColor="#ffff";
paymentLeft.style.color="#72757A";
invoiceLeft.style.backgroundColor="#ffff";
invoiceLeft.style.color="#72757A";
settingLeft.style.backgroundColor="#ffff";
settingLeft.style.color="#72757A";
transactionsLeft.style.backgroundColor="#ffff";
transactionsLeft.style.color="#72757A";
}
walletLeft.onclick=function(){
dashboardLeft.style.backgroundColor="#ffff";
dashboardLeft.style.color="#72757A";
walletLeft.style.backgroundColor="#0E6EFF";
walletLeft.style.color="#ffff";
paymentLeft.style.backgroundColor="#ffff";
paymentLeft.style.color="#72757A";
invoiceLeft.style.backgroundColor="#ffff";
invoiceLeft.style.color="#72757A";
settingLeft.style.backgroundColor="#ffff";
settingLeft.style.color="#72757A";
transactionsLeft.style.backgroundColor="#ffff";
transactionsLeft.style.color="#72757A";
}
paymentLeft.onclick=function(){
paymentLeft.style.backgroundColor="#0E6EFF";
paymentLeft.style.color="#ffff";
walletLeft.style.backgroundColor="#ffff";
walletLeft.style.color="#72757A";
dashboardLeft.style.backgroundColor="#ffff";
dashboardLeft.style.color="#72757A";
invoiceLeft.style.backgroundColor="#ffff";
invoiceLeft.style.color="#72757A";
settingLeft.style.backgroundColor="#ffff";
settingLeft.style.color="#72757A";
transactionsLeft.style.backgroundColor="#ffff";
transactionsLeft.style.color="#72757A";
}
invoiceLeft.onclick=function(){
invoiceLeft.style.backgroundColor="#0E6EFF";
invoiceLeft.style.color="#ffff";
walletLeft.style.backgroundColor="#ffff";
walletLeft.style.color="#72757A";
dashboardLeft.style.backgroundColor="#ffff";
dashboardLeft.style.color="#72757A";
paymentLeft.style.backgroundColor="#ffff";
paymentLeft.style.color="#72757A";
settingLeft.style.backgroundColor="#ffff";
settingLeft.style.color="#72757A";
transactionsLeft.style.backgroundColor="#ffff";
transactionsLeft.style.color="#72757A";
}
settingLeft.onclick=function(){
settingLeft.style.backgroundColor="#0E6EFF";
settingLeft.style.color="#ffff";
walletLeft.style.backgroundColor="#ffff";
walletLeft.style.color="#72757A";
dashboardLeft.style.backgroundColor="#ffff";
dashboardLeft.style.color="#72757A";
paymentLeft.style.backgroundColor="#ffff";
paymentLeft.style.color="#72757A";
invoiceLeft.style.backgroundColor="#ffff";
invoiceLeft.style.color="#72757A";
transactionsLeft.style.backgroundColor="#ffff";
transactionsLeft.style.color="#72757A";
}
transactionsLeft.onclick=function(){
transactionsLeft.style.backgroundColor="#0E6EFF";
transactionsLeft.style.color="#ffff";
walletLeft.style.backgroundColor="#ffff";
walletLeft.style.color="#72757A";
dashboardLeft.style.backgroundColor="#ffff";
dashboardLeft.style.color="#72757A";
paymentLeft.style.backgroundColor="#ffff";
paymentLeft.style.color="#72757A";
invoiceLeft.style.backgroundColor="#ffff";
invoiceLeft.style.color="#72757A";
settingLeft.style.backgroundColor="#ffff";
settingLeft.style.color="#72757A";
}
let usersList=(JSON.parse(localStorage.getItem('users'))|| []);
let localUsers=usersList;
logIn.onclick=function(){
let data1=userSign.value;
let data2=passSign.value;
let obj={
    name:data1,
    password:data2
}

let isCorrect=false;
for(let i=0; i<usersList.length; i++){
    if(obj.name==usersList[i].name && obj.password==usersList[i].password){
        isCorrect=true;
    }
}
if(isCorrect==true){
    alert('Welcome!')
    homePage.style.display="flex";
    signPage.style.display="none";
    localUsers.push(obj);
    localStorage.setItem('users', JSON.stringify(localUsers));
}else if(isCorrect==false){
alert('User is unknown');
signPage.style.display="flex";
homePage.style.display="none";
}
userSign.value='';
passSign.value='';
}

signUp.onclick=function(){
let data1=userSign.value;
let data2=passSign.value;
let obj={
    name:data1,
    password:data2
}

let isReserved=true;
for(let i=0; i<usersList.length;i++){
    if(obj.name==usersList[i].name){
        isReserved=false;
    }
}
if(isReserved==true){
  
  
    signPage.style.display="none";
    homePage.style.display="flex";
    localUsers.push(obj);
    localStorage.setItem('users', JSON.stringify(localUsers));

}else if(isReserved==false){
    alert('Nickname is reserved');
    signPage.style.display="flex";
    homePage.style.display="none";

}

userSign.value='';
passSign.value='';
}

