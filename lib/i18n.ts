export const locales = ['vi', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'vi';

export const translations = {
  vi: {
    nav: {
      home: 'Trang chủ',
      deploy: 'Deploy',
      website: 'Website',
      about: 'Về chúng tôi',
    },
    home: {
      title: 'Ezploy',
      subtitle: 'Nền tảng hỗ trợ deploy ứng dụng & website tự động',
      description: 'Chi phí rẻ, minh bạch. Hướng tới cá nhân, startup và doanh nghiệp nhỏ.',
      cta: 'Triển khai dễ dàng – Trả tiền theo hạ tầng',
      comingSoon: 'Sắp ra mắt',
    },
    deploy: {
      title: 'Deploy',
      description: 'Deploy ứng dụng & website tự động với chi phí rẻ, tương tự Railway / Render',
      additionalInfo: 'Hạ tầng chúng tôi hiện chỉ đang sử dụng cho gói dịch vụ website và sẽ ra mắt cho các cá nhân, freelancer có nhu cầu deploy website dễ dàng, uptime 99.9% và autoscale',
      pricing: {
        title: 'Các gói dịch vụ',
        free: {
          name: 'Free',
          storage: '500MB Storage',
          ram: '0.5GB RAM',
          cpu: 'Shared CPU',
          suitable: 'Phù hợp thử nghiệm',
        },
        basic: {
          name: 'Basic',
          cpu: '1 CPU',
          ram: '1GB RAM',
          storage: '10GB Storage',
        },
        premium: {
          name: 'Premium',
          cpu: '4 CPU Cores',
          ram: '4GB RAM',
          storage: '30GB Storage',
          addons: 'Cho phép mua thêm: RAM, Storage',
        },
        business: {
          name: 'Business',
          contact: 'Liên hệ trực tiếp',
        },
        features: {
          replicate: 'Replicate đảm bảo uptime',
          backup: 'Backup database',
        },
      },
      comingSoon: 'Sắp ra mắt',
    },
    website: {
      title: 'Website',
      description: 'Dịch vụ làm website cho doanh nghiệp',
      process: {
        title: 'Quy trình làm việc',
        description: 'Chúng tôi tạo ra quy trình làm việc hiệu quả kết hợp giữa con người và AI',
        optimization: 'Tối ưu hóa các nguồn source code có sẵn theo hướng module để tối ưu chi phí và chất lượng website',
        agents: {
          title: 'Module Agent',
          chatbot: 'Tạo ra nhiều module agent để tối ưu hóa chatbot',
          seo: 'Tự động viết bài SEO',
        },
      },
      free: {
        title: 'Website cơ bản (Miễn phí)',
        subtitle: 'Website giới thiệu công ty',
        pages: {
          title: 'Các trang cơ bản:',
          home: 'Trang chủ',
          about: 'Giới thiệu',
          contact: 'Liên hệ',
        },
      },
      addons: {
        title: 'Module trả phí (Add-on)',
        autoReply: 'Trả lời tin nhắn tự động',
        ecommerce: {
          title: 'Bán hàng & thanh toán trực tuyến:',
          payos: 'PayOS',
          zalo: 'Zalo Official Account',
        },
        other: 'Các module khác có thể liên hệ tư vấn',
      },
      pricing: {
        title: 'Mô hình chi phí',
        free: 'Website miễn phí ban đầu',
        monthly: 'Khách hàng thanh toán hàng tháng cho:',
        items: {
          cloud: 'Duy trì cloud',
          infrastructure: 'Hạ tầng',
          services: 'Các dịch vụ phát sinh (nếu có)',
        },
        contact: 'Nếu có yêu cầu đặc biệt → Liên hệ',
      },
      comingSoon: 'Sắp ra mắt',
    },
    about: {
      title: 'Về chúng tôi',
      company: 'Ezploy',
      description: 'Công ty cung cấp website miễn phí cho doanh nghiệp',
      focus: {
        title: 'Tập trung vào:',
        digital: 'Giảm chi phí chuyển đổi số',
        simplify: 'Đơn giản hóa hạ tầng công nghệ',
      },
      address: {
        title: 'Địa chỉ công ty:',
        line1: 'Tầng 9, Pearl Plaza,',
        line2: '561A Điện Biên Phủ,',
        line3: 'Phường Thạnh Mỹ Tây,',
        line4: 'TP. Hồ Chí Minh, Việt Nam',
      },
    },
    common: {
      comingSoon: 'Sắp ra mắt',
      getStarted: 'Bắt đầu',
      learnMore: 'Tìm hiểu thêm',
      contact: 'Liên hệ',
    },
  },
  en: {
    nav: {
      home: 'Home',
      deploy: 'Deploy',
      website: 'Website',
      about: 'About Us',
    },
    home: {
      title: 'Ezploy',
      subtitle: 'Platform providing automatic application & website deployment services',
      description: 'Low cost, transparent. For individuals, startups and small businesses.',
      cta: 'Easy deployment – Pay for infrastructure',
      comingSoon: 'Coming Soon',
    },
    deploy: {
      title: 'Deploy',
      description: 'Deploy applications & websites automatically with low cost, similar to Railway / Render',
      additionalInfo: 'Our infrastructure is currently only used for website service packages and will be launched for individuals and freelancers who need easy website deployment, 99.9% uptime and autoscale',
      pricing: {
        title: 'Service Plans',
        free: {
          name: 'Free',
          storage: '500MB Storage',
          ram: '0.5GB RAM',
          cpu: 'Shared CPU',
          suitable: 'Suitable for testing',
        },
        basic: {
          name: 'Basic',
          cpu: '1 CPU',
          ram: '1GB RAM',
          storage: '10GB Storage',
        },
        premium: {
          name: 'Premium',
          cpu: '4 CPU Cores',
          ram: '4GB RAM',
          storage: '30GB Storage',
          addons: 'Can purchase additional: RAM, Storage',
        },
        business: {
          name: 'Business',
          contact: 'Contact directly',
        },
        features: {
          replicate: 'Replicate for uptime guarantee',
          backup: 'Database backup',
        },
      },
      comingSoon: 'Coming Soon',
    },
    website: {
      title: 'Website',
      description: 'Website service for businesses',
      process: {
        title: 'Work Process',
        description: 'We create an efficient workflow combining human and AI',
        optimization: 'Optimize existing source code in a modular approach to optimize costs and website quality',
        agents: {
          title: 'Agent Modules',
          chatbot: 'Create multiple agent modules to optimize chatbots',
          seo: 'Automatically write SEO articles',
        },
      },
      free: {
        title: 'Basic Website (Free)',
        subtitle: 'Company introduction website',
        pages: {
          title: 'Basic pages:',
          home: 'Home',
          about: 'About',
          contact: 'Contact',
        },
      },
      addons: {
        title: 'Paid Modules (Add-on)',
        autoReply: 'Automatic message reply',
        ecommerce: {
          title: 'E-commerce & online payment:',
          payos: 'PayOS',
          zalo: 'Zalo Official Account',
        },
        other: 'Other modules available upon consultation',
      },
      pricing: {
        title: 'Pricing Model',
        free: 'Initial website is free',
        monthly: 'Customers pay monthly for:',
        items: {
          cloud: 'Cloud maintenance',
          infrastructure: 'Infrastructure',
          services: 'Additional services (if any)',
        },
        contact: 'For special requests → Contact',
      },
      comingSoon: 'Coming Soon',
    },
    about: {
      title: 'About Us',
      company: 'Ezploy',
      description: 'Company providing free websites for businesses',
      focus: {
        title: 'Focus on:',
        digital: 'Reducing digital transformation costs',
        simplify: 'Simplifying technology infrastructure',
      },
      address: {
        title: 'Company Address:',
        line1: '9th Floor, Pearl Plaza,',
        line2: '561A Dien Bien Phu Street,',
        line3: 'Thanh My Tay Ward,',
        line4: 'Ho Chi Minh City, Vietnam',
      },
    },
    common: {
      comingSoon: 'Coming Soon',
      getStarted: 'Get Started',
      learnMore: 'Learn More',
      contact: 'Contact',
    },
  },
} as const;

export function getTranslations(locale: Locale) {
  return translations[locale];
}

