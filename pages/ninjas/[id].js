export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  const paths = data.map((n) => {
    return {
      params: { id: n.id.toString() },
    };
  });

  return {
    paths,
    fallback: false, //will show 404 page if false
  };
};

// Nextjs will run this func for all the data (paths) returned above using params and context
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data = await res.json();
  return {
    props: { ninja: data },
  };
};

const Details = ({ninja}) => {
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
    </div>
  );
};

export default Details;
