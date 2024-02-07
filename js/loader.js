// function who identifie the element 'container_loader' and give back invisible
function hideLoader() {
    let loader = document.getElementById('container_loader');
    loader.style.display = "none";
}

// function who identifie the element 'container_loader' and give back visible
function showLoader() {
    let loader = document.getElementById('container_loader');
    loader.style.display = "flex";
}

//  function who add event load and call the function showLoader for display loader 
//  after three seconds whit function hideLoader
//  there is a timer of three seconds just for demonstration !
function timerHideLoader() {
    window.addEventListener("load", function () {

        showLoader();

        // add timer for demonstration loader !!!
        setTimeout(() => {
            hideLoader();
        }, 3000);
    });
}

// export three function for the loader
export { hideLoader, showLoader, timerHideLoader };
