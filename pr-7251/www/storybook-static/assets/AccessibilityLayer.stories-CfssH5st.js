import{r as A,e as t}from"./iframe-DJH7-DuZ.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-DQohHPn5.js";import{A as E}from"./AreaChart-EwVxMIHt.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CKoa0GDb.js";import{X as g}from"./XAxis-CZkA-oar.js";import{Y as h}from"./YAxis-D7iD0ncq.js";import{A as a}from"./Area-DfrjkDRt.js";import{T as u}from"./Tooltip-MQjUxdHs.js";import{R as y}from"./RechartsHookInspector-Cl1nQjm_.js";import{R as v}from"./arrayEqualityCheck-BCL8BMWc.js";import{L as T}from"./Legend-BsPBB5AD.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-lBMzT84x.js";import"./index-DdbzQdr9.js";import"./immer-Up9jfWyF.js";import"./hooks-CHeZq7QJ.js";import"./axisSelectors-QKrA9-VE.js";import"./d3-scale-DorYBcEd.js";import"./zIndexSlice-DDN8c_9B.js";import"./renderedTicksSlice-BZJ0LC0-.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DS-UTjvk.js";import"./chartDataContext-tGyrX-5w.js";import"./CategoricalChart-BCCF7qba.js";import"./resolveDefaultProps-DEI4xjdp.js";import"./CartesianAxis-CPsFrMJH.js";import"./Layer-DXEVbG5U.js";import"./Text-D3lbDKii.js";import"./DOMUtils-MBSOXcf3.js";import"./Label-CqQ3p6o_.js";import"./ZIndexLayer-BCFams-U.js";import"./types-xH_rqDEy.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-BCbaV2-E.js";import"./step-DL72aW96.js";import"./ReactUtils-CaksUlzy.js";import"./ActivePoints-CTsHhn1X.js";import"./Dot-DqIFXDgd.js";import"./RegisterGraphicalItemId-BdCMR3nP.js";import"./GraphicalItemClipPath-BkUssZcX.js";import"./SetGraphicalItem-CwRe-vCa.js";import"./useAnimationId-CnjUKELe.js";import"./getRadiusAndStrokeWidthFromDot-B30SAq_H.js";import"./graphicalItemSelectors-PITpZWG7.js";import"./useElementOffset-DxSDxF4G.js";import"./uniqBy-xKJWQ-iw.js";import"./iteratee-D5nijMhP.js";import"./Cross-B8TXY95C.js";import"./Rectangle-DffZWIBt.js";import"./Sector-DN23uiBq.js";import"./index-3J-EA25K.js";import"./ChartSizeDimensions-B_Dm3cCN.js";import"./OffsetShower-BnHyQTzL.js";import"./PlotAreaShower-B21fSxhD.js";import"./Symbols-C-1ojLAZ.js";import"./symbol-C9P6TcDS.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
}`,...(n=(m=r.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var s,p,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </AreaChart>
      </div>;
  },
  args: {}
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Yt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Yt as __namedExportsOrder,St as default};
