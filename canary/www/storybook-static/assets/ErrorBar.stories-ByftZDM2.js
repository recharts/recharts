import{R as r}from"./iframe-D972tbhF.js";import{g as s}from"./utils-ePvtT4un.js";import{E as i}from"./ErrorBar-30VLMlTW.js";import{R as l}from"./zIndexSlice-Dmvy26G-.js";import{S as u}from"./ScatterChart-ScjEGFIl.js";import{C as p}from"./CartesianGrid-CY_9Ffyk.js";import{X as y}from"./XAxis-QP_2w1I7.js";import{Y as d}from"./YAxis-MB1xCt9L.js";import{S as c}from"./Scatter-BYhPPNK2.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-C5RVdPDc.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D_CwbNhq.js";import"./ErrorBarContext-DNvNglsi.js";import"./RechartsWrapper-ouFvztbg.js";import"./index-oKVWKKHt.js";import"./index-zPQcggW0.js";import"./index-D9VN6yju.js";import"./index-C5z2sCvf.js";import"./throttle-D2OThsuy.js";import"./axisSelectors-uJIqnO2D.js";import"./isWellBehavedNumber-CISTmZa5.js";import"./d3-scale-CR9xOcuY.js";import"./renderedTicksSlice-Dv4CGxUS.js";import"./PolarUtils-CTnnDHZv.js";import"./RegisterGraphicalItemId-ySe1Fca9.js";import"./CategoricalChart-DKJz-sZX.js";import"./CSSTransitionAnimate-CXkuJZu8.js";import"./useAnimationId-BPwHrlOs.js";import"./util-Dxo8gN5i.js";import"./ZIndexLayer-Dhusbhig.js";import"./CartesianChart-BjAe6VAT.js";import"./chartDataContext-Cq56uXGO.js";import"./CartesianAxis-B06URywl.js";import"./Text-Dysxol0f.js";import"./DOMUtils-DPBa-ha3.js";import"./Label-BZnc8KKN.js";import"./types-DLeA2L4w.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-C7EwwBej.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-2p3qtLJi.js";import"./Curve-DGKxAkYd.js";import"./step-9Pc3Vsuh.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Bu4qlIUV.js";import"./Symbols-duaXYgIE.js";import"./symbol-v0Ok8s8m.js";import"./ActiveShapeUtils-D5m6KacQ.js";import"./GraphicalItemClipPath-DuVjniBd.js";import"./SetGraphicalItem-EZqGepIx.js";const h=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}],m={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"400"}},defaultValue:400},animationEasing:{table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "spring" | EasingFunction | `cubic-bezier(${number},${number},${number},${number})`'},category:"Animation",defaultValue:{summary:"ease-in-out"}},defaultValue:"ease-in-out"},dataKey:{description:"Decides how to extract the value of this ErrorBar from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this ErrorBar.\n\nThe error values can be a single value for symmetric error bars;\nor an array of a lower and upper error value for asymmetric error bars.",table:{type:{summary:"DataKey<DataPointType, DataValueType>"},category:"General"}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
In Scatter chart, "x" means horizontal error bars, "y" means vertical error bars.`,table:{type:{summary:"number | string"},category:"General"}},isAnimationActive:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"Animation",defaultValue:{summary:"true"}},defaultValue:!0},stroke:{description:'The stroke color. If "none", no line will be drawn.',control:{type:"color"},table:{type:{summary:"string"},category:"Style",defaultValue:{summary:"black"}},defaultValue:"black"},strokeWidth:{description:"The width of the stroke",table:{type:{summary:"number | string"},category:"Style",defaultValue:{summary:"1.5"}},defaultValue:1.5},width:{description:`Width of the error bar ends (the serifs) in pixels.
This is not the total width of the error bar, but just the width of the little lines at the ends.

The total width of the error bar is determined by the data value plus/minus the error value.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},zIndex:{control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},dr={component:i,argTypes:m},e={render:n=>r.createElement(l,{width:"100%",height:500},r.createElement(u,{margin:{top:5,right:30,left:20,bottom:5},width:730,height:250},r.createElement(p,null),r.createElement(y,{dataKey:"x",type:"number"}),r.createElement(d,{dataKey:"y",type:"number"}),r.createElement(c,{data:h,fill:"#ff7300"},r.createElement(i,{dataKey:"errorY",...n})))),args:{...s(m),width:4,strokeWidth:2,stroke:"green",direction:"y",dataKey:"errorY"}};var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const cr=["API"];export{e as API,cr as __namedExportsOrder,dr as default};
