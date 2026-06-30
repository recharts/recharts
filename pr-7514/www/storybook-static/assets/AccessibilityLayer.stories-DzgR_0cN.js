import{r as A,R as t}from"./iframe-DJHXlrGw.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-c9TgP79T.js";import{A as E}from"./AreaChart-CTERZB8y.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-SaI1xQn-.js";import{X as g}from"./XAxis-Bazc91VB.js";import{Y as h}from"./YAxis-BulSHvtc.js";import{A as a}from"./Area-DUeDynCD.js";import{T as u}from"./Tooltip-MtmhfVvh.js";import{R as k}from"./zIndexSlice-CFaJnUYw.js";import{L as v}from"./Legend-BJ-Clvso.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DkeMmjUq.js";import"./index-DwS8J4hC.js";import"./index-Be4tbGBe.js";import"./index-BPz6-png.js";import"./index-DwRJQzwD.js";import"./throttle-DAd10cPx.js";import"./get-j_9LvNGC.js";import"./renderedTicksSlice-BKsRhTz6.js";import"./axisSelectors-ClcXvPv0.js";import"./d3-scale-DpYCNPeY.js";import"./resolveDefaultProps-CeQOO-Pe.js";import"./isWellBehavedNumber-Czb4zvRP.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BtZogvmq.js";import"./chartDataContext-CJXmJdS8.js";import"./CategoricalChart-BtoYqjdS.js";import"./CartesianAxis-CkFZLbcD.js";import"./Layer-DZpjcI0F.js";import"./Text-CRISoaMT.js";import"./DOMUtils-R0ltg_fS.js";import"./Label-R2VOv6mw.js";import"./ZIndexLayer-KkfMfF_A.js";import"./types-vAWUzS0M.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-BgKM4093.js";import"./useAnimationId-CR2wKsf0.js";import"./ActivePoints-ChuwA-C_.js";import"./Dot-C_JeniDT.js";import"./RegisterGraphicalItemId-Dmdqk05n.js";import"./GraphicalItemClipPath-Cd-sqkad.js";import"./SetGraphicalItem-BYhVDRYC.js";import"./getRadiusAndStrokeWidthFromDot-WrvxTCng.js";import"./ActiveShapeUtils-CSLmPB1h.js";import"./Curve-Dw1fPQvk.js";import"./step-vGwa_xXj.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DekV_TLp.js";import"./useElementOffset-CFTv--jx.js";import"./uniqBy-BVl6QLa6.js";import"./iteratee-BhdXRguK.js";import"./Cross-kJELHEFE.js";import"./Rectangle-Z1GABkaC.js";import"./util-Dxo8gN5i.js";import"./Sector-BLgFTjIx.js";import"./Symbols-CyeV-LI-.js";import"./symbol-Dm5QNlld.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
