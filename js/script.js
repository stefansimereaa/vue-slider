console.log('JS OK');
console.log('VUE OK',Vue);

//Estrapolo il metodo createapp
const { createApp } = Vue;

//Inizializzo l'app Vue
const app = Vue.createApp({
    name: 'Carousel',
    data() {
        return {
            autoplay: 0,
            currentIndex: 0,
            images: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ]
        };
    },
    computed: {

        // Controllo se l'index si trova alla prima immagine
        isFirst() {
            return this.currentIndex === 0;
        },
        // Controllo se l'index si trova all'ultima immagine
        isLast() {
            return this.currentIndex === this.images.length - 1;
        }
    },
    methods: {
        // Controlla il current index
        isCurrentIndex(index) {
            return this.currentIndex === index;
        },

        // Mostra la prima immagina settando il current index dell'array a 0
        goToFirst() {
            this.currentIndex = 0;
        },

        // Mostra l'ultima immagine settando il current index dell'array a -1
        goToLast() {
            this.currentIndex = this.images.length - 1;
        },

        // Pulsante per andare avanti nel carousello, se si trova all'ultima torna alla prima immagina del carousello
        goToNext() {
            this.isLast ? this.goToFirst() : this.currentIndex++;
        },

        
        // Pulsante per tornare indietro nel carousello, se si trova alla prima torna all'ultima del carousello
        goToPrev() {
            this.isFirst ? this.goToLast() : this.currentIndex--;
        },

        // Mostra l immagine cliccata dalle thumbnails
        setCurrentIndex(index) {
            this.currentIndex = index;
        },

        // Inizializza autoplay
        startAutoplay() {
            this.autoplay = setInterval(this.goToNext, 3000);
        },

        // Blocco autoplay
        stopAutoplay() {
            clearInterval(this.autoplay);
        },
    },
    mounted() {
        this.startAutoplay();
    }
});

//Monto nell'elemento HTML "radice"
app.mount('#root');