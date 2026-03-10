import{e as r}from"./iframe-B0RBHKhv.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-BmVoirIp.js";import{C as d}from"./CartesianGrid-CB91r2uB.js";import{X as c}from"./XAxis-CmZ1Qc-G.js";import{Y as y}from"./YAxis-CpFYoB6j.js";import{S as h}from"./Scatter-Hi6uG4YY.js";import{E as e}from"./ErrorBar-Cg3i12vW.js";import{T as u}from"./Tooltip-BhaQIK00.js";import{R as f}from"./RechartsHookInspector-BW5IS2xz.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DJ9Ttq8o.js";import"./arrayEqualityCheck-CUrlIiZa.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-COjtEafr.js";import"./immer-4Zn5elZn.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CJLF0Mhh.js";import"./hooks-D2D_3Kbz.js";import"./axisSelectors-fGBidpaE.js";import"./d3-scale-DmOZwrln.js";import"./zIndexSlice-CVs48kDF.js";import"./renderedTicksSlice-BWSAiWSy.js";import"./CartesianChart-CJLV3cRG.js";import"./chartDataContext-C8RmHr1V.js";import"./CategoricalChart-DjdfrcyP.js";import"./CartesianAxis-CwVzMBAZ.js";import"./Layer-DKG_J2lX.js";import"./Text-cX_Ucvjm.js";import"./DOMUtils-DRSD_e_k.js";import"./Label-zCnoVUoE.js";import"./ZIndexLayer-D0KeT139.js";import"./types-Cr4gQIo8.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-4VVLboep.js";import"./Curve-OyQHTjUf.js";import"./step-tovYZaNJ.js";import"./tooltipContext-8hUHBFaI.js";import"./Symbols-DeqF7aJf.js";import"./symbol-Br_8ecW-.js";import"./ActiveShapeUtils-BxyuTB5c.js";import"./isPlainObject-CN9etUkS.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CwMZJDWv.js";import"./useAnimationId-BhQIBdFI.js";import"./Trapezoid-CNfMGcYM.js";import"./Sector-COzuaaOM.js";import"./RegisterGraphicalItemId-B4LFnea8.js";import"./ErrorBarContext-Lg7BjtUv.js";import"./GraphicalItemClipPath-CUPJIuLc.js";import"./SetGraphicalItem-BFputAxA.js";import"./CSSTransitionAnimate-C5YvgC8X.js";import"./useElementOffset-De9Hnrht.js";import"./uniqBy-ICdfjBA0.js";import"./iteratee-Dy_7KVd3.js";import"./Cross-QNZoSEYe.js";import"./index-CAjd4rxZ.js";import"./ChartSizeDimensions-Dn4uFPS3.js";import"./OffsetShower-6Ks2UPdd.js";import"./PlotAreaShower-CXPk0Esn.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
        <RechartsHookInspector />
      </ScatterChart>;
  },
  args: getStoryArgsFromArgsTypesObject(ScatterChartArgs),
  parameters: {
    controls: {
      include: ['layout', 'allowDataOverflow']
    }
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const kr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,kr as __namedExportsOrder,Sr as default};
