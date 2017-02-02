{
	selected_host: 'google.com',
	scan_for_host: {
		'yahoo.com': {
			is_fetching: true,
			did_invalidate: false,
			end_time: null,
  			grade: null,
  			hidden: false,
  			scan_id: 3234651,
  			score: null,
  			start_time: "Wed, 01 Feb 2017 09:08:48 GMT",
  			state: "PENDING",
  			tests_failed: 0,
  			tests_passed: 0,
  			tests_quantity: 12,
			result: {}
		},
		'reddit.com': {
			is_fetching: false,
			did_invalidate: false,
			end_time: "Wed, 01 Feb 2017 03:17:05 GMT",
			grade: "F",
			hidden: false,
			scan_id: 3232997,
			score: 20,
			start_time: "Wed, 01 Feb 2017 03:16:58 GMT",
			state: "FINISHED",
			tests_failed: 5,
			tests_passed: 7,
			tests_quantity: 12,
			result: {
				"content-security-policy": {
					"pass": false,
					"score_description": "Content Security Policy (CSP) header not implemented",
					"score_modifier": -25
				},
				"cookies": {
					"pass": true,
					"score_description": "No cookies detected",
					"score_modifier": 0
				}
			}
		}
	}
}