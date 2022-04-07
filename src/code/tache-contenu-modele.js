export function formatterTimestamp(timestamp){
    const date = new Date(timestamp * 1000);
    const jour = date.getDate();
    const moisListe = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
    const mois = moisListe[date.getMonth()]
    const annee = date.getFullYear();
    let temps = [
        date.getHours(),
        date.getMinutes(),
        date.getSeconds()
    ]
    for (let i=0; i < temps.length; i++) {
        if(temps[i] < 10){
            temps[i] = "0" + temps[i];
        }
    }
    return `${jour} ${mois} ${annee} à ${temps[0]}:${temps[1]}:${temps[2]}`;
}