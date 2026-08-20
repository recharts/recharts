import{R as r}from"./iframe-DU8eOjQ1.js";import{g as n}from"./utils-ePvtT4un.js";import{S as p}from"./ScatterChartArgs-DVckGNEz.js";import{S as s}from"./ScatterChart-8hZsIVfY.js";import{C as d}from"./CartesianGrid-Dzwrat8o.js";import{X as c}from"./XAxis-DwxXrNeT.js";import{Y as y}from"./YAxis-C5Bhkieg.js";import{S as h}from"./Scatter-BG6zzxrf.js";import{E as e}from"./ErrorBar-C4NotYv9.js";import{T as u}from"./Tooltip-QgrLCtkc.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-9E3HwjIh.js";import"./zIndexSlice-BTgaU9mo.js";import"./throttle-Ds7SGj9O.js";import"./index-BiO2BZqr.js";import"./index-BR94yoib.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DqdCI-hK.js";import"./isWellBehavedNumber-RQOJRbJb.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BsY6e3Dv.js";import"./index-C5aMPIVJ.js";import"./axisSelectors-BDOPVsa7.js";import"./d3-scale-Dni3_L1R.js";import"./renderedTicksSlice-FFc2HuFp.js";import"./CartesianChart-DXBshymN.js";import"./chartDataContext-Cbz9ELzS.js";import"./CategoricalChart-QJ_K41d4.js";import"./CartesianAxis-CXtQQdut.js";import"./Layer-BIDK12wM.js";import"./Text-AtzkHDEd.js";import"./DOMUtils-Cql2uYAT.js";import"./useId-ChL7HBdG.js";import"./useBackwardsCompatibleTheme-DkLB3iia.js";import"./Label-Z9o5T8X-.js";import"./ZIndexLayer-D8k4jgaj.js";import"./types-RZ1xD5kE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DENpSSAq.js";import"./useAnimationId-CdvddGlN.js";import"./Curve-DOio-0wn.js";import"./step-DrL3PK0v.js";import"./path-DyVhHtw_.js";import"./tooltipContext-C_CDpSBv.js";import"./Symbols-s2FGnFTW.js";import"./symbol-D0L4AM1n.js";import"./ActiveShapeUtils-C-NGBOfA.js";import"./RegisterGraphicalItemId-Z2iPsOPY.js";import"./ErrorBarContext-C4_kHW9u.js";import"./GraphicalItemClipPath-MaN5rDAF.js";import"./SetGraphicalItem-CdyLZ_3H.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate-Bc1nISU8.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-GWMwWCSs.js";import"./uniqBy-DbQx-kHr.js";import"./iteratee-Did0_bax.js";import"./Cross-YxRmKXZw.js";import"./Rectangle-CfThDaqC.js";import"./Sector-CEQ3y-cy.js";const Ar={component:s,argTypes:p,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(s,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(p),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Sr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Sr as __namedExportsOrder,Ar as default};
