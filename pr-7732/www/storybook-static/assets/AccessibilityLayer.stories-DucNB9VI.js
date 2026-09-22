import{r as A,R as t}from"./iframe-BJZoea5Q.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-DAHls3zr.js";import{A as E}from"./AreaChart-DzqBHG74.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CHKHKifi.js";import{X as g}from"./XAxis-x49kq4XJ.js";import{Y as h}from"./YAxis-CuM9t2qy.js";import{A as a}from"./Area-CEb-uQpO.js";import{T as u}from"./Tooltip-B05ie6I6.js";import{R as k}from"./zIndexSlice-3SrN7G8I.js";import{L as v}from"./Legend-BlBBdJ0C.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CEdFNSj2.js";import"./resolveDefaultProps-p2HAfk0o.js";import"./get-C2VjdU0L.js";import"./axisSelectors-10L_Paee.js";import"./throttle-DhjtP12Z.js";import"./index-eqi9YN1t.js";import"./index-BDOUu_G8.js";import"./isWellBehavedNumber-PsmwNW5h.js";import"./d3-scale-Bo47ZJJr.js";import"./index-BdI0Temb.js";import"./index-Q3HRKpx2.js";import"./renderedTicksSlice-DjcslC9u.js";import"./index-ey4yeO--.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DDkwxTw9.js";import"./chartDataContext-2iVlib8J.js";import"./CategoricalChart-DYS4mlap.js";import"./CartesianAxis-zlv9iD03.js";import"./Layer-CY8EZbPL.js";import"./Text-C846DGO8.js";import"./DOMUtils-DMsPd0Jf.js";import"./useId-CgY4hBIS.js";import"./useBackwardsCompatibleTheme-cb-KLBvK.js";import"./Label-CKHttH-g.js";import"./ZIndexLayer-gq-nfNXC.js";import"./types-DB2bYquS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-B1n61v19.js";import"./useAnimationId-DIbB0gmH.js";import"./ActivePoints-BIetIDgh.js";import"./Dot-CgLNu5xp.js";import"./RegisterGraphicalItemId-lL7ggMEp.js";import"./GraphicalItemClipPath-BEj7XwPx.js";import"./SetGraphicalItem-BvBiLTUU.js";import"./getRadiusAndStrokeWidthFromDot-DajYH82O.js";import"./ActiveShapeUtils-t9roLBb8.js";import"./Curve-C2T2vEED.js";import"./step-DQt_azzu.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-CiHiONr1.js";import"./useElementOffset-Cr52qiLm.js";import"./uniqBy-C2cKh28N.js";import"./iteratee-DxckVfRJ.js";import"./Cross-BLk8fHnY.js";import"./Rectangle-DShU24mH.js";import"./util-Dxo8gN5i.js";import"./Sector-Dp9ZSCFr.js";import"./Symbols-CJSFJ2Z-.js";import"./symbol-nJQKKWnA.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
