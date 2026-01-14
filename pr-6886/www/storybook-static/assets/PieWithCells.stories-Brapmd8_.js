import{e}from"./iframe-B8YYEd9G.js";import{P as c,a as v}from"./PieChart-5dNdH4zy.js";import{R as f}from"./arrayEqualityCheck-BJSPs_LU.js";import{S as h}from"./Sector-BNyMoo46.js";import{C as g}from"./tooltipContext-Cp6s-Na8.js";import{L as C}from"./Legend-CAEOCuo_.js";import{T as k}from"./Tooltip-BcyaGgIu.js";import{R as y}from"./RechartsHookInspector-C0QywKAE.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Css_XkGu.js";import"./Layer-ChuaoeIg.js";import"./Curve-B-G6e6PZ.js";import"./types-CnVGCqEL.js";import"./Text-DUM-8xR_.js";import"./DOMUtils-C8hDQeGd.js";import"./ReactUtils-DfY637Lx.js";import"./Label-XqAMTaA_.js";import"./PolarUtils-DYWzGjDu.js";import"./ZIndexLayer-DX8lEGHQ.js";import"./zIndexSlice-BLNkJo_X.js";import"./RechartsWrapper-pZyt8ABU.js";import"./hooks-CoDkm5OR.js";import"./axisSelectors-DqEy3XQD.js";import"./ActiveShapeUtils-DiiELvjB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-1iaHX5tZ.js";import"./useAnimationId-pnmN_K1g.js";import"./Trapezoid-C7ogOYif.js";import"./Symbols-jZ2_n1nU.js";import"./RegisterGraphicalItemId-CVcSXCce.js";import"./SetGraphicalItem-B4U1VyG2.js";import"./polarSelectors-CGvIFk1R.js";import"./PolarChart-CkQfXkUY.js";import"./chartDataContext-D4iCOjmy.js";import"./CategoricalChart-DO0H3PuU.js";import"./useElementOffset-O1atbYZW.js";import"./iteratee-D5HDh4k-.js";import"./Cross-B3ZcMeOk.js";import"./index-C4mlw0NF.js";import"./ChartSizeDimensions-BeS7eDbq.js";import"./OffsetShower-mhU6p0_K.js";import"./PlotAreaShower-Br2_XSTr.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
