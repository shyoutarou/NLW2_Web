export function signInAPI(email: string, password:string,){

      return ({
        token: password+email, // that will be change ofc
        user: {
            email: email,
            password: password,
        },
    });
}