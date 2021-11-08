function textTransform() {
    let belajar = "Saya beLajar bahaSa peMrograman deNgan khUsuk";
    let mancing = "Allen SedAng MemAncinG IkaN di SuNgai, DIA MEndapat IkAN GaBuS 3 Ekor dan LanGsuNg Dijual.";

    console.log(belajar.toLowerCase());
    console.log(belajar.toUpperCase());
    console.log(mancing.toLowerCase());
    console.log(mancing.toUpperCase());
}

function kodeAscii() {
    let kalimat = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
    let index1 = kalimat.charCodeAt(0);
    let index2 = kalimat.charCodeAt(1);
    let index3 = kalimat.charCodeAt(2);
    let index4 = kalimat.charCodeAt(3);
    let index5 = kalimat.charCodeAt(4);
    let index6 = kalimat.charCodeAt(5);

    console.log(`${index1}-${index2}-${index3}-${index4}-${index5}-${index6}`);
}

textTransform();
kodeAscii();