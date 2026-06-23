import{R as r}from"./iframe-DQmeeGiA.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-DFYGFfBq.js";import{C as d}from"./CartesianGrid-D1MIA-G4.js";import{X as c}from"./XAxis-CPOb-1qE.js";import{Y as y}from"./YAxis-BSQK2YTa.js";import{S as h}from"./Scatter-B9HlrumT.js";import{E as e}from"./ErrorBar-Dq6wLrzR.js";import{T as u}from"./Tooltip-C6MCJIIJ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D3uqokgy.js";import"./zIndexSlice-vj7A5RkB.js";import"./immer-CuM-_qKB.js";import"./index-DCJPjZ_f.js";import"./index-D_KMR0re.js";import"./get-D0YgmYSp.js";import"./resolveDefaultProps-CQRwsHO0.js";import"./isWellBehavedNumber-CJ4H_fXR.js";import"./PolarUtils-CTnnDHZv.js";import"./index-D1lTGX2z.js";import"./index-ZLNt73_J.js";import"./renderedTicksSlice-CpMyOcpp.js";import"./axisSelectors-Cn3uvYUg.js";import"./d3-scale-B-26TW07.js";import"./CartesianChart-CE19F1By.js";import"./chartDataContext-GPNpGYxg.js";import"./CategoricalChart-D7Ayh5uN.js";import"./CartesianAxis-CsI9VW1t.js";import"./Layer-C92GpBxv.js";import"./Text-CaOtzMPo.js";import"./DOMUtils-D4CFUHQm.js";import"./Label-DLumr0gz.js";import"./ZIndexLayer-LS7m1tXW.js";import"./types-BWqAEvBR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-DSodAZpf.js";import"./useAnimationId-VbcZ3sEu.js";import"./Curve-BSCksJ2p.js";import"./step-B5y8ObV2.js";import"./path-DyVhHtw_.js";import"./tooltipContext-YOw13Mgv.js";import"./Symbols-uMOogOnn.js";import"./symbol-BWzlkA2r.js";import"./ActiveShapeUtils-CHmC6EYX.js";import"./RegisterGraphicalItemId-Bgc1uwdC.js";import"./ErrorBarContext-aN2SYuw4.js";import"./GraphicalItemClipPath-BWRZakeV.js";import"./SetGraphicalItem-CiXKqcwE.js";import"./CSSTransitionAnimate-DXppR4pk.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-Duwsc3QZ.js";import"./uniqBy-KqLhsUPy.js";import"./iteratee-B34lqcgr.js";import"./Cross-RQft4sJ7.js";import"./Rectangle-Bsb4rUs5.js";import"./Sector-CjffYPJE.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
