import{e}from"./iframe-CZOKXyYX.js";import{P as c,a as v}from"./PieChart-CnszRETx.js";import{R as f}from"./arrayEqualityCheck-ZCpvDDUM.js";import{S as h}from"./Sector-Dsjq5sTO.js";import{C as g}from"./tooltipContext-DDrfIX0-.js";import{L as C}from"./Legend-D1xTuSvo.js";import{T as k}from"./Tooltip-sGlM95jv.js";import{R as y}from"./RechartsHookInspector-B7tAaeEL.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BdIYVt_j.js";import"./Layer-ipPtt6GK.js";import"./Curve-Cn7M-l6J.js";import"./types-mDJez9wS.js";import"./Text-DBc2QLFr.js";import"./DOMUtils-BK6pK0qd.js";import"./ReactUtils-CKx1UPE3.js";import"./Label-wuyiSzGf.js";import"./PolarUtils-BdcP-kXS.js";import"./ZIndexLayer-DuvPoAvp.js";import"./zIndexSlice-DkluUigR.js";import"./RechartsWrapper-BzS4jEvb.js";import"./hooks-Cs7Pyl2H.js";import"./axisSelectors-Cy9T5-14.js";import"./ActiveShapeUtils-BNlU2ssp.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-8jBBkAoM.js";import"./useAnimationId-BrU_ieRo.js";import"./Trapezoid-Damk21qr.js";import"./Symbols-DZsrADbK.js";import"./RegisterGraphicalItemId-CT7gxHP9.js";import"./SetGraphicalItem-A4Aj3AlV.js";import"./polarSelectors-CpDDj5Ae.js";import"./PolarChart-DHZ3bLdE.js";import"./chartDataContext-CGCgcL6T.js";import"./CategoricalChart-CueK-ohc.js";import"./useElementOffset-8Y6iIbxO.js";import"./iteratee-BHKnSY98.js";import"./Cross-D0VvRflz.js";import"./index-Bq0EYqss.js";import"./ChartSizeDimensions-DcBo26mg.js";import"./OffsetShower-D0BahXva.js";import"./PlotAreaShower-D0tOLrH8.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
