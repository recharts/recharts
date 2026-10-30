import{R as r}from"./iframe-3XHGwrzY.js";import{g as s}from"./utils-ePvtT4un.js";import{E as i}from"./ErrorBar-DEsd8qNt.js";import{R as p}from"./zIndexSlice-Brmhs58T.js";import{S as l}from"./ScatterChart-DUboF6Q6.js";import{C as u}from"./CartesianGrid-BrEtg7AT.js";import{X as y}from"./XAxis-DAbWxmV3.js";import{Y as c}from"./YAxis-BDE7drTG.js";import{S as d}from"./Scatter-DsF6uJEO.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-Cs_-jK6s.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-B1pnPDuf.js";import"./ErrorBarContext-N4SBTIIF.js";import"./RechartsWrapper-DFT9i2CK.js";import"./axisSelectors-0sscf7qw.js";import"./throttle-CcufCSOD.js";import"./index-DfXu2aPp.js";import"./index-x3pA7Xn9.js";import"./polarAxisSelectors-DX_jscyS.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DC4T9Y5K.js";import"./index-CxvxzVyz.js";import"./index-Bka_NUAq.js";import"./renderedTicksSlice-dj_CVdaS.js";import"./index-B22a4gCm.js";import"./dataEntryStyles-DQz1PP-z.js";import"./fillDefinitions-Czp8LH37.js";import"./ZIndexLayer-Da5OPXz2.js";import"./themeFill-BM4c2Gyu.js";import"./CSSTransitionAnimate-DL2ywsY6.js";import"./useAnimationId-9M90yRIF.js";import"./util-Dxo8gN5i.js";import"./CartesianChart-CeapXKiM.js";import"./ZIndexPortal-v1uidM1c.js";import"./CategoricalChart-D2_ES5Wf.js";import"./CartesianAxis-rPfnZIs4.js";import"./Text-BPYl0AVs.js";import"./DOMUtils-CArHkVGP.js";import"./Label-DV0q5jx7.js";import"./types-DBamYHnY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-KPZxqPb8.js";import"./activeStyles-Pcudkpr-.js";import"./Curve-BVBbiuI4.js";import"./step-DpyDB26Q.js";import"./path-DyVhHtw_.js";import"./tooltipContext-dsgQ_cgj.js";import"./Symbols-CVFCOhtY.js";import"./symbol-Bnf2KWTy.js";import"./ActiveShapeUtils-VZdYbIVb.js";import"./SetGraphicalItem-pMWsFYWu.js";import"./useEffectiveDataKey-3BqFsLAv.js";const h=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}],n={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"400"}},defaultValue:400},animationEasing:{table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "spring" | EasingFunction | `cubic-bezier(${number},${number},${number},${number})`'},category:"Animation",defaultValue:{summary:"ease-in-out"}},defaultValue:"ease-in-out"},dataKey:{description:"Decides how to extract the value of this ErrorBar from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this ErrorBar.\n\nThe error values can be a single value for symmetric error bars;\nor an array of a lower and upper error value for asymmetric error bars.",table:{type:{summary:"DataKey<DataPointType, DataValueType>"},category:"General"}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
In Scatter chart, "x" means horizontal error bars, "y" means vertical error bars.`,table:{type:{summary:"number | string"},category:"General"}},isAnimationActive:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"Animation",defaultValue:{summary:"true"}},defaultValue:!0},stroke:{description:'The stroke color. If "none", no line will be drawn.',control:{type:"color"},table:{type:{summary:"string"},category:"Style"}},strokeWidth:{description:"The width of the stroke",table:{type:{summary:"number | string"},category:"Style"}},width:{description:`Width of the error bar ends (the serifs) in pixels.
This is not the total width of the error bar, but just the width of the little lines at the ends.

The total width of the error bar is determined by the data value plus/minus the error value.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},zIndex:{control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},br={component:i,argTypes:n},e={render:m=>r.createElement(p,{width:"100%",height:500},r.createElement(l,{margin:{top:5,right:30,left:20,bottom:5},width:730,height:250},r.createElement(u,null),r.createElement(y,{dataKey:"x",type:"number"}),r.createElement(c,{dataKey:"y",type:"number"}),r.createElement(d,{data:h,fill:"#ff7300"},r.createElement(i,{dataKey:"errorY",...m})))),args:{...s(n),width:4,strokeWidth:2,stroke:"green",direction:"y",dataKey:"errorY"}},fr=["API"];var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={500}>
        <ScatterChart margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }} width={730} height={250}>
          <CartesianGrid />
          <XAxis dataKey="x" type="number" />
          <YAxis dataKey="y" type="number" />
          <Scatter data={errorData} fill="#ff7300">
            <ErrorBar dataKey="errorY" {...args} />
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(ErrorBarArgs),
    width: 4,
    strokeWidth: 2,
    stroke: 'green',
    direction: 'y',
    dataKey: 'errorY'
  }
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};export{e as API,fr as __namedExportsOrder,br as default};
