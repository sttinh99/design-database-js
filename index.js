/**
 * Thiết kế database cho 1 hệ thống quản lý thư viện sách, cho biết thư viện này có hàng trăm giá sách khác nhau, sách được để ở bất kì giá nào không theo danh mục nào.
 * Mỗi cuốn sách có 1 mã khác nhau.
 * Hệ thống cho phép đăng ký người dùng mới, một người có thể mượn nhiều sách khác nhau trong một khoảng thời gian hữu hạn.
 * Hệ thống có thể lưu lịch sử ai đã mượn sách nào, bắt đầu mượn từ bao lâu, trả lúc nào.
 * Hệ thống có lưu lại số ngày quá hạn tổng cộng của 1 người dùng, ví dụ sách A quá 2 ngày, sách B quá 3 ngày -> tổng 5 ngày
 */
var moment = require('moment');
var bookManagerSystem = [{
        bookShelves: 1,
    },
    {
        bookShelves: 2,
    }
]
var books = [
    { name: "Những đứa con của gió", price: "12$", id: 0, bookManagerSystem: 1, users: 0 },
    { name: "Cha giàu, cha nghèo", price: "15$", id: 1, bookManagerSystem: 1, users: 1 },
    { name: "Đắc nhân tâm", price: "20$", id: 2, bookManagerSystem: 1, users: 0 },
    { name: "HoloHala", price: "12$", id: 3, bookManagerSystem: 2, users: 1 },
    { name: "BoloBala", price: "15$", id: 4, bookManagerSystem: 2 },
    { name: "BalaBele", price: "20$", id: 5, bookManagerSystem: 2 },
]
var users = [{
        id: 0,
        name: "Nguyen Van A",
    },
    {
        id: 1,
        name: "Tran Van B",
    }
];
var history = [{
        users: 1,
        borrowDate: moment().format('YYYY MMMM DD'),
        dateBack: moment().add(10, "days").calendar(),
        bookManagerSystem: 1
    },
    {
        users: 0,
        borrowDate: moment().format('YYYY MMMM DD'),
        dateBack: moment().add(10, "days").calendar(),
        bookManagerSystem: 2
    }
];

// function profileBorrowBook(nameBook) {
//     var bookGiDoll = books.find(function(x) {
//         return x.name === nameBook;
//     });
//     var profile = users.filter(function(x) {
//         return bookGiDoll.users === x.id;
//     })
//     return profile;
// }
// console.log(profileBorrowBook("Những đứa con của gió"));
function sachNguoiMuon(name) {
    var nameGiDoll = users.find(function(item) {
        return item.name === name;
    });
    var backDate = history.filter(function(date) {
        return nameGiDoll.id === date.users;
    });
    console.log("Thông tin trả sách", backDate);
    var booksBorrow = books.filter(function(x) {
        return nameGiDoll.id === x.users;
    });
    return booksBorrow;
}
console.log(sachNguoiMuon("Nguyen Van A"));