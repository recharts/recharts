import{R as r}from"./iframe-DQVzMSYD.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-DDxO7azU.js";import{C as d}from"./CartesianGrid-D6V-fHLA.js";import{X as c}from"./XAxis-EcPa3Cb-.js";import{Y as y}from"./YAxis-C77qq_aV.js";import{S as h}from"./Scatter-DJm3-vpi.js";import{E as e}from"./ErrorBar-CcXa7FIz.js";import{T as u}from"./Tooltip-DY53DxeQ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C-LDIUUV.js";import"./zIndexSlice-COaPk7HG.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-B_q_xmSS.js";import"./throttle-RO9RTr3r.js";import"./index-BwLkx-9j.js";import"./index-E8O3UkuU.js";import"./axisSelectors-D2aZ2Nk7.js";import"./polarAxisSelectors-BSp_MBDw.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CB3Nn2aV.js";import"./index-mH-U0iC2.js";import"./index-BedQbpOM.js";import"./renderedTicksSlice-h-EAnLPI.js";import"./index-eU6OKF0g.js";import"./CartesianChart-DUEad30c.js";import"./chartDataContext-FD6VhEJQ.js";import"./CategoricalChart-Doih-QNH.js";import"./CartesianAxis-D4euaSSo.js";import"./Layer-Bj9bz4HQ.js";import"./Text-CPLLX1IN.js";import"./pageBackground-Bn8h5x5L.js";import"./useId-DXg-zq7I.js";import"./ZIndexLayer-BnIZToy7.js";import"./Label-D0zJX0d_.js";import"./dataEntryStyles-CJ67-Ft7.js";import"./types-DP1nwDJM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-BOapb_qi.js";import"./useAnimationId-BChg9XFS.js";import"./Curve-Bt3n70L8.js";import"./step-BQC9MPym.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CAUFXK5m.js";import"./Symbols-CiPXHPgW.js";import"./symbol-C1jDOFfw.js";import"./ActiveShapeUtils-Cp3IBj9J.js";import"./RegisterGraphicalItemId-B0YbUPXE.js";import"./ErrorBarContext-CI8iDnvM.js";import"./SetGraphicalItem-DFlRgyvC.js";import"./useEffectiveDataKey-CkAzTA5N.js";import"./CSSTransitionAnimate-Dji3QH5a.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DyUzreY7.js";import"./uniqBy-BJn9ALDR.js";import"./iteratee-BPCNyx3w.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DyQZyHKO.js";import"./Rectangle-BkBeu2DV.js";import"./Sector-ssOD9QbL.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Dr as __namedExportsOrder,Sr as default};
