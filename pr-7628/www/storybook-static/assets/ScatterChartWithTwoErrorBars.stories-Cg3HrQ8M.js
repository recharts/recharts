import{R as r}from"./iframe--KdzZtf9.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-Bm34Hsa9.js";import{C as d}from"./CartesianGrid-D5FjoZZr.js";import{X as c}from"./XAxis-BtfaW-Ms.js";import{Y as y}from"./YAxis-CoP3OSHi.js";import{S as h}from"./Scatter-nkgsoNas.js";import{E as e}from"./ErrorBar-B8S-WK3Q.js";import{T as u}from"./Tooltip-_1wfcGQ4.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DbMAL-gW.js";import"./zIndexSlice-CHztvQxJ.js";import"./throttle-hG26ZCHv.js";import"./index-S42N58hu.js";import"./index-BmB7_o0P.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DclZvKxN.js";import"./isWellBehavedNumber-vpVCWLp_.js";import"./PolarUtils-CTnnDHZv.js";import"./index-q7cE3wgI.js";import"./index-BlCKzZxU.js";import"./axisSelectors-DJc-QTCs.js";import"./d3-scale-DQou-uOy.js";import"./renderedTicksSlice-D0sDrWJo.js";import"./CartesianChart-tb7UCCzE.js";import"./chartDataContext-sbVF-hg4.js";import"./CategoricalChart-DmFxRtAx.js";import"./CartesianAxis-8V80jjh3.js";import"./Layer-DCgJY1vZ.js";import"./Text-DiczCyux.js";import"./DOMUtils-DCy02iSc.js";import"./Label-Bwq_3Ge6.js";import"./ZIndexLayer--b9avAgZ.js";import"./types-DxjttXzA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CFhBSuLJ.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-Ca9tbEhj.js";import"./useAnimationId-Dz24l0hc.js";import"./Curve-Blx4pOcl.js";import"./step-CWWzJll9.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BQ96WVr5.js";import"./Symbols-DiBbRsrj.js";import"./symbol-CCGLzW4r.js";import"./ActiveShapeUtils-BtJUa3Ui.js";import"./RegisterGraphicalItemId-DrHIocnK.js";import"./ErrorBarContext-DDlfLFIp.js";import"./graphicalItemIdentity-BErd8u6-.js";import"./SetGraphicalItem-BhKlnoJm.js";import"./CSSTransitionAnimate-Gw_m90Kl.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DuPTW83n.js";import"./uniqBy-DGNEKTWG.js";import"./iteratee-BAaHiQpy.js";import"./Cross-rTbuR9fV.js";import"./Rectangle-24EhHdQN.js";import"./Sector-emOqlKu7.js";const Xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Yr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Yr as __namedExportsOrder,Xr as default};
