document.addEventListener('DOMContentLoaded', function() {
    // ========= Mobile Navigation Toggle =========
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // ========= Sticky Navigation =========
    const header = document.querySelector('.header');
    let scrollPosition = window.scrollY;

    window.addEventListener('scroll', function() {
        scrollPosition = window.scrollY;
        
        if (scrollPosition > 100) {
            header.style.height = '70px';
            header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.5)';
        } else {
            header.style.height = '80px';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
        }
    });

    // ========= Smooth Scrolling =========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuBtn.querySelector('i').classList.remove('fa-times');
                mobileMenuBtn.querySelector('i').classList.add('fa-bars');
            }

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========= Preview Tabs =========
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all tab buttons
            tabBtns.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Hide all tab contents
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Show corresponding tab content
            const tabId = `${this.getAttribute('data-tab')}-tab`;
            document.getElementById(tabId).classList.add('active');
        });
    });

    // ========= FAQ Accordion =========
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', function() {
            // Check if current item is already active
            const isActive = item.classList.contains('active');
            
            // Close all FAQs
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
                const faqAnswer = faqItem.querySelector('.faq-answer');
                faqAnswer.style.maxHeight = null;
            });
            
            // If the clicked item wasn't active, open it
            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });

    // ========= Purchase Button =========
    const purchaseBtn = document.querySelector('.purchase-button');
    const successModal = document.getElementById('success-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    const closeBtn = document.querySelector('.close-btn');

    if (purchaseBtn) {
        purchaseBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Simulate purchase
            console.log('Template purchased');
            
            // Show success modal
            successModal.style.display = 'block';
        });
    }

    // Close modal
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function() {
            successModal.style.display = 'none';
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            successModal.style.display = 'none';
        });
    }

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === successModal) {
            successModal.style.display = 'none';
        }
    });

    // ========= Animation on Scroll =========
    // Basic animation for elements as they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .pricing-card, .preview-container, .purchase-cta, .info-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial state for animation
    document.querySelectorAll('.feature-card, .pricing-card, .preview-container, .purchase-cta, .info-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Run animation on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    // ========= Responsive Adjustments =========
    function handleResponsiveLayout() {
        // Adjust the dashboard preview based on screen width
        const dashboardPreview = document.querySelector('.dashboard-preview');
        const mockupContent = document.querySelector('.mockup-content');
        const pipelineCards = document.querySelector('.pipeline-cards');
        
        if (window.innerWidth <= 480) {
            if (mockupContent) {
                mockupContent.style.height = 'auto';
            }
            if (pipelineCards) {
                pipelineCards.style.overflowX = 'auto';
                pipelineCards.style.display = 'flex';
            }
        } else if (window.innerWidth <= 768) {
            if (mockupContent) {
                mockupContent.style.height = '350px';
            }
            if (pipelineCards) {
                pipelineCards.style.overflowX = 'auto';
                pipelineCards.style.display = 'flex';
            }
        } else {
            if (mockupContent) {
                mockupContent.style.height = '400px';
            }
            if (pipelineCards) {
                pipelineCards.style.overflowX = 'visible';
                pipelineCards.style.display = 'grid';
            }
        }
    }
    
    // Run on page load and window resize
    handleResponsiveLayout();
    window.addEventListener('resize', handleResponsiveLayout);
});
