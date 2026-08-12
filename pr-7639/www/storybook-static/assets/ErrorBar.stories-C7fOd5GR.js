import{R as r}from"./iframe-CVyYUHBB.js";import{g as s}from"./utils-ePvtT4un.js";import{E as i}from"./ErrorBar-CXy3uSGu.js";import{R as l}from"./zIndexSlice-DQO5Hbgs.js";import{S as u}from"./ScatterChart-DULt7m09.js";import{C as p}from"./CartesianGrid-BDm06sUL.js";import{X as y}from"./XAxis-L2wk8rnW.js";import{Y as d}from"./YAxis-Da2JXkbU.js";import{S as c}from"./Scatter-CJEJyL2o.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-BB5O4xlv.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C7voaGK7.js";import"./ErrorBarContext-Buq5hkgo.js";import"./RechartsWrapper-B47jb7Bg.js";import"./index-Ck0Bo50f.js";import"./index-DLItSsfJ.js";import"./index-DyYl91DI.js";import"./index-Bu-B5WMy.js";import"./throttle-BBXZcEly.js";import"./axisSelectors-CMqkaAfm.js";import"./isWellBehavedNumber-BkHFck3s.js";import"./d3-scale-G2cHgOnr.js";import"./renderedTicksSlice-Cdp3Xg1W.js";import"./PolarUtils-CTnnDHZv.js";import"./RegisterGraphicalItemId-BhQ648vE.js";import"./CategoricalChart-BzwwubIO.js";import"./CSSTransitionAnimate-CuRPxayo.js";import"./useAnimationId-_KC_AMgU.js";import"./util-Dxo8gN5i.js";import"./ZIndexLayer-DBw3xiu4.js";import"./CartesianChart--y5fp4Ts.js";import"./chartDataContext-CkCkvPBB.js";import"./CartesianAxis-890WjR3i.js";import"./Text-CiA3AAlg.js";import"./DOMUtils-ukWQHZl5.js";import"./RechartsThemeContext-NTsyT9p1.js";import"./Label-DUcJCWBn.js";import"./types-DESxFXXj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-Clv-mx2A.js";import"./Curve-BDPvfmPk.js";import"./step-Be_wHVCe.js";import"./path-DyVhHtw_.js";import"./tooltipContext-B_HOhC8Y.js";import"./Symbols-DMTBO25H.js";import"./symbol-BSVPaPlS.js";import"./ActiveShapeUtils-D5nCu2Hc.js";import"./GraphicalItemClipPath-JgdFdpvQ.js";import"./SetGraphicalItem-C8TpD4Nn.js";import"./graphicalItemIdentity-CdZfZkJ-.js";const h=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}],m={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"400"}},defaultValue:400},animationEasing:{table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "spring" | EasingFunction | `cubic-bezier(${number},${number},${number},${number})`'},category:"Animation",defaultValue:{summary:"ease-in-out"}},defaultValue:"ease-in-out"},dataKey:{description:"Decides how to extract the value of this ErrorBar from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this ErrorBar.\n\nThe error values can be a single value for symmetric error bars;\nor an array of a lower and upper error value for asymmetric error bars.",table:{type:{summary:"DataKey<DataPointType, DataValueType>"},category:"General"}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
In Scatter chart, "x" means horizontal error bars, "y" means vertical error bars.`,table:{type:{summary:"number | string"},category:"General"}},isAnimationActive:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"Animation",defaultValue:{summary:"true"}},defaultValue:!0},stroke:{description:'The stroke color. If "none", no line will be drawn.',control:{type:"color"},table:{type:{summary:"string"},category:"Style",defaultValue:{summary:"black"}},defaultValue:"black"},strokeWidth:{description:"The width of the stroke",table:{type:{summary:"number | string"},category:"Style",defaultValue:{summary:"1.5"}},defaultValue:1.5},width:{description:`Width of the error bar ends (the serifs) in pixels.
This is not the total width of the error bar, but just the width of the little lines at the ends.

The total width of the error bar is determined by the data value plus/minus the error value.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},zIndex:{control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},cr={component:i,argTypes:m},e={render:n=>r.createElement(l,{width:"100%",height:500},r.createElement(u,{margin:{top:5,right:30,left:20,bottom:5},width:730,height:250},r.createElement(p,null),r.createElement(y,{dataKey:"x",type:"number"}),r.createElement(d,{dataKey:"y",type:"number"}),r.createElement(c,{data:h,fill:"#ff7300"},r.createElement(i,{dataKey:"errorY",...n})))),args:{...s(m),width:4,strokeWidth:2,stroke:"green",direction:"y",dataKey:"errorY"}};var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const hr=["API"];export{e as API,hr as __namedExportsOrder,cr as default};
