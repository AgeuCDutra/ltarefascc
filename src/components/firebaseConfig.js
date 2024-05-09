import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth'; 


const firebaseConfig = {
  apiKey: "AIzaSyDgfH6gOFX394H5SQqQmWgezhoqDkhJ6qc",
  authDomain: "autenticacao-bbb28.firebaseapp.com",
  databaseURL: "https://autenticacao-bbb28-default-rtdb.firebaseio.com/",
  projectId: "autenticacao-bbb28",
  storageBucket: "autenticacao-bbb28.appspot.com",
  messagingSenderId: "64748979595",
  appId: "1:64748979595:web:fa4fe567c31b49c9629b8e",
    measurementId: "Q"
}

// Inicialize o Firebase
// Delete o Firebase App existente, se existir
if (firebase.apps.length) {
  firebase.apps[0].delete()
    .then(() => {
      console.log('Firebase App excluído com sucesso');
      // Inicialize o Firebase com a nova configuração
      firebase.initializeApp(firebaseConfig);
    })
    .catch(error => {
      console.error('Erro ao excluir o Firebase App:', error);
    });
} else {
  console.log('Nenhum Firebase App encontrado para excluir');
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
