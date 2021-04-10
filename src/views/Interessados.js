import React from 'react'




export default function Interessados({navigation , route}) {


    const [initializing, setInitializing] = useState(true)
    const [user, setUser] = useState()
    const [users,setUsers] = useState()


    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }



    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        Carregar_users()
        return subscriber; // unsubscribe on unmount

    }, [auth().currentUser],[]);



    async function Carregar_users() {

        if(auth().currentUser) {

        }
        else {
            
        }


    }
}