<script lang="ts">
  import SvelteMarkdown from "svelte-markdown";
  import { slide } from "svelte/transition";
  import "../app.css";
  import MarkdownLink from "./MarkdownLink.svelte";
  import TestimonialList from "./TestimonialList.svelte";

  const work = [
    {
      collapsed: false,
      company: "Realm Labs AI",
      date: "2022 - 2023",
      location: "New York, United States - Remote",
      desc: "Built the product from the ground up, covering everything from authentication to a comic book creation tool with a drag-and-drop interface and AI-powered scene/character generation. Integrated merchandise sales and payments into the platform. Created an AI chat interface to interact with comic characters.",
      stack:
        "Svelte/Kit · TypeScript/JavaScript · MongoDB/Prisma · Firebase/GCP · Tailwind/DaisyUI · Stripe · Auth.js · Langchain/GPT-3.5",
    },
    {
      collapsed: false,
      company: "Haast",
      link: "https://www.haast.io/",
      date: "2023 - Present",
      location: "Canberra, Australia - Remote",
      desc: "Led the visual overhaul of the web app. Developed a PDF comparison tool and a workflow status board featuring drag-and-drop functionality (similar to Linear).",
      stack:
        "Svelte · JavaScript · Flask · PostgreSQL/SQLAlchemy · TailwindCSS · DaisyUI · PSPDFKit",
    },
  ];

  const projects = [
    {
      collapsed: false,
      title: "Windows 11 in Svelte",
      link: "https://win11.yashash.dev/",
      github: "https://github.com/yashash-pugalia/win11-svelte",
      date: "2021 - 2022",
      previewImage: "https://win11.yashash.dev/demo.webp",
      stack: "Svelte · JavaScript/TypeScript · CSS/Tailwind",
      desc: `Recreated the Windows 11 desktop experience for the web.

Featured in:
- [JSNation Open Source Awards](https://youtu.be/V3FzeG3OneI), nominated for 'Fun Side Project of the Year' 2023
- [JavaScript Weekly](https://javascriptweekly.com/issues/638#:~:text=Fake-,Windows%2011,-in%20Svelte%20%E2%80%94%20This)
- [Hacker News](https://news.ycombinator.com/item?id=35896505), [Trending #1](https://web.archive.org/web/20230511060851/https://news.ycombinator.com/)

Additionally, I was the [lead front-end contributor](https://github.com/blueedgetechno/win11react) to [Win11React](https://win11.blueedge.me), which garnered **7.8M views** in 2023.`,
    },
    {
      collapsed: false,
      title: "Prosper Mint",
      link: "https://prosper-mint.yashash.dev",
      github: "https://github.com/yashash-pugalia/prosper-mint",
      previewImage: "https://prosper-mint.yashash.dev/demo.webp",
      date: "2023 - 2024",
      stack:
        "Svelte/Kit · JavaScript/TypeScript ·Tailwind/Daisy · PostgreSQL/DrizzleORM · Lucia Auth ",
      desc: "Prosper Mint is a personal finance app for budgeting, expense tracking, and goal setting. It offers a responsive interface, allowing users to securely manage their finances with seamless authentication.",
    },
  ];

  const testimonials = [
    {
      name: "Will Yoo",
      quote:
        "I want to say you're one of the most talented young engineers I've met, you make some engineers and even founders I've worked with look like amateurs. I highly encourage you to take risks, learn from these mistakes I've made, and do big things with your life. I'm always here to support you. Let's win together.",
      role: "Founder @Realm Labs AI",
    },
    {
      name: "Julie Zhuo",
      role: "Co-Founder @Sundial | Former VP Design @Facebook",
      quote:
        "Love your work! Especially your dedication to building with craft and creative exploration.",
    },
    {
      name: "Guillermo Rauch",
      role: "CEO @Vercel",
      quote:
        "Well played https://win11-svelte.vercel.app <br> Also: modern web browsers are engineering marvels",
      link: "https://x.com/rauchg/status/1656493176088150017",
    },
    {
      name: "Rich Harris",
      role: "Creator @Svelte",
      quote:
        "i love the 'build a pretend OS in svelte' trend that @puruvjdev started — kudos  @yashash_pugalia",
      link: "https://x.com/Rich_Harris/status/1657097805733715987",
    },
    // {
    //   name: "Eric Simons",
    //   role: "CEO @StackBlitz",
    //   quote:
    //     "Great work on this @yashash_pugalia!, <br> One idea I had- you could even power the file system and standalone terminal app using the http://webcontainers.io api 👀",
    //   link: "https://x.com/ericsimons40/status/1656644824190308352",
    // },
  ];

  const education = [
    {
      // date: "",
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
    <div class="flex justify-between gap-2">
      <!-- custom-hover-effect cursor-pointer -->
      <!-- on:click={() => (w.collapsed = !w.collapsed)} -->
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
    <div class="flex justify-between gap-2">
      <!-- custom-hover-effect cursor-pointer -->
      <!-- on:click={() => (p.collapsed = !p.collapsed)} -->
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

      <p transition:slide={{ delay: 200 }}>
        Stack: {p.stack}
      </p>
    {/if}
  {/each}

  <h2>Testimonials</h2>
  <div style="container-type: inline-size;">
    <TestimonialList data={testimonials} />
  </div>

  <h2>Education</h2>
  {#each education as e}
    <div class="flex justify-between gap-2">
      <h3>{e.school}</h3>
      <!-- <p class="mt-auto">{e.date}</p> -->
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

<!-- .custom-hover-effect {
    @apply relative;
  }
  .custom-hover-effect::before {
    @apply pointer-events-none absolute -inset-x-4 -inset-y-1 -z-10 mt-4 rounded bg-neutral-100 opacity-0 transition-all [content:''] dark:bg-neutral-800;
  }
  .custom-hover-effect:hover::before {
    @apply opacity-100;
  } -->
<style lang="postcss">
  .project-image {
    @apply relative;
  }
  .project-image::after {
    @apply pointer-events-none absolute left-1/2 z-[1] h-40 w-[272px] -translate-y-full translate-x-[calc(-50%+var(--mousePos))] scale-50 rounded border-8 border-neutral-100 bg-contain bg-no-repeat opacity-0 transition-all duration-100 [background-image:var(--previewImage)] [content:''] dark:border-neutral-800;
  }
  .project-image:hover::after {
    @apply -translate-y-[calc(100%+1.5rem)] scale-100 opacity-100;
  }
</style>
