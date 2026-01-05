import{e}from"./iframe-C75Mon5f.js";import{a as c,P as v}from"./PieChart-D5mhgC4l.js";import{R as f}from"./arrayEqualityCheck-CCinF1xg.js";import{S as h}from"./Sector-PYXr-REd.js";import{C as g}from"./tooltipContext-BAau_RNO.js";import{L as C}from"./Legend-v-Y19GZ-.js";import{T as k}from"./Tooltip-e2uX3xxr.js";import{R as y}from"./RechartsHookInspector-DeYlN7PD.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DdslWj5k.js";import"./Layer-DOYjA-jF.js";import"./Curve-uThrsaDe.js";import"./types-CgyKhdli.js";import"./Text-s5ZlGFzn.js";import"./DOMUtils-Bv5mFBkh.js";import"./ReactUtils-D5lwbz2E.js";import"./Label-BHT6Zr6z.js";import"./PolarUtils-gc7ouCGw.js";import"./ZIndexLayer-1hGb0ezX.js";import"./zIndexSlice-Ch2lslkG.js";import"./RechartsWrapper-DtD9QMMH.js";import"./hooks-CF17bvZj.js";import"./axisSelectors-DwNVm2PQ.js";import"./ActiveShapeUtils-PNhhpaVz.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DTY1SpY4.js";import"./useAnimationId-BM6GD1p3.js";import"./Trapezoid-D1lAuCqF.js";import"./Symbols-BKwRHYAq.js";import"./RegisterGraphicalItemId-6Y3WjFD5.js";import"./SetGraphicalItem-CMCPtKvr.js";import"./polarSelectors-CHePJsS0.js";import"./PolarChart-DRiVYi6a.js";import"./chartDataContext-CSddlAqh.js";import"./CategoricalChart-CjaXzYYa.js";import"./useElementOffset-BDHVYPHz.js";import"./iteratee-CYzyPxOs.js";import"./Cross-BDeMVghQ.js";import"./index-B1HMmzG7.js";import"./ChartSizeDimensions-DU3pXVrB.js";import"./OffsetShower-C98qoUcb.js";import"./PlotAreaShower-CzYV5sJZ.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
