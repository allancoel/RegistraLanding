/**
 * Blog Manager
 * Handles all blog post operations including CRUD and localStorage management
 * 
 * Features:
 * - Create, Read, Update, Delete blog posts
 * - LocalStorage persistence
 * - SEO-optimized post structure
 * - Slug generation
 * - Featured post management
 */

const BlogManager = (function() {
  'use strict';

  const STORAGE_KEY = 'blogPosts';
  const SUBSCRIBERS_KEY = 'newsletterSubscribers';

  // Initialize with default posts if storage is empty
  function initializeDefaultPosts() {
    let posts = getAllPosts();
    
    // Check if old posts are using logo2.png and reset them
    if (posts.length > 0 && posts[0].image && posts[0].image.includes('logo2.png')) {
      localStorage.removeItem(STORAGE_KEY); // Clear old posts
      posts = []; // Force reset to use new images
    }
    
    if (posts.length === 0) {
      const defaultPosts = [
        {
          id: generateId(),
          title: 'How to Document Customer Service Calls: A Complete Guide',
          slug: 'how-to-document-customer-service-calls',
          excerpt: 'Learn the essential strategies to properly document every customer service interaction. This comprehensive guide will help you keep records that actually win disputes.',
          content: `
            <p>Documentation is the single most powerful weapon in your customer service arsenal. Yet most people do it wrong—or don't do it at all.</p>
            
            <h2>Why Documentation Matters</h2>
            <p>Companies know that most customers won't keep detailed records. They count on it. When you call back about a promise they made, they'll say "we have no record of that." Without documentation, you're powerless.</p>
            
            <p>But when you have detailed logs, case numbers, agent names, and timestamps, everything changes. Suddenly, <strong>you have leverage</strong>.</p>
            
            <h2>What to Document (The Essential 7)</h2>
            <p>Every customer service interaction should include these 7 elements:</p>
            
            <ol>
              <li><strong>Date and Time:</strong> When did the call happen? Be precise.</li>
              <li><strong>Company Name:</strong> Obvious, but write it down anyway.</li>
              <li><strong>Case Number:</strong> The golden ticket. Never hang up without one.</li>
              <li><strong>Agent Name:</strong> First name, last name, employee ID if possible.</li>
              <li><strong>Department:</strong> Technical support? Billing? Returns?</li>
              <li><strong>Issue Description:</strong> What's the problem? Be specific.</li>
              <li><strong>Promises Made:</strong> What did they agree to do? When will it happen?</li>
            </ol>
            
            <h2>Advanced Documentation Tactics</h2>
            <p>Here's what professionals do that amateurs skip:</p>
            
            <h3>1. Record the Call (Legally)</h3>
            <p>Check your local laws first. In many places, you can record with one-party consent (yours). Just inform the agent at the start: "I'm recording this call for my records." Most will comply.</p>
            
            <blockquote>
              "The moment you say you're recording, agent behavior changes. Promises become more careful. Commitments get documented on their end too."
            </blockquote>
            
            <h3>2. Follow Up in Writing</h3>
            <p>After every important call, send an email or message through their portal:</p>
            <ul>
              <li>Summarize what was discussed</li>
              <li>List the promises made</li>
              <li>Include the case number and agent name</li>
              <li>Request written confirmation</li>
            </ul>
            
            <h3>3. Attach Everything</h3>
            <p>Receipts, contracts, screenshots, emails, photos—if it's related to your case, attach it. Registra makes this effortless with built-in file management.</p>
            
            <h2>Common Documentation Mistakes</h2>
            <p><strong>Mistake #1:</strong> Writing case numbers on sticky notes that disappear.</p>
            <p><strong>Solution:</strong> Use Registra to store everything digitally, synced to the cloud.</p>
            
            <p><strong>Mistake #2:</strong> Not documenting "small" interactions.</p>
            <p><strong>Solution:</strong> Document everything. That "quick question" call might become critical later.</p>
            
            <p><strong>Mistake #3:</strong> Waiting to document after the call.</p>
            <p><strong>Solution:</strong> Log details during the call. Memory fades fast.</p>
            
            <h2>The Professional Approach: PDF Reports</h2>
            <p>When you need to escalate—to a manager, lawyer, or consumer protection agency—presentation matters.</p>
            
            <p>Registra Pro lets you export everything as a professional PDF report:</p>
            <ul>
              <li>Chronological call history</li>
              <li>All case numbers and agent names</li>
              <li>Attached documents and photos</li>
              <li>Summary of promises vs. actions</li>
            </ul>
            
            <p>This isn't just a list of notes. It's <strong>evidence</strong>.</p>
            
            <h2>Real Results from Real Documentation</h2>
            <p>Maria from São Paulo used Registra to document 6 months of failed internet service. Her detailed logs showed 23 separate calls, 15 missed appointment, and 8 broken promises.</p>
            
            <p>She exported a PDF, sent it to the telecom regulator, and got a full refund plus compensation. Without documentation? She would have lost.</p>
            
            <h2>Start Documenting Today</h2>
            <p>Don't wait for the next dispute to start building your defense. Download Registra now and make documentation automatic.</p>
            
            <p>The next time a company tries to gaslight you with "we have no record," you'll have proof.</p>
            
            <p><strong>Remember:</strong> If it's not documented, it didn't happen. Start winning your cases today.</p>
          `,
          author: 'Registra Team',
          date: new Date().toISOString(),
          updatedDate: new Date().toISOString(),
          category: 'Guides',
          image: 'assets/blog/organization.png',
          featured: true,
          seoTitle: 'How to Document Customer Service Calls - Complete Guide 2025',
          seoDescription: 'Master the art of documenting customer service calls. Learn what to record, how to organize it, and how to use it to win disputes. Includes professional PDF export tips.',
          keywords: 'customer service documentation, call logging, case management, consumer rights, service dispute documentation'
        },
        {
          id: generateId(),
          title: '10 Consumer Rights You Need to Know in 2025',
          slug: '10-consumer-rights-you-need-to-know-2025',
          excerpt: 'Your rights as a consumer are powerful—but only if you know them. Discover the top 10 consumer protection laws that companies don\'t want you to understand.',
          content: `
            <p>Most people don't know their consumer rights. Companies count on this. Knowledge is power, and in this article, you'll gain both.</p>
            
            <h2>1. The Right to Accurate Information</h2>
            <p>Companies cannot lie to you. Period. If they claim a product does something it doesn't, that's fraud. You have the right to:</p>
            <ul>
              <li>Receive truthful advertising</li>
              <li>Get clear pricing without hidden fees</li>
              <li>Access complete product specifications</li>
              <li>See full terms and conditions before purchase</li>
            </ul>
            
            <h2>2. The Right to Cancel Contracts</h2>
            <p>In many jurisdictions, you have a cooling-off period (usually 7-14 days) to cancel contracts without penalty. This applies to:</p>
            <ul>
              <li>Door-to-door sales</li>
              <li>Telemarketing purchases</li>
              <li>Online purchases</li>
              <li>Gym memberships and subscriptions</li>
            </ul>
            
            <h2>3. The Right to Refunds for Defective Products</h2>
            <p>If a product is defective, doesn't work as advertised, or breaks within the warranty period, you're entitled to:</p>
            <ul>
              <li>A full refund</li>
              <li>A replacement</li>
              <li>A repair (at no cost)</li>
            </ul>
            <p><strong>Important:</strong> "No refunds" signs don't override your legal rights.</p>
            
            <h2>4. The Right to Data Privacy</h2>
            <p>Your personal information is yours. Companies must:</p>
            <ul>
              <li>Get your consent before collecting data</li>
              <li>Explain how they'll use your information</li>
              <li>Allow you to access, correct, or delete your data</li>
              <li>Protect your data with reasonable security measures</li>
            </ul>
            
            <h2>5. The Right to Fair Debt Collection</h2>
            <p>Debt collectors cannot harass you. They're prohibited from:</p>
            <ul>
              <li>Calling before 8 AM or after 9 PM</li>
              <li>Contacting you at work if you've asked them not to</li>
              <li>Using threatening or abusive language</li>
              <li>Sharing your debt information with others</li>
            </ul>
            
            <h2>6. The Right to Dispute Charges</h2>
            <p>See an unfair charge on your credit card? You can dispute it. The process:</p>
            <ol>
              <li>Contact your card issuer within 60 days</li>
              <li>Provide evidence of the error</li>
              <li>The charge is frozen while investigated</li>
              <li>If proven wrong, it's reversed</li>
            </ol>
            
            <h2>7. The Right to Service Quality</h2>
            <p>Service providers must deliver what they promise. If your internet, phone, or utility service consistently fails to meet advertised standards, you can:</p>
            <ul>
              <li>Demand service credits</li>
              <li>Break contracts without penalty</li>
              <li>File complaints with regulators</li>
              <li>Seek compensation for damages</li>
            </ul>
            
            <h2>8. The Right to Accessible Customer Service</h2>
            <p>Companies must provide reasonable customer service access. This includes:</p>
            <ul>
              <li>Clear contact information</li>
              <li>Response within reasonable timeframes</li>
              <li>Multiple contact methods (phone, email, chat)</li>
              <li>Accommodation for disabilities</li>
            </ul>
            
            <h2>9. The Right to Safety</h2>
            <p>Products must be safe for their intended use. If you're injured by a defective product, you may be entitled to compensation. This covers:</p>
            <ul>
              <li>Medical expenses</li>
              <li>Lost wages</li>
              <li>Pain and suffering</li>
              <li>Property damage</li>
            </ul>
            
            <h2>10. The Right to Complaint and Redress</h2>
            <p>You have the right to complain and receive fair resolution. Options include:</p>
            <ul>
              <li>Internal company complaints</li>
              <li>Consumer protection agencies</li>
              <li>Industry ombudsmen</li>
              <li>Small claims court</li>
              <li>Class action lawsuits</li>
            </ul>
            
            <h2>How to Exercise Your Rights</h2>
            <p>Knowing your rights is step one. Enforcing them requires:</p>
            <ol>
              <li><strong>Documentation:</strong> Keep records of everything (use Registra!)</li>
              <li><strong>Written communication:</strong> Always follow up verbal agreements in writing</li>
              <li><strong>Escalation:</strong> Start with the company, then move to regulators if needed</li>
              <li><strong>Persistence:</strong> Companies hope you'll give up. Don't.</li>
            </ol>
            
            <h2>Protection Starts with Preparation</h2>
            <p>The best way to protect your rights is to document everything from day one. Registra helps you:</p>
            <ul>
              <li>Log every customer service interaction</li>
              <li>Store case numbers and promises</li>
              <li>Attach receipts and contracts</li>
              <li>Generate professional reports for regulators</li>
            </ul>
            
            <p><strong>Remember:</strong> Your rights only matter if you can prove they were violated. Start documenting today.</p>
          `,
          author: 'Legal Team',
          date: new Date(Date.now() - 86400000).toISOString(),
          updatedDate: new Date(Date.now() - 86400000).toISOString(),
          category: 'Consumer Rights',
          image: 'assets/blog/10things.png',
          featured: false,
          seoTitle: '10 Essential Consumer Rights Every Customer Should Know in 2025',
          seoDescription: 'Protect yourself with these 10 critical consumer rights. Learn what companies must do, how to enforce your rights, and when to escalate complaints.',
          keywords: 'consumer rights, customer protection, legal rights, consumer law, customer service rights'
        },
        {
          id: generateId(),
          title: 'What to Do When Companies Lose Your Case Number',
          slug: 'what-to-do-when-companies-lose-case-number',
          excerpt: 'They claim they have "no record" of your call? Here\'s your step-by-step action plan to fight back and win your case.',
          content: `
            <p>"I'm sorry, but I don't see any record of that in our system."</p>
            
            <p>You know you called. You know they promised to fix the problem. But according to them, <strong>none of it ever happened</strong>.</p>
            
            <p>This is one of the most frustrating experiences in customer service. And it's completely preventable. Here's how to handle it—and how to never let it happen again.</p>
            
            <h2>Step 1: Stay Calm and Document This Interaction</h2>
            <p>The moment they say "no record," don't lose your cool. Instead:</p>
            <ul>
              <li>Ask for their name and employee ID</li>
              <li>Get a new case number for <em>this</em> call</li>
              <li>Note the date and time</li>
              <li>State clearly what you're trying to resolve</li>
            </ul>
            
            <p>You're creating a new paper trail right now. Make it count.</p>
            
            <h2>Step 2: Provide Your Original Case Number</h2>
            <p>If you have your original case number (and you should—use Registra!), give it to them explicitly:</p>
            
            <blockquote>
              "On [date], I spoke with [agent name] at [time]. My case number was [number]. Can you search for that specifically?"
            </blockquote>
            
            <p>Often, they'll find it if you give them the exact number. Systems fail, but numbers usually persist.</p>
            
            <h2>Step 3: Reference Specific Details</h2>
            <p>Mention details only someone who accessed the system could know:</p>
            <ul>
              <li>Account numbers discussed</li>
              <li>Previous ticket numbers</li>
              <li>Specific promises or commitments</li>
              <li>Dates mentioned for follow-ups</li>
            </ul>
            
            <p>The more specific you are, the harder it is for them to claim ignorance.</p>
            
            <h2>Step 4: Ask to Speak with a Supervisor</h2>
            <p>Frontline agents have limited access. Supervisors can:</p>
            <ul>
              <li>Search deeper in the system</li>
              <li>Access call recordings</li>
              <li>Retrieve deleted or archived tickets</li>
              <li>Override standard procedures</li>
            </ul>
            
            <p>Be polite but firm: "I need to speak with a supervisor who can access historical records."</p>
            
            <h2>Step 5: Mention You Have Documentation</h2>
            <p>This changes everything. Say:</p>
            
            <blockquote>
              "I have detailed logs of my previous interaction, including the case number, agent name, and what was promised. I can escalate this to your corporate office or regulatory agency if needed."
            </blockquote>
            
            <p>Suddenly, they'll try harder to find your record.</p>
            
            <h2>Step 6: Follow Up in Writing</h2>
            <p>After the call, send an email or message through their portal:</p>
            
            <p><strong>Subject:</strong> Missing Case Record - Case #[number] - Urgent</p>
            
            <p><strong>Body:</strong></p>
            <ul>
              <li>Date and time of original call</li>
              <li>Original case number</li>
              <li>Agent name</li>
              <li>Summary of the issue and promises made</li>
              <li>Your new case number from today's call</li>
              <li>Request for immediate resolution</li>
            </ul>
            
            <p>Written communication creates an undeniable record.</p>
            
            <h2>Step 7: Escalate to Regulators</h2>
            <p>If the company continues to deny your record and refuses to honor their commitments, escalate to:</p>
            <ul>
              <li><strong>Consumer Protection Agency:</strong> Your local or national agency</li>
              <li><strong>Industry Regulator:</strong> (FCC for telecoms, SEC for finance, etc.)</li>
              <li><strong>Better Business Bureau:</strong> File a complaint</li>
              <li><strong>Social Media:</strong> Public complaints get faster responses</li>
            </ul>
            
            <p>Companies hate regulatory attention. This often resolves issues quickly.</p>
            
            <h2>How to Prevent This from Ever Happening Again</h2>
            <p>The real solution is to never rely on their records. Build your own:</p>
            
            <h3>Use Registra to Document Everything</h3>
            <ol>
              <li><strong>Log every call:</strong> Case number, agent name, date, time</li>
              <li><strong>Record audio:</strong> When legal, record the interaction</li>
              <li><strong>Attach documents:</strong> Receipts, emails, screenshots</li>
              <li><strong>Set reminders:</strong> Never miss a follow-up deadline</li>
              <li><strong>Export PDFs:</strong> Create professional reports for escalation</li>
            </ol>
            
            <h2>Real Story: How Documentation Saved $3,000</h2>
            <p>Carlos ordered a TV that arrived damaged. The company promised a replacement within 7 days. Three weeks later, nothing. When he called, they had "no record" of the replacement promise.</p>
            
            <p>But Carlos had used Registra to log everything:</p>
            <ul>
              <li>Original order number</li>
              <li>Damage photos</li>
              <li>Call logs with case numbers</li>
              <li>Agent names who promised replacement</li>
              <li>Emails sent to customer service</li>
            </ul>
            
            <p>He exported a PDF and sent it to the company's executive team. Within 24 hours, he had his replacement TV plus a $200 credit for the inconvenience.</p>
            
            <p><strong>Without documentation?</strong> He would have lost $3,000 and his time.</p>
            
            <h2>The Bottom Line</h2>
            <p>Companies "lose" records when it's convenient for them. Don't let it happen to you.</p>
            
            <ul>
              <li>Always get and save case numbers</li>
              <li>Document agent names and promises</li>
              <li>Follow up in writing</li>
              <li>Use Registra to keep everything organized</li>
              <li>Escalate when necessary</li>
            </ul>
            
            <p>The next time someone says "we have no record," you'll be ready.</p>
            
            <p><strong>Start protecting yourself today.</strong> Download Registra and never lose another case.</p>
          `,
          author: 'Registra Team',
          date: new Date(Date.now() - 172800000).toISOString(),
          updatedDate: new Date(Date.now() - 172800000).toISOString(),
          category: 'Problem Solving',
          image: 'assets/blog/companies lose.png',
          featured: false,
          seoTitle: 'What to Do When Companies Lose Your Case Number - Action Plan',
          seoDescription: 'Step-by-step guide to handle situations when companies claim they have no record of your case. Win your disputes with proper documentation.',
          keywords: 'lost case number, customer service dispute, case documentation, consumer protection, company lost my case'
        }
      ];

      defaultPosts.forEach(post => savePost(post));
      return defaultPosts;
    }
    return posts;
  }

  // Generate unique ID
  function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  // Generate SEO-friendly slug from title
  function generateSlug(title) {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  // Get all posts from localStorage
  function getAllPosts() {
    try {
      const posts = localStorage.getItem(STORAGE_KEY);
      return posts ? JSON.parse(posts) : [];
    } catch (error) {
      console.error('Error loading posts:', error);
      return [];
    }
  }

  // Get post by ID
  function getPostById(id) {
    const posts = getAllPosts();
    return posts.find(post => post.id === id);
  }

  // Get post by slug
  function getPostBySlug(slug) {
    const posts = getAllPosts();
    return posts.find(post => post.slug === slug);
  }

  // Save post (create or update)
  function savePost(post) {
    const posts = getAllPosts();
    const existingIndex = posts.findIndex(p => p.id === post.id);

    // Generate slug if not provided
    if (!post.slug) {
      post.slug = generateSlug(post.title);
    }

    // Add timestamps
    if (existingIndex >= 0) {
      // Update existing post
      post.updatedDate = new Date().toISOString();
      posts[existingIndex] = post;
    } else {
      // Create new post
      if (!post.id) {
        post.id = generateId();
      }
      if (!post.date) {
        post.date = new Date().toISOString();
      }
      post.updatedDate = post.date;
      posts.push(post);
    }

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
      return post;
    } catch (error) {
      console.error('Error saving post:', error);
      return null;
    }
  }

  // Delete post
  function deletePost(id) {
    const posts = getAllPosts();
    const filteredPosts = posts.filter(post => post.id !== id);
    
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredPosts));
      return true;
    } catch (error) {
      console.error('Error deleting post:', error);
      return false;
    }
  }

  // Get posts by category
  function getPostsByCategory(category) {
    const posts = getAllPosts();
    return posts.filter(post => post.category === category);
  }

  // Get featured posts
  function getFeaturedPosts() {
    const posts = getAllPosts();
    return posts.filter(post => post.featured);
  }

  // Search posts
  function searchPosts(query) {
    const posts = getAllPosts();
    const lowerQuery = query.toLowerCase();
    
    return posts.filter(post => 
      post.title.toLowerCase().includes(lowerQuery) ||
      post.excerpt.toLowerCase().includes(lowerQuery) ||
      post.content.toLowerCase().includes(lowerQuery) ||
      post.keywords.toLowerCase().includes(lowerQuery)
    );
  }

  // Get all categories
  function getAllCategories() {
    const posts = getAllPosts();
    const categories = [...new Set(posts.map(post => post.category))];
    return categories.sort();
  }

  // Newsletter subscriber management
  function addSubscriber(email, source = 'website') {
    try {
      let subscribers = JSON.parse(localStorage.getItem(SUBSCRIBERS_KEY) || '[]');
      
      // Check if already subscribed
      if (subscribers.some(sub => sub.email === email)) {
        return { success: false, message: 'Already subscribed' };
      }
      
      subscribers.push({
        email: email,
        date: new Date().toISOString(),
        source: source,
        active: true
      });
      
      localStorage.setItem(SUBSCRIBERS_KEY, JSON.stringify(subscribers));
      return { success: true, message: 'Subscribed successfully' };
    } catch (error) {
      console.error('Error adding subscriber:', error);
      return { success: false, message: 'Error occurred' };
    }
  }

  // Get all subscribers
  function getAllSubscribers() {
    try {
      return JSON.parse(localStorage.getItem(SUBSCRIBERS_KEY) || '[]');
    } catch (error) {
      console.error('Error loading subscribers:', error);
      return [];
    }
  }

  // Export all data (for backup)
  function exportData() {
    return {
      posts: getAllPosts(),
      subscribers: getAllSubscribers(),
      exportDate: new Date().toISOString()
    };
  }

  // Import data (for restore)
  function importData(data) {
    try {
      if (data.posts) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data.posts));
      }
      if (data.subscribers) {
        localStorage.setItem(SUBSCRIBERS_KEY, JSON.stringify(data.subscribers));
      }
      return true;
    } catch (error) {
      console.error('Error importing data:', error);
      return false;
    }
  }

  // Initialize on load
  initializeDefaultPosts();

  // Public API
  return {
    // Post operations
    getAllPosts,
    getPostById,
    getPostBySlug,
    savePost,
    deletePost,
    getPostsByCategory,
    getFeaturedPosts,
    searchPosts,
    getAllCategories,
    
    // Utility functions
    generateId,
    generateSlug,
    
    // Newsletter operations
    addSubscriber,
    getAllSubscribers,
    
    // Data management
    exportData,
    importData
  };
})();

// Make BlogManager available globally
if (typeof window !== 'undefined') {
  window.BlogManager = BlogManager;
}

