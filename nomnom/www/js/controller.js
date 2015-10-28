var controller = function() {
	var controller = {
		self: null,
		initialize: function() {
			self = this;
			this.bindEvents();
			self.renderSearchView();
		},

		bindEvents: function() {
			$('.tab-button').on('click', this.onTabClick);
		},

		onTabClick: function(e) {
			e.preventDefault();
			if ($(this).hasClass('active')) {
				return;
			}

			var tab = $(this).data('tab');
			if (tab === '#profile-tab') {
				self.renderProfileView();
			} else {
				self.renderSearchView();
			}
		},

		renderProfileView: function() {
			$('.tab-button').removeClass('active');
			$('#profile-tab-button').addClass('active');

			var $tab = $('tab-content');
			$tab.empty();
			$("#tab-content").load("./views/profile-view.html", function(data) {
				$('#tab-content').find('#profile-form').on('create', restaurantList.createList()); // probably change this line
			});
		},

		renderSearchView: function() {
			$('.tab-button').removeClass('active');
			$('.search-tab-button').addClass('active');

			var $tab = $('tab-content');
			$tab.empty();
			$("#tab-content").load("./views/search-view.html", function(data) {
				// do something
			});
		}
	}

	controller.initialize();
	return controller;
}