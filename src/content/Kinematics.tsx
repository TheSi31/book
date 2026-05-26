"use client";

export const Kinematics = () => {
  return (
    <div>
      <h1 style={{ fontSize: "36px", marginBottom: "16px" }}>Кинематика</h1>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "24px" }}>
        Кинематика — раздел механики, изучающий движение тел без учёта причин,
        вызывающих это движение.
      </p>

      {/* 1. Скалярные и векторные величины */}
      <h2 style={{ fontSize: "28px", marginTop: "24px", marginBottom: "12px" }}>
        1. Скалярные и векторные величины. Действия над векторами
      </h2>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        В физике все величины делятся на две большие группы: <strong>скалярные</strong> и <strong>векторные</strong>.
      </p>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        <strong>Скалярные величины</strong> характеризуются только числовым значением (модулем). Примерами являются масса, время, путь, температура и плотность. Для работы с ними достаточно правил обычной арифметики.
      </p>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        <strong>Векторные величины</strong> имеют не только числовое значение, но и направление в пространстве. К ним относятся перемещение, скорость, ускорение и сила.
      </p>

      <h3 style={{ fontSize: "24px", marginTop: "20px", marginBottom: "10px" }}>Действия над векторами</h3>
      <ul style={{ fontSize: "18px", lineHeight: 1.6, paddingLeft: "24px", marginBottom: "16px" }}>
        <li><strong>Сложение:</strong> Основными способами являются правило треугольника (начало второго вектора совмещается с концом первого) и правило параллелограмма (оба вектора выходят из одной точки).</li>
        <li><strong>Вычитание:</strong> Чтобы вычесть из вектора a вектор b, нужно к вектору a прибавить вектор, противоположный b (−b).</li>
        <li><strong>Умножение на скаляр:</strong> При умножении вектора на число k получается новый вектор, модуль которого в |k| раз больше исходного. Если k &gt; 0, направление сохраняется; если k &lt; 0, направление меняется на противоположное.</li>
      </ul>

      {/* 2. Проекция вектора на ось */}
      <h2 style={{ fontSize: "28px", marginTop: "24px", marginBottom: "12px" }}>
        2. Проекция вектора на ось
      </h2>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        Для перехода от геометрического описания движения к алгебраическому используют проекции векторов на координатные оси.
      </p>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        <strong>Проекция вектора</strong> — это скалярная величина. Она определяется как разность координат конца и начала вектора на выбранную ось:
      </p>
      <div style={{ background: "rgba(255,255,255,0.1)", padding: "12px", borderRadius: "8px", marginBottom: "16px", textAlign: "center" }}>
        <code style={{ fontSize: "20px" }}>aₓ = x₁ - x₀</code>
      </div>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        <strong>Знак проекции:</strong>
      </p>
      <ul style={{ fontSize: "18px", lineHeight: 1.6, paddingLeft: "24px", marginBottom: "16px" }}>
        <li>Положительная (aₓ &gt; 0): если вектор направлен в ту же сторону, что и координатная ось.</li>
        <li>Отрицательная (aₓ &lt; 0): если вектор направлен против оси.</li>
        <li>Равна нулю (aₓ = 0): если вектор перпендикулярен оси.</li>
      </ul>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        Если известен угол α между вектором a и осью OX, то проекция вычисляется как: <strong>aₓ = a·cosα</strong>
      </p>

      {/* 3. Ускорение */}
      <h2 style={{ fontSize: "28px", marginTop: "24px", marginBottom: "12px" }}>
        3. Ускорение
      </h2>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        <strong>Ускорение</strong> — это векторная физическая величина, характеризующая быстроту изменения скорости тела. Оно определяется как отношение изменения скорости к промежутку времени, за который это изменение произошло:
      </p>
      <div style={{ background: "rgba(255,255,255,0.1)", padding: "12px", borderRadius: "8px", marginBottom: "16px", textAlign: "center" }}>
        <code style={{ fontSize: "20px" }}>a = (v - v₀) / t</code>
      </div>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        <strong>Единица измерения:</strong> метр на секунду в квадрате (м/с²).
      </p>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        При равноускоренном движении ускорение остается постоянным (a = const).
      </p>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        Если скорость увеличивается, ускорение направлено в сторону движения; если тело тормозит (равнозамедленное движение), ускорение направлено против скорости.
      </p>

      {/* 4. Криволинейное движение. Линейная и угловая скорости */}
      <h2 style={{ fontSize: "28px", marginTop: "24px", marginBottom: "12px" }}>
        4. Криволинейное движение. Линейная и угловая скорости
      </h2>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        Движение, траектория которого не является прямой линией, называется <strong>криволинейным</strong>. Любой участок кривой можно рассматривать как дугу окружности определенного радиуса R.
      </p>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        <strong>Линейная скорость (v):</strong> При движении по окружности вектор скорости в любой точке направлен по касательной к траектории. Модуль скорости определяется как отношение пути (длины дуги) ко времени: <strong>v = l / t</strong>.
      </p>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        <strong>Угловая скорость (ω):</strong> Характеризует быстроту изменения угла поворота тела. Она равна отношению угла поворота Δϕ (в радианах) ко времени t:
      </p>
      <div style={{ background: "rgba(255,255,255,0.1)", padding: "12px", borderRadius: "8px", marginBottom: "16px", textAlign: "center" }}>
        <code style={{ fontSize: "20px" }}>ω = Δφ / t</code>
      </div>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        <strong>Единица измерения:</strong> радиан в секунду (рад/с).
      </p>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        <strong>Связь величин:</strong> Линейная и угловая скорости связаны формулой: <strong>v = ω·R</strong>
      </p>

      {/* 5. Ускорение точки при ее движении по окружности */}
      <h2 style={{ fontSize: "28px", marginTop: "24px", marginBottom: "12px" }}>
        5. Ускорение точки при её движении по окружности
      </h2>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        Даже если тело движется по окружности с постоянной по модулю скоростью (v = const), оно всё равно движется с ускорением. Это происходит потому, что направление вектора скорости непрерывно меняется.
      </p>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        Это ускорение называется <strong>центростремительным</strong> (или нормальным). Оно всегда направлено к центру окружности, перпендикулярно вектору скорости.
      </p>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        <strong>Формулы для расчета модуля центростремительного ускорения:</strong>
      </p>
      <div style={{ background: "rgba(255,255,255,0.1)", padding: "12px", borderRadius: "8px", marginBottom: "16px", textAlign: "center" }}>
        <code style={{ fontSize: "20px" }}>aᵦ = v² / R</code>
        <br />
        <code style={{ fontSize: "20px" }}>aᵦ = ω²·R</code>
      </div>
      <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "16px" }}>
        Без этого ускорения криволинейное движение невозможно, так как именно оно «поворачивает» вектор скорости вдоль траектории.
      </p>
    </div>
  );
};