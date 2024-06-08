import Navigation from "../components/navigation";

export async function getServerSideProps(context) {
  // Fetch data from external API
  const id = context.query.id;
  // const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const res = await fetch(`http://localhost:3000/api/post?id=${id}`);
  const post = await res.json();
  // Pass data to the page via props
  return { props: { post } };
}
export default function Page({ post }) {
  console.log(post.content.length);
  return (
    <main>
      <div className="p-2 w-full text-white list-none flex flex-col items-center justify-center md:flex-row">
        {/* <div className="mx-1 md:mx-0 md:my-4 hidden md:block">
          <img
            id="Home"
            className="w-28"
            src="/tech-vave-dark-1-1@2x.png"
            alt=""
          />
        </div> */}
      </div>
      <div className="text-white flex flex-col item-center justify-center w-full pt-40">
        <img
          id="Home"
          className="w-28"
          src="/tech-vave-dark-1-1@2x.png"
          alt=""
        />

        <div className="flex flex-col items-center justify-center w-fit mt-12 bg-fuchsia-500 text-black">
          <div className="flex flex-col items-start justify-center w-1/2 -mt-48">
            <div className="flex items-center justify-around text-white">
              <li className="mx-2">{post.createdAt.slice(0, 10)}</li>
              <li className="mx-2">{post.links}google.com</li>
            </div>
            {/* <img src={post.image} alt="Image" /> */}
            <img
              src={"/dummy.jpg"}
              className="w-[420px] h-[480px] rounded"
              alt="Image"
            />
          </div>
          <div className="flex flex-col items-start justify-center w-1/2 -mt-4">
            <h1 className="font-[Impact] text-5xl" id="title">
              {post.title}
            </h1>
            {/* <p className="text-xl font-[NewsReader]">{post.content}</p> */}
            {/* <p className="text-xl font-[NewsReader]">
            {post.content.slice(0, 1199)} -
            </p> */}
            <p className="text-xl font-[NewsReader]">{post.content} -</p>
          </div>
          {/* <p className="selection:bg-fuchsia-900 text-xl font-[NewsReader] p-4">
          - {post.content.slice(1199)}
          </p> */}
        </div>
      </div>
    </main>
  );
}
