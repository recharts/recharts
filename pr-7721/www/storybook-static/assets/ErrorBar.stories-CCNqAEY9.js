import{R as r}from"./iframe-CQz631Nk.js";import{g as s}from"./utils-ePvtT4un.js";import{E as i}from"./ErrorBar-1UF_gjvT.js";import{R as p}from"./zIndexSlice-BiY29BHb.js";import{S as l}from"./ScatterChart-FQdJjtcV.js";import{C as u}from"./CartesianGrid-zqpDe6L_.js";import{X as y}from"./XAxis-DHy0v3jD.js";import{Y as c}from"./YAxis-CWW4X-Ki.js";import{S as d}from"./Scatter-MbLO_nGv.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-DGn6U-cs.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BsWR9NdC.js";import"./ErrorBarContext-BVC7bug8.js";import"./RechartsWrapper-Btix0jtf.js";import"./axisSelectors-SdSrtuX_.js";import"./throttle-tlVaut9a.js";import"./index-DCbtYhHK.js";import"./index-CDndXHyS.js";import"./isWellBehavedNumber-B7MN_LAX.js";import"./d3-scale-DbP7sHTP.js";import"./index-BlfYBgju.js";import"./index-w2pZ54DA.js";import"./renderedTicksSlice-lkRk7heP.js";import"./index-CUVgoBSt.js";import"./PolarUtils-CTnnDHZv.js";import"./RegisterGraphicalItemId-Bdyk4ltG.js";import"./useId-BSAAHf1D.js";import"./CSSTransitionAnimate-B6DF1jqK.js";import"./useAnimationId-DN0POjqt.js";import"./util-Dxo8gN5i.js";import"./ZIndexLayer-LgQGURcB.js";import"./useBackwardsCompatibleTheme-DhqH6-Ub.js";import"./CartesianChart-WE1bkj_w.js";import"./chartDataContext-ef-S8XKm.js";import"./CategoricalChart-6rYejfBQ.js";import"./CartesianAxis-Dd11BP7Z.js";import"./Text-CpmwLb5H.js";import"./DOMUtils-V3cEDC71.js";import"./Label-DQhaNgKG.js";import"./types-qf3XACEN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-B3DzMe78.js";import"./Curve-B1Y35Tq4.js";import"./step-DM9ed4F2.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CezEY4OY.js";import"./Symbols-BRx4T2_d.js";import"./symbol-JqaxEo1O.js";import"./ActiveShapeUtils-BfK0DvMY.js";import"./GraphicalItemClipPath-Db7czniJ.js";import"./SetGraphicalItem-DLB5o72P.js";import"./graphicalItemIdentity-CdZfZkJ-.js";const h=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}],m={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"400"}},defaultValue:400},animationEasing:{table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "spring" | EasingFunction | `cubic-bezier(${number},${number},${number},${number})`'},category:"Animation",defaultValue:{summary:"ease-in-out"}},defaultValue:"ease-in-out"},dataKey:{description:"Decides how to extract the value of this ErrorBar from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this ErrorBar.\n\nThe error values can be a single value for symmetric error bars;\nor an array of a lower and upper error value for asymmetric error bars.",table:{type:{summary:"DataKey<DataPointType, DataValueType>"},category:"General"}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
In Scatter chart, "x" means horizontal error bars, "y" means vertical error bars.`,table:{type:{summary:"number | string"},category:"General"}},isAnimationActive:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"Animation",defaultValue:{summary:"true"}},defaultValue:!0},stroke:{description:'The stroke color. If "none", no line will be drawn.',control:{type:"color"},table:{type:{summary:"string"},category:"Style"}},strokeWidth:{description:"The width of the stroke",table:{type:{summary:"number | string"},category:"Style"}},width:{description:`Width of the error bar ends (the serifs) in pixels.
This is not the total width of the error bar, but just the width of the little lines at the ends.

The total width of the error bar is determined by the data value plus/minus the error value.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},zIndex:{control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},br={component:i,argTypes:m},e={render:n=>r.createElement(p,{width:"100%",height:500},r.createElement(l,{margin:{top:5,right:30,left:20,bottom:5},width:730,height:250},r.createElement(u,null),r.createElement(y,{dataKey:"x",type:"number"}),r.createElement(c,{dataKey:"y",type:"number"}),r.createElement(d,{data:h,fill:"#ff7300"},r.createElement(i,{dataKey:"errorY",...n})))),args:{...s(m),width:4,strokeWidth:2,stroke:"green",direction:"y",dataKey:"errorY"}};var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const fr=["API"];export{e as API,fr as __namedExportsOrder,br as default};
