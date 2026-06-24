import{r as A,R as t}from"./iframe-CtzYfaFS.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-XEkgpTLA.js";import{A as E}from"./AreaChart-ddKw1tya.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BNaIyixE.js";import{X as g}from"./XAxis-oAw543sJ.js";import{Y as h}from"./YAxis-IWkh__zP.js";import{A as a}from"./Area-DSZUGR1X.js";import{T as u}from"./Tooltip-DogIC3j-.js";import{R as k}from"./zIndexSlice-CHFLQ-iB.js";import{L as v}from"./Legend-CiR3j6vn.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DtAkHf5u.js";import"./index-CQyW4Cl8.js";import"./index-B8ynkf98.js";import"./index-B_3CFrL4.js";import"./index-CS7Z3m5_.js";import"./immer-5-WksSwG.js";import"./get-BsiXY17Z.js";import"./renderedTicksSlice-CyXKwvU2.js";import"./axisSelectors-C9oTN7aY.js";import"./d3-scale-Dsn_Yuxt.js";import"./resolveDefaultProps-B4yZFq1_.js";import"./isWellBehavedNumber-C_JD1Sao.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DLLDguMM.js";import"./chartDataContext-CAcvyAd0.js";import"./CategoricalChart-CwCdJGlO.js";import"./CartesianAxis-BA_E2N7m.js";import"./Layer-BYFEOVHG.js";import"./Text-EAXDgmFv.js";import"./DOMUtils-CZaHz23v.js";import"./Label-vhEl4j2z.js";import"./ZIndexLayer-DBCChzpw.js";import"./types-BhOKl2M1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-CFTPfFdo.js";import"./useAnimationId-Dat_OdBO.js";import"./ActivePoints-VdjJXov3.js";import"./Dot-DiQjGxU2.js";import"./RegisterGraphicalItemId-C98AlHEB.js";import"./GraphicalItemClipPath-DEcca-2A.js";import"./SetGraphicalItem-CIPU0D-S.js";import"./getRadiusAndStrokeWidthFromDot-DosUFuXZ.js";import"./ActiveShapeUtils-Bjb6cUC6.js";import"./Curve-CEEgN7pC.js";import"./step-BRDo_NJw.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-oXMVx2vT.js";import"./useElementOffset-DkrRKcsg.js";import"./uniqBy-CBSkEntb.js";import"./iteratee-BJLAzLHV.js";import"./Cross-Dgj9Mdeo.js";import"./Rectangle-bPdK07Y6.js";import"./util-Dxo8gN5i.js";import"./Sector-Kex3ri7r.js";import"./Symbols-BZg8aTao.js";import"./symbol-Cw8G4fgp.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
