import{e}from"./iframe-BMyqBDY5.js";import{a as c,P as v}from"./PieChart-3UwJtou0.js";import{R as f}from"./arrayEqualityCheck-DuyxfREv.js";import{S as h}from"./Sector-Dnl75ukO.js";import{C as g}from"./tooltipContext-CyNQvS7H.js";import{L as C}from"./Legend-DsekqhC3.js";import{T as k}from"./Tooltip-C6aJHee-.js";import{R as y}from"./RechartsHookInspector-B_A0Uap_.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BGKl1tyb.js";import"./Layer-DWAVkTpZ.js";import"./Curve-CP_WuQoJ.js";import"./types-C28cLjqk.js";import"./Text-C5dsmcfL.js";import"./DOMUtils-BxDLRwCB.js";import"./ReactUtils-DZSdNGLK.js";import"./Label-Cc8j6S_C.js";import"./PolarUtils-P_ZfIDsv.js";import"./ZIndexLayer-BHQIN7jK.js";import"./zIndexSlice-Dmm35KLy.js";import"./RechartsWrapper-hMDICSaE.js";import"./hooks-CtyWZT2U.js";import"./axisSelectors-RxIOnnLe.js";import"./ActiveShapeUtils-HKM8HgOk.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-MMr5z6jI.js";import"./useAnimationId-MgACKJ1I.js";import"./Trapezoid-DUIbc0mY.js";import"./Symbols-DAD_VKXg.js";import"./RegisterGraphicalItemId-BGAui-Ym.js";import"./SetGraphicalItem-DXrsAiCv.js";import"./polarSelectors-D8Dgbe_J.js";import"./PolarChart-Cw5iKM4k.js";import"./chartDataContext-DO_q_27U.js";import"./CategoricalChart-Bg_NZvOR.js";import"./useElementOffset-DF2WTDjY.js";import"./iteratee-C5e8BY8E.js";import"./Cross-C0Wr0_cY.js";import"./index-DIS5R2kz.js";import"./ChartSizeDimensions-BB84pelj.js";import"./OffsetShower-CeLLqloX.js";import"./PlotAreaShower-zjCOtUVv.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
