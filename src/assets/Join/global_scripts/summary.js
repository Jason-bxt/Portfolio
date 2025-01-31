

function initSummary() {
    greeting();
    document.querySelectorAll('.summaryCard').forEach( sc => sc.addEventListener('click', () => location.href = './board.html'));
    getStats();
}

function greeting() {
    const greetingContainer = document.getElementById('greetingContainer');
    daytimeGreeting();
    joinStorage.iconInitials == 'G' ? greetGuest() : greetUser();
    greetingContainer.classList.add('greetingAnimation');
    setTimeout(()=>{greetingContainer.style.display = 'none'}, 1600);
}


function daytimeGreeting() {
    let timeOfDay = new Date();
    timeOfDay = timeOfDay.getHours();
    const greetingTextRef = document.getElementById('greetingText');
    let greeting;
    if (timeOfDay < 4) {
        greeting = "Good evening";
    } else if (timeOfDay < 12) {
        greeting = "Good morning";
    } else if (timeOfDay < 18) {
        greeting = "Good afternoon";
    } else {
        greeting = "Good evening";
    }
    greetingTextRef.innerText = greeting;
}


function greetGuest() {
    const greetingTextRef = document.getElementById('greetingText');
    greetingTextRef.innerText += '!';
}


function greetUser() {
    const greetingTextRef = document.getElementById('greetingText');
    greetingTextRef.innerText += ',';
    document.getElementById('userName').innerText = joinStorage.userName;
}

async function getStats() {
    await getTasksFromDB();
    const category = ['toDo', 'done', 'inProgress', 'awaitFeedback']
    category.forEach( cat => renderStatusStat(cat));
    renderUrgentStat();
    if(tasks[0]) {
        document.getElementById('totalTasksSummary').innerText = tasks.length;
    } else {
        document.getElementById('totalTasksSummary').innerText = '0'
    }
}


function renderStatusStat(stat='') {
    const statCount = tasks.filter( task => task.status == stat).length;
    document.getElementById(stat + 'Summary').innerText = statCount;
}


function renderUrgentStat() {
    const urgentCount = tasks.filter( task => task.prio == 'urgent').length;
    document.getElementById('urgentSummary').innerText = urgentCount;
    tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    if (tasks[0]) {
        document.getElementById('urgentDate').innerText = tasks[0].dueDate;
    } else {
        document.getElementById('urgentDate').innerText = '-';
    }
}