import{R as r}from"./iframe--N-T_hBz.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-DwvSwc8i.js";import{C as d}from"./CartesianGrid-Bo8kzbsf.js";import{X as c}from"./XAxis-DdKAxJ7S.js";import{Y as y}from"./YAxis-DsuWS9IR.js";import{S as h}from"./Scatter-PgfbWBcY.js";import{E as e}from"./ErrorBar-PZfp47bf.js";import{T as u}from"./Tooltip-BblCHtO7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dga53r6u.js";import"./zIndexSlice-BrmEEgcV.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BZdVkepW.js";import"./throttle-DiHBngta.js";import"./index-CltnTfg9.js";import"./index-C2LKm9xK.js";import"./axisSelectors-dSJNPUYj.js";import"./polarAxisSelectors-Ch50KZor.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-syhDUnOY.js";import"./index-DQLg1InC.js";import"./index-DSO52ANi.js";import"./renderedTicksSlice-C7C4TYLP.js";import"./index-BiiWPIDX.js";import"./fillDefinitions-DLkX59y8.js";import"./CartesianChart-DXdGkfOu.js";import"./chartDataContext-CXOzC9oO.js";import"./CategoricalChart-CbkCL8Oe.js";import"./CartesianAxis-D25MAZFZ.js";import"./Layer-1myxLhO2.js";import"./Text-B6x9BsBz.js";import"./ZIndexLayer-PDpl17Qr.js";import"./Label-DcuyFpKL.js";import"./types-CDdNjsiG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-CggySQjW.js";import"./activeStyles-CQz5jccO.js";import"./useAnimationId-B0H5IbY6.js";import"./Curve-AUzua7kl.js";import"./step-BCTml7Sd.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DSz7WbbM.js";import"./Symbols-DyIGA9sv.js";import"./symbol-Dc0-FYjy.js";import"./ActiveShapeUtils-DxAwIp1Y.js";import"./ErrorBarContext-Cxj8MR3w.js";import"./SetGraphicalItem-BuNZMI4X.js";import"./useEffectiveDataKey-ehD4S_ma.js";import"./CSSTransitionAnimate-CKPTmnn-.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DwViDVhc.js";import"./uniqBy-Ba4jswSg.js";import"./iteratee-CiVllZTn.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BpIRhDE_.js";import"./Rectangle-C0b2pOCq.js";import"./Sector-Bqy4ZQqB.js";const Yr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Ar=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
