 export default function Home() {
      return (
        <section className="space-y-8">
          {/* Top bio and photo section */}
          <div className="flex flex-col items-center gap-4 mt-6">
            {/* Profile photo - replace src with your image path */}
            <img
              src="/profile.jpg" // <-- Upload your photo as 'profile.jpg' in /public
              alt="Tia Crown"
              className="w-32 h-32 rounded-full border-4 border-pink-200 shadow-lg object-cover"
            />
            {/* Bio text */}
            <div className="text-center">
              <h1 className="text-3xl font-bold" style={{ color: "#e75480" }}>
                Hi, I'm Tia Crown! 👋
              </h1>
              <p className="mt-2 text-pink-700 font-medium">
                Physics student at The University of Edinburgh.<br />
                I love data, maths, and creative problem-solving.
              </p>
            </div>
          </div>
    
          {/* Existing welcome text */}
          <div className="space-y-2 text-center">
            <p className="text-gray-600">
              Welcome to my portfolio! Use the menu above to explore my projects and learn more about me.
            </p>
          </div>
        </section>
    
    /*
    Notes:
    - The photo uses '/profile.jpg'. Place your image in the /public folder.
    - The bio is styled with rosy pink and centered.
    - You can change the bio text and image path as you like!
    - Next step: Add cool, clickable banners for About, Experience, and Projects.
    */
  );
}
