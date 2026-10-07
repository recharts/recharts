import{R as r}from"./iframe-d_I8TNCn.js";import{g as s}from"./utils-ePvtT4un.js";import{E as i}from"./ErrorBar-DMiv_nIR.js";import{R as p}from"./zIndexSlice-C86-Fd8c.js";import{S as l}from"./ScatterChart-Co7iCaM1.js";import{C as u}from"./CartesianGrid-Cpl905iN.js";import{X as y}from"./XAxis-CPk4rkW4.js";import{Y as c}from"./YAxis-ST75xEtc.js";import{S as d}from"./Scatter-DTGg4DSK.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-yfSSiW9J.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DvL_oRGd.js";import"./ErrorBarContext-D8HRGdCI.js";import"./RechartsWrapper-BhDfTeaQ.js";import"./axisSelectors-DS1SwPss.js";import"./throttle-Dub4vgX-.js";import"./index-Basp38ZP.js";import"./index-KJ9I69Vp.js";import"./isWellBehavedNumber-BiGXAn6V.js";import"./d3-scale-BHQnpvaw.js";import"./index-Bk90M1L4.js";import"./index-IVp7d0na.js";import"./renderedTicksSlice-D-j8NF5Q.js";import"./index-BDSLAMRI.js";import"./PolarUtils-CTnnDHZv.js";import"./RegisterGraphicalItemId-dmq8PwmH.js";import"./useId-CcoqHBc4.js";import"./CSSTransitionAnimate-7TIClNG1.js";import"./useAnimationId-BWx9Rtft.js";import"./util-Dxo8gN5i.js";import"./ZIndexLayer-CUsrGrDa.js";import"./useBackwardsCompatibleTheme-0Rfjr95D.js";import"./CartesianChart-BkYu52zN.js";import"./chartDataContext-C_MhBuQy.js";import"./CategoricalChart-BaXgxPjJ.js";import"./CartesianAxis-C7wfh-vo.js";import"./Text--rvXV2DW.js";import"./DOMUtils-CklqBmUp.js";import"./Label-C6LY1R7r.js";import"./types-Dqfpifaw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-b-EDeVK-.js";import"./Curve-7i5iRSvm.js";import"./step-Zcc4_rmH.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CLKStnNX.js";import"./Symbols-DJZzxzfQ.js";import"./symbol-B80ww2zL.js";import"./ActiveShapeUtils-ByVz5Hkp.js";import"./GraphicalItemClipPath-BVkKFKzE.js";import"./SetGraphicalItem-q_w6KGtf.js";import"./useGraphicalItemIdentity-BG-BVB46.js";import"./dataEntryStyles-3xIOSnmo.js";const h=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}],n={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"400"}},defaultValue:400},animationEasing:{table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "spring" | EasingFunction | `cubic-bezier(${number},${number},${number},${number})`'},category:"Animation",defaultValue:{summary:"ease-in-out"}},defaultValue:"ease-in-out"},dataKey:{description:"Decides how to extract the value of this ErrorBar from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this ErrorBar.\n\nThe error values can be a single value for symmetric error bars;\nor an array of a lower and upper error value for asymmetric error bars.",table:{type:{summary:"DataKey<DataPointType, DataValueType>"},category:"General"}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
In Scatter chart, "x" means horizontal error bars, "y" means vertical error bars.`,table:{type:{summary:"number | string"},category:"General"}},isAnimationActive:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"Animation",defaultValue:{summary:"true"}},defaultValue:!0},stroke:{description:'The stroke color. If "none", no line will be drawn.',control:{type:"color"},table:{type:{summary:"string"},category:"Style"}},strokeWidth:{description:"The width of the stroke",table:{type:{summary:"number | string"},category:"Style"}},width:{description:`Width of the error bar ends (the serifs) in pixels.
This is not the total width of the error bar, but just the width of the little lines at the ends.

The total width of the error bar is determined by the data value plus/minus the error value.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},zIndex:{control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},fr={component:i,argTypes:n},e={render:m=>r.createElement(p,{width:"100%",height:500},r.createElement(l,{margin:{top:5,right:30,left:20,bottom:5},width:730,height:250},r.createElement(u,null),r.createElement(y,{dataKey:"x",type:"number"}),r.createElement(c,{dataKey:"y",type:"number"}),r.createElement(d,{data:h,fill:"#ff7300"},r.createElement(i,{dataKey:"errorY",...m})))),args:{...s(n),width:4,strokeWidth:2,stroke:"green",direction:"y",dataKey:"errorY"}},gr=["API"];var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};export{e as API,gr as __namedExportsOrder,fr as default};
