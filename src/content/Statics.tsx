"use client";

export const Statics = () => {
  return (
    <div>
      <h1 style={{ fontSize: "36px", marginBottom: "16px" }}>Статика</h1>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "24px" }}>
        Статика — раздел механики, изучающий условия равновесия тел.
      </p>

      {/* 1. Статика и условия равновесия тел */}
      <h2 style={{ fontSize: "28px", marginTop: "24px", marginBottom: "12px" }}>
        1. Статика и условия равновесия тел
      </h2>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        <strong>Статика</strong> — раздел механики, изучающий условия равновесия тел под действием приложенных к ним сил.
      </p>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        Для того чтобы протяженное тело находилось в равновесии, должны выполняться два условия:
      </p>
      <ul style={{ fontSize: "18px", lineHeight: 1.6, paddingLeft: "24px", marginBottom: "16px" }}>
        <li><strong>Первое условие:</strong> Векторная сумма всех сил, действующих на тело, должна быть равна нулю <code style={{ background: "rgba(255,255,255,0.15)", padding: "2px 6px", borderRadius: "4px" }}>∑F = 0</code>. Это исключает поступательное движение тела.</li>
        <li><strong>Второе условие (правило моментов):</strong> Алгебраическая сумма моментов всех сил, действующих на тело относительно любой оси вращения, должна быть равна нулю <code style={{ background: "rgba(255,255,255,0.15)", padding: "2px 6px", borderRadius: "4px" }}>∑M = 0</code>.</li>
      </ul>
      <div style={{ background: "rgba(255,255,255,0.1)", padding: "12px", borderRadius: "8px", marginBottom: "16px", textAlign: "center" }}>
        <code style={{ fontSize: "20px" }}>M = F·l</code>
      </div>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        <strong>Момент силы (M)</strong> — это физическая величина, равная произведению модуля силы (F) на её плечо (l). <strong>Плечо силы</strong> — это кратчайшее расстояние от оси вращения до линии действия силы.
      </p>

      {/* 2. Простые механизмы */}
      <h2 style={{ fontSize: "28px", marginTop: "24px", marginBottom: "12px" }}>
        2. Простые механизмы
      </h2>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        Простые механизмы используются для преобразования силы и изменения направления её действия.
      </p>
      <h3 style={{ fontSize: "24px", marginTop: "20px", marginBottom: "10px" }}>Рычаг</h3>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        Твердое тело, способное вращаться вокруг неподвижной опоры. Условие равновесия рычага: силы, действующие на него, обратно пропорциональны плечам этих сил:
      </p>
      <div style={{ background: "rgba(255,255,255,0.1)", padding: "12px", borderRadius: "8px", marginBottom: "16px", textAlign: "center" }}>
        <code style={{ fontSize: "20px" }}>F₁/F₂ = l₂/l₁</code>
      </div>
      
      <h3 style={{ fontSize: "24px", marginTop: "20px", marginBottom: "10px" }}>Блоки</h3>
      <ul style={{ fontSize: "18px", lineHeight: 1.6, paddingLeft: "24px", marginBottom: "16px" }}>
        <li><strong>Неподвижный блок:</strong> Не даёт выигрыша в силе, но позволяет менять направление её приложения.</li>
        <li><strong>Подвижный блок:</strong> Даёт выигрыш в силе в 2 раза, но при этом мы в 2 раза проигрываем в расстоянии.</li>
      </ul>

      {/* 3. Наклонная плоскость и «Золотое правило механики» */}
      <h2 style={{ fontSize: "28px", marginTop: "24px", marginBottom: "12px" }}>
        3. Наклонная плоскость и «Золотое правило механики»
      </h2>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        <strong>Наклонная плоскость</strong> позволяет поднять тяжелый груз, прикладывая силу, значительно меньшую веса этого груза.
      </p>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        <strong>«Золотое правило механики»</strong> гласит: <em>ни один из простых механизмов не даёт выигрыша в работе</em>. Во сколько раз мы выигрываем в силе, во столько же раз мы проигрываем в расстоянии.
      </p>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        В реальных условиях часть работы тратится на преодоление сил трения, поэтому вводится понятие <strong>Коэффициента полезного действия (КПД)</strong>:
      </p>
      <div style={{ background: "rgba(255,255,255,0.1)", padding: "12px", borderRadius: "8px", marginBottom: "16px", textAlign: "center" }}>
        <code style={{ fontSize: "20px" }}>η = (Aполезная / Aзатраченная) · 100%</code>
      </div>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        КПД любого реального механизма всегда <strong>меньше 100%</strong>.
      </p>

      {/* 4. Центр тяжести и виды равновесия */}
      <h2 style={{ fontSize: "28px", marginTop: "24px", marginBottom: "12px" }}>
        4. Центр тяжести и виды равновесия
      </h2>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        <strong>Центр тяжести</strong> — это точка приложения равнодействующей всех сил тяжести, действующих на отдельные части тела.
      </p>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        Различают три вида равновесия тел, имеющих точку опоры:
      </p>
      <ul style={{ fontSize: "18px", lineHeight: 1.6, paddingLeft: "24px", marginBottom: "16px" }}>
        <li><strong>Устойчивое:</strong> При малом отклонении тело возвращается в исходное положение (центр тяжести при отклонении поднимается).</li>
        <li><strong>Неустойчивое:</strong> При малом отклонении тело ещё больше удаляется от положения равновесия (центр тяжести опускается).</li>
        <li><strong>Безразличное:</strong> При отклонении тело остаётся в равновесии в новом положении (высота центра тяжести не меняется).</li>
      </ul>

      {/* 5. Действие жидкости и газа на погруженные тела. Закон Архимеда */}
      <h2 style={{ fontSize: "28px", marginTop: "24px", marginBottom: "12px" }}>
        5. Действие жидкости и газа на погружённые тела. Закон Архимеда
      </h2>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        На любое тело, погружённое в жидкость (или газ), действует выталкивающая сила, обусловленная разностью давлений на нижнюю и верхнюю грани тела.
      </p>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        <strong>Закон Архимеда:</strong> На тело, погружённое в жидкость или газ, действует выталкивающая сила, направленная вертикально вверх и равная весу жидкости или газа в объёме, вытесненном этим телом.
      </p>
      <div style={{ background: "rgba(255,255,255,0.1)", padding: "12px", borderRadius: "8px", marginBottom: "16px", textAlign: "center" }}>
        <code style={{ fontSize: "20px" }}>Fₐ = ρ·g·Vпогружённой_части</code>
      </div>

      <h3 style={{ fontSize: "24px", marginTop: "20px", marginBottom: "10px" }}>Условия плавания тел</h3>
      <ul style={{ fontSize: "18px", lineHeight: 1.6, paddingLeft: "24px", marginBottom: "16px" }}>
            <li>Если <code style={{ background: "rgba(255,255,255,0.15)", padding: "2px 6px", borderRadius: "4px" }}>Fₐ &gt; Fтяж</code> (или <code style={{ background: "rgba(255,255,255,0.15)", padding: "2px 6px", borderRadius: "4px" }}>ρтела &lt; ρж</code>), тело <strong>всплывает</strong>.</li>
            <li>Если <code style={{ background: "rgba(255,255,255,0.15)", padding: "2px 6px", borderRadius: "4px" }}>Fₐ = Fтяж</code> (или <code style={{ background: "rgba(255,255,255,0.15)", padding: "2px 6px", borderRadius: "4px" }}>ρтела = ρж</code>), тело <strong>плавает внутри жидкости</strong>.</li>
            <li>Если <code style={{ background: "rgba(255,255,255,0.15)", padding: "2px 6px", borderRadius: "4px" }}>Fₐ &lt; Fтяж</code> (или <code style={{ background: "rgba(255,255,255,0.15)", padding: "2px 6px", borderRadius: "4px" }}>ρтела &gt; ρж</code>), тело <strong>тонет</strong>.</li>
      </ul>
    </div>
  );
};