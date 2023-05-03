+++
title = "Personal Projects are Important"
description = "Learning outside of a classroom setting is the best way to set yourself apart from applicants"
date = 2023-05-01

[taxonomies]
tags = ["talk"]
+++

In January, I landed an interview for an internship at Lenovo. I felt very confident going into the interview because I had a lot of experience with Java. But what I didn't expect was the interviewer asking me why didn't I have any projects listed on my GitHub profile. In hindsight, I realized that while I was busy honing my technical skills, I had overlooked the importance of showcasing my work to potential employers.

<!-- more -->

## Reflections

At first, I was disappointed and confused about not advancing to the technical interview. I thought that I failed the interview or answered a question wrong. Then, I tried to imagine if I was the interviewer and someone told me they had three years of experience with nothing to show for it, I would never hire that person.

Traditional education only takes you so far in the competitive job market for software engineering. To stand out, you need to have an edge over other applicants and the best way to do that is with your projects. Unfortunately, schools often overlook the importance of completing projects outside of the classroom so it is never encouraged. However, these projects are almost always the key to landing a job or internship.

After my interview with Lenovo, I committed to working on projects to not only demonstrate my skills but also to continue learning and growing as a developer.

### Building My Personal Website

Web development was not my forte as a developer, and I was lacking the necessary skills to build a personal website. However, I was determined to learn and started my journey with the static site generator [Zola](https://getzola.org). Initially, I struggled with CSS and HTML, but through trial and error, I began to grasp the basics. I found that simply editing values and experimenting with different elements it helped me to gain a better understanding. Looking back, I realized that I had been avoiding web development for too long, when in reality, it was much easier than I had initially thought.

### stats-on-discord

After my unsuccessful interview with Lenovo, I knew that I **needed** a Java project to showcase my skills. In February, I was playing Minecraft and realized how difficult it was to view the server statistics for all players. As a server owner, I had to manually search through a file to find each player's specific statistics. This problem sparked an idea for my next project 💡.

I had never created a Minecraft plugin before but it couldn't be that hard? It turns out with the help of some YouTube tutorials it was very easy.

In the past I had created Discord Bots so I had a very good understanding of how to integrate a bot into the plugin. Now, all I had to do is make the bot continually update a message with the statistics of the Minecraft server.

I then added some settings for people to configure the plugin. Now all that was left was to show people how to setup the plugin. I did not want all my documentation on Github and thus sparked an idea for my new project.

### Documentation

Developing documentation for my projects was a new challenge for me, especially since I had to make sure that it was easy to read and that it included styles for every possible element. Unlike my personal website, this project - now at [docs.cameron.rs](https://docs.cameron.rs) - required a lot of CSS work and attention to detail.

I spent a significant amount of time working on this documentation, but eventually, I managed to create a primitive version that served its purpose.

### sudoku-solver

I stumbled upon an idea for a coding project while mindlessly scrolling through TikTok. It was a Sudoku Solver, and I immediately knew that was the project I wanted to create. Not only would it provide me with a chance to get better at Rust, which I was trying to learn, but it also seemed like an exciting challenge.

The first obstacle I encountered was getting the grid to render correctly, and it took me a while to overcome some problems I had with [egui](https://github.com/emilk/egui). Eventually, I was able to create the GUI, but then I had to figure out how to solve the Sudoku puzzle itself.

I researched various approaches to solving Sudoku puzzles, and I was fascinated by the solutions that used bitwise operators to store the position of numbers. I decided to model my algorithm on this technique, using three `u128` integers and leveraging bitwise operators and bit masks to solve the puzzle.

It took me much longer than I anticipated to perfect my algorithm, and I spent at least five hours editing and tweaking it. But then, at 1 a.m., I made one change, and everything finally fell into place. It was a great feeling when my project finally worked! 🎉

## Conclusion

In this article, I wanted to share my thought process behind my personal projects and highlight why they are so essential for getting hired. As you may have seen from my examples, personal projects can be born from the most unexpected places - like a TikTok video or a Minecraft server problem. But these projects can be invaluable for demonstrating your skills and passion to potential employers.

I hope that by sharing my experiences, I've inspired you to start your own journey of learning outside the classroom. Remember, the most important thing is to find something that excites you and challenges you to learn new things. Whether it's creating a Sudoku solver or building a Discord bot, personal projects can open doors and help you take your career to new heights.
