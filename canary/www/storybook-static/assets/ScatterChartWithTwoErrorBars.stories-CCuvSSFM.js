import{e as r}from"./iframe-DwqRYk2I.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-BJpmjn08.js";import{S as p}from"./ScatterChart-CLuivfM3.js";import{C as d}from"./CartesianGrid-CsOMLjge.js";import{X as c}from"./XAxis-Cyh_YOcY.js";import{Y as y}from"./YAxis-QYWka3EJ.js";import{S as h}from"./Scatter-0mIHd5IA.js";import{E as e}from"./ErrorBar-DScvSoJL.js";import{T as u}from"./Tooltip-CyQmKoLP.js";import{R as f}from"./RechartsHookInspector-DYt25tbN.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C7VpHEZH.js";import"./arrayEqualityCheck-DgzFlSOI.js";import"./resolveDefaultProps-DNDo_DVE.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-D1ZMD5tV.js";import"./axisSelectors-BOQABpOz.js";import"./zIndexSlice-CZHcI390.js";import"./CartesianChart-DcDVXLOL.js";import"./chartDataContext-Ctj-_rOR.js";import"./CategoricalChart-BLGSXnLr.js";import"./CartesianAxis-0yio1lEn.js";import"./Layer-CKGvS6fh.js";import"./Text-DFlmLHAl.js";import"./DOMUtils-KiKr0dq-.js";import"./Label-BBrY7asM.js";import"./ZIndexLayer-14WaUFCY.js";import"./types-DQBQm6yM.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CSQ_QEna.js";import"./Curve-MGg7iv1Z.js";import"./tooltipContext-D4tYLNyP.js";import"./Symbols--4uQfBg4.js";import"./ActiveShapeUtils-DqRUZVTG.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bp9O5e-s.js";import"./useAnimationId-BgtwKRIK.js";import"./Trapezoid-DufcdAFp.js";import"./Sector-0XUVx_Z1.js";import"./RegisterGraphicalItemId-Bfk0jvW8.js";import"./ErrorBarContext-DWBN2nFH.js";import"./GraphicalItemClipPath-D2KsqG86.js";import"./SetGraphicalItem-099u0L0c.js";import"./CSSTransitionAnimate-B0KfdiCI.js";import"./useElementOffset-BIde8PX1.js";import"./iteratee-Czloof4i.js";import"./Cross-BlqNBQJ4.js";import"./index-B__3XDnp.js";import"./ChartSizeDimensions-BDK5RpWT.js";import"./OffsetShower-CMnq-Zau.js";import"./PlotAreaShower-DGemeH0F.js";const ur={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
