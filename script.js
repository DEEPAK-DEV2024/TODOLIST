let btn = document.querySelector('button');
        btn.addEventListener('click', () => {
            let input = document.querySelector('input').value;

            if (input === "") {
                alert('Please fill input');
            } else {
                let li = document.createElement('li');
                li.textContent = input;

                // Create a delete button for the list item
                let deleteBtn = document.createElement('button');
                deleteBtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>'; // Set the button text

                deleteBtn.addEventListener('click', () => {
                    // When delete button is clicked, remove the parent list item
                    li.remove();
                });
                // Append the delete button to the list item
                li.appendChild(deleteBtn);

                // Append the new list item to the unordered list
                document.querySelector('ul').appendChild(li);
                // Clear the input field after adding the item to the list
                document.querySelector('input').value = '';
                document.querySelector('#clear-all').style.display = 'block';
            }
        });
        document.getElementById('clear-all').addEventListener('click', () => {
            // Remove all list items
            document.querySelector('ul').innerHTML = '';
            document.querySelector('#clear-all').style.display = 'none';
        });