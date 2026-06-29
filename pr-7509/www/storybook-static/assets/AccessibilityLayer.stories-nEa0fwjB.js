import{r as A,R as t}from"./iframe-4vtyrily.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-54KCGiVv.js";import{A as E}from"./AreaChart-CLtzJmfV.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DDBtHf46.js";import{X as g}from"./XAxis-D8jscbum.js";import{Y as h}from"./YAxis-BZLq-Yvr.js";import{A as a}from"./Area-DbFWPNfN.js";import{T as u}from"./Tooltip-C922immd.js";import{R as k}from"./zIndexSlice-DsxXMu10.js";import{L as v}from"./Legend-6rO4izAO.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BkIEJRAG.js";import"./index-DmmOL2VS.js";import"./index-lWQepKyy.js";import"./index-058gmbYq.js";import"./index-WdI8WwRZ.js";import"./throttle-BJLHAoQW.js";import"./get-CmTlD__X.js";import"./renderedTicksSlice-DadNz-JQ.js";import"./axisSelectors-b6USA22d.js";import"./d3-scale-BRChu2o4.js";import"./resolveDefaultProps-CluH8H00.js";import"./isWellBehavedNumber-BgzphtrB.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-COMuthXy.js";import"./chartDataContext-Cvy_uDzX.js";import"./CategoricalChart-Cbi53qJN.js";import"./CartesianAxis-CiqNB0Kv.js";import"./Layer-BeOWFmV4.js";import"./Text-BI23BLmu.js";import"./DOMUtils-BhADA_J0.js";import"./Label-BGwY3uMh.js";import"./ZIndexLayer-BSkjb5Ga.js";import"./types-CBN3GvJG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-DdVQ6WRa.js";import"./useAnimationId-CorgOjgO.js";import"./ActivePoints-B8FHMCJl.js";import"./Dot-CRumXoSO.js";import"./RegisterGraphicalItemId-3aiZPuQN.js";import"./GraphicalItemClipPath-Cc5Lg0-u.js";import"./SetGraphicalItem-Brisep9j.js";import"./getRadiusAndStrokeWidthFromDot-C0aT6Dgm.js";import"./ActiveShapeUtils-DwhByUak.js";import"./Curve-lJlCi-Lp.js";import"./step-BvrGRSpq.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DwEj409d.js";import"./useElementOffset-aY7P-FDX.js";import"./uniqBy-Dg7J4PMx.js";import"./iteratee-BJakvES8.js";import"./Cross-DJYNimuK.js";import"./Rectangle-DdosgUZ5.js";import"./util-Dxo8gN5i.js";import"./Sector-BEKJvdH5.js";import"./Symbols-BWJBnJCf.js";import"./symbol-SUsw5YqF.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
