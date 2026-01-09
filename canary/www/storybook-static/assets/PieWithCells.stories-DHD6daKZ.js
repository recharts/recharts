import{e}from"./iframe-DGrXlEkx.js";import{a as c,P as v}from"./PieChart-CTfRJoS0.js";import{R as f}from"./arrayEqualityCheck-DicChNuU.js";import{S as h}from"./Sector-BiHhGzVm.js";import{C as g}from"./tooltipContext-CMxTeChW.js";import{L as C}from"./Legend-CsXa4xxu.js";import{T as k}from"./Tooltip-Cyj47X2a.js";import{R as y}from"./RechartsHookInspector-Br39JKkJ.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CbjUZWO4.js";import"./Layer-D3LXHH9n.js";import"./Curve-B7GNUcvb.js";import"./types-Byz7h8Fw.js";import"./Text-DHLuacJp.js";import"./DOMUtils-BNpuiDkW.js";import"./ReactUtils-B0RMD20A.js";import"./Label-BU6Zd3bq.js";import"./PolarUtils-DHWqJfSQ.js";import"./ZIndexLayer-B0lWMP9E.js";import"./zIndexSlice-BOlzJk7E.js";import"./RechartsWrapper-BsZxNtsW.js";import"./hooks-BJzdHLQJ.js";import"./axisSelectors-B99hHUji.js";import"./ActiveShapeUtils-Dmo5KH5o.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B_ChE2a8.js";import"./useAnimationId-BLzFnaDj.js";import"./Trapezoid-D3rkb8mR.js";import"./Symbols-lPueLsWK.js";import"./RegisterGraphicalItemId-kRuXUne3.js";import"./SetGraphicalItem-DtkD_AUo.js";import"./polarSelectors-Cb63FjAU.js";import"./PolarChart-DtSacEEm.js";import"./chartDataContext-xgZ2IC4i.js";import"./CategoricalChart-CoFZdKLi.js";import"./useElementOffset-peD2ny1m.js";import"./iteratee-BfALflAJ.js";import"./Cross-DGofQ-D3.js";import"./index-DUFFx6eI.js";import"./ChartSizeDimensions-DMMvC6d0.js";import"./OffsetShower-T7KMfcKq.js";import"./PlotAreaShower-B7mPYwn0.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
