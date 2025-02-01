// Function to fetch data from Google Sheets
async function getPosts() {
  const res = await fetch(
    "https://script.google.com/macros/s/AKfycbybM6iANyP0BZVeFFoI3-ANWjzi5ci9khI-bDQFWmSnuRboGf1q1Z4BKCXpQtrz92_d/exec",
    { cache: "no-store" }
  ); // Disable caching for fresh data
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const posts = await getPosts(); // Fetch data directly

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Berita Terkini</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map(
          (post: {
            id: string;
            title: string;
            content: string;
            date: string;
          }) => (
            <div key={post.id} className="border p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-600">{post.content}</p>
              <p className="text-sm text-gray-400">{post.date}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}
