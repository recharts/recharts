import{r as A,R as t}from"./iframe-BbNtNwCn.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-D4iN_2Rf.js";import{A as E}from"./AreaChart-CULhG7fJ.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-D3_l0nV8.js";import{X as g}from"./XAxis-oTutdnda.js";import{Y as h}from"./YAxis-C6UVi-mq.js";import{A as a}from"./Area-n5PQMMyM.js";import{T as u}from"./Tooltip-dSp0L5xc.js";import{R as k}from"./zIndexSlice-VrNRi_G1.js";import{L as v}from"./Legend-gXJOoLpY.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DE-VI6iZ.js";import"./resolveDefaultProps-DhM2CAPd.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BzyIizHG.js";import"./throttle-BKFxohT3.js";import"./index-75aciM30.js";import"./index-DDphzaTv.js";import"./isWellBehavedNumber-uY0CIhkC.js";import"./d3-scale-Dkbi5OyZ.js";import"./index-BSdVWAmb.js";import"./index-Cs8MvahU.js";import"./renderedTicksSlice-DIxEy3cM.js";import"./index-gTTJo4-y.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D4DHjPEA.js";import"./chartDataContext-DlNjoonA.js";import"./CategoricalChart-B7Or92Hs.js";import"./CartesianAxis-Ccs4Ad33.js";import"./Layer-DFZlw494.js";import"./Text-jR3JJSu6.js";import"./DOMUtils-DKOsv_Gf.js";import"./useId-CYI9mRcC.js";import"./useBackwardsCompatibleTheme-w385Ylxa.js";import"./Label-Bi0vIQjw.js";import"./ZIndexLayer-CAj7_5Sx.js";import"./types-fRbVNPnq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-LXQvjRXM.js";import"./useAnimationId-CCouJXLZ.js";import"./ActivePoints-BWe-WnoU.js";import"./Dot-xDiH-N__.js";import"./RegisterGraphicalItemId-D25ry5r7.js";import"./GraphicalItemClipPath-B5iQtC38.js";import"./SetGraphicalItem-C_2GZMjS.js";import"./getRadiusAndStrokeWidthFromDot-3xOb0JOi.js";import"./ActiveShapeUtils-CArN8SR1.js";import"./Curve-IZX4MWkA.js";import"./step-CORgqai8.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-DD2NYUwk.js";import"./useElementOffset-CsS9BC38.js";import"./uniqBy-CEpMhxOs.js";import"./iteratee-YzPuL1o-.js";import"./Cross-DzMa72YT.js";import"./Rectangle-D88c0sgw.js";import"./util-Dxo8gN5i.js";import"./Sector-D8F7xXdw.js";import"./Symbols-Q9EOUoeU.js";import"./symbol-ByDZZZUG.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
