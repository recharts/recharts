import{R as r}from"./iframe-BcyvxDDm.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-CzD07blA.js";import{C as d}from"./CartesianGrid-r9xfU8Bh.js";import{X as c}from"./XAxis-hKqegIsy.js";import{Y as y}from"./YAxis-DWNExzo5.js";import{S as h}from"./Scatter-CMPGFvTO.js";import{E as e}from"./ErrorBar-yd0v358W.js";import{T as u}from"./Tooltip-DfrCugVp.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BKq7sB4k.js";import"./zIndexSlice-CjqwPb4I.js";import"./throttle-Da4mYIun.js";import"./index-BbDVdbFr.js";import"./index-DylQUhO9.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DYK2TugC.js";import"./isWellBehavedNumber-DT8eXGOZ.js";import"./PolarUtils-CTnnDHZv.js";import"./index-VYrkeph1.js";import"./index-CmO5XTPj.js";import"./renderedTicksSlice-C78J9WJd.js";import"./axisSelectors-Ft8qoIRM.js";import"./d3-scale-CuOcyn8C.js";import"./CartesianChart-Dy4JzN_k.js";import"./chartDataContext-q6A5cODj.js";import"./CategoricalChart-CjQdcPEp.js";import"./CartesianAxis-X-wBC9Mi.js";import"./Layer-BbNzeSuC.js";import"./Text-DHboH0PZ.js";import"./DOMUtils-BbuOOwxk.js";import"./Label-DKWc-r2Z.js";import"./ZIndexLayer-O4JEDRQM.js";import"./types-BRN82dlo.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-C_84PZuB.js";import"./useAnimationId-UCivMRaV.js";import"./Curve-Cd8N0Bzf.js";import"./step-VnJCxhpn.js";import"./path-DyVhHtw_.js";import"./tooltipContext-gCCyTBXM.js";import"./Symbols-xmwrzh0l.js";import"./symbol-mg0Qyk3e.js";import"./ActiveShapeUtils-CAO4oJEH.js";import"./RegisterGraphicalItemId-MfcacHn_.js";import"./ErrorBarContext-Bo7tXsWd.js";import"./GraphicalItemClipPath-gcf9l3Dr.js";import"./SetGraphicalItem-NfXYYfkR.js";import"./CSSTransitionAnimate-CwjPOpEG.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-BgpGSJ6K.js";import"./uniqBy-Dl_hAjLn.js";import"./iteratee-Danss_sE.js";import"./Cross-Dg8BbIcS.js";import"./Rectangle-Df6t51Wj.js";import"./Sector-CFNehNZn.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Er=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Er as __namedExportsOrder,xr as default};
