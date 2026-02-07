import{e as r}from"./iframe-DhLWPZ06.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-CaeXznmO.js";import{S as p}from"./ScatterChart-Bn_2fA9D.js";import{C as d}from"./CartesianGrid-Dbvz7fke.js";import{X as c}from"./XAxis-DHBBBHf5.js";import{Y as y}from"./YAxis-CnLq9B_y.js";import{S as h}from"./Scatter-BLWJV6uu.js";import{E as e}from"./ErrorBar-ByJ7CZtF.js";import{T as u}from"./Tooltip-BYrJLHQh.js";import{R as f}from"./RechartsHookInspector-BYy17HVN.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DUMd0Jc6.js";import"./arrayEqualityCheck-CC1O7uMi.js";import"./resolveDefaultProps-Xflu8RP3.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-BVelaaLp.js";import"./axisSelectors-DMZtzusH.js";import"./zIndexSlice-DphDhRje.js";import"./CartesianChart-XrmXSdkV.js";import"./chartDataContext-D-yHh9FI.js";import"./CategoricalChart-CZEP5E7E.js";import"./CartesianAxis-DBjvK8IT.js";import"./Layer-DYv-jvxI.js";import"./Text-DO5FmLPB.js";import"./DOMUtils-CqWLBihg.js";import"./Label-FSHYxmdz.js";import"./ZIndexLayer-DD1HiNcR.js";import"./types-C2AjUdZP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BtUFOzkx.js";import"./Curve-CrhEQPlh.js";import"./tooltipContext-BsMjffBi.js";import"./Symbols-BmApJZ92.js";import"./ActiveShapeUtils-BM0r3s-g.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DZfrdEyG.js";import"./useAnimationId-C9SVwlUf.js";import"./Trapezoid-C38TpHLa.js";import"./Sector-DNph1k80.js";import"./RegisterGraphicalItemId-DKys76eX.js";import"./ErrorBarContext-D2Y9d5di.js";import"./GraphicalItemClipPath-CuDzi9bq.js";import"./SetGraphicalItem-BLAlPe4G.js";import"./CSSTransitionAnimate-Bi294Jyw.js";import"./useElementOffset-BcoburPK.js";import"./iteratee-B1pJwrfy.js";import"./Cross-Xmt4-0aU.js";import"./index-DvWkBSj_.js";import"./ChartSizeDimensions-C4EMLUii.js";import"./OffsetShower-DlJYxrX-.js";import"./PlotAreaShower-HP7o8TwR.js";const ur={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
