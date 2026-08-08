import{R as r}from"./iframe-CmqkAU55.js";import{g as n}from"./utils-ePvtT4un.js";import{S as p}from"./ScatterChartArgs-DVckGNEz.js";import{S as s}from"./ScatterChart-D6RcTa5R.js";import{C as d}from"./CartesianGrid-DMSAsOQ5.js";import{X as c}from"./XAxis-iMrKHVYZ.js";import{Y as y}from"./YAxis-DokLpr5R.js";import{S as h}from"./Scatter-C_FNNDH8.js";import{E as e}from"./ErrorBar-DhWN7Dro.js";import{T as u}from"./Tooltip-Dnul60ZU.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CdZHTDnE.js";import"./zIndexSlice-DttPm2yG.js";import"./throttle-45H0AIAq.js";import"./index-CrNK6q9O.js";import"./index-Ccra80NE.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BMY6nxFh.js";import"./isWellBehavedNumber-eRUuJPZy.js";import"./PolarUtils-CTnnDHZv.js";import"./index-ImOuOX5i.js";import"./index-BIMQ5lZl.js";import"./axisSelectors-v6b69rA0.js";import"./d3-scale-CM34ZdGn.js";import"./renderedTicksSlice-CSz7jA9g.js";import"./CartesianChart-DHPjYa1I.js";import"./chartDataContext-CiMrnFkp.js";import"./CategoricalChart-CAeMU4C2.js";import"./CartesianAxis--fgQsGIr.js";import"./Layer-JlYR6W_Z.js";import"./Text-DFCCUK93.js";import"./DOMUtils-DDl9EDuG.js";import"./Label-CI9Aa94q.js";import"./ZIndexLayer-B8NE7f7O.js";import"./types-DD7WKq2Q.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-C9_zddkn.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CEenLt2d.js";import"./useAnimationId-DOKlurUN.js";import"./Curve-CGQeDOz5.js";import"./step-CxyVRtQl.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CrR8cJ2x.js";import"./Symbols-C4thdfWB.js";import"./symbol-0w4LQdk2.js";import"./ActiveShapeUtils-BJK8znX0.js";import"./RegisterGraphicalItemId-DkK-FjDI.js";import"./ErrorBarContext-BQBXXX5z.js";import"./GraphicalItemClipPath-bjx9wsKp.js";import"./SetGraphicalItem-Bg0mOoGz.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate-ed3_zKdX.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-D43pW8Ac.js";import"./uniqBy-BsBYuXDT.js";import"./iteratee-oLUN46Ox.js";import"./Cross-Ctk8izSI.js";import"./Rectangle-B7ctYemZ.js";import"./Sector-CBBHl0_y.js";const Yr={component:s,argTypes:p,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(s,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(p),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Ar=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Ar as __namedExportsOrder,Yr as default};
