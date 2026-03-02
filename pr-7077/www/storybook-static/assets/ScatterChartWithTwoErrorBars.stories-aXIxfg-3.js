import{e as r}from"./iframe-CFR-gaGN.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-CaeXznmO.js";import{S as p}from"./ScatterChart-9Wq9IlGz.js";import{C as d}from"./CartesianGrid-BOeOMLnY.js";import{X as c}from"./XAxis-DQlERQHB.js";import{Y as y}from"./YAxis-Bo04wnJz.js";import{S as h}from"./Scatter-DVHrc_qF.js";import{E as e}from"./ErrorBar-B44r_2Xl.js";import{T as u}from"./Tooltip-DaoP09P6.js";import{R as f}from"./RechartsHookInspector-DAIAGGPn.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DeWitytO.js";import"./arrayEqualityCheck-B4mATf9c.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DjGpqQPT.js";import"./immer-Bk-xXHBC.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CSJLk245.js";import"./hooks-JwuHHdAq.js";import"./axisSelectors-D5HRTRW9.js";import"./d3-scale-BgOEq5Xh.js";import"./zIndexSlice-Boi-P9QX.js";import"./renderedTicksSlice-Br16TDM7.js";import"./CartesianChart-ueo_-gP0.js";import"./chartDataContext-BElgqktZ.js";import"./CategoricalChart-BnFLIcrr.js";import"./CartesianAxis-ClI6MqAO.js";import"./Layer-BHVJ1AiA.js";import"./Text-mFmQrBQg.js";import"./DOMUtils-yKB-qwZ7.js";import"./Label-DP_LAI-Y.js";import"./ZIndexLayer-C3JqUkkH.js";import"./types-DncqRVvk.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-C9SxeRDL.js";import"./Curve-xncZGYH6.js";import"./step-BuQilum9.js";import"./tooltipContext-6um_7vyP.js";import"./Symbols-tvatlAm7.js";import"./symbol-DyWKZjmK.js";import"./ActiveShapeUtils-DrwV2_Fx.js";import"./isPlainObject-D5r1oj15.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-1LUHF-ab.js";import"./useAnimationId-VCCfkRDK.js";import"./Trapezoid-C6_wzf5N.js";import"./Sector-DhcqTi-n.js";import"./RegisterGraphicalItemId-BEFkKq7O.js";import"./ErrorBarContext-GzoTlhrP.js";import"./GraphicalItemClipPath-Plh3ZetI.js";import"./SetGraphicalItem-DT4VFHn2.js";import"./CSSTransitionAnimate-_PZVrI5n.js";import"./useElementOffset-CL7hYgwQ.js";import"./uniqBy-D3vM5faK.js";import"./iteratee-BQ71FW9H.js";import"./Cross-ClGrA40Z.js";import"./index-BlXLNwUK.js";import"./ChartSizeDimensions-D3nOZoYf.js";import"./OffsetShower-CvuXOJnC.js";import"./PlotAreaShower-BMOctqSh.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
