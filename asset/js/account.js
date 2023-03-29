class Account {
    id
    userName
    passWord
    phoneNumber
    email

    constructor(id, userName, passWord, phoneNumber, email) {
        this.id = id;
        this.userName = userName;
        this.passWord = passWord;
        this.phoneNumber = phoneNumber;
        this.email = email
    }

    getId() {
        return this.id
    }

    setId(id) {
        this.id = id
    }

    getUserName() {
        return this.userName
    }

    setUserName(userName) {
        this.userName = userName
    }

    getPassWord() {
        return this.passWord
    }

    setPassWord(passWord) {
        this.passWord = passWord
    }

    getPhoneNumber() {
        return this.phoneNumber
    }

    setPhoneNumber(phoneNumber) {
        this.phoneNumber = phoneNumber
    }

    getEmail() {
        return this.email
    }

    setEmail(email) {
        this.email = email
    }
}

let accountArr = [];
let acountAdmin = new Account('01', 'ThaiNguyen', '666', '0666888999', 'nvt.689@gmail.com');
accountArr.push(acountAdmin)

