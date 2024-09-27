window.onload = function () {
    document.getElementById('alertButton').addEventListener('click', function() {
        const options = document.getElementsByName('options');
        let selectedOption = '';
        for (const option of options) {
            if (option.checked) {
                selectedOption = option.value;
                break;
            }
        }
        
        switch (selectedOption) {
            case 'Option 1':
                alert('Thank you pollinators!');
                break;
            case 'Option 2':
                alert('Nothing cuter than a baby hippo biting your leg');
                break;
            case 'Option 3':
                alert('Mexican food though, right?');
                break;
            case 'Option 4':
                alert('I hope you get some good rest tonight!');
                break;
            default:
                break;
        }
    });
};
