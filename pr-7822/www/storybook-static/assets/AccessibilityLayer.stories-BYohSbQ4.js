import{r as A,R as t}from"./iframe-BBXYJHV9.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-CI6CKZVa.js";import{A as E}from"./AreaChart-BCgv78YX.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BvOKBmOK.js";import{X as g}from"./XAxis-OTNhB7fI.js";import{Y as h}from"./YAxis-BTJMRiMh.js";import{A as a}from"./Area-BpXM7kN-.js";import{T as u}from"./Tooltip-j_66p5aX.js";import{R as k}from"./zIndexSlice-DeV5nVkQ.js";import{L as v}from"./Legend-B0OYWchs.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper--QMYLh37.js";import"./resolveDefaultProps-Cuufas3t.js";import"./get-C2VjdU0L.js";import"./axisSelectors-ldrqaVXy.js";import"./throttle-D_5C5TP0.js";import"./index-CKKng9rb.js";import"./index-DD1sJSjK.js";import"./isWellBehavedNumber-Df9i-Xuh.js";import"./d3-scale-Cim9t_7k.js";import"./index-C1POlg4L.js";import"./index-DaLQCs1D.js";import"./renderedTicksSlice-D2BRqvUe.js";import"./index-CyGTPXip.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Sq09cuqY.js";import"./chartDataContext-CvGK2QEJ.js";import"./CategoricalChart-BQqZpjdB.js";import"./CartesianAxis-a8cTgv_e.js";import"./Layer-CLVZjsru.js";import"./Text-D82BKuR8.js";import"./DOMUtils-CzO3u12F.js";import"./useId-B4ofBqjM.js";import"./useBackwardsCompatibleTheme-DCcJalTw.js";import"./Label-lRXxfB4K.js";import"./ZIndexLayer-DTr1Fcax.js";import"./types-Bf4vH5cc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-Szq-E2F-.js";import"./useAnimationId-CBIZAPE4.js";import"./ActivePoints-ogH_t-gd.js";import"./Dot-CeQpq0Ml.js";import"./RegisterGraphicalItemId-B-07fAKx.js";import"./GraphicalItemClipPath-h1d35KAS.js";import"./SetGraphicalItem-Dp4v1WTr.js";import"./getRadiusAndStrokeWidthFromDot-BRVPa3kE.js";import"./ActiveShapeUtils-DcqMOZEc.js";import"./Curve-D-Wgwm0-.js";import"./step-CPCTXlnC.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-DpGCweuE.js";import"./useElementOffset-DEgSccfA.js";import"./uniqBy-CSB_7q17.js";import"./iteratee--uwqTho3.js";import"./Cross-BIWd1Sy2.js";import"./Rectangle-BdigyXl7.js";import"./util-Dxo8gN5i.js";import"./Sector-1Qkm3USn.js";import"./Symbols-BkHE8TEA.js";import"./symbol-CFAfa1rt.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
