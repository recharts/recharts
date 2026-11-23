import{R as r}from"./iframe-Cwhg5Alw.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-Bj6OMbdn.js";import{C as d}from"./CartesianGrid-CQF9KBlo.js";import{X as c}from"./XAxis-DysdhPMn.js";import{Y as y}from"./YAxis-DmjTZE4U.js";import{S as h}from"./Scatter-D48Nzhc4.js";import{E as e}from"./ErrorBar-Coh080p4.js";import{T as u}from"./Tooltip-L14wBEQs.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BxNvZ3mc.js";import"./zIndexSlice-Fv3NhYWW.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CkDxtqDz.js";import"./throttle-Du5pgiUX.js";import"./index-B9mn7cyH.js";import"./index-BEds7S3I.js";import"./axisSelectors-BXhIMUYz.js";import"./polarAxisSelectors-Dj6PmZ2B.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-buNRHlZ7.js";import"./index-Ce6E5z2B.js";import"./index-Dq-nqpA7.js";import"./renderedTicksSlice-DNRadS3G.js";import"./index-DS0QJhYL.js";import"./fillDefinitions-zsPlWl9g.js";import"./CartesianChart-dk4HvrTk.js";import"./chartDataContext-plFejdmf.js";import"./CategoricalChart-DmZKpDkp.js";import"./CartesianAxis-lC9jf5Zn.js";import"./Layer-Cvk4I16t.js";import"./Text-Cv-7zpF9.js";import"./ZIndexLayer-Zh5FqFCx.js";import"./Label-DOhfAK-3.js";import"./types-B4BwHuKZ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-Dl4kQBD7.js";import"./activeStyles-C2N6Ab6e.js";import"./useAnimationId-B8-WGiI8.js";import"./Curve-D9P_AzdW.js";import"./step-BizBXnVe.js";import"./path-BBMZd4YL.js";import"./tooltipContext-JpJPDcQ0.js";import"./Symbols-C1fO_1Gx.js";import"./symbol-D2NP4cwA.js";import"./ActiveShapeUtils-NTKJrLNa.js";import"./ErrorBarContext-C5GJMenk.js";import"./SetGraphicalItem-BZTwfoQJ.js";import"./useEffectiveDataKey-EnHAhUcJ.js";import"./CSSTransitionAnimate-zDxjMq-0.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-CNLYFCV9.js";import"./uniqBy-k5K2zjYf.js";import"./iteratee-BXUvkud4.js";import"./isArguments-yB-y1yaH.js";import"./Cross-D2yYvBMS.js";import"./Rectangle-CJUu2CXA.js";import"./Sector-CJdwVTmQ.js";const Yr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Ar=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
