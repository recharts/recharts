import{R as r}from"./iframe-Cd5XZAZS.js";import{g as s}from"./utils-ePvtT4un.js";import{E as i}from"./ErrorBar-DUnYzjeH.js";import{R as p}from"./zIndexSlice-DK_btX6x.js";import{S as l}from"./ScatterChart-CC9FDsVn.js";import{C as u}from"./CartesianGrid-DTeDcwP-.js";import{X as y}from"./XAxis-DuodIejs.js";import{Y as c}from"./YAxis-BKK4Q1hO.js";import{S as d}from"./Scatter-BF8awt19.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-B_2Ec-2K.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-_VGnYbPZ.js";import"./ErrorBarContext-BXlIU5Wf.js";import"./RechartsWrapper-m0J5sskz.js";import"./axisSelectors-BHI5fpRs.js";import"./throttle-PHSKRlho.js";import"./index-B-TxKf-H.js";import"./index-Co6Bjw3c.js";import"./polarAxisSelectors-n6B6BMl9.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CgwU88kX.js";import"./index-CvnUfrKo.js";import"./index-DVl92vRy.js";import"./renderedTicksSlice-DPOz0IRP.js";import"./index-xt3fboRF.js";import"./fillDefinitions-DUfOk_XW.js";import"./dataEntryStyles-CotdwlGF.js";import"./Label-DZuK-EQs.js";import"./Text-wtrDapFR.js";import"./ZIndexLayer-CbCfhAbh.js";import"./CSSTransitionAnimate-DgUqiUtD.js";import"./useAnimationId-_tPgr2CA.js";import"./util-Dxo8gN5i.js";import"./CartesianChart-DgF2iEt1.js";import"./chartDataContext-BT9LVt8h.js";import"./CategoricalChart-CUQRrDXZ.js";import"./CartesianAxis-DJMJDg5E.js";import"./types-GkAdah5a.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-BcTmj77e.js";import"./Curve-CXblHPne.js";import"./step-Cqk_pcFb.js";import"./path-DyVhHtw_.js";import"./tooltipContext-C82edudL.js";import"./Symbols-CoJLGMis.js";import"./symbol-ZYu2ZO_N.js";import"./ActiveShapeUtils-ckMpYydv.js";import"./SetGraphicalItem-pIsvI9Mb.js";import"./useEffectiveDataKey-Cop8dd2N.js";const h=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}],n={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"400"}},defaultValue:400},animationEasing:{table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "spring" | EasingFunction | `cubic-bezier(${number},${number},${number},${number})`'},category:"Animation",defaultValue:{summary:"ease-in-out"}},defaultValue:"ease-in-out"},dataKey:{description:"Decides how to extract the value of this ErrorBar from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this ErrorBar.\n\nThe error values can be a single value for symmetric error bars;\nor an array of a lower and upper error value for asymmetric error bars.",table:{type:{summary:"DataKey<DataPointType, DataValueType>"},category:"General"}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
In Scatter chart, "x" means horizontal error bars, "y" means vertical error bars.`,table:{type:{summary:"number | string"},category:"General"}},isAnimationActive:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"Animation",defaultValue:{summary:"true"}},defaultValue:!0},stroke:{description:'The stroke color. If "none", no line will be drawn.',control:{type:"color"},table:{type:{summary:"string"},category:"Style"}},strokeWidth:{description:"The width of the stroke",table:{type:{summary:"number | string"},category:"Style"}},width:{description:`Width of the error bar ends (the serifs) in pixels.
This is not the total width of the error bar, but just the width of the little lines at the ends.

The total width of the error bar is determined by the data value plus/minus the error value.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},zIndex:{control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},cr={component:i,argTypes:n},e={render:m=>r.createElement(p,{width:"100%",height:500},r.createElement(l,{margin:{top:5,right:30,left:20,bottom:5},width:730,height:250},r.createElement(u,null),r.createElement(y,{dataKey:"x",type:"number"}),r.createElement(c,{dataKey:"y",type:"number"}),r.createElement(d,{data:h,fill:"#ff7300"},r.createElement(i,{dataKey:"errorY",...m})))),args:{...s(n),width:4,strokeWidth:2,stroke:"green",direction:"y",dataKey:"errorY"}},dr=["API"];var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};export{e as API,dr as __namedExportsOrder,cr as default};
