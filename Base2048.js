(function($) // début du pluggin
{
    $.fn.game2048 = function() //function game2048 du pluggin
    {
        // génération du tableau (table, tr, td) vide (rempli de zéros)
        function generate_map()
        {
            var table = $('<table></table>');
            for (var y = 0; y < 4; y++)
            {
                var ligne = $('<tr></tr>');
                for (var x = 0; x < 4; x++)
                {
                    var cases = $('<td>0</td>').attr('x', x).attr('y', y).attr('nbr', 0);
                    ligne.append(cases);
                }
                table.append(ligne);
            }
            return table;
        }

        // génération d'un certain nombre de cases (argument cases) aléatoirement placées sur les cases d'attribut 'nbr=0'
        function generate_case(cases)
        {
            for (var i = 0; i < cases; i++)
            {
                var x = Math.floor((Math.random() * 4));
                var y = Math.floor((Math.random() * 4));
                var value =  2 * (Math.floor((Math.random() * 2) + 1));
                var elem = $('[x="' + x + '"][y="' + y + '"][nbr=0]');

                if (value === 4 && Math.random() > 0.5)
                    value = 2;
                if (!elem[0])
                    generate_case(1);
                else {
                    elem.attr('nbr', value);
                    elem.text(value);
                }
            }
        }

        function get_destination (x, y, direction){
            switch(direction) {
                case ('up'):
                    y++
                case ('down'):
                    y--
                case ('left'):
                    x--
                case ('right'):
                    x++
            }

            return $('[x="' + x + '"][y="' + y + '"][nbr= "' + n + '"]');
        }

        function move_case(x, y, n) {
            var elem = $('[x="' + x + '"][y="' + y + '"][nbr= "' + n + '"]');
            var destination = $('[x="' + x + '"][y="' + y + '"][nbr= "' + n + '"]');
            var destination = get_destination();
            if(n > 0) {
                destValue = destination.attr('nbr')
                finalValue = parseInt(destValue) + n
                destination.attr('nbr', finalValue.toString())
            }

            console.log(elem)
        }

        function move_cases () {
            var elements = $("td");

            elements.forEach(elem => {
                var x = elem.attr('x')
                var y = elem.attr('y')
                var nbr = elem.attr('nbr')
            })
            
        }

        // fonction de gestion des évenements (appuie de touches)
        $('html').keydown(function(event) {
            switch (event['key']) {
                case 'ArrowLeft':
                    move_cases()
                    // var elements = 
                    // move_case(0, 1, 4)
                    let range = [0, 1, 2, 3]
                    // insérer algo move left

                    // var elem = $('[x="' + x + '"][y="' + y + '"][nbr=0]');
                    // les cases remplies se déplacent vers la gauche
                    // génération d'une nouvelle case remplie de 2 ou 4
                    // si la destination de la case qui bouge contient le même chiffre (2 ou 4 ou 8)
                        // l'additionner
                        //sion la placer à côté
                    console.log("Left");
                    break;
                case 'ArrowUp':
                    // insérer algo move up
                    console.log("Up");
                    break;
                case 'ArrowRight':
                    // insérer algo move right
                    console.log("Right");
                    break;
                case 'ArrowDown':
                    // insérer algo move down
                    console.log("Down");
                    break;
            }
        });

        // début du code lancé
        $(this).append(generate_map()); // génération du tableau vide
        generate_case(2); // génération aléatoire de deux cases pleines (2 ou 4)
    }

})(jQuery); // fin du pluggin