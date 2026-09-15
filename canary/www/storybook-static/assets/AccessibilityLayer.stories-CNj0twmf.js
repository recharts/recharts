import{r as A,R as t}from"./iframe-B5suke5B.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-sXWnmRwm.js";import{A as E}from"./AreaChart-BY8RSZ9Y.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BOHzxaJ-.js";import{X as g}from"./XAxis-CtU2ba0a.js";import{Y as h}from"./YAxis-6eL7FIQY.js";import{A as a}from"./Area-BDrw9rA6.js";import{T as u}from"./Tooltip-CjRE84pb.js";import{R as k}from"./zIndexSlice-D0kihEsS.js";import{L as v}from"./Legend-CpOpOjXS.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-xDK7h46M.js";import"./resolveDefaultProps-CLTE-4Yl.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Bxd1L_G4.js";import"./throttle-yXst2GNy.js";import"./index-D-nx8SRU.js";import"./index-0E1UP6ea.js";import"./isWellBehavedNumber-BdM77gE7.js";import"./d3-scale-lqW361z6.js";import"./index-AUvHwQMM.js";import"./index-QzaRG_bO.js";import"./renderedTicksSlice-DN6DkPzy.js";import"./index-BJ8eFwlr.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-an0uCQ19.js";import"./chartDataContext-7ysfjD_K.js";import"./CategoricalChart-am3Id38i.js";import"./CartesianAxis-DDYqByWb.js";import"./Layer-TMg83YAh.js";import"./Text-rc7ZZmS8.js";import"./DOMUtils-W5ZSww-v.js";import"./useId-BWjKNL9O.js";import"./useBackwardsCompatibleTheme-D8o_0ZGr.js";import"./Label-BAgGrzQX.js";import"./ZIndexLayer-BCqg4Zz6.js";import"./types-AnLHRdTF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-vhEGvzj0.js";import"./useAnimationId-rfQUB_TF.js";import"./ActivePoints-BHQL7RSY.js";import"./Dot-i8VNrcLy.js";import"./RegisterGraphicalItemId-BgozNBK6.js";import"./GraphicalItemClipPath-DRG66VTj.js";import"./SetGraphicalItem-CVhYGG_S.js";import"./getRadiusAndStrokeWidthFromDot-YwdC5Jzm.js";import"./ActiveShapeUtils-CHch558p.js";import"./Curve-BEbKvH6j.js";import"./step-DAq7_1My.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-Caq5Yc5Z.js";import"./useElementOffset-CZkTpHRI.js";import"./uniqBy-CKyk2yaQ.js";import"./iteratee-DqYRbI4z.js";import"./Cross-HkATJlAV.js";import"./Rectangle-BS91G8m4.js";import"./util-Dxo8gN5i.js";import"./Sector-Du7qp-ox.js";import"./Symbols-DOwKCdtX.js";import"./symbol-0gW64JLT.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var s,p,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Wt as __namedExportsOrder,Ft as default};
