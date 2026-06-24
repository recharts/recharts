import{r as A,R as t}from"./iframe-D4CuLoZz.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-DB0jlCn6.js";import{A as E}from"./AreaChart-ztwL9S7O.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-Dq-8txx_.js";import{X as g}from"./XAxis-eawce65C.js";import{Y as h}from"./YAxis-LKz9SoCr.js";import{A as a}from"./Area-Co-6AjCh.js";import{T as u}from"./Tooltip-CYSWzhO2.js";import{R as k}from"./zIndexSlice-SXe885_i.js";import{L as v}from"./Legend-BuI2PCnr.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BytBl7Lq.js";import"./index-D0U5tyHV.js";import"./index-CRkJbrCH.js";import"./index-DKrwxI3E.js";import"./index-Cama49zD.js";import"./immer-CFokkZQV.js";import"./get-DBuLXD7N.js";import"./renderedTicksSlice-DHw40_9x.js";import"./axisSelectors-BkOYejTH.js";import"./d3-scale-Bg-gbMqf.js";import"./resolveDefaultProps-BIWi1Y-8.js";import"./isWellBehavedNumber-BHyLU3rm.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D5hGWEsl.js";import"./chartDataContext-BdBlfWO1.js";import"./CategoricalChart-CDNCF4CW.js";import"./CartesianAxis-ntk7Om5m.js";import"./Layer-xCWemoOx.js";import"./Text-xYQOnqwx.js";import"./DOMUtils-CZgli98g.js";import"./Label-CcUkFPjg.js";import"./ZIndexLayer-CwgCBSKX.js";import"./types-DyFRA-Bh.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-EJSTJ3cq.js";import"./useAnimationId-DrVwX4j9.js";import"./ActivePoints-BXZGkgHe.js";import"./Dot-Du83lW60.js";import"./RegisterGraphicalItemId-BYXBvuEW.js";import"./GraphicalItemClipPath-Dcao9gEo.js";import"./SetGraphicalItem-D5XyE2WD.js";import"./getRadiusAndStrokeWidthFromDot-CsYgyjN7.js";import"./ActiveShapeUtils-B2FaHUJe.js";import"./Curve-BhJuHD0L.js";import"./step-DSq6gAzd.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DOamrowD.js";import"./useElementOffset-DHHmWbKa.js";import"./uniqBy-YpJRvRQv.js";import"./iteratee-WqXFclZi.js";import"./Cross-DDsze3iQ.js";import"./Rectangle-wZa2ZWZX.js";import"./util-Dxo8gN5i.js";import"./Sector-DQrYYCd9.js";import"./Symbols-DtjLh33F.js";import"./symbol-C9JV79Ky.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
