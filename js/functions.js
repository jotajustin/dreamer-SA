function openNewTab() {

    window.open(`https://api.whatsapp.com/send/?phone=%2B56972840599&text&type=phone_number&app_absent=0`)
};

function focusNavBar() {
    document.getElementById(`lupa`).addEventListener(`click`, function () {
        document.getElementById(`searchbar-box`).focus();
    });
};


