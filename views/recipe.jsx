const React = require('react');
const PropTypes = require('prop-types');

class Recipe extends React.Component {
    render() {

      const actionURL = `/recipes/${this.props.recipeId}?_method=delete`;
      const editURL = `/recipes/${this.props.recipeId}/edit`;

        return (
            <div>
              <h3>{this.props.message}</h3>
              <h1>{this.props.recipe.title}</h1>
              <h3>Ingredients:</h3>
              <p>{this.props.recipe.ingredients}</p>
              <h3>Method:</h3>
              <p>{this.props.recipe.method}</p>
              <p><a href={editURL}>Click me to edit this recipe.</a></p>
              <p><form action={actionURL} method="POST">
                Click to delete recipe:<input type="submit" name="DELETE THIS RECIPE"/>
              </form></p>
            <p><a href="/recipes/add">Click me to add a new recipe</a></p>
            <p><a href="/recipes/">Click me to go back to the main list.</a></p>
            </div>
        );
    }
};

module.exports = Recipe;
