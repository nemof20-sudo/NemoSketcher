window.onload = function() {
    setTimeout(function() {
        document.querySelector('.welcome-screen').style.display = 'none';
        document.querySelector('.app-screen').style.display = 'block';
    }, 5000); // 5 seconds delay for welcome screen to fade out

    document.getElementById('download-btn').onclick = function() {
        window.location.href = 'https://www.mediafire.com/file/ji6j9mxkt7xuft7/Nemo_Sketcher.apk/file'; // استبدل بـ الرابط الفعلي
    }
}