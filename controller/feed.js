exports.getPosts = async (req, res, next) => {
    res.status(200).json({ posts: [{ title: 'first post', contect: 'this is the first post!' }] });
};

exports.createPost = async (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    // Create post in db
    res.status(201).json({
      message: 'Post created successfully!',
      post: { id: new Date().toISOString(), title: title, content: content }
    });
  };