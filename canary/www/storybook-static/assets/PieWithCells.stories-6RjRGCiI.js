import{e}from"./iframe-cTJex_Gl.js";import{a as c,P as v}from"./PieChart-B4nvHXYQ.js";import{R as f}from"./arrayEqualityCheck-D0_WBn0Z.js";import{S as h}from"./Sector-D24ZdNmK.js";import{C as g}from"./tooltipContext-Cw6vo9RU.js";import{L as C}from"./Legend-D7Vk6Xng.js";import{T as k}from"./Tooltip-BJB4c6zB.js";import{R as y}from"./RechartsHookInspector-BIilfS59.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-GZGysWVv.js";import"./Layer-BMdqJaf7.js";import"./Curve-Lpz0qnxX.js";import"./types-Gt1xRz9Z.js";import"./Text-BHjkvtN0.js";import"./DOMUtils-CszyQhOM.js";import"./ReactUtils-BpjLVHCA.js";import"./Label-BuzFvabn.js";import"./PolarUtils-B2tM_qUT.js";import"./ZIndexLayer-H4Ow-AJr.js";import"./zIndexSlice-o0TZ72x9.js";import"./RechartsWrapper-Bm4mCVnL.js";import"./hooks-JY4JcvJg.js";import"./axisSelectors-DKP4jhQb.js";import"./ActiveShapeUtils-Bs6rxUQM.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D12YpzZT.js";import"./useAnimationId-DmLtCxti.js";import"./Trapezoid-Cffv8lrQ.js";import"./Symbols-DkoAz0u2.js";import"./RegisterGraphicalItemId-aixP5EwM.js";import"./SetGraphicalItem-H24PzumZ.js";import"./polarSelectors-DgIXsKm4.js";import"./PolarChart-BPzdCNa4.js";import"./chartDataContext-CUgM-3fT.js";import"./CategoricalChart-czES7GN9.js";import"./useElementOffset-CkWr2du7.js";import"./iteratee-CiYVsTGX.js";import"./Cross-Bwcvk8Pc.js";import"./index-DuBUoeGC.js";import"./ChartSizeDimensions-tHZb_dEK.js";import"./OffsetShower-DB87M8KV.js";import"./PlotAreaShower-D22yshvn.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
