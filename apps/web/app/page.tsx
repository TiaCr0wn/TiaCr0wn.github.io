import Image from "next/image";


export default function Home() {
      return (
        <section className="space-y-8">
          {/* Top bio and photo section */}
          <div className="flex flex-col items-center gap-4 mt-6">
            {/* Profile photo - replace src with your image path */}
            <Image
            src="/profile.jpg"
            alt="Tia Crown"
            width={128}   // same as w-32
            height={128}  // same as h-32
            className="rounded-full border-4 border-pink-200"
          />
            {/* Bio text */}
            <div className="text-center">
              <h1 className="text-3xl font-bold" style={{ color: "#e75480" }}>
                Hi, I&apos;m Tia Crown! 👋
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
