import{r as A,R as t}from"./iframe-BPaILHrg.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-DU4uZiCB.js";import{A as E}from"./AreaChart-DP05il8W.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-Dm5IA2uO.js";import{X as g}from"./XAxis-Bp49XRaF.js";import{Y as h}from"./YAxis-CZAlOOP6.js";import{A as a}from"./Area-xDgvvQqu.js";import{T as u}from"./Tooltip-Cs06hDj9.js";import{R as k}from"./zIndexSlice-Bmw1fph3.js";import{L as v}from"./Legend-uniXBVqh.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D7MXGog1.js";import"./resolveDefaultProps-fs0FwHaQ.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BgmzCmWH.js";import"./throttle-B9kMlkpl.js";import"./index-CkFyYTJL.js";import"./index-CA_30Yt5.js";import"./polarAxisSelectors-CP4AmDBe.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CvctqLlv.js";import"./index-CnIUZT6I.js";import"./index-B04q1BNb.js";import"./renderedTicksSlice-BvsmzMN6.js";import"./index-BFOFl-I4.js";import"./CartesianChart-DVMMqgwd.js";import"./ZIndexPortal-bECtAjmI.js";import"./CategoricalChart-DVM1oU_Q.js";import"./CartesianAxis-DqZBHpVR.js";import"./Layer-BYN-xjEA.js";import"./Text-CtKpv6li.js";import"./pageBackground-CWFMyAd2.js";import"./ZIndexLayer-DOVmR1lD.js";import"./Label-r7ey19qR.js";import"./types-DUbTKtwp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-BA53HbEo.js";import"./ActivePoints-BAgIMyf9.js";import"./Dot-Eg6Ew0GK.js";import"./activeStyles-BRvUZ3GA.js";import"./useAnimationId-BDqdHn7D.js";import"./dataEntryStyles-DyygVVmF.js";import"./Symbols-Dk1_zaB2.js";import"./symbol-hCExAh31.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-CsCmCIZL.js";import"./getRadiusAndStrokeWidthFromDot-DTWprENN.js";import"./ActiveShapeUtils-By1qTU3M.js";import"./Curve-DgfwLhV2.js";import"./step-D2WZnOIE.js";import"./useEffectiveDataKey-Bbwl3GsC.js";import"./useElementOffset-CYi5LIP9.js";import"./uniqBy-CQUkPewS.js";import"./iteratee-BSjHlBKG.js";import"./isArguments-yB-y1yaH.js";import"./Cross-s4IhzTKS.js";import"./Rectangle-zVYi39zS.js";import"./util-Dxo8gN5i.js";import"./Sector-BsE-OmPw.js";const Dt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Ft=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
