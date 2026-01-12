import{e}from"./iframe-B8wZLo82.js";import{a as c,P as v}from"./PieChart-YsNHNOCf.js";import{R as f}from"./arrayEqualityCheck-mQHvFPpg.js";import{S as h}from"./Sector-B3KOtxMp.js";import{C as g}from"./tooltipContext-CuTQZya9.js";import{L as C}from"./Legend-nundP5JZ.js";import{T as k}from"./Tooltip-CQ99GayR.js";import{R as y}from"./RechartsHookInspector-GmoDPQRs.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DhFJ0Eqh.js";import"./Layer-BJUTpLkJ.js";import"./Curve-CMsBNtPf.js";import"./types-DiGBS5_O.js";import"./Text-B5lfNvYb.js";import"./DOMUtils-Caps1FVU.js";import"./ReactUtils-Dj7f4Iqr.js";import"./Label-DvY0zh6c.js";import"./PolarUtils-DHvcKc2n.js";import"./ZIndexLayer-DdiLICHA.js";import"./zIndexSlice-vxKp5epo.js";import"./RechartsWrapper-CBigNIyW.js";import"./hooks-BiJhptmv.js";import"./axisSelectors-Bv-IDWqv.js";import"./ActiveShapeUtils-CpZCSmIN.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bg6726WX.js";import"./useAnimationId-Dy4qDS51.js";import"./Trapezoid-Zj_KtUDG.js";import"./Symbols-CZWpR43S.js";import"./RegisterGraphicalItemId-CCpmn4R2.js";import"./SetGraphicalItem-CNzy8eWj.js";import"./polarSelectors-1SQx3JeT.js";import"./PolarChart-RwGQNp30.js";import"./chartDataContext-Cx3FiXmZ.js";import"./CategoricalChart-DfnOGKPM.js";import"./useElementOffset-CA4uogOE.js";import"./iteratee-1BNukA-G.js";import"./Cross-C1H0FFXN.js";import"./index-DUOpxgLn.js";import"./ChartSizeDimensions-QOi8XTXN.js";import"./OffsetShower-DE0ZkW5V.js";import"./PlotAreaShower-ZBvPTwOe.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
