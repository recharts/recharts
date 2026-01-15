import{e}from"./iframe-BfbK0YnM.js";import{P as c,a as v}from"./PieChart-CQsJtEwj.js";import{R as f}from"./arrayEqualityCheck-DNFpTLKx.js";import{S as h}from"./Sector-BlKZ7V0w.js";import{C as g}from"./tooltipContext-0V0eoMU8.js";import{L as C}from"./Legend-CGmYQWye.js";import{T as k}from"./Tooltip-BYF1Nr6X.js";import{R as y}from"./RechartsHookInspector-hJ2wORVM.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-1x2577Vl.js";import"./Layer-CgE-ub3Y.js";import"./Curve-DDb4cbsk.js";import"./types-Bmf6Pun4.js";import"./Text-CnAgZ5uJ.js";import"./DOMUtils-ed8aeX9h.js";import"./ReactUtils-CcajNckk.js";import"./Label-DahQkxIF.js";import"./PolarUtils-D7VIOQ5-.js";import"./ZIndexLayer-aH4ZpYgD.js";import"./zIndexSlice-C2nD2lty.js";import"./RechartsWrapper-CneYaVm0.js";import"./hooks-C3PasfZ_.js";import"./axisSelectors-B0fcML92.js";import"./ActiveShapeUtils-C7AgwxsO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BHHp3Xwt.js";import"./useAnimationId-D-pFcM5J.js";import"./Trapezoid-CzxVEg4f.js";import"./Symbols-sbw_CJaX.js";import"./RegisterGraphicalItemId-CqePIzFp.js";import"./SetGraphicalItem-C-oQkIvQ.js";import"./polarSelectors-BGJJYeKu.js";import"./PolarChart-BsP7UOr-.js";import"./chartDataContext-BgZQ9X9l.js";import"./CategoricalChart-bjsre3s0.js";import"./useElementOffset-BzBKGA5V.js";import"./iteratee-Cmke_KGw.js";import"./Cross-CvirRkcd.js";import"./index-DXUjyqxC.js";import"./ChartSizeDimensions-Cp6ZFz8t.js";import"./OffsetShower-C9W4p0Nm.js";import"./PlotAreaShower-Bs9OF-cp.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
