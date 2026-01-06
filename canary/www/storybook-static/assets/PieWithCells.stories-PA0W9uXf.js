import{e}from"./iframe-I1Pz45Ny.js";import{a as c,P as v}from"./PieChart-Dq2D_J-e.js";import{R as f}from"./arrayEqualityCheck-BssfPt5l.js";import{S as h}from"./Sector-B4M-Rhc-.js";import{C as g}from"./tooltipContext-BuZCbxug.js";import{L as C}from"./Legend-H90mA884.js";import{T as k}from"./Tooltip-DEiFajup.js";import{R as y}from"./RechartsHookInspector-CR238VhK.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Bq-o5tNM.js";import"./Layer-DQZYEAka.js";import"./Curve-CHlRnf3G.js";import"./types-CrbLuNpc.js";import"./Text-DswTa9RV.js";import"./DOMUtils--5RVCy_u.js";import"./ReactUtils-_pBy8ldc.js";import"./Label-BgdagQ_F.js";import"./PolarUtils-DcZ6GJsX.js";import"./ZIndexLayer-BcHuHMGr.js";import"./zIndexSlice-BV16LNaQ.js";import"./RechartsWrapper-DCDr6Jqb.js";import"./hooks-B674bzAM.js";import"./axisSelectors-BE-GMhoq.js";import"./ActiveShapeUtils-BdkX4Sau.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-JQHiIfjv.js";import"./useAnimationId-SAHxkggc.js";import"./Trapezoid-DAueh7ih.js";import"./Symbols-BVua8K5W.js";import"./RegisterGraphicalItemId-S1t7FnBd.js";import"./SetGraphicalItem-B3UzWK5E.js";import"./polarSelectors-B8t_9gFo.js";import"./PolarChart-DPvnF4bW.js";import"./chartDataContext-CiPGF6pl.js";import"./CategoricalChart-Cv93x4E-.js";import"./useElementOffset-BNdgrSNe.js";import"./iteratee-TGONUFdq.js";import"./Cross-BG3-gOpg.js";import"./index-DMBIHBp8.js";import"./ChartSizeDimensions-rQb-Z9Di.js";import"./OffsetShower-DqiW8ZGm.js";import"./PlotAreaShower-DtXJ5a61.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
