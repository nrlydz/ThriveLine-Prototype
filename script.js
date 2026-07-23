window.addEventListener("DOMContentLoaded", () => {
    // Screens
    const splashScreen = document.getElementById("splashScreen");
    const onboarding1 = document.getElementById("onboarding1");
    const onboarding2 = document.getElementById("onboarding2");

    // Buttons
    const startBtn = document.getElementById("startBtn");
    const nextBtn1 = document.getElementById("nextBtn1");
    const skipBtn1 = document.getElementById("skipBtn1");
    const skipBtn2 = document.getElementById("skipBtn2");

    // Splash -> Onboarding 1
    if (startBtn) {
        startBtn.addEventListener("click", () => {
            splashScreen.style.display = "none";
            onboarding1.style.display = "flex";
        });
    }

    // Onboarding 1 -> Onboarding 2
    if (nextBtn1) {
        nextBtn1.addEventListener("click", () => {
            onboarding1.style.display = "none";
            onboarding2.style.display = "flex";
        });
    }

    // Skip Handlers (Skip straight to Home / Onboarding 3 later)
    [skipBtn1, skipBtn2].forEach(btn => {
        if (btn) {
            btn.addEventListener("click", () => {
                alert("Skipped onboarding!");
            });
        }
    });
});
