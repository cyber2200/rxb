import { Cookies } from 'react-cookie';

export const t = (ph) => {
    const cookies = new Cookies()
    
    if (cookies.get('lang') === undefined) {
        cookies.set('lang', 'en', {path: '/'});
    }
    
    if (cookies.get('lang') === 'he') {
        let lang = {};
        lang['home'] = 'בית';        
        lang['login'] = 'כניסה למערכת';
        lang['logout'] = 'יציאה';
        lang['loading'] = 'טוען...';
        lang['lang_switclangd'] = 'שפה הוחלפה!';
        lang['language'] = 'שפה';
        lang['english'] = 'English';
        lang['hebrew'] = 'עברית';
        lang['signup'] = 'הרשמה';
        lang['email'] = 'דוא"ל';
        lang['password'] = 'סיסמה';
        lang['login_submit'] = 'כניסה';
        lang['full_name'] = 'שם מלא';
        lang['submit_signup'] = 'הרשמה';
        lang['OK'] = 'בוצע בהצלחה!';
        lang['wrong_user_or_password'] = 'שם משתמש או סיסמה שגויים';
        lang['page1'] = 'עמוד 1';
        lang['secured_home'] = 'דף בית מאובטח';
        lang['page2secured'] = 'דף 2 מאובטח';
        lang['not_found'] = 'לא נמצא...';
        lang['lang_switched'] = 'שפה הוחלפה';
        lang['connectivity_issues'] = 'נראה שיש בעית בחיבור';
        return lang[ph];
    } 
    
    if (cookies.get('lang') === 'en') {
        let lang = {};
        lang['home'] = 'Home';
        lang['login'] = 'Login';
        lang['logout'] = 'Logout';
        lang['loading'] = 'Loading...';
        lang['lang_switclangd'] = 'Language Switclangd!';
        lang['language'] = 'Language';
        lang['english'] = 'English';
        lang['hebrew'] = 'עברית';
        lang['signup'] = 'Signup';
        lang['email'] = 'Email';
        lang['password'] = 'Password';
        lang['login_submit'] = 'Login';
        lang['full_name'] = 'Full Name';
        lang['submit_signup'] = 'Sign up';
        lang['OK'] = 'OK';
        lang['wrong_user_or_password'] = 'Wrong user or password';
        lang['page1'] = 'Page 1';
        lang['secured_home'] = 'Secured Home';
        lang['page2secured'] = 'Page 2 secured';
        lang['not_found'] = 'Not found...';
        lang['lang_switched'] = 'Laguage Switched';
        lang['connectivity_issues'] = 'Connectivity Issues';
        return lang[ph];
    }
}