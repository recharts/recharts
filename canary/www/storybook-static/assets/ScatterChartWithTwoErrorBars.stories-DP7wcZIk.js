import{R as r}from"./iframe-DIhQo_8Y.js";import{g as n}from"./utils-ePvtT4un.js";import{S as p}from"./ScatterChartArgs-DVckGNEz.js";import{S as s}from"./ScatterChart-BMX2xeS7.js";import{C as d}from"./CartesianGrid-DJEg4-FR.js";import{X as c}from"./XAxis-BpVdYfJg.js";import{Y as y}from"./YAxis-DaA2UazR.js";import{S as h}from"./Scatter-BsxUsDlv.js";import{E as e}from"./ErrorBar-DR9r1Box.js";import{T as u}from"./Tooltip-CLrqdAE8.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DRimQmLV.js";import"./zIndexSlice-CGgr09GZ.js";import"./throttle-B5VRQcq4.js";import"./index-Dgm3vG4i.js";import"./index-BF8H9JZN.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-hi_Ykzi4.js";import"./isWellBehavedNumber-BiD1hUdH.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BC5_sjA-.js";import"./index-RbONCBjN.js";import"./axisSelectors-Gg8H4O2J.js";import"./d3-scale-DTMlXSKJ.js";import"./renderedTicksSlice-Co5rDdJd.js";import"./CartesianChart-DwM9PUKm.js";import"./chartDataContext-DFyWuVHZ.js";import"./CategoricalChart-CgO2X-rw.js";import"./CartesianAxis-4De8rCJ6.js";import"./Layer-BQPvkkvd.js";import"./Text-5eA_PDhZ.js";import"./DOMUtils-Cs86oaAG.js";import"./Label-CVkJGixO.js";import"./ZIndexLayer-B8ZTodeV.js";import"./types-ZiiagxD1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-C_YQ-08p.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DEBP1yTo.js";import"./useAnimationId-CRkvHyGK.js";import"./Curve-BXnwyB8Q.js";import"./step-kN_jTjZP.js";import"./path-DyVhHtw_.js";import"./tooltipContext-C34pjxqs.js";import"./Symbols-DuXAJdRg.js";import"./symbol-BW1nMcv9.js";import"./ActiveShapeUtils-DPvlIPGu.js";import"./RegisterGraphicalItemId-DMf10IHd.js";import"./ErrorBarContext-RhNJ5kjd.js";import"./GraphicalItemClipPath-BlWn4Cda.js";import"./SetGraphicalItem-CDNxzvex.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate-COxgELJl.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-CD90jGAB.js";import"./uniqBy-DEkqq9OP.js";import"./iteratee-C_S5i7R9.js";import"./Cross-DMyoXCGS.js";import"./Rectangle-brCqUJwM.js";import"./Sector-CFcXtW_P.js";const Yr={component:s,argTypes:p,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(s,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(p),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
