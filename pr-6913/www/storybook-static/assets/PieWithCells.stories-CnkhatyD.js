import{e}from"./iframe-DNZpCyoe.js";import{P as c,a as v}from"./PieChart-DmPmX40g.js";import{R as f}from"./arrayEqualityCheck-szoTsszl.js";import{S as h}from"./Sector-bkG1qaK_.js";import{C as g}from"./tooltipContext-DBHawIRO.js";import{L as C}from"./Legend-CfLCJzSJ.js";import{T as k}from"./Tooltip-BtfUmTnN.js";import{R as y}from"./RechartsHookInspector-PStiuiJe.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-2DomDO9e.js";import"./Layer-CrRkJfyu.js";import"./Curve-CA7wgxde.js";import"./types-Dxz_CRdn.js";import"./Text-XEpcAul9.js";import"./DOMUtils-DNR30RXa.js";import"./ReactUtils-DE6T7IjU.js";import"./Label-DtNzO2lD.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-eq4dVVjm.js";import"./zIndexSlice-CbXQpeLy.js";import"./RechartsWrapper-BQVorp6g.js";import"./hooks-BoDBEmNZ.js";import"./axisSelectors-BPOUZfxz.js";import"./ActiveShapeUtils-QhjeEfk1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DfjjH4Oz.js";import"./useAnimationId-CRV9WByP.js";import"./Trapezoid-CI8djX1t.js";import"./Symbols-D3jTalrW.js";import"./RegisterGraphicalItemId-BH87LWyT.js";import"./SetGraphicalItem-DkQhVMnS.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./polarSelectors-BUCDgfYZ.js";import"./PolarChart-DONLaa_t.js";import"./chartDataContext-IoENa7_Q.js";import"./CategoricalChart-BcCxfWo7.js";import"./useElementOffset-Baot8ccx.js";import"./iteratee-B96qlBzh.js";import"./Cross-C0ZH_G-n.js";import"./index-CZ8HrsbR.js";import"./ChartSizeDimensions-Cev-F566.js";import"./OffsetShower-DlkB9H2-.js";import"./PlotAreaShower-DJtLg1j7.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],se={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
