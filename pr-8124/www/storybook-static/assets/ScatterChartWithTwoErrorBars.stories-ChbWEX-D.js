import{R as r}from"./iframe-DpFoyu2v.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-Du9VM1Sg.js";import{C as d}from"./CartesianGrid-CyfgoVXE.js";import{X as c}from"./XAxis-B0PuBmnr.js";import{Y as y}from"./YAxis-UjIlgdkn.js";import{S as h}from"./Scatter-D98-fW0D.js";import{E as e}from"./ErrorBar-C32AQ57t.js";import{T as u}from"./Tooltip-ByKC-vUJ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BNB2siqp.js";import"./zIndexSlice-BR5-by35.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Bl7dCfEE.js";import"./throttle-CbL9mvVE.js";import"./index-CXkQwc1T.js";import"./index-Dvxsi2Qy.js";import"./axisSelectors-DsRIuzGY.js";import"./polarAxisSelectors-CoSF9I4I.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DFMCrQku.js";import"./index-CQQQihly.js";import"./index-DPbLagXs.js";import"./renderedTicksSlice-DLxnQ8Ny.js";import"./index-J5LyVsrM.js";import"./CartesianChart-C9Oi4Bgl.js";import"./ZIndexPortal-j1WUiNyF.js";import"./CategoricalChart-CbXZ5UqK.js";import"./CartesianAxis-C3Cmf1pW.js";import"./Layer-C27d_lJh.js";import"./Text-B1i7DvDe.js";import"./DOMUtils-I7Jj66xj.js";import"./ZIndexLayer-Q15FdZk9.js";import"./Label-RSQOEDTQ.js";import"./types-nITqZw6s.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-BcqFX_Cs.js";import"./activeStyles-Dlv-kHFt.js";import"./useAnimationId-DcTYtpTG.js";import"./dataEntryStyles-BSD8zeo1.js";import"./Curve-CrBw6Qm3.js";import"./step-DIzEC01T.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CGsnQSSL.js";import"./Symbols-BqVxLZyQ.js";import"./symbol-Bc1WE4jB.js";import"./ActiveShapeUtils-DOhyqEjv.js";import"./ErrorBarContext-C0P4PP3P.js";import"./SetGraphicalItem-BiUFphqr.js";import"./useEffectiveDataKey-D3EJWYit.js";import"./fillDefinitions-CLwCi-e2.js";import"./CSSTransitionAnimate-CEAwYl5B.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-wTrI9o3y.js";import"./uniqBy-Bawyhepk.js";import"./iteratee-BD3h7MYT.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BMOocMKo.js";import"./Rectangle-D1RSMQ2o.js";import"./Sector-DyuVM7Tk.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
