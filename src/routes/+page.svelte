<script lang="ts">
  import "../app.css";

  const work = [
    {
      company: "Haast",
      link: "https://www.haast.io/",
      date: "Aug 2023 - Present",
      location: "Canberra, Australia - Remote",
      desc: "Svelte · Flask · PostgreSQL · Git/GitHub · Tailwind/DaisyUI",
    },
    {
      company: "Realm Labs AI",
      date: "Jan 2023 - Jul 2023",
      location: "New York, United States - Remote",
      desc: "Svelte/Kit · TypeScript · MongoDB · Prisma · Google Cloud Platform (GCP) · Git/GitHub · Tailwind/DaisyUI",
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
      desc: "I was the lead Front-End contributor to this project which aims to simulate the windows 11 experience on the web. Built with React, Redux, CSS, GitHub-Actions. Used by 3.1M+ users, viewed 7.8M+ times in 2023.",
      date: "2021 - 2022",
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

  const testimonials = [
    {
      name: "Julie Zhuo",
      role: "Co-Founder @Sundial | Former VP Design @Facebook",
      quote:
        "Love your work! Especially your dedication to building with craft and creative exploration.",
    },
  ];

  const contacts = [
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

<main class="mx-auto max-w-screen-sm px-8 py-6">
  <div class="flex justify-between gap-4">
    <div>
      <h1 class="text-xl">Yashash Pugalia</h1>
      <p class="text-black/60">Software Developer</p>
    </div>

    <img src="/me.jpg" alt="" class="aspect-square w-20 rounded-full" />
  </div>

  <h2 class="mb-2 mt-4 text-lg">Work Experience</h2>
  {#each work as w}
    <div class="mb-2">
      <div class="flex items-center justify-between gap-2">
        <a href={w.link ?? ""} target="_blank">{w.company}</a>
        <p class="text-sm font-light text-black/60">{w.date}</p>
      </div>
      <p class="text-sm font-light text-black/60">{w.location}</p>

      <p class="mt-1 text-sm font-light text-black/60">
        {w.desc}
      </p>
    </div>
  {/each}

  <h2 class="mb-2 mt-4 text-lg">Projects</h2>
  {#each projects as p}
    <div class="mb-2">
      <div class="flex items-center justify-between gap-2">
        <p class="space-x-1">
          <a href={p.link ?? ""} target="_blank">{p.title}</a>
          <a
            href={p.github}
            class="text-sm font-light text-black/60"
            target="_blank"
          >
            GitHub
          </a>
        </p>

        <p class="text-sm font-light text-black/60">{p.date}</p>
      </div>

      <p class="mt-1 text-sm font-light text-black/60">
        {p.desc}
      </p>

      {#if p.title === "Windows 11 in Svelte"}
        <div class="mt-1 flex flex-col gap-1 text-sm font-light text-black/60">
          <p>Recreation of the Windows 11 desktop experience for the web.</p>
          <p>
            Nominated for "Fun Side Project of the Year" JS Open Source Awards
            2023, part of
            <a href="https://jsnation.com/">JSNation Conference: </a>
            <a
              class="underline"
              href="https://osawards.com/javascript/#:~:text=Windows%2011%20in%20Svelte"
              target="_blank">osawards.com/javascript/…</a
            >
          </p>
          <p>The project has gained attention from industry figures like :</p>
          <ul class="list-disc">
            <li>
              Guillermo Rauch (CEO Vercel):
              <a
                class="underline"
                href="https://x.com/rauchg/status/1656493176088150017"
                target="_blank">x.com/rauchg/status/…</a
              >
            </li>
            <li>
              Rich Harris (Creator Svelte):
              <a
                class="underline"
                href="https://x.com/Rich_Harris/status/1657097805733715987"
                target="_blank">x.com/Rich_Harris/statu…</a
              >
            </li>
            <li>
              Eric Simons (CEO StackBlitz):
              <a
                class="underline"
                href="https://x.com/ericsimons40/status/1656644824190308352"
                target="_blank">x.com/ericsimons40/st…</a
              >
            </li>
          </ul>
          <p>
            It has also been featured in notable blogs and newsletters such as :
          </p>
          <ul class="list-disc">
            <li>
              Svelte's Official Monthly Newsletter (June 2023):
              <a
                class="underline"
                href="https://svelte.dev/blog/whats-new-in-svelte-june-2023#:~:text=and%2075%20cells-,Windows%2011,-in%20Svelte%20attempts"
                target="_blank">svelte.dev/blog/whats-new…</a
              >
            </li>
            <li>
              JavaScript Weekly:
              <a
                class="underline"
                href="https://javascriptweekly.com/issues/638#:~:text=Fake-,Windows%2011,-in%20Svelte%20%E2%80%94%20This"
                target="_blank">javascriptweekly.com/issues/638...</a
              >
            </li>
          </ul>
          <p>Built with Svelte, JavaScript/ TypeScript, CSS/ Tailwind.</p>
        </div>
      {/if}
    </div>
  {/each}

  <h2 class="mb-2 mt-4 text-lg">Education</h2>
  {#each education as e}
    <div class="mb-2">
      <div class="flex items-center justify-between gap-2">
        <p>{e.school}</p>
        <p class="text-sm font-light text-black/60">{e.date}</p>
      </div>

      <p class="text-sm font-light text-black/60">{e.degree}</p>
    </div>
  {/each}

  <h2 class="mb-2 mt-4 text-lg">Contacts</h2>
  <div class="grid w-fit grid-cols-2 gap-2">
    {#each contacts as c}
      <span class="text-sm">
        {c.name}:
      </span>
      <a href={c.link} target="_blank" class="text-sm font-light text-black/60">
        {c.linkDisplay}
      </a>
    {/each}
  </div>
</main>

<style lang="postcss">
  a {
    @apply hover:underline;
  }
</style>
