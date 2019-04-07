# typesafe-sanity: Typesafe Sanity manager for queries

Typesafe utilities and wrappers for cached queries to sanity. 

### Get started
First,  create a Sanity Client
```
import {createSanityClient, SanityClientAPI}  from "@konsus/sanity"

const client: SanityClientAPI  = createSanityClient({
    projectId: "k0dlbavy",
    dataset: "production",
    useCdn: !sanityPreview,
    withCredentials: sanityPreview,
})
```

Last, mount the reducer to the rootReducer
```
import {SanityReducer} from  "@konsus/sanity";
{
    ...,
    sanity: SanityReducer
}
```


### How to use 

This is how you create a SanityQuery
```
import { createSanityQuery } from "@konsus/sanity";
import Product from "../api/Product";

interface Product{
  key: string;
  name: string;
  shortName?: string;
  iconImage: any;
  category: string;
  premium: boolean;
  rate: number;
  propertyRules?: Array<ProductPropertyRule>;
  defaultDeadlineSelector: OWDeadlineSelector;
  typicalTimeUsage: string;
}

export default createSanityQuery<{ category: string }, Array<Product>(`
*[_type == 'service' && category == $category] | order(order) {
    rate,
    defaultDeadlineSelector,
    premium,
    propertyRules,
    iconImage,
    category,
    shortName,
    name,
    description,
    typicalTimeUsage,
    "key": key.current
}`);
```

You can now easily perform a cached query to sanity that will be stored in redux. Here is an example of the container-function:
```
import {fetchSanityQuery, getSanityQueryResult} from "@konsus/sanity";

const mapStateToProps = (state, props) => {
  const OWState = props.selectors.owSelector(state);
  const sanityState = props.selectors.getSanityState(state);
  return {
    ...,
    # Access the result from Redux
    optionsResult: getSanityQueryResult(OWAllServicesByCategoryQuery, {category: OWState.category.key}, sanityState),
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    ...,
    # Checks the redux state for the query, and if not found, fetching Sanity
    fetchOptions: (category:string) => fetchSanityQuery(OWAllServicesByCategoryQuery, {category}, {sanityClient: props.sanityClient, getState: props.getSanityState}),
  };
}

```

You can now easily apply type safety on the query result that is passed to the component.
```
import {SanityResultFromQuery} from "@konsus/sanity"
interface ComponentProps{
    optionResults: SanityResultFromQuery<typeof OWAllServicesByCategoryQuery>;
}

class Component extends React.Component<ComponentProps, any>{
    render(){
        console.log(optionResults)
        return <div>
            Status: {optionResults.status)<br/>
            Body: {JSON.stringify(optionResults.body))<br/>
        </div>
    }
}
```

output:
```
{
    status: [SanityResultStatus.NONE, SanityResultStatus.FETCHING, SanityResultStatus.SUCCESS],
    body: [{
        {id: 344, code: "new-presentation-design", ...},
        {id: 344, code: "improve-presentation", ...},
    }]
}

```
            






