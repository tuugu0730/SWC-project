import './styles/saved.css'
import ToggleSwitch from './components/ToggleSwitchButton/ToggleSwitch'
import FoodCard from './components/Foodcard/FoodCard'
import Header from "./Header"
import Footer from "./Footer"

export default function Saved(){
    return(
        <>
            <Header/>
            <main className="saved-container">
                    <ToggleSwitch />
                    <section className='saved-items'>
                        <FoodCard />
                        <FoodCard />
                        <FoodCard />
                        <FoodCard />
                        <FoodCard />
                        <FoodCard />
                        <FoodCard />

                    </section>
            </main>
            <Footer />
        </>
    )
}