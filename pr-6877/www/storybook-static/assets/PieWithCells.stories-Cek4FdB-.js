import{e}from"./iframe-BIMs3Nj-.js";import{a as c,P as v}from"./PieChart-IZk-TLFZ.js";import{R as f}from"./arrayEqualityCheck-pDlZyWSR.js";import{S as h}from"./Sector-B3pSkdDH.js";import{C as g}from"./tooltipContext-DYJYscQi.js";import{L as C}from"./Legend-61MTEnVq.js";import{T as k}from"./Tooltip-Dbd59Cn4.js";import{R as y}from"./RechartsHookInspector-DBOIj4qW.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C_VwJ3u_.js";import"./Layer-DBgzSzH_.js";import"./Curve-DwuONHqE.js";import"./types-CnKH5I-b.js";import"./Text-CgjsJcds.js";import"./DOMUtils-voeX-mFj.js";import"./ReactUtils-3uFwj_TO.js";import"./Label-CIRwRBMZ.js";import"./PolarUtils-BWV_hv32.js";import"./ZIndexLayer-DJ3JTFRU.js";import"./zIndexSlice-Cnolt5PP.js";import"./RechartsWrapper-Bo8-B70G.js";import"./hooks-Bc7hX-2Z.js";import"./axisSelectors-NKchjqRS.js";import"./ActiveShapeUtils-CV_fg9r-.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dx9fcimO.js";import"./useAnimationId-DJ77ibSq.js";import"./Trapezoid-B19U1HS5.js";import"./Symbols-BUMcrI7R.js";import"./RegisterGraphicalItemId-DeUg8eaE.js";import"./SetGraphicalItem-D5C3EpbS.js";import"./polarSelectors-BcKeg04C.js";import"./PolarChart-DUirhnoy.js";import"./chartDataContext-Dko-7FeN.js";import"./CategoricalChart-DCejedhJ.js";import"./useElementOffset-DBbTJfWF.js";import"./iteratee-C4-_aqgq.js";import"./Cross-C90J-YK0.js";import"./index-CngAoIpS.js";import"./ChartSizeDimensions-C2UWIaZL.js";import"./OffsetShower-DVFE9F3Y.js";import"./PlotAreaShower-DBdBZo3w.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
