const currentYear = new Date().getFullYear();
const footerParagraph = document.getElementById('footer-paragraph');
footerParagraph.textContent = `Created By \xA9Simphiwe ${currentYear}`;

const month = document.getElementById('month');
month.textContent = new Date().toLocaleString('en', { month: 'long' });

const dayName = document.getElementById('day-name');
dayName.textContent = new Date().toLocaleString('en', { weekday: 'long' });

const dayNumber = document.getElementById('day-number');
dayNumber.textContent = new Date().getDate();

const year = document.getElementById('year');
year.textContent = currentYear;
