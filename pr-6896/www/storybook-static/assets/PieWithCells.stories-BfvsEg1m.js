import{e}from"./iframe-C-3BuwuQ.js";import{P as c,a as v}from"./PieChart-C4xV2gGG.js";import{R as f}from"./arrayEqualityCheck-FeQgOIOo.js";import{S as h}from"./Sector-Dgl5Ps14.js";import{C as g}from"./tooltipContext-f-uNjk8y.js";import{L as C}from"./Legend-B8xiXcn8.js";import{T as k}from"./Tooltip-DBF9JwRu.js";import{R as y}from"./RechartsHookInspector-_jP1ustk.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B8KPX6JC.js";import"./Layer-BtreNavR.js";import"./Curve-DOZfooTf.js";import"./types-CX-GD2h3.js";import"./Text-DQ4MnNVk.js";import"./DOMUtils-g9jP34sD.js";import"./ReactUtils-DhVfiJt6.js";import"./Label-C_nqqcnR.js";import"./PolarUtils-C0kEye-G.js";import"./ZIndexLayer-cK31z4E4.js";import"./zIndexSlice-CFeEDpl4.js";import"./RechartsWrapper-Bcu3XnIN.js";import"./hooks-DEo8Vj_c.js";import"./axisSelectors-TDNCuVG_.js";import"./ActiveShapeUtils-BI8SVP5k.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BYl-A-mY.js";import"./useAnimationId-0OWcJ5q4.js";import"./Trapezoid-DRLGjDBA.js";import"./Symbols-mlCUJH03.js";import"./RegisterGraphicalItemId-CC6kQy01.js";import"./SetGraphicalItem-wdcyb_2X.js";import"./polarSelectors-BU4bm1HK.js";import"./PolarChart-C5D3bz9I.js";import"./chartDataContext-CCRblB7F.js";import"./CategoricalChart-E0yZOneU.js";import"./useElementOffset-EnpVvfdz.js";import"./iteratee-Qha-Yhcf.js";import"./Cross-DbyTsFp8.js";import"./index-DWdef0jv.js";import"./ChartSizeDimensions-B8NVQVZ1.js";import"./OffsetShower-g_YOgmWj.js";import"./PlotAreaShower-CrDYc66T.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
