import{e}from"./iframe-Dt2-Rn2T.js";import{P as c,a as v}from"./PieChart-C55aG4PA.js";import{R as f}from"./arrayEqualityCheck-e3rdG8sZ.js";import{S as h}from"./Sector-D7OsKu7Y.js";import{C as g}from"./tooltipContext-BR1HLUbB.js";import{L as C}from"./Legend-D3DE2sEM.js";import{T as k}from"./Tooltip-zi9iWAjn.js";import{R as y}from"./RechartsHookInspector-5aSdxu_t.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BoKEDzkZ.js";import"./Layer-Cy-kS3Tn.js";import"./Curve-Ff2ksW4t.js";import"./types-BU6HIYaW.js";import"./Text-Bi0muiqL.js";import"./DOMUtils-ngjC_q0v.js";import"./ReactUtils-OtSSiA15.js";import"./Label-C32CYHoq.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-RqzvM65R.js";import"./zIndexSlice-C1nzEFYS.js";import"./RechartsWrapper-CBGhND_r.js";import"./hooks-DJKBhfj1.js";import"./axisSelectors-B_oLlWSB.js";import"./ActiveShapeUtils-d0cRIwlh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CbTbEpru.js";import"./useAnimationId-C5m05tY7.js";import"./Trapezoid-BtcZZN-I.js";import"./Symbols-Cq9VSHhf.js";import"./RegisterGraphicalItemId-BHPtgntX.js";import"./SetGraphicalItem-C72JWaDt.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./polarSelectors-YU2YBQcN.js";import"./PolarChart-1uVGRFvc.js";import"./chartDataContext-DW1Hpk6b.js";import"./CategoricalChart-Dpdb76Jr.js";import"./useElementOffset-CUFeQ2ye.js";import"./iteratee-HLQGaxaB.js";import"./Cross-jy0XmrOG.js";import"./index-DBIfqZnx.js";import"./ChartSizeDimensions-CGKu1G21.js";import"./OffsetShower-Cg1AihHI.js";import"./PlotAreaShower-Byk-bE4C.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],se={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(a=i.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const me=["PieWithCells"];export{i as PieWithCells,me as __namedExportsOrder,se as default};
