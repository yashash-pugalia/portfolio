<script lang="ts">
  import SvelteMarkdown from "svelte-markdown";
  import { slide } from "svelte/transition";
  import "../../app.css";
  import MarkdownLink from "./MarkdownLink.svelte";

  const work = [
    {
      collapsed: true,
      company: "Realm Labs AI",
      date: "Jan 2023 - Jul 2023",
      location: "New York, United States - Remote",
      desc: "Built the product from the ground up, covering everything from authentication to a comic book creation tool with a drag-and-drop interface and AI-powered scene/character generation. Integrated with Printify and Stripe for merchandise sales, and developed a chat interface to interact with comic characters using Langchain and OpenAI's GPT-3.5 models.",
      stack:
        "Svelte/Kit · TypeScript · MongoDB · Prisma · Firebase/Google Cloud Platform (GCP) · Tailwind/DaisyUI",
    },
    {
      collapsed: true,
      company: "Haast",
      link: "https://www.haast.io/",
      date: "Aug 2023 - Present",
      location: "Canberra, Australia - Remote",
      desc: "Led the complete redesign of the web app using TailwindCSS and DaisyUI. Developed a PDF comparison tool with PSPDFKit and a workflow status board featuring drag-and-drop functionality (similar to Linear) .",
      stack: "Svelte · Tailwind/DaisyUI · JavaScript · Flask · PostgreSQL",
    },
    // {
    //   collapsed: true,
    //   company: "Inflection Zone Lab",
    //   date: "Jun 2022 - Jul 2022",
    //   location: "Pune, India - Remote",
    //   link: "https://www.linkedin.com/company/inflection-zone-lab-private-limited",
    //   desc: "Provided mentorship on best practices and code quality. Contributed significantly to the foundation of a developer productivity/low-code tool. Refactored the codebase for the dashboard of one of their healthcare clients.",
    //   stack: "Svelte · TypeScript · Tailwind/SkeletonUI",
    // },
  ];

  const projects = [
    {
      collapsed: true,
      title: "Windows 11 in Svelte",
      link: "https://win11.yashash.dev/",
      github: "https://github.com/yashash-pugalia/win11-svelte",
      date: "2022 - 2022",
      previewImage: "https://win11.yashash.dev/demo.webp",
      stack: "Svelte · JavaScript/TypeScript · CSS/Tailwind",
      desc: `
Recreation of the Windows 11 desktop experience for the web.

Nominated for "Fun Side Project of the Year" [JS Open Source Awards](https://youtu.be/V3FzeG3OneI) 2023, part of JSNation Conference.

The project has gained attention from industry figures like :
- [Guillermo Rauch (CEO Vercel)](https://x.com/rauchg/status/1656493176088150017)
- [Rich Harris (Creator Svelte)](https://x.com/Rich_Harris/status/1657097805733715987)

It has also been featured in notable blogs and newsletters such as :
- [JavaScript Weekly](https://javascriptweekly.com/issues/638#:~:text=Fake-,Windows%2011,-in%20Svelte%20%E2%80%94%20This)
- [Svelte's Monthly Newsletter](https://svelte.dev/blog/whats-new-in-svelte-june-2023#:~:text=and%2075%20cells-,Windows%2011,-in%20Svelte%20attempts)
- [Hacker News](https://news.ycombinator.com/item?id=35896505)`,
    },
    {
      collapsed: true,
      title: "Win11React",
      link: "https://win11.blueedge.me",
      github: "https://github.com/blueedgetechno/win11react",
      previewImage: "https://win11.blueedge.me/img/home.jpg",
      date: "2021 - 2022",
      stack: "React · Redux · CSS · GitHub-Actions",
      desc: `I was the lead Front-End contributor to this project which aims to simulate the windows 11 experience on the web. Used by 3.1M+ users, viewed 7.8M+ times in 2023.`,
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
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

<main
  class="prose prose-sm prose-neutral mx-auto max-w-screen-md p-8 dark:prose-invert"
>
  <div class="flex justify-between gap-4">
    <div>
      <h1 class="font-bold">Yashash Pugalia</h1>
      <h2 class="font-normal tracking-wider">Software Developer</h2>
    </div>
    <img src="/me.jpg" alt="Yashash Pugalia" class="h-20 w-20 rounded-full" />
  </div>

  <h2>Work Experience</h2>
  {#each work as w}
    <div
      class="custom-hover-effect flex cursor-pointer justify-between gap-2"
      on:click={() => (w.collapsed = !w.collapsed)}
    >
      <h3>
        <a href={w.link} target="_blank">{w.company}</a>
      </h3>
      <p class="mt-auto">{w.date}</p>
    </div>
    {#if !w.collapsed}
      <p transition:slide={{ delay: 0 }}>{w.location}</p>
      <p transition:slide={{ delay: 100 }}>{w.desc}</p>
      <p transition:slide={{ delay: 200 }}>Stack: {w.stack}</p>
    {/if}
  {/each}

  <h2>Projects</h2>
  {#each projects as p}
    <div
      class="custom-hover-effect flex cursor-pointer justify-between gap-2"
      on:click={() => (p.collapsed = !p.collapsed)}
    >
      <h3 class="space-x-2">
        <a
          href={p.link}
          target="_blank"
          class="project-image [--mousePos:0]"
          style:--previewImage="url('{p.previewImage}')"
          on:mousemove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            e.currentTarget.style.setProperty("--mousePos", `${x}px`);
          }}
        >
          {p.title}
        </a>
        <a class="text-sm font-normal" href={p.github} target="_blank">
          (GitHub)
        </a>
      </h3>
      <p class="mt-auto">{p.date}</p>
    </div>

    {#if !p.collapsed}
      <div transition:slide>
        <SvelteMarkdown source={p.desc} renderers={{ link: MarkdownLink }} />
      </div>
      <p transition:slide={{ delay: 200 }}>Stack: {p.stack}</p>
    {/if}
  {/each}

  <h2>Testimonials</h2>
  <div
    class="not-prose flex w-full snap-x snap-mandatory gap-4 overflow-auto scroll-smooth"
  >
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
    <div class="flex justify-between gap-2">
      <h3>{e.school}</h3>
      <p class="mt-auto">{e.date}</p>
    </div>

    <p>{e.degree}</p>
  {/each}

  <h2>Socials</h2>
  <div class="grid w-fit grid-cols-2 gap-2">
    {#each socials as c}
      <span>{c.name}: </span>
      <a href={c.link} target="_blank">{c.linkDisplay}</a>
    {/each}
  </div>
</main>

<style lang="postcss">
  .custom-hover-effect {
    @apply relative;
  }
  .custom-hover-effect::before {
    @apply pointer-events-none absolute -inset-x-4 -inset-y-1 -z-10 mt-4 rounded bg-neutral-100 opacity-0 transition-all [content:''] dark:bg-neutral-800;
  }
  .custom-hover-effect:hover::before {
    @apply opacity-100;
  }

  .project-image {
    @apply relative;
  }
  .project-image::after {
    @apply pointer-events-none absolute left-1/2 h-40 w-[272px] -translate-y-full translate-x-[calc(-50%+var(--mousePos))] scale-50 rounded border-8 border-neutral-100 bg-contain bg-no-repeat opacity-0 transition-all duration-100 [background-image:var(--previewImage)] [content:''] dark:border-neutral-800;
  }
  .project-image:hover::after {
    @apply -translate-y-[calc(100%+1.5rem)] scale-100 opacity-100;
  }
</style>
