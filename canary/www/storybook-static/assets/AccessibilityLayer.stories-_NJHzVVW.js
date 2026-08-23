import{r as A,R as t}from"./iframe-DnFxx7IH.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-nZqnVWXT.js";import{A as E}from"./AreaChart-BxOLnx_q.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CF1ZFW_G.js";import{X as g}from"./XAxis-IDSfm9bg.js";import{Y as h}from"./YAxis-CEWgAKNT.js";import{A as a}from"./Area-CDSN85Rp.js";import{T as u}from"./Tooltip-ar0y9lJP.js";import{R as k}from"./zIndexSlice-DMQesRjL.js";import{L as v}from"./Legend-Ca_KDK-L.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BEVhWh0t.js";import"./index-GUUQK7eb.js";import"./index-CAdU6H6S.js";import"./index-rcoyIDVk.js";import"./index-Brqhvl0Y.js";import"./throttle-D9ypYn8O.js";import"./get-C2VjdU0L.js";import"./axisSelectors-5k6UVVXW.js";import"./resolveDefaultProps-BrQSc28h.js";import"./isWellBehavedNumber-DwCdsfaa.js";import"./d3-scale-Bs_R4IxC.js";import"./renderedTicksSlice-D0pYs9KP.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DEdd4Z6y.js";import"./chartDataContext-DJs6EXfK.js";import"./CategoricalChart-DJUCMkjn.js";import"./CartesianAxis-BE4Vor5z.js";import"./Layer-D_Gfp3eA.js";import"./Text-DMuBrTIK.js";import"./DOMUtils-L7csA6Z4.js";import"./useId-DrpNe8Nn.js";import"./useBackwardsCompatibleTheme-DDCq5JLw.js";import"./Label--8_ga_Yz.js";import"./ZIndexLayer-DWUDk33_.js";import"./types-BDVRIOHN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-C4h-Xaxi.js";import"./useAnimationId-CvbAXd24.js";import"./ActivePoints-6Gybe8Hc.js";import"./Dot-CMt5bDBr.js";import"./RegisterGraphicalItemId-CKqNw0Tr.js";import"./GraphicalItemClipPath-Cr1fTws_.js";import"./SetGraphicalItem-BEKqBC8O.js";import"./getRadiusAndStrokeWidthFromDot-Dzo4OknT.js";import"./ActiveShapeUtils-DMhAfvBj.js";import"./Curve-J32t11pu.js";import"./step-Bso1aipe.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Qui8nPll.js";import"./useElementOffset-uQ8Z7oyS.js";import"./uniqBy-BPRwV-au.js";import"./iteratee-DD5UE0pF.js";import"./Cross-CWVEStLb.js";import"./Rectangle-DIvdGauu.js";import"./util-Dxo8gN5i.js";import"./Sector-DRopt2OG.js";import"./Symbols-Bz-bEPn5.js";import"./symbol-B6M4kKq8.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
