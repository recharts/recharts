import{r as A,R as t}from"./iframe-Dn7uhoyL.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-CB9Nre2s.js";import{A as E}from"./AreaChart-RrEVCahn.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-NxJU1X0z.js";import{X as g}from"./XAxis-CM-PbRui.js";import{Y as h}from"./YAxis-BfFk8v58.js";import{A as a}from"./Area-B8WL3EQd.js";import{T as u}from"./Tooltip-CmBrx--3.js";import{R as k}from"./zIndexSlice-CVPi3ttj.js";import{L as v}from"./Legend-VoyKXnXv.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BxRk2Gdp.js";import"./index-Bq40lsYa.js";import"./index-DD0InOiJ.js";import"./index-Cy5HZ0nr.js";import"./index-CSiJtewq.js";import"./immer-jPz9tOCf.js";import"./get-BWJg7GwY.js";import"./renderedTicksSlice-C-NsLko8.js";import"./axisSelectors-CcayQcVn.js";import"./d3-scale-Cgmb0cG0.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-CdaF0R9o.js";import"./isWellBehavedNumber-CWLsfq8q.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BTxfKGwU.js";import"./chartDataContext-CxM1m1he.js";import"./CategoricalChart-vFRRVoOy.js";import"./CartesianAxis-BFlE9wN2.js";import"./Layer-0_0lU0ce.js";import"./Text-Coel_U_-.js";import"./DOMUtils-DMf79wlK.js";import"./Label-BkxCdWVF.js";import"./ZIndexLayer-DWtyWVlG.js";import"./types-Bnw4G7MR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-BOxaWbpG.js";import"./useAnimationId-DyeHQUGR.js";import"./ActivePoints-BJJpASAl.js";import"./Dot-BCY87lLt.js";import"./RegisterGraphicalItemId-DNlA1n-y.js";import"./GraphicalItemClipPath-Ml5Lm9cP.js";import"./SetGraphicalItem-r_k8Lha2.js";import"./getRadiusAndStrokeWidthFromDot-BlZL4Q4R.js";import"./ActiveShapeUtils-dzMUbVJX.js";import"./Curve-dLTkUQDk.js";import"./step-DtaB3Afi.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-aMcZFkec.js";import"./useElementOffset-BS2jKIzO.js";import"./uniqBy-BegxbEUU.js";import"./iteratee-BQ8u-VLy.js";import"./Cross-D5X-79vf.js";import"./Rectangle-C7YkQMq8.js";import"./Sector-D2HI9UwR.js";import"./Symbols-D0L3NZVE.js";import"./symbol-Sc7zzrJc.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
