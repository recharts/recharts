import{R as r}from"./iframe-Dt7VmJVd.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-Bua8rN86.js";import{C as d}from"./CartesianGrid-1C1JJ-8V.js";import{X as c}from"./XAxis-6DHVILmw.js";import{Y as y}from"./YAxis-BGz_S1YP.js";import{S as h}from"./Scatter-DNlD0OJ8.js";import{E as e}from"./ErrorBar-CQPLBB51.js";import{T as u}from"./Tooltip-BVGdfQP8.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DmetyJsw.js";import"./zIndexSlice-CsJRlQGe.js";import"./resolveDefaultProps-D90LOu0B.js";import"./get-CjriyByo.js";import"./throttle-DKLEp5Cv.js";import"./index-DIUBesy2.js";import"./index-r5JwRAUa.js";import"./axisSelectors-DsQjGGXt.js";import"./polarAxisSelectors-CfQ5T7pN.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-DKSFl2hd.js";import"./index-L0jXhzhq.js";import"./index-4O_IsFKD.js";import"./renderedTicksSlice-Dq9RCDmE.js";import"./index-CJYqS20C.js";import"./fillDefinitions-cJ_Pkre2.js";import"./CartesianChart-DLv9S8DO.js";import"./chartDataContext-DwcTyBcz.js";import"./CategoricalChart-DfxrMEj6.js";import"./CartesianAxis-D2lewiOd.js";import"./Layer-CKqAbqeS.js";import"./Text-CcewevJy.js";import"./ZIndexLayer-DkTMeL_u.js";import"./Label-DBOYMKjR.js";import"./types-D6xyOnmX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-BTAsZYzb.js";import"./activeStyles-CXzu6olF.js";import"./useAnimationId-CZxgU6AP.js";import"./Curve-zF9ULVmH.js";import"./step-C8vG3ka0.js";import"./path-BBMZd4YL.js";import"./tooltipContext-CB1f6TvU.js";import"./Symbols-CEcN4H71.js";import"./symbol-BNyIiosb.js";import"./ActiveShapeUtils-Boj2HH09.js";import"./ErrorBarContext-BfQEnsTO.js";import"./SetGraphicalItem-meI4aCtS.js";import"./useEffectiveDataKey-DfkEl2f7.js";import"./CSSTransitionAnimate-DWL0CLBR.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-D-hWuImz.js";import"./uniqBy-DBz81KvG.js";import"./iteratee-Csv0o0lQ.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DUJsKjqx.js";import"./Rectangle-Dhd8BSnf.js";import"./Sector-Dq9-kf9w.js";const Yr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Ar=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
