## Iterate, Sort and Filter

AngularJS can filter, format, and sort data using the pipe | character. We can use filter as follow:
`{{ expression | filter }}`

#### Filter
There are several filters are available out of the box from Angular, such as currency: 
`{{ product.price | currency }}`

So if we have a product's price = 89.14, using currency filter will out put **$89.14**. The currency sign will be based on user geo location. But you can be more specific and pass symbol as an arrgument, like so:
`{{ product.price | currency:"USD$ " }}` this will out put **USD$ 89.14**

We can use filters with directives, controller and services. Here is an example with directives:

```
	<input type=“text” data-ng-model=“searchName” />
	<ul>     
		<li data-ng-repeat=“product in products | filter:searchName | orderBy:’name’” > {{ product.name }} </li>
	</ul>
```

In this example we say: *for each product in products object let’s filter the product based on what user types inside the model ‘searchName’ in other word, ‘filter by model value', after that do more filter and order each product alphabetically.*

But doing so, every time you types inside the model `searchName` automatically will filter the product and order it by name. But when you try it out you will notice that it’s not accurate because it shows any value contains what has been typed inside the model. In order to solve that and filter more accurately, we can pass the `name` property as an argument. Now we can filter based on the property name only, like so:

```
	<input type=“text” data-ng-model=“searchName.name” />
	.
	.
	.
	</ul>
```
#### Sort
We have seen how to order data by a property name such as `name`. Sometimes we need to sort these data as well. This can be done by passing the expression `sortBy` arugument to `orderBy` filter.

```
	<span>Filter: </span><input type="text" data-ng-model="searchName.name"/>
	<table>
	  <tr>
		<th data-ng-click="sortBy='name';reverse=!reverse">Name</th>
		<th data-ng-click="sortBy='origin';reverse=!reverse">Origin</th>
		<th data-ng-click="sortBy='price';reverse=!reverse">Price</th>
		<th data-ng-click="sortBy='created_at';reverse=!reverse">Date</th>
	</tr>
	<tr data-ng-repeat="product in products | filter:searchName | orderBy:sortBy:reverse">
	    <td>{{ product.name | lowercase }}</td>
		<td>{{ product.origin | uppercase }}</td>
		<td>{{ product.price | currency:"USD$ " }}</td>
		<td>{{ product.created_at | date:'longDate' }}</td>
	  </tr>
    </table>	
```

In our example, we added an expression called `sortBy` to the `orderBy` filter like so: `orderBy:sortBy`. When a header is been clicked, we need to sort that column and revers it each time it gets clicked.
To do so we pass that expression `sortBy` to `data-ng-click` directive that needs a property to sort it, which is `name`; and we add `reverse` which determines that sorting is Ascending or Descending, here we reversing the opposite of current sorting. 