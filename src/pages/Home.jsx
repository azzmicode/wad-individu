import { featureData } from "../data/features";

function Home() {
  return (
    <div className="p-6">
      <div className="text-green-500 font-bold text-xl mb-4">Home</div>

      {/* Contoh pemanggilan data dari features.js */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {featureData.map((item) => (
          <div key={item.id} className="p-4 border rounded-lg shadow-sm">
            <div className="text-3xl mb-2">{item.icon}</div>
            <h3 className="font-bold text-lg">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;