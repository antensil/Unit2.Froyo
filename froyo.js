document.getElementById('flavorForm').addEventListener('submit', function(event) {
  event.preventDefault();


  const input = document.getElementById('flavors').value;
  const flavors = input.split(',');

  // thsi is to Create an object to track flavor counts
  const flavorCounts = {};

  // Loop through array of flavors 
  flavors.forEach(flavor => {~
      flavor = flavor.trim();
      
      if (flavorCounts[flavor]) {
          flavorCounts[flavor]++;
      } else {
          flavorCounts[flavor] = 1;
      }
  });

  // This is to show flavor counts in the console
  console.table(flavorCounts);
});