function openTab(event, tabName) {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("accordion-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("show");
    }

    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(tabName).classList.add("show");
    event.currentTarget.classList.add("active");
}

function toggleAccordion(index) {
    let contents = document.querySelectorAll('.accordion-content');
    let headers = document.querySelectorAll('.accordion-header .icon');
    let isVisible = contents[index].style.display === 'block';
    
    contents.forEach(content => content.style.display = 'none');
    headers.forEach(header => header.textContent = ' + ');
    
    if (!isVisible) {
        contents[index].style.display = 'block';
        headers[index].textContent = '  -  ';
    }
}

// card change 

// const element = document.getElementById('ID1');

// let timeoutId = null;
// let intervalId = null;

// element.addEventListener('mouseover', function() {
//   timeoutId = setTimeout(function() {
//     intervalId = setInterval(function() {

//     const elementsWithClassABC = element.querySelectorAll('.ABC');
//     const count = elementsWithClassABC.length;
//     let activeElement = null;
//     for (let i = 0; i < elementsWithClassABC.length; i++) {
//       if (elementsWithClassABC[i].classList.contains('active')) {
//         activeElement = elementsWithClassABC[i];
//         break;
//       }
//     }

//     // Remove the active class from the active element
//     if (activeElement) {
//       activeElement.classList.remove('active');
//     }

//     // Add the active class to the next element in the list
//     if (activeElement && activeElement.nextElementSibling) {
//       activeElement.nextElementSibling.classList.add('active');
//     } else {
//       // If there is no next element, add the active class to the first element
//       if (elementsWithClassABC.length > 0) {
//         elementsWithClassABC[0].classList.add('active');
//       }
//     }

     
//     }, 2000);
//   },0);
// });

// element.addEventListener('mouseout', function() {
//   clearTimeout(timeoutId);
//   clearInterval(intervalId);
// });

const elements = document.querySelectorAll('.MainCard');

let timeoutId = null;
let intervalId = null;

elements.forEach(element => {
  element.addEventListener('mouseover', function() {
    timeoutId = setTimeout(function() {
      intervalId = setInterval(function() {

        const elementsWithClassABC = element.querySelectorAll('.ABC');
        const count = elementsWithClassABC.length;
        let activeElement = null;
        for (let i = 0; i < elementsWithClassABC.length; i++) {
          if (elementsWithClassABC[i].classList.contains('active')) {
            activeElement = elementsWithClassABC[i];
            break;
          }
        }

        // Remove the active class from the active element
        if (activeElement) {
          activeElement.classList.remove('active');
        }

        // Add the active class to the next element in the list
        if (activeElement && activeElement.nextElementSibling) {
          activeElement.nextElementSibling.classList.add('active');
        } else {
          // If there is no next element, add the active class to the first element
          if (elementsWithClassABC.length > 0) {
            elementsWithClassABC[0].classList.add('active');
          }
        }

      }, 2000);
    }, 0);
  });

  element.addEventListener('mouseout', function() {
    clearTimeout(timeoutId);
    clearInterval(intervalId);
  });
});
