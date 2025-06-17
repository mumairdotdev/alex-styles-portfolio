/* 
===========================================
   ALEX STYLES - PORTFOLIO JAVASCRIPT
   Activity 3: Interactive UI/UX Elements
===========================================
*/

// Wait for the DOM to be fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', function() {

    // ---- VARIABLES ----
    const header = document.querySelector('header');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li a');
    const skillLevels = document.querySelectorAll('.skill-level');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const projectLinks = document.querySelectorAll('.view-project');
    const modalClose = document.querySelector('.modal-close');
    const projectModal = document.querySelector('.project-modal');
    const modalContent = document.querySelector('.modal-content');
    const contactForm = document.getElementById('contactForm');
    const body = document.body;
    const cursor = document.querySelector('.cursor');

    // ---- FUNCTIONS ----

    // Toggle Mobile Menu
    function toggleMobileMenu() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        body.classList.toggle('no-scroll');
    }

    // Close Mobile Menu
    function closeMobileMenu() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        body.classList.remove('no-scroll');
    }

    // Handle Scroll Events
    function handleScroll() {
        const scrollPosition = window.scrollY;
        
        // Header scroll effect
        if (scrollPosition > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Animate skill bars when they come into view
        animateOnScroll();
    }

    // Filter Portfolio Items
    function filterPortfolio(e) {
        const filter = e.target.getAttribute('data-filter');
        
        // Update active button
        filterBtns.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        
        // Filter items
        portfolioItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 100);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 400);
            }
        });
    }

    // Open Project Modal
    function openProjectModal(e) {
        e.preventDefault();
        const projectId = e.target.getAttribute('data-project');
        const templateContent = document.getElementById(`${projectId}-template`).content.cloneNode(true);
        
        // Clear previous content and add new content
        modalContent.innerHTML = '';
        modalContent.appendChild(templateContent);
        
        // Show modal with animation
        projectModal.classList.add('open');
        body.classList.add('no-scroll');
    }

    // Close Project Modal
    function closeProjectModal() {
        projectModal.classList.remove('open');
        body.classList.remove('no-scroll');
    }

    // Handle Form Submission
    function handleFormSubmit(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Validate form (simple validation for demo)
        if (!name || !email || !message) {
            showFormError('Please fill in all required fields');
            return;
        }
        
        if (!validateEmail(email)) {
            showFormError('Please enter a valid email address');
            return;
        }
        
        // Simulate form submission (would normally be an AJAX request)
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            // Reset form and show success
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            showFormSuccess('Message sent successfully! I\'ll get back to you soon.');
        }, 1500);
    }

    // Show Form Error
    function showFormError(message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'form-error';
        errorDiv.textContent = message;
        
        const existingError = contactForm.querySelector('.form-error');
        if (existingError) existingError.remove();
        
        contactForm.prepend(errorDiv);
        
        setTimeout(() => {
            errorDiv.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            errorDiv.classList.remove('show');
            setTimeout(() => errorDiv.remove(), 300);
        }, 3000);
    }

    // Show Form Success
    function showFormSuccess(message) {
        const successDiv = document.createElement('div');
        successDiv.className = 'form-success';
        successDiv.textContent = message;
        
        const existingSuccess = contactForm.querySelector('.form-success');
        if (existingSuccess) existingSuccess.remove();
        
        contactForm.prepend(successDiv);
        
        setTimeout(() => {
            successDiv.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            successDiv.classList.remove('show');
            setTimeout(() => successDiv.remove(), 300);
        }, 5000);
    }

    // Validate Email
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // Animate Elements When They Come Into View
    function animateOnScroll() {
        // Animation for skill bars
        skillLevels.forEach(skill => {
            const skillTop = skill.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (skillTop < windowHeight - 100) {
                const skillWidth = skill.parentElement.getAttribute('data-level') || skill.style.width;
                skill.style.width = skillWidth;
            }
        });
        
        // Animate elements with animate-on-scroll class
        const animateElements = document.querySelectorAll('.animate-on-scroll');
        
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('animated');
            }
        });
    }

    // Handle Smooth Scrolling for Anchor Links
    function smoothScroll(e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                closeMobileMenu();
                
                // Update URL without reloading page
                history.pushState(null, null, targetId);
            }
        }
    }

    // Custom Cursor
    function updateCursor(e) {
        if (cursor) {
            cursor.style.display = 'block';
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        }
    }

    function cursorEffect() {
        const cursorElements = document.querySelectorAll('a, button, .view-project, .filter-btn, .modal-close');
        
        cursorElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.classList.add('cursor-grow');
            });
            
            element.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor-grow');
            });
        });
    }

    // Initialize AOS for scroll animations
    function initScrollAnimations() {
        const sections = document.querySelectorAll('section');
        
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };
        
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, observerOptions);
        
        sections.forEach(section => {
            observer.observe(section);
        });
    }

    // ---- EVENT LISTENERS ----
    
    // Toggle Mobile Menu
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }
    
    // Close menu when clicking on a menu item
    navItems.forEach(item => {
        item.addEventListener('click', smoothScroll);
    });
    
    // Filter Portfolio Items
    filterBtns.forEach(btn => {
        btn.addEventListener('click', filterPortfolio);
    });
    
    // Open Project Modal
    projectLinks.forEach(link => {
        link.addEventListener('click', openProjectModal);
    });
    
    // Close Project Modal
    if (modalClose) {
        modalClose.addEventListener('click', closeProjectModal);
    }
    
    // Close modal when clicking outside the modal content
    if (projectModal) {
        projectModal.addEventListener('click', function(e) {
            if (e.target === projectModal) {
                closeProjectModal();
            }
        });
    }
    
    // Close modal with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && projectModal.classList.contains('open')) {
            closeProjectModal();
        }
    });
    
    // Handle form submission
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
    
    // Handle scroll events
    window.addEventListener('scroll', handleScroll);
    
    // Initialize on page load
    handleScroll();
    
    // Custom cursor (only on non-touch devices)
    if (!('ontouchstart' in window)) {
        document.addEventListener('mousemove', updateCursor);
        cursorEffect();
    } else {
        cursor.style.display = 'none';
    }
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Create placeholder images dynamically
    createPlaceholders();
});

// Function to create placeholder images for the portfolio
function createPlaceholders() {
    // Generates gradient placeholders for portfolio items
    const portfolioImgs = document.querySelectorAll('.portfolio-img img');
    const colors = [
        'linear-gradient(135deg, #3498db, #2c3e50)',
        'linear-gradient(135deg, #e74c3c, #9b59b6)',
        'linear-gradient(135deg, #1abc9c, #3498db)',
        'linear-gradient(135deg, #f1c40f, #e67e22)',
        'linear-gradient(135deg, #9b59b6, #2c3e50)',
        'linear-gradient(135deg, #2ecc71, #1abc9c)'
    ];
    
    portfolioImgs.forEach((img, index) => {
        const colorIndex = index % colors.length;
        img.style.background = colors[colorIndex];
    });
    
    // Create profile placeholder
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        profileImg.style.background = 'linear-gradient(135deg, #3498db, #2c3e50)';
    }
}
