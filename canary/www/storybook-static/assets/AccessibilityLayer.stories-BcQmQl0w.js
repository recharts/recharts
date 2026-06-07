import{r as A,R as t}from"./iframe-RDkqVuG2.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-n_pkeOwP.js";import{A as E}from"./AreaChart-wMUPczgv.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-B2a8Q35-.js";import{X as g}from"./XAxis-DEACd4mi.js";import{Y as h}from"./YAxis-4GVW-TXE.js";import{A as a}from"./Area-DSNetLj5.js";import{T as u}from"./Tooltip-BW-vO3rG.js";import{R as k}from"./zIndexSlice-C4ZKGTQh.js";import{L as v}from"./Legend-DWG4YceH.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BeMiseSr.js";import"./index-DIx3ZRGh.js";import"./index-Bl5JBY4m.js";import"./index-9iQIkkD_.js";import"./index-C0Sw1Z_f.js";import"./immer-tJ0TJl6x.js";import"./get-qTOI2Rj3.js";import"./renderedTicksSlice-BbGCSG_u.js";import"./axisSelectors-ChiETq8M.js";import"./d3-scale-CNXGEtqn.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-CrvfBHpF.js";import"./isWellBehavedNumber-B7BMWvxG.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CkUHBUTg.js";import"./chartDataContext-DCYgbhWK.js";import"./CategoricalChart-DKO530-y.js";import"./CartesianAxis-BXGLIO05.js";import"./Layer-DnJxeL60.js";import"./Text-euyAwdDa.js";import"./DOMUtils-B1kyH5Gm.js";import"./Label-kl9r3lv0.js";import"./ZIndexLayer-ChplAtHB.js";import"./types-BwJsYmye.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-wlRh2tbg.js";import"./useAnimationId-DWgEGQGL.js";import"./ActivePoints-C4TTqOg4.js";import"./Dot-Dlo4cfNs.js";import"./RegisterGraphicalItemId-BjCxIzIU.js";import"./GraphicalItemClipPath-fh46Mv1_.js";import"./SetGraphicalItem-C_Bitdri.js";import"./getRadiusAndStrokeWidthFromDot-ClHmJg6B.js";import"./ActiveShapeUtils-BGYROLTx.js";import"./Curve-Um8FGkl9.js";import"./step-23ddn8am.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-_gyjbiax.js";import"./useElementOffset-BgGPf32V.js";import"./uniqBy-CGyhlrqZ.js";import"./iteratee-gpO3rR4q.js";import"./Cross-DxWvGC7P.js";import"./Rectangle-Cf0Ils5n.js";import"./Sector-DZWVUbC3.js";import"./Symbols-CgqqfKpX.js";import"./symbol-CMCC0ufv.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const St=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,St as __namedExportsOrder,Rt as default};
