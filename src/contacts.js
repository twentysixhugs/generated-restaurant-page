const Contacts = (function() {
    function generate() {
        const pageDiv = document.createElement('div');
        pageDiv.id = "contacts-page";
        pageDiv.classList.add("col-container");

        const container = document.createElement('div');
        container.classList.add('col-container');
        pageDiv.appendChild(container);

        const heading = document.createElement('h2');
        heading.textContent = "Contact us"
        container.appendChild(heading);

        const contacts = [
            {
                name: "Chef",
                email: "chef@example.com",
                phone: "+(000) 000-0000",
            },
            {
                name: "Waiter",
                email: "waiter@example.com",
                phone: "+(000) 000-0000",
            },
            {
                name: "Manager",
                email: "hugmanager@example.com",
                phone: "+(000) 000-0000",
            }
        ];

        for (const person of contacts)
        {
            container.appendChild(_makeContact(person));
        }

        return pageDiv;

    }

    function _makeContact(person) {
        const name = document.createElement('h3');
        name.textContent = person.name;

        const email = document.createElement('p');
        email.textContent = person.email;

        const phone = document.createElement('p');
        phone.textContent = person.phone;


        const container = document.createElement('div');
        container.appendChild(name);
        container.appendChild(email);
        container.appendChild(phone);

        return container;
    }

    return { 
        generate,
    }
})();

export default Contacts;