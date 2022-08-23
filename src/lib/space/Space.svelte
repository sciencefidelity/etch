<script lang="ts">
  import Plus from './icons/Plus.svelte'
  import Grabber from './icons/Grabber.svelte'
  import Foldable from './icons/Foldable.svelte'

  let done = true

  const handleClick = () => {
    done = !done
    console.log(done)
  }
</script>

<div class="guide one" />
<div class="guide two" />
<div class="guide three" />
<div class="guide four" />
<div class="guide five" />
<div class="guide six" />

<div class="container indented-0">
  <div class="widgets">
    <div class="widget plus"><Plus /></div>
    <div class="widget grabber"><Grabber /></div>
    <div class="widget foldable"><Foldable /></div>
  </div>
  <div class="content"><p>This is the first paragraph.</p></div>
</div>

<div class="container indented-0">
  <div class="widgets">
    <div class="widget plus"><Plus /></div>
    <div class="widget grabber"><Grabber /></div>
    <div class="widget foldable"><Foldable /></div>
  </div>
  <div class="content">
    <p>
      <!-- <span class="widget foldable-inline"><Foldable /></span> -->
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor eaque quae, tempora blanditiis
      odio natus officia ratione nostrum expedita optio architecto, eum repudiandae quibusdam nulla,
      animi sint.
    </p>
  </div>
</div>
<div class="container indented-0">
  <div class="widgets">
    <div class="widget plus"><Plus /></div>
    <div class="widget grabber"><Grabber /></div>
    <div class="widget foldable"><Foldable /></div>
  </div>
  <div class="content">
    <p>This is indented even more.</p>
  </div>
</div>

<div class="container indented-0">
  <div class="widgets">
    <div class="widget plus"><Plus /></div>
    <div class="widget grabber"><Grabber /></div>
    <div class="widget foldable hidden"><Foldable /></div>
  </div>
  <div class="content">
    <ul>
      <li>First</li>
      <li>Second</li>
      <li>Third</li>
      <li>Fourth</li>
    </ul>
  </div>
</div>

<div class="container indented-0">
  <div class="widgets">
    <div class="widget plus"><Plus /></div>
    <div class="widget grabber"><Grabber /></div>
    <div class="widget foldable hidden"><Foldable /></div>
  </div>
  <div class="content">
    <ul class="todo">
      <li>First</li>
      <li>Second</li>
      <li class={done ? '' : 'checked'} on:click={handleClick}>Third</li>
      <li>Fourth</li>
    </ul>
  </div>
</div>
<div class="container indented-0">
  <div class="widgets">
    <div class="widget plus"><Plus /></div>
    <div class="widget grabber"><Grabber /></div>
    <div class="widget foldable hidden"><Foldable /></div>
  </div>
  <div class="content">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vitae tempora aut alias est
      officia, enim, magni blanditiis perspiciatis deserunt eligendi odit unde asperiores autem
      tempore amet ab velit ratione.
    </p>
  </div>
</div>

<style global lang="postcss">
  .guide {
    position: absolute;
    top: 0rem;
    width: 1px;
    height: 100vh;
    z-index: -1;
    opacity: 0.5;
  }

  .one {
    left: 4.7rem;
    background: lime;
  }

  .two {
    left: 7.7rem;
    background: lime;
  }

  .three {
    left: 10.7rem;
    background: lime;
  }

  .four {
    left: 13.7rem;
    background: lime;
  }

  .container {
    display: flex;
    flex-direction: row;
  }

  .widgets {
    width: 60.2px;
    display: flex;
    flex-direction: row;
    height: 1.2rem;
    margin-inline: 0.3rem;
    justify-content: right;
  }

  .widget {
    padding-inline: 0.1rem;
    color: hsl(0, 0%, 35%);
    transform: translateY(0.6rem);
    cursor: pointer;
  }

  .plus,
  .grabber {
    opacity: 0;
    /* visibility: hidden; */
    transition: opacity 0.2s ease-in-out;
  }

  .grabber {
    position: relative;
    height: 1.6em;
    top: -0.2rem;
    cursor: grab;
    &:active {
      cursor: grabbing;
    }
  }

  .foldable {
    /* margin-left: 0.5rem; */
    color: hsl(0, 0%, 20%);
    /* transform: rotate(90deg); */
  }

  .foldable-inline {
    transform: translateY(0.2rem);
    margin-right: 0.3rem;
    color: hsl(0, 0%, 20%);
    height: 1.2rem;
    display: inline-block;
    top: -0.2rem;
  }

  .content {
    font-family: Avenir, sans-serif;
    font-size: 1.3rem;
    color: hsl(0, 0%, 20%);
    flex: 2;
    p,
    ul {
      margin: 0.3rem;
    }
    ul {
      padding-left: 1.8rem;
    }
    .todo {
      list-style-type: none;
      padding-left: 0.6rem;
    }
  }

  .todo {
    .checked {
      text-decoration: line-through;
      color: hsl(0, 0%, 50%);
    }
    li::before {
      position: relative;
      top: 0.1rem;
      left: -0.5rem;
      content: url("data:image/svg+xml,%3Csvg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 24 24' height='100%25' width='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Cpath fill='none' d='M0 0h24v24H0z'%3E%3C/path%3E%3Cpath d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
      display: inline-block;
      height: 1.2rem;
      width: 1.2rem;
      background-image: url();
      cursor: pointer;
    }
    .checked::before {
      content: url("data:image/svg+xml,%3Csvg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 24 24' height='100%25' width='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Cpath fill='none' d='M0 0h24v24H0z'%3E%3C/path%3E%3Cpath d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
    }
  }

  .container:hover .grabber,
  .container:hover .plus {
    opacity: 1;
    visibility: visible;
  }

  .indented-1 {
    margin-left: 3rem;
  }

  .indented-2 {
    margin-left: 6rem;
  }

  .indented-3 {
    margin-left: 9rem;
  }

  .hidden {
    visibility: hidden;
    display: none;
  }
</style>
