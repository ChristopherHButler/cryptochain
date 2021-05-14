const redis = require('redis');

const { CHANNELS } = require('../constants/constants');

class PubSub {
  constructor({ blockchain }) {
    this.blockchain = blockchain;

    this.publisher = redis.createClient();
    this.subscriber = redis.createClient();

    this.subscribeToChannels();

    this.subscriber.on('message', (channel, message) => this.handleMessage(channel, message));
  }

  handleMessage(channel, message) {
    console.log(`Message recieved on channel ${channel}. Message: ${message}`);

    const parsedMessage = JSON.parse(message);

    // relpace the chain if a longer and valid one is recieved as a message
    if (channel === CHANNELS.BLOCKCHAIN) {
      this.blockchain.replaceChain(parsedMessage);
    }
  }

  subscribeToChannels() {
    Object.values(CHANNELS).forEach((channel) => {
      this.subscriber.subscribe(channel);
    });
  }

  publish({ channel, message }) {
    this.subscriber.unsubscribe(channel, () => {
      this.publisher.publish(channel, message, () => {
        this.subscriber.subscribe(channel);
      });
    });
  }

  broadcastChain() {
    this.publish({
      channel: CHANNELS.BLOCKCHAIN,
      message: JSON.stringify(this.blockchain.chain),
    });
  }

}

module.exports = PubSub;