// Hàm lấy giá trị từ input
function getInputValues() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    return { num1, num2 };
  }
  
  // Hàm cộng
  function add() {
    const { num1, num2 } = getInputValues();
    const result = num1 + num2;
    document.getElementById("result").textContent = result;
  }
  
  // Hàm trừ
  function subtract() {
    const { num1, num2 } = getInputValues();
    const result = num1 - num2;
    document.getElementById("result").textContent = result;
  }
  
  // Hàm nhân
  function multiply() {
    const { num1, num2 } = getInputValues();
    const result = num1 * num2;
    document.getElementById("result").textContent = result;
  }
  
  // Hàm chia
  function divide() {
    const { num1, num2 } = getInputValues();
    if (num2 === 0) {
      document.getElementById("result").textContent = "Không thể chia cho 0";
    } else {
      const result = num1 / num2;
      document.getElementById("result").textContent = result;
    }
  }
  