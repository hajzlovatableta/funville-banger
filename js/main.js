/* ═══════════════════════════════════════════════════════
   FUNVILLE — main.js
   ═══════════════════════════════════════════════════════ */


/* ─── Bouncing hero letters ─── */
function makeBouncy(elementId, word) {
  const el = document.getElementById(elementId)
  if (!el) return
  el.innerHTML = Array.from(word).map((ch, i) =>
    `<span class="bounce-char" style="animation-delay:${i * 0.09}s;">${ch === ' ' ? '\u00A0' : ch}</span>`
  ).join('')
}
makeBouncy('hero-word-1', 'Fun')
makeBouncy('hero-word-2', 'Ville')
makeBouncy('hero-word-3', '!')


/* ─── Mobile menu ─── */
const hamburger  = document.getElementById('hamburger')
const mobileMenu = document.getElementById('mobile-menu')
const hamBars    = document.querySelectorAll('.ham-bar')

function openMobileMenu() {
  mobileMenu.classList.add('open')
  hamburger.setAttribute('aria-expanded', 'true')
  hamburger.setAttribute('aria-label', 'Close menu')
  hamBars[0].style.cssText = 'transform:rotate(45deg) translate(4px,5px);'
  hamBars[1].style.cssText = 'opacity:0;'
  hamBars[2].style.cssText = 'transform:rotate(-45deg) translate(4px,-5px);'
}
function closeMobileMenu() {
  mobileMenu.classList.remove('open')
  hamburger.setAttribute('aria-expanded', 'false')
  hamburger.setAttribute('aria-label', 'Open menu')
  hamBars.forEach(b => b.style.cssText = '')
}
hamburger.addEventListener('click', () =>
  mobileMenu.classList.contains('open') ? closeMobileMenu() : openMobileMenu()
)
window.closeMobileMenu = closeMobileMenu


/* ─── Scroll reveal (IntersectionObserver) ─── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return
    const delay = parseInt(entry.target.dataset.delay || '0', 10)
    setTimeout(() => {
      entry.target.classList.add('revealed')
    }, delay)
    revealObserver.unobserve(entry.target)
  })
}, { threshold: 0.1, rootMargin: '-40px' })

document.querySelectorAll('.reveal, .reveal-scale, .reveal-left, .reveal-right').forEach(el => {
  revealObserver.observe(el)
})


/* ─── Animated counters ─── */
function animateCounter(el) {
  const target   = parseInt(el.dataset.counter, 10)
  const suffix   = el.dataset.suffix || ''
  const duration = 1600
  const start    = performance.now()

  function tick(now) {
    const elapsed  = now - start
    const progress = Math.min(elapsed / duration, 1)
    const eased    = 1 - Math.pow(1 - progress, 3)
    const value    = Math.round(eased * target)
    el.textContent = value + suffix
    if (progress < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return
    animateCounter(entry.target)
    counterObserver.unobserve(entry.target)
  })
}, { threshold: 0.5 })

document.querySelectorAll('[data-counter]').forEach(el => counterObserver.observe(el))


/* ─── FAQ accordion ─── */
document.querySelectorAll('.faq-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const item  = btn.closest('.faq-item')
    const body  = item.querySelector('.faq-body')
    const arrow = btn.querySelector('.faq-arrow')
    const open  = body.classList.contains('open')

    // close all
    document.querySelectorAll('.faq-body').forEach(b => b.classList.remove('open'))
    document.querySelectorAll('.faq-arrow').forEach(a => a.classList.remove('open'))
    document.querySelectorAll('.faq-btn').forEach(b => b.setAttribute('aria-expanded','false'))

    // open clicked (unless it was already open)
    if (!open) {
      body.classList.add('open')
      arrow.classList.add('open')
      btn.setAttribute('aria-expanded', 'true')
    }
  })
})


/* ─── Smooth marquee (rAF — never lags or resets) ─── */
;(function() {
  const track = document.getElementById('marquee-track')
  if (!track) return
  requestAnimationFrame(function measure() {
    const fullWidth = track.scrollWidth
    const half = fullWidth / 2
    if (half === 0) { requestAnimationFrame(measure); return }
    let x = 0
    const speed = 0.6 // px per frame at 60fps ≈ 36px/s
    let paused = false
    document.addEventListener('visibilitychange', () => { paused = document.hidden })
    function tick() {
      if (!paused) {
        x -= speed
        if (Math.abs(x) >= half) x += half  // seamless wrap
        track.style.transform = 'translateX(' + x + 'px) translateZ(0)'
      }
      requestAnimationFrame(tick)
    }
    tick()
  })
})()


/* ─── Navbar announce bar offset ─── */
const announceBar = document.querySelector('body > div')
const nav = document.querySelector('nav')
function updateNavTop() {
  const h = announceBar ? announceBar.offsetHeight : 0
  nav.style.top = h + 'px'
}
updateNavTop()
window.addEventListener('resize', updateNavTop)
