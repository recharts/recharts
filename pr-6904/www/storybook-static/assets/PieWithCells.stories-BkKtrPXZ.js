import{e}from"./iframe-CpNu1JlZ.js";import{P as c,a as v}from"./PieChart-Bgp2xlUZ.js";import{R as f}from"./arrayEqualityCheck-BJH8Jf6v.js";import{S as h}from"./Sector-CFrzjDGx.js";import{C as g}from"./tooltipContext-DyzLbsS_.js";import{L as C}from"./Legend-CMxJpZ-g.js";import{T as k}from"./Tooltip-BDYCU4M-.js";import{R as y}from"./RechartsHookInspector-BmpKM6Nz.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-W5bbcHB0.js";import"./Layer-CgGUTlVA.js";import"./Curve-BgSSBByK.js";import"./types-DLbIt3jn.js";import"./Text-CcMcwnEY.js";import"./DOMUtils-Bq1JWBRd.js";import"./ReactUtils-DkvyTuz_.js";import"./Label-BZ3pAw6v.js";import"./PolarUtils-D3v-RsLH.js";import"./ZIndexLayer-BhjXIlXu.js";import"./zIndexSlice-DY-K2-IQ.js";import"./RechartsWrapper-0hOTWq_R.js";import"./hooks-C6Ia6Lfs.js";import"./axisSelectors-BBvb1V6K.js";import"./ActiveShapeUtils-DXbdTG-x.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DpK3ty__.js";import"./useAnimationId-B5QsM2o0.js";import"./Trapezoid-DLjeAkOF.js";import"./Symbols-BLQ2T1a8.js";import"./RegisterGraphicalItemId-D7Qen5Xd.js";import"./SetGraphicalItem-B-5mlAj6.js";import"./polarSelectors-WVZNL-5a.js";import"./PolarChart-DE2qhBU8.js";import"./chartDataContext-D9xDPkuR.js";import"./CategoricalChart-BHgD9gAO.js";import"./useElementOffset-CTfVH7U4.js";import"./iteratee-CHvlDlHn.js";import"./Cross-DZ0IO1Uo.js";import"./index-BjecE5DL.js";import"./ChartSizeDimensions-Q_MjQJbH.js";import"./OffsetShower-CV2zUXL0.js";import"./PlotAreaShower-Bf09ZPlm.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [activeIndices, setActiveIndices] = React.useState<number[]>([]);
    return <ResponsiveContainer width="100%" height={500}>
        <PieChart width={400} height={400}>
          <Pie dataKey="percent" {...args} onClick={(_, index) => {
          if (index != null) {
            setActiveIndices(prev => {
              if (prev.includes(index)) {
                return prev.filter(i => i !== index);
              }
              return [...prev, index];
            });
          }
        }} shape={(props, index) => {
          const isActive = activeIndices.includes(index);
          return <Sector {...props} fill={isActive ? 'yellow' : props.fill} stroke="#111" />;
        }}>
            {data.map(d => <Cell key={\`d-\${d.value}\`} fill={d.color} stroke="none" />)}
          </Pie>
          <Legend />
          <Tooltip />
          <RechartsHookInspector />
        </PieChart>
      </ResponsiveContainer>;
  },
  args: {
    cx: '50%',
    cy: '50%',
    data,
    dataKey: 'percent',
    nameKey: 'value',
    fill: '#8884d8',
    label: true
  }
}`,...(p=(a=i.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const se=["PieWithCells"];export{i as PieWithCells,se as __namedExportsOrder,ce as default};
