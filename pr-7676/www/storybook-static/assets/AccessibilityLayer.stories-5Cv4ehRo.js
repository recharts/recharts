import{r as A,R as t}from"./iframe-Ca32ubBP.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-BtIdPlG5.js";import{A as E}from"./AreaChart-D9nbYIaU.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BwaCreiY.js";import{X as g}from"./XAxis-Doj-lEYw.js";import{Y as h}from"./YAxis-wOxJ_8VY.js";import{A as a}from"./Area-DtHOHTEF.js";import{T as u}from"./Tooltip-BK7CRZ-e.js";import{R as k}from"./zIndexSlice-dHiwLFUj.js";import{L as v}from"./Legend-Ndh8y7nt.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C_dCGHdd.js";import"./index-CHNh1dey.js";import"./index-Dge3NWQD.js";import"./index-8HLzHw6r.js";import"./index-CHnduxoF.js";import"./throttle-B0sCMXOK.js";import"./get-C2VjdU0L.js";import"./axisSelectors-A6ndeoHc.js";import"./resolveDefaultProps-FNg74tNy.js";import"./isWellBehavedNumber-C-9KtVDX.js";import"./d3-scale-Do2gUorH.js";import"./renderedTicksSlice-CpRpGU6M.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D1u_uw1Q.js";import"./chartDataContext-Dgyo9muf.js";import"./CategoricalChart-CBCGNfzQ.js";import"./CartesianAxis-Dfpoi9-r.js";import"./Layer-B0UktO7Z.js";import"./Text-i5MeFzWV.js";import"./DOMUtils-BJ447lE9.js";import"./useId-BjxuxzLj.js";import"./useBackwardsCompatibleTheme-Ddp8u6f9.js";import"./Label-DD1RmAzE.js";import"./ZIndexLayer-BAqimWYO.js";import"./types-_9LccsBU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CDoRaH70.js";import"./useAnimationId-B8VHZUPO.js";import"./ActivePoints-BBA7jI6r.js";import"./Dot-B4PeYlma.js";import"./RegisterGraphicalItemId-B_2qN3HQ.js";import"./GraphicalItemClipPath-CrTkoGhX.js";import"./SetGraphicalItem-CnmA_FOG.js";import"./getRadiusAndStrokeWidthFromDot-BY_VbDBa.js";import"./ActiveShapeUtils-x7koemir.js";import"./Curve-BTmElVc4.js";import"./step-CYvNd-lj.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DxjfMUKN.js";import"./useElementOffset-B__IOwrq.js";import"./uniqBy-Vn-_Z9lW.js";import"./iteratee-C66mF7I5.js";import"./Cross-CpfAzeAt.js";import"./Rectangle-DLCrIZbS.js";import"./util-Dxo8gN5i.js";import"./Sector-B51nA7t4.js";import"./Symbols-DPe3GKhA.js";import"./symbol-gQzWWZLj.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Wt as __namedExportsOrder,Ft as default};
