"use client";

export const Dynamics = () => {
  return (
    <div>
      <h1 style={{ fontSize: "36px", marginBottom: "16px" }}>Динамика</h1>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "24px" }}>
        Динамика — раздел механики, изучающий причины движения тел (взаимодействия).
      </p>

      {/* 1. Первый закон Ньютона */}
      <h2 style={{ fontSize: "28px", marginTop: "24px", marginBottom: "12px" }}>
        1. Динамика. Первый закон Ньютона
      </h2>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        <strong>Динамика</strong> — это раздел механики, который отвечает на вопрос, почему тело движется именно так, а не иначе. Она изучает взаимодействие тел, которое является причиной изменения их скорости.
      </p>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        <strong>Первый закон Ньютона (Закон инерции):</strong> Существуют такие системы отсчета, называемые инерциальными (ИСО), относительно которых тела сохраняют свою скорость неизменной (в том числе и состояние покоя), если на них не действуют силы или действие этих сил скомпенсировано (равнодействующая равна нулю).
      </p>
      <ul style={{ fontSize: "18px", lineHeight: 1.6, paddingLeft: "24px", marginBottom: "16px" }}>
        <li><strong>Инерция</strong> — это явление сохранения скорости тела при отсутствии внешних воздействий.</li>
        <li><strong>Инертность</strong> — свойство тела сопротивляться изменению его скорости (мерой инертности является масса).</li>
      </ul>

      {/* 2. Второй закон Ньютона */}
      <h2 style={{ fontSize: "28px", marginTop: "24px", marginBottom: "12px" }}>
        2. Второй закон Ньютона
      </h2>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        Этот закон устанавливает количественную связь между силой, массой и ускорением.
      </p>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        <strong>Формулировка:</strong> Ускорение тела прямо пропорционально равнодействующей всех сил, действующих на него, и обратно пропорционально его массе.
      </p>
      <div style={{ background: "rgba(255,255,255,0.1)", padding: "12px", borderRadius: "8px", marginBottom: "16px", textAlign: "center" }}>
        <code style={{ fontSize: "20px" }}>a = Fравн / m</code>
        <br />
        <code style={{ fontSize: "20px" }}>F = m·a</code>
      </div>
      <ul style={{ fontSize: "18px", lineHeight: 1.6, paddingLeft: "24px", marginBottom: "16px" }}>
        <li><strong>Сила (F)</strong> — векторная величина, измеряется в <strong>Ньютонах (Н)</strong>. 1 Н — это сила, которая телу массой 1 кг сообщает ускорение 1 м/с².</li>
        <li><strong>Равнодействующая сила</strong> — это векторная сумма всех сил, приложенных к телу.</li>
      </ul>

      {/* 3. Третий закон Ньютона */}
      <h2 style={{ fontSize: "28px", marginTop: "24px", marginBottom: "12px" }}>
        3. Третий закон Ньютона
      </h2>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        Закон описывает взаимодействие двух тел.
      </p>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        <strong>Формулировка:</strong> Силы, с которыми два тела действуют друг на друга, равны по модулю, противоположны по направлению и направлены вдоль одной прямой.
      </p>
      <div style={{ background: "rgba(255,255,255,0.1)", padding: "12px", borderRadius: "8px", marginBottom: "16px", textAlign: "center" }}>
        <code style={{ fontSize: "20px" }}>F₁₂ = -F₂₁</code>
      </div>
      <ul style={{ fontSize: "18px", lineHeight: 1.6, paddingLeft: "24px", marginBottom: "16px" }}>
        <li>Силы всегда возникают парами.</li>
        <li>Силы имеют одинаковую физическую природу.</li>
        <li>Силы не компенсируют друг друга, так как они приложены к разным телам.</li>
      </ul>

      {/* 4. Силы трения. Силы сопротивления среды */}
      <h2 style={{ fontSize: "28px", marginTop: "24px", marginBottom: "12px" }}>
        4. Силы трения. Силы сопротивления среды
      </h2>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        Сила трения возникает при соприкосновении поверхностей тел и препятствует их относительному движению.
      </p>
      <ul style={{ fontSize: "18px", lineHeight: 1.6, paddingLeft: "24px", marginBottom: "16px" }}>
        <li><strong>Трение покоя:</strong> препятствует началу движения. Максимальная сила трения покоя пропорциональна силе нормального давления.</li>
        <li><strong>Трение скольжения:</strong> возникает при движении одного тела по поверхности другого.</li>
      </ul>
      <div style={{ background: "rgba(255,255,255,0.1)", padding: "12px", borderRadius: "8px", marginBottom: "16px", textAlign: "center" }}>
        <code style={{ fontSize: "20px" }}>Fтр = μ·N</code>
      </div>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        где <strong>μ</strong> — коэффициент трения (зависит от материалов и качества обработки), <strong>N</strong> — сила нормальной реакции опоры.
      </p>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        <strong>Сопротивление среды:</strong> возникает при движении тела в жидкости или газе. В отличие от сухого трения, здесь нет трения покоя, а сила сопротивления сильно зависит от скорости движения (F ∼ v при малых скоростях и F ∼ v² при больших).
      </p>

      {/* 5. Движение тела, брошенного под углом к горизонту */}
      <h2 style={{ fontSize: "28px", marginTop: "24px", marginBottom: "12px" }}>
        5. Движение тела, брошенного под углом к горизонту
      </h2>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        Это движение можно разложить на два независимых процесса:
      </p>
      <ul style={{ fontSize: "18px", lineHeight: 1.6, paddingLeft: "24px", marginBottom: "16px" }}>
        <li><strong>По горизонтали (OX):</strong> тело движется равномерно со скоростью <code style={{ background: "rgba(255,255,255,0.15)", padding: "2px 6px", borderRadius: "4px" }}>vₓ = v₀·cosα</code> (сопротивлением воздуха обычно пренебрегают).</li>
        <li><strong>По вертикали (OY):</strong> тело движется равноускоренно с ускорением свободного падения g, направленным вниз. <code style={{ background: "rgba(255,255,255,0.15)", padding: "2px 6px", borderRadius: "4px" }}>vᵧ = v₀·sinα − g·t</code></li>
      </ul>
      <ul style={{ fontSize: "18px", lineHeight: 1.6, paddingLeft: "24px", marginBottom: "16px" }}>
        <li><strong>Траектория</strong> — парабола.</li>
        <li>Время подъема равно времени падения (на одном уровне).</li>
        <li>Дальность полета максимальна при угле <strong>45°</strong>.</li>
      </ul>

      {/* 6. Закон всемирного тяготения */}
      <h2 style={{ fontSize: "28px", marginTop: "24px", marginBottom: "12px" }}>
        6. Закон всемирного тяготения
      </h2>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        Сформулирован И. Ньютоном и гласит, что любые два тела притягиваются друг к другу.
      </p>
      <div style={{ background: "rgba(255,255,255,0.1)", padding: "12px", borderRadius: "8px", marginBottom: "16px", textAlign: "center" }}>
        <code style={{ fontSize: "20px" }}>F = G·(m₁·m₂) / r²</code>
      </div>
      <ul style={{ fontSize: "18px", lineHeight: 1.6, paddingLeft: "24px", marginBottom: "16px" }}>
        <li><strong>G</strong> — гравитационная постоянная <code style={{ background: "rgba(255,255,255,0.15)", padding: "2px 6px", borderRadius: "4px" }}>6,67·10⁻¹¹ Н·м²/кг²</code>.</li>
        <li>Сила притяжения зависит от масс тел и обратно пропорциональна квадрату расстояния между ними.</li>
      </ul>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        <strong>Ускорение свободного падения (g):</strong> на поверхности Земли <code style={{ background: "rgba(255,255,255,0.15)", padding: "2px 6px", borderRadius: "4px" }}>g = G·(M₃ / R₃²) ≈ 9,8 м/с²</code>.
      </p>

      {/* 7. Вес. Невесомость и перегрузки */}
      <h2 style={{ fontSize: "28px", marginTop: "24px", marginBottom: "12px" }}>
        7. Вес. Невесомость и перегрузки
      </h2>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        Многие путают массу и вес. <strong>Масса</strong> — это количество вещества (скаляр), а <strong>вес</strong> — это сила (вектор).
      </p>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        <strong>Вес (P)</strong> — это сила, с которой тело вследствие притяжения к Земле действует на опору или подвес.
      </p>
      <ul style={{ fontSize: "18px", lineHeight: 1.6, paddingLeft: "24px", marginBottom: "16px" }}>
        <li>Если тело и опора неподвижны (или движутся равномерно), то <strong>P = mg</strong>.</li>
        <li><strong>Перегрузка:</strong> возникает, когда опора движется с ускорением a, направленным вверх (против g). Вес увеличивается: <code style={{ background: "rgba(255,255,255,0.15)", padding: "2px 6px", borderRadius: "4px" }}>P = m(g + a)</code>.</li>
        <li><strong>Невесомость:</strong> состояние, при котором тело не действует на опору (P = 0). Это происходит, когда тело движется только под действием силы тяжести (свободное падение, движение на орбите), т.е. когда <strong>a = g</strong> и направлено вниз.</li>
      </ul>
    </div>
  );
};