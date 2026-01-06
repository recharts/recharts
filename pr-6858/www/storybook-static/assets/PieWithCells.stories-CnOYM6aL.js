import{e}from"./iframe-DP2mOMln.js";import{a as c,P as v}from"./PieChart-StJKQAX7.js";import{R as f}from"./arrayEqualityCheck-5iTHPuD6.js";import{S as h}from"./Sector-CAH7EP92.js";import{C as g}from"./tooltipContext-NeqHBxIT.js";import{L as C}from"./Legend-CKQzX7-y.js";import{T as k}from"./Tooltip-CtUAS5no.js";import{R as y}from"./RechartsHookInspector-DVpbP7qM.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-_qLwNxhH.js";import"./Layer-BZqUSVid.js";import"./Curve-DYGBu986.js";import"./types-DdS-Ezdx.js";import"./Text-C5XiBNyf.js";import"./DOMUtils-DWLh1SLI.js";import"./ReactUtils-DJEcSmKG.js";import"./Label-DnLJWwCk.js";import"./PolarUtils-DkgNb_vz.js";import"./ZIndexLayer-BOwqkVYS.js";import"./zIndexSlice-Cik2D4vv.js";import"./RechartsWrapper-T4ODBC4p.js";import"./hooks-zeoTqeYF.js";import"./axisSelectors-1ZBBcU4q.js";import"./ActiveShapeUtils-BdyerBrO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DcVYjSDm.js";import"./useAnimationId-BuyyHYgP.js";import"./Trapezoid-3yVnAnN-.js";import"./Symbols-1_tOvOdR.js";import"./RegisterGraphicalItemId-30jUMiK8.js";import"./SetGraphicalItem-ZmYa4ptY.js";import"./polarSelectors-Dak6AA3v.js";import"./PolarChart-B9mNhBkG.js";import"./chartDataContext-B_bP7OxR.js";import"./CategoricalChart-DEV1B1BC.js";import"./useElementOffset-Bme7kzJ-.js";import"./iteratee-VohP_WFB.js";import"./Cross-CBOoYy9A.js";import"./index-CMQ1Twes.js";import"./ChartSizeDimensions-fmpk3s6Q.js";import"./OffsetShower-B4eNU7sm.js";import"./PlotAreaShower-CPDnvxOK.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
