// Função para buscar os produtos
async function fetchProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    return products.slice(0, 10); // Retorna os 10 primeiros produtos
}

// Função para exibir os produtos na tabela
function displayProducts(products) {
    const tableBody = document.getElementById('product-table-body');
    let grandTotal = 0; // Inicializa o total geral

    products.forEach(product => {
        const quantity = 150; // Defina a quantidade de itens
        const total = (product.price * quantity).toFixed(2); // Calcula o total
        grandTotal += parseFloat(total); // Adiciona ao total geral

        const row = `
            <tr>
                <td>${product.id}</td>
                <td>${product.title}</td>
                <td>R$ ${product.price.toFixed(2)}</td>
                <td>${product.description.substring(0, 50)}...</td>
                <td>${product.category}</td>
                <td><img src="${product.image}" alt="${product.title}" class="product-image"></td>
                <td class="itens">${quantity}</td>
                <th class="itens">R$ ${total}</th> <!-- Exibe o total -->
            </tr>
        `;
        tableBody.innerHTML += row;
    });

    // Adiciona a linha do total geral
    const totalRow = `
        <tr>
            <td colspan="6" style="text-align: right;"><strong>Total Geral:</strong></td>
            <td class="itens"><strong>R$ ${grandTotal.toFixed(2)}</strong></td>
            <td></td>
        </tr>
    `;
    tableBody.innerHTML += totalRow; // Adiciona a linha do total geral
}

// Chama as funções para buscar e exibir os produtos
fetchProducts().then(displayProducts);