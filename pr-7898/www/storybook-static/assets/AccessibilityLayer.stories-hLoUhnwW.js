import{r as A,R as t}from"./iframe-D0XP5FT3.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-CmUditNM.js";import{A as E}from"./AreaChart-Bf3F8QQt.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-D1psUlAt.js";import{X as g}from"./XAxis-CdyvwiuA.js";import{Y as h}from"./YAxis-CqyPAKzA.js";import{A as a}from"./Area-Bm9R_T-m.js";import{T as u}from"./Tooltip-DfbbT9hH.js";import{R as k}from"./zIndexSlice-D8-60lXw.js";import{L as v}from"./Legend-DCceXFc5.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BDDfTGvW.js";import"./resolveDefaultProps-DjekxJOz.js";import"./get-C2VjdU0L.js";import"./axisSelectors-D4AJEAvo.js";import"./throttle-z8Ap2dYF.js";import"./index-BIEuecVB.js";import"./index-CS8PxtTR.js";import"./isWellBehavedNumber-Ceh04LdS.js";import"./d3-scale-DGDSvNHr.js";import"./index-C2YY5PF9.js";import"./index-D5oWhNFN.js";import"./renderedTicksSlice-BOt15qXr.js";import"./index-a0gINIJJ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B85ukqJW.js";import"./chartDataContext-BcyL-ikw.js";import"./CategoricalChart-w8Ip9gJm.js";import"./CartesianAxis-DAZGCNlj.js";import"./Layer-Bdc6UUg3.js";import"./Text-D0tua1LJ.js";import"./DOMUtils-CiVsTIiM.js";import"./useId-CfurG6Ob.js";import"./useBackwardsCompatibleTheme-CnQkr5Gq.js";import"./Label-CLcGGCVq.js";import"./ZIndexLayer-CZS0piq5.js";import"./types-C9t2smuM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BLak8TNm.js";import"./useAnimationId-DjrvOMwt.js";import"./ActivePoints-BDZ1Wot0.js";import"./Dot-slsYh-CE.js";import"./RegisterGraphicalItemId-HdNBGK70.js";import"./GraphicalItemClipPath-iiifM8JF.js";import"./SetGraphicalItem-CSNZjUhi.js";import"./getRadiusAndStrokeWidthFromDot-Cl1UrcqK.js";import"./ActiveShapeUtils-Da2wOC1_.js";import"./Curve-IiThPwuE.js";import"./step-dzRymlPB.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-DszFn3dP.js";import"./useElementOffset-rZOrtiK6.js";import"./uniqBy-C2z33t4d.js";import"./iteratee-Dzag0UZB.js";import"./Cross-D-5nrYoo.js";import"./Rectangle-Bjcm2Wl_.js";import"./util-Dxo8gN5i.js";import"./Sector-DITvzxdC.js";import"./Symbols-D9vwGWI3.js";import"./symbol-AgEx_K5F.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
