import { useQuery } from "@apollo/client";

import "./App.css";
import Film from "./Film";
import {
  AllFilmsWithVariablesQueryDocument,
  AllFilmsWithVariablesQueryQueryVariables,
} from "./gql/generated";

function App() {
  // `data` and `variables` are typed!
  const variables: AllFilmsWithVariablesQueryQueryVariables = { first: 10 };
  const { data } = useQuery(AllFilmsWithVariablesQueryDocument, {
    variables: variables,
  });
  return (
    <div className="App">
      {data && (
        <ul>
          {data.allFilms?.edges?.map(
            (e, i) => e?.node && <Film film={e?.node} key={`film-${i}`} />
          )}
        </ul>
      )}
    </div>
  );
}

export default App;
