var R = require("ramda");

module.exports = R.curry(function evolveTmpl(evol, obj) {
	return R.into(
		{},
		R.map(
			R.pipe(
				R.of,
				R.ap([
					R.pipe(
						R.prop("key"),
						R.partialRight(
							R.call,
							obj
						)
					),
					R.pipe(
						R.prop("value"),
						R.partialRight(
							R.call,
							obj
						)
					)
				]),
				R.apply(R.createMapEntry)
			)
		),
		evol
	);
});
