function check() {
    const company_name = document.getElementById('company_name');
    const company_people = document.getElementById('company_people');
    const company_numbers = document.getElementById('company_numbers');
    const company_phonenumber = document.getElementById('company_phonenumber');
    const user_id = document.getElementById('user_id');
    const user_pw = document.getElementById('user_pw');
    const user_pw2 = document.getElementById('user_pw2');
    
    const company_check = 'input[name="company_checks"]:checked';
    const company_selected = document.querySelector(company_check);
    const agree_check = 'input[name="agree_checks"]:checked';
    const agree_selected = document.querySelector(agree_check);
    const process_check = 'input[name="process_checks"]:checked';
    const process_selected = document.querySelector(process_check);

    if(company_name.value.length == 0) {
        alert("상호를 입력해주세요.");
        return false;
    }
    if(company_people.value.length == 0) {
        alert("대표자를 입력해주세요.");
        return false;
    }
    if(company_numbers.value.length == 0) {
        alert("사업자등록번호를 입력해주세요.");
        return false;
    }
    if(company_phonenumber.value.length == 0) {
        alert("대표전화를 입력해주세요.");
        return false;
    }
    if(user_id.value.length == 0) {
        alert("아이디를 입력해주세요.");
        return false;
    }
    if(user_pw.value.length == 0) {
        alert("비밀번호를 입력해주세요.");
        return false;
    }
    if(user_pw.value.length < 6) {
        alert("비밀번호는 6글자 이상 입력해주세요.");
        return false;
    }
    if(user_pw2.value != user_pw.value) {
        alert("비밀번호가 일치하지 않습니다.");
        return false;
    }

    if(company_selected == null) {
        alert("분류를 선택해주세요.");
        return false;
    }

    if(agree_selected == null) {
        alert("개인정보동의를 선택해주세요.");
        return false;
    }

    if(process_selected == null) {
        alert("처리방법를 선택해주세요.");
        return false;
    }

    return true;
}