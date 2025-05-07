// ナビゲーションのトグル機能
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  
  burger.addEventListener('click', () => {
    // トグルナビゲーション
    nav.classList.toggle('nav-active');
    
    // アニメーションリンク
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });
    
    // バーガーアニメーション
    burger.classList.toggle('toggle');
  });
};

// スクロール時のナビゲーションバースタイル変更
const navScroll = () => {
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
};

// フォームの送信処理
const handleFormSubmit = () => {
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // フォームデータの処理（実際の送信処理はバックエンドが必要）
      alert('メッセージを受け付けました。ありがとうございます！');
      form.reset();
    });
  }
};

// ナビゲーションリンクのスムーズスクロール
const smoothScroll = () => {
  const navLinks = document.querySelectorAll('.nav-links a, .cta-button');
  
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      
      if (href.startsWith('#')) {
        e.preventDefault();
        const targetId = href;
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          // ナビゲーションバーの高さを考慮してスクロール
          const navHeight = document.querySelector('.navbar').offsetHeight;
          const targetPosition = targetElement.offsetTop - navHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
          // モバイルメニューが開いている場合は閉じる
          const nav = document.querySelector('.nav-links');
          const burger = document.querySelector('.burger');
          if (nav.classList.contains('nav-active')) {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
            
            // アニメーションをリセット
            document.querySelectorAll('.nav-links li').forEach(link => {
              link.style.animation = '';
            });
          }
        }
      }
    });
  });
};

// スクロールアニメーション
const scrollReveal = () => {
  const sections = document.querySelectorAll('section');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
      }
    });
  }, { threshold: 0.1 });


  sections.forEach(section => {
      section.classList.add('hidden');
      observer.observe(section);
      });
  };
  
  // ページロード時の実行
  document.addEventListener('DOMContentLoaded', () => {
      navSlide();
      navScroll();
      handleFormSubmit();
      smoothScroll();
      scrollReveal();
  });
  
  // スキルプログレスバーのアニメーション
  const animateSkills = () => {
      const skillItems = document.querySelectorAll('.skill-item');
      
      skillItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
          item.classList.add('skill-hover');
      });
      
      item.addEventListener('mouseleave', () => {
          item.classList.remove('skill-hover');
      });
      });
  };
  
  // タイプライターエフェクト
  const typeEffect = () => {
      const text = document.querySelector('.hero h2');
      const originalText = text.textContent;
      text.textContent = '';
      
      let i = 0;
      const typing = setInterval(() => {
      if (i < originalText.length) {
          text.textContent += originalText.charAt(i);
          i++;
      } else {
          clearInterval(typing);
      }
      }, 100);
  };
  
  // スクロールトップボタン
  const scrollTopButton = () => {
      const button = document.createElement('button');
      button.innerHTML = '<i class="fas fa-arrow-up"></i>';
      button.classList.add('scroll-top');
      document.body.appendChild(button);
      
      window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
          button.classList.add('show-scroll-btn');
      } else {
          button.classList.remove('show-scroll-btn');
      }
      });
      
      button.addEventListener('click', () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
      });
  };
  
  // 追加の初期化関数を実行
  window.addEventListener('load', () => {
      animateSkills();
      typeEffect();
      scrollTopButton();
  });