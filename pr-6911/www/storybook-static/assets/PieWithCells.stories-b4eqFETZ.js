import{e}from"./iframe-B6AlQnM2.js";import{P as c,a as v}from"./PieChart-B-nz6Cj5.js";import{R as f}from"./arrayEqualityCheck-DOlZ0mCX.js";import{S as h}from"./Sector-D5Wtmz4T.js";import{C as g}from"./tooltipContext-D0kn5MH1.js";import{L as C}from"./Legend-FguBr4zK.js";import{T as k}from"./Tooltip-JUfWckLq.js";import{R as y}from"./RechartsHookInspector-C4bhcvg_.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-osVefOLp.js";import"./Layer-Cdn-3vsr.js";import"./Curve-DTUwCS4t.js";import"./types-C25Y7m2H.js";import"./Text-BQHJk7TW.js";import"./DOMUtils-ookTrfW2.js";import"./ReactUtils-ODr0KtTw.js";import"./Label-CIaajA0c.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-KOQQKvvO.js";import"./zIndexSlice-lMltdZop.js";import"./RechartsWrapper-CexAAOIz.js";import"./hooks-CQRKljNW.js";import"./axisSelectors-CbxR9aKJ.js";import"./ActiveShapeUtils-Ly0l_9qH.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BQhXboIW.js";import"./useAnimationId-CsS9GYvF.js";import"./Trapezoid-DdjR8tMX.js";import"./Symbols-Cm6_UFeB.js";import"./RegisterGraphicalItemId-BrQ42RrU.js";import"./SetGraphicalItem-BFhZLv7r.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./polarSelectors-Du1ZOlLU.js";import"./PolarChart-BQX91g34.js";import"./chartDataContext-JLBHd2Mr.js";import"./CategoricalChart-Bzfkval9.js";import"./useElementOffset-D5aHn8Rk.js";import"./iteratee-7MvN9BPN.js";import"./Cross-BXVeeLRc.js";import"./index-CYGFbMYu.js";import"./ChartSizeDimensions-BY4lvFSe.js";import"./OffsetShower-IG_VUviu.js";import"./PlotAreaShower-DnDaw1Ql.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],se={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
