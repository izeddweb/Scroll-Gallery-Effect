// set var
const images = document.querySelectorAll(".img-item");
const options = {
//   rootMargin: "-15% ", // anather option
  threshold:0.3,
};
// set event

function logItem(ele) {
  ele.forEach(function (ele) {
    if (ele.isIntersecting) {
      ele.target.style.opacity = 1;
    }
  });
}
observer = new IntersectionObserver(logItem, options);

images.forEach(function (image) {
  observer.observe(image);
});

// console.log(images);
