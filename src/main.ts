import './styles.css'

type Service = { title: string; description: string; icon: 'tap' | 'drain' | 'heat' | 'bath' | 'pipe' | 'check' }

// Add the business's real phone/WhatsApp number before publishing contact links.
const business = {
  name: 'PipeCrew',
  phoneDisplay: '',
  phoneHref: '',
  whatsappNumber: '',
  serviceArea: 'Lagos and nearby areas',
}

const services: Service[] = [
  { title: 'Leak repairs', description: 'Find the source, fix it properly, and help protect your home from water damage.', icon: 'tap' },
  { title: 'Blocked drains', description: 'Clear stubborn blockages and get your sinks, showers and drains flowing again.', icon: 'drain' },
  { title: 'Water heaters', description: 'Installation, maintenance and repairs to get your hot water back on track.', icon: 'heat' },
  { title: 'Bathroom plumbing', description: 'Fittings, fixtures and pipework for bathroom updates big and small.', icon: 'bath' },
  { title: 'Pipe installation', description: 'New connections and replacement pipework, planned around your property.', icon: 'pipe' },
  { title: 'Plumbing inspections', description: 'A closer look at your plumbing, with clear next steps and no guesswork.', icon: 'check' },
]

const iconPaths = {
  arrow: '<path d="M7 17 17 7M7 7h10v10"/>',
  right: '<path d="M5 12h14m-7-7 7 7-7 7"/>',
  pin: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 3.2a2 2 0 0 1-.6 1.7L7.1 10.5a16 16 0 0 0 6.4 6.4l1.9-1.9a2 2 0 0 1 1.7-.6l3.2.5a2 2 0 0 1 1.7 2Z"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="m18 6-12 12M6 6l12 12"/>',
  whatsapp: '<path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z"/><path d="M9 9c.7 2 2 3.3 4 4l1-1 2 1c-.4 1.4-1.5 2-3 1.5-3-.8-5.1-3-5.7-5.4C7 7.7 7.5 7 9 7Z"/>',
  tap: '<path d="M12 22a8 8 0 0 0 8-8c0-4.5-8-13-8-13S4 9.5 4 14a8 8 0 0 0 8 8Z"/><path d="M9 14h6"/>',
  drain: '<path d="M4 4v7a4 4 0 0 0 4 4h8a4 4 0 0 1 4 4v1"/><path d="M2 4h4m12 16h4M9 4v4m6-4v4"/>',
  heat: '<path d="M12 22a7 7 0 0 0 7-7c0-3-2-5-4-7 0 3-2 4-2 4 0-5-3-8-6-10 1 5-2 8-2 13a7 7 0 0 0 7 7Z"/><path d="M12 22a3 3 0 0 0 3-3c0-1.4-1-2.4-2-3.5 0 1.5-1 2-1 2-1-2-2-3-3-4 0 2-1 3-1 5.5a4 4 0 0 0 4 3Z"/>',
  bath: '<path d="M4 12V6a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v2m-5 4h16v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-3Zm3 8v2m10-2v2"/><path d="M9 8h4"/>',
  pipe: '<path d="M4 4v6a4 4 0 0 0 4 4h8a4 4 0 0 1 4 4v2"/><path d="M2 4h4m12 16h4m-9-6v4"/>',
  shield: '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/>',
}

const icon = (name: keyof typeof iconPaths, size = 20): string => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[name]}</svg>`
const logoMark = `<svg class="brand-mark" viewBox="0 0 48 48" fill="none" aria-hidden="true"><rect width="48" height="48" rx="14" fill="#172D27"/><path d="M15 35V13h10a8 8 0 0 1 0 16H15" stroke="#F7F8F5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 13h8m-8 22h8" stroke="#72C8A0" stroke-width="4" stroke-linecap="round"/><path d="M34 13c0 2.5-3 5.2-3 7.2a3 3 0 0 0 6 0c0-2-3-4.7-3-7.2Z" fill="#72C8A0"/></svg>`
const contactHref = business.phoneHref || '#contact'
const phoneLabel = business.phoneDisplay || 'Contact PipeCrew'
const whatsappHref = business.whatsappNumber ? `https://wa.me/${business.whatsappNumber}` : '#contact'

const root = document.querySelector<HTMLDivElement>('#root')
if (!root) throw new Error('App root was not found.')

