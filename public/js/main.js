function user_grants() {
    $.get('/profile/user', function(userRole) {
        //console.log(userRole);
        $('#links').append(genLinks(userRole));
    });
}

user_grants();


function genLinks(userRole) {
    var links = "";
    console.log(userRole);

    console.log(userRole.role.links);
    for (var r in userRole.role.links) {

        links += `<a href="${r}"" class="btn" > ${userRole.role.links[r]}</a>`
    }

    return links;
}
