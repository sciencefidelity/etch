<script lang="ts">
  import Plus from './icons/Plus.svelte'
  import Grabber from './icons/Grabber.svelte'
  import Foldable from './icons/Foldable.svelte'
</script>

<div class="container">
  <div class="widgets">
    <div class="widget plus">
      <Plus />
    </div>
    <div class="widget grabber">
      <Grabber />
    </div>
    <div class="widget foldable">
      <Foldable />
    </div>
  </div>
  <div class="content">
    <p>This is the first paragraph.</p>
  </div>
</div>
<div class="container indented-1">
  <div class="widgets">
    <div class="widget plus">
      <Plus />
    </div>
    <div class="widget grabber">
      <Grabber />
    </div>
    <div class="widget foldable">
      <Foldable />
    </div>
  </div>
  <div class="content">
    <p>This is an indented paragraph.</p>
  </div>
</div>
<div class="container indented-2">
  <div class="widgets">
    <div class="widget plus">
      <Plus />
    </div>
    <div class="widget grabber">
      <Grabber />
    </div>
    <!-- <div class="widget foldable">
      <Foldable />
    </div> -->
  </div>
  <div class="content">
    <p>This is indented even more.</p>
  </div>
</div>
<div class="container">
  <div class="widgets">
    <div class="widget plus">
      <Plus />
    </div>
    <div class="widget grabber">
      <Grabber />
    </div>
    <!-- <div class="widget foldable">
      <Foldable />
    </div> -->
  </div>
  <div class="content">
    <p>This is the second paragraph.</p>
  </div>
</div>

<style global lang="postcss">
  .container {
    display: flex;
    flex-direction: row;
  }

  .widgets {
    display: flex;
    flex-direction: row;
    height: 1.2rem;
    margin-right: 0.3rem;
  }

  .widget {
    padding-inline: 0.1rem;
    color: hsl(0, 0%, 35%);
    transform: translateY(0.3rem);
    cursor: pointer;
  }

  .plus,
  .grabber {
    opacity: 0;
    transition: opacity 0.1s ease-in-out;
    &:hover {
      opacity: 1;
    }
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
    padding-left: 0.5rem;
    color: hsl(0, 0%, 20%);
  }

  .content {
    font-family: Avenir, sans-serif;
    font-size: 1.3rem;
    color: hsl(0, 0%, 20%);
    p {
      margin: 0;
    }
  }

  .container:hover .grabber,
  .container:hover .plus {
    opacity: 1;
  }

  .indented-1 {
    margin-left: 2rem;
  }

  .indented-2 {
    margin-left: 4rem;
  }
</style>
