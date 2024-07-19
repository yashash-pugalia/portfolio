<script lang="ts">
  import { slide } from "svelte/transition";
  import "../../app.css";

  const work = [
    {
      company: "Haast",
      link: "https://www.haast.io/",
      date: "Aug 2023 - Present",
      location: "Canberra, Australia - Remote",
      desc: "Led the complete redesign of the web app using TailwindCSS and DaisyUI. Developed a PDF comparison tool with PDFKit and a workflow status board featuring drag-and-drop functionality (similar to Linear) .",
      stack: "Svelte · Tailwind/DaisyUI · JavaScript · Flask · PostgreSQL",
    },
    {
      company: "Realm Labs AI",
      date: "Jan 2023 - Jul 2023",
      location: "New York, United States - Remote",
      desc: "Built the product from the ground up, covering everything from authentication to a comic book creation tool with a drag-and-drop interface and AI-powered scene/character generation. Integrated with Printify and Stripe for merchandise sales, and developed a chat interface to interact with comic characters using Langchain and OpenAI's GPT-3.5 models.",
      stack:
        "Svelte/Kit · TypeScript · MongoDB · Prisma · Firebase/Google Cloud Platform (GCP) · Tailwind/DaisyUI",
    },
    {
      company: "Inflection Zone Lab",
      date: "Jun 2022 - Jul 2022",
      location: "Pune, India - Remote",
      link: "https://www.linkedin.com/company/inflection-zone-lab-private-limited",
      desc: "Provided mentorship on best practices and code quality. Contributed significantly to the foundation of a developer productivity/low-code tool. Refactored the codebase for the dashboard of one of their healthcare clients.",
      stack: "Svelte · TypeScript · Tailwind/SkeletonUI",
    },
  ];

  const projects = [
    {
      title: "Windows 11 in Svelte",
      link: "https://win11.yashash.dev/",
      github: "https://github.com/yashash-pugalia/win11-svelte",
      desc: "",
      date: "2022 - 2022",
    },
    {
      title: "Win11React",
      link: "https://win11.blueedge.me",
      github: "https://github.com/blueedgetechno/win11react",
      desc: "I was the lead Front-End contributor to this project which aims to simulate the windows 11 experience on the web. Used by 3.1M+ users, viewed 7.8M+ times in 2023. <p>Stack: React · Redux · CSS · GitHub-Actions.</p>",
      date: "2021 - 2022",
    },
  ];

  const testimonials = [
    {
      name: "Julie Zhuo",
      role: "Co-Founder @Sundial | Former VP Design @Facebook",
      quote:
        "Love your work! Especially your dedication to building with craft and creative exploration.",
    },
    {
      name: "Will Yoo",
      quote:
        "I want to say you're one of the most talented young engineers I've met, you make some engineers and even founders I've worked with look like amateurs. I highly encourage you to take risks, learn from these mistakes I've made, and do big things with your life. I'm always here to support you. Let's win together.",
      role: "Founder @Realm Labs AI",
    },
    {
      name: "Guillermo Rauch",
      role: "CEO @Vercel",
      quote:
        "Well played https://win11-svelte.vercel.app <br><br> Also: modern web browsers are engineering marvels",
      link: "https://x.com/rauchg/status/1656493176088150017",
    },
    {
      name: "Rich Harris",
      role: "Creator @Svelte",
      quote:
        "i love the 'build a pretend OS in svelte' trend that @puruvjdev started — kudos  @yashash_pugalia",
      link: "https://x.com/Rich_Harris/status/1657097805733715987",
    },
    {
      name: "Eric Simons",
      role: "CEO @StackBlitz",
      quote:
        "Great work on this @yashash_pugalia!, <br><br> One idea I had- you could even power the file system and standalone terminal app using the http://webcontainers.io api 👀",
      link: "https://x.com/ericsimons40/status/1656644824190308352",
    },
  ];

  const education = [
    {
      date: "2022 - 2026",
      degree: "Bachelor of Technology - B.Tech, Computer Science",
      school: "Bennett University",
      location: "Greater Noida",
    },
  ];

  const socials = [
    {
      name: "Discord",
      link: "https://discord.com/users/759823534100316200",
      linkDisplay: "yashash",
    },
    {
      name: "GitHub",
      link: "https://github.com/yashash-pugalia",
      linkDisplay: "yashash-pugalia",
    },
    {
      name: "Twitter",
      link: "https://twitter.com/yashash_pugalia",
      linkDisplay: "yashash_pugalia",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/yashash-pugalia",
      linkDisplay: "yashash-pugalia",
    },
    {
      name: "Email",
      link: "mailto:yashash1511@gmail.com",
      linkDisplay: "yashash1511@gmail.com",
    },
  ];

  let expandWork = false;
</script>

<main
  class="prose prose-sm prose-neutral mx-auto max-w-screen-md p-8 dark:prose-invert"
