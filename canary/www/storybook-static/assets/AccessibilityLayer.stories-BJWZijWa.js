import{r as A,R as t}from"./iframe-JCMHkfpO.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-BVs57za7.js";import{A as E}from"./AreaChart-iLCCRgXy.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CDYslKd5.js";import{X as g}from"./XAxis-CBMMNbSw.js";import{Y as h}from"./YAxis-OgBkmni0.js";import{A as a}from"./Area-BjNDjMuA.js";import{T as u}from"./Tooltip-D2bj6ONv.js";import{R as k}from"./zIndexSlice-Cbic3BON.js";import{L as v}from"./Legend-BPW7Jl2x.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-nbVSXC9z.js";import"./index-Bt8eCKRM.js";import"./index-QEaCAJHN.js";import"./index-D8yPwBIb.js";import"./index-Ds8zJsBP.js";import"./throttle-DlFFEpQV.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BpNs_jFY.js";import"./resolveDefaultProps-CNbvqjMv.js";import"./isWellBehavedNumber-K1PO631O.js";import"./d3-scale-BsjeCU8L.js";import"./renderedTicksSlice-BRnimtTJ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Be_k-GK6.js";import"./chartDataContext-DRtbDYDE.js";import"./CategoricalChart-Do9lblK2.js";import"./CartesianAxis-B0p8oTh4.js";import"./Layer-DW0R6u6Q.js";import"./Text-H5O9sMOg.js";import"./DOMUtils-lO18r89G.js";import"./useId-5LAcqd5g.js";import"./useBackwardsCompatibleTheme-BlAxrm86.js";import"./Label-DgnjH2BN.js";import"./ZIndexLayer-DZJzCe6C.js";import"./types-CrNZa3RP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-dkTJaSWs.js";import"./useAnimationId-CtDYtQmo.js";import"./ActivePoints-B2ZGk6hG.js";import"./Dot-CefwgMiR.js";import"./RegisterGraphicalItemId-DyknErxM.js";import"./GraphicalItemClipPath-BifFhr-e.js";import"./SetGraphicalItem-BPezHgiz.js";import"./getRadiusAndStrokeWidthFromDot-Bo70O2Eq.js";import"./ActiveShapeUtils-2F7jkNpt.js";import"./Curve-YTzEjIYa.js";import"./step-CcEA6ZtU.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DK76v1qR.js";import"./useElementOffset-BrBzv7lz.js";import"./uniqBy-DRqYT5l3.js";import"./iteratee-T-3V0feC.js";import"./Cross-DP-DTtms.js";import"./Rectangle-CVC8ePoO.js";import"./util-Dxo8gN5i.js";import"./Sector-Duv1HULw.js";import"./Symbols-DKIDWMPJ.js";import"./symbol-CW7sNOrJ.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};var n,p,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Wt as __namedExportsOrder,Ft as default};
