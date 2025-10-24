# Frese Recruiting Design System

Complete design system with colors, typography, spacing, and component styles.

---

## 🎨 Color Palette

### Primary Colors
```css
--header: #002544;           /* Deep navy blue - Main headers and text */
--paragraph: rgba(0, 37, 68, 0.7);  /* 70% opacity navy - Body text */
--blue: #0ee7f6;             /* Cyan/Turquoise - Primary accent */
--neutral-bg: #f8fcff;       /* Light blue-white - Section backgrounds */
--white: #ffffff;            /* Pure white */
--black: #000000;            /* Pure black */
```

### Gradient Colors
```css
/* Primary Gradient (Cyan to Teal) */
background: linear-gradient(90deg, #0EE7F6 0%, #088790 100%);

/* Hero Background Gradient (Navy to Blue) */
background: linear-gradient(0deg, #0778ae, #00559d 40%, #002544);

/* Hero Alternative Gradient */
background: linear-gradient(0deg, #002544, #004076);

/* Neutral Gradient (Light blue to white) */
background: linear-gradient(180deg, #f8fcff, #ffffff);
```

### Text Highlight Colors
```css
.text-span-2 {
  color: #0ee7f6;            /* Cyan highlight */
}

.text-span-3 {
  color: #002544;            /* Navy highlight */
}
```

### Hover/Interactive Colors
```css
--blue-hover: #0dc9d6;       /* Darker cyan for hover states */
--secondary-blue: #3bcdd7;   /* Light cyan variant */
--teal: #088790;             /* Darker teal */
--link-color: #16adb8;       /* Link color */
```

---

## 📝 Typography

### Font Family
```css
font-family: 'Poppins', sans-serif;
```

### Font Weights
```css
font-weight: 400;  /* Regular */
font-weight: 500;  /* Medium */
font-weight: 600;  /* Semi-Bold */
```

### Headings
```css
/* H1 - Hero Titles */
h1 {
  font-size: 65px;
  font-weight: 600;
  line-height: 110%;
  letter-spacing: -0.03em;
  color: #002544;
}

/* H2 - Section Titles */
h2 {
  font-size: 60px;
  font-weight: 600;
  line-height: 110%;
  letter-spacing: -0.03em;
  color: #002544;
}

/* H3 */
h3 {
  font-size: 50px;
  font-weight: 600;
  line-height: 110%;
  letter-spacing: -0.03em;
  color: #002544;
}

/* H4 */
h4 {
  font-size: 38px;
  font-weight: 600;
  line-height: 110%;
  letter-spacing: -0.03em;
  color: #002544;
}

/* H5 */
h5 {
  font-size: 30px;
  font-weight: 600;
  line-height: 110%;
  letter-spacing: -0.03em;
  color: #002544;
}

/* H6 */
h6 {
  font-size: 26px;
  font-weight: 600;
  line-height: 110%;
  letter-spacing: -0.03em;
  color: #002544;
}
```

### Body Text
```css
/* Paragraph Default */
p {
  font-size: 18px;
  line-height: 135%;
  color: rgba(0, 37, 68, 0.7);
}

/* Large Paragraph */
.paragraph_large {
  font-size: 20px;
  line-height: 135%;
  color: rgba(0, 37, 68, 0.7);
}

/* Small Text */
.paragraph_small {
  font-size: 16px;
  line-height: 135%;
}

/* Card Title */
.card_title {
  font-size: 26px;
  font-weight: 600;
  line-height: 110%;
  letter-spacing: -0.03em;
  color: #002544;
}

/* Small Title */
.small_title {
  font-size: 22px;
  font-weight: 600;
  line-height: 110%;
  letter-spacing: -0.03em;
  color: #002544;
}
```

### Mobile Typography
```css
/* Mobile - H1 */
@media (max-width: 767px) {
  h1 { font-size: 34px; }
  h2 { font-size: 30px; }
  h3 { font-size: 25px; }
  h4 { font-size: 22px; }
  h5 { font-size: 20px; }
  h6 { font-size: 18px; }
}
```

---

## 🎯 Buttons

### Primary Button (White)
```css
.primary_button {
  background-color: #ffffff;
  color: #002544;
  border-radius: 100px;
  padding: 25px 30px;
  font-size: 20px;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: -0.03em;
  transition: all 0.3s;
  cursor: pointer;
  text-decoration: none;
}

.primary_button:hover {
  background-color: #0ee7f6;
  transform: translateY(-2px);
}
```

