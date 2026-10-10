import{R as r}from"./iframe-CbPFwm7l.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-Bgb3523M.js";import{C as d}from"./CartesianGrid-SNM1t51e.js";import{X as c}from"./XAxis-I1Z8SlwP.js";import{Y as y}from"./YAxis-CFuZPq2O.js";import{S as h}from"./Scatter-DuqJs_x5.js";import{E as e}from"./ErrorBar-DqF760QH.js";import{T as u}from"./Tooltip-CitDpTHX.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C9c4OR_j.js";import"./zIndexSlice-cmGazbpI.js";import"./throttle-CsRm63w_.js";import"./index-DZkyIfi6.js";import"./index-BZRRun-o.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BXcdiDsW.js";import"./isWellBehavedNumber-UGMkNa04.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-31esebaG.js";import"./d3-scale-CHJf7NcK.js";import"./index-Cvmqex35.js";import"./index-khK7m-8Q.js";import"./renderedTicksSlice-Ctq_TXqh.js";import"./index-CKBSX-em.js";import"./CartesianChart-DOYPm28C.js";import"./chartDataContext-CEmuSid6.js";import"./CategoricalChart-Cz2-7e9E.js";import"./CartesianAxis-CRYdmYpO.js";import"./Layer-BHHNaIH9.js";import"./Text-BOjecne3.js";import"./pageBackground-5oAWQhvG.js";import"./useId-BiS2TkJk.js";import"./useBackwardsCompatibleTheme-DZ_BE-m7.js";import"./Label-Dd7y5kyu.js";import"./ZIndexLayer-DJZ-23nf.js";import"./types-BHufKOgb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-C0PrsAC0.js";import"./useAnimationId-BoGopq3-.js";import"./dataEntryStyles-C9sHki_5.js";import"./Curve-CJ_YkHWB.js";import"./step-BRl-9aNd.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CzUq4HA3.js";import"./Symbols-Bu1nYSB-.js";import"./symbol-BML25sya.js";import"./ActiveShapeUtils-jfDQFPc2.js";import"./ErrorBarContext-CuPWqX0o.js";import"./GraphicalItemClipPath-c8upVCA0.js";import"./SetGraphicalItem-D94Ocgsk.js";import"./useGraphicalItemIdentity-CyHX6ZiQ.js";import"./CSSTransitionAnimate-CKNaSbIj.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-CQtr63ND.js";import"./uniqBy-CYNKKwCT.js";import"./iteratee-Cb_SGx_w.js";import"./Cross-CYLZd8JU.js";import"./Rectangle-DZKE4x95.js";import"./Sector-vTLrJK9w.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Dr as __namedExportsOrder,Sr as default};
