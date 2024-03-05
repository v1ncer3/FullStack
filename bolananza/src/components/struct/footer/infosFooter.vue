<script lang="ts">

export default{
    data(){
        return {
            listaInfos: ['Endereço: Rua Rio de Janeiro, 115. Bonanza/SL-MG',
                        'Telefone - (xx) xxxxx - xxxx',
                        'Redes Sociais: Instagram, gmail']
        }
    }
}
</script>

<template>
    <div class="footer_infos">
    <div class = 'paddingFooter'>
        <ul v-for="info in listaInfos" :key="info">
            {{ info }}
        </ul>
    </div>
    <div class="paddingFooter">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3754.511820009063!2d-43.83737182573818!3d-19.775885233526076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa681e247c8a17d%3A0xbef422037d767019!2sBolananza!5e0!3m2!1sen!2sbr!4v1707789603973!5m2!1sen!2sbr" width="400" height="300" style="border:0;" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </div>
</template>

<style>
.footer_infos{
  display: flex;
  justify-content: space-around;
}

.paddingFooter{
    padding: 1rem 1rem 0rem 1rem;
}
</style>