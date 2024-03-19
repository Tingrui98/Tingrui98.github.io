// Sample character names
// 修改 characters 数组,添加图片路径
const characters = [
    { name: 'Navia', image: 'Navia.png' },
    { name: 'Kaveh', image: 'Kaveh.png' },
    { name: 'Tighnari', image: 'Tighnari.png' },
    { name: 'Bennett', image: 'Bennett.png' },
    { name: 'Chongyun', image: 'Chongyun.png' }
];

let currentCharacterIndex = 0;

function selectCharacter() {
    const characterImage = document.getElementById('characterImage');
    characterImage.src = `images/${characters[currentCharacterIndex].image}`;
    characterImage.alt = `${characters[currentCharacterIndex].name} Image`;
    document.getElementById('characterName').textContent = characters[currentCharacterIndex].name;
}

function selectPreviousCharacter() {
    currentCharacterIndex = (currentCharacterIndex - 1 + characters.length) % characters.length;
    selectCharacter();
}

function selectNextCharacter() {
    currentCharacterIndex = (currentCharacterIndex + 1) % characters.length;
    selectCharacter();
}

function loadEvents() {
    const events = ['Windborne Bard Event', 'Unreconciled Stars', 'Ganyu Banner'];
    const eventList = document.getElementById('eventList');

    // Clear existing event list
    eventList.innerHTML = '';

    // Populate event list
    events.forEach(event => {
        const li = document.createElement('li');
        li.innerText = event;
        eventList.appendChild(li);
    });
}

function showFeedbackDialog() {
    const feedbackInput = document.getElementById('feedbackInput').value;
    
    if (feedbackInput.trim() !== '') {
        const confirmation = confirm(`Do you want to submit the following feedback?\n\n${feedbackInput}`);

        if (confirmation) {
            alert('Feedback submitted successfully!');
        } else {
            alert('Feedback submission canceled.');
        }
    } else {
        alert('Please provide feedback before submitting.');
    }
}

function shareOnSocialMedia() {
    alert('Shared on Social Media!');
}

function subscribe() {
    const emailInput = document.getElementById('emailInput').value;
    const errorText = document.getElementById('errorText');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(emailInput)) {
        alert(`Subscribed with email: ${emailInput}`);
        errorText.innerText = '';
    } else {
        errorText.innerText = 'Invalid email format';
    }
}

function playVideo() {
    const video = document.querySelector('video');
    video.play();
}

function pauseVideo() {
    const video = document.querySelector('video');
    video.pause();
}

function stopVideo() {
    const video = document.querySelector('video');
    video.currentTime = 0;
    video.pause();
}

