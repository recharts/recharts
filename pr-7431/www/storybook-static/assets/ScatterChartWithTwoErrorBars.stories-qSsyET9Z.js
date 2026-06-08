import{R as r}from"./iframe-CuVm1Ncb.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-DvM1DDCH.js";import{C as d}from"./CartesianGrid-C3fOygfX.js";import{X as c}from"./XAxis-JtvtAXXy.js";import{Y as y}from"./YAxis-BIy4mhNn.js";import{S as h}from"./Scatter-ClyanA1I.js";import{E as e}from"./ErrorBar-DMPn_oXU.js";import{T as u}from"./Tooltip-DBLd4KtR.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DT5GAsrf.js";import"./zIndexSlice-BZOjM71k.js";import"./immer-qI_Lx1cT.js";import"./index-DS-VAELW.js";import"./index-ezvYWD77.js";import"./get-mh9AHsYH.js";import"./resolveDefaultProps-DXODA9k0.js";import"./isWellBehavedNumber-Cs5mv3EE.js";import"./PolarUtils-CTnnDHZv.js";import"./index-2Eta-fPv.js";import"./index-CIKLroCx.js";import"./renderedTicksSlice-Cq4cXI7l.js";import"./axisSelectors-BqRugZOv.js";import"./d3-scale-DhSEg32F.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BLDYaQ2w.js";import"./chartDataContext-CM4lnGiM.js";import"./CategoricalChart-BJmxSqzB.js";import"./CartesianAxis-COqdKxvc.js";import"./Layer-CQ8j0Llf.js";import"./Text-LNz2FUpv.js";import"./DOMUtils-C4aU1diQ.js";import"./Label-CyUXMRAJ.js";import"./ZIndexLayer-HG2Tdc6L.js";import"./types-DjM_wMjP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-D-7ryyyq.js";import"./useAnimationId-DGicD8fh.js";import"./Curve-CK2N7RgZ.js";import"./step-BGKZVTtP.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CNcdNagZ.js";import"./Symbols-Cc3MwC4A.js";import"./symbol-DsUPOcEP.js";import"./ActiveShapeUtils-ClNcGcwL.js";import"./RegisterGraphicalItemId-Ji3BKNxF.js";import"./ErrorBarContext-ftGml07d.js";import"./GraphicalItemClipPath-BofgE1jJ.js";import"./SetGraphicalItem-DDjVRXYZ.js";import"./CSSTransitionAnimate-BDyq146W.js";import"./useElementOffset-WvcCUeh1.js";import"./uniqBy-DQgue2C1.js";import"./iteratee-CrZQWday.js";import"./Cross-DTx7UCxu.js";import"./Rectangle-fz3Cheh_.js";import"./Sector-CAZA4MrW.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
