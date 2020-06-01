import './index.css';

const thisURL = new URL(window.location.href);
const inviteCode = thisURL.searchParams.get('invite');

if (inviteCode) {
    document.getElementById('continueToDiscord').addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = `https://discord.gg/${inviteCode}`;
    });
} else {
    document.body.classList.add('guest');
}
