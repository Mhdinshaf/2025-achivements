function toggleTheme() {
    const body = document.getElementById('mainBody');
    const icon = document.getElementById('themeIcon');
    if (body.classList.contains('theme-dark')) {
        body.classList.replace('theme-dark', 'theme-light');
        icon.textContent = '☀️';
    } else {
        body.classList.replace('theme-light', 'theme-dark');
        icon.textContent = '🌙';
    }
}

document.getElementById('nameInput').addEventListener('input', function(e) {
    document.getElementById('displayName').textContent = (e.target.value || "MOHOMED INSHAF").toUpperCase();
});

function upload(id) { document.getElementById(id).click(); }

function preview(event, targetId) {
    const reader = new FileReader();
    reader.onload = () => { document.getElementById(targetId).innerHTML = `<img src="${reader.result}">`; };
    reader.readAsDataURL(event.target.files[0]);
}

async function downloadImage() {
    const area = document.getElementById('captureArea');
    const btn = document.querySelector('.save-button');
    btn.textContent = "Processing... ⏳";
    try {
        const canvas = await html2canvas(area, { scale: 3, backgroundColor: null, useCORS: true });
        const link = document.createElement('a');
        link.download = `Recap_2025_Final.png`;
        link.href = canvas.toDataURL();
        link.click();
    } catch (err) { alert("Save failed!"); } finally { btn.textContent = "SAVE RECAP TO GALLERY 📥"; }
}