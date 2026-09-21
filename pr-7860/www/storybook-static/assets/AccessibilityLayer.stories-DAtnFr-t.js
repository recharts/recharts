import{r as A,R as t}from"./iframe-C_u1NPXq.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-C2EFUFrY.js";import{A as E}from"./AreaChart-DFoAYfXl.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-XyC4B8N3.js";import{X as g}from"./XAxis-5AKDuUiC.js";import{Y as h}from"./YAxis-DvXa0gRB.js";import{A as a}from"./Area-D-NKb47m.js";import{T as u}from"./Tooltip-qNiYugKv.js";import{R as k}from"./zIndexSlice-D4vNODax.js";import{L as v}from"./Legend-DsUqSKdR.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BFhYeyxK.js";import"./resolveDefaultProps-Du-QS2vu.js";import"./get-C2VjdU0L.js";import"./axisSelectors-ClVjVkSn.js";import"./throttle-B6uw1bdh.js";import"./index-C5_PYkqz.js";import"./index-BAmjystd.js";import"./isWellBehavedNumber-BXJecvkc.js";import"./d3-scale-CA32_7ZH.js";import"./index-DFS_VDHO.js";import"./index-BGZsApoZ.js";import"./renderedTicksSlice-7TbUk5kV.js";import"./index-ChjG3lJf.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CHKIuE1P.js";import"./chartDataContext-CkGBCjv4.js";import"./CategoricalChart-B7Ubj1Y5.js";import"./CartesianAxis-CfxEFnrg.js";import"./Layer-B3fcXYMK.js";import"./Text-V-XbkyPz.js";import"./DOMUtils-COAF9wVa.js";import"./useId-DJNZORW6.js";import"./useBackwardsCompatibleTheme-nG_PFK3f.js";import"./Label-4YL6LIZD.js";import"./ZIndexLayer-D3gVBGpt.js";import"./types-CMh3udVy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BBge8Oki.js";import"./useAnimationId-GgyVLnbG.js";import"./ActivePoints-CI6FJtyy.js";import"./Dot-CycumfnH.js";import"./RegisterGraphicalItemId-eQxwtpTA.js";import"./GraphicalItemClipPath-j2cLfrt9.js";import"./SetGraphicalItem-DbKh9IZb.js";import"./getRadiusAndStrokeWidthFromDot-tymVsWd9.js";import"./ActiveShapeUtils-BCBUr_LW.js";import"./Curve-CaQ3Xb8z.js";import"./step-Dh3cXytf.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-DhPf_S2E.js";import"./useElementOffset-Cn_Ipt4K.js";import"./uniqBy-C0r4dBBH.js";import"./iteratee-DI25ZzqD.js";import"./Cross-DAPDO_TP.js";import"./Rectangle-DgloZmA0.js";import"./util-Dxo8gN5i.js";import"./Sector-DhupiDx1.js";import"./Symbols-D-J0T-4W.js";import"./symbol-DlvRpupf.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
