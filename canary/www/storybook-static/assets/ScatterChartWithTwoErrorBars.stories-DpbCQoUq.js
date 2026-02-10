import{e as r}from"./iframe-D1NCNqUw.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-CaeXznmO.js";import{S as p}from"./ScatterChart-qZ_RFYT2.js";import{C as d}from"./CartesianGrid-Bd5YNvuL.js";import{X as c}from"./XAxis-u0hdrjRw.js";import{Y as y}from"./YAxis-A9YbMvOB.js";import{S as h}from"./Scatter-BIpoHizD.js";import{E as e}from"./ErrorBar-Bj34M4Pp.js";import{T as u}from"./Tooltip-DNRnEVuU.js";import{R as f}from"./RechartsHookInspector-ZreWXCAw.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DHOsEYDB.js";import"./arrayEqualityCheck-CQjIdQCx.js";import"./resolveDefaultProps-Djsbq22w.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-JIh16Fdo.js";import"./axisSelectors-I3OUkjeV.js";import"./zIndexSlice-B6vCGJts.js";import"./CartesianChart-JOI6h5bX.js";import"./chartDataContext-Dg8xMp5I.js";import"./CategoricalChart-Dz9zkg_l.js";import"./CartesianAxis-C56nwzMo.js";import"./Layer-BCRy6dX1.js";import"./Text-IRTIkJKa.js";import"./DOMUtils-DHPWyRpf.js";import"./Label-BNrwDKuI.js";import"./ZIndexLayer-DGrkiEgC.js";import"./types-gvwBC4-3.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BB1Bvtm-.js";import"./Curve-C3pHY6tL.js";import"./tooltipContext-Cmujxu44.js";import"./Symbols-DMX5HiXT.js";import"./ActiveShapeUtils-5Ae3vqBy.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BNiHE16P.js";import"./useAnimationId-CaRLwgfn.js";import"./Trapezoid-BR4vRuXB.js";import"./Sector-TTqZtEvI.js";import"./RegisterGraphicalItemId-C1aQBUzf.js";import"./ErrorBarContext-DeYCKUhW.js";import"./GraphicalItemClipPath-BqkTWDYP.js";import"./SetGraphicalItem-D7KZSAt9.js";import"./CSSTransitionAnimate-Cj0duasV.js";import"./useElementOffset-CxGOc-CC.js";import"./iteratee-B-7bARrX.js";import"./Cross-DHzBM6ad.js";import"./index-BmYae47F.js";import"./ChartSizeDimensions-CQGmt7Jm.js";import"./OffsetShower-jlBTnn9Z.js";import"./PlotAreaShower-CLC5srun.js";const ur={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
