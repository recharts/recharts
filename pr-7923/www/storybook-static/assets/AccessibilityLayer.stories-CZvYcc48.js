import{r as A,R as t}from"./iframe-BMzdo2OO.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-DSKFy6An.js";import{A as E}from"./AreaChart-CQ-Y-Lfi.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-Da3I8a2m.js";import{X as g}from"./XAxis-D0FZw3tk.js";import{Y as h}from"./YAxis-BNMn58Qu.js";import{A as a}from"./Area-zemBnPJD.js";import{T as u}from"./Tooltip-BCXNVYKW.js";import{R as k}from"./zIndexSlice-ChqivVgc.js";import{L as v}from"./Legend-Drlr6PEv.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DZyZLCSd.js";import"./resolveDefaultProps-DMOVc-U0.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DePv-gjT.js";import"./throttle-Bn5L-Spy.js";import"./index-DcvaXuoD.js";import"./index-CuowPYJL.js";import"./isWellBehavedNumber-BxxKk3_X.js";import"./d3-scale-FRN-50hy.js";import"./index-IxxRTzdH.js";import"./index-BBWSU8H0.js";import"./renderedTicksSlice-D7KSBl5-.js";import"./index-QGNmKXB_.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CJTLTCmg.js";import"./chartDataContext-D12dRZ2D.js";import"./CategoricalChart-DgT48bow.js";import"./CartesianAxis-BwqV9jtY.js";import"./Layer-DI_tMp3J.js";import"./Text-BUhrLoyp.js";import"./DOMUtils-CENQr-dm.js";import"./useId-CISxasqF.js";import"./useBackwardsCompatibleTheme-COHZZMqy.js";import"./Label-DXGFYQ6y.js";import"./ZIndexLayer-J0q0oOXM.js";import"./types-XidxuGSX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-aWQxtrPp.js";import"./useAnimationId-DMkWUgfv.js";import"./ActivePoints-DbFNvnJX.js";import"./Dot-C8FkbxSc.js";import"./RegisterGraphicalItemId-CdkGqZbg.js";import"./GraphicalItemClipPath-jODxuvX2.js";import"./SetGraphicalItem-fUYBwl3z.js";import"./getRadiusAndStrokeWidthFromDot-CrQ8YxTR.js";import"./ActiveShapeUtils-P-2_LOiD.js";import"./Curve--AxPXvQm.js";import"./step-C6IWo9eW.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-p0tnB9lX.js";import"./useElementOffset-CNLeBMxi.js";import"./uniqBy-DlBrbasH.js";import"./iteratee-k4aeFlqG.js";import"./Cross-BtRQT9ij.js";import"./Rectangle-CYGVySvu.js";import"./util-Dxo8gN5i.js";import"./Sector-dxcau_Jz.js";import"./Symbols-Bs3oLubR.js";import"./symbol-B1gI76t2.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
