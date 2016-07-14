var _ = require('underscore');
var result = [];

$addCallback();
dpd.todos.get(_.extend(query, {
	$fields: {
		lastModified: 0
	}
})).then(function (data) {
	result = data;
	var creators = _.chain(data).pluck('creator').compact().value();
	if (creators.length === 0) return [];
	return dpd.users.get({
		id: {
			$in: creators
		}
	});
}).then(function (data) {
  setTimeout(function(){
    setResult({
      users: data,
      todos: result
    });
    $finishCallback();
    console.log("completed");
  }, 2000);
}).catch(function (err) {
	console.log(err);
  cancel("Unexpected", 500);
});
