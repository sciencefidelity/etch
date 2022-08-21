<script lang="ts">
  import Plus from './icons/Plus.svelte'
  import Grabber from './icons/Grabber.svelte'
  import Foldable from './icons/Foldable.svelte'
</script>

<div class="guide one" />
<div class="guide two" />
<div class="guide three" />
<div class="guide four" />
<div class="guide five" />
<div class="guide six" />
<div class="container">
  <div class="widgets">
    <div class="widget plus"><Plus /></div>
    <div class="widget grabber"><Grabber /></div>
    <div class="widget foldable"><Foldable /></div>
  </div>
  <div class="content"><p>This is the first paragraph.</p></div>
</div>
<div class="container indented-1">
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
<div class="container indented-2">
  <div class="widgets">
    <div class="widget plus"><Plus /></div>
    <div class="widget grabber"><Grabber /></div>
    <div class="widget foldable hidden"><Foldable /></div>
  </div>
  <div class="content">
    <p>This is indented even more.</p>
  </div>
</div>
<div class="container">
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
    left: 3.8rem;
    background: lime;
  }

  .two {
    left: 6.8rem;
    background: lime;
  }

  .three {
    left: 9.8rem;
    background: lime;
  }

  .four {
    left: 12.8rem;
    background: lime;
  }

  .container {
    display: flex;
    flex-direction: row;
  }

  .widgets {
    display: flex;
    flex-direction: row;
    height: 1.2rem;
    margin-inline: 0.3rem;
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
    visibility: hidden;
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
    margin-left: 0.5rem;
    color: hsl(0, 0%, 20%);
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
    p {
      margin: 0.3rem;
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

  .hidden {
    visibility: hidden;
    display: none;
  }
</style>
