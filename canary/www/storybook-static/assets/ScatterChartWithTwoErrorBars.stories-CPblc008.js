import{R as r}from"./iframe-DKDUQR4e.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-DyxAzaBi.js";import{C as d}from"./CartesianGrid-B2f0UAQ8.js";import{X as c}from"./XAxis-CjF_jX-F.js";import{Y as y}from"./YAxis-CBJKZQVh.js";import{S as h}from"./Scatter-BlBk6GDu.js";import{E as e}from"./ErrorBar-CjOrF5sm.js";import{T as u}from"./Tooltip-OelYScKS.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CFbHWja9.js";import"./zIndexSlice-aRYQG5Yn.js";import"./throttle-CZQWytra.js";import"./index-aMLVbRVP.js";import"./index-DFSigqQi.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CoYFUk2l.js";import"./isWellBehavedNumber-CmolPL3d.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-CByMsFVX.js";import"./d3-scale-D08aSlXl.js";import"./index-DYLqyLpB.js";import"./index-DKbxb5pM.js";import"./renderedTicksSlice-C672n-_-.js";import"./index-gqnOst7j.js";import"./CartesianChart-C3BMrTr-.js";import"./chartDataContext-BTH-lGko.js";import"./CategoricalChart-DNyG6Cdr.js";import"./CartesianAxis-8Yu2eTD6.js";import"./Layer-4AR486QQ.js";import"./Text-BiZmy8Q_.js";import"./DOMUtils-DdCdIfAV.js";import"./useId-CIh7gguH.js";import"./useBackwardsCompatibleTheme-CrqKBooM.js";import"./Label-CIwsUObl.js";import"./ZIndexLayer-Cdmw8GXd.js";import"./types-D2xbrN5O.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BsWKOVBJ.js";import"./useAnimationId-DdSCrHov.js";import"./Curve-CN5kBDOi.js";import"./step-C6ZJXuGC.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CS7mZnqj.js";import"./Symbols-CaXitiSD.js";import"./symbol-Dsi6RYMH.js";import"./ActiveShapeUtils-DNb4gSFX.js";import"./RegisterGraphicalItemId-DuhR9Fep.js";import"./ErrorBarContext-BEPlSBFO.js";import"./GraphicalItemClipPath-BZD6-JFP.js";import"./SetGraphicalItem-BnsQpP5e.js";import"./useGraphicalItemIdentity-Dy2kZYij.js";import"./CSSTransitionAnimate-B_5Cb1lL.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-Cff6A36e.js";import"./uniqBy-DiNvI5qK.js";import"./iteratee-Bk_n-BJ4.js";import"./Cross-UchZgXDl.js";import"./Rectangle-Gul8C8Yn.js";import"./Sector-BpcFQCNy.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
