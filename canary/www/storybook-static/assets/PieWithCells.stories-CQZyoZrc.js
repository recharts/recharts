import{e}from"./iframe-ZLLTs1L2.js";import{a as c,P as v}from"./PieChart-DD3OWnc4.js";import{R as f}from"./arrayEqualityCheck-DulyWTfD.js";import{S as h}from"./Sector-C6G3hgjU.js";import{C as g}from"./tooltipContext-Cv1LqyUw.js";import{L as C}from"./Legend-Dqil_PZE.js";import{T as k}from"./Tooltip-Bed7mk_T.js";import{R as y}from"./RechartsHookInspector-BKmDjbuV.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-EUJ6_KoJ.js";import"./Layer-Z1TeMr3K.js";import"./Curve-F2oZRqDm.js";import"./types-DBavnEN9.js";import"./Text-BKG1mCXc.js";import"./DOMUtils-CjGF8Xv9.js";import"./ReactUtils-WSqE_xht.js";import"./Label-B7ECka5v.js";import"./PolarUtils-B9p_wTge.js";import"./ZIndexLayer-C8fNtv4Q.js";import"./zIndexSlice-CBRMfbRc.js";import"./RechartsWrapper-Bhfb6Tks.js";import"./hooks-hqrrPiBI.js";import"./axisSelectors-Cv0R_3oc.js";import"./ActiveShapeUtils-DYOPRKym.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CUa7ysAN.js";import"./useAnimationId-BvHzHoR_.js";import"./Trapezoid-qhd__VDX.js";import"./Symbols-CzmBRPG3.js";import"./RegisterGraphicalItemId-l1uOO4MI.js";import"./SetGraphicalItem-D8kwoYfk.js";import"./polarSelectors-heh6r3TG.js";import"./PolarChart-C-r7cKhf.js";import"./chartDataContext-nQ2-yRIQ.js";import"./CategoricalChart-CbG3DQY1.js";import"./useElementOffset-C-GQABMK.js";import"./iteratee-DOdS9XFe.js";import"./Cross-DHvBXRas.js";import"./index-CuDIHWly.js";import"./ChartSizeDimensions-P7hJmoJ7.js";import"./OffsetShower-DgUH6KPA.js";import"./PlotAreaShower-Caaac_r-.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
