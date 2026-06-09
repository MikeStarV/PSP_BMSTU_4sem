import { AircraftCardComponent } from "../../components/aircraft-card/index.js";
import { AircraftPage } from "../aircraft/index.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }

    // Имитация базы данных ВС авиапарка
    getData() {
        return [
            {
                id: 1,
                tailNumber: "RA-73001",
                model: "Boeing 737-800",
                image: "https://images.unsplash.com/photo-1561152820-dc457fb89e3a?w=500&q=80",
                status: "Требуется ТО",
                badgeClass: "text-bg-danger"
            },
            {
                id: 2,
                tailNumber: "RA-32005",
                model: "Airbus A320neo",
                image: "https://images.unsplash.com/photo-1557401622-cfb09536eb3a?w=500&q=80",
                status: "Готов к вылету",
                badgeClass: "text-bg-success"
            },
            {
                id: 3,
                tailNumber: "RA-77012",
                model: "Boeing 777-300ER",
                image: "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?w=500&q=80",
                status: "На обслуживании",
                badgeClass: "text-bg-warning"
            }
        ];
    }

    get pageRoot() {
        return document.getElementById('main-page');
    }

    getHTML() {
        return `
            <div class="container mt-4">
                <h1 class="mb-4">Мониторинг ТО Авиапарка</h1>
                <div id="main-page" class="d-flex flex-wrap gap-3"></div>
            </div>
        `;
    }

    clickCard(e) {
        const cardId = e.target.dataset.id;
        const aircraftPage = new AircraftPage(this.parent, cardId);
        aircraftPage.render();
    }

    render() {
        this.parent.innerHTML = '';
        const html = this.getHTML();
        this.parent.insertAdjacentHTML('beforeend', html);

        const data = this.getData();
        data.forEach((item) => {
            const card = new AircraftCardComponent(this.pageRoot);
            card.render(item, this.clickCard.bind(this));
        });
    }
}
