import{r as A,R as t}from"./iframe-Da76_689.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart--w51xXk6.js";import{A as E}from"./AreaChart-EFQkGxUd.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CnvFZ9BI.js";import{X as g}from"./XAxis-DepWA4im.js";import{Y as h}from"./YAxis-Dp_F69G6.js";import{A as a}from"./Area-CxeL95H_.js";import{T as u}from"./Tooltip-DZiBg5Kd.js";import{R as k}from"./zIndexSlice-a0xNinnk.js";import{L as v}from"./Legend-D54_s6lq.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BJISCefM.js";import"./index-DhFXp8vM.js";import"./index-JDhekbA3.js";import"./index-C8Z1S5Pt.js";import"./index-DUt0bfqM.js";import"./throttle-COYVVxZg.js";import"./get-C2VjdU0L.js";import"./renderedTicksSlice-ObOqR6xe.js";import"./axisSelectors-Bw6517Pm.js";import"./resolveDefaultProps-BpFPYIFo.js";import"./isWellBehavedNumber-CH2-kpaa.js";import"./d3-scale-DyCdYIOY.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Cprw1vi1.js";import"./chartDataContext-BxrKQ5f-.js";import"./CategoricalChart-D82DfAs8.js";import"./CartesianAxis-BQNrFnRM.js";import"./Layer-BItCE877.js";import"./Text-C0rNKqCf.js";import"./DOMUtils-B2_jGy5F.js";import"./Label-BNqYKN1e.js";import"./ZIndexLayer-DP22msHm.js";import"./types-Dy7AAOTV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-BbZg4AjH.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-TTrqb8VQ.js";import"./useAnimationId-hnsh8Uwf.js";import"./ActivePoints-XUjLYmrr.js";import"./Dot-Clx9ykW3.js";import"./RegisterGraphicalItemId-DiJJvqsF.js";import"./GraphicalItemClipPath-BO9b33Ly.js";import"./SetGraphicalItem-Bzc-F73M.js";import"./graphicalItemIdentity-HzAIj0MZ.js";import"./ActiveShapeUtils-Da9-43zR.js";import"./Curve-BZ7uJ3AN.js";import"./step-fSL6Yfr6.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-bVhLjSEG.js";import"./useElementOffset-BzkW5WMd.js";import"./uniqBy-CW1xeKFH.js";import"./iteratee-Bhotarsi.js";import"./Cross-C7svBc8m.js";import"./Rectangle-B4LUgefq.js";import"./util-Dxo8gN5i.js";import"./Sector-xlID3bO4.js";import"./Symbols-C6OkA8gc.js";import"./symbol-BZZREhJC.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
