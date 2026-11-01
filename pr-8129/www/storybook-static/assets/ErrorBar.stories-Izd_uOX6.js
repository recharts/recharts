import{R as r}from"./iframe-0ard7KC3.js";import{g as s}from"./utils-ePvtT4un.js";import{E as i}from"./ErrorBar-C_iavGu0.js";import{R as p}from"./zIndexSlice-D6_sdm0t.js";import{S as l}from"./ScatterChart-DEq1IDov.js";import{C as u}from"./CartesianGrid-BbGeSlEt.js";import{X as y}from"./XAxis-BVBrGZek.js";import{Y as c}from"./YAxis-DAk7UonM.js";import{S as d}from"./Scatter-CiqK3_QV.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-C0FwdD0E.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BPB9Gu5f.js";import"./ErrorBarContext-Dy4MR2nb.js";import"./RechartsWrapper-BOxuYrqk.js";import"./axisSelectors-Cr_3x7-m.js";import"./throttle-1OYicAaw.js";import"./index-BOEtp96n.js";import"./index-JVAEaqaY.js";import"./polarAxisSelectors-3HyfX2K5.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CLPwnwVf.js";import"./index-9PVjWb0J.js";import"./index-CsSqo8aU.js";import"./renderedTicksSlice-D50-krNg.js";import"./index-ByhU0DDr.js";import"./dataEntryStyles-BOdZqKVH.js";import"./fillDefinitions-CarsCIb_.js";import"./pageBackground-C8Mqnqon.js";import"./CSSTransitionAnimate-B5a3OUaB.js";import"./useAnimationId-DI_YvP-u.js";import"./util-Dxo8gN5i.js";import"./ZIndexLayer-Xk93xkJ7.js";import"./CartesianChart-CQQLqvcY.js";import"./ZIndexPortal-Cak7rTbR.js";import"./CategoricalChart-DbqXM1OT.js";import"./CartesianAxis-CO2WQovg.js";import"./Text-BVN9ck4W.js";import"./DOMUtils-DPHrecH2.js";import"./Label-Bzl5TsqO.js";import"./types-DiLmbnVu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-fTXqNJ75.js";import"./activeStyles-7ntMjbeG.js";import"./Curve-N3TADMlP.js";import"./step-Qo2aOxrQ.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Z31KWbAp.js";import"./Symbols-lsHxNSE5.js";import"./symbol-BoiiS6VD.js";import"./ActiveShapeUtils-Uo1E3VyC.js";import"./SetGraphicalItem-CY1fZPiL.js";import"./useEffectiveDataKey-BiPIBSbw.js";const h=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}],n={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"400"}},defaultValue:400},animationEasing:{table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "spring" | EasingFunction | `cubic-bezier(${number},${number},${number},${number})`'},category:"Animation",defaultValue:{summary:"ease-in-out"}},defaultValue:"ease-in-out"},dataKey:{description:"Decides how to extract the value of this ErrorBar from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this ErrorBar.\n\nThe error values can be a single value for symmetric error bars;\nor an array of a lower and upper error value for asymmetric error bars.",table:{type:{summary:"DataKey<DataPointType, DataValueType>"},category:"General"}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
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
