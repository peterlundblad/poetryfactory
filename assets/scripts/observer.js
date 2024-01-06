//applies fade in and fade out to tagged items
//make sure to apply css animations

//1 create a constant named observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view')
        entry.target.classList.remove('not-in-view')
      } else {
        entry.target.classList.remove('in-view')
        entry.target.classList.add('not-in-view')
      }
    })
  },
  {
    rootMargin: '0px',
    //this defines when to run the script from beginning to end
    threshold: [0, 0.1, 1],
  },
)

const tags = document.querySelectorAll('.container-hero,.row img, footer')

tags.forEach((tag) => {
  observer.observe(tag)
})