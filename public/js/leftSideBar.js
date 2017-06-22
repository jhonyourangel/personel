var leftSideBarJSON2 = [
    { id: "administration", text: "Administration", icon: "fa fa-home", parentNode: "none" },
    { id: "profiles", text: "Profiles", icon: "", parentNode: "administration" }
];

var treeJSON = {
    id: "administration",
    text: "Administration",
    icon: "fa fa-home",
    children: [{
        id: "profiles",
        text: "Profiles",
        children: []
    }]
}


function generateTree(obj) {
    var sideBarHTML = "";
    if ((typeof obj) === "object") {
        sideBarHTML += `<li id="${obj.id}"><a><i class="${obj.icon}"></i> ${obj.text} <span class="fa fa-chevron-right"></span></a>`;

        if (obj.children.length > 0) {
            sideBarHTML += `<ul class="nav child_menu">`;
            obj.children.forEach(function(node) {
                sideBarHTML += generateTree(node);
            });
            sideBarHTML += `</ul>`;
        }
        sideBarHTML += "</li>";
    }
    return sideBarHTML;
}

// this ads only the admin part, to add more sections 
function initTree() {
    $("#sidebarContainer").html(generateTree(treeJSON));
}


initTree();
