// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, 
    collection, 
    getDocs, 
    getDoc, 
    doc, 
    where, 
    query, 
    addDoc, 
} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQSpunpWrIeuIghKgDkugswNIOH29PDhs",
  authDomain: "tienda-smart-acaf2.firebaseapp.com",
  projectId: "tienda-smart-acaf2",
  storageBucket: "tienda-smart-acaf2.appspot.com",
  messagingSenderId: "66282559015",
  appId: "1:66282559015:web:150c4be72c3c75324fa002"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export async function getItems() {
    const collectionRef = collection(firestore, "Products")
    let snapshotDb = await getDocs(collectionRef)

    let dataDocs = snapshotDb.docs.map( documento => {
        let docFormateado = { ...documento.data(), id: documento.id}
        return docFormateado
    })
    return dataDocs
}

export async function getSingleItem(idParams){
    const docRef = doc(firestore, "Products", idParams)
    const docSnapshot = await getDoc(docRef)

    return { ...docSnapshot.data(), id: docSnapshot.id}
}

export async function getItemsByCategory(catParams){
    const collectionRef = collection(firestore, "Products")
    const queryCategory = query(collectionRef, where("category", "==", catParams))
    const misDocsInfo = await getDocs(queryCategory)

    let dataDocs = misDocsInfo.docs.map(coleccion => {
        let docFormateado = { ...coleccion.data(), id: coleccion.id }
        return docFormateado
    })
    return dataDocs
}

export async function createBuyOrder(orderData) {
    const collectionRef = collection(firestore, "Orders")
    let newOrder = await addDoc(collectionRef, orderData)
    return newOrder.id
}

