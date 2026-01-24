import{e}from"./iframe-CQZRorsz.js";import{P as c,a as v}from"./PieChart-D5A9G_xG.js";import{R as f}from"./arrayEqualityCheck-CQz2flWD.js";import{S as h}from"./Sector-CNW4UiZI.js";import{C as g}from"./tooltipContext-5nOvhwQX.js";import{L as C}from"./Legend-BS5Pl9Uu.js";import{T as k}from"./Tooltip-C3LdudNm.js";import{R as y}from"./RechartsHookInspector-C6yxPh9Y.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DxEfcX11.js";import"./Layer-BhxYv9l3.js";import"./Curve-DrDC8HjY.js";import"./types-Doxj5qxW.js";import"./Text-CY4lUY6F.js";import"./DOMUtils-CKyp5Bk3.js";import"./ReactUtils-C6XrS2ih.js";import"./Label-BJgUEQlL.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-D-FGBInf.js";import"./zIndexSlice-DivviUqw.js";import"./RechartsWrapper-3JJSXLuc.js";import"./hooks-8nQ0k4Um.js";import"./axisSelectors-CGQ8Nqi9.js";import"./ActiveShapeUtils-C0gybZn4.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BSDamI1k.js";import"./useAnimationId-DBhXyqXg.js";import"./Trapezoid-Cm1xY1NA.js";import"./Symbols-DuJw27Ks.js";import"./RegisterGraphicalItemId-CzLwNJmP.js";import"./SetGraphicalItem-BtJfHG9-.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./polarSelectors-RUdIYLIV.js";import"./PolarChart-BZdGD0nB.js";import"./chartDataContext-CFVBZ9Sm.js";import"./CategoricalChart-BLq3U5DT.js";import"./useElementOffset-BJytgDY9.js";import"./iteratee-CArEEeig.js";import"./Cross-D_sAlL5C.js";import"./index-hMecVWzD.js";import"./ChartSizeDimensions-DRFM_waE.js";import"./OffsetShower-CrJHGQg7.js";import"./PlotAreaShower-De7PuJHn.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],se={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
