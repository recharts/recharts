import{r as A,R as t}from"./iframe-DWmnh-44.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-W6hZFmz1.js";import{A as E}from"./AreaChart-DusvBk_t.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CmSO2f9C.js";import{X as g}from"./XAxis-B-oD2iVw.js";import{Y as h}from"./YAxis-D314iiH8.js";import{A as a}from"./Area-D8dQxZr7.js";import{T as u}from"./Tooltip-lXADDqEF.js";import{R as k}from"./zIndexSlice-BJoYTr5_.js";import{L as v}from"./Legend-zk7mFkZN.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B3xTPXxL.js";import"./index-DVoRxuxV.js";import"./index-DYZmblhi.js";import"./index-DOTsKUtA.js";import"./index-BHMOAiDy.js";import"./immer-DUM2qh_d.js";import"./get-BnHecJzQ.js";import"./renderedTicksSlice-DsxFAPWV.js";import"./axisSelectors-BiiECraK.js";import"./d3-scale-Cf8jgknj.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-CaNslZFW.js";import"./isWellBehavedNumber-fLv0mpTe.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CARUth8A.js";import"./chartDataContext-CAO4RomS.js";import"./CategoricalChart-BUEeThvR.js";import"./CartesianAxis-B7Vv6p_O.js";import"./Layer-BzPfvU9G.js";import"./Text-DgygHz8M.js";import"./DOMUtils-DIpMDOYS.js";import"./Label-CfXLQ6Y8.js";import"./ZIndexLayer-CulQyNMA.js";import"./types-DcmHsPIr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-iAWyiB5L.js";import"./useAnimationId-DCTLXFxw.js";import"./ActivePoints-f79orvlu.js";import"./Dot-D6jfHQrF.js";import"./RegisterGraphicalItemId-Csp35HCn.js";import"./GraphicalItemClipPath-DtyJ7p0b.js";import"./SetGraphicalItem-DG3J4b0-.js";import"./getRadiusAndStrokeWidthFromDot-CP94W2K8.js";import"./ActiveShapeUtils-CAu9mK3S.js";import"./Curve-CBAt1y_u.js";import"./step-5LUllGte.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-Dw25LUj4.js";import"./useElementOffset-DPmIpr9N.js";import"./uniqBy-2U5GLGcS.js";import"./iteratee-CMRoo_5g.js";import"./Cross-BviN2Ees.js";import"./Rectangle-CiHKZkj8.js";import"./Sector-DBikrG1k.js";import"./Symbols-BuFvxkxA.js";import"./symbol-BmX3teUd.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
