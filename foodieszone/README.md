This project is of a food odering website that will allow you to order food online. 
Until now the concepts covered are props, components, JSX 

Config Driven UI: - controlling your ui using data using config, the config comes from backend for example on zomato the coupons at Dehradun or Delhi might be different and we need to display them on the carosel of our web app then is it possible to show it with different UI? will we need to create different UI for every location? ANSWER  IS NO, and here is the point where the config driven UI conmes into play where the UI depends on data coming from backend. We have written UI once now depending on the data coming from the backend the UI gets changed accordingly. 

Cloudinary: its a CDN (content delivery network) here swiggly puts all its images 

Why Key is required in map while rendering the component ? => the key is required because lets say we are rendering many restaurant cards like below

 {/* <RestaurantCard resData={resList[1]} />
        <RestaurantCard resData={resList[2]} />
        <RestaurantCard resData={resList[3]} />
        <RestaurantCard resData={resList[4]} />
        <RestaurantCard resData={resList[5]} />
        <RestaurantCard resData={resList[6]} />
        <RestaurantCard resData={resList[7]} />
        <RestaurantCard resData={resList[8]} />
        <RestaurantCard resData={resList[9]} />
        <RestaurantCard resData={resList[10]} /> 
*/}

after using map the above code becomes 

 {
    resList.map((restaurant) => (
            <RestaurantCard key={restaurant.id} resData = {restaurant}/>
))
}

but the question is why Key is used => so to answer this lets say we have 20 cards to be rendered and what if there is new card that needs to be added in between those cards (at fist position last or maybe in between) then in that case if we are not using the key then react will render all the cards again, because it does not know what acrds are already rendered and which one is newly added, but if we provide the key it will render only that particular card.

Can we use index as key? => yes we can use, but IT IS NOT RECOMMENDED WHY => 

{resList.map((restaurant, index) => ( 
            <RestaurantCard key={index} resData = {restaurant}/>
        ))} 

Using the array index as a key in React lists is generally discouraged, especially when the list items can change order, be added, or be removed. This is because React uses the key prop to identify which list items have changed, been added, or been removed, and to efficiently update the DOM.
Here's why using the index as a key can lead to problems:

1. Performance Issues:

When the order of items changes (e.g., sorting, adding/removing items in the middle), React cannot accurately identify which items have truly moved versus which are entirely new or removed.
This can lead to unnecessary re-renders of components, as React might re-create components instead of simply reordering them in the DOM, negatively impacting performance, especially in large lists.

2. State Management Problems:

If list items have internal state (e.g., input values, checkbox states), using the index as a key can cause this state to be associated with the wrong item after reordering or modifications.
For example, if you have a list of items with input fields and you reorder the list, the input values might "stick" to their original index, even though the actual item content has moved, leading to incorrect data display.

3. Unpredictable Behavior with Animations and Transitions:

Animations and transitions that rely on stable component identities can behave unexpectedly when index keys are used, as React might not be able to correctly track the elements during these operations.