/*DATABASE TO FIRESTORE*/
export async function exportDataToFirestore() {
    const data = [
        {
            title: "TCL 20 SE 256 GB nuit black 6 GB RAM",
            price: 61.999,
            stock: 10,
            oferr: true,
            discount: 10,
            category: "Smartphones",
            detail: "Descubr?? infinitas posibilidades para tus fotos con las 3 c??maras principales de tu equipo. Pon?? a prueba tu creatividad y jug?? con la iluminaci??n, diferentes planos y efectos para obtener grandes resultados.",
            img: "/images/products/D_NQ_NP_2X_685173-MLA49653440486_042022-F.webp"
        },
        {
            title: "Moto G22 128 GB cosmic black 4 GB RAM",
            price: 46.999,
            stock: 10,
            oferr: false,
            discount: 10,
            category: "Smartphones",
            detail: "Descubr?? infinitas posibilidades para tus fotos con las 3 c??maras principales de tu equipo. Pon?? a prueba tu creatividad y jug?? con la iluminaci??n, diferentes planos y efectos para obtener grandes resultados.",
            img: "/images/products/D_NQ_NP_2X_854793-MLA50262132804_062022-F.webp"
        },
        {
            title: "Moto G60s 128 GB aqua 6 GB RAM",
            price: 69.799,
            stock: 10,
            oferr: true,
            discount: 25,
            category: "Smartphones",
            detail: "Descubr?? infinitas posibilidades para tus fotos con las 3 c??maras principales de tu equipo. Pon?? a prueba tu creatividad y jug?? con la iluminaci??n, diferentes planos y efectos para obtener grandes resultados.",
            img: "/images/products/D_NQ_NP_2X_966438-MLA48112811958_112021-F.webp"
        },
        {
            title: "Samsung Galaxy A32 128 GB awesome blue 4 GB RAM",
            price: 75.999,
            stock: 10,
            oferr: false,
            discount: 10,
            category: "Smartphones",
            detail: "Descubr?? infinitas posibilidades para tus fotos con las 3 c??maras principales de tu equipo. Pon?? a prueba tu creatividad y jug?? con la iluminaci??n, diferentes planos y efectos para obtener grandes resultados.",
            img: "/images/products/D_NQ_NP_2X_878776-MLA48428092348_122021-F.webp"
        },
        {
            title: "Moto G52 128 GB charcoal grey 6 GB RAM",
            price: 59.999,
            stock: 10,
            oferr: true,
            discount: 25,
            category: "Smartphones",
            detail: "Descubr?? infinitas posibilidades para tus fotos con las 3 c??maras principales de tu equipo. Pon?? a prueba tu creatividad y jug?? con la iluminaci??n, diferentes planos y efectos para obtener grandes resultados.",
            img: "/images/products/D_NQ_NP_2X_698891-MLA50817265580_072022-F.webp"
        },
        {
            title: "Samsung Galaxy A22 5G 128 GB gray 4 GB RAM",
            price: 59.999,
            stock: 10,
            oferr: false,
            discount: 10,
            category: "Smartphones",
            detail: "Fotograf??a profesional en tu bolsillo. Descubr?? infinitas posibilidades para tus fotos con las 3 c??maras principales de tu equipo. Pon?? a prueba tu creatividad y jug?? con la iluminaci??n, diferentes planos y efectos para obtener grandes resultados.",
            img: "/images/products/D_NQ_NP_2X_863356-MLA48697556226_122021-F.webp"
        },
        {
            title: "Quantum Q20 Dual SIM 128 GB blanco 4 GB RAM",
            price: 39.999,
            stock: 10,
            oferr: false,
            discount: 10,
            category: "Smartphones",
            detail: "Fotograf??a profesional en tu bolsillo. Descubr?? infinitas posibilidades para tus fotos con las 3 c??maras principales de tu equipo. Pon?? a prueba tu creatividad y jug?? con la iluminaci??n, diferentes planos y efectos para obtener grandes resultados.",
            img: "/images/products/D_NQ_NP_2X_940194-MLA50185436946_062022-F.webp"
        },
        {
            title: "TCL 20B 64 GB space gray 4 GB RAM",
            price: 38.799,
            stock: 10,
            oferr: true,
            discount: 30,
            category: "Smartphones",
            detail: "Fotograf??a profesional en tu bolsillo. Descubr?? infinitas posibilidades para tus fotos con las 3 c??maras principales de tu equipo. Pon?? a prueba tu creatividad y jug?? con la iluminaci??n, diferentes planos y efectos para obtener grandes resultados.",
            img: "/images/products/D_NQ_NP_2X_685173-MLA49653440486_042022-F (1).webp"
        },
        {
            title: "Apple AirPods Pro con estuche de carga MagSafe",
            price: 37.890,
            stock: 30,
            oferr: false,
            discount: 10,
            category: "Accesorios",
            detail: "Los AirPods Pro tienen Cancelaci??n Activa de Ruido para que disfrutes de un sonido inmersivo. Modo Ambiente para que escuches todo lo que pasa a tu alrededor. Resistencia al agua y al sudor(1). Y un ajuste personalizable para que los uses con comodidad todo el d??a.",
            color: "Blanco",
            img: "/images/products/D_NQ_NP_2X_631240-MLA48697556561_122021-F.webp"
        },
        {
            title: "CARGADOR MAGSAFE - APPLE",
            price: 20.999,
            stock: 15,
            oferr: true,
            discount: 25,
            category: "Accesorios",
            detail: "Cargador innalambrico MAGSAFE para dispositivos Apple",
            color: "Blanco",
            img: "/images/products/MKT0219ETC.webp"
        },
        {
            title: "CGamepad Joystick Bluetooth",
            price: 3.479,
            stock: 3,
            oferr: false,
            discount: 10,
            category: "Accesorios",
            detail: "Wireless Bluetooth Gamepad Control Joystick y controlador de juegos",
            color: "Negro",
            img: "/images/products/D_NQ_NP_657068-MLA51279518208_082022-O.webp"
        },
        {
            title: "Funda Tpu Transparente Reforzada Para Samsung A02s A12 A32",
            price: 699,
            stock: 14,
            oferr: true,
            discount: 25,
            category: "Accesorios",
            detail: "El vendedor no incluy?? una descripci??n del producto",
            color: "Transparente",
            img: "/images/products/D_NQ_NP_2X_961618-MLA46485064055_062021-F.webp"
        },
        {
            title: "Brazo De Suspensi??n Celular De Mesa Ajustable Ideal Streming",
            price: 3.699,
            stock: 14,
            oferr: false,
            discount: 10,
            category: "Accesorios",
            detail: "Brazo ajustable y cabezal 360: Dise??ado con brazos articulados met??licos y estables ensamblados con tres tornillos que ofrecen solidez y resistencia. La barra de direcci??n est?? libre para poder ajustarla en el ??ngulo deseado. Est?? terminado en una r??tula giratoria de 360 que permite manejar el smartphone o tablet en el ??ngulo preferido.",
            color: "Negro",
            img: "/images/products/D_NQ_NP_2X_819379-MLA50144098393_052022-F.webp"
        },
        {
            title: "Ariculares in-ear Motorola Earbuds 2 blanco",
            price: 1.399,
            stock: 30,
            oferr: false,
            discount: 10,
            category: "Accesorios",
            detail: "En la calle, en el colectivo o en la oficina, ten?? siempre a mano tus auriculares Motorola y ??escapate de la rutina por un rato! Vas a poder disfrutar de la m??sica que m??s te gusta y de tus podcasts favoritos cuando quieras y donde quieras. Al ser in-ear, mejoran la calidad del audio y son de tama??o peque??o para poder insertarse en tu oreja. Son ideales para acompa??arte a la hora de hacer ejercicio mientras te sumerg??s en el mejor sonido envolvente.",
            color: "Blanco",
            img: "/images/products/D_NQ_NP_2X_780004-MLA41188556823_032020-F.webp"
        },
        {
            title: "Funda Ringke Fusion Original Para iPhone 13 13 Pro Max",
            price: 3.470,
            stock: 6,
            oferr: false,
            discount: 10,
            category: "Accesorios",
            detail: "El vendedor no incluy?? una descripci??n del producto.",
            color: "Transparente",
            img: "/images/products/D_NQ_NP_2X_883959-MLA48844259091_012022-F.webp"
        },
        {
            title: "Funda De Silicona Con Felpa Slim Antideslizante Para Samsung",
            price: 990,
            stock: 18,
            oferr: false,
            discount: 10,
            category: "Accesorios",
            detail: "Funda de silicona liquida slim con felpa interna para evitar marcas en la parte trasera, proteja su tel??fono con mejor funda de silicona para Samsung , excelente durabilidad, calidad y resistencia.",
            color: "Negro",
            img: "/images/products/D_NQ_NP_2X_978916-MLA51326104925_082022-F.webp"
        },
        {
            title: "Apple iPad (9?? generaci??n) 10.2 Wi-Fi 256GB - Gris espacial",
            price: 119.259,
            stock: 2,
            oferr: true,
            discount: 10,
            category: "Tablets",
            detail: "Lleno de potencia, muy f??cil de usar y vers??til. El nuevo iPad viene con una espectacular pantalla Retina de 10.2 pulgadas, el potente chip A13 Bionic y una c??mara frontal ultra gran angular con Encuadre Centrado. Adem??s, es compatible con el Apple Pencil y el Smart Keyboard. Con el iPad, har??s de todo como si nada. Y por menos de lo que imaginas.",
            color: "Negro",
            memory: "256 GB",
            img: "/images/products/D_NQ_NP_2X_858857-MLA47871010540_102021-F.webp"
        },
        {
            title: "Tablet Samsung Galaxy Tab A7 Lite SM-T220 8.7'' 32GB gris y 3GB de memoria RAM",
            price: 34.899,
            stock: 9,
            oferr: true,
            discount: 10,
            category: "Tablets",
            detail: "Esta tablet Samsung es la compa??era ideal, con capacidad de sobra para cada una de tus actividades. El dise??o delgado, compacto y port??til, con facilidad para sostener en una mano, lo convierte en una combinaci??n perfecta de rendimiento y versatilidad.",
            color: "Negro",
            memory: "32 GB",
            img: "/images/products/D_NQ_NP_2X_765874-MLA47146197629_082021-F.webp"
        },
        {
            title: "Tablet Pcbox Flash PCB-T104 10.1'' 16GB azul oscuro y 2GB de memoria RAM",
            price: 22.879,
            stock: 0,
            oferr: false,
            discount: 10,
            category: "Tablets",
            detail: "Esta tablet Samsung es la compa??era ideal, con capacidad de sobra para cada una de tus actividades. El dise??o delgado, compacto y port??til, con facilidad para sostener en una mano, lo convierte en una combinaci??n perfecta de rendimiento y versatilidad.",
            color: "Azul Oscuro",
            memory: "16 GB",
            img: "/images/products/D_NQ_NP_2X_807963-MLA44546363809_012021-F.webp"
        },
        {
            title: "Tablet Gadnic Fenix Phone TAB0024D 10.1'' con red m??vil 32GB blanca y 2GB de memoria RAM",
            price: 35.699,
            stock: 0,
            oferr: true,
            discount: 20,
            category: "Tablets",
            detail: "Esta tablet Samsung es la compa??era ideal, con capacidad de sobra para cada una de tus actividades. El dise??o delgado, compacto y port??til, con facilidad para sostener en una mano, lo convierte en una combinaci??n perfecta de rendimiento y versatilidad.",
            color: "Blanco",
            memory: "32 GB",
            img: "/images/products/D_NQ_NP_2X_773176-MLA48689975208_122021-F.webp"
        },
    ]

    const collectionRef = collection(firestore, "Products")

    for (let item of data){
        const newDoc = await addDoc(collectionRef, item)
    }
}

export default firestore
