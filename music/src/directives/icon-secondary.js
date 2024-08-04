export default {
  beforeMount(el, binding) {
    let iconClass = `fa text-xl text-green-400 fa-${binding.value.icon}`

    if (binding.value.right) iconClass += ' float-right'

    el.innerHTML += `<i class="${iconClass}"</i>`
  }
}
