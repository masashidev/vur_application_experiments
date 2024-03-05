<template>

    <header>
        <h4>Question number #~ / ~ </h4>
        <div class="bar">
          <div class="completion"></div>
        </div>
      </header>

</template>

<style>

  header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 20px 0;
  }

  header h4{
    font-weight: bold;
    font-size: 1rem;
    text-wrap: nowrap;
  }

  .bar{
    width: 300px;
    height: 20px;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    position: relative;
  }

  .completion{
    width: 50%;
    height: 100%;
    background-color: #4CAF50;
    border-radius: 5px;
  }

</style>
