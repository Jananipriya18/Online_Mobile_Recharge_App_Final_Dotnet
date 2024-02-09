import { Blogmodel } from './blog.model';

describe('Blogmodel', () => {
  fit('BlogModel_should_create_instance', () => {
    const blog = new Blogmodel();
    expect(blog).toBeDefined();
    expect(blog instanceof Blogmodel).toBeTruthy();
  });

  fit('BlogModel_should_have_default_property_values', () => {
    const blog = new Blogmodel();
    expect(blog.BlogId).toBeUndefined();
    expect(blog.blogSubject).toBeUndefined();
    expect(blog.blogContent).toBeUndefined();
    expect(blog.authorName).toBeUndefined();
    expect(blog.blogCategory).toBeUndefined();
    expect(blog.Postedate).toBeUndefined();
  });

  fit('BlogModel_should_update_property_values_using_setters', () => {
    const blog = new Blogmodel();

    blog.BlogId = 1;
    blog.blogSubject = 'New Subject';
    blog.blogContent = 'New Content';
    blog.authorName = 'New Author';
    blog.blogCategory = 'New Category';
    blog.Postedate = new Date('2023-01-01');

    expect(blog.BlogId).toEqual(1);
    expect(blog.blogSubject).toEqual('New Subject');
    expect(blog.blogContent).toEqual('New Content');
    expect(blog.authorName).toEqual('New Author');
    expect(blog.blogCategory).toEqual('New Category');
    expect(blog.Postedate).toEqual(new Date('2023-01-01'));
  });
});
