import{R as r}from"./iframe-CFREJgKh.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-W0dxbLeM.js";import{C as d}from"./CartesianGrid-hr-lupo1.js";import{X as c}from"./XAxis-C8rslJeD.js";import{Y as y}from"./YAxis-BpqGKlEV.js";import{S as h}from"./Scatter-K47LWYMR.js";import{E as e}from"./ErrorBar-P0Ley4Om.js";import{T as u}from"./Tooltip-CupqeGY6.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-i5dbrXIz.js";import"./zIndexSlice-BlChPiJc.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D2NJN12P.js";import"./throttle-D0fuDWYv.js";import"./index-BnRinVhV.js";import"./index-9ppQqeZ5.js";import"./axisSelectors-BWBf8JbO.js";import"./polarAxisSelectors-U9vqJLN4.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CSfabLms.js";import"./index-DNbnfthz.js";import"./index-CXWxUzol.js";import"./renderedTicksSlice-BlPhjOzM.js";import"./index-BMrIm2ob.js";import"./CartesianChart-DKqxdz5e.js";import"./ZIndexPortal-CxkIiCll.js";import"./CategoricalChart-wyRiJqKi.js";import"./CartesianAxis-DYae0Cq3.js";import"./Layer-C0qOZ959.js";import"./Text-CdYm4waL.js";import"./pageBackground-BhcEVreL.js";import"./ZIndexLayer-C1WGeCae.js";import"./Label-CqB5IeGz.js";import"./types-DVbjgkU5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-D_a5qFT1.js";import"./activeStyles-DZOohqxv.js";import"./useAnimationId-D_reCqg_.js";import"./dataEntryStyles-D-tUw7To.js";import"./Curve-CftG2h3G.js";import"./step-BcalNNwl.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BjGhA_2X.js";import"./Symbols-C448CvWL.js";import"./symbol-nJMR8kbN.js";import"./ActiveShapeUtils-D0KAMjVA.js";import"./ErrorBarContext-Ckc5teto.js";import"./SetGraphicalItem-DdrEYt3d.js";import"./useEffectiveDataKey-D5PSAWPt.js";import"./CSSTransitionAnimate-BpgtZyMc.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-D9x3IcJV.js";import"./uniqBy-DeAafqXU.js";import"./iteratee-iRN6k7X2.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DBVgOnwX.js";import"./Rectangle-BcQT3jTk.js";import"./Sector-g9nIfeJI.js";const Ar={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Sr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Sr as __namedExportsOrder,Ar as default};
