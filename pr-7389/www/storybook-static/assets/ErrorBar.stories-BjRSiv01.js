import{c as r}from"./iframe-eXOzs3YY.js";import{g as s}from"./utils-ePvtT4un.js";import{E as i}from"./ErrorBar-DO_9j_fX.js";import{g as l}from"./zIndexSlice-CuY-7AxA.js";import{S as u}from"./ScatterChart-Dav-hpAK.js";import{C as p}from"./CartesianGrid-DrtA-ndd.js";import{X as y}from"./XAxis-25xD-jfg.js";import{Y as c}from"./YAxis-DwsIXpqe.js";import{S as d}from"./Scatter-DKmOaCcA.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-VPMddfpg.js";import"./get-DyNLp3_i.js";import"./resolveDefaultProps-DFOijNU4.js";import"./ErrorBarContext-C69bYVo4.js";import"./RechartsWrapper-BX65N_tr.js";import"./index-DS3rRRFa.js";import"./index-CIP6DqMy.js";import"./index-C3pdYAEU.js";import"./index-BeZCe1sB.js";import"./immer-DwC3AsAE.js";import"./renderedTicksSlice-Bq0EglVk.js";import"./axisSelectors-2h318yzI.js";import"./d3-scale-CfOtqMhF.js";import"./isWellBehavedNumber-AEitUNgh.js";import"./PolarUtils-CTnnDHZv.js";import"./RegisterGraphicalItemId-qKqyupEJ.js";import"./CategoricalChart-DeYGfYtA.js";import"./CSSTransitionAnimate-C-0OTUad.js";import"./useAnimationId-B5pCqy41.js";import"./ZIndexLayer-NeCcTin-.js";import"./CartesianChart-BbQfwcfl.js";import"./chartDataContext-CxkR6oQJ.js";import"./CartesianAxis-DRLBBJED.js";import"./Text-Geh_dgxu.js";import"./DOMUtils-CZvt8Baf.js";import"./Label-A2hDBNkM.js";import"./types-ty1UrU8J.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./ReactUtils-C6uVGLKp.js";import"./Curve-CaJWe8Oa.js";import"./step-a4qbb-H-.js";import"./path-DyVhHtw_.js";import"./tooltipContext-8A5g5vWG.js";import"./Symbols-CagsXnZZ.js";import"./symbol-Di5n8hly.js";import"./ActiveShapeUtils-DIEuoF9z.js";import"./GraphicalItemClipPath-BFD_fJ-h.js";import"./SetGraphicalItem-CWrfv76Z.js";const h=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}],n={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"400"}},defaultValue:400},animationEasing:{table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "spring" | BezierEasingFunction | SpringEasingFunction | `cubic-bezier(${number},${number},${number},${number})`'},category:"Animation",defaultValue:{summary:"ease-in-out"}},defaultValue:"ease-in-out"},dataKey:{description:"Decides how to extract the value of this ErrorBar from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this ErrorBar.\n\nThe error values can be a single value for symmetric error bars;\nor an array of a lower and upper error value for asymmetric error bars.",table:{type:{summary:"DataKey<DataPointType, DataValueType>"},category:"General"}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
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
