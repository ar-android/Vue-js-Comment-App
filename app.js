new Vue({
	el:'#app',
	data: {
		formOpened: false,
		comment:[
			{
				name: 'Ahmad Sunandar',
				title: 'New Comment',
				desc: 'Description new comment'
			},
			{
				name: 'Ahmad Rosid',
				title: 'New Comment',
				desc: 'Description new comment'
			},
			{
				name: 'Ahmad Rosid',
				title: 'New Comment',
				desc: 'Description new comment'
			},
		]
	},

	methods: {
		showForm: function() {
			this.formOpened = true;
		},
		hideForm: function() {
			this.formOpened = false;
			this.clearData();
		},
		clearData: function(){
			this.newComment = {
				name: '',
				title: '',
				desc: ''
			}
		},
		addComment: function(){
			this.comment.push({
				name: this.newComment.name,
				title: this.newComment.title,
				desc: this.newComment.desc,
			});
			this.clearData();
			this.hideForm();
		},
		removeComment: function(comments){
			this.comment.$remove(comments);
		}
	},
});