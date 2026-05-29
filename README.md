🍔 Food Delivery Web App — FYP
A full-stack food delivery website built with MERN Stack (MongoDB, Express, React, Node.js) with online payment, admin panel and AI-powered food recommendations.

📌 About The Project
This project is a complete food ordering web application similar to Zomato / Swiggy. Users can browse food, place orders, and pay online. An admin panel manages food items and orders. An AI recommendation engine suggests food based on the user's order history and preferences.

⚙️ Tech Stack
LayerTechnologyFrontendReact.js, React Router, Context API, CSS3BackendNode.js, Express.js, REST APIDatabaseMongoDB Atlas (Cloud)AuthenticationJWT (JSON Web Tokens)PaymentStripe APIImage UploadMulterAI EngineClaude API (Anthropic)DeploymentVercel (Frontend) + Render (Backend)

✨ Features
👤 User

Browse & search food menu by category
Add / remove items from cart
Register & login with JWT authentication
Place orders with online payment (Stripe)
View order history & live order status
🤖 Get AI-powered personalized food recommendations

🔧 Admin Panel

Add new food items with image upload
Delete food items
View & manage all incoming orders
Update order status (Processing → Out for Delivery → Delivered)


🤖 AI Recommendation System
The app uses Claude API (Anthropic) to provide smart, personalized food suggestions to every user.
What it does

Analyzes user's past order history from MongoDB
Detects favorite food categories (e.g. burgers, pizza, biryani)
Understands price range preferences
Recommends food items the user is most likely to enjoy
Displayed on homepage as a "Recommended for You" section
Updates recommendations every time user places a new order

How it works — Flow
User logs in
    ↓
Past orders fetched from MongoDB
    ↓
Order data formatted as context (items, categories, frequency)
    ↓
Sent to Claude API with prompt:
"Based on this user's order history, recommend 4 food items from this menu"
    ↓
Claude returns JSON list of recommended food item IDs
    ↓
Items fetched from DB and displayed on homepage
API Route
POST /api/ai/recommend
Body: { userId }
Response: { recommendations: [food items array] }
Sample Prompt Sent to Claude
You are a food recommendation engine.
User's past orders: [Burger x3, Pizza x2, Fries x4]
Available menu: [list of food items with categories]
Recommend 4 food items the user will most likely enjoy.
Reply in JSON only: { "recommended_ids": ["id1", "id2", "id3", "id4"] }
Why This Makes FYP Stand Out ⭐
Normal FYPThis ProjectStatic food listAI-personalized suggestionsSame homepage for all usersUnique homepage per userNo intelligenceLearns from order history

🗄️ Database Design
CollectionFieldsUsersname, email, password, cartDataFoodsname, description, price, image, categoryOrdersuserId, items, amount, address, status, payment, date

🏗️ Project Structure
food-delivery-app/
├── frontend/               # React User Interface
│   └── src/
│       ├── components/     # Navbar, Footer, FoodItem, Cart
│       ├── pages/          # Home, Cart, PlaceOrder, MyOrders
│       └── context/        # Global State (StoreContext)
│
├── backend/                # Node.js + Express Server
│   ├── controllers/        # foodController, userController, orderController
│   ├── models/             # MongoDB Schemas
│   ├── routes/             # API Routes
│   ├── middleware/         # JWT Auth Middleware
│   └── server.js
│
└── admin/                  # React Admin Panel
    └── src/
        └── pages/          # Add Food, List Food, Orders

🌐 API Endpoints
MethodRouteDescriptionPOST/api/user/registerRegister new userPOST/api/user/loginUser loginGET/api/food/listGet all food itemsPOST/api/food/addAdd food (Admin)POST/api/food/removeDelete food (Admin)POST/api/order/placePlace orderPOST/api/order/verifyVerify paymentPOST/api/order/userordersGet user ordersGET/api/order/listAll orders (Admin)POST/api/order/statusUpdate order statusPOST/api/ai/recommendGet AI food recommendations

🚀 Installation & Setup
Prerequisites

Node.js v18+
MongoDB Atlas account
Stripe account
Anthropic (Claude) API Key

Steps
bash# 1. Clone the repository
git clone https://github.com/your-username/food-delivery-app.git

# 2. Backend setup
cd backend && npm install
Add to .env:
envPORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_key
CLAUDE_API_KEY=your_claude_api_key
bashnpm run server

# 3. Frontend
cd ../frontend && npm install && npm run dev

# 4. Admin
cd ../admin && npm install && npm run dev

📅 Development Timeline
WeekWork DoneWeek 1-2Frontend UI — Homepage, Menu, CartWeek 3-4Backend APIs + MongoDB setupWeek 5JWT AuthenticationWeek 6Stripe Payment IntegrationWeek 7Admin PanelWeek 8AI Recommendation SystemWeek 9Testing & Bug FixingWeek 10Deployment + Documentation

🔮 Future Enhancements

 Real-time GPS delivery tracking (Google Maps)
 Push notifications
 Mobile app (React Native)
 Multi-restaurant support
 Loyalty points & discount coupons


📺 References

GreatStack MERN Tutorial
React Docs
MongoDB Atlas
Stripe Docs
Claude API Docs
