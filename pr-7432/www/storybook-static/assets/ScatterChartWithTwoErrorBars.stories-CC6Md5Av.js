import{R as r}from"./iframe-QMSevZ_Z.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-9iu6Waem.js";import{C as d}from"./CartesianGrid-uhk3J4Lq.js";import{X as c}from"./XAxis-C0cN_JCK.js";import{Y as y}from"./YAxis-CX1GPX_T.js";import{S as h}from"./Scatter-DbmdkJKx.js";import{E as e}from"./ErrorBar-CSYA6qjH.js";import{T as u}from"./Tooltip-DrpUXz1E.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DMF7GIN4.js";import"./zIndexSlice-CqmMHsGQ.js";import"./immer-CSWl79hr.js";import"./index-BO7EkBYF.js";import"./index-LDm5_5xU.js";import"./get-Dt9ZBUsD.js";import"./resolveDefaultProps-D1-FsOZY.js";import"./isWellBehavedNumber-BPQ0SJ_C.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CIER62SJ.js";import"./index-pi0GgTlW.js";import"./renderedTicksSlice-C-zK2PEt.js";import"./axisSelectors-ClPssgYV.js";import"./d3-scale-BdG0BwVM.js";import"./string-B6fdYHAA.js";import"./CartesianChart-Cs7lfMyS.js";import"./chartDataContext-CxmQ7H3R.js";import"./CategoricalChart-Euguz-0O.js";import"./CartesianAxis-fxCqdamK.js";import"./Layer-BIlvUco-.js";import"./Text-B1kcN_-d.js";import"./DOMUtils-B2SIzhm8.js";import"./Label-CDZiRvSt.js";import"./ZIndexLayer-CEBsGFM8.js";import"./types-P1jJ2pmT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-BDsdaMkZ.js";import"./useAnimationId-DlcOUKTA.js";import"./Curve-YfzASo2H.js";import"./step-CM1NK0SI.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BaJfxc5d.js";import"./Symbols-BaSB-6_g.js";import"./symbol-D8fjms2j.js";import"./ActiveShapeUtils-Bwe4ExnQ.js";import"./RegisterGraphicalItemId-YPLe9nYm.js";import"./ErrorBarContext-CmLe_bSh.js";import"./GraphicalItemClipPath-D6ZPyI0A.js";import"./SetGraphicalItem-CL5I6sew.js";import"./CSSTransitionAnimate-BKKqqeUD.js";import"./useElementOffset-D_J7pSVP.js";import"./uniqBy-U_isDGby.js";import"./iteratee-DR35FRfo.js";import"./Cross-iS5fVb9V.js";import"./Rectangle-lJXzMoVm.js";import"./Sector-p75iSGMp.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
