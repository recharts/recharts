import{e}from"./iframe-C1zBrMCd.js";import{P as c,a as v}from"./PieChart-D7pxyFrn.js";import{R as f}from"./arrayEqualityCheck-Df8r3poz.js";import{S as h}from"./Sector-w-WfrIQ8.js";import{C as g}from"./tooltipContext-Bo3nAzCj.js";import{L as C}from"./Legend-CBGg87Ia.js";import{T as k}from"./Tooltip-qW59qqQb.js";import{R as y}from"./RechartsHookInspector-BISA2G0k.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BsIlMHa7.js";import"./Layer-D3PE35Mq.js";import"./Curve-BNkJ4mrR.js";import"./types-HpBDQdg7.js";import"./Text-dJAbnPql.js";import"./DOMUtils-DOdR4DF9.js";import"./ReactUtils-D752dz6O.js";import"./Label-6nnLE5h5.js";import"./PolarUtils-_NKSevVn.js";import"./ZIndexLayer-BetO650l.js";import"./zIndexSlice-hFBZ82Qc.js";import"./RechartsWrapper-Cv1tlCaV.js";import"./hooks-WF-Co-wK.js";import"./axisSelectors-DB8TkCkM.js";import"./ActiveShapeUtils-CdNQy3O6.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BhdzWbEl.js";import"./useAnimationId-D3t9NmUg.js";import"./Trapezoid-D2TjGKOo.js";import"./Symbols-PCV2wn4X.js";import"./RegisterGraphicalItemId-Bok-rErT.js";import"./SetGraphicalItem-ZpSJ1YOV.js";import"./polarSelectors-CH1HGjNy.js";import"./PolarChart-wj1VeU9I.js";import"./chartDataContext-DI2kF2Ct.js";import"./CategoricalChart-2Vole5cF.js";import"./useElementOffset-DxJmq_d_.js";import"./iteratee-CFC-11_Q.js";import"./Cross-C-d0KZBI.js";import"./index-D7UfPOGu.js";import"./ChartSizeDimensions-Dtypf1Rq.js";import"./OffsetShower-DOhEeiaZ.js";import"./PlotAreaShower-B0-XWkzL.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
