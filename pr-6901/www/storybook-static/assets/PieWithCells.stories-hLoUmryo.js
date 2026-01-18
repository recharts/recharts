import{e}from"./iframe-majBtK-E.js";import{P as c,a as v}from"./PieChart-DZVvwkSo.js";import{R as f}from"./arrayEqualityCheck-DVgUr5sF.js";import{S as h}from"./Sector-7pSu32ck.js";import{C as g}from"./tooltipContext-D16OHKBb.js";import{L as C}from"./Legend-Da08p0Hb.js";import{T as k}from"./Tooltip-C8D7tST0.js";import{R as y}from"./RechartsHookInspector-C8tTsK9b.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B4pC6M3l.js";import"./Layer-BLDMzEqE.js";import"./Curve-9TopWPhs.js";import"./types-C6X4a6Ih.js";import"./Text-phE5o1Gx.js";import"./DOMUtils-mrrzRZs0.js";import"./ReactUtils-CnNdH0Da.js";import"./Label-e34JrSXW.js";import"./PolarUtils-CJsRsyos.js";import"./ZIndexLayer-Dv76Cipi.js";import"./zIndexSlice-7SDVSN9y.js";import"./RechartsWrapper-0u9Ddv25.js";import"./hooks-oixdIqV0.js";import"./axisSelectors-Ce1DsLqd.js";import"./ActiveShapeUtils-CN13qk7C.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-en3DGB-O.js";import"./useAnimationId-BsAnEyOV.js";import"./Trapezoid-DktYSmhy.js";import"./Symbols-Cp35_dcw.js";import"./RegisterGraphicalItemId-CiSdioED.js";import"./SetGraphicalItem-Bs7RhIp3.js";import"./polarSelectors-_vhSv75j.js";import"./PolarChart-H_rHnPGm.js";import"./chartDataContext-CZTJj6RV.js";import"./CategoricalChart-D7h1yX10.js";import"./useElementOffset-Bj2_3CJS.js";import"./iteratee-_KdHQ80V.js";import"./Cross-CyZ2dbHO.js";import"./index-C8KZ_CA2.js";import"./ChartSizeDimensions-CwqFjkkT.js";import"./OffsetShower-CIon6stJ.js";import"./PlotAreaShower-BUoNZ3NG.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
