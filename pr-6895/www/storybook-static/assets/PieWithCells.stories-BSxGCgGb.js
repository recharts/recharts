import{e}from"./iframe-BmaSkXVD.js";import{P as c,a as v}from"./PieChart-CVwpUERV.js";import{R as f}from"./arrayEqualityCheck-DFn-H49U.js";import{S as h}from"./Sector-BIUOjaCq.js";import{C as g}from"./tooltipContext-C34n9vuI.js";import{L as C}from"./Legend-DcqkzB4u.js";import{T as k}from"./Tooltip-C12lAHvb.js";import{R as y}from"./RechartsHookInspector-C0qStJOJ.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Cjwd7qt6.js";import"./Layer-kGCv99f8.js";import"./Curve-Ct1DVFB9.js";import"./types-B1enpQ2U.js";import"./Text-D7kjMnBu.js";import"./DOMUtils-Ci6czfq_.js";import"./ReactUtils-DF_Mupxs.js";import"./Label-Ba2fKD7_.js";import"./PolarUtils-fSNmW3dt.js";import"./ZIndexLayer-B0Nv_sMb.js";import"./zIndexSlice-DNtltYbu.js";import"./RechartsWrapper-CKnhTxOl.js";import"./hooks-DXbNb-JH.js";import"./axisSelectors-CSGKwTAZ.js";import"./ActiveShapeUtils-450HsfaK.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DuCzHhek.js";import"./useAnimationId-CSP1LMrK.js";import"./Trapezoid-B-uAYGkA.js";import"./Symbols-BOIH3U2b.js";import"./RegisterGraphicalItemId-DmnuQhvD.js";import"./SetGraphicalItem-Dkq9thq_.js";import"./polarSelectors-ZImJO998.js";import"./PolarChart-BxHejtMN.js";import"./chartDataContext-CSlbi7PQ.js";import"./CategoricalChart-BDvQLJnr.js";import"./useElementOffset-P5G-fn69.js";import"./iteratee-BPsQLCXM.js";import"./Cross-NxLC6jso.js";import"./index-D8VqDYui.js";import"./ChartSizeDimensions-BIJ2rdc4.js";import"./OffsetShower-CSh__zJW.js";import"./PlotAreaShower-B9ocgXZz.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