root.innerHTML = `
  <header class="site-header" id="top"><div class="container nav-wrap"><a class="brand" href="#top">${logoMark}<span>${business.name}<small>PLUMBING SERVICES</small></span></a><button class="menu-toggle" aria-label="Open menu" aria-expanded="false">${icon('menu', 22)}</button><nav class="nav-links" aria-label="Main navigation"><a href="#services">Services</a><a href="#about">About us</a><a href="#areas">Areas we serve</a><a href="#contact">Contact</a><a class="button button-green nav-cta" href="${contactHref}">${icon('phone', 15)} ${phoneLabel}</a></nav></div></header>
  <main>
    <section class="hero"><div class="container hero-layout"><div class="hero-copy"><div class="eyebrow"><span></span> YOUR LOCAL PLUMBING TEAM</div><h1>Plumbing problems?<br><em>We’ll sort it.</em></h1><p>From a leaking tap to a full installation, PipeCrew makes it easy to get the right plumbing help for your home or business.</p><div class="hero-actions"><a class="button button-green" href="${contactHref}">${icon('phone', 17)} Contact PipeCrew</a><a class="text-link" href="#services">Explore our services ${icon('right', 15)}</a></div><div class="hero-points"><span>${icon('check', 15)} Clear quotes before work</span><span>${icon('check', 15)} Friendly, careful service</span></div></div><div class="hero-photo-wrap"><img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=85" alt="A plumber working carefully on a home repair"><div class="photo-wash"></div><div class="photo-note"><span>${icon('clock', 18)}</span><div><b>Need help today?</b><small>Get in touch and tell us what’s going on.</small></div></div><div class="hero-stamp">${logoMark}<span>HERE TO<br>HELP</span></div></div></div></section>
    <section class="quick-trust"><div class="container quick-trust-inner"><div>${icon('shield', 20)}<span><b>Careful workmanship</b><small>Thoughtful from start to finish</small></span></div><div>${icon('check', 20)}<span><b>Upfront communication</b><small>Know what to expect</small></span></div><div>${icon('pin', 20)}<span><b>Local service</b><small>${business.serviceArea}</small></span></div></div></section>
    <section class="services section-pad" id="services"><div class="container"><div class="section-head"><div><div class="eyebrow">HOW CAN WE HELP?</div><h2>Good plumbing makes<br>a house feel <em>like home.</em></h2></div><p>Tell us what needs attention. We’ll help you find the right next step.</p></div><div class="service-grid">${services.map((service, index) => `<article class="service-card" style="--order:${index}"><span class="service-number">0${index + 1}</span><span class="service-icon">${icon(service.icon, 25)}</span><h3>${service.title}</h3><p>${service.description}</p><a href="#contact" class="service-link" data-service="${service.title}">Ask us about this ${icon('right', 14)}</a></article>`).join('')}</div></div></section>
    <section class="about-section" id="about"><div class="container about-layout"><div class="about-image"><img src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1000&q=85" alt="Plumbing pipework being carefully repaired"><span class="image-caption">A little care goes a long way.</span></div><div class="about-copy"><div class="eyebrow">A BETTER KIND OF PLUMBING SERVICE</div><h2>We believe good service should feel <em>simple.</em></h2><p>Plumbing work can be stressful. We make the process easier with clear communication, practical advice and respect for your space.</p><div class="promise-list"><div><span>${icon('check', 14)}</span><p><b>We listen first</b><small>We take time to understand what is happening.</small></p></div><div><span>${icon('check', 14)}</span><p><b>We explain the options</b><small>Clear recommendations before work begins.</small></p></div><div><span>${icon('check', 14)}</span><p><b>We leave things tidy</b><small>Your home deserves care at every step.</small></p></div></div><a class="button button-dark" href="#contact">Talk to our team ${icon('right', 15)}</a></div></div></section>
    <section class="service-area" id="areas"><div class="container area-layout"><div><div class="eyebrow">CLOSE TO HOME</div><h2>Local help across<br><em>${business.serviceArea}.</em></h2><p>Tell us where you’re based and what you need. We’ll confirm if we can help in your area.</p><a class="area-link" href="#contact">Check availability in your area ${icon('right', 15)}</a></div><div class="area-card"><span class="area-pin">${icon('pin', 23)}</span><b>Service coverage</b><p>${business.serviceArea}</p><small>Coverage can vary by service and availability.</small><div class="area-coverage"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></div></div></section>
    <section class="contact-section section-pad" id="contact"><div class="container contact-layout"><div class="contact-copy"><div class="eyebrow">LET’S GET IT FIXED</div><h2>Tell us what’s<br><em>going on.</em></h2><p>Share a few details and we’ll help you work out the next step. For urgent plumbing issues, call or message us directly.</p><div class="contact-options"><a class="contact-option" href="${contactHref}"><span>${icon('phone', 18)}</span><span><small>CALL OUR TEAM</small><b>${phoneLabel}</b></span>${icon('arrow', 15)}</a><a class="contact-option" href="${whatsappHref}" target="_blank" rel="noreferrer"><span class="whatsapp-icon">${icon('whatsapp', 19)}</span><span><small>WHATSAPP</small><b>Message PipeCrew</b></span>${icon('arrow', 15)}</a></div><div class="contact-area-note">${icon('pin', 15)} Serving ${business.serviceArea}</div></div><div class="quote-card"><h3>Tell us about your job</h3><p>We’ll use these details to understand how to help.</p><form id="quote-form"><label>Your name<input name="name" placeholder="Your name" required></label><div class="form-row"><label>Phone number<input name="phone" type="tel" placeholder="080 0000 0000" required></label><label>Your area<input name="area" placeholder="e.g. Ikeja" required></label></div><label>What do you need help with?<select name="service" required><option value="">Choose a service</option>${services.map((service) => `<option>${service.title}</option>`).join('')}<option>Something else</option></select></label><label>A few details<textarea name="details" rows="3" placeholder="Describe the issue or job..." required></textarea></label><button class="button button-green submit-quote" type="submit">Send a request ${icon('right', 15)}</button><small class="form-disclaimer">Requests are sent through WhatsApp when the business number is configured.</small></form></div></div></section>
    <section class="faq-section"><div class="container faq-layout"><div><div class="eyebrow">GOOD TO KNOW</div><h2>Before you<br>get in <em>touch.</em></h2></div><div class="faq-list"><details open><summary>What should I include when I contact you?</summary><p>Tell us what is happening, where you are, and when you need help. A photo can also be useful when you message us.</p></details><details><summary>Can you help with urgent plumbing issues?</summary><p>Contact us by phone or WhatsApp and tell us what has happened. We’ll confirm our availability and the best next step.</p></details><details><summary>Will I know the cost before work starts?</summary><p>We’ll discuss the work and quote with you before any agreed job begins.</p></details></div></div></section>
  </main>
  <footer><div class="container footer-main"><a class="brand brand-footer" href="#top">${logoMark}<span>${business.name}<small>PLUMBING SERVICES</small></span></a><p>Friendly plumbing help, close to home.</p><nav><a href="#services">Services</a><a href="#about">About</a><a href="#areas">Service area</a><a href="#contact">Contact</a></nav><a href="${contactHref}" class="footer-phone">${icon('phone', 15)} ${phoneLabel}</a></div><div class="container footer-bottom"><span>© 2026 ${business.name}. All rights reserved.</span><a href="#top">Back to top ↑</a></div></footer>
  <div class="mobile-contact-bar"><a href="${contactHref}">${icon('phone', 17)} Call PipeCrew</a><a href="${whatsappHref}" target="_blank" rel="noreferrer">${icon('whatsapp', 18)} WhatsApp</a></div><div class="toast" id="toast" role="status" aria-live="polite"></div>
`

