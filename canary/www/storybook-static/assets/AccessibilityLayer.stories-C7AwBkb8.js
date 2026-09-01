import{r as A,R as t}from"./iframe-Dk9ZDdT1.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-BKh5yr5N.js";import{A as E}from"./AreaChart-B41RELTo.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-B7u57R78.js";import{X as g}from"./XAxis-A_28Fvyn.js";import{Y as h}from"./YAxis-BG4jVm_S.js";import{A as a}from"./Area-CuEIbyhZ.js";import{T as u}from"./Tooltip-DxRWiHMA.js";import{R as k}from"./zIndexSlice-DeceblpS.js";import{L as v}from"./Legend-CCsIj-6h.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DP2ymT_2.js";import"./resolveDefaultProps-zYTWecoa.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DxLef304.js";import"./throttle-DIOOZof0.js";import"./index-CmUfEz5q.js";import"./index-B2rutIU6.js";import"./isWellBehavedNumber-CxvtDvRb.js";import"./d3-scale-MpKXBNtT.js";import"./index-BxlkNIur.js";import"./index-bvujDpj7.js";import"./renderedTicksSlice-Ckrd08To.js";import"./index-DbhjdF6k.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DIP7sg4A.js";import"./chartDataContext-QSp1AmWQ.js";import"./CategoricalChart-Bx3cIM0F.js";import"./CartesianAxis-DltOMyOx.js";import"./Layer-DmyqVj_Z.js";import"./Text-DxLESXkZ.js";import"./DOMUtils-BpNuC4xp.js";import"./useId-DehfeINH.js";import"./useBackwardsCompatibleTheme-C4vQm8Qy.js";import"./Label-B5fu-9Ux.js";import"./ZIndexLayer-DeueZom8.js";import"./types-B5p8Vh7N.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BJxfKwUv.js";import"./useAnimationId-Br2uK6cb.js";import"./ActivePoints-FU3V29Uc.js";import"./Dot-Dxbx8gos.js";import"./RegisterGraphicalItemId-z6QxmQfF.js";import"./GraphicalItemClipPath-CdL4vBCz.js";import"./SetGraphicalItem-BbnWj2u0.js";import"./getRadiusAndStrokeWidthFromDot-CO6bt368.js";import"./ActiveShapeUtils-EOWKKtqz.js";import"./Curve-1m4xWofF.js";import"./step-CLhWgX2G.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BJFtW09z.js";import"./useElementOffset-KhQd1oWd.js";import"./uniqBy-CX3aiEBe.js";import"./iteratee-CvAqSA3n.js";import"./Cross-Pm4B82Mc.js";import"./Rectangle-Cb1y9t4l.js";import"./util-Dxo8gN5i.js";import"./Sector-DlwIDXc0.js";import"./Symbols-COFyOQ-q.js";import"./symbol-C02v1ewE.js";const Wt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
