import{e as r}from"./iframe-BVwI20TL.js";import{g as s}from"./utils-ePvtT4un.js";import{E as i}from"./ErrorBar-B3Th9qvc.js";import{R as l}from"./arrayEqualityCheck-q35BrOAH.js";import{S as p}from"./ScatterChart-DVEkb1TT.js";import{C as u}from"./CartesianGrid-DjH5RQr0.js";import{X as y}from"./XAxis-Luh5ls2c.js";import{Y as c}from"./YAxis-CkI3VGvs.js";import{S as d}from"./Scatter-BwOxl6wV.js";import{R as h}from"./RechartsHookInspector-DZcmofN9.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-BmJqKhGN.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-PLOIW3pB.js";import"./ErrorBarContext-B-N11lls.js";import"./RechartsWrapper-B1ccuPti.js";import"./index-aBikmdLQ.js";import"./immer-CKYyw7I3.js";import"./hooks-DZGA03xX.js";import"./axisSelectors-BSaMlK4p.js";import"./d3-scale-DIeSkgov.js";import"./zIndexSlice-CZKvoJNP.js";import"./renderedTicksSlice-B3vc9s72.js";import"./PolarUtils-CTnnDHZv.js";import"./RegisterGraphicalItemId-8gcs_7Mt.js";import"./CSSTransitionAnimate-CYK-WRNB.js";import"./useAnimationId-CflNsn_7.js";import"./ZIndexLayer-BZIg8_TU.js";import"./CartesianChart-B_CBLak0.js";import"./chartDataContext-yFkjRteM.js";import"./CategoricalChart-CfauKlBd.js";import"./CartesianAxis-lBH2hlA3.js";import"./Text-CcVVjC8p.js";import"./DOMUtils-aQVlIlVH.js";import"./Label-3Z8b_JxM.js";import"./types-BIqLm2SJ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-dYl2dBOE.js";import"./Curve-Bi3if4gv.js";import"./step-BWajvomR.js";import"./tooltipContext-Dv2nrJXA.js";import"./Symbols-DeCFkgF7.js";import"./symbol-D_Kx8u1W.js";import"./ActiveShapeUtils-BmYZJk21.js";import"./isPlainObject-BNX6QwlN.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B_wHaT59.js";import"./Trapezoid-C9IYD2pk.js";import"./Sector-B_oSB9k0.js";import"./GraphicalItemClipPath-D5L_NXCW.js";import"./SetGraphicalItem-dD-mjnVv.js";import"./index-DF74iLY4.js";import"./ChartSizeDimensions-BbmTVycb.js";import"./OffsetShower-DUJyuqc9.js";import"./PlotAreaShower-Dc_-yokV.js";const f=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}],n={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"400"}},defaultValue:400},animationEasing:{table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "spring" | BezierEasingFunction | SpringEasingFunction | `cubic-bezier(${number},${number},${number},${number})`'},category:"Animation",defaultValue:{summary:"ease-in-out"}},defaultValue:"ease-in-out"},dataKey:{description:"Decides how to extract the value of this ErrorBar from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this ErrorBar.\n\nThe error values can be a single value for symmetric error bars;\nor an array of a lower and upper error value for asymmetric error bars.",table:{type:{summary:"DataKey<DataPointType, DataValueType>"},category:"General"}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
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
