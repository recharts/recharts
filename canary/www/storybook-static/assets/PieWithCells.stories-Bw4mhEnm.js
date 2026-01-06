import{e}from"./iframe-CKmpfOpL.js";import{a as c,P as v}from"./PieChart-C5OLVEet.js";import{R as f}from"./arrayEqualityCheck-CGTamc7H.js";import{S as h}from"./Sector-DbmZtSEy.js";import{C as g}from"./tooltipContext-dPsf86pg.js";import{L as C}from"./Legend-CE_Ff5Rx.js";import{T as k}from"./Tooltip-DcsIazWj.js";import{R as y}from"./RechartsHookInspector-DZtkbE0Z.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C7FTbt6F.js";import"./Layer-DhYkCEVl.js";import"./Curve-Bys97J5V.js";import"./types-BLY5tRwt.js";import"./Text-DsSpVH1-.js";import"./DOMUtils-Bi3DtBC5.js";import"./ReactUtils-BXryAzdD.js";import"./Label-DnuO6Rjq.js";import"./PolarUtils-BmD-XZwK.js";import"./ZIndexLayer-B_sQwTbu.js";import"./zIndexSlice-CQqF6s7B.js";import"./RechartsWrapper-D1NbH_UG.js";import"./hooks-BGbqk51h.js";import"./axisSelectors-Bt4_ZMoO.js";import"./ActiveShapeUtils-DCJZv5Uu.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D_zs00yx.js";import"./useAnimationId-DzZ8q-8e.js";import"./Trapezoid-PdOQHAco.js";import"./Symbols-CFHhg7rN.js";import"./RegisterGraphicalItemId-wa1Otpvd.js";import"./SetGraphicalItem-DSgpGKPf.js";import"./polarSelectors-Dx_4Jfci.js";import"./PolarChart-D0MJBS0_.js";import"./chartDataContext-CLpm-ufS.js";import"./CategoricalChart-CCPcc9Jc.js";import"./useElementOffset-BBYrqTei.js";import"./iteratee-DYyig2D7.js";import"./Cross-BEdInfga.js";import"./index-moZvkop3.js";import"./ChartSizeDimensions-DFNYoe11.js";import"./OffsetShower-9z7FzopR.js";import"./PlotAreaShower-C7JeV-Sm.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