### Primary Button (Cyan)
```css
.primary_button.blue {
  background-color: #0ee7f6;
  color: #002544;
}

.primary_button.blue:hover {
  background-color: #ffffff;
}
```

### Nav Button
```css
.nav_button {
  background-color: #ffffff;
  color: #002544;
  border-radius: 50px;
  padding: 18px 25px;
  font-size: 16px;
  font-weight: 600;
  line-height: 100%;
  transition: all 0.3s;
}

.nav_button:hover {
  background-color: #0ee7f6;
}
```

### Button Wrapper (Glass Effect)
```css
.button_wrapper {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 100px;
  padding: 5px;
  display: flex;
}
```

---

## 🃏 Cards

### Solution Card (White)
```css
.solution_card {
  background-color: #ffffff;
  border-radius: 30px;
  padding: 40px;
  box-shadow: 0 40px 120px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;
}

.solution_card:hover {
  transform: translateY(-5px);
}
```

### Case Study Card
```css
.case_study_wrapper {
  background-color: #ffffff;
  border: 1px solid rgba(0, 37, 68, 0.05);
  border-radius: 30px;
  padding: 10px 35px 10px 10px;
  display: flex;
  gap: 40px;
  box-shadow: 0 24px 24px -12px rgba(0, 0, 0, 0.05);
}
```

### Timeline Box
```css
.timeline_box {
  background-color: #ffffff;
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 24px 24px -12px rgba(0, 0, 0, 0.05);
}
```

### Glass Morphism Card
```css
.glass-morphism {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 0.5px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
}
```

---

## 🏷️ Badges & Tags

### Sub Header (White Background)
```css
.sub_header_white {
  background-color: #ffffff;
  color: #3bcdd7;
  border: 0.5px solid rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  padding: 12px 18px;
  font-size: 16px;
  font-weight: 600;
  line-height: 100%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}
```

### Sub Header (Gradient Text)
```css
.sub_header_gradient {
  background-image: linear-gradient(90deg, #0ee7f6, #088790);
  color: #fff;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}
```

### Sub Header (Transparent)
```css
.sub_header_transparent {
  color: #0ee7f6;
  background-color: rgba(255, 255, 255, 0.05);
  border: 0.5px solid rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  padding: 14px 18px;
  font-size: 16px;
  font-weight: 600;
}
```

### Hero Badge
```css
.sub_header_hero {
  color: rgba(255, 255, 255, 0.8);
  background-color: rgba(255, 255, 255, 0.05);
  border: 0.5px solid rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  padding: 14px 18px;
  font-size: 18px;
  font-weight: 600;
}
```

---

## 📏 Spacing System

### Section Padding
```css
/* Default Section */
.section {
  padding-top: 100px;
  padding-bottom: 100px;
}

/* Mobile Section */
@media (max-width: 767px) {
  .section {
    padding-top: 50px;
    padding-bottom: 50px;
  }
}
```

### Container Width
```css
.container_default {
  max-width: 1230px;
  padding-left: 40px;
  padding-right: 40px;
}

/* Mobile Container */
@media (max-width: 767px) {
  .container_default {
    padding-left: 20px;
    padding-right: 20px;
  }
}
```

### Gap Sizes
```css
gap: 10px;   /* Small */
gap: 20px;   /* Medium */
gap: 40px;   /* Large */
gap: 60px;   /* Extra Large */
gap: 80px;   /* XXL */
```

---

## 🎭 Effects & Shadows

### Box Shadows
```css
/* Light Shadow */
box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);

/* Medium Shadow */
box-shadow: 0 24px 24px -12px rgba(0, 0, 0, 0.05);

/* Strong Shadow */
box-shadow: 0 40px 120px rgba(0, 0, 0, 0.05);

/* Hover Shadow */
box-shadow: 0 8px 18px rgba(0, 0, 0, 0.1);

/* Glow Effect */
box-shadow: 0 20px 80px rgba(14, 231, 246, 0.3);
```

### Border Radius
```css
border-radius: 8px;    /* Small */
border-radius: 14px;   /* Medium */
border-radius: 20px;   /* Large */
border-radius: 30px;   /* Extra Large */
border-radius: 50px;   /* Pill (buttons) */
border-radius: 100px;  /* Full Pill */
border-radius: 50%;    /* Circle */
```

