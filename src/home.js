const HomePage = (function() {
    function generate() {
        // const hugPic = document.createElement('img');
        // hugPic.src = "./assets/hug.png";
        // hugPic.alt = "two people are hugging";
        // hugPic.id = "hug-pic";

        const question = document.createElement('p');
        question.id = "question";
        question.textContent = "Have you ever been eating pizza alone with a strong desire to get hugs?";

        // const answer = document.createElement('p');
        // answer.id = "answer";
        // answer.textContent = "We are going to solve your problem!";

        const description = document.createElement('p');
        description.id = "main-description";
        description.textContent = "Here at PizzaHug you can eat pizza and hug everybody you want.\
         Even if you don't eat pizza.";

        
        const homePageDiv = document.createElement('div');
        homePageDiv.id = "home-page";
        homePageDiv.classList.add("col-container");

        const nodes = {
            question,
            // answer,
            // hugPic,
            description,
        };

        for (const prop in nodes) {
            homePageDiv.appendChild(nodes[prop]);
        }

        return homePageDiv;

    }

    return {generate};
})();

export default HomePage;