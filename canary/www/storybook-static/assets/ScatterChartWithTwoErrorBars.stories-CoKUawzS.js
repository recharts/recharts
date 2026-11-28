import{R as r}from"./iframe-yFUZOAXo.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-CSu-0aRn.js";import{C as d}from"./CartesianGrid-DKf8gquh.js";import{X as c}from"./XAxis-VuWV4oHL.js";import{Y as y}from"./YAxis-Bm1MK_pl.js";import{S as h}from"./Scatter-By-V1iFT.js";import{E as e}from"./ErrorBar-BRo7GXoV.js";import{T as u}from"./Tooltip-kufh7Sgn.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bghi6ZRK.js";import"./zIndexSlice-gBXHaIY6.js";import"./resolveDefaultProps-B2yJhwFE.js";import"./get-CjriyByo.js";import"./redux-toolkit.esm-D_pQmptz.js";import"./index-CHzPnfIT.js";import"./index-5xbZMWg1.js";import"./axisSelectors-EZDSIF5u.js";import"./polarAxisSelectors-CFbKEyZ8.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-BRWdQdSe.js";import"./index-PETS0UhS.js";import"./index-BK6Ilp-H.js";import"./renderedTicksSlice-CilCeieo.js";import"./index-CtXM72i0.js";import"./fillDefinitions-IzAh6C3K.js";import"./CartesianChart-C-z-JDjQ.js";import"./chartDataContext-BbJwl4x7.js";import"./CategoricalChart-D9q-ZVsT.js";import"./CartesianAxis-Cl0edJ8g.js";import"./Layer-DccvzxoJ.js";import"./Text-gRe7KF5h.js";import"./ZIndexLayer-BFOdALhB.js";import"./Label-C38PHRGq.js";import"./types-DUCsLnxG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-D7kCW6zO.js";import"./activeStyles-DarVPLRL.js";import"./useAnimationId-JmfqkQro.js";import"./Curve-YzirgrH8.js";import"./step-BqjoQNYS.js";import"./path-BBMZd4YL.js";import"./tooltipContext-BBA8ygrX.js";import"./Symbols-BNaTe5h-.js";import"./symbol-qTHekaJz.js";import"./ActiveShapeUtils-CycVwTKF.js";import"./ErrorBarContext-Bka5ymRE.js";import"./SetGraphicalItem-ClWcTtiF.js";import"./useEffectiveDataKey-DPchhFnV.js";import"./CSSTransitionAnimate-COwHRXCy.js";import"./util-Dxo8gN5i.js";import"./getUniqPayload-DAvcTrd6.js";import"./uniqBy-DOg5MgEB.js";import"./iteratee-BGJ_B21x.js";import"./isArguments-yB-y1yaH.js";import"./Cross-qaIs1wuS.js";import"./Rectangle-Btd8NkER.js";import"./Sector-Bh9Zkm4g.js";const Yr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Ar=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
