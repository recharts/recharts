import{e}from"./iframe-BjHGzV_g.js";import{P as c,a as v}from"./PieChart-CyG8bySw.js";import{R as f}from"./arrayEqualityCheck-DSmzEAOj.js";import{S as h}from"./Sector-DqpJYgqY.js";import{C as g}from"./tooltipContext-nxdyC6oO.js";import{L as C}from"./Legend-BIneuLW0.js";import{T as k}from"./Tooltip-Bz7pyy1o.js";import{R as y}from"./RechartsHookInspector-D9VSdGzF.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BgzxguqS.js";import"./Layer-C_w7y8lS.js";import"./Curve-C15B5k0e.js";import"./types-CnIXHZZY.js";import"./Text-D_R22YNN.js";import"./DOMUtils-DJKWXfCz.js";import"./ReactUtils-B_OhT6T8.js";import"./Label-CYo-ySuR.js";import"./PolarUtils-DVfIyed4.js";import"./ZIndexLayer-CXQSohMh.js";import"./zIndexSlice-CeUR4dop.js";import"./RechartsWrapper-BpQ0Nvj-.js";import"./hooks-j3l1IZT0.js";import"./axisSelectors-Dcbbky9Q.js";import"./ActiveShapeUtils-GRlfg2FZ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DzPvnNyw.js";import"./useAnimationId-aInF8bWj.js";import"./Trapezoid-BmpvqocW.js";import"./Symbols-BMG8T0tH.js";import"./RegisterGraphicalItemId-DQPUuqCc.js";import"./SetGraphicalItem-CZBegNK8.js";import"./polarSelectors-B6LMcTUy.js";import"./PolarChart-h7InmyBk.js";import"./chartDataContext-CvBxgAkC.js";import"./CategoricalChart-DUk9fPa6.js";import"./useElementOffset--3uo1L7M.js";import"./iteratee-BEelosjX.js";import"./Cross-BpvzPM3C.js";import"./index-D2ltde3K.js";import"./ChartSizeDimensions-RaKYClSi.js";import"./OffsetShower-CgzrN99U.js";import"./PlotAreaShower-CopDbqvE.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
