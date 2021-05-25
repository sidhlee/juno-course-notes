//when the document is ready
$(document).ready(function () {
  //when the form submits
  $('form').submit(function (e) {
    e.preventDefault();

    //save the input from the users in variables
    const name = $("#name").val();
    const telephone = $("#telephone").val();
    const postalCode = $("#postalCode").val();
    const note = $("#note").val();

    //1. Validate that there is more than just spaces in the 'name' variable.

    //if the the name input is empty
    if (!name.trim()) {
      //show the name error message
      $("#nameError").show();
      return;
    }

    //2. Validate that the telephone variable is formatted as a telephone number (416 666 2737).

    const checkPhoneNumber = /^[0-9]{3}[-\s][0-9]{3}[-\s][0-9]{4}$/;
    
    // alternatively could be written as:
    // const checkPhoneNumber = /^\d{3}[\s]\d{3}[\s]\d{4}$/;
    // ^ starts at the beginning of the string
    // \d or [0-9] matches all digits
    // {3} looks at the preceding 3 characters
    // [/s] matches any white space!

    //if the telephone input is not a telephone number
    if (!checkPhoneNumber.test(telephone)) {
      //show the telephone error message
      $("#telError").show();
      return;
    }

    //3. Validate that the postal code is formatted as a postal code (M3M 1I3)

    const checkPostalCode = /^[a-z]{1}?[0-9]{1}?[a-z]{1}?[\s][0-9]{1}?[a-z]{1}?[0-9]{1}?$/gi;

    //^ start at the first character
    // [a-z] matches any alpha character
    // {1} match the one preceding character
    // [0-9] match only numeric characters...etc
    // $ end of string

    //if the postal code input is not a postal code
    if (!checkPostalCode.test(postalCode)) {
      //show the postal code error message
      $("#postalError").show();
      return;
    }

    //4. Return an array of these dietary restrictions found in the 'note' text: 'vegetatian', 'vegan', '(any) allergy', 'gluten free', 'paleo';

    const dietaryRestrictions = /(vegetarian)|(vegan)|([a-z]+ allergy)|(gluten free)|(paleo)/gi;
    // (vegan) checks a group of characters together
    // | indicates 'or'
    // [a-z]+ looks for the word allergy and matches any alpha characters before it
    // ig looks in the entire global scope and is case insensitive

    const restrictions = note.match(dietaryRestrictions);

    function fakeSubmit(order) {
      console.log('Here is the order:', order);
      $("body").html("<p>Thank you for your order!</p>");
    }

    fakeSubmit({ note, restrictions, telephone, postalCode, name });
  })
})
