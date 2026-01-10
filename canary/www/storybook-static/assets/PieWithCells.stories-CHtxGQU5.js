import{e}from"./iframe-C7VEdwDl.js";import{a as c,P as v}from"./PieChart-C3UYV2gA.js";import{R as f}from"./arrayEqualityCheck-BFuWEF_2.js";import{S as h}from"./Sector-foYN3hhu.js";import{C as g}from"./tooltipContext-Bt-pgH_N.js";import{L as C}from"./Legend-Bp5MdZLe.js";import{T as k}from"./Tooltip-nM3QPx50.js";import{R as y}from"./RechartsHookInspector-zossHO9I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BUd4YoeE.js";import"./Layer-CPbMT7hg.js";import"./Curve-DE9HnzTx.js";import"./types-CRh2J3nK.js";import"./Text-BdIA0mDm.js";import"./DOMUtils-BLCIXtr_.js";import"./ReactUtils-DGKDkYPZ.js";import"./Label-BR_hSEq_.js";import"./PolarUtils-DHfJA17M.js";import"./ZIndexLayer-BPo_6GDC.js";import"./zIndexSlice-BJ_Gr8zy.js";import"./RechartsWrapper-DEcROWOI.js";import"./hooks-BW_tvarJ.js";import"./axisSelectors-F4Rfzy8w.js";import"./ActiveShapeUtils-DxCy-J0g.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dk5aROAI.js";import"./useAnimationId-BiiYSys9.js";import"./Trapezoid-CiHao4Jj.js";import"./Symbols-HruIKh8l.js";import"./RegisterGraphicalItemId-CQVzSIpL.js";import"./SetGraphicalItem-CDbWAttj.js";import"./polarSelectors-BFMG5mVl.js";import"./PolarChart-BJ_cdjR1.js";import"./chartDataContext-CfkWD6kk.js";import"./CategoricalChart-0Xeq1mM5.js";import"./useElementOffset-D7uKUYt0.js";import"./iteratee-BM75dhpc.js";import"./Cross-CXIEA9TA.js";import"./index-D3VqoZ-t.js";import"./ChartSizeDimensions-DdGVjbyp.js";import"./OffsetShower-BIF6rOJj.js";import"./PlotAreaShower-YHRv7s4A.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
