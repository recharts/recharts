import{e}from"./iframe-CsBbFWpF.js";import{a as c,P as v}from"./PieChart-DijZ-ApQ.js";import{R as f}from"./arrayEqualityCheck-jcy1YLjA.js";import{S as h}from"./Sector-DZ4anR9n.js";import{C as g}from"./tooltipContext-BJ3STaWo.js";import{L as C}from"./Legend-BwPUQflq.js";import{T as k}from"./Tooltip-B8PRtCZT.js";import{R as y}from"./RechartsHookInspector-Ce0vrec4.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Di-bRFCz.js";import"./Layer-B5pUJ7d6.js";import"./Curve-BV6casI8.js";import"./types-DZkoNYJ-.js";import"./Text-CXOTFpC0.js";import"./DOMUtils-DCk3Ra7U.js";import"./ReactUtils-B73M-NEp.js";import"./Label-vO0tFBMQ.js";import"./PolarUtils-DudrDAyL.js";import"./ZIndexLayer-DoHUAHyH.js";import"./zIndexSlice-CXgHVliP.js";import"./RechartsWrapper-M1yD5X0u.js";import"./hooks-51EGl8Fk.js";import"./axisSelectors-C8uaVJja.js";import"./ActiveShapeUtils-Cp7opGs8.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CRfJXidx.js";import"./useAnimationId-DQyCpAJd.js";import"./Trapezoid-CqG9LomH.js";import"./Symbols-GutgQl5i.js";import"./RegisterGraphicalItemId-DEKbhPBq.js";import"./SetGraphicalItem-D-yEZ2eQ.js";import"./polarSelectors-DxihoTCI.js";import"./PolarChart-BqcxhDUF.js";import"./chartDataContext-C4MvfWzW.js";import"./CategoricalChart-BoRcIHlb.js";import"./useElementOffset-DKVHg2OE.js";import"./iteratee-DG0CEwld.js";import"./Cross-eYJkkoHv.js";import"./index-30ex7hAw.js";import"./ChartSizeDimensions-BxqurYlH.js";import"./OffsetShower-Cz9yhNvC.js";import"./PlotAreaShower-CYw1ViUZ.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
