var ICellView = {
    id: "1",
    userImage: "../public/images/userPic.jpeg",
    username: "Ion Utale",
    msgDate: "3 min ago",
    message: "Film festivals used to be do-or-die moments for movie makers. They were where..."
}

function cellHTML(id, userImage, username, msgDate, message) {
    return `<li id="${id}">
              <a>
                <span class="image"><img src="${userImage}" alt="Profile Image" /></span>
                <span>
                    <span>${username}</span>
                <span class="time">${msgDate}</span>
                </span>
                <span class="message">${message}</span>
              </a>
            </li>`;
}

var cellsArray = [ICellView, ICellView, ICellView];

function prepareICellViewHTML() {
    var html = "";
    cellsArray.forEach(function(cell) {
        html += cellHTML(cell.id, cell.userImage, cell.username, cell.msgDate, cell.message);
    });
    html += `<li>
                <div class="text-center">
                    <a>
                        <strong>See All Alerts</strong>
                        <i class="fa fa-angle-right"></i>
                    </a>
                </div>
            </li>`;
    return html;
}

function render() {
    $('#menu1.msg_list').html(prepareICellViewHTML());
}

render();
