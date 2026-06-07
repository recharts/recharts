import{r as A,R as t}from"./iframe-CcUePkZz.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-CRM55qGb.js";import{A as E}from"./AreaChart-B68j7ekq.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-UvUMKN2F.js";import{X as g}from"./XAxis-BcdHEGYE.js";import{Y as h}from"./YAxis-nZsFOeFr.js";import{A as a}from"./Area-D2vMVcZg.js";import{T as u}from"./Tooltip-DzrELefj.js";import{R as k}from"./zIndexSlice-DSc4KC75.js";import{L as v}from"./Legend-D9oYjE5t.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DA0Yxt9x.js";import"./index-C-Pbn--W.js";import"./index-C1-J5F4u.js";import"./index-Z6USwMiQ.js";import"./index-CJTFlpIe.js";import"./immer-VeyOR81A.js";import"./get-UnfM8TPj.js";import"./renderedTicksSlice-BL5Mffta.js";import"./axisSelectors-BlPxUPB7.js";import"./d3-scale-ac-XiUen.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-BXf8ljNz.js";import"./isWellBehavedNumber-CXwth3qC.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D-BudT5K.js";import"./chartDataContext-VDW5Tgrh.js";import"./CategoricalChart-CG91Q5ky.js";import"./CartesianAxis-B7nFXCrA.js";import"./Layer-CKbs6a8D.js";import"./Text-BLCpim0o.js";import"./DOMUtils-CgmzxpAH.js";import"./Label-dVerXnTS.js";import"./ZIndexLayer-B4p-btGn.js";import"./types-C4zY2OW7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-BbZPIVL8.js";import"./useAnimationId-CH023PHf.js";import"./ActivePoints-D-HwpVLA.js";import"./Dot-CijEuNsy.js";import"./RegisterGraphicalItemId-Dk2pKOym.js";import"./GraphicalItemClipPath-Bc96kw55.js";import"./SetGraphicalItem-D7jXrYhk.js";import"./getRadiusAndStrokeWidthFromDot-CTEsWB1S.js";import"./ActiveShapeUtils-CRuYv9Bp.js";import"./Curve-Dhf7CAZi.js";import"./step-w_kmAd5Q.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors--W1TUejg.js";import"./useElementOffset-CwhrXEx4.js";import"./uniqBy-CwL7HoSI.js";import"./iteratee-DDQVwsC-.js";import"./Cross-DTjUkbKF.js";import"./Rectangle-DC-jzmzs.js";import"./Sector-B9grfvlS.js";import"./Symbols-CnKQYQZ6.js";import"./symbol-nACZTrEN.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
