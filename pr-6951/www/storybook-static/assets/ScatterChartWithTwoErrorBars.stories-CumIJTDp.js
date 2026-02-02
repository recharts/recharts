import{e as r}from"./iframe-Cce3OzqZ.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-BQ_MGVXj.js";import{S as p}from"./ScatterChart-CxojcQB4.js";import{C as d}from"./CartesianGrid-xJPuKkvE.js";import{X as c}from"./XAxis-DnzcawyL.js";import{Y as y}from"./YAxis-Dzu8TGr_.js";import{S as h}from"./Scatter-CDFJo5kI.js";import{E as e}from"./ErrorBar-B-SeoAJS.js";import{T as u}from"./Tooltip-V1dCfx-Q.js";import{R as f}from"./RechartsHookInspector-eGeMVAmo.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BB7xPYUQ.js";import"./arrayEqualityCheck-Db-Wlt3-.js";import"./resolveDefaultProps-clrD5nAI.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-CvLdkisu.js";import"./axisSelectors-Bcvcu9k5.js";import"./zIndexSlice-Cor1sHRq.js";import"./CartesianChart-CWSN6Hlp.js";import"./chartDataContext-CgfT6HWr.js";import"./CategoricalChart-9DlpQFFM.js";import"./CartesianAxis-D93mj95O.js";import"./Layer-CFkQXCn1.js";import"./Text-CY2c_dSA.js";import"./DOMUtils-T3Cy7g6m.js";import"./Label-C4rMK4zH.js";import"./ZIndexLayer-BKOy02ft.js";import"./types-b_fBODQO.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Nar3liya.js";import"./Curve-Fkz9pikW.js";import"./tooltipContext-Bb15o9BC.js";import"./Symbols-BhodARnK.js";import"./ActiveShapeUtils-BMdNKtxM.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C3wzWw1S.js";import"./useAnimationId-CDstBXSk.js";import"./Trapezoid-kBqI72Ws.js";import"./Sector-CPI45FrX.js";import"./RegisterGraphicalItemId-9_Paa6o8.js";import"./ErrorBarContext-DV0NqXL1.js";import"./GraphicalItemClipPath-BC3qMhyN.js";import"./SetGraphicalItem-DtwoVgdz.js";import"./CSSTransitionAnimate-CpGRTPST.js";import"./useElementOffset-DlgU6Nfl.js";import"./iteratee-Be38ZP-8.js";import"./Cross-h5tftxi5.js";import"./index-DVt7NuEo.js";import"./ChartSizeDimensions-g60a5Ajl.js";import"./OffsetShower-TfY9mri6.js";import"./PlotAreaShower-CZOh-CeP.js";const ur={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
