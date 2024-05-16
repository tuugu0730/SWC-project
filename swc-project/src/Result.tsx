import RestCard from "./components/RestaurantCard/RestCard"
import FilterCard from "./components/FilterCard/FilterCard"
import './styles/Result.css'
import Header from "./Header"
import Footer from "./Footer"

export default function Result(){
    return(
        <>
            <Header/>
            <main className="rslt-main-container">
                <FilterCard />
                <div className="fltr-bar">
                    <label>Filter</label>
                </div>
                <section className="rest-cards">
                    <h2 className="ttl-result">Хан-Уул Дүүрэг Дэх Солонгос Хоолны Газрууд</h2>
                    <span className="total-result">Хайлтын илэрц - 13</span>
                    <div>
                        <RestCard />
                        <RestCard />
                        <RestCard />
                        <RestCard />
                        <RestCard />
                    </div>
                </section>
            </main>
            <Footer />
        </>
        
    )
}