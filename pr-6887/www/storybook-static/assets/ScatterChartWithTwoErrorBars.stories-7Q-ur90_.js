import{e as r}from"./iframe-BjHGzV_g.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-BJpmjn08.js";import{S as p}from"./ScatterChart-D9nWqwzZ.js";import{C as d}from"./CartesianGrid-DuvwaQ2k.js";import{X as c}from"./XAxis-DS6la1y6.js";import{Y as y}from"./YAxis-ChYWGLAS.js";import{S as h}from"./Scatter-Bp7svnM3.js";import{E as e}from"./ErrorBar-BnaEPBBr.js";import{T as u}from"./Tooltip-Bz7pyy1o.js";import{R as f}from"./RechartsHookInspector-D9VSdGzF.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BpQ0Nvj-.js";import"./arrayEqualityCheck-DSmzEAOj.js";import"./resolveDefaultProps-BgzxguqS.js";import"./PolarUtils-DVfIyed4.js";import"./hooks-j3l1IZT0.js";import"./axisSelectors-Dcbbky9Q.js";import"./zIndexSlice-CeUR4dop.js";import"./CartesianChart-NrBloX0j.js";import"./chartDataContext-CvBxgAkC.js";import"./CategoricalChart-DUk9fPa6.js";import"./CartesianAxis-BWIPgogw.js";import"./Layer-C_w7y8lS.js";import"./Text-D_R22YNN.js";import"./DOMUtils-DJKWXfCz.js";import"./Label-CYo-ySuR.js";import"./ZIndexLayer-CXQSohMh.js";import"./types-CnIXHZZY.js";import"./ReactUtils-B_OhT6T8.js";import"./Curve-C15B5k0e.js";import"./tooltipContext-nxdyC6oO.js";import"./Symbols-BMG8T0tH.js";import"./ActiveShapeUtils-GRlfg2FZ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DzPvnNyw.js";import"./useAnimationId-aInF8bWj.js";import"./Trapezoid-BmpvqocW.js";import"./Sector-DqpJYgqY.js";import"./RegisterGraphicalItemId-DQPUuqCc.js";import"./ErrorBarContext-B6rkjVms.js";import"./GraphicalItemClipPath-BSkbIiNd.js";import"./SetGraphicalItem-CZBegNK8.js";import"./CSSTransitionAnimate-Jk27PV6t.js";import"./useElementOffset--3uo1L7M.js";import"./iteratee-BEelosjX.js";import"./Cross-BpvzPM3C.js";import"./index-D2ltde3K.js";import"./ChartSizeDimensions-RaKYClSi.js";import"./OffsetShower-CgzrN99U.js";import"./PlotAreaShower-CopDbqvE.js";const hr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ur=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,ur as __namedExportsOrder,hr as default};
