import{e}from"./iframe-B2sVpU8Z.js";import{a as c,P as v}from"./PieChart-ifkPdi50.js";import{R as f}from"./arrayEqualityCheck-Dhi79NZV.js";import{S as h}from"./Sector-DOuizIpa.js";import{C as g}from"./tooltipContext-3LTJxxWf.js";import{L as C}from"./Legend-B9gCA0tv.js";import{T as k}from"./Tooltip-C1UDGgrX.js";import{R as y}from"./RechartsHookInspector-CVc_RdQc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CY8PYEK4.js";import"./Layer-CgMiZnew.js";import"./Curve-DIfGyAUS.js";import"./types-DwL4AKHm.js";import"./Text-BIiE8Zu5.js";import"./DOMUtils-BEUHT1oG.js";import"./ReactUtils-myx_H7Lt.js";import"./Label-Cini22wZ.js";import"./PolarUtils-D7wLniJK.js";import"./ZIndexLayer-BRoLt-1O.js";import"./zIndexSlice-D-AtcMvw.js";import"./RechartsWrapper-BO_KERjm.js";import"./hooks-CO8_l9qG.js";import"./axisSelectors-CpQ2T2MD.js";import"./ActiveShapeUtils-BmX6o3Pn.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-r91KSjwc.js";import"./useAnimationId-Dci0ZhWb.js";import"./Trapezoid-CHmzYexd.js";import"./Symbols-D-gYgerz.js";import"./RegisterGraphicalItemId-DS_P1DDV.js";import"./SetGraphicalItem-BEcH9pqG.js";import"./polarSelectors-DjHAV5A7.js";import"./PolarChart-NZoD0bpV.js";import"./chartDataContext-BKjXgLbF.js";import"./CategoricalChart-Dr5ioBXT.js";import"./useElementOffset-kvSaE0nm.js";import"./iteratee-Cq_sZyYY.js";import"./Cross-B2eHhmjD.js";import"./index-8c_ign4p.js";import"./ChartSizeDimensions-DNVkMrvA.js";import"./OffsetShower-BJ2e6zPx.js";import"./PlotAreaShower-BJGrz5Yh.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
