<script setup>
</script>

<template>
    <main>
        <div class="login-history" style="position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);">
            
      <h2>Login History</h2>
      <ul class="history-list">
          <li v-for="log in loginHistory" :key="log.id" class="history-item">
          <strong>{{ log.timestamp }}</strong> - {{ log.message }}
        </li>
    </ul>
</div>
</main>
  </template>
  
  <script>
  export default {
    data() {
      return {
        loginHistory: [
          { id: 1, timestamp: '2023-06-28 09:15:32', message: 'Logged in successfully.' },
          { id: 2, timestamp: '2023-06-27 15:20:10', message: 'Failed login attempt.' },
          { id: 3, timestamp: '2023-06-26 12:05:45', message: 'Logged in successfully.' },
          { id: 4, timestamp: '2023-06-25 08:30:21', message: 'Logged in successfully.' },
          { id: 5, timestamp: '2023-06-24 19:45:59', message: 'Logged in successfully.' }
        ]
      };
    }
  };
  </script>
  
  <style scoped lang="scss">
  .login-history {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;

  h2 {
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
  }

  .history-list {
    list-style-type: none;
    padding: 0;
  }

  .history-item {
    margin-bottom: 15px;
    padding: 15px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    .log-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .log-timestamp {
      font-weight: bold;
      color: #555555;
    }

    .log-message {
      color: #333333;
    }
  }
}
  </style>
  