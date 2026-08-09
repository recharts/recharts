import{r as A,R as t}from"./iframe-D9rYPFI6.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-CrPVcAMK.js";import{A as E}from"./AreaChart-BO76OdPS.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-Bn-SNX7V.js";import{X as g}from"./XAxis-QgJPS01w.js";import{Y as h}from"./YAxis-9YjsfZpB.js";import{A as a}from"./Area-DbyGNU9J.js";import{T as u}from"./Tooltip-BRGXgwMt.js";import{R as k}from"./zIndexSlice-C3wsTrp9.js";import{L as v}from"./Legend-fN0LFk7B.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DraVZS0h.js";import"./index-BwM3wMsV.js";import"./index-BxIft0ja.js";import"./index-CBOJEfGe.js";import"./index-D-oLxkfn.js";import"./throttle-JMn6s7-r.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BEMJ5G3d.js";import"./resolveDefaultProps-ULtnpSod.js";import"./isWellBehavedNumber-wns85k-s.js";import"./d3-scale-CWZ2NBQb.js";import"./renderedTicksSlice-BQcf9eI6.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CbCZKRVf.js";import"./chartDataContext-C9SNw5Kb.js";import"./CategoricalChart-BTp1W0gj.js";import"./CartesianAxis-vGmXII6H.js";import"./Layer-Dvgn5PDs.js";import"./Text-CPEEagO_.js";import"./DOMUtils-DnqcKz1X.js";import"./Label-VP1_-jlA.js";import"./ZIndexLayer-CJhkiIkj.js";import"./types-BrxWVo-u.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CrN5KJo6.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-JH_MyxHu.js";import"./useAnimationId-CBJcnsSW.js";import"./ActivePoints-BOg4hwaZ.js";import"./Dot-DA1K4FFV.js";import"./RegisterGraphicalItemId-Can_TNgi.js";import"./GraphicalItemClipPath-CiKUQeNX.js";import"./SetGraphicalItem-AXc71c8D.js";import"./getRadiusAndStrokeWidthFromDot-DWbL5obz.js";import"./ActiveShapeUtils-yvf6fJP9.js";import"./Curve-BFrR0D3S.js";import"./step-C1GSzIMp.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-IhPtoSXH.js";import"./useElementOffset--j3qp99z.js";import"./uniqBy-Bk1kDvWW.js";import"./iteratee-D78jpAQO.js";import"./Cross-BooSlHHZ.js";import"./Rectangle-CD4a3Cj_.js";import"./util-Dxo8gN5i.js";import"./Sector-Do6DhKva.js";import"./Symbols-DLmN9lpr.js";import"./symbol-DdMz1eK0.js";const Dt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Ft=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Ft as __namedExportsOrder,Dt as default};