>
  <div class="flex justify-between gap-4">
    <div>
      <h1 class="font-bold">Yashash Pugalia</h1>
      <h2 class="font-normal tracking-wider">Software Developer</h2>
    </div>

    <img
      src="/me.jpg"
      alt="Yashash Pugalia"
      class="aspect-square w-20 rounded-full"
    />
  </div>

  <h2>Work Experience</h2>
  {#each work.slice(0, expandWork ? work.length : 2) as w}
    <div transition:slide>
      <div class="flex justify-between gap-2">
        <h3>
          <a href={w.link} target="_blank">{w.company}</a>
        </h3>
        <p class="mt-auto">{w.date}</p>
      </div>
      <p>{w.location}</p>
      <p>{w.desc}</p>
      <p>Stack: {w.stack}</p>
    </div>
  {/each}

  <button
    class="rounded border border-neutral-200 bg-neutral-100 px-2 py-1 dark:border-neutral-700 dark:bg-neutral-800"
    on:click={() => (expandWork = !expandWork)}
  >
    {expandWork ? "Show Less" : "Show More"}
  </button>

  <h2>Projects</h2>
  {#each projects as p}
    <div>
      <div class="flex justify-between gap-2">
        <h3 class="space-x-2">
          <a href={p.link} target="_blank">{p.title}</a>
          <a class="text-sm font-normal" href={p.github} target="_blank">
            (GitHub)
          </a>
        </h3>
        <p class="mt-auto">{p.date}</p>
      </div>

      <p>{@html p.desc}</p>
      {#if p.title === "Windows 11 in Svelte"}
        <p>Recreation of the Windows 11 desktop experience for the web.</p>
        <p>
          Nominated for "Fun Side Project of the Year" <a
            href="https://youtu.be/V3FzeG3OneI"
            target="_blank">JS Open Source Awards</a
          >
          2023, part of JSNation Conference.
        </p>
        <p>The project has gained attention from industry figures like :</p>
        <ul>
          <li>
            <a
              href="https://x.com/rauchg/status/1656493176088150017"
              target="_blank">Guillermo Rauch (CEO Vercel)</a
            >
          </li>
          <li>
            <a
              href="https://x.com/Rich_Harris/status/1657097805733715987"
              target="_blank">Rich Harris (Creator Svelte)</a
            >
          </li>
        </ul>
        <p>
          It has also been featured in notable blogs and newsletters such as :
        </p>
        <ul>
          <li>
            <a
              href="https://javascriptweekly.com/issues/638#:~:text=Fake-,Windows%2011,-in%20Svelte%20%E2%80%94%20This"
              target="_blank">JavaScript Weekly</a
            >
          </li>
          <li>
            <a
              href="https://svelte.dev/blog/whats-new-in-svelte-june-2023#:~:text=and%2075%20cells-,Windows%2011,-in%20Svelte%20attempts"
              target="_blank">Svelte's Monthly Newsletter</a
            >
          </li>
          <li>
            <a
              href="https://news.ycombinator.com/item?id=35896505"
              target="_blank">Hacker News</a
            >
          </li>
        </ul>
        <p>Stack: Svelte · JavaScript/TypeScript · CSS/Tailwind</p>
      {/if}
    </div>
  {/each}

  <h2>Testimonials</h2>
  <div
    class="not-prose flex w-full snap-x snap-mandatory gap-4 overflow-auto scroll-smooth"
  >
    <!-- .sort(() => Math.random() - 0.5) -->
    {#each testimonials as t}
      <a
        class="flex w-10/12 flex-none snap-center flex-col rounded border border-neutral-200 bg-neutral-100 p-4 dark:border-neutral-700 dark:bg-neutral-800"
        href={t.link}
        target="_blank"
      >
        <div class="mb-auto flex items-center justify-between gap-2">
          <h3 class="text-lg font-semibold text-black dark:text-white">
            {t.name}
          </h3>
          <p class="my-auto">{t.role}</p>
        </div>

        <blockquote
          class="mt-5 border-l-4 border-neutral-200 pl-4 dark:border-neutral-700"
        >
          <p
            class="font-medium italic text-black before:content-[open-quote] after:content-[close-quote] dark:text-white"
          >
            {@html t.quote}
          </p>
        </blockquote>
      </a>
    {/each}
  </div>

  <h2>Education</h2>
  {#each education as e}
    <div>
      <div class="flex justify-between gap-2">
        <h3>{e.school}</h3>
        <p class="mt-auto">{e.date}</p>
      </div>

      <p>{e.degree}</p>
    </div>
  {/each}

  <h2>Socials</h2>
  <div class="grid w-fit grid-cols-2 gap-2">
    {#each socials as c}
      <span>{c.name}: </span>
      <a href={c.link} target="_blank">{c.linkDisplay}</a>
    {/each}
  </div>
</main>
