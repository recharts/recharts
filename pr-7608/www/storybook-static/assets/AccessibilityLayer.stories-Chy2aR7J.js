import{r as A,R as t}from"./iframe-Dg9AlkU9.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-DdKLVGqR.js";import{A as E}from"./AreaChart-CU0IDi7V.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CEgse3j_.js";import{X as g}from"./XAxis-lGCMel2W.js";import{Y as h}from"./YAxis-CGrAoAPm.js";import{A as a}from"./Area-Diwz83-k.js";import{T as u}from"./Tooltip-CUpj4qOU.js";import{R as k}from"./zIndexSlice-BMqB4Gyy.js";import{L as v}from"./Legend-BtNiGOnl.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-7nbSuF2A.js";import"./index-BE4Y3W85.js";import"./index-Bo0WYItg.js";import"./index-DkFl9iqn.js";import"./index-CroN4XyC.js";import"./throttle-DhT8i8lB.js";import"./get-C2VjdU0L.js";import"./renderedTicksSlice-BJY2ZaZb.js";import"./axisSelectors-Bnxxm030.js";import"./resolveDefaultProps-Cbi8IAhV.js";import"./isWellBehavedNumber-Dlf7mknf.js";import"./d3-scale-BxAYr4dK.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DsbYlNNZ.js";import"./chartDataContext-CTYD4WLT.js";import"./CategoricalChart-Cfe3Pj_n.js";import"./CartesianAxis-ClvRbJ15.js";import"./Layer-BfnZZDJ0.js";import"./Text-B-psx-iS.js";import"./DOMUtils-Bk_tuO3J.js";import"./Label-c2urfMyQ.js";import"./ZIndexLayer-A0r-fd7s.js";import"./types-BOBXQHFv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-Bsg2W_jH.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-Bh9SS3B5.js";import"./useAnimationId-DpUIMGhl.js";import"./ActivePoints-C-VQNown.js";import"./Dot-CpNpS_fm.js";import"./RegisterGraphicalItemId-D2VyX5Qp.js";import"./GraphicalItemClipPath-DQk35kuh.js";import"./SetGraphicalItem-CLD5IGSv.js";import"./getRadiusAndStrokeWidthFromDot-CNcpaGrG.js";import"./ActiveShapeUtils-App4amhZ.js";import"./Curve-C5hYWQKe.js";import"./step-DxvJ6z8y.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CkAB3ALJ.js";import"./useElementOffset-I4cHeDkl.js";import"./uniqBy-D39sA4fz.js";import"./iteratee-BlVn9B3O.js";import"./Cross-CGJxbaYQ.js";import"./Rectangle-D8eTHIfd.js";import"./util-Dxo8gN5i.js";import"./Sector-B6DjodAy.js";import"./Symbols-D8R954sr.js";import"./symbol-C6xbsDKr.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Dt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Dt as __namedExportsOrder,Yt as default};
