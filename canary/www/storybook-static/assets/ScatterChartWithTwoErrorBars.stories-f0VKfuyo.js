import{R as r}from"./iframe-BWDOX6-u.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-7ROF7iU7.js";import{C as d}from"./CartesianGrid-DJvIAqQu.js";import{X as c}from"./XAxis-Bg1rIWpH.js";import{Y as y}from"./YAxis-CmY1zbsh.js";import{S as h}from"./Scatter-DaaKSMT3.js";import{E as e}from"./ErrorBar-BVmsWcax.js";import{T as u}from"./Tooltip-E8YPsfxS.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BRyXUEk1.js";import"./zIndexSlice-DNz64E0x.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BcUHQ_F5.js";import"./throttle-CylvlJBG.js";import"./index-DzgZ7zsu.js";import"./index-DnIYcPIz.js";import"./axisSelectors-DEg5_gPJ.js";import"./polarAxisSelectors-DK35yTF0.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B4wSjZj4.js";import"./index-BJ2UcSZQ.js";import"./index-w7-d2vln.js";import"./renderedTicksSlice-BqxX5aIt.js";import"./index-KUhAAXQC.js";import"./CartesianChart-BPCuN6sc.js";import"./ZIndexPortal-BU5aU1wi.js";import"./CategoricalChart--0r08YsN.js";import"./CartesianAxis-DBuYWNnG.js";import"./Layer-DzTaBPhB.js";import"./Text-BC76d3cf.js";import"./pageBackground-B9VN7P3l.js";import"./ZIndexLayer-BpYNbZQ_.js";import"./Label-C7PH8HeI.js";import"./types-Kg6mNYCQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-Bpfp_vOc.js";import"./activeStyles-1bnNLlnc.js";import"./useAnimationId-DnCcjn8H.js";import"./dataEntryStyles-BX1vU1kO.js";import"./Curve-CrU39aeO.js";import"./step-Cs1Ofcpa.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Bo8jdiGb.js";import"./Symbols-BzcCXNpL.js";import"./symbol-X6QlfoW2.js";import"./ActiveShapeUtils-7f2VgziP.js";import"./ErrorBarContext-CMdxFUFX.js";import"./SetGraphicalItem-DERdfH3j.js";import"./useEffectiveDataKey-D_c8pfvC.js";import"./CSSTransitionAnimate-CMhF158K.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DDtS6U3Q.js";import"./uniqBy-BH4YjQyG.js";import"./iteratee-CCjAiajQ.js";import"./isArguments-yB-y1yaH.js";import"./Cross-Bp6FZ5qp.js";import"./Rectangle-YmvaNl9F.js";import"./Sector-D4IBl-dY.js";const Ar={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Sr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
