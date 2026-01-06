import{e as t,r as k}from"./iframe-DP2mOMln.js";import{G as n}from"./CartesianComponentShared-BGjrRDZW.js";import{g as E}from"./utils-ePvtT4un.js";import{C as d}from"./ComposedChart-D-mUb2sk.js";import{R as b}from"./arrayEqualityCheck-5iTHPuD6.js";import{A as a}from"./Area-CvyIrXLV.js";import{L as C}from"./Legend-CKQzX7-y.js";import{X as g}from"./XAxis-B_VQg86f.js";import{Y as h}from"./YAxis-WXcImUvg.js";import{T as u}from"./Tooltip-CtUAS5no.js";import{R as y}from"./RechartsHookInspector-DVpbP7qM.js";import{A as v}from"./AreaChart-BxxBqNwh.js";import{C as T}from"./CartesianGrid-CwGJdEIL.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-T4ODBC4p.js";import"./hooks-zeoTqeYF.js";import"./axisSelectors-1ZBBcU4q.js";import"./zIndexSlice-Cik2D4vv.js";import"./resolveDefaultProps-_qLwNxhH.js";import"./PolarUtils-DkgNb_vz.js";import"./CartesianChart-DpJZ7Wkf.js";import"./chartDataContext-B_bP7OxR.js";import"./CategoricalChart-DEV1B1BC.js";import"./Curve-DYGBu986.js";import"./types-DdS-Ezdx.js";import"./Layer-BZqUSVid.js";import"./ReactUtils-DJEcSmKG.js";import"./Label-DnLJWwCk.js";import"./Text-C5XiBNyf.js";import"./DOMUtils-DWLh1SLI.js";import"./ZIndexLayer-BOwqkVYS.js";import"./ActivePoints-CZ6tlVSr.js";import"./Dot-qyySS_n7.js";import"./RegisterGraphicalItemId-30jUMiK8.js";import"./GraphicalItemClipPath-C-hXbMEZ.js";import"./SetGraphicalItem-ZmYa4ptY.js";import"./useAnimationId-BuyyHYgP.js";import"./getRadiusAndStrokeWidthFromDot-ChYaQN1P.js";import"./graphicalItemSelectors-DRBcp9i0.js";import"./Symbols-1_tOvOdR.js";import"./useElementOffset-Bme7kzJ-.js";import"./iteratee-VohP_WFB.js";import"./CartesianAxis-CF6IOTSN.js";import"./Cross-CBOoYy9A.js";import"./Rectangle-DcVYjSDm.js";import"./Sector-CAH7EP92.js";import"./index-CMQ1Twes.js";import"./ChartSizeDimensions-fmpk3s6Q.js";import"./OffsetShower-B4eNU7sm.js";import"./PlotAreaShower-CPDnvxOK.js";const Ct={component:d},r={render:e=>t.createElement(b,{width:"100%",height:300},t.createElement(d,{margin:{top:20,right:20,bottom:20,left:20},data:f},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(C,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:{...E(n)},parameters:{controls:{include:Object.keys(n)},docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,A]=k.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>A(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:f,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,s,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(General)
  },
  parameters: {
    controls: {
      include: Object.keys(General)
    },
    docs: {
      description: {
        story: 'You can tab to this chart. From there, you can use the arrow keys to navigate along the chart.'
      }
    }
  }
}`,...(m=(s=r.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </AreaChart>
      </div>;
  },
  args: {}
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const vt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,vt as __namedExportsOrder,Ct as default};
