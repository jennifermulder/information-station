INSERT INTO user (username, email, password)
VALUES 
  ("Lernantino", "Lernantino@gmail.com", "password1234");

INSERT INTO post (title, post_url, user_id, created_at, updated_at)
VALUES 
  ("Taskmaster goes public!", "https://taskmaster/press", 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO comment (comment_text, user_id, post_id, created_at, updated_at)
VALUES 
  ("This is to test the comments!", 1, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
