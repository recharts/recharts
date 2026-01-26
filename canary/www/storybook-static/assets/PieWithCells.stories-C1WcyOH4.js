import{e}from"./iframe-BfI_ST9A.js";import{P as c,a as v}from"./PieChart-CErZSGCy.js";import{R as f}from"./arrayEqualityCheck-Dpn6Yh1q.js";import{S as h}from"./Sector-65rnMIz8.js";import{C as g}from"./tooltipContext-Cb6TcB2g.js";import{L as C}from"./Legend-DSv1DviZ.js";import{T as k}from"./Tooltip-oJHpgK_Y.js";import{R as y}from"./RechartsHookInspector-CVEQV9do.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-AaslCT8i.js";import"./Layer-Y7LjbTmX.js";import"./Curve-CQI60C70.js";import"./types-C63RoX8s.js";import"./Text-rhuK2TCR.js";import"./DOMUtils-bXouPdN4.js";import"./ReactUtils-DCNpXtNn.js";import"./Label-bNYHk-eM.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-BqmPWyE4.js";import"./zIndexSlice-DXwF7pA6.js";import"./RechartsWrapper-B_X6-_SZ.js";import"./hooks-DvK6IaUs.js";import"./axisSelectors-DDmdM9p6.js";import"./ActiveShapeUtils-DHutry9j.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ClKhcP1j.js";import"./useAnimationId-COKmXqbi.js";import"./Trapezoid-BD9djYD6.js";import"./Symbols-BZnP9syB.js";import"./RegisterGraphicalItemId-B5NRYeBm.js";import"./SetGraphicalItem-CI8DucV2.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./polarSelectors-BG6PB5kR.js";import"./PolarChart-C0YLNuoJ.js";import"./chartDataContext-CeBJp2Px.js";import"./CategoricalChart-DD3vhlwU.js";import"./useElementOffset-B9zSC1oG.js";import"./iteratee-BtHt7oJb.js";import"./Cross-DgvRjqnG.js";import"./index-ChuKY9XN.js";import"./ChartSizeDimensions-BiyrgYor.js";import"./OffsetShower-SG_pY0kd.js";import"./PlotAreaShower-DWEL4ESW.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],se={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
