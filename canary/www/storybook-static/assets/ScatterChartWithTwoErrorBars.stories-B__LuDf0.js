import{R as r}from"./iframe-Yg2vC8jl.js";import{g as n}from"./utils-ePvtT4un.js";import{S as p}from"./ScatterChartArgs-DVckGNEz.js";import{S as s}from"./ScatterChart-DQVd6Gvl.js";import{C as d}from"./CartesianGrid-B6EPQvSG.js";import{X as c}from"./XAxis-BCD8PGRZ.js";import{Y as y}from"./YAxis-C7vKKbMF.js";import{S as h}from"./Scatter-BbkaAKgc.js";import{E as e}from"./ErrorBar-iQzVM2Ho.js";import{T as u}from"./Tooltip-CTKLNEBy.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-rNmWVTcA.js";import"./zIndexSlice-BElsb48m.js";import"./throttle-BaCh1BSI.js";import"./index-CHZ1utW3.js";import"./index-CN9KpfAX.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Bsa29K_S.js";import"./isWellBehavedNumber-DQgk1tKw.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-nv9p39UG.js";import"./d3-scale-DXOKnb1o.js";import"./index--8spWne3.js";import"./index-B_F5nQFz.js";import"./renderedTicksSlice-ChVEhIgt.js";import"./index-CqWRosMe.js";import"./CartesianChart-C7IlXP4I.js";import"./chartDataContext-Dlt4sLo1.js";import"./CategoricalChart-EUZHEGq1.js";import"./CartesianAxis-D_n_4bqq.js";import"./Layer-B4IabIdW.js";import"./Text-DdvnI_Yn.js";import"./DOMUtils-CUUEg-Ut.js";import"./useId-CIFQ64hu.js";import"./useBackwardsCompatibleTheme-ByLQZtu6.js";import"./Label-D-3Je9Ku.js";import"./ZIndexLayer-DxM-QnJb.js";import"./types-DJ9rCugd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CaVCuQAN.js";import"./useAnimationId-DsPfmOTd.js";import"./Curve-DpihRFk6.js";import"./step-DK4VgiZ3.js";import"./path-DyVhHtw_.js";import"./tooltipContext-ClaXsSR5.js";import"./Symbols-CUEb3Vdg.js";import"./symbol-CTUXJ_bE.js";import"./ActiveShapeUtils-Ch49efhn.js";import"./RegisterGraphicalItemId-DblvaP9s.js";import"./ErrorBarContext-BRhPIJ9q.js";import"./GraphicalItemClipPath-Ow_WyG3Z.js";import"./SetGraphicalItem-V-QFpaIF.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate-Bp9F9pvf.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-4hd-uwJ-.js";import"./uniqBy-D5HXXEeh.js";import"./iteratee-Bl4bR9Yp.js";import"./Cross-4DAXadOZ.js";import"./Rectangle-DLhCf_Js.js";import"./Sector-IFYvrVGg.js";const Sr={component:s,argTypes:p,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(s,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(p),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Dr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Dr as __namedExportsOrder,Sr as default};
