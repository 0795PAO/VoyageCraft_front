
import PreferenceForm from "@/components/preferenceForm/preferenceForm"

const HomePage = () => {
    return (
        <main className="flex flex-col justify-center gap-5  items-center min-h-screen bg-gray-100 p-4">
        <h1 className="text-4xl font-bold text-primary text-center">Welcome to TravelCraft</h1>
        <p className="text-black text-center">Discover your next adventure with TravelCraft. Tell us more about your interests and preferences.</p>
        <PreferenceForm/>
        </main>
    )
}
export default HomePage