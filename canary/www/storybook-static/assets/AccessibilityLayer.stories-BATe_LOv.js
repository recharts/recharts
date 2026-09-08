import{r as A,R as t}from"./iframe-D_MXUc9j.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-9bn5ROzF.js";import{A as E}from"./AreaChart-C2CeiKnt.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CXNbNNZo.js";import{X as g}from"./XAxis-DDjL-5lR.js";import{Y as h}from"./YAxis-B9TFZTi1.js";import{A as a}from"./Area-BoQPgrVc.js";import{T as u}from"./Tooltip-CtR_GybZ.js";import{R as k}from"./zIndexSlice-BFHspQ3h.js";import{L as v}from"./Legend-DzzdQsbu.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-w9ky9w-N.js";import"./resolveDefaultProps-2frX1lOh.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Cm02wLJ7.js";import"./throttle-et5ks_cI.js";import"./index-CKJUXvOM.js";import"./index-7XNg-5qX.js";import"./isWellBehavedNumber-CsgFecko.js";import"./d3-scale-qgwr3MMy.js";import"./index-CKZvu-mT.js";import"./index-Bxr9K7DU.js";import"./renderedTicksSlice-TfnwoJLt.js";import"./index-DtuXK4VP.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-tuemJXRr.js";import"./chartDataContext-_Ju6-fzp.js";import"./CategoricalChart-DJ7BKDkl.js";import"./CartesianAxis-6tNxOuLT.js";import"./Layer-BZB8UiQK.js";import"./Text-BRrhokiO.js";import"./DOMUtils-DhRIYphT.js";import"./useId-BnOkh28B.js";import"./useBackwardsCompatibleTheme-BwLA5NQz.js";import"./Label-BzW6Kco1.js";import"./ZIndexLayer-2Sh7_Zup.js";import"./types-C3dbXUSG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-C_wvnbpu.js";import"./useAnimationId-Bnx7NtOE.js";import"./ActivePoints-BiO6enUY.js";import"./Dot-LN8MpyP_.js";import"./RegisterGraphicalItemId-BQytnqfH.js";import"./GraphicalItemClipPath-BnUM0bi_.js";import"./SetGraphicalItem-B4WgsP5a.js";import"./getRadiusAndStrokeWidthFromDot-4YSuZBjL.js";import"./ActiveShapeUtils-VpxDx_Hn.js";import"./Curve-CuSFZQj8.js";import"./step-BhNzxzT7.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-C_g2xIry.js";import"./useElementOffset-CVAvobNx.js";import"./uniqBy-CxcVQtEW.js";import"./iteratee-iKvfq8Bu.js";import"./Cross-D5LHG89_.js";import"./Rectangle-CDDISee0.js";import"./util-Dxo8gN5i.js";import"./Sector-Cl-R6c6b.js";import"./Symbols-BSu_9T6j.js";import"./symbol-CA7d1SdW.js";const Wt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Xt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var i,n,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(n=r.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var s,p,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Xt as __namedExportsOrder,Wt as default};
