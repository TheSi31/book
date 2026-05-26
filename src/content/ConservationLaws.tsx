"use client";

export const ConservationLaws = () => {
  return (
    <div>
      <h1 style={{ fontSize: "36px", marginBottom: "16px" }}>Законы сохранения</h1>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "24px" }}>
        Фундаментальные законы, утверждающие неизменность некоторых физических величин.
      </p>

      {/* 1. Импульс тела. Импульс системы тел */}
      <h2 style={{ fontSize: "28px", marginTop: "24px", marginBottom: "12px" }}>
        1. Импульс тела. Импульс системы тел
      </h2>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        <strong>Импульс тела (количество движения)</strong> — это векторная физическая величина, равная произведению массы тела на его скорость.
      </p>
      <div style={{ background: "rgba(255,255,255,0.1)", padding: "12px", borderRadius: "8px", marginBottom: "16px", textAlign: "center" }}>
        <code style={{ fontSize: "20px" }}>p = m·v</code>
      </div>
      <ul style={{ fontSize: "18px", lineHeight: 1.6, paddingLeft: "24px", marginBottom: "16px" }}>
        <li><strong>Направление:</strong> Вектор импульса всегда совпадает по направлению с вектором скорости тела.</li>
        <li><strong>Единица измерения:</strong> килограмм-метр в секунду (кг·м/с).</li>
      </ul>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        Если мы рассматриваем не одно тело, а несколько взаимодействующих тел, они образуют <strong>систему тел</strong>.
      </p>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        <strong>Импульс системы тел</strong> — это векторная сумма импульсов всех тел, входящих в эту систему:
      </p>
      <div style={{ background: "rgba(255,255,255,0.1)", padding: "12px", borderRadius: "8px", marginBottom: "16px", textAlign: "center" }}>
        <code style={{ fontSize: "20px" }}>P = p₁ + p₂ + ... + pₙ</code>
      </div>
      <ul style={{ fontSize: "18px", lineHeight: 1.6, paddingLeft: "24px", marginBottom: "16px" }}>
        <li><strong>Внутренние силы:</strong> силы взаимодействия между телами внутри системы.</li>
        <li><strong>Внешние силы:</strong> силы, действующие на тела системы со стороны тел, не входящих в неё.</li>
      </ul>

      {/* 2. Закон сохранения импульса. Реактивное движение */}
      <h2 style={{ fontSize: "28px", marginTop: "24px", marginBottom: "12px" }}>
        2. Закон сохранения импульса. Реактивное движение
      </h2>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        <strong>Закон сохранения импульса (ЗСИ):</strong> В замкнутой (изолированной) системе тел векторная сумма импульсов всех тел остаётся постоянной при любых взаимодействиях этих тел между собой.
      </p>
      <div style={{ background: "rgba(255,255,255,0.1)", padding: "12px", borderRadius: "8px", marginBottom: "16px", textAlign: "center" }}>
        <code style={{ fontSize: "20px" }}>p₁ + p₂ = p₁′ + p₂′</code>
      </div>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        Система считается <strong>замкнутой</strong>, если внешние силы на неё не действуют или их действие скомпенсировано.
      </p>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        <strong>Реактивное движение:</strong> Это движение, которое возникает, когда от тела с некоторой скоростью отделяется его часть.
      </p>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        Примером является движение ракеты: при выбросе продуктов сгорания топлива вниз, сама ракета получает импульс, направленный вверх.
      </p>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        <strong>Важно отметить:</strong> для реактивного движения не требуется наличие внешней среды (опоры или воздуха), поэтому оно используется для полётов в космосе.
      </p>

      {/* 3. Механическая работа. Мощность */}
      <h2 style={{ fontSize: "28px", marginTop: "24px", marginBottom: "12px" }}>
        3. Механическая работа. Мощность
      </h2>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        <strong>Механическая работа (A)</strong> — это скалярная величина, характеризующая процесс изменения состояния системы под действием силы. Работа совершается только тогда, когда под действием силы тело перемещается.
      </p>
      <div style={{ background: "rgba(255,255,255,0.1)", padding: "12px", borderRadius: "8px", marginBottom: "16px", textAlign: "center" }}>
        <code style={{ fontSize: "20px" }}>A = F·s·cosα</code>
      </div>
      <ul style={{ fontSize: "18px", lineHeight: 1.6, paddingLeft: "24px", marginBottom: "16px" }}>
        <li>Если сила направлена по движению (α = 0°), работа <strong>положительна</strong>.</li>
        <li>Если сила направлена против движения (α = 180°), работа <strong>отрицательна</strong> (например, работа силы трения).</li>
        <li>Если сила перпендикулярна перемещению (α = 90°), работа равна <strong>нулю</strong>.</li>
      </ul>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        <strong>Единица измерения:</strong> Джоуль (Дж).
      </p>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        <strong>Мощность (N)</strong> — это величина, показывающая скорость совершения работы (работу в единицу времени).
      </p>
      <div style={{ background: "rgba(255,255,255,0.1)", padding: "12px", borderRadius: "8px", marginBottom: "16px", textAlign: "center" }}>
        <code style={{ fontSize: "20px" }}>N = A/t = F·v</code>
      </div>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        <strong>Единица измерения:</strong> Ватт (Вт).
      </p>

      {/* 4. Кинетическая и потенциальная энергия */}
      <h2 style={{ fontSize: "28px", marginTop: "24px", marginBottom: "12px" }}>
        4. Кинетическая и потенциальная энергия
      </h2>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        <strong>Энергия</strong> — это физическая величина, характеризующая способность тела или системы тел совершить работу.
      </p>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        <strong>Кинетическая энергия (Eₖ):</strong> Энергия движения тела. Она зависит от массы и квадрата скорости:
      </p>
      <div style={{ background: "rgba(255,255,255,0.1)", padding: "12px", borderRadius: "8px", marginBottom: "16px", textAlign: "center" }}>
        <code style={{ fontSize: "20px" }}>Eₖ = mv² / 2</code>
      </div>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        Работа всех сил, приложенных к телу, равна изменению его кинетической энергии.
      </p>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        <strong>Потенциальная энергия (Eₚ):</strong> Энергия взаимодействия тел или частей одного тела, зависящая от их взаимного расположения.
      </p>
      <ul style={{ fontSize: "18px", lineHeight: 1.6, paddingLeft: "24px", marginBottom: "16px" }}>
        <li>В поле тяжести: <code style={{ background: "rgba(255,255,255,0.15)", padding: "2px 6px", borderRadius: "4px" }}>Eₚ = mgh</code> (отсчитывается относительно выбранного нулевого уровня).</li>
        <li>Упруго деформированного тела: <code style={{ background: "rgba(255,255,255,0.15)", padding: "2px 6px", borderRadius: "4px" }}>Eₚ = kx² / 2</code> (где k — жёсткость, x — деформация).</li>
      </ul>

      {/* 5. Закон сохранения энергии */}
      <h2 style={{ fontSize: "28px", marginTop: "24px", marginBottom: "12px" }}>
        5. Закон сохранения энергии
      </h2>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        <strong>Полная механическая энергия (E)</strong> — это сумма кинетической и потенциальной энергий системы:
      </p>
      <div style={{ background: "rgba(255,255,255,0.1)", padding: "12px", borderRadius: "8px", marginBottom: "16px", textAlign: "center" }}>
        <code style={{ fontSize: "20px" }}>E = Eₖ + Eₚ</code>
      </div>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        <strong>Закон сохранения механической энергии (ЗСЭ):</strong> В замкнутой системе тел, между которыми действуют только силы тяготения и силы упругости (консервативные силы), полная механическая энергия остаётся неизменной.
      </p>
      <div style={{ background: "rgba(255,255,255,0.1)", padding: "12px", borderRadius: "8px", marginBottom: "16px", textAlign: "center" }}>
        <code style={{ fontSize: "20px" }}>Eₖ₁ + Eₚ₁ = Eₖ₂ + Eₚ₂</code>
      </div>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        Если же в системе действуют силы трения или сопротивления, часть механической энергии переходит во внутреннюю энергию (тепло), и полная механическая энергия уменьшается, хотя <strong>общая энергия (с учётом тепла) всё равно сохраняется</strong>.
      </p>
    </div>
  );
};