import{e as r}from"./iframe-DnKPxY7a.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-KBUID7yw.js";import{C as d}from"./CartesianGrid-BUMSM3nv.js";import{X as c}from"./XAxis-BAn9u7ZP.js";import{Y as y}from"./YAxis-RGcfB1__.js";import{S as h}from"./Scatter--SfldjAY.js";import{E as e}from"./ErrorBar-B6fhEctV.js";import{T as u}from"./Tooltip-BuKln3FH.js";import{R as f}from"./RechartsHookInspector-C1a5f-X8.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-nQtYlSir.js";import"./arrayEqualityCheck-BRLe4SS-.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DOqUyIeg.js";import"./immer-D9hLCfsI.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CC8a_PKZ.js";import"./hooks-DeeMtons.js";import"./axisSelectors-BXdD8PxV.js";import"./d3-scale-C2xqHqad.js";import"./zIndexSlice-KD1BDYTU.js";import"./renderedTicksSlice-CFEn4_Md.js";import"./CartesianChart-Coa75cqV.js";import"./chartDataContext-CJJd-wkg.js";import"./CategoricalChart-hpH9n4Dg.js";import"./CartesianAxis-BuD04Hve.js";import"./Layer-DeK52Cv4.js";import"./Text-CqYxA_ST.js";import"./DOMUtils-0c6Z1U3w.js";import"./Label-75Lwdv3P.js";import"./ZIndexLayer-BFRrJfPa.js";import"./types-CYYN-QxE.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-4peIRB2B.js";import"./Curve-Dkc-iOzw.js";import"./step-xT0L5jQX.js";import"./tooltipContext-CwoCTbpJ.js";import"./Symbols-KdBGH5vz.js";import"./symbol-CiognWkM.js";import"./ActiveShapeUtils-CgK_A1V3.js";import"./isPlainObject-DfAQHXtw.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-y2LFFHGo.js";import"./useAnimationId-DEpRCopS.js";import"./Trapezoid-DNxvKaBL.js";import"./Sector-CnwcOah-.js";import"./RegisterGraphicalItemId-DwM7Te_7.js";import"./ErrorBarContext-DIOAcn2L.js";import"./GraphicalItemClipPath-DAZ9bgmo.js";import"./SetGraphicalItem-BlPK52Q_.js";import"./CSSTransitionAnimate-D7hKQF9i.js";import"./useElementOffset-DzUiSj4Y.js";import"./uniqBy-BCgakUVh.js";import"./iteratee-BZCWsX37.js";import"./Cross-lPBROCZR.js";import"./index-CdavTI8c.js";import"./ChartSizeDimensions-CY_4B8hK.js";import"./OffsetShower-BXqoFf7d.js";import"./PlotAreaShower-CJTPHZ_L.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
