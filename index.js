// In terms of user experience, your shopping list app must allow users to:

// enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
// check and uncheck items on the list by clicking the "Check" button
// permanently remove items from the list


$(function() {
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();

        const listItem = $(event.currentTarget.find('input[name="shopping-list-entry"]'));



    })
})