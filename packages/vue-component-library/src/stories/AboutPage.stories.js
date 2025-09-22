import { computed, ref } from 'vue'

// Import components
import HeaderSticky from '../lib-components/HeaderSticky.vue'
import FooterPrimary from '../lib-components/FooterPrimary.vue'
import BannerFeatured from '../lib-components/BannerFeatured.vue'

// Import mock data
import { primaryItems, secondaryItems } from './mock/Funkhaus/MockGlobal'
import { mockAboutPage } from './mock/Funkhaus/MockAboutPage'

// Import styles
import './AboutPage.scss'

export default {
  title: 'Funkhaus / Pages / About Page',
  component: {},
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
                    'A complete about page layout with header, main content sections, and footer. This serves as a template for about pages with featured banner sections.',
      },
    },
  },
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: ['default', 'dlc'],
      description: 'Theme variant for the page',
    },
  },
}

// Template function for the about page
function Template(args) {
  return {
    components: {
      HeaderSticky,
      FooterPrimary,
      BannerFeatured,
    },
    provide() {
      return {
        theme: computed(() => args.theme),
      }
    },

    setup() {
      const handleButtonClick = (button) => {
        if (button.to) {
          window.location.href = button.to
        } else {
          alert(`Button clicked: ${button.label}`)
        }
      }

      return {
        args,
        primaryItems,
        secondaryItems,
        mockAboutPage,
        handleButtonClick,
      }
    },

    computed: {
      aboutSection() {
        return {
          title: mockAboutPage.aboutSection.title,
          description: mockAboutPage.aboutSection.content,
          media: mockAboutPage.aboutSection.image,
          alignRight: true,
        }
      },
      missionSection() {
        return {
          title: mockAboutPage.missionSection.title,
          description: mockAboutPage.missionSection.content,
          media: mockAboutPage.missionSection.image,
          alignRight: false,
        }
      },
      contactSection() {
        return {
          title: mockAboutPage.contactSection.title,
          description: mockAboutPage.contactSection.content,
          media: mockAboutPage.contactSection.image,
          alignRight: true,
          buttons: mockAboutPage.contactSection.buttons,
        }
      },
    },
    template: `
       <div class="about-page">
         <!-- Header -->
         <HeaderSticky 
           :primary-items="primaryItems"
           :secondary-items="secondaryItems"
         />

         <!-- Main Content Area -->
         <main class="main-content">
            <!-- About Section -->
            <BannerFeatured
              class="about-section"
              :title="aboutSection.title"
              :description="aboutSection.description"
              :media="aboutSection.media"
              :align-right="aboutSection.alignRight"
            />

            <!-- Mission Section -->
            <BannerFeatured
              class="mission-section"
              :title="missionSection.title"
              :description="missionSection.description"
              :media="missionSection.media"
              :align-right="missionSection.alignRight"
            />

            <!-- Contact Section -->
            <BannerFeatured
              class="contact-section"
              :title="contactSection.title"
              :description="contactSection.description"
              :media="contactSection.media"
              :align-right="contactSection.alignRight"
            >
              <template #buttons>
                <div class="contact-buttons">
                  <button
                    v-for="button in contactSection.buttons"
                    :key="button.label"
                    class="contact-button"
                    @click="handleButtonClick(button)"
                  >
                    {{ button.label }}
                  </button>
                </div>
              </template>
            </BannerFeatured>
         </main>
         
         <!-- Footer -->
         <FooterPrimary />
       </div>
     `,
  }
}

// Default story
export const Default = Template.bind({})
Default.args = {
  theme: 'dlc',
}
