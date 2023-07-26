import { Film as GqlFilm } from "./gql/generated";

const Film = (props: {
  /* `film` property has the correct type 🎉 */
  film: GqlFilm;
}) => {
  return (
    <div>
      <h3>{props.film.title}</h3>
      <p>{props.film.releaseDate}</p>
    </div>
  );
};

export default Film;
