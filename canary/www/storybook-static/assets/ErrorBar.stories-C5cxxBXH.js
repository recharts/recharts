import{e as r}from"./iframe-h5CV-Rcn.js";import{g as s}from"./utils-ePvtT4un.js";import{E as i}from"./ErrorBar-BQVthak_.js";import{R as l}from"./arrayEqualityCheck-ANgy1i9u.js";import{S as p}from"./ScatterChart-CQX-UJYQ.js";import{C as u}from"./CartesianGrid-Ce31yJWO.js";import{X as y}from"./XAxis-DJ5PnZv1.js";import{Y as c}from"./YAxis-C2a8cqyi.js";import{S as d}from"./Scatter-CtqWb2O8.js";import{R as h}from"./RechartsHookInspector-aIveFv2Z.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-wxMTYWnZ.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B2Z0u3RB.js";import"./ErrorBarContext-BMIPJTH3.js";import"./RechartsWrapper-DDGX7JTv.js";import"./index-DX1weHGw.js";import"./immer-CtltHNiU.js";import"./hooks-Cj5zxCap.js";import"./axisSelectors-CS0Gz9QT.js";import"./d3-scale-ezQ-I_PQ.js";import"./zIndexSlice-Ca__6ThW.js";import"./renderedTicksSlice-D6PrsZnk.js";import"./PolarUtils-CTnnDHZv.js";import"./RegisterGraphicalItemId-DtcV1RZB.js";import"./CSSTransitionAnimate-gNew0ORj.js";import"./useAnimationId-DviPtx6L.js";import"./ZIndexLayer-Ca4oOtQE.js";import"./CartesianChart-D92F_vnb.js";import"./chartDataContext-DblKe8Ss.js";import"./CategoricalChart-CjLLFuSG.js";import"./CartesianAxis-Xrizv51e.js";import"./Text-guYC2Xjr.js";import"./DOMUtils-DWY4ljAG.js";import"./Label-CVl-fQEc.js";import"./types-BA97OiOO.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BBFoxYe1.js";import"./Curve-Br2Il0bq.js";import"./step-oPLXy2cm.js";import"./tooltipContext-Cp5c1SCJ.js";import"./Symbols-BjDCCe4r.js";import"./symbol-BfwBQG5X.js";import"./ActiveShapeUtils-7Gb1tHPG.js";import"./isPlainObject-ByvTdsK-.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BxYiR-g6.js";import"./Trapezoid-CeuEkWeu.js";import"./Sector-sEDjKq2Y.js";import"./GraphicalItemClipPath-cwCUl8BP.js";import"./SetGraphicalItem-CaZ4MYuw.js";import"./index-D_mIMI9F.js";import"./ChartSizeDimensions-BotkTU91.js";import"./OffsetShower-BoyHPNkq.js";import"./PlotAreaShower-DoB2hHNO.js";const f=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}],n={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"400"}},defaultValue:400},animationEasing:{table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "spring" | BezierEasingFunction | SpringEasingFunction | `cubic-bezier(${number},${number},${number},${number})`'},category:"Animation",defaultValue:{summary:"ease-in-out"}},defaultValue:"ease-in-out"},dataKey:{description:"Decides how to extract the value of this ErrorBar from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this ErrorBar.\n\nThe error values can be a single value for symmetric error bars;\nor an array of a lower and upper error value for asymmetric error bars.",table:{type:{summary:"DataKey<DataPointType, DataValueType>"},category:"General"}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
In Scatter chart, "x" means horizontal error bars, "y" means vertical error bars.`,table:{type:{summary:"number | string"},category:"General"}},isAnimationActive:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"Animation",defaultValue:{summary:"true"}},defaultValue:!0},stroke:{description:'The stroke color. If "none", no line will be drawn.',control:{type:"color"},table:{type:{summary:"string"},category:"Style",defaultValue:{summary:"black"}},defaultValue:"black"},strokeWidth:{description:"The width of the stroke",table:{type:{summary:"number | string"},category:"Style",defaultValue:{summary:"1.5"}},defaultValue:1.5},width:{description:`Width of the error bar ends (the serifs) in pixels.
This is not the total width of the error bar, but just the width of the little lines at the ends.

The total width of the error bar is determined by the data value plus/minus the error value.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},zIndex:{control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},gr={component:i,argTypes:n},e={render:m=>r.createElement(l,{width:"100%",height:500},r.createElement(p,{margin:{top:5,right:30,left:20,bottom:5},width:730,height:250},r.createElement(u,null),r.createElement(y,{dataKey:"x",type:"number"}),r.createElement(c,{dataKey:"y",type:"number"}),r.createElement(d,{data:f,fill:"#ff7300"},r.createElement(i,{dataKey:"errorY",...m})),r.createElement(h,null))),args:{...s(n),width:4,strokeWidth:2,stroke:"green",direction:"y",dataKey:"errorY"}};var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const xr=["API"];export{e as API,xr as __namedExportsOrder,gr as default};
