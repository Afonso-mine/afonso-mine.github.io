fetch("projects.json")
.then(r => r.json())
.then(projects => {

    const container = document.getElementById("projects");

    projects.forEach(project => {

        container.innerHTML += `
            <div class="card">

                <h2>${project.name}</h2>

                <p>${project.description}</p>

                <pre><code class="language-${project.language}">
${project.code}
                </code></pre>

                <div class="buttons">
                    <a href="${project.github}" target="_blank">
                        View Repository
                    </a>
                </div>

            </div>
        `;

    });

    hljs.highlightAll();

});
