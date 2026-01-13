import{e}from"./iframe-BqhCRw8_.js";import{P as c,a as v}from"./PieChart-DIAvwj_0.js";import{R as f}from"./arrayEqualityCheck-C0e5XGku.js";import{S as h}from"./Sector-Cc8cLGGz.js";import{C as g}from"./tooltipContext-CfZt-ZyU.js";import{L as C}from"./Legend-CKVoaOnK.js";import{T as k}from"./Tooltip-BDidcHyN.js";import{R as y}from"./RechartsHookInspector-D3QTgPO3.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Ayaicgzr.js";import"./Layer-STOxxKM-.js";import"./Curve-ttUwhXb9.js";import"./types-DSzwAYYq.js";import"./Text-BS3Ermk4.js";import"./DOMUtils-Dw5i-fzQ.js";import"./ReactUtils-CMMuRoIm.js";import"./Label-DtQEJ7YC.js";import"./PolarUtils-DQrS6uhh.js";import"./ZIndexLayer-ZQy-DVxw.js";import"./zIndexSlice-DIIl2FeU.js";import"./RechartsWrapper-CKbioI8N.js";import"./hooks-9X7mYxl9.js";import"./axisSelectors-HrCd8mj3.js";import"./ActiveShapeUtils-BwvIzm_Z.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bg3AWp4l.js";import"./useAnimationId-DEFSqTDH.js";import"./Trapezoid-D6Ifyq-x.js";import"./Symbols-BJgGnflL.js";import"./RegisterGraphicalItemId-OICgoI54.js";import"./SetGraphicalItem-5CyATFN5.js";import"./polarSelectors-DvYL3T2l.js";import"./PolarChart-CXUzmZZr.js";import"./chartDataContext-CS827bLR.js";import"./CategoricalChart-DGivdYUS.js";import"./useElementOffset-By4t1ZxX.js";import"./iteratee-CYK2JnRd.js";import"./Cross-CXjdlaIM.js";import"./index-BUjJ7HF5.js";import"./ChartSizeDimensions-DGTJjry1.js";import"./OffsetShower-HUtE30KP.js";import"./PlotAreaShower-C7l9vpaF.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
