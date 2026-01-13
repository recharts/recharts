import{e}from"./iframe-CjUtT138.js";import{a as c,P as v}from"./PieChart-CVdiAipk.js";import{R as f}from"./arrayEqualityCheck-B-tT2ESq.js";import{S as h}from"./Sector-DLzrEVZJ.js";import{C as g}from"./tooltipContext-DSCUXggB.js";import{L as C}from"./Legend-VMc9Q-gx.js";import{T as k}from"./Tooltip-BKBpMuyG.js";import{R as y}from"./RechartsHookInspector-BSSs4sC-.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DXKWDAOg.js";import"./Layer-D_MGslDL.js";import"./Curve-vYHSIBiw.js";import"./types-C9Ftyw06.js";import"./Text-DwSJp926.js";import"./DOMUtils-D7gju_6v.js";import"./ReactUtils-CHVaJjT2.js";import"./Label-BL8V4Wmg.js";import"./PolarUtils-_eTStEZn.js";import"./ZIndexLayer-DLNaK2nP.js";import"./zIndexSlice-DsVMOISz.js";import"./RechartsWrapper-it-0F-jx.js";import"./hooks-4UrLvWFw.js";import"./axisSelectors-BX9CBNHK.js";import"./ActiveShapeUtils-BsX54dsF.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Btcn2slE.js";import"./useAnimationId-D51fABKH.js";import"./Trapezoid-tluOV2am.js";import"./Symbols-Lp37GtaH.js";import"./RegisterGraphicalItemId-BsU6Bbki.js";import"./SetGraphicalItem-pIRkDX-c.js";import"./polarSelectors-Bg9VSBnZ.js";import"./PolarChart-D6prncgs.js";import"./chartDataContext-Cd_ntzly.js";import"./CategoricalChart-QNPsXY_1.js";import"./useElementOffset-BvQjE7ab.js";import"./iteratee-D11VEsjy.js";import"./Cross-B2bRvlIB.js";import"./index-CYZv41C2.js";import"./ChartSizeDimensions-CNTgDKUn.js";import"./OffsetShower-Cvrl070M.js";import"./PlotAreaShower-Bo9f_x1d.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
