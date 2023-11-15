import React, { useEffect, useRef } from 'react';
import { vendasMes, dadosVendas, valoresProdutos } from './Dados';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

function Dashboard() {
  
 
  const calcularLucroTotal = () => {
    const lucros = Object.keys(dadosVendas).map(produto => {
      const quantidadeVendida = dadosVendas[produto];
      const valorDoProduto = valoresProdutos[produto];
      if (!isNaN(quantidadeVendida) && !isNaN(valorDoProduto)) {
        return valorDoProduto * quantidadeVendida;
      } else {
        console.error(`Erro: Produto "${produto}" não encontrado em valoresProdutos ou quantidade ou valor inválido.`);
        return 0;
      }
    });
    return lucros;
  };
  const totalDeLucroAnual = calcularLucroTotal();
  const formatarEmBRL = valor => valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const chartRefBar = useRef(null);
  const chartRefPie = useRef(null);
  useEffect(() => {
    const ctxBar = document.getElementById('meuGraficoBarra').getContext('2d');
    const ctxPie = document.getElementById('meuGraficoPizza').getContext('2d');
    if (chartRefBar.current) {
      chartRefBar.current.destroy();
    }
    if (chartRefPie.current) {
      chartRefPie.current.destroy();
    }
    chartRefBar.current = new Chart(ctxBar, {
      type: 'bar',
      data: {
        labels: [...Object.keys(vendasMes)],
        datasets: [{
          label: 'Total de Vendas',
          data: [...Object.values(vendasMes)],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        }],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
    chartRefPie.current = new Chart(ctxPie, {
      type: 'doughnut',
      data: {
        labels: Object.keys(dadosVendas),
        datasets: [{
          data: totalDeLucroAnual,
          backgroundColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            "rgba(101, 245, 39, 0.8)",
            "rgba(194, 13, 245, 0.8)",
            "rgba(7, 243, 240, 0.8)",
          ],
        }],
      },
      options: {
        cutout: '10%',
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              usePointStyle: true,
            },
          },
          tooltip: {
            enabled: false,
          },
          datalabels: {
            formatter: (value, context) => {
              if (context.active || context.hovered) {
                return formatarEmBRL(value);
              } else {
                const dataset = context.chart.data.datasets[context.datasetIndex];
                const total = dataset.data.reduce((acc, data) => acc + data, 0);
                const percent = ((value / total) * 100).toFixed(2);
                return `${percent}%`;
              }
            },
            color: '#fff',
          },
        },
      },
      plugins: [ChartDataLabels],
    });
    return () => {
      if (chartRefBar.current) {
        chartRefBar.current.destroy();
      }
      if (chartRefPie.current) {
        chartRefPie.current.destroy();
      }
    };
  }, [totalDeLucroAnual]);
  return (
    <div>
      <div className='text-center'>
        <h3 className='text-with-shadow'>Dahsboard</h3>
      </div>
      <div className='d-flex justify-content-center'>
        <div className='text-center rounded-3 p-1 shadow-lg m-3 w-50 h-50'>
          <p>Total de vendas anual</p>
          <canvas id="meuGraficoBarra"></canvas>
        </div>
        <div className='text-center rounded-3 p-2 shadow-lg m-3 h-50'>
          <p>Total de vendas por produto</p>
          <canvas id="meuGraficoPizza"></canvas>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
