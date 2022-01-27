const Homepage = (function() {
    function generate() {
        const question = document.createElement('p');
        question.id = "question";
        question.textContent = "Have you ever been eating pizza alone with a strong desire to get hugs right now?";


        const description = document.createElement('p');
        description.id = "main-description";
        description.textContent = "Here at PizzaHug you can eat pizza and hug everybody you want.\
        \nEven if you're not eating pizza.";

        
        const homePageDiv = document.createElement('div');
        homePageDiv.id = "home-page";
        homePageDiv.classList.add("col-container");

        homePageDiv.appendChild(question);
        homePageDiv.appendChild(description);

        return homePageDiv;

    }

    return {generate};
})();

export default Homepage;