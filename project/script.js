// Check if the current page is index.html
if (document.getElementById('loginBtn')) {
    // Handle login and signup buttons
    document.getElementById('loginBtn').addEventListener('click', () => {
        window.location.href = 'dashboard.html';
    });

    document.getElementById('signupBtn').addEventListener('click', () => {
        window.location.href = 'dashboard.html';
    });
}

// Check if the current page is dashboard.html
if (document.getElementById('readNewsBtn')) {
    // Handle dashboard buttons
    document.getElementById('readNewsBtn').addEventListener('click', () => {
        window.location.href = 'read-news.html';
    });

    document.getElementById('generateNewsBtn').addEventListener('click', () => {
        window.location.href = 'generate-news.html';
    });
}

// Check if the current page is generate-news.html
if (document.getElementById('generateNews')) {
    document.getElementById('generateNews').addEventListener('click', () => {
        const headline = document.getElementById('headline').value;
        const content = document.getElementById('content').value;
        const newsOutput = document.getElementById('newsOutput');

        if (headline && content) {
            // Correctly use template literals to create HTML
            newsOutput.innerHTML = `<h2>${headline}</h2><p>${content}</p>`;
            // Store the generated news for future reading
            const generatedNews = JSON.parse(localStorage.getItem('generatedNews')) || [];
            generatedNews.push({ headline, content });
            localStorage.setItem('generatedNews', JSON.stringify(generatedNews));
        } else {
            alert('Please enter both headline and content.');
        }
    });
}

// Check if the current page is read-news.html
if (document.getElementById('newsList')) {
    const newsList = document.getElementById('newsList');
    
    // Display inbuilt funny fake news
    const inbuiltNews = [
        { headline: 'Cat Found Sleeping on Job', content: 'A local cat was found sleeping on the job today.' },
        { headline: 'Dog Eats Homework', content: 'A dog was accused of eating a student\'s homework today.' },
        { headline: 'Man Forgets Own Birthday', content: 'A man forgot his own birthday today.' }
    ];

    let newsHtml = '';

    // Load inbuilt news
    inbuiltNews.forEach(news => {
        // Correctly use template literals to create HTML
        newsHtml += `<div><h2>${news.headline}</h2><p>${news.content}</p></div>`;
    });

    // Load generated news from localStorage
    const storedNews = JSON.parse(localStorage.getItem('generatedNews')) || [];
    storedNews.forEach(news => {
        // Correctly use template literals to create HTML
        newsHtml += `<div><h2>${news.headline}</h2><p>${news.content}</p></div>`;
    });

    newsList.innerHTML = newsHtml;
}