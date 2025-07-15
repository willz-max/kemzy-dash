function animateCountUp(element, end, suffix = "", decimals = 0) {
  const duration = 2000;
  const frameDuration = 1000 / 60;
  const totalFrames = Math.round(duration / frameDuration);

  let frame = 0;
  const countTo = typeof end === "string" ? parseFloat(end) : end;

  // Start the animation
  const counter = setInterval(() => {
    frame++;

    const progress = frame / totalFrames;
    const currentCount = countTo * progress;

    let formattedCount;
    if (decimals > 0) {
      formattedCount = currentCount.toFixed(decimals);
    } else {
      formattedCount = Math.floor(currentCount);
    }

    element.textContent = formattedCount + suffix;

    if (frame === totalFrames) {
      clearInterval(counter);
      element.textContent = countTo + suffix;
    }
  }, frameDuration);
}

function setupCountUpObserver() {
  const options = {
    root: null, // use viewport
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const targetValue = element.getAttribute("data-target");

        if (element.id === "traders-count") {
          animateCountUp(element, targetValue, "K");
        } else if (element.id === "market-cap") {
          animateCountUp(element, targetValue, "M", 1);
        }

        observer.unobserve(element);
      }
    });
  }, options);

  document.querySelectorAll(".stat-number").forEach((element) => {
    observer.observe(element);
  });
}

document.addEventListener("DOMContentLoaded", setupCountUpObserver);
document.addEventListener("DOMContentLoaded", navToggler);

// to toggle the nav

function navToggler() {
  document.querySelector(".going").addEventListener("click", (e) => {
    // console.log(e);
    document.querySelector(".mobile-menu").classList.toggle("active");
    if (document.querySelector(".mobile-menu").classList.contains("active")) {
      document.querySelector(".going").innerHTML =
        '<i class="fa fa-times" aria-hidden="true"></i>';
    } else {
      document.querySelector(".going").innerHTML =
        '<i class="fa fa-bars" aria-hidden="true"></i>';
    }
    e.stopPropagation();

    // const bars = document.querySelectorAll('.bar');
    // bars.forEach(bar => {
    //     bar.classList.toggle('change');

    // });
  });
  document.querySelector(".gone").addEventListener("click", (e) => {
    e.stopPropagation();
    document.querySelector(".going").style.display = "";
    document.querySelector(".gone").style.display = "none";
    document.querySelector(".mobile-menu").classList.toggle("active");

    // const bars = document.querySelectorAll('.bar');
    // bars.forEach(bar => {
    //     bar.classList.toggle('change');

    // });
  });
}

document.addEventListener("click", () => {
  if (document.querySelector(".mobile-menu").classList.contains("active")) {
    document.querySelector(".mobile-menu").classList.remove("active");
    document.querySelector(".going").innerHTML =
      '<i class="fa fa-bars" aria-hidden="true"></i>';
  }
});

// for the date update

document.querySelector("#copyright-year").textContent =
  new Date().getFullYear();

new Swiper(".wrapper", {
  loop: true,

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// invext pop
const countries = [
  "Italy",
  "Germany",
  "France",
  "Brazil",
  "Canada",
  "United States",
  "India",
  "South Africa",
  "Mexico",
  "Australia",
  "UK",
];

function showInvestmentPopup() {
  const popup = document.getElementById("investment-popup");
  const country = countries[Math.floor(Math.random() * countries.length)];
  const amount = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;

  popup.querySelector(".country").textContent = country;
  popup.querySelector(".amount").textContent = `$${amount.toLocaleString()}`;

  popup.classList.add("show");

  // Hide after 5 seconds
  setTimeout(() => {
    popup.classList.remove("show");
  }, 5000);

  // Schedule next popup randomly between 30s–40s
  const nextDelay = Math.floor(Math.random() * 10000) + 30000;
  setTimeout(showInvestmentPopup, nextDelay);
}

// Start first popup after 5 seconds
setTimeout(showInvestmentPopup, 5000);





// for my product effect

// Add smooth scroll behavior and interactive effects
document.querySelectorAll(".learn-more-btn").forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();

    // Add a ripple effect
    const ripple = document.createElement("span");
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";
    ripple.style.position = "absolute";
    ripple.style.borderRadius = "50%";
    ripple.style.background = "rgba(255, 255, 255, 0.3)";
    ripple.style.transform = "scale(0)";
    ripple.style.animation = "ripple 0.6s linear";
    ripple.style.pointerEvents = "none";

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);

    // You can add your navigation logic here
    console.log(
      "Learn More clicked for:",
      this.closest(".service-card").querySelector(".service-title").textContent
    );
  });
});

