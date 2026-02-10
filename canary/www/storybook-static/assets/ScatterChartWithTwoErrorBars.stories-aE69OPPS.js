import{e as r}from"./iframe-BJmj21Iv.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-CaeXznmO.js";import{S as p}from"./ScatterChart-h925rLtF.js";import{C as d}from"./CartesianGrid-C729DxfB.js";import{X as c}from"./XAxis-B-U8Jsdu.js";import{Y as y}from"./YAxis-BnZN_5Sd.js";import{S as h}from"./Scatter-DBClnQw5.js";import{E as e}from"./ErrorBar-DoHVR22A.js";import{T as u}from"./Tooltip-C91bUDsX.js";import{R as f}from"./RechartsHookInspector-niLfVp7l.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DbAa2EPs.js";import"./arrayEqualityCheck-DUr5Baor.js";import"./resolveDefaultProps-BRnWZzOd.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-B5MTKyny.js";import"./axisSelectors-CjDiZ-xu.js";import"./zIndexSlice-COvs_Sat.js";import"./CartesianChart-DEbVCltq.js";import"./chartDataContext-Cx9KpUyq.js";import"./CategoricalChart-B8_cyiQX.js";import"./CartesianAxis-BAnw5oBq.js";import"./Layer-CfTs1qEr.js";import"./Text-DA6O7Yy4.js";import"./DOMUtils-CQprm85Q.js";import"./Label-B5aPNwUF.js";import"./ZIndexLayer-h8hw7e3y.js";import"./types-BB2yvksg.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-B_n9e2df.js";import"./Curve-DSyQRjp9.js";import"./tooltipContext-9TyWwaRO.js";import"./Symbols-Li-QgOej.js";import"./ActiveShapeUtils-COxfqJFr.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BtPz-Bf1.js";import"./useAnimationId-BtjxpnPj.js";import"./Trapezoid-DUAp6hoC.js";import"./Sector-Dq6mbUDa.js";import"./RegisterGraphicalItemId-DTHmNv35.js";import"./ErrorBarContext-DSxRheLC.js";import"./GraphicalItemClipPath-CzdqANMv.js";import"./SetGraphicalItem-DUq8N8zo.js";import"./CSSTransitionAnimate-LbMftZKl.js";import"./useElementOffset-BA4CWq7u.js";import"./iteratee-Cf1__6jE.js";import"./Cross-BpszxVfi.js";import"./index-Bcx4MYAQ.js";import"./ChartSizeDimensions-DzMxt8cg.js";import"./OffsetShower-Do6Xki0H.js";import"./PlotAreaShower-CQq3hYEg.js";const ur={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const fr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,fr as __namedExportsOrder,ur as default};
