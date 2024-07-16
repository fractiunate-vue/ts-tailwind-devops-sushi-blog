/* eslint-disable */
import http from '@/http-common';
import { BlogPostItem } from '@/types/BlogPosts';

class BlogPostService {
  getAll(): Promise<any> {
    return http.get('/posts');
  }

  get(id: any): Promise<any> {
    return http.get(`/posts/${id}`);
  }

  create(article: BlogPostItem): Promise<any> {
    return http.post('/posts', JSON.stringify(article));
  }

  publishArticle(article_id: string): Promise<any> {
    return http.post(`/publish/${article_id}`);
  }

  update(id: any, data: any): Promise<any> {
    return http.put(`/posts/${id}`, data);
  }

  delete(id: any): Promise<any> {
    return http.delete(`/posts/${id}`);
  }

  deleteAll(): Promise<any> {
    return http.delete('/posts');
  }

  findByTitle(title: string): Promise<any> {
    return http.get(`/posts?title=${title}`);
  }
  findByTags(tags: Array<string>): Promise<any> {
    return http.get(`/posts?tags=${tags.reduce((acc, tag) => `${acc}+${tag}`)}`);
  }
}

export default new BlogPostService();
