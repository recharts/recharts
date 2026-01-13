import{e}from"./iframe-Cz5RPrzo.js";import{a as c,P as v}from"./PieChart-DLPyA2xL.js";import{R as f}from"./arrayEqualityCheck-DuhA3hrU.js";import{S as h}from"./Sector-D7vvH_6F.js";import{C as g}from"./tooltipContext-Bauin2Js.js";import{L as C}from"./Legend-CnO7142l.js";import{T as k}from"./Tooltip-DkmCOQhh.js";import{R as y}from"./RechartsHookInspector-DP8xCOal.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-x0GM_Fqy.js";import"./Layer-CngTgEke.js";import"./Curve-C0KXugLq.js";import"./types-D1v_Rc2a.js";import"./Text-BayrHrEj.js";import"./DOMUtils-m1R-l7fT.js";import"./ReactUtils-BQq-yyvu.js";import"./Label-XMPDelhI.js";import"./PolarUtils-BqV0Lm0k.js";import"./ZIndexLayer-DopQY-kA.js";import"./zIndexSlice-CcJ--Fig.js";import"./RechartsWrapper-cu-FIaeq.js";import"./hooks-BM-KAHTV.js";import"./axisSelectors-B5q7pd7-.js";import"./ActiveShapeUtils-D5xwOR7W.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C2aKHHpL.js";import"./useAnimationId-ifmUbYmC.js";import"./Trapezoid-CFJnjNBB.js";import"./Symbols-R3z9Gbft.js";import"./RegisterGraphicalItemId-B1o2SWmz.js";import"./SetGraphicalItem-BmMKLEXu.js";import"./polarSelectors-DQKqm8vf.js";import"./PolarChart-dkzZrhBH.js";import"./chartDataContext-CuN30YAe.js";import"./CategoricalChart-LFVK4bCX.js";import"./useElementOffset-Dgk1VpEv.js";import"./iteratee-DF4ETxvE.js";import"./Cross-DRXodTvN.js";import"./index-nSyYgmIS.js";import"./ChartSizeDimensions-BL9_hnvT.js";import"./OffsetShower-9oUxrKwL.js";import"./PlotAreaShower-CCuY3b1X.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
