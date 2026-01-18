import{e}from"./iframe-DZy4Dead.js";import{P as c,a as v}from"./PieChart-CQclOxIG.js";import{R as f}from"./arrayEqualityCheck-ApBChTfQ.js";import{S as h}from"./Sector-Cjw5cIeP.js";import{C as g}from"./tooltipContext-BUOejfSR.js";import{L as C}from"./Legend-D7rMYQN7.js";import{T as k}from"./Tooltip-DkTYviFG.js";import{R as y}from"./RechartsHookInspector-BQ2LFFE8.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Bf5GaSqV.js";import"./Layer-Bpoel1Lp.js";import"./Curve-ChmxEyvD.js";import"./types-BfEpf9p_.js";import"./Text-68IXtrlK.js";import"./DOMUtils-DwLev0Y8.js";import"./ReactUtils-MfSKnK6Q.js";import"./Label-BnGgD6KR.js";import"./PolarUtils-Dc-YJkTz.js";import"./ZIndexLayer-DncsytRr.js";import"./zIndexSlice-BHURSyYA.js";import"./RechartsWrapper-nPRv-TTN.js";import"./hooks-ajKNzoip.js";import"./axisSelectors-CNnm75NT.js";import"./ActiveShapeUtils-BmYdORD-.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DS0sw2g4.js";import"./useAnimationId-C4mX0K92.js";import"./Trapezoid-C-7zXkUX.js";import"./Symbols-BE9qwwFU.js";import"./RegisterGraphicalItemId-DFrBVe2X.js";import"./SetGraphicalItem-6vLNF4l0.js";import"./polarSelectors-DZR-M7n6.js";import"./PolarChart-BI1VEbaA.js";import"./chartDataContext-C_SJIf2I.js";import"./CategoricalChart-Da7z_ebg.js";import"./useElementOffset-VabGtOpj.js";import"./iteratee-DGxwmvkZ.js";import"./Cross-COQhDoU6.js";import"./index-SrSy7NGQ.js";import"./ChartSizeDimensions-DagnIVtO.js";import"./OffsetShower-C8_o4Gkp.js";import"./PlotAreaShower-CJCyQCMM.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
