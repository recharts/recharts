import{e}from"./iframe-CoPAm7V1.js";import{a as c,P as v}from"./PieChart-DO7y4fsc.js";import{R as f}from"./arrayEqualityCheck-b4a3wn0-.js";import{S as h}from"./Sector-CfHQ2k9y.js";import{C as g}from"./tooltipContext-DUgdEMZ_.js";import{L as C}from"./Legend-BOrvdoCc.js";import{T as k}from"./Tooltip-Wtmd_kNX.js";import{R as y}from"./RechartsHookInspector-CfbHdkme.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-OnP709yn.js";import"./Layer-BHClijQk.js";import"./Curve-DDvcpmM9.js";import"./types-BF6A7chk.js";import"./Text-D8eyFLL7.js";import"./DOMUtils-B7UiVnHW.js";import"./ReactUtils-B2MREsDE.js";import"./Label-BN0l3Vc3.js";import"./PolarUtils-DGkU6n7f.js";import"./ZIndexLayer-DI7Wag2n.js";import"./zIndexSlice-CV1CLEn_.js";import"./RechartsWrapper-DeO9xugK.js";import"./hooks-BDoK-oN_.js";import"./axisSelectors-Cdwi4Gmi.js";import"./ActiveShapeUtils-fJZGBnKb.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CvvJIb6J.js";import"./useAnimationId-BwvCPaTs.js";import"./Trapezoid-f55pqUw3.js";import"./Symbols-oRqZ57VZ.js";import"./RegisterGraphicalItemId-Cz_MWvVU.js";import"./SetGraphicalItem-D7kJJVje.js";import"./polarSelectors-CbOlqFY5.js";import"./PolarChart-BWGvDtZl.js";import"./chartDataContext-482lKGc9.js";import"./CategoricalChart-L_hDSvwE.js";import"./useElementOffset-eWOG3-7g.js";import"./iteratee-Cq33dU1G.js";import"./Cross-71K9dkTw.js";import"./index-gyMa1MpJ.js";import"./ChartSizeDimensions-BPsfgCbk.js";import"./OffsetShower-CKApfiLz.js";import"./PlotAreaShower-DYf9p6xN.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
