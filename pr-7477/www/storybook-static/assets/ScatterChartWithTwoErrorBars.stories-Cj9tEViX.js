import{R as r}from"./iframe-C2Yu5A-b.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-P5CBnAlO.js";import{C as d}from"./CartesianGrid-DBvkaZMp.js";import{X as c}from"./XAxis-WqnJVPHT.js";import{Y as y}from"./YAxis-CAeM0KFi.js";import{S as h}from"./Scatter-BhZDiFRE.js";import{E as e}from"./ErrorBar-C5ZuHUuZ.js";import{T as u}from"./Tooltip-D4_5mk3v.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DLm4movc.js";import"./zIndexSlice-tndcr-lp.js";import"./immer-Dw4t5i4O.js";import"./index-Crtw70Th.js";import"./index-Bw2J7CiK.js";import"./get-sXbEBADG.js";import"./resolveDefaultProps-Bpz2fUNW.js";import"./isWellBehavedNumber-hO-3eJ3M.js";import"./PolarUtils-CTnnDHZv.js";import"./index-Cf-iiIX8.js";import"./index-RvHlbfdo.js";import"./renderedTicksSlice-DRR4JQds.js";import"./axisSelectors-ldKOVrRn.js";import"./d3-scale-CalfYQM5.js";import"./CartesianChart-GviTQT_7.js";import"./chartDataContext-BCayYLP6.js";import"./CategoricalChart-CfUCGvtZ.js";import"./CartesianAxis-Che9oLkh.js";import"./Layer-B5f-JESM.js";import"./Text-nteLn1KQ.js";import"./DOMUtils-D5PdJ1Ca.js";import"./Label-5FD90Jk0.js";import"./ZIndexLayer-DuYz_T9C.js";import"./types-D2qrwj6D.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-Bx_qRQBs.js";import"./useAnimationId-_dE112Ua.js";import"./Curve-BOpkUjqJ.js";import"./step-Badcwj1a.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CMoxRMY5.js";import"./Symbols-OVliTJ0w.js";import"./symbol-BfsTRDbP.js";import"./ActiveShapeUtils-BR-aw80X.js";import"./RegisterGraphicalItemId-BBUK6ex4.js";import"./ErrorBarContext-CB1md74y.js";import"./GraphicalItemClipPath-ByyRz6Zm.js";import"./SetGraphicalItem-B-XBlhKJ.js";import"./CSSTransitionAnimate-BGT157KT.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-D1jcGseP.js";import"./uniqBy-EOs9hKbg.js";import"./iteratee-BIwzy5Sd.js";import"./Cross-CDEkmIQU.js";import"./Rectangle-CYfm48t9.js";import"./Sector-CXcIFBrm.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
