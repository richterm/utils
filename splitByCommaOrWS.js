var R = require("ramda");

module.exports = R.pipe(
	R.defaultTo(""),
	R.invoker(1, "split")(/[,]\s*|\s+/),
	R.filter(
		R.complement(
			R.isEmpty
		)
	)
);
