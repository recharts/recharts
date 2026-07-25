import{R as r}from"./iframe-DtpJQkSw.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-_Ssewp_B.js";import{C as d}from"./CartesianGrid-BRuRV5-q.js";import{X as c}from"./XAxis-BDLA9mvH.js";import{Y as y}from"./YAxis-7KC79Jwd.js";import{S as h}from"./Scatter-DwYAWBWS.js";import{E as e}from"./ErrorBar-BKkvYmpk.js";import{T as u}from"./Tooltip-zaUriAhU.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-GuBZSFZ_.js";import"./zIndexSlice-Dy2ZfcaY.js";import"./throttle-CYLsUs0w.js";import"./index-CVik1Y94.js";import"./index-qBeIIgbT.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Cjc4ovdW.js";import"./isWellBehavedNumber-BvF_giMt.js";import"./PolarUtils-CTnnDHZv.js";import"./index-Vvo-Q6um.js";import"./index-CFRYfm15.js";import"./renderedTicksSlice-C4FsNrs6.js";import"./axisSelectors-BtA0yFqg.js";import"./d3-scale-BbQAu0RB.js";import"./CartesianChart-DwY-VUV4.js";import"./chartDataContext-CkSWHG6R.js";import"./CategoricalChart-B6Np4ceD.js";import"./CartesianAxis-xTL6XmTN.js";import"./Layer-A5fdUiAt.js";import"./Text-CTFoNHWc.js";import"./DOMUtils-Cb4JkhR_.js";import"./Label-C9iRyFHw.js";import"./ZIndexLayer-BnsLSc-b.js";import"./types-D6abfmrW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./AnimatedItems-EBWp9peZ.js";import"./useAnimationId-B_99W7UQ.js";import"./Curve-D1mPklqy.js";import"./step-WcxcGmzd.js";import"./path-DyVhHtw_.js";import"./tooltipContext-GY6HBjLg.js";import"./Symbols-DDPwPNmK.js";import"./symbol-avOxhd6C.js";import"./ActiveShapeUtils-DirzpQmC.js";import"./RegisterGraphicalItemId-Bw3Bvi6g.js";import"./ErrorBarContext-CjSCr-ku.js";import"./GraphicalItemClipPath-DeNzzcHV.js";import"./SetGraphicalItem-x1medb7e.js";import"./CSSTransitionAnimate-Cx6rEQ7_.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-C4-NwrTh.js";import"./uniqBy-BnEmKZKr.js";import"./iteratee-ySlvR2sc.js";import"./Cross-B0Cxc6Kn.js";import"./Rectangle-C0kyo6e1.js";import"./Sector-SxN6jnjg.js";const Er={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Xr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Xr as __namedExportsOrder,Er as default};
