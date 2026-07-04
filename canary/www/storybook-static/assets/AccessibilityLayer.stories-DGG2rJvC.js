import{r as A,R as t}from"./iframe-Bs1YcocL.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-BwzNzHHG.js";import{A as E}from"./AreaChart-BnFrVRZG.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BCkiCSha.js";import{X as g}from"./XAxis-CkMNNwML.js";import{Y as h}from"./YAxis-DPiwbt5y.js";import{A as a}from"./Area-C3j8Sdux.js";import{T as u}from"./Tooltip-DKfiMN_s.js";import{R as k}from"./zIndexSlice-t-gzu3GV.js";import{L as v}from"./Legend-CMH9EFVv.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DZyIyn43.js";import"./index-D9ADN89d.js";import"./index-CKxampel.js";import"./index-UwTvLFMH.js";import"./index-BRumuJ4r.js";import"./throttle--2-Gh3Mm.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-BTmhgiNO.js";import"./axisSelectors-DMllfokS.js";import"./resolveDefaultProps-BnOzFFcK.js";import"./isWellBehavedNumber-BSPOqlf0.js";import"./d3-scale-37tvwNAS.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CcQU6wxH.js";import"./chartDataContext-CPXqqfzF.js";import"./CategoricalChart-WxCIVI_m.js";import"./CartesianAxis-D8VsSsOs.js";import"./Layer-C-8BEA-e.js";import"./Text-BklYvR7D.js";import"./DOMUtils-cVtaUTCs.js";import"./Label-XTRgfpgH.js";import"./ZIndexLayer-CN0cINvr.js";import"./types-DYZE7YT1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-BJx7sqXo.js";import"./useAnimationId-BX2lcr_s.js";import"./ActivePoints-DYwvnYoP.js";import"./Dot-D62SIbzc.js";import"./RegisterGraphicalItemId-CjkTx9Ub.js";import"./GraphicalItemClipPath-DVFJRr4Y.js";import"./SetGraphicalItem-Bacz05Gx.js";import"./getRadiusAndStrokeWidthFromDot-3DBOSJ59.js";import"./ActiveShapeUtils-CQH8McUN.js";import"./Curve-Bk-KwfJi.js";import"./step-Bu2gjmXw.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CfWPzRa0.js";import"./useElementOffset-i2SJ2I4M.js";import"./uniqBy-DwCD0XBb.js";import"./iteratee-DbbXjD5I.js";import"./Cross-CW9bRfWd.js";import"./Rectangle-BQAZ15JG.js";import"./util-Dxo8gN5i.js";import"./Sector-DX9dCwqA.js";import"./Symbols-B5HVxo-V.js";import"./symbol-CTzxYCh9.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
