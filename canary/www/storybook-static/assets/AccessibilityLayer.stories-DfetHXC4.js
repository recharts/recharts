import{r as A,R as t}from"./iframe-NSpsGxr3.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-BSbO4QCj.js";import{A as E}from"./AreaChart-Bwo0zJRL.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-nxa9J9KB.js";import{X as g}from"./XAxis-DNhoou9P.js";import{Y as h}from"./YAxis-s1ngqAL7.js";import{A as a}from"./Area-BSAdN7Pe.js";import{T as u}from"./Tooltip-B-RcSTZK.js";import{R as k}from"./zIndexSlice-CegrvH4P.js";import{L as v}from"./Legend-CBMEHQx2.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DtJCjJYR.js";import"./resolveDefaultProps-BlFb5h3I.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BkwFONEa.js";import"./throttle-oOh5DhdY.js";import"./index-4AzzKt7j.js";import"./index-0HEoT-e5.js";import"./isWellBehavedNumber-pwlbiGoO.js";import"./d3-scale-C3gnRv6y.js";import"./index-BsIlyQNm.js";import"./index-DWO3hHqn.js";import"./renderedTicksSlice-DYxvbfog.js";import"./index-CYtbOF9C.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CvLKYupN.js";import"./chartDataContext-DJ-2f6vo.js";import"./CategoricalChart-Dg01q-nM.js";import"./CartesianAxis-BwBDYPDu.js";import"./Layer-BnG363as.js";import"./Text-BtwC4msG.js";import"./DOMUtils-CWTrI1E5.js";import"./useId-BVXNnfLZ.js";import"./useBackwardsCompatibleTheme-C2Bmbb6o.js";import"./Label-BIdOyJIr.js";import"./ZIndexLayer-C4urMDBy.js";import"./types-Co_GWDov.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BkT2_sP2.js";import"./useAnimationId-N_fuM4i0.js";import"./ActivePoints-KPsJbcKk.js";import"./Dot-DjaeVWdC.js";import"./RegisterGraphicalItemId-wt0KspV9.js";import"./GraphicalItemClipPath-CcSo6wES.js";import"./SetGraphicalItem-C1qAtScX.js";import"./getRadiusAndStrokeWidthFromDot-DkEHurz6.js";import"./ActiveShapeUtils-pIseDvg-.js";import"./Curve-CaqAetYK.js";import"./step-Drtb2meU.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-MpFTBnWD.js";import"./useElementOffset-DnaqijmP.js";import"./uniqBy-BO5ZjA6J.js";import"./iteratee-C2lnqyuZ.js";import"./Cross-CWXjWWCm.js";import"./Rectangle-CmsXYr1b.js";import"./util-Dxo8gN5i.js";import"./Sector-DVA6c6ux.js";import"./Symbols-9rD-zr54.js";import"./symbol-B_V30F_Z.js";const Wt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Xt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Xt as __namedExportsOrder,Wt as default};
