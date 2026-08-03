import{r as A,R as t}from"./iframe-w1sUw1VE.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-BjXbyHB1.js";import{A as E}from"./AreaChart-BdaGFnq3.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CoEf9ips.js";import{X as g}from"./XAxis-Cjs911bp.js";import{Y as h}from"./YAxis-DDPi_wRf.js";import{A as a}from"./Area-DGiLJC75.js";import{T as u}from"./Tooltip-CdVD6gEW.js";import{R as k}from"./zIndexSlice-BFtIIbIH.js";import{L as v}from"./Legend-khSSA6cZ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-kdFU-RZ0.js";import"./index-B50wbS8k.js";import"./index-DREvHpCt.js";import"./index-CKtl8pQB.js";import"./index-JAlJc66Y.js";import"./throttle-9uSjnkRJ.js";import"./get-C2VjdU0L.js";import"./renderedTicksSlice-BYSsRx-Z.js";import"./axisSelectors-Fjy06-Ct.js";import"./resolveDefaultProps-DsVHMq00.js";import"./isWellBehavedNumber-B6HqUKYK.js";import"./d3-scale-BNSttRgc.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Cpc3KnxA.js";import"./chartDataContext-Qn0Ey9bz.js";import"./CategoricalChart-DPuU_nkZ.js";import"./CartesianAxis-CxEX_iq4.js";import"./Layer-B0FPP_Ev.js";import"./Text-BMcE5w5g.js";import"./DOMUtils-CT4eanyO.js";import"./Label-DclIafX4.js";import"./ZIndexLayer-BmjcQumE.js";import"./types-BKQwKiAc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-ws5do87s.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BO3fZMy0.js";import"./useAnimationId-oodeuVFJ.js";import"./ActivePoints-DgvIxblY.js";import"./Dot-0Sa9Tyfc.js";import"./RegisterGraphicalItemId-BXlJHdat.js";import"./GraphicalItemClipPath-DIJRkSkT.js";import"./SetGraphicalItem-DINcEBZn.js";import"./graphicalItemIdentity-B_W-R4bm.js";import"./ActiveShapeUtils-D_EfEkHZ.js";import"./Curve-C6IEG5wt.js";import"./step-DwoRKPdQ.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-BVXGcCTk.js";import"./useElementOffset-Bq1Ge05V.js";import"./uniqBy-Dg36dhD9.js";import"./iteratee-DSG09e17.js";import"./Cross-DqwDDtKx.js";import"./Rectangle-unJoww32.js";import"./util-Dxo8gN5i.js";import"./Sector-C0Ix5px1.js";import"./Symbols-BlaayCBT.js";import"./symbol-CiPnu7Sy.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Dt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Dt as __namedExportsOrder,Yt as default};
