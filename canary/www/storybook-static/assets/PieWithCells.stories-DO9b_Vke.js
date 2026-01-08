import{e}from"./iframe-BeTvSsnM.js";import{a as c,P as v}from"./PieChart-PWYPPqKr.js";import{R as f}from"./arrayEqualityCheck-D3IRE7yY.js";import{S as h}from"./Sector-CUcldSZb.js";import{C as g}from"./tooltipContext-1OFOmRSd.js";import{L as C}from"./Legend-DHkaMzVY.js";import{T as k}from"./Tooltip-DRceJNuE.js";import{R as y}from"./RechartsHookInspector-CQodTe4G.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Bu9sKtx0.js";import"./Layer-vwm7UlyD.js";import"./Curve-B6pW5hMh.js";import"./types-ColG541f.js";import"./Text-DQUPEW1Z.js";import"./DOMUtils-CPaL2uk1.js";import"./ReactUtils-Bt5PnhOQ.js";import"./Label-DX1B0Se3.js";import"./PolarUtils-CiP_-J6C.js";import"./ZIndexLayer-D3vvSLkM.js";import"./zIndexSlice-ClDvfLGt.js";import"./RechartsWrapper-DqbHfwZA.js";import"./hooks-Buy-B5J7.js";import"./axisSelectors-B3oALCrY.js";import"./ActiveShapeUtils-DAFlR22H.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Do5x2l-c.js";import"./useAnimationId-CijMLLZk.js";import"./Trapezoid-zw4Ixv-f.js";import"./Symbols-Drvhtafw.js";import"./RegisterGraphicalItemId-ktGcRGkW.js";import"./SetGraphicalItem-T9xLTiUd.js";import"./polarSelectors-Iv3x4zmh.js";import"./PolarChart-DDcKxWjP.js";import"./chartDataContext-BveSyHyY.js";import"./CategoricalChart-7psyK6-L.js";import"./useElementOffset-4UzseTJd.js";import"./iteratee-B3Iw57Mc.js";import"./Cross-DQcegiYe.js";import"./index-BBjIj-68.js";import"./ChartSizeDimensions-8siL2NNx.js";import"./OffsetShower-Bali05F_.js";import"./PlotAreaShower-DNqWhhRF.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
