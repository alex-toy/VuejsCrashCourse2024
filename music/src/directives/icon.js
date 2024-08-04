export default {
  beforeMount(el, binding) {
    let iconClass = `fa text-xl fa-${binding.value}`

    if (binding.arg === 'full') iconClass = binding.value

    if (binding.modifiers.right) iconClass += ' float-right'
    if (binding.modifiers.yellow) iconClass += ' text-green-400'

    el.innerHTML += `<i class="${iconClass}"</i>`
  }
}
