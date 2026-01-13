import{e}from"./iframe-CUnLgpW-.js";import{a as c,P as v}from"./PieChart-DgQ6faWB.js";import{R as f}from"./arrayEqualityCheck-CGwnIdvG.js";import{S as h}from"./Sector-CCBcQdor.js";import{C as g}from"./tooltipContext-J2Mqx9dW.js";import{L as C}from"./Legend-BTdhMNwo.js";import{T as k}from"./Tooltip-E9gUrVei.js";import{R as y}from"./RechartsHookInspector-Bx_AeU2-.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-3A21IoT3.js";import"./Layer-DqDgkHbR.js";import"./Curve-BFHPlIj0.js";import"./types-Cya9OZ_P.js";import"./Text-Bzx_mpBH.js";import"./DOMUtils-rOWW9V75.js";import"./ReactUtils-ubByZwRx.js";import"./Label-BFTmbefL.js";import"./PolarUtils-B2H8NKZh.js";import"./ZIndexLayer-CIJpz3dT.js";import"./zIndexSlice-COAwGY7D.js";import"./RechartsWrapper-DlEqFuyr.js";import"./hooks-BodQywHm.js";import"./axisSelectors-CesYX3jk.js";import"./ActiveShapeUtils-CaB32_zp.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D-fUf-OO.js";import"./useAnimationId-DVbvIVcC.js";import"./Trapezoid-D3rvFnZU.js";import"./Symbols-B7Txi7cb.js";import"./RegisterGraphicalItemId-BTAKxoZt.js";import"./SetGraphicalItem-BRf4oXtZ.js";import"./polarSelectors-Boe5joZj.js";import"./PolarChart-C5drMWSy.js";import"./chartDataContext-C42Wd2jm.js";import"./CategoricalChart-BBiN7XHJ.js";import"./useElementOffset-g6bXIJAX.js";import"./iteratee-DpJPEM-F.js";import"./Cross-DA8hwZR2.js";import"./index-F2EJmSFt.js";import"./ChartSizeDimensions-BZ4xctFr.js";import"./OffsetShower-DfQZxxZ8.js";import"./PlotAreaShower-ajA77Kx1.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
