import{R as r}from"./iframe-ZSAsyeui.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-BrCLpQlg.js";import{C as d}from"./CartesianGrid-CFdrtYzo.js";import{X as c}from"./XAxis-CE4c8ci4.js";import{Y as y}from"./YAxis-89VrmUc2.js";import{S as h}from"./Scatter-CfuPwJHW.js";import{E as e}from"./ErrorBar-U2YVDMoE.js";import{T as u}from"./Tooltip-BD-lHZ6w.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BzidFlVd.js";import"./zIndexSlice-Dv-5_8A6.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CzYlkvqW.js";import"./throttle-D-BJc2jV.js";import"./index-OvyM_4Sm.js";import"./index-DjKI25gJ.js";import"./axisSelectors-B8o8U7qV.js";import"./polarAxisSelectors-BqI7JiW5.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CC-JJjQv.js";import"./index-uqJ6YOvZ.js";import"./index-zauSQ6TS.js";import"./renderedTicksSlice-CWxjmG2R.js";import"./index-DD-2LlvS.js";import"./CartesianChart-CMZp9es4.js";import"./ZIndexPortal-CvnMM87Z.js";import"./CategoricalChart-D-416rq6.js";import"./CartesianAxis-BLajEobP.js";import"./Layer-DRoxmpYI.js";import"./Text-BRlBLGWa.js";import"./pageBackground-BD4buOa5.js";import"./ZIndexLayer-C2WKPlYv.js";import"./Label-ooeO0hBy.js";import"./types-DmKiIpv6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-Xwc-TPit.js";import"./activeStyles-BfRigOWz.js";import"./useAnimationId-DVzTYwao.js";import"./dataEntryStyles-D8AFB-Xx.js";import"./Curve-Czqktp7G.js";import"./step-agpXYCOV.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BErzQm8t.js";import"./Symbols-fzhinMEB.js";import"./symbol-fTzakvJ7.js";import"./ActiveShapeUtils-PjK4neH_.js";import"./ErrorBarContext-Cg5WWOob.js";import"./SetGraphicalItem-BULml3ZG.js";import"./useEffectiveDataKey-DWBa4tvD.js";import"./CSSTransitionAnimate-B0ZfIZjC.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-BLZ2FwPy.js";import"./uniqBy-CsraS7fO.js";import"./iteratee-BRq8WylV.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CbPqnaha.js";import"./Rectangle-Buh2szsq.js";import"./Sector-5mywfZ-i.js";const Ar={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Sr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Sr as __namedExportsOrder,Ar as default};
