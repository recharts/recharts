import{e}from"./iframe-D9q7UUmi.js";import{a as c,P as v}from"./PieChart-CeWg8ywU.js";import{R as f}from"./arrayEqualityCheck-CJJXJ9Rv.js";import{S as h}from"./Sector-BIUbLnT5.js";import{C as g}from"./tooltipContext-DC7nW4sy.js";import{L as C}from"./Legend-D31ymzRq.js";import{T as k}from"./Tooltip-BLBubyYz.js";import{R as y}from"./RechartsHookInspector-Btgon49z.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D-3coS0e.js";import"./Layer-CUKLQgPC.js";import"./Curve-DEESCjbc.js";import"./types-FPdAMXDy.js";import"./Text-CLmUy_On.js";import"./DOMUtils-BXuH-NK6.js";import"./ReactUtils-CfRgqXT5.js";import"./Label-CDSn628C.js";import"./PolarUtils-cf4CEJPT.js";import"./ZIndexLayer-CtgCGO4x.js";import"./zIndexSlice-CxekzBSL.js";import"./RechartsWrapper-8_jXv7hz.js";import"./hooks-b1KD0qBL.js";import"./axisSelectors-DCJHWbvW.js";import"./ActiveShapeUtils-Cf3wP9DQ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-aQPjrzEG.js";import"./useAnimationId-DeN0uxUI.js";import"./Trapezoid-CrYCphId.js";import"./Symbols-B3oT9PiF.js";import"./RegisterGraphicalItemId-B8upk-8m.js";import"./SetGraphicalItem-DllIbSlC.js";import"./polarSelectors-DEjXZNdq.js";import"./PolarChart-DODKQrSV.js";import"./chartDataContext-C5vcePQl.js";import"./CategoricalChart-ak-_6B9f.js";import"./useElementOffset-D1mKrQqH.js";import"./iteratee-JJOOie1Z.js";import"./Cross-Cb3_Opci.js";import"./index-YTWFD20P.js";import"./ChartSizeDimensions-CGOPgU1Q.js";import"./OffsetShower-D7RAK20_.js";import"./PlotAreaShower-DDsxyFt0.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
