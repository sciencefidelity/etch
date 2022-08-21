<script lang="ts">
  import H1 from '$lib/icons/H1.svelte'
  import H2 from '$lib/icons/H2.svelte'
  import H3 from '$lib/icons/H3.svelte'
  import H4 from '$lib/icons/H4.svelte'
  import Bold from '$lib/icons/Bold.svelte'
  import Italic from '$lib/icons/Italic.svelte'
  import Underline from '$lib/icons/Underline.svelte'
  import Strikethrough from '$lib/icons/Strikethrough.svelte'
  import Code from '$lib/icons/Code.svelte'
  import { onDestroy, onMount } from 'svelte'
  import { slide } from 'svelte/transition'

  const tools = [
    { name: 'Heading 1', icon: H1 },
    { name: 'Heading 2', icon: H2 },
    { name: 'Heading 3', icon: H3 },
    { name: 'Heading 4', icon: H4 },
    { name: 'Bold', icon: Bold },
    { name: 'Italic', icon: Italic },
    { name: 'Underline', icon: Underline },
    { name: 'Strikethrough', icon: Strikethrough },
    { name: 'Code', icon: Code },
  ]
  let selection: Selection | null = null
  let showMenu = false

  onMount(() => {
    document.addEventListener('keydown', handleClick)
    document.addEventListener('selectionchange', () => {
      selection = document.getSelection()
      handleSelection(selection)
    })
  })

  // onDestroy(() => {
  //   removeEventListener('keydown', handleClick)
  // })

  const handleClick = () => {
    console.log('clicked')
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      console.log('enter')
    }
  }

  // const handleHighlight = () => {
  //   console.log('highlight')
  //   if (showMenu) {
  //     showMenu = false
  //   } else {
  //     showMenu = true
  //   }
  // }

  const handleSelection = (selection: Selection) => {
    if (selection === null || selection.toString().length === 0) {
      showMenu = false
    } else {
      console.log(selection.toString().length)
      showMenu = true
    }
  }
</script>

<div class="container">
  <!-- <button class="btn">Show menu</button> -->
  <p class="" contenteditable="true">
    <!-- This is <span class="highlighted" on:click={handleHighlight}>some text</span> as an example -->
    This is some text as an example
  </p>
  {#if showMenu}
    <ul class="dropdown" transition:slide={{ duration: 300 }}>
      {#each tools as tool}
        <li class="list" tabindex="0" on:click={handleClick}>
          <div class="icon">
            <svelte:component this={tool.icon} />
          </div>
          <p class="title">
            {tool.name}
          </p>
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style lang="postcss" global>
  .container {
    display: grid;
    padding-left: 3rem;
    /* place-items: center; */
  }

  p {
    margin-block: 2rem 0.25rem;
  }

  .highlighted {
    background-color: hsl(0, 0%, 90%);
  }

  .btn {
    background: #fff;
    border: 1px solid hsl(0, 0%, 90%);
    border-radius: 0.2rem;
    padding: 0.7rem 1rem;
    cursor: pointer;
    width: 14rem;
    background-color: hsl(0, 0%, 95%);
    margin-bottom: 0.3rem;
    color: hsl(0, 0%, 35%);
    transition: background-color 0.2s ease-in-out;
    &:hover {
      background-color: hsl(0, 0%, 93%);
    }
  }

  .dropdown {
    list-style: none;
    padding: 0;
    margin-left: 3rem;
    line-height: 1.75;
    width: 13rem;
    text-align: left;
    font-family: 'Avenir Next', sans-serif;
    font-weight: 500;
    color: hsl(0, 0%, 40%);
    box-shadow: 3px 5px 15px hsla(0, 0%, 0%, 0.1);
    padding: 1rem;
    border-radius: 0.2rem;
  }

  .list {
    display: flex;
    border-radius: 0.2rem;
    &:hover,
    &:focus {
      background-color: hsl(0, 0%, 95%);
      outline: none;
    }
  }

  .icon {
    padding-left: 1rem;
    display: grid;
    height: 0.85rem;
    flex: 1;
    display: inline-block;
    place-items: start;
    color: hsl(0, 0%, 40%);
    line-height: 2;
    svg {
      height: 100%;
    }
  }

  .title {
    flex: 3;
    display: inline-block;
    margin: 0;
  }

  .hidden {
    visibility: hidden;
  }

  [contenteditable] {
    outline: none;
  }
</style>
