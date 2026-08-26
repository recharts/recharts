import{r as A,R as t}from"./iframe-DgQvZQyh.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-BGAWRlKr.js";import{A as E}from"./AreaChart-rOEI-dti.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BonfojMO.js";import{X as g}from"./XAxis-B4xwOvnI.js";import{Y as h}from"./YAxis-B-S92WaL.js";import{A as a}from"./Area-Bz7_-mCT.js";import{T as u}from"./Tooltip-PE5z2rM6.js";import{R as k}from"./zIndexSlice-Btq-n8Y8.js";import{L as v}from"./Legend-CvI7QQBV.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DQot8Dvj.js";import"./index-Bb9OGTvq.js";import"./index-D86HQKsa.js";import"./index-Cq8r6DAn.js";import"./index-BZXsqVam.js";import"./throttle-Dk-DfWHx.js";import"./get-C2VjdU0L.js";import"./axisSelectors-VvYM7u3M.js";import"./resolveDefaultProps-CgdEm8CY.js";import"./isWellBehavedNumber-1FtJDRA4.js";import"./d3-scale-uYT3pExD.js";import"./renderedTicksSlice-Cx5LcFk7.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CPjqqiaN.js";import"./chartDataContext-CZdqNQBA.js";import"./CategoricalChart-ZwyKDo7N.js";import"./CartesianAxis-BguBsSE9.js";import"./Layer-jy0y6JzX.js";import"./Text-BCNrLAhU.js";import"./DOMUtils-Dc6imoC2.js";import"./useId-Dpr_zhHQ.js";import"./useBackwardsCompatibleTheme-CyfSeWLo.js";import"./Label-D7SUzQZZ.js";import"./ZIndexLayer-COjkhmxj.js";import"./types-DyDamtmF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CDuN3lv4.js";import"./useAnimationId-CMrpUBKd.js";import"./ActivePoints-Lw7-gIIJ.js";import"./Dot-Cp5LqDbN.js";import"./RegisterGraphicalItemId-CgmuqVKA.js";import"./GraphicalItemClipPath-wWG5NmBB.js";import"./SetGraphicalItem-WfznSmPk.js";import"./getRadiusAndStrokeWidthFromDot-zg-JnYSm.js";import"./ActiveShapeUtils-bdnMAsi3.js";import"./Curve-ihXVzoU6.js";import"./step-ByO1iE7m.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-D9b0UCou.js";import"./useElementOffset-BASXZrSa.js";import"./uniqBy-rST57Vux.js";import"./iteratee-BL-nEGkT.js";import"./Cross-DJTs7157.js";import"./Rectangle-CkzbQ6sY.js";import"./util-Dxo8gN5i.js";import"./Sector-D-WZW2-Q.js";import"./Symbols-Cx2m1nqb.js";import"./symbol-DU_MIklD.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
