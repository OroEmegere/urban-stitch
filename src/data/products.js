import tee1 from '../assets/Images/tee1.jpg'
import beanie from '../assets/Images/beanie.jpg'
import diaz from '../assets/Images/diaz.jpg'
import active from '../assets/Images/active.jpg'
import port from '../assets/Images/port.jpg'
import sneakers from '../assets/Images/sneakers.jpg'
import casual from '../assets/Images/casual.jpg'
import suit from '../assets/Images/suit.jpg'
import sweats from '../assets/Images/sweats.jpg'

const products = [
  { id: 1, name: 'Nigeria Tee', price: 8500, category: 'Tees',
    description: 'Soft cotton tee with a proud Nigerian design.', image: tee1 },
  { id: 2, name: 'Classic Beanie', price: 4500, category: 'Accessories',
    description: 'Warm, stretchy beanie that suits any outfit.', image: beanie },
  { id: 3, name: 'Diaz Fit', price: 22000, category: 'Outfits',
    description: 'A sharp street outfit for a confident look.', image: diaz },
  { id: 4, name: 'Active Tee', price: 9000, category: 'Tees',
    description: 'Breathable tee made for workouts and movement.', image: active },
  { id: 5, name: 'Port Tee', price: 8000, category: 'Tees',
    description: 'Relaxed everyday tee in a clean cut.', image: port },
  { id: 6, name: 'Street Sneakers', price: 25000, category: 'Accessories',
    description: 'Comfortable all-day sneakers with a clean look.', image: sneakers },
  { id: 7, name: 'Casual Fit', price: 18000, category: 'Outfits',
    description: 'Easy, comfortable outfit for relaxed days.', image: casual },
  { id: 8, name: 'Classic Suit', price: 45000, category: 'Outfits',
    description: 'Tailored suit for weddings, work and events.', image: suit },
  { id: 9, name: 'Naija Sweats', price: 15000, category: 'Outfits',
    description: 'Cosy sweats with bold green and gold colours.', image: sweats },
]

export default products