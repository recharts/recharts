import{e}from"./iframe-BlK4-FEU.js";import{a as c,P as v}from"./PieChart-sFoXd2Fu.js";import{R as f}from"./arrayEqualityCheck-D3CpbvMw.js";import{S as h}from"./Sector-6gruqe2O.js";import{C as g}from"./tooltipContext-BXQ2EYh_.js";import{L as C}from"./Legend-DQGbZjVc.js";import{T as k}from"./Tooltip-5Wf_EiJ7.js";import{R as y}from"./RechartsHookInspector-C2emUIYz.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CZGT4OJp.js";import"./Layer-1XFlzVag.js";import"./Curve-CwI3FqjW.js";import"./types-nGVhtMBW.js";import"./Text-BHa3XVhG.js";import"./DOMUtils-DL2vfQ8H.js";import"./ReactUtils-CLW_TYB_.js";import"./Label-B5t3anSs.js";import"./PolarUtils-Bw67yi1j.js";import"./ZIndexLayer-BXfqJV7n.js";import"./zIndexSlice-BTFlkBrM.js";import"./RechartsWrapper-CfP2CNrR.js";import"./hooks-CsC49iNH.js";import"./axisSelectors-t10Pjb8y.js";import"./ActiveShapeUtils-BFViKF1F.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bu9j2f9q.js";import"./useAnimationId-H0jghrnG.js";import"./Trapezoid-DhJdPhvd.js";import"./Symbols-7-jwnY-l.js";import"./RegisterGraphicalItemId-Co3MVnsu.js";import"./SetGraphicalItem-DuRVqxef.js";import"./polarSelectors-SaLfq0MB.js";import"./PolarChart-DEZRtE5W.js";import"./chartDataContext-_WqeN7e1.js";import"./CategoricalChart-CsSPHay3.js";import"./useElementOffset-J2oJ6_h-.js";import"./iteratee-BN3ptu_5.js";import"./Cross-Bn_M5faI.js";import"./index-B4rQ1OLH.js";import"./ChartSizeDimensions-DNL5OR5F.js";import"./OffsetShower-DbODKAvT.js";import"./PlotAreaShower-C8cqHodv.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
