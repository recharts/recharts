import{r as A,R as t}from"./iframe-_oCKXQQT.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-Doh5buxK.js";import{A as E}from"./AreaChart-Bm4DG8fS.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CGKlTvg8.js";import{X as g}from"./XAxis-D3L4SFSq.js";import{Y as h}from"./YAxis-pBFniQdP.js";import{A as a}from"./Area-BPKP7edC.js";import{T as u}from"./Tooltip-BBk2mMd_.js";import{R as k}from"./zIndexSlice-Dq64QlX1.js";import{L as v}from"./Legend-CxXOfWWb.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BkeUzj5p.js";import"./index-6i1k6cIu.js";import"./index-DYTqQgsI.js";import"./index-eQFvDN2n.js";import"./index-BhdyHQ9q.js";import"./throttle-BQ_gnI8m.js";import"./get-Dgc8xSDl.js";import"./renderedTicksSlice-BRr9Mzxw.js";import"./axisSelectors-DIl8ejt1.js";import"./d3-scale-DRcGFkfh.js";import"./resolveDefaultProps-D-cNYr8U.js";import"./isWellBehavedNumber-B9wxNRPu.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Br7CcIjd.js";import"./chartDataContext-DAy8Squq.js";import"./CategoricalChart-CepUJJer.js";import"./CartesianAxis--Lh3QzvY.js";import"./Layer-BtAMG36m.js";import"./Text-CaXzzKZw.js";import"./DOMUtils-BvVxKZ4D.js";import"./Label-DrF3NWpt.js";import"./ZIndexLayer-DUuDPJyN.js";import"./types-C2uV_Cvt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-CmMbILYr.js";import"./useAnimationId-CObBJ0f9.js";import"./ActivePoints-vZyVJ-4h.js";import"./Dot-B8ZmznHu.js";import"./RegisterGraphicalItemId-43VeAxEX.js";import"./GraphicalItemClipPath-BiS7z6q5.js";import"./SetGraphicalItem-jz90sZeJ.js";import"./getRadiusAndStrokeWidthFromDot-AsQYUmCL.js";import"./ActiveShapeUtils-CrKU6_AB.js";import"./Curve-OFG9MmZD.js";import"./step-BG6ETINo.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CH5-FBeI.js";import"./useElementOffset-CeTWjI2A.js";import"./uniqBy-CTI2mupa.js";import"./iteratee-2tW9rS6f.js";import"./Cross-jkS6bSBc.js";import"./Rectangle-BxnTCKGy.js";import"./util-Dxo8gN5i.js";import"./Sector-BuT59_MP.js";import"./Symbols-C3XKYUvU.js";import"./symbol-Kk4TNAEo.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
