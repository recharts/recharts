import{r as A,R as t}from"./iframe-n-o_GhOg.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-B569yWTF.js";import{A as E}from"./AreaChart-DECyl4bs.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BW163_LZ.js";import{X as g}from"./XAxis-D3N7JqFL.js";import{Y as h}from"./YAxis-CMjiedBc.js";import{A as a}from"./Area-B4Vqip6G.js";import{T as u}from"./Tooltip-DiMr8VHS.js";import{R as k}from"./zIndexSlice-rH1Vz5Mp.js";import{L as v}from"./Legend-BgbqAGT0.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-_cU67sC5.js";import"./resolveDefaultProps-CCJ2xkQr.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CZyPeZLC.js";import"./throttle-C59GD_w_.js";import"./index-D3Dxakv3.js";import"./index-chW2YjqO.js";import"./isWellBehavedNumber-DnO1JWm3.js";import"./d3-scale-Bnu-nqAj.js";import"./index-DtnTPZuH.js";import"./index-BQjoI2YU.js";import"./renderedTicksSlice-BzxRR8rk.js";import"./index-Dj2q-0Ll.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DyFIrny8.js";import"./chartDataContext-DJykTpvv.js";import"./CategoricalChart-BDOiNhZt.js";import"./CartesianAxis-_Tflg6Fj.js";import"./Layer-DpixjnOX.js";import"./Text-SNR8n6Fx.js";import"./DOMUtils-c7gF72Lb.js";import"./useId-x_HnpDjM.js";import"./useBackwardsCompatibleTheme-DwZPWCWZ.js";import"./Label-CNUZ8IJr.js";import"./ZIndexLayer-RuyYCT_q.js";import"./types-D19g2GXX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BXuL_9-l.js";import"./useAnimationId-Bs6Pq3h0.js";import"./ActivePoints-fyry5IXw.js";import"./Dot-NFpTkrs-.js";import"./RegisterGraphicalItemId-D70QTB5K.js";import"./GraphicalItemClipPath-Ce-x1jHU.js";import"./SetGraphicalItem-0HQpcTKH.js";import"./getRadiusAndStrokeWidthFromDot-W6nPpsGK.js";import"./ActiveShapeUtils-8hxeMxzA.js";import"./Curve-dJ1hXb5R.js";import"./step-DtRuoLBY.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-BKlZkD6N.js";import"./useElementOffset-7vo21qqB.js";import"./uniqBy-B49bM81v.js";import"./iteratee-DelPt-ee.js";import"./Cross-CAe7YUPk.js";import"./Rectangle-wO11WXpz.js";import"./util-Dxo8gN5i.js";import"./Sector-CeczRWEl.js";import"./Symbols-aG0O7e-s.js";import"./symbol-DDHaGIGb.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
