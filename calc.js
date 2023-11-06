let crr='';
        document.querySelector('#display').value=crr;
        let k=0;
        function evaluateExpression(){
            var expression=document.getElementById('display').value;
            var result;
            result=eval(expression);
            document.querySelector('h1').innerText=`Result : ${result}`;
            crr = "";
        }