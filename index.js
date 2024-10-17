// const fabrics = ["Cotton", "Polyester", "Silk"]; // Dummy data
const form = document.getElementById('dataForm');
const fabricDropdown = document.getElementById('fabricName');
const chinaFabricSelect = document.getElementById('chinaFabricSelect');
const chinaFabricSelection = document.getElementById('chinaFabricSelection');
const majorFabric = document.getElementById('majorFabric');
const addFabricBtn = document.getElementById('addFabric');
const additionalFabrics = document.getElementById('additionalFabrics');
const formDataDisplay = document.getElementById('formDataDisplay');

// Populate Fabric Dropdown
fabrics.forEach(fabric => {
  const option = document.createElement('option');
  option.value = fabric;
  option.textContent = fabric;
  fabricDropdown.appendChild(option);
});

// Handle China Fabric Display
document.getElementById('chinaYes').addEventListener('change', () => {
  chinaFabricSelection.style.display = 'block';
  updateChinaFabricDropdown();
});

document.getElementById('chinaNo').addEventListener('change', () => {
  chinaFabricSelection.style.display = 'none';
  chinaFabricSelect.innerHTML = '';
});

function updateChinaFabricDropdown() {
  chinaFabricSelect.innerHTML = '';
  [...fabricDropdown.selectedOptions].forEach(option => {
    const clone = option.cloneNode(true);
    chinaFabricSelect.appendChild(clone);
  });
}

// Add More Fabrics
addFabricBtn.addEventListener('click', () => {
  const fabricSection = document.createElement('div');
  fabricSection.innerHTML = `
    <label>Fabric Name:</label>
    <select>${fabricDropdown.innerHTML}</select>
    <label>Per Piece Requirement:</label>
    <input type="number" step="0.1" min="0">
  `;
  additionalFabrics.appendChild(fabricSection);
});

// Submit Form
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  data.selectedFabrics = [...fabricDropdown.selectedOptions].map(opt => opt.value);
  formDataDisplay.textContent = JSON.stringify(data, null, 2);
});


// quantity button
const quantityInput = document.getElementById('quantity');
    const incrementBtn = document.getElementById('increment');
    const decrementBtn = document.getElementById('decrement');

    // Increment the quantity
    incrementBtn.addEventListener('click', () => {
      quantityInput.value = parseInt(quantityInput.value) + 1;
    });

    // Decrement the quantity (ensuring it doesn't go below 0)
    decrementBtn.addEventListener('click', () => {
      const currentValue = parseInt(quantityInput.value);
      if (currentValue > 0) {
        quantityInput.value = currentValue - 1;
      }
    });

    // search
    const searchBox = document.getElementById('searchBox');
    const resultsBox = document.getElementById('resultsBox');
    const resultsList = document.getElementById('resultsList');

    // Dummy data for search
    const fabrics = ['Cotton', 'Polyester', 'Silk', 'Wool', 'Linen', 'Nylon'];

    // Event listener for search input
    searchBox.addEventListener('input', function () {
      const query = searchBox.value.toLowerCase();
      const filteredFabrics = fabrics.filter(fabric => fabric.toLowerCase().includes(query));
      displayResults(filteredFabrics);
    });

    function displayResults(filteredFabrics) {
      resultsList.innerHTML = ''; // Clear previous results
      if (filteredFabrics.length > 0) {
        resultsBox.style.display = 'block'; // Show results box
        filteredFabrics.forEach(fabric => {
          const li = document.createElement('li');
          li.textContent = fabric;
          li.addEventListener('click', () => {
            searchBox.value = fabric; // Fill input with clicked item
            resultsBox.style.display = 'none'; // Hide results box
          });
          resultsList.appendChild(li);
        });
      } else {
        resultsBox.style.display = 'none'; // Hide results box if no matches
      }
    }

    // Hide results when clicking outside the search box
    document.addEventListener('click', (event) => {
      if (!event.target.closest('.search-container')) {
        resultsBox.style.display = 'none';
      }
    });

    // last
    document.querySelectorAll('input[name="china-fabric"]').forEach(radio => {
      radio.addEventListener('change', (event) => {
          const chinaSection = document.getElementById('china-fabric-section');
          if (event.target.value === 'yes') {
              chinaSection.style.display = 'block';
          } else {
              chinaSection.style.display = 'none';
          }
      });
  });