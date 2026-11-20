import{R as r}from"./iframe-B4BvLeme.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-W2E_WUHz.js";import{C as d}from"./CartesianGrid-OdD8ef-g.js";import{X as c}from"./XAxis-T18YTghU.js";import{Y as y}from"./YAxis-T0QKWtDf.js";import{S as h}from"./Scatter-alXkO_6G.js";import{E as e}from"./ErrorBar-ChZUmlza.js";import{T as u}from"./Tooltip-BqwF9dCU.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B0OT4wWF.js";import"./zIndexSlice-DyTYWVcs.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-6IdFK7Ih.js";import"./throttle-DQNRL0AJ.js";import"./index-ClYdslLd.js";import"./index-59WpEyYi.js";import"./axisSelectors-DS5uRUAA.js";import"./polarAxisSelectors-DqM84NZ8.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DfUXkppW.js";import"./index-CwZtWez3.js";import"./index-Ba_PgChy.js";import"./renderedTicksSlice-D5gysmL5.js";import"./index-eMahtaOk.js";import"./fillDefinitions-CE1xVmK7.js";import"./CartesianChart-B8uUCQhO.js";import"./chartDataContext-DPDAwbOK.js";import"./CategoricalChart-gG_kR-cF.js";import"./CartesianAxis-reQTS2uW.js";import"./Layer-Bxh7arjC.js";import"./Text-B4NS4A04.js";import"./ZIndexLayer-Cb7Yxv7n.js";import"./Label-Bp5zUoNH.js";import"./types-UPHeghFs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-n779GVpT.js";import"./activeStyles-BtDPe58A.js";import"./useAnimationId-B1vlq9HU.js";import"./Curve-B5oomGBl.js";import"./step-il89s-4w.js";import"./path-BBMZd4YL.js";import"./tooltipContext-D_p8bgOZ.js";import"./Symbols-BPMmDEMk.js";import"./symbol-YAvM_-gl.js";import"./ActiveShapeUtils-CXNsVwUA.js";import"./ErrorBarContext-BEP_BW62.js";import"./SetGraphicalItem-WJo3C0-v.js";import"./useEffectiveDataKey-cN06FnCm.js";import"./CSSTransitionAnimate-BsO1TxJU.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-BbIaovZs.js";import"./uniqBy-D7JAzLt7.js";import"./iteratee-DlFoAbv_.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CYqaTdkm.js";import"./Rectangle-Wqh2w_9O.js";import"./Sector-BXO2sNen.js";const Yr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Ar=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
