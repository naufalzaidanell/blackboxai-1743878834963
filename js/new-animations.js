/**
 * Enhanced Animations for KLORIVA CRM
 * Version 2.0 - Includes micro-interactions and transitions
 */

class Animations {
  constructor() {
    this.initCardAnimations();
    this.initButtonAnimations();
    this.initFormAnimations();
    this.initPageTransitions();
  }

  initCardAnimations() {
    const cards = document.querySelectorAll('[data-animate="card"]');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px) scale(1.02)';
        card.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.boxShadow = '';
      });
    });
  }

  initButtonAnimations() {
    const buttons = document.querySelectorAll('.btn-animate');
    buttons.forEach(btn => {
      btn.addEventListener('mousedown', () => {
        btn.style.transform = 'translateY(2px)';
      });
      
      btn.addEventListener('mouseup', () => {
        btn.style.transform = '';
      });
      
      btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'translateY(-2px)';
      });
      
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  }

  initFormAnimations() {
    const inputs = document.querySelectorAll('.input-animate');
    inputs.forEach(input => {
      input.addEventListener('focus', () => {
        input.parentElement.style.transform = 'translateX(5px)';
        input.parentElement.style.borderLeft = '3px solid #2c5e1a';
      });
      
      input.addEventListener('blur', () => {
        input.parentElement.style.transform = '';
        input.parentElement.style.borderLeft = '';
      });
    });
  }

  initPageTransitions() {
    document.body.style.opacity = '0';
    window.addEventListener('load', () => {
      document.body.style.transition = 'opacity 0.3s ease';
      document.body.style.opacity = '1';
    });
  }

  // Typewriter effect
  static typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
    
    type();
  }
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new Animations();
  
  // Apply typewriter effect to elements with data-typewriter attribute
  document.querySelectorAll('[data-typewriter]').forEach(el => {
    Animations.typeWriter(el, el.getAttribute('data-typewriter'));
  });
});