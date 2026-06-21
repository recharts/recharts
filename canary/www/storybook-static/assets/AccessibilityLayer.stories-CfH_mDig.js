import{r as A,R as t}from"./iframe-Dv2mkDD6.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-IQb96AId.js";import{A as E}from"./AreaChart-Bl21EMiW.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BUvdgMsr.js";import{X as g}from"./XAxis-CXyJf7fo.js";import{Y as h}from"./YAxis-CqyybjBv.js";import{A as a}from"./Area-D8SplSh2.js";import{T as u}from"./Tooltip-1lg2SCwQ.js";import{R as k}from"./zIndexSlice-2fg2g2Dp.js";import{L as v}from"./Legend-DivKGV7P.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CkEfkKBB.js";import"./index-CbNA4IYq.js";import"./index-CX6QVWJd.js";import"./index-9bEp3bq8.js";import"./index-Ds7CCKWE.js";import"./immer-CP6W9K53.js";import"./get-EiM4K4Yy.js";import"./renderedTicksSlice-COLD4oXN.js";import"./axisSelectors-BxD9EJGH.js";import"./d3-scale-DIID899h.js";import"./resolveDefaultProps-pfm2KtVH.js";import"./isWellBehavedNumber-DWptWa3e.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-NBwPQSms.js";import"./chartDataContext-BOvLrxST.js";import"./CategoricalChart-CYR6VSGv.js";import"./CartesianAxis-DFbvktXE.js";import"./Layer-BkXvHIXh.js";import"./Text-CEJxHZH-.js";import"./DOMUtils-CJIsN_cb.js";import"./Label-Cr9zsE7b.js";import"./ZIndexLayer-pZIzemBm.js";import"./types-CH3zmrHK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-D9UxuFUl.js";import"./useAnimationId-eauTaXpl.js";import"./ActivePoints-BlUx1Bmp.js";import"./Dot-DlHqO2in.js";import"./RegisterGraphicalItemId-CjWM_Bfz.js";import"./GraphicalItemClipPath-BtBW0RWE.js";import"./SetGraphicalItem-LAI4OSkO.js";import"./getRadiusAndStrokeWidthFromDot-BIlzguSV.js";import"./ActiveShapeUtils-DZxftlok.js";import"./Curve-CvaYf9T-.js";import"./step-DPezKmex.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-Zjg8Zcv4.js";import"./useElementOffset-1T9XAteM.js";import"./uniqBy-CaeqsPkF.js";import"./iteratee-BHtdL65p.js";import"./Cross-vckZASjN.js";import"./Rectangle-DendxdxL.js";import"./util-Dxo8gN5i.js";import"./Sector-Dg5Y_c7z.js";import"./Symbols-sY2INCLz.js";import"./symbol-D39yft-5.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
