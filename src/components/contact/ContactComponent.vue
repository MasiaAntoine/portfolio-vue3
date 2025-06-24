<template>
  <div class="flex flex-col items-center justify-center h-full p-8 max-w-4xl mx-auto">
    <h1 class="text-4xl font-bold text-gray-800 mb-12">Contact</h1>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
      <!-- Informations de contact -->
      <div class="space-y-8">
        <div>
          <h2 class="text-2xl font-semibold text-gray-800 mb-6">Restons en contact</h2>
          <p class="text-gray-600 mb-8">
            N'hésitez pas à me contacter pour discuter d'opportunités, de projets ou simplement pour
            échanger sur le développement web.
          </p>
        </div>

        <div class="space-y-6">
          <!-- Email -->
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <span class="text-blue-600 text-xl">📧</span>
            </div>
            <div>
              <h3 class="font-semibold text-gray-800">Email</h3>
              <p class="text-gray-600">contact@monportfolio.com</p>
            </div>
          </div>

          <!-- Téléphone -->
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <span class="text-green-600 text-xl">📱</span>
            </div>
            <div>
              <h3 class="font-semibold text-gray-800">Téléphone</h3>
              <p class="text-gray-600">+33 6 12 34 56 78</p>
            </div>
          </div>

          <!-- Localisation -->
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <span class="text-purple-600 text-xl">📍</span>
            </div>
            <div>
              <h3 class="font-semibold text-gray-800">Localisation</h3>
              <p class="text-gray-600">Paris, France</p>
            </div>
          </div>
        </div>

        <!-- Réseaux sociaux -->
        <div class="pt-8">
          <h3 class="font-semibold text-gray-800 mb-4">Suivez-moi</h3>
          <div class="flex space-x-4">
            <button
              class="w-12 h-12 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              <span class="text-xl">💼</span>
            </button>
            <button
              class="w-12 h-12 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center"
            >
              <span class="text-xl">🐙</span>
            </button>
            <button
              class="w-12 h-12 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors flex items-center justify-center"
            >
              <span class="text-xl">🐦</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Formulaire de contact -->
      <div class="bg-white rounded-lg shadow-lg p-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-6">Envoyez-moi un message</h2>

        <form @submit.prevent="submitForm" class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
              Nom complet
            </label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
              placeholder="Votre nom"
            />
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2"> Email </label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
              placeholder="votre@email.com"
            />
          </div>

          <div>
            <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
              Sujet
            </label>
            <input
              id="subject"
              v-model="form.subject"
              type="text"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
              placeholder="Sujet de votre message"
            />
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              v-model="form.message"
              rows="5"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors resize-none"
              placeholder="Votre message..."
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Envoyer le message
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Formulaire de contact
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const submitForm = () => {
  // Ici vous pouvez ajouter la logique d'envoi du formulaire
  console.log('Formulaire soumis:', form.value)

  // Exemple d'alerte de succès
  alert('Message envoyé avec succès !')

  // Réinitialiser le formulaire
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }
}
</script>
