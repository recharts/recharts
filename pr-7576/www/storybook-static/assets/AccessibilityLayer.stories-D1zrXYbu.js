import{r as A,R as t}from"./iframe-Cy6UHwH8.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-Dm8MO2Et.js";import{A as E}from"./AreaChart-CHLr_ukT.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BHWhvLkc.js";import{X as g}from"./XAxis-BEHj4vqI.js";import{Y as h}from"./YAxis-Czbc2cL9.js";import{A as a}from"./Area-Cv6-tcJV.js";import{T as u}from"./Tooltip-xaQOL5rL.js";import{R as k}from"./zIndexSlice-Dv2HqMCj.js";import{L as v}from"./Legend-CHfq6ixo.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Ms45-clr.js";import"./index-2yzrZcxU.js";import"./index-CqwtYJ2E.js";import"./index-h8aQZ4h5.js";import"./index-CWnN2QDM.js";import"./throttle-CrXcydw9.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-BtW-OIzZ.js";import"./axisSelectors-DXOe3ZcM.js";import"./resolveDefaultProps-BMx9w-RH.js";import"./isWellBehavedNumber-CZJUfVeG.js";import"./d3-scale-Bvw0bMMA.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C_8s1Ao-.js";import"./chartDataContext-BQ-bLF-q.js";import"./CategoricalChart-Bl-8OvLS.js";import"./CartesianAxis-D4Lg0Pka.js";import"./Layer-Ju7yA9Ak.js";import"./Text-DY_HLC6P.js";import"./DOMUtils-CnEhoUR_.js";import"./Label-D4x62xM0.js";import"./ZIndexLayer-BhFWLYxf.js";import"./types-Wlq7LyUb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./AnimatedItems-P3TyXGJ4.js";import"./useAnimationId-q_i8pRM6.js";import"./ActivePoints-DwOS4gGn.js";import"./Dot-Coa1b26v.js";import"./RegisterGraphicalItemId-Du3LTwfY.js";import"./GraphicalItemClipPath-CqSFRIsZ.js";import"./SetGraphicalItem-Dh-ykNbg.js";import"./getRadiusAndStrokeWidthFromDot-BnXETLA5.js";import"./ActiveShapeUtils-BsBe7D_I.js";import"./Curve-l3wqrsuS.js";import"./step-CuI5m1Cq.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CUpJgTvK.js";import"./useElementOffset-CogvFxV1.js";import"./uniqBy-BpJlFfbc.js";import"./iteratee-DsECz__7.js";import"./Cross-C7BtRR4W.js";import"./Rectangle-NwWJwHZO.js";import"./util-Dxo8gN5i.js";import"./Sector-gxLm8D69.js";import"./Symbols-COXnL47l.js";import"./symbol-CcEOpE0b.js";const St={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Yt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Yt as __namedExportsOrder,St as default};
