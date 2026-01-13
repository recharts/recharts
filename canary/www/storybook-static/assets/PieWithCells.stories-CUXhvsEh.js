import{e}from"./iframe-1i9HA9RQ.js";import{a as c,P as v}from"./PieChart-DayWPA7x.js";import{R as f}from"./arrayEqualityCheck-BwjFPiUr.js";import{S as h}from"./Sector-C3B07LHk.js";import{C as g}from"./tooltipContext-XPy447W1.js";import{L as C}from"./Legend-ekTJAtD9.js";import{T as k}from"./Tooltip-D_dhj_K2.js";import{R as y}from"./RechartsHookInspector-CcKov_mq.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CuqYJHcO.js";import"./Layer-TtoeX7Dg.js";import"./Curve-DYisYGAN.js";import"./types-BWGBotoG.js";import"./Text-CkIqO9jR.js";import"./DOMUtils-BvTgwRu6.js";import"./ReactUtils-CesYLNMs.js";import"./Label-B5L7e25b.js";import"./PolarUtils-B3zJ31hA.js";import"./ZIndexLayer-CX343y-L.js";import"./zIndexSlice-kDjHMkcM.js";import"./RechartsWrapper-Ca6atg1S.js";import"./hooks-y-J71LZD.js";import"./axisSelectors-B-ey3vYH.js";import"./ActiveShapeUtils-CgjTEdkh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BaWdx0SZ.js";import"./useAnimationId-CKk3JzZu.js";import"./Trapezoid-GbRA1Hs7.js";import"./Symbols-Bn7dqeJu.js";import"./RegisterGraphicalItemId-C0szZiML.js";import"./SetGraphicalItem-DlpP7DnH.js";import"./polarSelectors-63TSyc33.js";import"./PolarChart-BtE8C2jd.js";import"./chartDataContext-Cq6PbOHK.js";import"./CategoricalChart-fTOtoFif.js";import"./useElementOffset-BOAH7-ZQ.js";import"./iteratee-Dlx_Wmlz.js";import"./Cross-OCaIQ6zx.js";import"./index-BAAFpx__.js";import"./ChartSizeDimensions-BQPJaKjV.js";import"./OffsetShower-Bxqw5x-b.js";import"./PlotAreaShower-BqU9kqmb.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
