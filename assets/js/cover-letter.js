function currentDate() {
    const todayEl = document.getElementById('today');
    let today = new Date().toLocaleDateString('en-us', { year: 'numeric', month: 'long', day: 'numeric'})
    todayEl.innerText = today;
};

currentDate();