import{r as A,R as t}from"./iframe-DozjnQY4.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-8ht4NcA2.js";import{A as E}from"./AreaChart-BbXjzSRq.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-Ce4aDBTK.js";import{X as g}from"./XAxis-CMLACdRu.js";import{Y as h}from"./YAxis-DKlfhRHH.js";import{A as a}from"./Area-CIW1nyMC.js";import{T as u}from"./Tooltip-CA3U6Xvo.js";import{R as k}from"./zIndexSlice-BgkLcB6R.js";import{L as v}from"./Legend-D7-pVV-n.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CsvSe4fO.js";import"./resolveDefaultProps-CVm2MzcI.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DgS41G-2.js";import"./throttle-ja6YfGso.js";import"./index-C_fPCGUJ.js";import"./index-DvODWZUZ.js";import"./isWellBehavedNumber-pk6AjLe8.js";import"./d3-scale-DiLIb41e.js";import"./index-B-gAWTo9.js";import"./index-55Hv9cWy.js";import"./renderedTicksSlice-eosOC0PP.js";import"./index-CQZmeOSf.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C23oYJhj.js";import"./chartDataContext-BMMD7dGr.js";import"./CategoricalChart-cz-sFoBH.js";import"./CartesianAxis-VBiFHU3A.js";import"./Layer-DqTc2vWN.js";import"./Text-CYg0PxB3.js";import"./DOMUtils-12JScs07.js";import"./useId-CoUbJimw.js";import"./useBackwardsCompatibleTheme-ZiWSCSRQ.js";import"./Label-zwFJYypc.js";import"./ZIndexLayer-BfyW3t5T.js";import"./types-BbIJv7s_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DN24URVz.js";import"./useAnimationId-Dn8df37H.js";import"./ActivePoints-B8JQwmYC.js";import"./Dot-8Z6kgu22.js";import"./RegisterGraphicalItemId-DbLQfc-G.js";import"./GraphicalItemClipPath-CB6u2457.js";import"./SetGraphicalItem-Ba3q6rOQ.js";import"./getRadiusAndStrokeWidthFromDot-m20kiUFK.js";import"./ActiveShapeUtils-DQCdFpwN.js";import"./Curve-cLiU8AJA.js";import"./step-DFSUgzDE.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-BMnjEDTs.js";import"./useElementOffset-q9rliSht.js";import"./uniqBy-DDhkZRqQ.js";import"./iteratee-BypAlLeG.js";import"./Cross-DuDDKu83.js";import"./Rectangle-lcraYYmO.js";import"./util-Dxo8gN5i.js";import"./Sector-Cp9Bbwf1.js";import"./Symbols-B5tB_r3v.js";import"./symbol-DkoFJi3o.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
