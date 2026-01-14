import{e}from"./iframe-BtpSaGeD.js";import{P as c,a as v}from"./PieChart-BT-7G3iB.js";import{R as f}from"./arrayEqualityCheck-csfjq8mV.js";import{S as h}from"./Sector-NNIkOagX.js";import{C as g}from"./tooltipContext-DDmowHlH.js";import{L as C}from"./Legend-Kz1kmGL9.js";import{T as k}from"./Tooltip-625Ae52e.js";import{R as y}from"./RechartsHookInspector-Dh2n9Wob.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DkARaCDv.js";import"./Layer-CYyvuKkx.js";import"./Curve-BC2lzeAQ.js";import"./types-245F3-IH.js";import"./Text-DH63q3ed.js";import"./DOMUtils-CVzw1QbG.js";import"./ReactUtils-TAFDop8V.js";import"./Label-BOlhuZqt.js";import"./PolarUtils-5F1_zZA0.js";import"./ZIndexLayer-BcDwNHGX.js";import"./zIndexSlice-ydm78BYW.js";import"./RechartsWrapper-BQPGXXGO.js";import"./hooks-DULxqo3A.js";import"./axisSelectors-CQvuHlQI.js";import"./ActiveShapeUtils-D3Igja4T.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D3A1KPVj.js";import"./useAnimationId-Be_3bM2l.js";import"./Trapezoid-xDGlDRMK.js";import"./Symbols-Dt8Khp4u.js";import"./RegisterGraphicalItemId-CJ_I0CZl.js";import"./SetGraphicalItem-CMYrG93h.js";import"./polarSelectors-Bfk3jmyf.js";import"./PolarChart-BYfzM7BS.js";import"./chartDataContext-D1JeIz7Q.js";import"./CategoricalChart-BIOH4Ga_.js";import"./useElementOffset-BXGnihpP.js";import"./iteratee-C4eAhDSk.js";import"./Cross-BmtGXc1D.js";import"./index-o2N_x1RI.js";import"./ChartSizeDimensions-9kzbcyaa.js";import"./OffsetShower-DBzvXmYz.js";import"./PlotAreaShower-BzkhZKlK.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
