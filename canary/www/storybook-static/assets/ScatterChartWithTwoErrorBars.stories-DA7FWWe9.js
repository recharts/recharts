import{R as r}from"./iframe-CAwz8uN7.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-CY87JvIZ.js";import{C as d}from"./CartesianGrid-CfmKA59t.js";import{X as c}from"./XAxis-DaHA7aw5.js";import{Y as y}from"./YAxis-CXb4tru9.js";import{S as h}from"./Scatter-0aXANGDo.js";import{E as e}from"./ErrorBar-CAj5fmO_.js";import{T as u}from"./Tooltip-ZJbItvbk.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dxg_wm9v.js";import"./zIndexSlice-TMbeSoaw.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DMIb7SBs.js";import"./throttle-DghoigHv.js";import"./index-DgXSxR_f.js";import"./index-Bzw5OmaH.js";import"./axisSelectors-CpwbL3Oz.js";import"./polarAxisSelectors-Cc_qYj6o.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CIIJy1t9.js";import"./index-Bn6lI9jh.js";import"./index-DXtXm7rl.js";import"./renderedTicksSlice-GqHDAcQt.js";import"./index-D4t20APB.js";import"./fillDefinitions-CB-_Qdnq.js";import"./CartesianChart-Cfm778D2.js";import"./chartDataContext-BqdYE3y4.js";import"./CategoricalChart-BV8BHimy.js";import"./CartesianAxis-VsizMTED.js";import"./Layer-LEH2Le6G.js";import"./Text-B8IGolEi.js";import"./ZIndexLayer-BXCDLr1d.js";import"./Label-CdS579rS.js";import"./types-BWdHpl7S.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-BvT9zs0X.js";import"./activeStyles-WxNZ0DKg.js";import"./useAnimationId-p8KP1za0.js";import"./Curve-S9C-Z9CI.js";import"./step-D__pRIvp.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DCKEuyvz.js";import"./Symbols-B_L6SHWg.js";import"./symbol-EvKS_tYy.js";import"./ActiveShapeUtils-CWtt7knh.js";import"./ErrorBarContext-Qh2D0zyI.js";import"./SetGraphicalItem-BpveB_1U.js";import"./useEffectiveDataKey-DBkqmySO.js";import"./CSSTransitionAnimate-D-2IxmKk.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DlbUgjzV.js";import"./uniqBy-D-DUMfVG.js";import"./iteratee-BAcU7c4m.js";import"./isArguments-yB-y1yaH.js";import"./Cross-Bj4UTGDm.js";import"./Rectangle-COjWgFDq.js";import"./Sector-DiqzRaDU.js";const Yr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Ar=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Ar as __namedExportsOrder,Yr as default};
