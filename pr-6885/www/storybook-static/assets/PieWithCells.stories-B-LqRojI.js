import{e}from"./iframe-DYFx2r-j.js";import{P as c,a as v}from"./PieChart-Cp3ZqyNn.js";import{R as f}from"./arrayEqualityCheck-DCVaqN9G.js";import{S as h}from"./Sector-Cw_s6D-z.js";import{C as g}from"./tooltipContext-DOjE1Le6.js";import{L as C}from"./Legend-BtJKmN-Z.js";import{T as k}from"./Tooltip-PjWmQu43.js";import{R as y}from"./RechartsHookInspector-8HiD6XU_.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BTmxXdy3.js";import"./Layer-BC3vDM2H.js";import"./Curve-7IBZZol0.js";import"./types-Cik9NZHM.js";import"./Text-CehOywt1.js";import"./DOMUtils-dzsDioow.js";import"./ReactUtils-B5hh0nCE.js";import"./Label-DjuisPzU.js";import"./PolarUtils-C1zbAlbA.js";import"./ZIndexLayer-CCFXe3ig.js";import"./zIndexSlice-CSYHepNq.js";import"./RechartsWrapper-C83nyDwr.js";import"./hooks-DjCJ821w.js";import"./axisSelectors-CNJps_KV.js";import"./ActiveShapeUtils-5VBSo5Lq.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Du9Z9pvb.js";import"./useAnimationId-xTCLSGwz.js";import"./Trapezoid-B1aN-PmS.js";import"./Symbols-DOMt1Ple.js";import"./RegisterGraphicalItemId-CuPr_ukv.js";import"./SetGraphicalItem-BLQ-q15z.js";import"./polarSelectors-FBgJmitr.js";import"./PolarChart-BLWmJWkR.js";import"./chartDataContext-BcNxXqiP.js";import"./CategoricalChart-D0ijd2iH.js";import"./useElementOffset-DPcBTbkI.js";import"./iteratee-CwwQ69r8.js";import"./Cross-Be-I10Rh.js";import"./index-BqI5oxI8.js";import"./ChartSizeDimensions-CyZcFbe9.js";import"./OffsetShower-D26sUntH.js";import"./PlotAreaShower--zaCCVLK.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
