import{r as A,R as t}from"./iframe-CLlZb5WL.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-S27VwcuA.js";import{A as E}from"./AreaChart-BpsPH7LC.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BNeijhUJ.js";import{X as g}from"./XAxis-DBuW-REH.js";import{Y as h}from"./YAxis-BLqAl2VU.js";import{A as a}from"./Area-DIDxrr2p.js";import{T as u}from"./Tooltip-BnCF42xd.js";import{R as k}from"./zIndexSlice-C-cLRtN4.js";import{L as v}from"./Legend-Fqz34m2F.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BEo8N9ka.js";import"./resolveDefaultProps-CUiHCny8.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CGMVEYME.js";import"./throttle--RnCkAem.js";import"./index-BdtMEJny.js";import"./index-DCzwXD2o.js";import"./isWellBehavedNumber-BwmlGv0Y.js";import"./d3-scale-ehl80MUm.js";import"./index-BYYf9lpv.js";import"./index-Do3i96_1.js";import"./renderedTicksSlice-DFlg4CzS.js";import"./index-BIUIHb15.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CHomC56b.js";import"./chartDataContext-CuhB7l0S.js";import"./CategoricalChart-v23si-Wq.js";import"./CartesianAxis-CxGxQBTe.js";import"./Layer-BuwGQM2R.js";import"./Text-B9EUqwyc.js";import"./pageBackground-2CAg07jP.js";import"./useId-kcUEvBg4.js";import"./useBackwardsCompatibleTheme-Bfo5Qe72.js";import"./Label-yyQZOpZ1.js";import"./ZIndexLayer-Buoz0PG0.js";import"./types-nJd33CGk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-BadvgHow.js";import"./useAnimationId-DDy-DT0X.js";import"./dataEntryStyles-DY-TrJ76.js";import"./ActivePoints-2Ikh-s4p.js";import"./Dot-6T6__7vw.js";import"./GraphicalItemClipPath-DZFjU2Jb.js";import"./SetGraphicalItem-B9oKhYwJ.js";import"./getRadiusAndStrokeWidthFromDot-DNx2I_LV.js";import"./ActiveShapeUtils-_yNwwF4x.js";import"./Curve-ByIUmGlM.js";import"./step-CBmZmkcc.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-DITcK2E7.js";import"./useElementOffset-Po4dJUCP.js";import"./uniqBy-Cz2J3eef.js";import"./iteratee-CPLYA7dn.js";import"./Cross-8FBDoCgf.js";import"./Rectangle-Coa83haY.js";import"./util-Dxo8gN5i.js";import"./Sector-CUA1u2vb.js";import"./Symbols-CQNoTje8.js";import"./symbol-CCuh3uUP.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={300}>
        <ComposedChart margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={pageData}>
          <Area isAnimationActive={false} dataKey="uv" {...args} />
          {/* All further components are added to show the interaction with the Area properties */}
          <Legend />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: getStoryArgsFromArgsTypesObject(ComposedChartArgs),
  parameters: {
    docs: {
      description: {
        story: 'You can tab to this chart. From there, you can use the arrow keys to navigate along the chart.'
      }
    }
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var s,p,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => {
    const [toggle, setToggle] = useState(true);
    return <div>
        <button type="button" onClick={() => setToggle(!toggle)}>
          Toggle Tooltip
        </button>

        <AreaChart width={500} height={400} data={pageData} margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
          {toggle && <Tooltip />}
        </AreaChart>
      </div>;
  },
  args: {}
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Wt as __namedExportsOrder,Ft as default};
