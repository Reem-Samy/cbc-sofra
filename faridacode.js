let recipes = [
    {
        title: "Kebab Dish",
        category: "Grill",
        description: "Delicious grilled kebabs with vegetables and tender meat",
        imageGradient: "imgs/Turkish Kebab Platter, beef, steak, tomato, plate, grilled, pork, dish, lunch, vegetables, red, grill, gourmet, green, restaurant, cooked, healthy, barbecue, pepper, vegetable, white Stock Photo.png"
    },
    {
        title: "Mumbar",
        category: "Appetizer",
        description: "Traditional stuffed intestine with spices and rice",
        imageGradient: "imgs/4bc88d62-463e-445e-bce5-79755cc9f4b7 1.png"
    },
    {
        title: "Muammar rice",
        category: "Side dish",
        description: "Aromatic Egyptian rice with butter and crispy top",
        imageGradient: "imgs/Egyptian food الاكل المصري 🇪🇬.png"
    },
    {
        title: "Grilled Chicken",
        category: "Main Course",
        description: "Perfectly seasoned and grilled chicken breast",
        imageGradient: "linear-gradient(135deg, #a0522d, #cd853f)"
    },
    {
        title: "Mezze Platter",
        category: "Appetizer",
        description: "Assorted Middle Eastern dips and appetizers",
        imageGradient: "linear-gradient(135deg, #daa520, #f4a460)"
    },
    {
        title: "Lamb Kofta",
        category: "Grill",
        description: "Spiced ground lamb kebabs with herbs",
        imageGradient: "linear-gradient(135deg, #8b4513, #a0522d)"
    }
];

// Generate recipe cards
let output = "";

for (let i = 0; i < recipes.length; i++) {
    // Check if it's an image path or gradient
    let backgroundStyle = "";
    if (recipes[i].imageGradient.includes('imgs/')) {
        // It's an image
        backgroundStyle = `background-image: url('${recipes[i].imageGradient}'); background-size: cover; background-position: center;`;
    } else {
        // It's a gradient
        backgroundStyle = `background: ${recipes[i].imageGradient};`;
    }
    
    output += `
    <div class="recipe-card">
        <div class="recipe-image" style="${backgroundStyle}"></div>
        <div class="recipe-info">
            <div class="recipe-category">${recipes[i].category}</div>
            <div class="recipe-title">${recipes[i].title}</div>
            <button class="view-recipe-btn">View Recipe</button>
        </div>
    </div>
    `;
}

document.getElementById("recipeContainer").innerHTML = output;

// Array of different ads
const ads = [
    {
        icon: "🍕",
        title: "Master Pizza Making!",
        description: "Join our exclusive pizza masterclass and learn authentic Italian techniques from professional chefs. Limited spots available!",
        cta: "Enroll Now"
    },
    {
        icon: "📚",
        title: "Get Our Recipe Book!",
        description: "Download our free cookbook with 50+ mouth-watering recipes from our chef experts. Start cooking like a pro today!",
        cta: "Download Free"
    },
    {
        icon: "🎬",
        title: "Premium Membership",
        description: "Unlock exclusive cooking shows, behind-the-scenes content, and chef Q&A sessions. First month 50% off!",
        cta: "Subscribe Now"
    },
    {
        icon: "🔪",
        title: "Professional Knife Set Sale!",
        description: "Get 40% off on premium Japanese steel knife sets. Perfect for home chefs who want professional quality tools!",
        cta: "Shop Now"
    },
    {
        icon: "👨‍🍳",
        title: "Live Cooking Classes",
        description: "Join our interactive live cooking sessions every weekend. Cook along with celebrity chefs in real-time!",
        cta: "Register Today"
    }
];

// Function to show random ad
function showRandomAd() {
    const randomIndex = Math.floor(Math.random() * ads.length);
    const ad = ads[randomIndex];
    
    document.getElementById('popupIcon').textContent = ad.icon;
    document.getElementById('popupTitle').textContent = ad.title;
    document.getElementById('popupDescription').textContent = ad.description;
    document.getElementById('popupCTA').textContent = ad.cta;
    
    // Show popup after 1 second
    setTimeout(() => {
        document.getElementById('popupAd').classList.add('active');
    }, 1000);
}

// Function to close popup
function closePopup() {
    document.getElementById('popupAd').classList.remove('active');
}

// Close popup when clicking outside
document.getElementById('popupAd').addEventListener('click', function(e) {
    if (e.target === this) {
        closePopup();
    }
});

// Close popup with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closePopup();
    }
});

// Show random ad on page load
window.addEventListener('load', showRandomAd);
