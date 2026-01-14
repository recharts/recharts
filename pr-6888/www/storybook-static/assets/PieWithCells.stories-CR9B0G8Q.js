import{e}from"./iframe-C4Awkoff.js";import{P as c,a as v}from"./PieChart-DnxMP47j.js";import{R as f}from"./arrayEqualityCheck-B4QvsFQi.js";import{S as h}from"./Sector-Bh3LTLHk.js";import{C as g}from"./tooltipContext-86YEwt54.js";import{L as C}from"./Legend-_Qk_b7vi.js";import{T as k}from"./Tooltip-CF8MZLWi.js";import{R as y}from"./RechartsHookInspector-C8xIuzm_.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B49yJYL9.js";import"./Layer-3uSdf7p6.js";import"./Curve-CSLJzt9O.js";import"./types-BzBfPwET.js";import"./Text-C7YJVqE3.js";import"./DOMUtils-sn9DJRHa.js";import"./ReactUtils-QCPHueip.js";import"./Label-BgopB1Yd.js";import"./PolarUtils-CG-ELovL.js";import"./ZIndexLayer-KiDqj_Cd.js";import"./zIndexSlice-BPscvr6m.js";import"./RechartsWrapper-D13K1qt6.js";import"./hooks-Gb_nE6Hc.js";import"./axisSelectors-CRRN5Cb6.js";import"./ActiveShapeUtils-DGax7cBC.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BGrEruZe.js";import"./useAnimationId-BOjGjWHD.js";import"./Trapezoid-C9Na_GGw.js";import"./Symbols-D7LlaOYy.js";import"./RegisterGraphicalItemId-DlrlPqlA.js";import"./SetGraphicalItem-Dytz3s7d.js";import"./polarSelectors-Cp1ZZDOU.js";import"./PolarChart-DsbIenKK.js";import"./chartDataContext-BbHvubZk.js";import"./CategoricalChart-CQLlvG-9.js";import"./useElementOffset-CmYDN7px.js";import"./iteratee-BuIypSwY.js";import"./Cross-_fdziKuB.js";import"./index-C4xfSpfA.js";import"./ChartSizeDimensions-Bhhb-T47.js";import"./OffsetShower-CHWuz_7E.js";import"./PlotAreaShower-DgnmR6hn.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
