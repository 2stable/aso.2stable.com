function thankYou() {
    document.getElementById("helpful").innerHTML = '<div class="py-2">Thank You!</div>';
    splitbee.track("helpful: Yes");
}

function needImprove() {
    document.getElementById("helpful").innerHTML = '<div><p>How could it be better?</p><a href="mailto:support@2stable.com"><div class="btn btn-outline-primary"><i class="bi bi-envelope pe-2"></i>Send us an email</div></a></div>';
    splitbee.track("helpful: No");
}