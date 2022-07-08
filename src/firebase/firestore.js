import { db, collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, getDoc, auth, query, where, orderBy, arrayUnion, updateDoc } from "./init.js"

/* SAVE POST DATA */
export const saveTask = contentPost => {
    addDoc(collection(db, "task"), {
        ...contentPost,
        created: new Date(),
        useruid: auth.currentUser.uid,
        username: auth.currentUser.displayName,
        like: 0,
        dislike: 0,
        userlikes: [],
        userdislike: []
    })
};

/* GET POST DATA */
export const getTask = () => {
    return getDocs(collection(db, "task"))
};

/* DETECTING CHANGES ON DATA POST */
export const getTaskUser = (callback) => {
    const q = query(
        collection(db, "task"),
        where("useruid", "==", auth.currentUser.uid),
        orderBy('created', 'desc')
    );
    return(onSnapshot(q, (callback)))
};

/* GET DATA FROM POST (Profile)*/
export const getTaskUser2 = () => {
    const q = query(
        collection(db, "task"),
        where("useruid", "==", auth.currentUser.uid),
        orderBy('created', 'desc')
    );
    return(getDocs(q));
};

/* show post in feed */
// export const onGetTask2 = () => {
//     const q = query(
//         collection(db, "task"),
//         orderBy('created', 'desc')
//     );
//     return(getDocs(q));
// };

/*Order feed post*/
export const onGetTask = (callback) => {
    const q = query(
        collection(db, "task"),
        orderBy('created', 'desc')
    );
    return(onSnapshot(q, (callback)))
};


export const deleteTask = (id) => deleteDoc(doc(db, "task", id));

export const getTasks = (id) => getDoc(doc(db, "task", id));

export const UpdateTask = (id, data) => {
    const postDocRef = doc(db, "task", id);
    return updateDoc(postDocRef,data)
};


