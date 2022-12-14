get = id => document.getElementById(id)
toDegree = num => num * 180 / Math.PI
toRadian = num => num * Math.PI / 180
sin = angle_in_degrees => Math.sin(toRadian(angle_in_degrees))
asin = sin_value_to_radians => toDegree(Math.asin(sin_value_to_radians))
function calculateNew() {
    var [a, b, c, A, B, C] = ["a", "b", "c", "A", "B", "C"].map(name_of_variable => Number(get(name_of_variable).value));
    console.log(a, b, c, A, B, C);

    var sides = [[a, sin(A), "a", "alpha"], [b, sin(B), "b", "beta"], [c, sin(C), "c", "gamma"]] //the side, its corresponding angle's sin value, and the two other sides


    //do we only have angles? that's not enough
    if (!a && !b && !c) {
        console.log("not enough info")
        return;
    }

    //do we have all three sides?
    if (a && b && c) {
        console.log("got all three sides")
        var [A, B, C] = [a, b, c].map(side => Math.acos((a**2 + b**2 + c**2 - (2 * side**2)) / (2 * b * c * a / side)))
        console.log(toDegree(A), toDegree(B), toDegree(C))
        return [a, b, c, A, B, C]
    }

    //all angles and sides are calculated with this formula, also avoids abstracts the process of looking if the variable is falsey
    function basic_form(self, first_top, second_top, bottom) {
        if (first_top && second_top && bottom) {
            return first_top * second_top / bottom
        } else return self
    }

    for (var i = 0; i < 4; i++) {
        sides.forEach((side, index) => {
            //getting the other two side and angle pairs from a clone
            sides_copy = [...sides]
            sides_copy.splice(index, 1)
            var [other_1, other_2] = sides_copy
            //console.log(side, other_1, other_2)
            
            //if we have the other two angles then we can calculate the third one
            //generating new angle by 180 - the other two
            if (!side[1] && other_1[1] && other_2[1]) {
                new_degree = 180 - asin(other_1[1]) - asin(other_2[1])
                sides[index][1] = sin(new_degree)
            }

            for (other of [other_1, other_2]) {
                console.log(other)
                //generating the new sides
                sides[index][0] = basic_form(side[0], sin(side[1]), other[0], sin(other[1]))
                //generating the new angles
                if (!sides[index][1]) {
                    sides[index][1] = basic_form(side[1], side[0], other[1], other[0])
                }
            }
        })
        console.log([...sides])
    }
    //printing the values
    kerekites = num => Math.round(num*100)/100
    sides.forEach(side => {
        console.log(side[2], kerekites(side[0]), side[3], 
        kerekites(asin(side[1])), "vagy", kerekites(180 - asin(side[1])))
    })
    
    o1.innerHTML = "a oldal: " + kerekites(sides[0][0])
    o2.innerHTML = "b oldal: " + kerekites(sides[1][0])
    o3.innerHTML = "c oldal: " + kerekites(sides[2][0])
    sz1.innerHTML = "alpha szög: " + kerekites(asin(sides[0][1])) + " vagy " + kerekites(180 - asin(sides[0][1]))
    sz2.innerHTML = "beta szög: " + kerekites(asin(sides[1][1])) + " vagy " + kerekites(180 - asin(sides[1][1]))
    sz3.innerHTML = "gamma szög: " + kerekites(asin(sides[2][1])) + " vagy " + kerekites(180 - asin(sides[2][1]))
}