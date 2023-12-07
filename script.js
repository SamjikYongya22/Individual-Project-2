document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const signupForm = document.getElementById('signup-form');
    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const userLevel = document.getElementById('userLevel').value;

        
        console.log('Signup:', { email, password, userLevel });
    });

    
    const mathCourses = [
        { title: 'Algebra Basics', level: 'elemetry', videoId: 'VIDEO_ID_1', image: 'algebra_basics.jpg' },
        { title: 'Geometry Fundamentals', level: 'highSchool', videoId: 'VIDEO_ID_2', image: 'geometry_fundamentals.jpg' },
        { title: 'Introduction to Calculus', level: 'highSchool', videoId: 'VIDEO_ID_3', image: 'calculus_intro.jpg' },
        { title: 'Pre-Algebra for Middle Schoolers', level: 'middleSchool', videoId: 'VIDEO_ID_4', image: 'pre_algebra.jpg' },
        { title: 'Trigonometry Explained', level: 'elemetry', videoId: 'VIDEO_ID_5', image: 'trigonometry.jpg' },
        { title: 'Statistics for High School Students', level: 'highSchool', videoId: 'VIDEO_ID_6', image: 'statistics.jpg' }
    ];

    
    window.searchCourses = function () {
        const searchLevel = document.getElementById('searchLevel').value;
        const courseListContainer = document.getElementById('courseList');

        
        const filteredCourses = searchLevel === 'all'
            ? mathCourses
            : mathCourses.filter(course => course.level === searchLevel);

        
        courseListContainer.innerHTML = '';
        if (filteredCourses.length === 0) {
            courseListContainer.innerHTML = '<p>No courses found for the selected level.</p>';
        } else {
            filteredCourses.forEach(course => {
                const courseDiv = document.createElement('div');
                courseDiv.classList.add('course');

                const videoEmbed = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${course.videoId}" frameborder="0" allowfullscreen></iframe>`;

                courseDiv.innerHTML = `
                    <h3>${course.title}</h3>
                    <img src="${course.image}" alt="${course.title}">
                    <div class="video-container">${videoEmbed}</div>
                `;

                courseListContainer.appendChild(courseDiv);
            });
        }
    };
});

