import{R as r}from"./iframe-DDa7m_LV.js";import{g as s}from"./utils-ePvtT4un.js";import{E as i}from"./ErrorBar-e9mbN1Dz.js";import{R as l}from"./zIndexSlice-BGDMq11w.js";import{S as u}from"./ScatterChart-CZT3hVWG.js";import{C as p}from"./CartesianGrid-CdszM2Fl.js";import{X as y}from"./XAxis-C_90q5ur.js";import{Y as d}from"./YAxis-BVn2_RdR.js";import{S as c}from"./Scatter-DfoLW6M1.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-DzM6lalT.js";import"./get-BkRD0rv1.js";import"./resolveDefaultProps-_rtxDhh1.js";import"./ErrorBarContext-Cme-vC5F.js";import"./RechartsWrapper-BP1nC8TI.js";import"./index-xetC29GH.js";import"./index-Dqdzi7xh.js";import"./index-DKvxLdaY.js";import"./index-CQwxmzXl.js";import"./immer-CDcbaTsx.js";import"./renderedTicksSlice-BldZtaeN.js";import"./axisSelectors-B-E6faSk.js";import"./d3-scale-lQF3DEYD.js";import"./isWellBehavedNumber-BpYCTIWP.js";import"./PolarUtils-CTnnDHZv.js";import"./RegisterGraphicalItemId-D1XWxMPg.js";import"./CategoricalChart-B4hxnAvN.js";import"./CSSTransitionAnimate-C_5jkgBS.js";import"./useAnimationId-DndzYlXq.js";import"./util-Dxo8gN5i.js";import"./ZIndexLayer-DErURTRW.js";import"./CartesianChart-DQyQReh2.js";import"./chartDataContext-BCuk8KYe.js";import"./CartesianAxis-BYwyVqNa.js";import"./Text-CRfJilvw.js";import"./DOMUtils-jl9bWopj.js";import"./Label-CwmoSFs2.js";import"./types-BQpkl3V-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-B4Or3-X4.js";import"./Curve-1MKNX4lJ.js";import"./step-xwmEGnAg.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BJ-FXG7W.js";import"./Symbols-Cgr_wvH7.js";import"./symbol-C7zFXdlA.js";import"./ActiveShapeUtils-CUSMx5gC.js";import"./GraphicalItemClipPath-CN8GtY4s.js";import"./SetGraphicalItem-DU_Y3HPI.js";const h=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}],n={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"400"}},defaultValue:400},animationEasing:{table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "spring" | EasingFunction | `cubic-bezier(${number},${number},${number},${number})`'},category:"Animation",defaultValue:{summary:"ease-in-out"}},defaultValue:"ease-in-out"},dataKey:{description:"Decides how to extract the value of this ErrorBar from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this ErrorBar.\n\nThe error values can be a single value for symmetric error bars;\nor an array of a lower and upper error value for asymmetric error bars.",table:{type:{summary:"DataKey<DataPointType, DataValueType>"},category:"General"}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
In Scatter chart, "x" means horizontal error bars, "y" means vertical error bars.`,table:{type:{summary:"number | string"},category:"General"}},isAnimationActive:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"Animation",defaultValue:{summary:"true"}},defaultValue:!0},stroke:{description:'The stroke color. If "none", no line will be drawn.',control:{type:"color"},table:{type:{summary:"string"},category:"Style",defaultValue:{summary:"black"}},defaultValue:"black"},strokeWidth:{description:"The width of the stroke",table:{type:{summary:"number | string"},category:"Style",defaultValue:{summary:"1.5"}},defaultValue:1.5},width:{description:`Width of the error bar ends (the serifs) in pixels.
This is not the total width of the error bar, but just the width of the little lines at the ends.

The total width of the error bar is determined by the data value plus/minus the error value.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},zIndex:{control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},pr={component:i,argTypes:n},e={render:m=>r.createElement(l,{width:"100%",height:500},r.createElement(u,{margin:{top:5,right:30,left:20,bottom:5},width:730,height:250},r.createElement(p,null),r.createElement(y,{dataKey:"x",type:"number"}),r.createElement(d,{dataKey:"y",type:"number"}),r.createElement(c,{data:h,fill:"#ff7300"},r.createElement(i,{dataKey:"errorY",...m})))),args:{...s(n),width:4,strokeWidth:2,stroke:"green",direction:"y",dataKey:"errorY"}};var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const yr=["API"];export{e as API,yr as __namedExportsOrder,pr as default};
