import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import {
  WhatsappLogo,
  Phone,
  MapPin,
  Star,
  Certificate,
  Syringe,
  Heart,
  Eye,
  UserCircle,
  ArrowRight,
  List,
  X,
  InstagramLogo,
  Clock,
  ShieldCheck,
  Sparkle,
  CaretDown,
} from '@phosphor-icons/react'

const WHATSAPP = '5548996606881'
const PHONE = '(48) 9660-6881'
const ADDRESS = 'Av. Trompowsky, 291 - Sala 602, Centro, Florian\u00f3polis - SC'
const CRM = 'CRM-SC 8808 | RQE 10848'

const whatsappLink = (msg) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`

const NAV_ITEMS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#procedimentos', label: 'Procedimentos' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
]

const PROCEDURES = [
  {
    icon: <Syringe size={32} weight="duotone" />,
    title: 'Rinoplastia',
    desc: 'Remodelagem nasal harm\u00f4nica com t\u00e9cnicas avan\u00e7adas para resultados naturais.',
  },
  {
    icon: <Heart size={32} weight="duotone" />,
    title: 'Mamoplastia',
    desc: 'Aumento, redu\u00e7\u00e3o ou lifting mam\u00e1rio com foco em propor\u00e7\u00e3o e naturalidade.',
  },
  {
    icon: <Eye size={32} weight="duotone" />,
    title: 'Blefaroplastia',
    desc: 'Rejuvenescimento do olhar com corre\u00e7\u00e3o de p\u00e1lpebras superiores e inferiores.',
  },
  {
    icon: <Sparkle size={32} weight="duotone" />,
    title: 'Abdominoplastia',
    desc: 'Remo\u00e7\u00e3o de excesso de pele e gordura abdominal para contorno corporal definido.',
  },
  {
    icon: <UserCircle size={32} weight="duotone" />,
    title: 'Lifting Facial',
    desc: 'Rejuvenescimento facial completo com t\u00e9cnicas minimamente invasivas.',
  },
  {
    icon: <Heart size={32} weight="duotone" />,
    title: 'Lipoaspira\u00e7\u00e3o',
    desc: 'Escultura corporal precisa para harmoniza\u00e7\u00e3o de contornos e sil­hueta.',
  },
]

const TESTIMONIALS = [
  {
    name: 'Camila R.',
    text: 'O Dr. Leonello foi extremamente atencioso e profissional. O resultado da minha rinoplastia ficou incr\u00edvel, super natural. Recomendo demais!',
    stars: 5,
  },
  {
    name: 'Patr\u00edcia M.',
    text: 'Excelente cirurgi\u00e3o! Fiz mamoplastia e estou muito feliz com o resultado. Equipe acolhedora e estrutura de primeiro mundo.',
    stars: 5,
  },
  {
    name: 'Fernanda L.',
    text: 'Profissional excepcional. Desde a primeira consulta me senti segura. O resultado superou minhas expectativas. Gratid\u00e3o eterna!',
    stars: 5,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Helmet>
        <title>Dr. Leonello Bocchese | Cirurgi\u00e3o Pl\u00e1stico em Florian\u00f3polis</title>
      </Helmet>

      {/* NAVBAR */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: '16px 0',
          background: scrolled ? 'rgba(10,10,10,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201,169,110,0.15)' : 'none',
          transition: 'all 0.4s ease',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <a href="#" style={{ fontFamily: 'var(--serif)', fontSize: '1.25rem', color: 'var(--gold)', letterSpacing: '0.02em' }}>
            Dr. Leonello <span style={{ fontWeight: 300, color: 'var(--text-muted)' }}>Bocchese</span>
          </a>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.875rem',
                  fontWeight: 400,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  transition: 'color .3s',
                }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--gold)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappLink('Ol\u00e1, gostaria de agendar uma consulta com o Dr. Leonello Bocchese.')}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'var(--gold)',
                color: 'var(--dark)',
                padding: '10px 24px',
                borderRadius: '4px',
                fontSize: '0.875rem',
                fontWeight: 600,
                letterSpacing: '0.03em',
                transition: 'background .3s',
              }}
              onMouseEnter={(e) => (e.target.style.background = 'var(--gold-light)')}
              onMouseLeave={(e) => (e.target.style.background = 'var(--gold)')}
            >
              <WhatsappLogo size={18} weight="duotone" /> Agendar Consulta
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mobile-menu-btn"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: 'var(--gold)',
              cursor: 'pointer',
            }}
          >
            {menuOpen ? <X size={28} /> : <List size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              style={{
                overflow: 'hidden',
                background: 'rgba(10,10,10,0.95)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div style={{ padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    style={{ color: 'var(--text)', fontSize: '1rem', padding: '8px 0', borderBottom: '1px solid var(--dark-border)' }}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href={whatsappLink('Ol\u00e1, gostaria de agendar uma consulta com o Dr. Leonello Bocchese.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'var(--gold)',
                    color: 'var(--dark)',
                    padding: '12px 24px',
                    borderRadius: '4px',
                    fontWeight: 600,
                    textAlign: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <WhatsappLogo size={18} weight="duotone" /> Agendar Consulta
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          background: 'linear-gradient(135deg, #0A0A0A 0%, #1a1510 50%, #0A0A0A 100%)',
          overflow: 'hidden',
        }}
      >
        {/* Decorative elements */}
        <div
          style={{
            position: 'absolute',
            top: '10%',
            right: '5%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(201,169,110,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '20%',
            left: '-5%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(201,169,110,0.05) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2, paddingTop: '80px' }}>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            style={{
              color: 'var(--gold)',
              fontSize: '0.8rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              marginBottom: '24px',
              fontWeight: 500,
            }}
          >
            Cirurgia Pl\u00e1stica de Excel\u00eancia
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 400,
              color: 'var(--text)',
              marginBottom: '16px',
              lineHeight: 1.1,
            }}
          >
            Dr. Leonello<br />
            <span style={{ color: 'var(--gold)' }}>Bocchese</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            style={{
              fontSize: '1.125rem',
              color: 'var(--text-muted)',
              maxWidth: '600px',
              margin: '0 auto 16px',
              fontWeight: 300,
            }}
          >
            Cirurgi\u00e3o Pl\u00e1stico em Florian\u00f3polis especializado em cirurgia
            est\u00e9tica e reconstrutiva. Membro titular da Sociedade Brasileira de Cirurgia Pl\u00e1stica.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            style={{
              fontSize: '0.8rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.1em',
              marginBottom: '40px',
            }}
          >
            {CRM}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <a
              href={whatsappLink('Ol\u00e1, gostaria de agendar uma consulta com o Dr. Leonello Bocchese.')}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: 'var(--gold)',
                color: 'var(--dark)',
                padding: '16px 36px',
                borderRadius: '4px',
                fontSize: '1rem',
                fontWeight: 600,
                transition: 'transform .3s, background .3s',
              }}
            >
              <WhatsappLogo size={22} weight="duotone" /> Agendar Consulta
            </a>
            <a
              href="#procedimentos"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                border: '1px solid var(--gold)',
                color: 'var(--gold)',
                padding: '16px 36px',
                borderRadius: '4px',
                fontSize: '1rem',
                fontWeight: 500,
                transition: 'all .3s',
              }}
            >
              Procedimentos <ArrowRight size={18} />
            </a>
          </motion.div>

          {/* Rating Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={5}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              marginTop: '48px',
              padding: '12px 24px',
              background: 'rgba(201,169,110,0.08)',
              border: '1px solid rgba(201,169,110,0.2)',
              borderRadius: '60px',
            }}
          >
            <div style={{ display: 'flex', gap: '2px' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} weight="fill" style={{ color: 'var(--gold)' }} />
              ))}
            </div>
            <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
              <strong style={{ color: 'var(--text)' }}>4.8</strong> \u2014 200+ avalia\u00e7\u00f5es no Google
            </span>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={6}
            style={{ marginTop: '60px', color: 'var(--text-muted)' }}
          >
            <CaretDown size={28} style={{ animation: 'bounce 2s infinite' }} />
          </motion.div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" style={{ padding: '120px 0', background: 'var(--dark-card)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }} className="about-grid">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div
                style={{
                  aspectRatio: '3/4',
                  background: 'linear-gradient(135deg, rgba(201,169,110,0.1), rgba(201,169,110,0.03))',
                  borderRadius: '8px',
                  border: '1px solid var(--dark-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{ textAlign: 'center', padding: '40px' }}>
                  <UserCircle size={120} weight="duotone" style={{ color: 'var(--gold)', opacity: 0.3 }} />
                  <p style={{ color: 'var(--text-muted)', marginTop: '16px', fontSize: '0.875rem' }}>
                    Dr. Leonello Bocchese
                  </p>
                </div>
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '20px',
                    background: 'linear-gradient(transparent, rgba(10,10,10,0.9))',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Certificate size={20} weight="duotone" style={{ color: 'var(--gold)' }} />
                    <span style={{ fontSize: '0.75rem', color: 'var(--gold)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      SBCP \u2014 Membro Titular
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p
                style={{
                  color: 'var(--gold)',
                  fontSize: '0.8rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                }}
              >
                Sobre o Especialista
              </p>
              <h2
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                  color: 'var(--text)',
                  marginBottom: '24px',
                  lineHeight: 1.2,
                }}
              >
                Mais de 25 anos dedicados \u00e0 <span style={{ color: 'var(--gold)' }}>excel\u00eancia</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '20px', lineHeight: 1.8 }}>
                O Dr. Leonello Ellera Bocchese \u00e9 m\u00e9dico graduado pela Pontif\u00edcia Universidade Cat\u00f3lica
                do Rio Grande do Sul, com resid\u00eancia em Cirurgia Geral e Cirurgia Pedi\u00e1trica.
                Especialista e membro permanente da <strong style={{ color: 'var(--text)' }}>Sociedade Brasileira de
                Cirurgia Pl\u00e1stica (SBCP)</strong>, atua na \u00e1rea de Cirurgia Pl\u00e1stica Est\u00e9tica e
                Reconstrutiva.
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '32px', lineHeight: 1.8 }}>
                Integra o corpo cl\u00ednico da <strong style={{ color: 'var(--text)' }}>Adelle Cirurgia Pl\u00e1stica</strong>,
                cl\u00ednica de refer\u00eancia em Florian\u00f3polis que re\u00fane profissionais de alto n\u00edvel em um
                ambiente moderno e seguro.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '32px' }}>
                {[
                  { num: '200+', label: 'Avalia\u00e7\u00f5es Google' },
                  { num: '4.8', label: 'Nota M\u00e9dia' },
                  { num: '25+', label: 'Anos de Experi\u00eancia' },
                  { num: 'SBCP', label: 'Membro Titular' },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      padding: '16px',
                      background: 'rgba(201,169,110,0.05)',
                      border: '1px solid rgba(201,169,110,0.1)',
                      borderRadius: '8px',
                    }}
                  >
                    <div style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', color: 'var(--gold)' }}>{item.num}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>{item.label}</div>
                  </div>
                ))}
              </div>

              <a
                href={whatsappLink('Ol\u00e1, gostaria de saber mais sobre os procedimentos do Dr. Leonello.')}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'var(--gold)',
                  color: 'var(--dark)',
                  padding: '14px 32px',
                  borderRadius: '4px',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                }}
              >
                <WhatsappLogo size={20} weight="duotone" /> Tire suas D\u00favidas
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROCEDIMENTOS */}
      <section id="procedimentos" style={{ padding: '120px 0' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '64px' }}
          >
            <p
              style={{
                color: 'var(--gold)',
                fontSize: '0.8rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              Procedimentos
            </p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', marginBottom: '16px' }}>
              Especialidades <span style={{ color: 'var(--gold)' }}>Cir\u00fargicas</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '500px', margin: '0 auto' }}>
              Procedimentos realizados com t\u00e9cnicas avan\u00e7adas, foco em seguran\u00e7a e resultados naturais.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {PROCEDURES.map((proc, i) => (
              <motion.div
                key={proc.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                style={{
                  padding: '36px',
                  background: 'var(--dark-card)',
                  border: '1px solid var(--dark-border)',
                  borderRadius: '8px',
                  transition: 'border-color .3s, transform .3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(201,169,110,0.3)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--dark-border)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div style={{ color: 'var(--gold)', marginBottom: '16px' }}>{proc.icon}</div>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.25rem', marginBottom: '12px', color: 'var(--text)' }}>
                  {proc.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>{proc.desc}</p>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <a
              href={whatsappLink('Ol\u00e1, gostaria de mais informa\u00e7\u00f5es sobre procedimentos cir\u00fargicos.')}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: 'var(--gold)',
                color: 'var(--dark)',
                padding: '16px 36px',
                borderRadius: '4px',
                fontWeight: 600,
              }}
            >
              <WhatsappLogo size={20} weight="duotone" /> Saiba Mais sobre Procedimentos
            </a>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section id="diferenciais" style={{ padding: '120px 0', background: 'var(--dark-card)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '64px' }}
          >
            <p
              style={{
                color: 'var(--gold)',
                fontSize: '0.8rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              Por que escolher
            </p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
              Diferenciais do <span style={{ color: 'var(--gold)' }}>Dr. Leonello</span>
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {[
              {
                icon: <Certificate size={40} weight="duotone" />,
                title: 'SBCP Certificado',
                desc: 'Membro titular da Sociedade Brasileira de Cirurgia Pl\u00e1stica, garantia de qualifica\u00e7\u00e3o e \u00e9tica profissional.',
              },
              {
                icon: <ShieldCheck size={40} weight="duotone" />,
                title: 'Seguran\u00e7a em Primeiro Lugar',
                desc: 'Procedimentos realizados em centros cir\u00fargicos equipados com tecnologia de ponta e equipe completa.',
              },
              {
                icon: <Sparkle size={40} weight="duotone" />,
                title: 'Resultados Naturais',
                desc: 'Filosofia de respeitar a harmonia natural do corpo, priorizando resultados equilibrados e proporcionais.',
              },
              {
                icon: <Heart size={40} weight="duotone" />,
                title: 'Atendimento Humanizado',
                desc: 'Acompanhamento completo desde a primeira consulta at\u00e9 a total recupera\u00e7\u00e3o p\u00f3s-operat\u00f3ria.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                style={{ textAlign: 'center', padding: '40px 24px' }}
              >
                <div style={{ color: 'var(--gold)', marginBottom: '20px' }}>{item.icon}</div>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" style={{ padding: '120px 0' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '64px' }}
          >
            <p
              style={{
                color: 'var(--gold)',
                fontSize: '0.8rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              Depoimentos
            </p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
              O que dizem nossos <span style={{ color: 'var(--gold)' }}>pacientes</span>
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                style={{
                  padding: '32px',
                  background: 'var(--dark-card)',
                  border: '1px solid var(--dark-border)',
                  borderRadius: '8px',
                }}
              >
                <div style={{ display: 'flex', gap: '2px', marginBottom: '16px' }}>
                  {[...Array(t.stars)].map((_, j) => (
                    <Star key={j} size={16} weight="fill" style={{ color: 'var(--gold)' }} />
                  ))}
                </div>
                <p style={{ color: 'var(--text-muted)', fontStyle: 'italic', lineHeight: 1.7, marginBottom: '20px', fontSize: '0.95rem' }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'rgba(201,169,110,0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <UserCircle size={24} weight="duotone" style={{ color: 'var(--gold)' }} />
                  </div>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: '0.9rem' }}>{t.name}</p>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Paciente</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <a
              href={whatsappLink('Ol\u00e1! Vi os depoimentos e gostaria de agendar uma avalia\u00e7\u00e3o.')}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: 'var(--gold)',
                color: 'var(--dark)',
                padding: '16px 36px',
                borderRadius: '4px',
                fontWeight: 600,
              }}
            >
              <WhatsappLogo size={20} weight="duotone" /> Agendar Avalia\u00e7\u00e3o
            </a>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" style={{ padding: '120px 0', background: 'var(--dark-card)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }} className="contact-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p
                style={{
                  color: 'var(--gold)',
                  fontSize: '0.8rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                }}
              >
                Contato
              </p>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', marginBottom: '24px' }}>
                Agende sua <span style={{ color: 'var(--gold)' }}>consulta</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '40px', lineHeight: 1.8 }}>
                O primeiro passo para a sua transforma\u00e7\u00e3o come\u00e7a com uma consulta personalizada.
                Entre em contato e agende seu hor\u00e1rio.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {[
                  { icon: <MapPin size={24} weight="duotone" />, label: 'Endere\u00e7o', value: ADDRESS },
                  { icon: <Phone size={24} weight="duotone" />, label: 'Telefone', value: PHONE },
                  { icon: <Clock size={24} weight="duotone" />, label: 'Hor\u00e1rio', value: 'Seg \u00e0 Sex \u2014 9h \u00e0s 18h' },
                  { icon: <InstagramLogo size={24} weight="duotone" />, label: 'Instagram', value: '@dr.leonellobocchese' },
                ].map((item) => (
                  <div key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '8px',
                        background: 'rgba(201,169,110,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--gold)',
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        {item.label}
                      </p>
                      <p style={{ color: 'var(--text)', fontSize: '0.95rem' }}>{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              style={{
                padding: '48px',
                background: 'rgba(201,169,110,0.03)',
                border: '1px solid rgba(201,169,110,0.15)',
                borderRadius: '12px',
                textAlign: 'center',
              }}
            >
              <WhatsappLogo size={64} weight="duotone" style={{ color: 'var(--gold)', marginBottom: '24px' }} />
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', marginBottom: '16px' }}>
                Atendimento via WhatsApp
              </h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '32px', lineHeight: 1.7 }}>
                Envie uma mensagem e nossa equipe responder\u00e1 com aten\u00e7\u00e3o e agilidade para
                agendar sua consulta.
              </p>
              <a
                href={whatsappLink('Ol\u00e1, gostaria de agendar uma consulta com o Dr. Leonello Bocchese.')}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'var(--gold)',
                  color: 'var(--dark)',
                  padding: '16px 40px',
                  borderRadius: '4px',
                  fontWeight: 600,
                  fontSize: '1.05rem',
                  width: '100%',
                  justifyContent: 'center',
                }}
              >
                <WhatsappLogo size={22} weight="duotone" /> Enviar Mensagem
              </a>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '16px' }}>
                Resposta em at\u00e9 2 horas \u2022 Atendimento humanizado
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: '48px 0 24px',
          borderTop: '1px solid var(--dark-border)',
          background: 'var(--dark)',
        }}
      >
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '40px' }}>
            <div>
              <h4 style={{ fontFamily: 'var(--serif)', color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '16px' }}>
                Dr. Leonello Bocchese
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                Cirurgi\u00e3o Pl\u00e1stico em Florian\u00f3polis.<br />
                Membro Titular da SBCP.<br />
                {CRM}
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--serif)', fontSize: '1rem', marginBottom: '16px', color: 'var(--text)' }}>Links</h4>
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '8px' }}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--serif)', fontSize: '1rem', marginBottom: '16px', color: 'var(--text)' }}>Contato</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                {ADDRESS}<br />
                {PHONE}<br />
                @dr.leonellobocchese
              </p>
            </div>
          </div>
          <div
            style={{
              borderTop: '1px solid var(--dark-border)',
              paddingTop: '24px',
              textAlign: 'center',
              color: 'var(--text-muted)',
              fontSize: '0.75rem',
            }}
          >
            &copy; {new Date().getFullYear()} Dr. Leonello Bocchese. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={whatsappLink('Ol\u00e1, gostaria de agendar uma consulta com o Dr. Leonello Bocchese.')}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: '#25D366',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
          zIndex: 999,
          transition: 'transform .3s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <WhatsappLogo size={32} weight="fill" style={{ color: '#fff' }} />
      </a>

      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          .about-grid, .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </>
  )
}
