import{r as A,R as t}from"./iframe-aNoK1EMe.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-ciK3m7lP.js";import{A as E}from"./AreaChart-BaZ3DndK.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CJxsBUSc.js";import{X as g}from"./XAxis-BsEbRcU-.js";import{Y as h}from"./YAxis-flrMIfza.js";import{A as a}from"./Area-B1X5xwOq.js";import{T as u}from"./Tooltip-DyXF2ljh.js";import{R as k}from"./zIndexSlice-DOhDXvjb.js";import{L as v}from"./Legend-DY60V5f9.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-k_DNRHdW.js";import"./index-D5XON-Gh.js";import"./index-BdDC1fi3.js";import"./index-DU0cxzai.js";import"./index-Bu0CjtZ3.js";import"./throttle-dDtgRmGr.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-D-IRHrV3.js";import"./axisSelectors-Bs_-tFvB.js";import"./resolveDefaultProps-DbC1kYAP.js";import"./isWellBehavedNumber-DwwkvD-i.js";import"./d3-scale-_Xy_yJsZ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-9qcKzyck.js";import"./chartDataContext-DZNoVeTg.js";import"./CategoricalChart-xLJxNslX.js";import"./CartesianAxis-CeEjLShX.js";import"./Layer-BCtIHmhS.js";import"./Text-Dek-bfvO.js";import"./DOMUtils-B40T5FB1.js";import"./Label-DiB3OAIB.js";import"./ZIndexLayer-DGcx9JLL.js";import"./types-Be_2sCPa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./AnimatedItems-b0afIUOt.js";import"./useAnimationId-B-ZOGiBc.js";import"./ActivePoints-CZoVwwe_.js";import"./Dot-BDrL_0u-.js";import"./RegisterGraphicalItemId-DSvg4gFN.js";import"./GraphicalItemClipPath-De0s7P9u.js";import"./SetGraphicalItem-CpE1XAUN.js";import"./getRadiusAndStrokeWidthFromDot-EFIJD7AT.js";import"./ActiveShapeUtils-CWDfkNMB.js";import"./Curve-CJs4LUT2.js";import"./step-vVmdNkhc.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DmUYu0MJ.js";import"./useElementOffset-BI3734qt.js";import"./uniqBy-Bcy6VBQs.js";import"./iteratee-BF5VjlC5.js";import"./Cross-VSrUK5-b.js";import"./Rectangle-DLQWIh8f.js";import"./util-Dxo8gN5i.js";import"./Sector-Bt7ISiQZ.js";import"./Symbols-C4JyYuKh.js";import"./symbol-DCUtDS89.js";const St={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
