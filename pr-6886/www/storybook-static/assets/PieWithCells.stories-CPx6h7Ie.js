import{e}from"./iframe-AMdIPtJ_.js";import{P as c,a as v}from"./PieChart-BaE_jwVi.js";import{R as f}from"./arrayEqualityCheck-3UyTPjiS.js";import{S as h}from"./Sector-DeLHi04Y.js";import{C as g}from"./tooltipContext-BYjTIbof.js";import{L as C}from"./Legend-C8erwHas.js";import{T as k}from"./Tooltip-Diu-5ejz.js";import{R as y}from"./RechartsHookInspector-Bq93gymj.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-eDHOoSb6.js";import"./Layer-s4o8RnMf.js";import"./Curve-CXXZiBGe.js";import"./types-CQP6j9X1.js";import"./Text-Bmd0wKqf.js";import"./DOMUtils-Bw_kQjwH.js";import"./ReactUtils-BJF5ZjW2.js";import"./Label-BXNXe9p5.js";import"./PolarUtils-KOfaMXsG.js";import"./ZIndexLayer-DJXgyukI.js";import"./zIndexSlice-CLEOTtEz.js";import"./RechartsWrapper-QBdH5qJC.js";import"./hooks-BddCSC5x.js";import"./axisSelectors-CYvP6yih.js";import"./ActiveShapeUtils-CYbAsT4q.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BXzCN27L.js";import"./useAnimationId-DD0SbbDQ.js";import"./Trapezoid-vgj8eyPg.js";import"./Symbols-B091hayX.js";import"./RegisterGraphicalItemId-BIrQ-TMI.js";import"./SetGraphicalItem-BrubgrnS.js";import"./polarSelectors-FsWQQE0T.js";import"./PolarChart-CNuVE6Dt.js";import"./chartDataContext-BsDdYGEp.js";import"./CategoricalChart-C39w_Gis.js";import"./useElementOffset-B3aomIQv.js";import"./iteratee-Y8fEdtnU.js";import"./Cross-D2A-BP76.js";import"./index-C1Q9sGQl.js";import"./ChartSizeDimensions-C4K5r_rw.js";import"./OffsetShower-DJsmVlcW.js";import"./PlotAreaShower-poQ332x-.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
