import{e as r}from"./iframe-Bcfp4gz2.js";import{g as s}from"./utils-ePvtT4un.js";import{E as i}from"./ErrorBar-B-EgTW04.js";import{R as l}from"./arrayEqualityCheck-C7nhyHTD.js";import{S as p}from"./ScatterChart-BOZW76mS.js";import{C as u}from"./CartesianGrid-BqOAHNSB.js";import{X as y}from"./XAxis-vG8PL4e8.js";import{Y as c}from"./YAxis-B-SMb25K.js";import{S as d}from"./Scatter-B8vvA9Py.js";import{R as h}from"./RechartsHookInspector-BszpLvid.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-dm3uY3ni.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BFYcbhKc.js";import"./ErrorBarContext-DI9yyOgU.js";import"./RechartsWrapper-oIgYQ0Bc.js";import"./index-DWGu8Hbo.js";import"./immer-BOB4YBM5.js";import"./hooks-BDG_pI4i.js";import"./axisSelectors-m2hcYKPS.js";import"./d3-scale-asomCCUw.js";import"./zIndexSlice-B4mf_ahs.js";import"./renderedTicksSlice-DoKS3HBz.js";import"./PolarUtils-CTnnDHZv.js";import"./RegisterGraphicalItemId-CieNk-m4.js";import"./CSSTransitionAnimate-CKueD_Jj.js";import"./useAnimationId-DPbHG1Kj.js";import"./ZIndexLayer-CN_pcG12.js";import"./CartesianChart-DUoDAX5X.js";import"./chartDataContext-DRkSLvZO.js";import"./CategoricalChart-DMKrtdHX.js";import"./CartesianAxis-BD2FdChl.js";import"./Text-BwYljqkd.js";import"./DOMUtils-LPbE6vOu.js";import"./Label-CPi3yA0f.js";import"./types-CW3aex39.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CDQ4T4jj.js";import"./Curve-t8yIlp7a.js";import"./step-B9DAnMjl.js";import"./tooltipContext-BoMfuBa9.js";import"./Symbols-CWxW6NbL.js";import"./symbol-Blzy8oY_.js";import"./ActiveShapeUtils-CMXUA0Jt.js";import"./isPlainObject-Bh7-lls7.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Cckl3Elf.js";import"./Trapezoid-BX_HaGLv.js";import"./Sector-B02xc5N3.js";import"./GraphicalItemClipPath-DfLgheiY.js";import"./SetGraphicalItem-Brvtr_jy.js";import"./index-CTn1De8H.js";import"./ChartSizeDimensions-BtWRNYOc.js";import"./OffsetShower-BUjaH3s6.js";import"./PlotAreaShower-B0TzAHKQ.js";const f=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}],n={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"400"}},defaultValue:400},animationEasing:{table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "spring" | BezierEasingFunction | SpringEasingFunction | `cubic-bezier(${number},${number},${number},${number})`'},category:"Animation",defaultValue:{summary:"ease-in-out"}},defaultValue:"ease-in-out"},dataKey:{description:"Decides how to extract the value of this ErrorBar from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this ErrorBar.\n\nThe error values can be a single value for symmetric error bars;\nor an array of a lower and upper error value for asymmetric error bars.",table:{type:{summary:"DataKey<DataPointType, DataValueType>"},category:"General"}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
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
