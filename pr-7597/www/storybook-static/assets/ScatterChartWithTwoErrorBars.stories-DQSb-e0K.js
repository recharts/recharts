import{R as r}from"./iframe-BpGtcNOk.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-WrQ_lCi5.js";import{C as d}from"./CartesianGrid-BVqjpfKu.js";import{X as c}from"./XAxis-xA3C2iEm.js";import{Y as y}from"./YAxis-CzpQ82Ya.js";import{S as h}from"./Scatter-w6NT05S7.js";import{E as e}from"./ErrorBar-0g-TrMSW.js";import{T as u}from"./Tooltip-B_Inm8uT.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-8zW8Q-QW.js";import"./zIndexSlice-BUkXJe7m.js";import"./throttle-D7JHSkAt.js";import"./index-CHBEpFe4.js";import"./index-CEaO1Ily.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Bzz9qGby.js";import"./isWellBehavedNumber-CgtKnfGk.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CWPU6MDT.js";import"./index-B2c9XwPD.js";import"./renderedTicksSlice-CgSHpo4d.js";import"./axisSelectors-DvNlgVd_.js";import"./d3-scale-BIg-AE9c.js";import"./CartesianChart-D_T5BGrl.js";import"./chartDataContext-BnIwxX66.js";import"./CategoricalChart-cfDxlkao.js";import"./CartesianAxis-C36sPR-f.js";import"./Layer-CuHhWFqD.js";import"./Text-C5eSQgGe.js";import"./DOMUtils-Bd2Qm1G_.js";import"./Label-CVd1F7qG.js";import"./ZIndexLayer-Cu4Swk1f.js";import"./types-CFaUoyvU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CLwClxTv.js";import"./isBuffer-Crkas5dz.js";import"./AnimatedItems-I1ECyx5O.js";import"./useAnimationId-B7_Ne5YB.js";import"./Curve-DyH_liqO.js";import"./step-BGQUnAp4.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BQnmAs8_.js";import"./Symbols-DX3n3dc6.js";import"./symbol-DLa0yamx.js";import"./ActiveShapeUtils-BdR0GCmt.js";import"./RegisterGraphicalItemId-fTSs4quI.js";import"./ErrorBarContext-D-HuE8jj.js";import"./GraphicalItemClipPath-CBj-Oygo.js";import"./SetGraphicalItem-Dc3K4Fiu.js";import"./CSSTransitionAnimate-CAaRBNFP.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DPOTi7dF.js";import"./uniqBy-CRLvWKL0.js";import"./iteratee-B4OnOvXg.js";import"./Cross-DFN9xvam.js";import"./Rectangle-1PkWZRq5.js";import"./Sector-DAj_BRZU.js";const Xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Yr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Yr as __namedExportsOrder,Xr as default};
