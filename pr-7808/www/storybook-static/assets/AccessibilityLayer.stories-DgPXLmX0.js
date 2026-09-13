import{r as A,R as t}from"./iframe-B8ANsApq.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-DPkaGwQ5.js";import{A as E}from"./AreaChart-Ejj-Cjo3.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CPT33nDc.js";import{X as g}from"./XAxis-DCQ61JnD.js";import{Y as h}from"./YAxis-DqEKkvv0.js";import{A as a}from"./Area-DY2VePAl.js";import{T as u}from"./Tooltip-CJ1B1BAo.js";import{R as k}from"./zIndexSlice-Ce8NeCcb.js";import{L as v}from"./Legend-DtF7MnQv.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-soNVocgi.js";import"./resolveDefaultProps-CEZBLQnS.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Cko3d0ja.js";import"./throttle-CG-pSLVK.js";import"./index-D6PdJg6F.js";import"./index-DeFSUeff.js";import"./isWellBehavedNumber-C7ukF8ee.js";import"./d3-scale-CsEPL9IW.js";import"./index-CLpz5dh6.js";import"./index-MxXQFx09.js";import"./renderedTicksSlice-DCIeAqty.js";import"./index-DgU7AYrg.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Dm1UL_JN.js";import"./chartDataContext-SNmeHJ5h.js";import"./CategoricalChart-ZRjbnEpi.js";import"./CartesianAxis-DOZB_H9C.js";import"./Layer-DqVYjNpd.js";import"./Text-BYXQaTCF.js";import"./DOMUtils-BNNcxOqL.js";import"./useId-DgqgElmx.js";import"./useBackwardsCompatibleTheme-DqouWSCS.js";import"./Label-CKPEh0-k.js";import"./ZIndexLayer-B21fZXtG.js";import"./types-D5aIHjTg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DxAfvNI2.js";import"./useAnimationId-DSZzieLY.js";import"./ActivePoints-BPsazN1k.js";import"./Dot-CY3bTNqg.js";import"./RegisterGraphicalItemId-BQAgbos5.js";import"./GraphicalItemClipPath-DhvNwCK-.js";import"./SetGraphicalItem-Dza8giNo.js";import"./getRadiusAndStrokeWidthFromDot-DANmnsHn.js";import"./ActiveShapeUtils-rZqGB1Eg.js";import"./Curve-CICfeEYZ.js";import"./step-BOqwoOFd.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-D-1HP-Kp.js";import"./useElementOffset-DXmsQk-F.js";import"./uniqBy-BCJz43Xm.js";import"./iteratee-8dn2mDC1.js";import"./Cross-BQIxVhY3.js";import"./Rectangle-BFkr7nJy.js";import"./util-Dxo8gN5i.js";import"./Sector-CElrKTPl.js";import"./Symbols-DQc9OnIm.js";import"./symbol-BpL1ixY4.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
