import{e}from"./iframe-BVH8UecD.js";import{P as c,a as v}from"./PieChart-Cy_N3R3S.js";import{R as f}from"./arrayEqualityCheck-vgKGXjJg.js";import{S as h}from"./Sector-DWTAjqin.js";import{C as g}from"./tooltipContext-BBDmyfFl.js";import{L as C}from"./Legend-DVX0hwCU.js";import{T as k}from"./Tooltip-DuGZbbvN.js";import{R as y}from"./RechartsHookInspector-Dq3yykk5.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Cdk0Kr5w.js";import"./Layer-CdphaBoS.js";import"./Curve-5Yzr7IBn.js";import"./types-iQF7hC2M.js";import"./Text-B5hVuEjR.js";import"./DOMUtils-Awr9GIGy.js";import"./ReactUtils-CPhzqwNY.js";import"./Label-DbioSpEE.js";import"./PolarUtils-D3PpCgED.js";import"./ZIndexLayer-Qipy46x2.js";import"./zIndexSlice-BoigZ-y7.js";import"./RechartsWrapper-BZaLp-vS.js";import"./hooks-EmSSg1xf.js";import"./axisSelectors-CdzAnCbl.js";import"./ActiveShapeUtils-BkZUQSXK.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DWlX6cPO.js";import"./useAnimationId-B1orywOS.js";import"./Trapezoid-BHTAQ8Mn.js";import"./Symbols-Bx3sDerM.js";import"./RegisterGraphicalItemId-BvvWKN3n.js";import"./SetGraphicalItem-B2OXJLzy.js";import"./polarSelectors-CYYw3TI0.js";import"./PolarChart-By58hzZN.js";import"./chartDataContext-DfFz62HT.js";import"./CategoricalChart-361vez3Q.js";import"./useElementOffset-DiypH9bb.js";import"./iteratee-DmvGlhfZ.js";import"./Cross-Dr7NJTwI.js";import"./index-C-t36GsJ.js";import"./ChartSizeDimensions-C0bbugJp.js";import"./OffsetShower-CgbwF9et.js";import"./PlotAreaShower-HC6koTfx.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
