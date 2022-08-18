<script>
  import { Menu, MenuButton, MenuItems, MenuItem, Transition } from '@rgossiaux/svelte-headlessui'
  import { fade } from 'svelte/transition'
</script>

<!-- Use the open slot prop -->
<Menu let:open>
  <MenuButton>More</MenuButton>
  {#if open}
    <div transition:fade>
      <MenuItems static>
        <MenuItem>Hello</MenuItem>
        <MenuItem>Hello</MenuItem>
        <MenuItem>Hello</MenuItem>
        <MenuItem>Hello</MenuItem>
        <MenuItem>Hello</MenuItem>
      </MenuItems>
    </div>
  {/if}
</Menu>