### Glass Morphism
```css
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
border: 0.5px solid rgba(255, 255, 255, 0.1);
```

### Gradient Text
```css
.gradient-text {
  background: linear-gradient(90deg, #0EE7F6 0%, #088790 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

## 🎬 Animations

### Fade In
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}
```

### Fade In Up
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 1s ease-out forwards;
}
```

### Transitions
```css
/* Default Transition */
transition: all 0.3s ease;

/* Hover Transform */
transform: translateY(-5px);

/* Scale */
transform: scale(1.05);
```

---

## 🔲 Grid & Layout

### Max Widths
```css
max-width: 330px;   /* Small */
max-width: 500px;   /* Medium */
max-width: 700px;   /* Large */
max-width: 900px;   /* Extra Large */
max-width: 1230px;  /* Container */
```

### Timeline Layout
```css
.timeline_content {
  display: grid;
  grid-template-columns: 1fr 180px 1fr;
  grid-template-rows: auto;
  max-width: 1050px;
  margin: 80px auto;
}
```

### 3-Column Grid
```css
.grid-3-col {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

@media (max-width: 767px) {
  .grid-3-col {
    grid-template-columns: 1fr;
  }
}
```

---

## 📱 Responsive Breakpoints

```css
/* Desktop First Approach */

/* Tablet */
@media screen and (max-width: 991px) {
  /* Tablet styles */
}

/* Mobile */
@media screen and (max-width: 767px) {
  /* Mobile styles */
}

/* Small Mobile */
@media screen and (max-width: 479px) {
  /* Small mobile styles */
}
```

---

## 🎨 Usage Examples

### Example: Hero Section
```jsx
<section style={{
  background: 'linear-gradient(0deg, #0778ae, #00559d 40%, #002544)',
  paddingTop: '25px',
  paddingBottom: '100px'
}}>
  <div style={{ maxWidth: '1230px', padding: '0 40px', margin: '0 auto' }}>
    <h1 style={{
      color: '#ffffff',
      fontSize: '65px',
      fontWeight: 600,
      lineHeight: '110%',
      letterSpacing: '-0.03em',
      textAlign: 'center'
    }}>
      Your Hero Title
    </h1>
  </div>
</section>
```

### Example: Button
```jsx
<button style={{
  backgroundColor: '#0ee7f6',
  color: '#002544',
  borderRadius: '100px',
  padding: '25px 30px',
  fontSize: '20px',
  fontWeight: 600,
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.3s'
}}>
  Get Started
</button>
```

### Example: Card
```jsx
<div style={{
  backgroundColor: '#ffffff',
  borderRadius: '30px',
  padding: '40px',
  boxShadow: '0 40px 120px rgba(0, 0, 0, 0.05)'
}}>
  <h3 style={{
    color: '#002544',
    fontSize: '26px',
    fontWeight: 600,
    marginBottom: '10px'
  }}>Card Title</h3>
  <p style={{
    color: 'rgba(0, 37, 68, 0.7)',
    fontSize: '18px',
    lineHeight: '135%'
  }}>Card content goes here</p>
</div>
```

---

## 🎯 Key Design Principles

1. **Clean & Minimal**: Focus on white space and clear hierarchy
2. **Professional**: Navy blue conveys trust and professionalism
3. **Modern Accent**: Cyan/turquoise adds energy and modernity
4. **Readable**: High contrast ratios with proper font sizes
5. **Smooth Interactions**: Subtle animations and transitions
6. **Responsive**: Mobile-first approach with proper breakpoints
7. **Glass Morphism**: Modern frosted glass effects for depth
8. **Rounded Corners**: Friendly, approachable aesthetic

---

## 📦 Quick Reference

**Primary Color**: `#002544` (Navy)
**Accent Color**: `#0ee7f6` (Cyan)
**Background**: `#f8fcff` (Light Blue-White)
**Font**: Poppins (400, 500, 600)
**Border Radius**: 20-30px (cards), 100px (buttons)
**Shadow**: `0 24px 24px -12px rgba(0, 0, 0, 0.05)`
**Transition**: `all 0.3s ease`

---

This design system provides everything you need to replicate the Frese Recruiting aesthetic in any application!
