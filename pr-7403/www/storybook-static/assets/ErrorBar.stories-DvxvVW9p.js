import{c as r}from"./iframe-CaARQ0s4.js";import{g as s}from"./utils-ePvtT4un.js";import{E as i}from"./ErrorBar-D7eJuE6P.js";import{g as l}from"./zIndexSlice-CT6cs3HE.js";import{S as u}from"./ScatterChart-fIQrwqfV.js";import{C as p}from"./CartesianGrid-DdGXK1fO.js";import{X as y}from"./XAxis-CMZlUJn9.js";import{Y as c}from"./YAxis-Cf1zna9j.js";import{S as d}from"./Scatter-poUjR3Ku.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-CrNDeidH.js";import"./get-CO6N6w1L.js";import"./resolveDefaultProps-B52lcPQI.js";import"./ErrorBarContext-B2OH1xFp.js";import"./RechartsWrapper-BhQjrq0m.js";import"./index-B_8hMxBA.js";import"./index-DNa9UEyx.js";import"./index-BPXM-FiZ.js";import"./index-BihqodT2.js";import"./immer-DoZyPWPm.js";import"./renderedTicksSlice-MMq6D890.js";import"./axisSelectors-BR_tDNDG.js";import"./d3-scale-BQLIct9Q.js";import"./isWellBehavedNumber-D2fOOboq.js";import"./PolarUtils-CTnnDHZv.js";import"./RegisterGraphicalItemId-s6qV58ed.js";import"./CategoricalChart-CAffiMXn.js";import"./CSSTransitionAnimate-DRPdMM-Z.js";import"./useAnimationId-9oP4gOjo.js";import"./ZIndexLayer-BSRcolRF.js";import"./CartesianChart-CtVi6KY7.js";import"./chartDataContext-B9lvWDA4.js";import"./CartesianAxis-CKiY6dqA.js";import"./Text-V5D_mpos.js";import"./DOMUtils-_DsZOp5Z.js";import"./Label-COAzSUqp.js";import"./types-v4PqfPoB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./ReactUtils-BDfejln-.js";import"./Curve-aG6LIP1X.js";import"./step-Oxw9Oqwn.js";import"./path-DyVhHtw_.js";import"./tooltipContext-xP0DYZ-p.js";import"./Symbols-J_X5bPew.js";import"./symbol-DX4-dAWc.js";import"./ActiveShapeUtils-DYy5kA1Z.js";import"./GraphicalItemClipPath-ZB8y26XE.js";import"./SetGraphicalItem-CLCCJcFS.js";const h=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}],n={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"400"}},defaultValue:400},animationEasing:{table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "spring" | BezierEasingFunction | SpringEasingFunction | `cubic-bezier(${number},${number},${number},${number})`'},category:"Animation",defaultValue:{summary:"ease-in-out"}},defaultValue:"ease-in-out"},dataKey:{description:"Decides how to extract the value of this ErrorBar from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this ErrorBar.\n\nThe error values can be a single value for symmetric error bars;\nor an array of a lower and upper error value for asymmetric error bars.",table:{type:{summary:"DataKey<DataPointType, DataValueType>"},category:"General"}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
In Scatter chart, "x" means horizontal error bars, "y" means vertical error bars.`,table:{type:{summary:"number | string"},category:"General"}},isAnimationActive:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"Animation",defaultValue:{summary:"true"}},defaultValue:!0},stroke:{description:'The stroke color. If "none", no line will be drawn.',control:{type:"color"},table:{type:{summary:"string"},category:"Style",defaultValue:{summary:"black"}},defaultValue:"black"},strokeWidth:{description:"The width of the stroke",table:{type:{summary:"number | string"},category:"Style",defaultValue:{summary:"1.5"}},defaultValue:1.5},width:{description:`Width of the error bar ends (the serifs) in pixels.
This is not the total width of the error bar, but just the width of the little lines at the ends.

The total width of the error bar is determined by the data value plus/minus the error value.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},zIndex:{control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},ur={component:i,argTypes:n},e={render:m=>r.createElement(l,{width:"100%",height:500},r.createElement(u,{margin:{top:5,right:30,left:20,bottom:5},width:730,height:250},r.createElement(p,null),r.createElement(y,{dataKey:"x",type:"number"}),r.createElement(c,{dataKey:"y",type:"number"}),r.createElement(d,{data:h,fill:"#ff7300"},r.createElement(i,{dataKey:"errorY",...m})))),args:{...s(n),width:4,strokeWidth:2,stroke:"green",direction:"y",dataKey:"errorY"}};var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const pr=["API"];export{e as API,pr as __namedExportsOrder,ur as default};
