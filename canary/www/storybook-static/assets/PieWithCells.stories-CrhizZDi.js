import{e}from"./iframe-Dh5fYf52.js";import{P as c,a as v}from"./PieChart-Cn_OuC3b.js";import{R as f}from"./arrayEqualityCheck-y3xWNCWZ.js";import{S as h}from"./Sector-Boq0fYwI.js";import{C as g}from"./tooltipContext-3_OhKDI6.js";import{L as C}from"./Legend-BXP3HtY4.js";import{T as k}from"./Tooltip-BvzegrEC.js";import{R as y}from"./RechartsHookInspector-ClQgWiSn.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BCuzZFIX.js";import"./Layer-CyyRPVZz.js";import"./Curve-BtY66874.js";import"./types-BQGztJ7o.js";import"./Text-CCyTgoDW.js";import"./DOMUtils-CdAxT0DP.js";import"./ReactUtils-DdUIndVV.js";import"./Label-BgIRNGCU.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-Chf-nD0r.js";import"./zIndexSlice-DOeznw_J.js";import"./RechartsWrapper-B9qWPH0f.js";import"./hooks-e_pos7oA.js";import"./axisSelectors-D3iLKS-b.js";import"./ActiveShapeUtils-vg5OHeFZ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CNvS8JgY.js";import"./useAnimationId-hVsf5NM-.js";import"./Trapezoid-B-DbXUKn.js";import"./Symbols-CE_RrRcr.js";import"./RegisterGraphicalItemId-dPya34ZY.js";import"./SetGraphicalItem-DoysDgrz.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./polarSelectors-CaBuj7LA.js";import"./PolarChart-iK2jhmB5.js";import"./chartDataContext-BW7kgRyE.js";import"./CategoricalChart-D_2x8xbQ.js";import"./useElementOffset-ByMR83Id.js";import"./iteratee-CVT0hwhC.js";import"./Cross-36hpk71i.js";import"./index-AL6ZY6S6.js";import"./ChartSizeDimensions-CLcrLXEy.js";import"./OffsetShower-cs_5-XLY.js";import"./PlotAreaShower-CX2JG_yj.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],se={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(a=i.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const me=["PieWithCells"];export{i as PieWithCells,me as __namedExportsOrder,se as default};
