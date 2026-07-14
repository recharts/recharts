import{R as r}from"./iframe-CoZYBKIX.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-6g-V5ehH.js";import{C as d}from"./CartesianGrid-acTASaL7.js";import{X as c}from"./XAxis-BYrKdn3j.js";import{Y as y}from"./YAxis-CF_GQk3H.js";import{S as h}from"./Scatter-DznqEHhH.js";import{E as e}from"./ErrorBar-BuiFZWnU.js";import{T as u}from"./Tooltip-D3QVER9o.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Chafq55k.js";import"./zIndexSlice-2wRK4kMu.js";import"./throttle-DTjNB_wn.js";import"./index-CxqEAs70.js";import"./index-DbtoquVJ.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-CXWmRWxD.js";import"./isWellBehavedNumber-DPie-IPs.js";import"./PolarUtils-CTnnDHZv.js";import"./index-8vVHWDox.js";import"./index-CB7yOKq2.js";import"./renderedTicksSlice-BJztigH5.js";import"./axisSelectors-Bk60vGia.js";import"./d3-scale-Bs_mySfl.js";import"./CartesianChart-DoniaHV0.js";import"./chartDataContext-Cx3CX6pd.js";import"./CategoricalChart-DEIC5a6b.js";import"./CartesianAxis-CSNiqDgA.js";import"./Layer-Do7uuXp2.js";import"./Text-Br2KMW9j.js";import"./DOMUtils-B_OLo7Kh.js";import"./Label-B5Sw4cWo.js";import"./ZIndexLayer-Cub30BGV.js";import"./types-DlqgPqNT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-OdNYlxxq.js";import"./useAnimationId-C7atvuRl.js";import"./Curve-Cg7tsFL-.js";import"./step-C4ZbFa_I.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BZuhr6e1.js";import"./Symbols-BKIDLtqe.js";import"./symbol-C8voowq0.js";import"./ActiveShapeUtils-Is-vymDi.js";import"./RegisterGraphicalItemId-BhxVKnq7.js";import"./ErrorBarContext-D9rx9CvF.js";import"./GraphicalItemClipPath-BqDFfLzv.js";import"./SetGraphicalItem-Cm5RMzg0.js";import"./CSSTransitionAnimate-BU6WAl1Z.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-6wbHTWe8.js";import"./uniqBy-CLYAyW1w.js";import"./iteratee-DfrVONCs.js";import"./Cross-BKoJ5Aes.js";import"./Rectangle-B4AWbI_f.js";import"./Sector-Bhwh7YeU.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: Args) => {
    const data = [{
      x: 100,
      y: 200,
      errorY: 30,
      errorX: 30
    }, {
      x: 120,
      y: 100,
      errorY: [500, 30],
      errorX: [200, 30]
    }, {
      x: 170,
      y: 300,
      errorY: [10, 20],
      errorX: 20
    }, {
      x: 140,
      y: 250,
      errorY: 30,
      errorX: 20
    }, {
      x: 150,
      y: 400,
      errorY: [20, 300],
      errorX: 30
    }, {
      x: 110,
      y: 280,
      errorY: 40,
      errorX: 40
    }];
    return <ScatterChart width={400} height={400} margin={{
      top: 20,
      right: 20,
      bottom: 20,
      left: 20
    }} layout={args.layout}>
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="stature" unit="cm" allowDataOverflow={args.allowDataOverflow} />
        <YAxis type="number" dataKey="y" name="weight" unit="kg" allowDataOverflow={args.allowDataOverflow} />
        <Scatter name="A school" data={data} fill="blue">
          {/* This ErrorBar does render, but it does not extend the domain of XAxis unfortunately */}
          <ErrorBar dataKey="errorX" width={2} strokeWidth={3} stroke="green" direction="x" />
          <ErrorBar dataKey="errorY" width={4} strokeWidth={2} stroke="red" direction="y" />
        </Scatter>
        <Tooltip cursor={{
        strokeDasharray: '3 3'
      }} />
      </ScatterChart>;
  },
  args: getStoryArgsFromArgsTypesObject(ScatterChartArgs),
  parameters: {
    controls: {
      include: ['layout', 'allowDataOverflow']
    }
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Er=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Er as __namedExportsOrder,xr as default};
