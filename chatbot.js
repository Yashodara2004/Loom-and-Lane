// Chatbot Popup Logic
console.log("Chatbot script loading...");

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM loaded, initializing chatbot...");
  
  const chatbotToggle1 = document.getElementById("chatbotToggle1");
  const chatbot1 = document.getElementById("chatbot1");
  const closeChat1 = document.getElementById("closeChat1");
  
  // Debug: Log if elements are found
  console.log("chatbotToggle1 found:", !!chatbotToggle1);
  console.log("chatbot1 found:", !!chatbot1);
  console.log("closeChat1 found:", !!closeChat1);
  
  if (chatbotToggle1 && chatbot1) {
    chatbotToggle1.addEventListener("click", () => {
      console.log("Opening chatbot");
      chatbot1.style.display = "flex";
    });
  } else {
    console.error("Chatbot toggle or container not found!");
  }
  
  if (closeChat1 && chatbot1) {
    closeChat1.addEventListener("click", () => {
      console.log("Closing chatbot");
      chatbot1.style.display = "none";
    });
  }
  
  // Enhanced Q&A for Furniture/Home Decor Store
  const qa1 = {
    // Greetings
    "hello": "Hi there! 👋 Welcome to our home décor store! How can I assist you today?",
    "hi": "Hello! Looking for beautiful home decorations or need help with an order?",
    "hey": "Hey! 😊 Ready to explore our artisan collections?",
    
    // Store Information
    "hours": "We're open Monday to Friday 9am-6pm, Saturday 10am-5pm, and Sunday 11am-4pm.",
    "location": "Our store is located at 123 Artisan Lane, but you can shop all our collections online!",
    "contact": "You can reach us at (555) 123-4567 or email support@arthomedecor.com",
    "about": "We specialize in handcrafted home décor, wooden crafts, porcelain items, and floral arrangements from skilled artisans.",
    
    // Categories
    "categories": "We have 5 main categories: 1) Home Decorations, 2) Wooden Crafts, 3) Porcelain Items, 4) Flower Arrangements, and 5) Accessories.",
    "what do you sell": "We sell beautiful handcrafted items including cushion covers, batik art, wooden statues, porcelain tea sets, floral arrangements, and decorative accessories.",
    "products": "Our products include handcrafted cushion covers ($19), batik art ($26), elephant wooden statues ($56), porcelain tea sets ($57), fresh flower bouquets ($20), and many more artisan items!",
    
    // Default response
    "default": "I'm here to help with our handcrafted collections! Ask me about: \n• Product categories \n• Pricing \n• Shipping info \n• Gift ideas \n• Material details \nOr say 'help' for more options!"
  };

  // Chat Logic
  const sendBtn1 = document.getElementById("sendBtn1");
  const userInput1 = document.getElementById("userInput1");
  const chatBody1 = document.getElementById("chatBody1");
  
  console.log("sendBtn1 found:", !!sendBtn1);
  console.log("userInput1 found:", !!userInput1);
  console.log("chatBody1 found:", !!chatBody1);
  
  if (sendBtn1) {
    sendBtn1.addEventListener("click", sendMessage1);
  }
  
  if (userInput1) {
    userInput1.addEventListener("keypress", (e) => {
      if (e.key === "Enter") sendMessage1();
    });
  }

  function sendMessage1() {
    if (!userInput1 || !chatBody1) {
      console.error("Chat elements not found!");
      return;
    }
    
    const text = userInput1.value.trim().toLowerCase();
    console.log("User message:", text);
    
    if (text === "") {
      console.log("Empty message, ignoring");
      return;
    }

    appendMessage1(text, "user");
    userInput1.value = "";

    // Show thinking indicator
    const thinkingMsg = document.createElement("div");
    thinkingMsg.classList.add("thinking1");
    thinkingMsg.textContent = "Thinking...";
    chatBody1.appendChild(thinkingMsg);
    chatBody1.scrollTop = chatBody1.scrollHeight;

    // Find best matching response
    setTimeout(() => {
      thinkingMsg.remove();
      
      // Check for exact match first
      if (qa1[text]) {
        console.log("Found exact match for:", text);
        appendMessage1(qa1[text], "bot");
        return;
      }
      
      // Check for partial matches (keywords)
      let foundResponse = null;
      const keywords = Object.keys(qa1);
      
      for (const keyword of keywords) {
        if (text.includes(keyword) && keyword.length > 3) {
          foundResponse = qa1[keyword];
          console.log("Found keyword match:", keyword);
          break;
        }
      }
      
      // Default response if nothing matches
      const reply = foundResponse || qa1["default"];
      console.log("Sending response:", reply.substring(0, 50) + "...");
      appendMessage1(reply, "bot");
    }, 800);
  }

  function appendMessage1(msg, sender) {
    const div = document.createElement("div");
    div.classList.add("chat-message1", sender === "user" ? "user-message1" : "bot-message1");
    div.textContent = msg;
    chatBody1.appendChild(div);
    chatBody1.scrollTop = chatBody1.scrollHeight;
  }

  // Auto-open on first visit (optional)
  if (!localStorage.getItem('chatbotSeen') && chatbot1) {
    setTimeout(() => {
      console.log("Auto-opening chatbot for first visit");
      chatbot1.style.display = "flex";
      const welcomeMsg = "Hello! I'm your AI assistant for our artisan home décor store. 🌿\n\nI can help you with:\n• Product information & pricing\n• Category details\n• Shipping & returns\n• Gift recommendations\n• Material & care instructions\n\nTry asking: 'What categories do you have?' or 'Show me wooden crafts'";
      appendMessage1(welcomeMsg, "bot");
      localStorage.setItem('chatbotSeen', 'true');
    }, 3000);
  }
  
  // Add greeting based on time of day
  function getTimeBasedGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning!";
    if (hour < 18) return "Good afternoon!";
    return "Good evening!";
  }
  
  console.log("Chatbot initialization complete");
});