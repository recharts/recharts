import{r as A,R as t}from"./iframe-wyV1OFJQ.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-CBisthEs.js";import{A as E}from"./AreaChart-BJ-xHLtW.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BDFP6rWZ.js";import{X as g}from"./XAxis-C5gx8h5c.js";import{Y as h}from"./YAxis-Vd3tzgVC.js";import{A as a}from"./Area-DQuywAdZ.js";import{T as u}from"./Tooltip-BNWhP4RQ.js";import{R as k}from"./zIndexSlice-0AwT1g9-.js";import{L as v}from"./Legend-GgjS0V5G.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-0u6nGOPN.js";import"./resolveDefaultProps-ChoAHX7J.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DUKM8TOz.js";import"./throttle-CUUK7_-R.js";import"./index-D2dSqbX-.js";import"./index-DF9BGNcn.js";import"./isWellBehavedNumber-DZ7NyhtT.js";import"./d3-scale-BCMPgSvY.js";import"./index-ZiSf6-0W.js";import"./index-BMAJF2wT.js";import"./renderedTicksSlice-B5WYeoae.js";import"./index-DnbQaRSG.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-wU-_7i2L.js";import"./chartDataContext-BFbqUx5W.js";import"./CategoricalChart-CYyVEG_Z.js";import"./CartesianAxis-C_-7YUyD.js";import"./Layer-C6HNy6Ts.js";import"./Text-LrIwM5Ef.js";import"./DOMUtils-CMxfKpC9.js";import"./useId-CyB1NCIB.js";import"./useBackwardsCompatibleTheme-DPV1EzeF.js";import"./Label-DI-dZ1Mj.js";import"./ZIndexLayer--FDGDHLw.js";import"./types-Df9zKJ57.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-9EcBcc8f.js";import"./useAnimationId-BF1AH8CU.js";import"./ActivePoints-C-ZsoMWs.js";import"./Dot-CQzkvjlm.js";import"./RegisterGraphicalItemId-_B2FfK6k.js";import"./GraphicalItemClipPath-Txs2MFfL.js";import"./SetGraphicalItem-DW8cLaxQ.js";import"./getRadiusAndStrokeWidthFromDot-BVhvwnfR.js";import"./ActiveShapeUtils-D6GHKFv-.js";import"./Curve-BT6y-5_3.js";import"./step-DN0D11qs.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-gmKXJpLw.js";import"./useElementOffset-WnBYc90z.js";import"./uniqBy-BDxcmCyA.js";import"./iteratee-KwxnxvYa.js";import"./Cross-CUH5Fm-2.js";import"./Rectangle-CKwfFBjt.js";import"./util-Dxo8gN5i.js";import"./Sector-BrG4-iyx.js";import"./Symbols-BPY8-Kj_.js";import"./symbol-2v4hKg1J.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
