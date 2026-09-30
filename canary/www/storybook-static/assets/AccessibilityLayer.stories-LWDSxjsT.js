import{r as A,R as t}from"./iframe-B96S8mAp.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-CehmNKG2.js";import{A as E}from"./AreaChart-CfBNyoEf.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BBsQv_-h.js";import{X as g}from"./XAxis-nVEhAG3F.js";import{Y as h}from"./YAxis-DfdWV3Tw.js";import{A as a}from"./Area-B5M0xdv-.js";import{T as u}from"./Tooltip-BF46jXzZ.js";import{R as k}from"./zIndexSlice-D8E1yZ1V.js";import{L as v}from"./Legend-3kh-Elkq.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BMN5w2mX.js";import"./resolveDefaultProps-hdreNdXc.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CoX3e_2U.js";import"./throttle-ClBFd37Y.js";import"./index-DkqDlut5.js";import"./index-h_VAy7kX.js";import"./isWellBehavedNumber-DfNG0DIy.js";import"./d3-scale-9nPPSrDa.js";import"./index-Bb9sRMCm.js";import"./index-C-l8V5Fx.js";import"./renderedTicksSlice-BTyytnZ2.js";import"./index-YSWiv6gp.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-a8pJKl2i.js";import"./chartDataContext-DDU_iWzI.js";import"./CategoricalChart-BJxf0mxD.js";import"./CartesianAxis-Bj8xr9W5.js";import"./Layer-DAZaOor8.js";import"./Text-BO1tL-Lm.js";import"./DOMUtils-B7FzpOG9.js";import"./useId-C9t3LM8u.js";import"./useBackwardsCompatibleTheme-BlUzVNC-.js";import"./Label-CqVVrAo5.js";import"./ZIndexLayer-DUeg7nPd.js";import"./types-Dzd-LsE5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-B3aC5t_D.js";import"./useAnimationId-CEflbmtS.js";import"./ActivePoints-L_3TnI4T.js";import"./Dot-zng579xF.js";import"./RegisterGraphicalItemId-yOmcvIGu.js";import"./GraphicalItemClipPath-RRykAftR.js";import"./SetGraphicalItem-CvYLLoCp.js";import"./getRadiusAndStrokeWidthFromDot-CnqQHwHm.js";import"./ActiveShapeUtils-CRg0xwL0.js";import"./Curve-5IRE8Ev4.js";import"./step-98le-Vot.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-CBUuLMbL.js";import"./useElementOffset-DWPuYoRo.js";import"./uniqBy-C_OONL53.js";import"./iteratee-rFFt59sx.js";import"./Cross-D5C-EZJW.js";import"./Rectangle-Dd-JcMlj.js";import"./util-Dxo8gN5i.js";import"./Sector-Bsuk_kHk.js";import"./Symbols-BNfPcK4r.js";import"./symbol-BLKaF7BI.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
