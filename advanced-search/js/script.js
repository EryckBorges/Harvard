    document.addEventListener("DOMContentLoaded", () => {
        const inputs = document.querySelectorAll(".all");
        const rangeInputs = document.querySelectorAll(".allType input");
        const searchButton = document.querySelector(".btn-advanced-search");

        function montarQuery() {
            const allWords = inputs[0].value.trim();
            const exactPhrase = inputs[1].value.trim();
            const anyWords = inputs[2].value.trim();
            const noneWords = inputs[3].value.trim();
            const rangeFrom = rangeInputs[0].value.trim();
            const rangeTo = rangeInputs[1].value.trim();

            let query = "";

            if (allWords) query += allWords + " ";
            if (exactPhrase) query += `"${exactPhrase}" `;
            if (anyWords) query += anyWords.split(" ").join(" OR ") + " ";
            if (noneWords) query += noneWords.split(" ").map(w => `-${w}`).join(" ") + " ";
            if (rangeFrom && rangeTo) query += `${rangeFrom}..${rangeTo}`;

            return query.trim();
        }

        function fazerPesquisa() {
            const query = montarQuery();
            if (query) {
                window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank");
            }
        }

        // Clique no botão
        searchButton.addEventListener("click", fazerPesquisa);

        // Enter em qualquer input
        document.querySelector(".content-form").addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                e.preventDefault(); // impede submit padrão
                fazerPesquisa();
            }
        });
    });
