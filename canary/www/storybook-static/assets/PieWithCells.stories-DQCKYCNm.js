import{e}from"./iframe-But0a38P.js";import{P as c,a as v}from"./PieChart-D9M6gaAo.js";import{R as f}from"./arrayEqualityCheck-CYbCyNsP.js";import{S as h}from"./Sector-BzzDDKvP.js";import{C as g}from"./tooltipContext-Bec1jSl9.js";import{L as C}from"./Legend-C86zWpAz.js";import{T as k}from"./Tooltip-DDsbfsc5.js";import{R as y}from"./RechartsHookInspector-C5Pe1Yuk.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Bm0IZKgg.js";import"./Layer-afBuC6vE.js";import"./Curve-B4UI-EDA.js";import"./types-BORgRnck.js";import"./Text-CcNcGCTu.js";import"./DOMUtils-Du126Ke7.js";import"./ReactUtils-BkpqDUuI.js";import"./Label-C7EMJJOB.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-BqdPe-lh.js";import"./zIndexSlice-BltV0wsp.js";import"./RechartsWrapper-PnZQcIU_.js";import"./hooks-CpJdPTaX.js";import"./axisSelectors-C4f3hvSw.js";import"./ActiveShapeUtils-CpE5KD3c.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BVahoehG.js";import"./useAnimationId-DCy88jod.js";import"./Trapezoid-OOuCLK_Z.js";import"./Symbols-D7e9GUiu.js";import"./RegisterGraphicalItemId-ByXCQiha.js";import"./SetGraphicalItem-BNXEXR48.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./polarSelectors-TlEJytHK.js";import"./PolarChart-CR930Pvn.js";import"./chartDataContext-BNuUAnVq.js";import"./CategoricalChart-B2oR5-3x.js";import"./useElementOffset-B8Ksl-QF.js";import"./iteratee-Dt4Ii8C3.js";import"./Cross-CSBpAIQj.js";import"./index-C00Mu2Jv.js";import"./ChartSizeDimensions-C_cjOMUb.js";import"./OffsetShower-CyyKWRo3.js";import"./PlotAreaShower-LOYVmRHK.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],se={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
