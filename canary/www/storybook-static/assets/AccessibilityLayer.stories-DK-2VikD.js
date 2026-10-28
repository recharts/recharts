import{r as A,R as t}from"./iframe-ZSAsyeui.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-D3WKujQY.js";import{A as E}from"./AreaChart-DcXPtZUs.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CFdrtYzo.js";import{X as g}from"./XAxis-CE4c8ci4.js";import{Y as h}from"./YAxis-89VrmUc2.js";import{A as a}from"./Area-BgWX8gvS.js";import{T as u}from"./Tooltip-BD-lHZ6w.js";import{R as k}from"./zIndexSlice-Dv-5_8A6.js";import{L as v}from"./Legend-9Op2aHKd.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BzidFlVd.js";import"./resolveDefaultProps-CzYlkvqW.js";import"./get-cF5BDHN6.js";import"./axisSelectors-B8o8U7qV.js";import"./throttle-D-BJc2jV.js";import"./index-OvyM_4Sm.js";import"./index-DjKI25gJ.js";import"./polarAxisSelectors-BqI7JiW5.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CC-JJjQv.js";import"./index-uqJ6YOvZ.js";import"./index-zauSQ6TS.js";import"./renderedTicksSlice-CWxjmG2R.js";import"./index-DD-2LlvS.js";import"./CartesianChart-CMZp9es4.js";import"./ZIndexPortal-CvnMM87Z.js";import"./CategoricalChart-D-416rq6.js";import"./CartesianAxis-BLajEobP.js";import"./Layer-DRoxmpYI.js";import"./Text-BRlBLGWa.js";import"./pageBackground-BD4buOa5.js";import"./ZIndexLayer-C2WKPlYv.js";import"./Label-ooeO0hBy.js";import"./types-DmKiIpv6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-Xwc-TPit.js";import"./ActivePoints-BfGk3pVb.js";import"./Dot-BEWDPMal.js";import"./activeStyles-BfRigOWz.js";import"./useAnimationId-DVzTYwao.js";import"./dataEntryStyles-D8AFB-Xx.js";import"./Symbols-fzhinMEB.js";import"./symbol-fTzakvJ7.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-BULml3ZG.js";import"./getRadiusAndStrokeWidthFromDot-RjCFhzne.js";import"./ActiveShapeUtils-PjK4neH_.js";import"./Curve-Czqktp7G.js";import"./step-agpXYCOV.js";import"./useEffectiveDataKey-DWBa4tvD.js";import"./useElementOffset-BLZ2FwPy.js";import"./uniqBy-CsraS7fO.js";import"./iteratee-BRq8WylV.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CbPqnaha.js";import"./Rectangle-Buh2szsq.js";import"./util-Dxo8gN5i.js";import"./Sector-5mywfZ-i.js";const Dt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Ft=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Ft as __namedExportsOrder,Dt as default};
