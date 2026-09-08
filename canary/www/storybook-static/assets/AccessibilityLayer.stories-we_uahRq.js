import{r as A,R as t}from"./iframe-DNntBodD.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-BH2fklny.js";import{A as E}from"./AreaChart-4v6HOKWm.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-LMPXAGBk.js";import{X as g}from"./XAxis-BY2gNAXm.js";import{Y as h}from"./YAxis-CF14HcHp.js";import{A as a}from"./Area-BM78iCoy.js";import{T as u}from"./Tooltip-CkfNsq-h.js";import{R as k}from"./zIndexSlice-DiWKALGY.js";import{L as v}from"./Legend-H0Ygc-Gq.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-v1Mup_kK.js";import"./resolveDefaultProps-BBBno9Vz.js";import"./get-C2VjdU0L.js";import"./axisSelectors-B-JAPPws.js";import"./throttle-C7dkKHPf.js";import"./index-DJMKHO2r.js";import"./index-Dseq7l94.js";import"./isWellBehavedNumber-BAVeTOtu.js";import"./d3-scale-B1cdCOGf.js";import"./index-D3OPKtIE.js";import"./index-C8meDON6.js";import"./renderedTicksSlice-CzSTMxGf.js";import"./index-BzMcqiTa.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-xqtu5zOX.js";import"./chartDataContext-GWmAYxkF.js";import"./CategoricalChart-Bgnt48NN.js";import"./CartesianAxis-DWyLKLt1.js";import"./Layer-BJ4Iw8RT.js";import"./Text-CagXdBG4.js";import"./DOMUtils-Dvaq5fYM.js";import"./useId-D2xBfPBM.js";import"./useBackwardsCompatibleTheme-CfEQJ-O-.js";import"./Label-CCBtX9go.js";import"./ZIndexLayer-BnBloPVM.js";import"./types-DE65RlUn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-Dpv_eB7t.js";import"./useAnimationId-CbwNnleB.js";import"./ActivePoints-DsO8E_yf.js";import"./Dot-DwijN6tl.js";import"./RegisterGraphicalItemId-CkaBE6dd.js";import"./GraphicalItemClipPath-BQ6wt6g2.js";import"./SetGraphicalItem-cPTjE6UA.js";import"./getRadiusAndStrokeWidthFromDot-DSbl8OKM.js";import"./ActiveShapeUtils-DL04WIzD.js";import"./Curve-DrKWfUOs.js";import"./step-uR5oqTHC.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-C_KRLiX1.js";import"./useElementOffset-CxyO0HMk.js";import"./uniqBy-mFdjf_gi.js";import"./iteratee-B3GlqRNc.js";import"./Cross-BLn3TIW2.js";import"./Rectangle-3j1HbpFj.js";import"./util-Dxo8gN5i.js";import"./Sector-Dbfwf-mJ.js";import"./Symbols-qPZ-o7VF.js";import"./symbol-D5c2VmH_.js";const Wt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Xt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var i,n,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(n=r.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var s,p,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Xt as __namedExportsOrder,Wt as default};
