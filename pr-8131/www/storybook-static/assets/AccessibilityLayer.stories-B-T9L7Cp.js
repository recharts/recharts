import{r as A,R as t}from"./iframe-OYo09Kjn.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-O8l7FYsv.js";import{A as E}from"./AreaChart-BXyTAQRx.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DrqfL26O.js";import{X as g}from"./XAxis-C4iNCAUT.js";import{Y as h}from"./YAxis-B9J5xeR5.js";import{A as a}from"./Area-BKQGkoBU.js";import{T as u}from"./Tooltip-0pT-eWlS.js";import{R as k}from"./zIndexSlice-C0otV0Tq.js";import{L as v}from"./Legend-BAHT8kds.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DDeqrE6g.js";import"./resolveDefaultProps-BV2Pd4xr.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DwbFlqn_.js";import"./throttle-2ukkMEiH.js";import"./index-B1YAqRON.js";import"./index-jR8-nOeq.js";import"./polarAxisSelectors-h48S2J0z.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CkZT7Yna.js";import"./index-D6UCrPx5.js";import"./index-OFmsSHfS.js";import"./renderedTicksSlice-Dj299CQx.js";import"./index-C9mjTPMA.js";import"./fillDefinitions-DyAhyaHy.js";import"./CartesianChart-CU1owHvq.js";import"./ZIndexPortal-THJMy4l1.js";import"./CategoricalChart-reFCYYlz.js";import"./CartesianAxis-Ce7EujIW.js";import"./Layer-BKQ7Cq1e.js";import"./Text-Dl7WOzrI.js";import"./DOMUtils-VDBzCn3R.js";import"./ZIndexLayer-fjsdvpte.js";import"./Label-BLd_HfLL.js";import"./types-CzskQIcv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-D8hIzv9X.js";import"./ActivePoints-YU9mNETr.js";import"./Dot-BVDEoTVF.js";import"./activeStyles-By7c-_I7.js";import"./useAnimationId-Bfw_1I20.js";import"./dataEntryStyles-CwKCb_eK.js";import"./Symbols-DShbzJAN.js";import"./symbol-CmMsv7zq.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-C2cjU4L3.js";import"./getRadiusAndStrokeWidthFromDot-BexLXBfB.js";import"./ActiveShapeUtils-DsFWfn7B.js";import"./Curve-DVj7Kjw7.js";import"./step-DXZ6DTgl.js";import"./useEffectiveDataKey-BkqAzi9W.js";import"./useElementOffset-DmtR-dee.js";import"./uniqBy-CaC20Hzh.js";import"./iteratee-B2qJ-Z7i.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BX7lI3Sj.js";import"./Rectangle-Br8BuzQ0.js";import"./util-Dxo8gN5i.js";import"./Sector-CKiS8YLH.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