// Add CSS for ripple animation
const style = document.createElement("style");
style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
            
            .learn-more-btn {
                position: relative;
                overflow: hidden;
            }
        `;
document.head.appendChild(style);

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Initialize scroll animations
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".service-card");
  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = `opacity 0.6s ease ${
      index * 0.1
    }s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
  });
});

// for about

     // Add smooth scroll animations
        const observerOptionsTwo = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observerTwo = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptionsTwo);

        // Initialize animations
        document.addEventListener('DOMContentLoaded', () => {
            const cards = document.querySelectorAll('.info-card');
            cards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
                observerTwo.observe(card);
            });

            // Hero content animation
            const heroContent = document.querySelector('.hero-content');
            heroContent.style.opacity = '0';
            heroContent.style.transform = 'translateY(20px)';
            heroContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observerTwo.observe(heroContent);
        });

//   stoke

        class ForexCarousel {
            constructor() {
                this.pairs = [
                    'GBPJPY', 'XAUUSD', 'GBPUSD', 'EURUSD', 'USDJPY', 'GBPEUR',
                    'AUDUSD', 'USDCAD', 'NZDUSD', 'EURGBP', 'EURJPY', 'AUDJPY',
                    'CADJPY', 'CHFJPY', 'EURCHF', 'GBPCHF', 'USDCHF', 'XAGUSD'
                ];
                this.track = document.getElementById('carouselTrack');
                this.lastUpdated = document.getElementById('lastUpdated');
                this.data = {};
                this.init();
            }

            init() {
                this.createCards();
                this.fetchData();
                // Update every 30 seconds
                setInterval(() => this.fetchData(), 30000);
            }

            createCards() {
                // Create cards twice for seamless loop
                const cardHTML = this.pairs.map(pair => this.createCard(pair)).join('');
                this.track.innerHTML = cardHTML + cardHTML;
            }

            createCard(pair) {
                return `
                    <div class="forex-card loading" id="card-${pair}">
                        <div class="currency-pair">${this.formatPair(pair)}</div>
                        <div class="price">Loading...</div>
                        <div class="change">
                            <span class="loading">Fetching data...</span>
                        </div>
                    </div>
                `;
            }

            formatPair(pair) {
                // Format currency pairs for display
                const formatted = {
                    'GBPJPY': 'GBP/JPY',
                    'XAUUSD': 'XAU/USD',
                    'GBPUSD': 'GBP/USD',
                    'EURUSD': 'EUR/USD',
                    'USDJPY': 'USD/JPY',
                    'GBPEUR': 'GBP/EUR',
                    'AUDUSD': 'AUD/USD',
                    'USDCAD': 'USD/CAD',
                    'NZDUSD': 'NZD/USD',
                    'EURGBP': 'EUR/GBP',
                    'EURJPY': 'EUR/JPY',
                    'AUDJPY': 'AUD/JPY',
                    'CADJPY': 'CAD/JPY',
                    'CHFJPY': 'CHF/JPY',
                    'EURCHF': 'EUR/CHF',
                    'GBPCHF': 'GBP/CHF',
                    'USDCHF': 'USD/CHF',
                    'XAGUSD': 'XAG/USD'
                };
                return formatted[pair] || pair;
            }

            async fetchData() {
                try {
                    // Using exchangerate-api.com (free tier)
                    const promises = this.pairs.map(async (pair) => {
                        try {
                            if (pair === 'XAUUSD' || pair === 'XAGUSD') {
                                // For precious metals, use a different approach
                                return this.fetchMetalPrice(pair);
                            }
                            
                            const base = pair.substring(0, 3);
                            const target = pair.substring(3, 6);
                            
                            const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${base}`);
                            const data = await response.json();
                            
                            if (data.rates && data.rates[target]) {
                                const rate = data.rates[target];
                                // Generate mock change for demo (in real app, you'd track historical data)
                                const change = (Math.random() - 0.5) * 0.02; // -1% to +1%
                                const changePercent = change * 100;
                                
                                return {
                                    pair,
                                    price: rate,
                                    change: changePercent,
                                    success: true
                                };
                            }
                            throw new Error('Rate not found');
                        } catch (error) {
                            return {
                                pair,
                                success: false,
                                error: error.message
                            };
                        }
                    });

                    const results = await Promise.all(promises);
                    results.forEach(result => {
                        if (result.success) {
                            this.updateCard(result.pair, result.price, result.change);
                        } else {
                            this.updateCardError(result.pair, result.error);
                        }
                    });

                    this.lastUpdated.textContent = `Last updated: ${new Date().toLocaleTimeString()}`;
                } catch (error) {
                    console.error('Error fetching data:', error);
                    this.lastUpdated.textContent = `Error: ${error.message}`;
                }
            }

            async fetchMetalPrice(pair) {
                // Mock data for precious metals (in real app, use metals-api.com or similar)
                const prices = {
                    'XAUUSD': 1950 + (Math.random() - 0.5) * 100,
                    'XAGUSD': 24 + (Math.random() - 0.5) * 2
                };
                
                const change = (Math.random() - 0.5) * 0.04; // -2% to +2%
                
                return {
                    pair,
                    price: prices[pair],
                    change: change * 100,
                    success: true
                };
            }

            updateCard(pair, price, changePercent) {
                const cards = document.querySelectorAll(`#card-${pair}`);
                
                cards.forEach(card => {
                    const priceElement = card.querySelector('.price');
                    const changeElement = card.querySelector('.change');
                    
                    // Format price based on pair
                    let formattedPrice;
                    if (pair.includes('JPY')) {
                        formattedPrice = price.toFixed(3);
                    } else if (pair === 'XAUUSD') {
                        formattedPrice = price.toFixed(2);
                    } else if (pair === 'XAGUSD') {
                        formattedPrice = price.toFixed(3);
                    } else {
                        formattedPrice = price.toFixed(5);
                    }
                    
                    priceElement.textContent = formattedPrice;
                    
                    const arrow = changePercent >= 0 ? '↗' : '↘';
                    const sign = changePercent >= 0 ? '+' : '';
                    changeElement.innerHTML = `
                        <span class="change-arrow">${arrow}</span>
                        <span>${sign}${changePercent.toFixed(2)}%</span>
                    `;
                    
                    // Update background color based on change
                    card.classList.remove('positive', 'negative', 'neutral', 'loading');
                    if (changePercent > 0.01) {
                        card.classList.add('positive');
                    } else if (changePercent < -0.01) {
                        card.classList.add('negative');
                    } else {
                        card.classList.add('neutral');
                    }
                    
                    // Add pulse effect for significant changes
                    if (Math.abs(changePercent) > 0.5) {
                        card.classList.add('pulse');
                        setTimeout(() => card.classList.remove('pulse'), 3000);
                    }
                });
            }

            updateCardError(pair, error) {
                const cards = document.querySelectorAll(`#card-${pair}`);
                
                cards.forEach(card => {
                    const priceElement = card.querySelector('.price');
                    const changeElement = card.querySelector('.change');
                    
                    priceElement.textContent = 'Error';
                    changeElement.innerHTML = `<span class="error">Failed to load</span>`;
                    
                    card.classList.remove('positive', 'negative', 'neutral', 'loading');
                    card.classList.add('neutral');
                });
            }
        }

        // Initialize the carousel when the page loads
        document.addEventListener('DOMContentLoaded', () => {
            new ForexCarousel();
        });
