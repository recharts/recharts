import{r as A,R as t}from"./iframe-BfMFh77x.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-9snNPueS.js";import{A as E}from"./AreaChart-Bkl3Cc1q.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-Bl5FKjDT.js";import{X as g}from"./XAxis-k9LTsr7W.js";import{Y as h}from"./YAxis-KlCpPZpc.js";import{A as a}from"./Area-D1BWlPQk.js";import{T as u}from"./Tooltip-BFWrEaqv.js";import{R as k}from"./zIndexSlice-Cztpg_sh.js";import{L as v}from"./Legend-CNSbhcMK.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C0SS5kvR.js";import"./resolveDefaultProps-B4G3dz_P.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DoWmjLIh.js";import"./throttle-BwatAsiE.js";import"./index-DROOMzyH.js";import"./index-B4iccN4g.js";import"./isWellBehavedNumber-MC_-4Sz8.js";import"./d3-scale-DZONVDEO.js";import"./index-D4qjDIL1.js";import"./index-3-96IZAO.js";import"./renderedTicksSlice-BnDYFPsi.js";import"./index-DX1BsebK.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-nK5Jsuas.js";import"./chartDataContext-icTGDudH.js";import"./CategoricalChart-CD0F4PlX.js";import"./CartesianAxis-BFOn3Dtf.js";import"./Layer-ckuwG36h.js";import"./Text-DEsVSfke.js";import"./DOMUtils-CakfvwTP.js";import"./useId-DVFEoxf5.js";import"./useBackwardsCompatibleTheme-DnqD941W.js";import"./Label-D2fJdiFl.js";import"./ZIndexLayer-DqwLDNFX.js";import"./types-Ccphz-V5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DBTQ-7wC.js";import"./useAnimationId-DwVIllah.js";import"./ActivePoints-BxTaRtGv.js";import"./Dot-BjmaMaBF.js";import"./RegisterGraphicalItemId-CyLRpybL.js";import"./GraphicalItemClipPath-D-McSxMj.js";import"./SetGraphicalItem-BkQyU4p0.js";import"./getRadiusAndStrokeWidthFromDot-LBHtKVz7.js";import"./ActiveShapeUtils-PP0TbsoH.js";import"./Curve-QoN7k3_4.js";import"./step-DXJqGD70.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-CFRBZ7j4.js";import"./useElementOffset-CVbgoa7K.js";import"./uniqBy-ZtJmq_p1.js";import"./iteratee-Blwx8XDY.js";import"./Cross-DbVxZsyn.js";import"./Rectangle-r3IYiQGz.js";import"./util-Dxo8gN5i.js";import"./Sector-DFGMbU-S.js";import"./Symbols-DKR4yZKi.js";import"./symbol-C9lvVV-5.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
