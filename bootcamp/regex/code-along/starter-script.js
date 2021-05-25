//when the document is ready
$(document).ready(function () {
  //when the form submits
  $('form').submit(function (e) {
    e.preventDefault();

    //save the input from the users in variables
    const name = $('#name').val();
    const telephone = $('#telephone').val();
    const postalCode = $('#postalCode').val();
    const note = $('#note').val();

    // 1. Validate that there is more than just spaces in the 'name' variable.
    if (!name.trim()) {
      $('#nameError').show();
      // return;
    }
    //2. Validate that the telephone variable is formatted as a telephone number (416 666 2737).
    const phoneNumberRegex = /^\d{3} \d{3} \d{4}$/;

    //3. Validate that the postal code is formatted as a postal code (M3M 1I3)
    const postalRegex = /^\w\d\w[-\s]?\d\w\d/i;
    console.log(postalRegex.test(postalCode));
    if (!postalRegex.test(postalCode)) {
      $('#postalError').show();
      // return;
    }

    //4. Return an array of these dietary restrictions found in the 'note' text: 'vegetatian', 'vegan', '(any) allergy', 'gluten free', 'paleo';
    const dietaryRestrictions =
      /vegetarian|vegan|paleo|gluten free|[a-z]+ allergy/gi;
    const result =
      'this is a vegetarian vegan bee allergy free workspace'.match(
        dietaryRestrictions
      );
    console.log(result); //  ["vegetarian", "vegan", "bee allergy"]
  });
});
