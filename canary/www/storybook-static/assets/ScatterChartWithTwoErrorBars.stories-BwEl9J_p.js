import{R as r}from"./iframe-DZbjLUQo.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-BiYh2YNU.js";import{C as d}from"./CartesianGrid-DMDlODhK.js";import{X as c}from"./XAxis-Cb9he-VA.js";import{Y as y}from"./YAxis-C0N5iwNJ.js";import{S as h}from"./Scatter-Cvz4swpK.js";import{E as e}from"./ErrorBar-BoI4aR9x.js";import{T as u}from"./Tooltip-2fzgYbwj.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B7gpneaA.js";import"./zIndexSlice-kNjtHJvr.js";import"./throttle-Cj_7MghT.js";import"./index--Cvbr4ei.js";import"./index-s3XojKdv.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-7vFM5A8a.js";import"./isWellBehavedNumber-C3IgPBb_.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-SzDg3mS0.js";import"./d3-scale-BGQa_b-A.js";import"./index-Fa7FBVrf.js";import"./index-DZ5C6rYB.js";import"./renderedTicksSlice-Ds3e7SoF.js";import"./index-DGK0wEWr.js";import"./CartesianChart-xRZlZbQd.js";import"./chartDataContext-DvL8FmIv.js";import"./CategoricalChart-D0VTS456.js";import"./CartesianAxis-Bk45HDsq.js";import"./Layer-Dh4rshAh.js";import"./Text-DfE0Fd2l.js";import"./pageBackground-j9oVi7TB.js";import"./useId-uis-dzmY.js";import"./useBackwardsCompatibleTheme-BfjKogZ5.js";import"./Label-QWXq4PsH.js";import"./ZIndexLayer-CKCEdo-g.js";import"./dataEntryStyles-OfgH0EAC.js";import"./types-BIiFdC-Q.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-jlHAdlvX.js";import"./useAnimationId-CK6aB1Dm.js";import"./Curve-C9le9A2W.js";import"./step-BWJj5B7H.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BxxS945K.js";import"./Symbols-BG9p6Mv4.js";import"./symbol-COTSugY-.js";import"./ActiveShapeUtils-ncETWQyV.js";import"./RegisterGraphicalItemId-DrXewaeQ.js";import"./ErrorBarContext-BdWQYqFr.js";import"./GraphicalItemClipPath-BDvSZObJ.js";import"./SetGraphicalItem-BJ2EKqIC.js";import"./useEffectiveDataKey-DRn6J3kp.js";import"./CSSTransitionAnimate-ubPD2GyL.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-BqEhG3ye.js";import"./uniqBy-COgWTsrM.js";import"./iteratee-DFCPY5kb.js";import"./isArguments-yB-y1yaH.js";import"./Cross-_uoJFZOo.js";import"./Rectangle--8czTBQy.js";import"./Sector-B41kLOtL.js";const Or={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},kr=["WithErrorBarsAndExtendedDomain"];var a,i,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(i=t.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};export{t as WithErrorBarsAndExtendedDomain,kr as __namedExportsOrder,Or as default};