const menuButton = document.querySelector<HTMLButtonElement>('.menu-toggle')
const nav = document.querySelector<HTMLElement>('.nav-links')
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true'
  menuButton.setAttribute('aria-expanded', String(open))
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu')
  menuButton.innerHTML = icon(open ? 'close' : 'menu', 22)
  nav?.classList.toggle('open', open)
})
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open')
  menuButton?.setAttribute('aria-expanded', 'false')
  if (menuButton) menuButton.innerHTML = icon('menu', 22)
}))

document.querySelectorAll<HTMLAnchorElement>('.service-link').forEach((link) => link.addEventListener('click', () => {
  const select = document.querySelector<HTMLSelectElement>('#quote-form select[name="service"]')
  if (select) select.value = link.dataset.service ?? ''
}))

function showToast(message: string): void {
  const toast = document.querySelector<HTMLDivElement>('#toast')
  if (!toast) return
  toast.textContent = message
  toast.classList.add('visible')
  window.setTimeout(() => toast.classList.remove('visible'), 4200)
}

document.querySelector<HTMLFormElement>('#quote-form')?.addEventListener('submit', (event) => {
  event.preventDefault()
  const form = event.currentTarget as HTMLFormElement
  const values = new FormData(form)
  const name = String(values.get('name') ?? '')
  const message = `Hello ${business.name}, my name is ${name}. I need help with ${values.get('service')} in ${values.get('area')}. My phone number is ${values.get('phone')}. Details: ${values.get('details')}`
  if (business.whatsappNumber) {
    window.open(`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
    form.reset()
  } else {
    showToast('Quote form is ready. Add PipeCrew’s WhatsApp number to send requests directly.')
  }
})
