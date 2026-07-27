import{r as A,R as t}from"./iframe-CLpUHFUx.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-7luAuAhp.js";import{A as E}from"./AreaChart-D_ZK1jGL.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DCiVUYww.js";import{X as g}from"./XAxis-DQukB1wG.js";import{Y as h}from"./YAxis-2SAbeq8Q.js";import{A as a}from"./Area-D0oF1waj.js";import{T as u}from"./Tooltip-CvbcNZGz.js";import{R as k}from"./zIndexSlice-ih_i1g5t.js";import{L as v}from"./Legend-DubnagiF.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-VhXLtIU3.js";import"./index-BQRTjV6n.js";import"./index-BWENVgmR.js";import"./index-CvxUcRs5.js";import"./index-DaW4Sl48.js";import"./throttle-CLd1kjXB.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-CuCo3UJj.js";import"./axisSelectors-DcdgEKfW.js";import"./resolveDefaultProps-DTakvVP9.js";import"./isWellBehavedNumber-CHss1wLf.js";import"./d3-scale-BxXYUMYM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BoKvv8NW.js";import"./chartDataContext-BXtd66MC.js";import"./CategoricalChart-D4oV83W1.js";import"./CartesianAxis-Dv_zGlnO.js";import"./Layer-3AQvPOBc.js";import"./Text-CSq4IeED.js";import"./DOMUtils-D-nz1rzx.js";import"./Label-Cri2SigJ.js";import"./ZIndexLayer-DoU1T_G7.js";import"./types-BtWOZotP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./AnimatedItems-BvAtBQX7.js";import"./useAnimationId-NKiMzI6a.js";import"./ActivePoints-B2iIRtsT.js";import"./Dot-rjCZu1cP.js";import"./RegisterGraphicalItemId-D5SJC0o6.js";import"./GraphicalItemClipPath-BJ5GEIwI.js";import"./SetGraphicalItem-DL6fPXwP.js";import"./getRadiusAndStrokeWidthFromDot-b1AZaPVX.js";import"./ActiveShapeUtils-BoZWmQGY.js";import"./Curve-DZJekjpR.js";import"./step-_f2gFda3.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DkqTdS0-.js";import"./useElementOffset-4nhhdQM-.js";import"./uniqBy-BL16Mnd5.js";import"./iteratee-DMRQCYyf.js";import"./Cross-CYjhPBjl.js";import"./Rectangle-5xIBVaz8.js";import"./util-Dxo8gN5i.js";import"./Sector-B8SGIxUc.js";import"./Symbols-H0HhizFF.js";import"./symbol-2ZaHrFGi.js";const St={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Yt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Yt as __namedExportsOrder,St as default};
