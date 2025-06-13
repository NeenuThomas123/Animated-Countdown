const nums = document.querySelectorAll('.nums span')

const counter = document.querySelector('.counter')

const finalMessage = document.querySelector('.final')

const replay = document.querySelector('#replay')

//this starts the animation when the page loads
runAnimation()

function resetDOM() {

  //show the countdown box again
  counter.classList.remove('hide')

  //hide the GO screen
  finalMessage.classList.remove('show')

  nums.forEach((num) => {

    num.classList.value = ''
  })

  //start animation from number 3
  nums[0].classList.add('in')
}

//this function controls the number animation one by one
function runAnimation() {

  nums.forEach((num, idx) => {

    
    //here we find the index of the last number in the list
    const nextToLast = nums.length - 1

    //listens for when an animation finishes on each number(num)
    //e.animationName tells which animation ended

    num.addEventListener('animationend', (e) => {

      if (e.animationName === 'goIn' && idx !== nextToLast) {

        num.classList.remove('in')

        num.classList.add('out')

      } else if (e.animationName === 'goOut' && num.nextElementSibling) {

        num.nextElementSibling.classList.add('in')

      } else {
        counter.classList.add('hide')

        finalMessage.classList.add('show')
      }
    })
  })
}

//when you click the replay button
replay.addEventListener('click', () => {

  //first resets everthing using resetDOM()
  resetDOM()

  //then starts the countdowm again using runAnimation()
  runAnimation()
})