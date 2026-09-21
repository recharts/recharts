import{R as r}from"./iframe-Dj8Z6PrK.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-prg8Rfv9.js";import{C as d}from"./CartesianGrid-wiVSrfDN.js";import{X as c}from"./XAxis-CLQEk-FG.js";import{Y as y}from"./YAxis-CqPgB4kL.js";import{S as h}from"./Scatter-BMWB-c23.js";import{E as e}from"./ErrorBar-CwUcgEW-.js";import{T as u}from"./Tooltip-4kfCVcdq.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-XYW6BA6T.js";import"./zIndexSlice-Dis8kkjQ.js";import"./throttle-CKdcDnHb.js";import"./index-Bx3PqqYW.js";import"./index-CA6chf5t.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B-9SHASA.js";import"./isWellBehavedNumber-BxyDY2ba.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-B4pFlXeA.js";import"./d3-scale-1D4CewQG.js";import"./index-BBXX-7T2.js";import"./index-BMZ0mV9M.js";import"./renderedTicksSlice-zGdO_NAv.js";import"./index-MAP75uR-.js";import"./CartesianChart-pWv6R1U2.js";import"./chartDataContext-DnNc1DHN.js";import"./CategoricalChart-B9MwHwt-.js";import"./CartesianAxis-C_t42adW.js";import"./Layer-BAM8ommd.js";import"./Text-c1trxvgH.js";import"./DOMUtils-Bp6mSslK.js";import"./useId-mH59anzj.js";import"./useBackwardsCompatibleTheme-BW-Eyyrw.js";import"./Label-BbvgfVci.js";import"./ZIndexLayer-DjnDFneh.js";import"./types-CIgkXEGC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-0rSS-oCT.js";import"./useAnimationId-DORt3e-J.js";import"./Curve-m98fbF0c.js";import"./step-ncsjPZ4b.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DfeuGQT_.js";import"./Symbols-DHrTdB_G.js";import"./symbol-f49vh_gz.js";import"./ActiveShapeUtils-tGmUUFtW.js";import"./RegisterGraphicalItemId-B_hXYrSH.js";import"./ErrorBarContext-D5I-eLzk.js";import"./GraphicalItemClipPath-WRfkTQaB.js";import"./SetGraphicalItem-vQHk7qeP.js";import"./useGraphicalItemIdentity-WP1DKWAp.js";import"./CSSTransitionAnimate-DTPE0G10.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-CEBQPOfc.js";import"./uniqBy-CN11yF73.js";import"./iteratee-CSiy3jc8.js";import"./Cross-BEWH4yZn.js";import"./Rectangle--VBhlI6J.js";import"./Sector-B39pprSn.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
