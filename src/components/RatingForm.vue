<template>
    <div class="ratinggroup">
        <div 
            class="check-box"
            v-for="n in 5"
            :key="n"
            @click="e => handleChange(n - 1)"
            >
                <v-icon v-if="rating[n - 1]">mdi-cards-heart</v-icon>
                <v-icon v-else>mdi-heart-outline</v-icon>
        </div>
    </div>
</template>

<script>

export default {
    data: () => ({
        rating: [
            false, false, false, false, false
        ]
    }),
    methods: {
        handleChange(key) {
            const newRate = [...this.rating];

            this.rating.forEach((el, idx) => {
                if (idx <= key) {
                    newRate[idx] = true;
                } else {
                    newRate[idx] = false;
                }
            });

            this.rating = newRate;

            this.$emit('rating', key);
        }
    }
}
</script>

<style lang="scss" scoped>
    .ratinggroup {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .check-box {
        cursor: pointer;
    }
</style>