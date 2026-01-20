import{e}from"./iframe-BJE3gYiz.js";import{P as c,a as v}from"./PieChart-DsUPwcSe.js";import{R as f}from"./arrayEqualityCheck-DOpOKb7k.js";import{S as h}from"./Sector-D1swSw6R.js";import{C as g}from"./tooltipContext-CEFht0ON.js";import{L as C}from"./Legend-DeQPVjIj.js";import{T as k}from"./Tooltip-DvJ-I219.js";import{R as y}from"./RechartsHookInspector-CmJjyPOL.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BKNlGFt8.js";import"./Layer-BpHZQDe5.js";import"./Curve-9wsGsorR.js";import"./types-BgpWyLLK.js";import"./Text-CV7Ey6jK.js";import"./DOMUtils-DGjslG0U.js";import"./ReactUtils-DpOzmnGs.js";import"./Label-8Du7WhKH.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-PGry8EqE.js";import"./zIndexSlice-CPc0PYoJ.js";import"./RechartsWrapper-6YVSs0X2.js";import"./hooks-CzpWgTi2.js";import"./axisSelectors-BAfv6-Wm.js";import"./ActiveShapeUtils-D_XtSxMo.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-oe8iNjEY.js";import"./useAnimationId-xUHk75MJ.js";import"./Trapezoid-wLmtEI-B.js";import"./Symbols-CA9SXzw3.js";import"./RegisterGraphicalItemId-DDZY4GcH.js";import"./SetGraphicalItem-Bs3LcTS6.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./polarSelectors-CSlKPkzU.js";import"./PolarChart-Ch-pFbyp.js";import"./chartDataContext-dCefmzkT.js";import"./CategoricalChart-BCQDahMf.js";import"./useElementOffset-AxHRwjYB.js";import"./iteratee-CDq5lI64.js";import"./Cross-B75I7rUJ.js";import"./index-BZmliZtD.js";import"./ChartSizeDimensions-kmApRxRi.js";import"./OffsetShower-Cu7vEAUz.js";import"./PlotAreaShower-3gxA0MT2.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],se={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
