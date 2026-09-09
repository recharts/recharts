import{R as r}from"./iframe-CiBEWf8Q.js";import{g as s}from"./utils-ePvtT4un.js";import{E as i}from"./ErrorBar-CiL5Lhvr.js";import{R as p}from"./zIndexSlice-CF6C51G2.js";import{S as l}from"./ScatterChart-CvshEb2r.js";import{C as u}from"./CartesianGrid-Iviq5fOX.js";import{X as y}from"./XAxis-CbgzK4MI.js";import{Y as c}from"./YAxis-By5XyMD9.js";import{S as d}from"./Scatter-DndbfK8v.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-Cb-HZ0sR.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Cheer07s.js";import"./ErrorBarContext-BpAFB1gw.js";import"./RechartsWrapper-DwV4v4eg.js";import"./axisSelectors-B1sNcXcW.js";import"./throttle-Br6qQatL.js";import"./index-ChQP2zgF.js";import"./index-DQl4yRvy.js";import"./isWellBehavedNumber-CTCV4BvK.js";import"./d3-scale-DOQDVnBo.js";import"./index-B7Lle2z-.js";import"./index-4YB-Ccb_.js";import"./renderedTicksSlice-CoMChRdU.js";import"./index-2IKC_5hn.js";import"./PolarUtils-CTnnDHZv.js";import"./RegisterGraphicalItemId-CHeBqfEu.js";import"./useId-fAK_bkox.js";import"./CSSTransitionAnimate-B-NoWJAO.js";import"./useAnimationId-DjyXFux3.js";import"./util-Dxo8gN5i.js";import"./ZIndexLayer-D9-T3nqJ.js";import"./useBackwardsCompatibleTheme-CXlfy45z.js";import"./CartesianChart-J5V6zdaG.js";import"./chartDataContext-DDFLXgxQ.js";import"./CategoricalChart-D02G0NrG.js";import"./CartesianAxis-DSFQC2E9.js";import"./Text-CsV3VR-3.js";import"./DOMUtils-9fJMrmCV.js";import"./Label-DPc6TFRy.js";import"./types-P989fbDX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BvlvVcPM.js";import"./Curve-smW2CuEl.js";import"./step-CTJEDYn1.js";import"./path-DyVhHtw_.js";import"./tooltipContext-_PF8ziuh.js";import"./Symbols-DnAcSvRt.js";import"./symbol-BUPcR90A.js";import"./ActiveShapeUtils-BlIjGu9a.js";import"./GraphicalItemClipPath-DMEdIjUU.js";import"./SetGraphicalItem-CegZ7sSO.js";import"./graphicalItemIdentity-CdZfZkJ-.js";const h=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}],n={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"400"}},defaultValue:400},animationEasing:{table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "spring" | EasingFunction | `cubic-bezier(${number},${number},${number},${number})`'},category:"Animation",defaultValue:{summary:"ease-in-out"}},defaultValue:"ease-in-out"},dataKey:{description:"Decides how to extract the value of this ErrorBar from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this ErrorBar.\n\nThe error values can be a single value for symmetric error bars;\nor an array of a lower and upper error value for asymmetric error bars.",table:{type:{summary:"DataKey<DataPointType, DataValueType>"},category:"General"}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
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
