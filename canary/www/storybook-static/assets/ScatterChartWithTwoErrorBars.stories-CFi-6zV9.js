import{R as r}from"./iframe-CEcITxQg.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-DBIyZeyc.js";import{C as d}from"./CartesianGrid-C3nsYKHb.js";import{X as c}from"./XAxis-DpYz8_Dh.js";import{Y as y}from"./YAxis-WtIBmSn8.js";import{S as h}from"./Scatter-B5uG0mir.js";import{E as e}from"./ErrorBar-D9d3VXDw.js";import{T as u}from"./Tooltip-BDNX7Znf.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BTJ2LZ14.js";import"./zIndexSlice-DG2GpHlE.js";import"./throttle-B3Xibe3Y.js";import"./index-D2_zyIdl.js";import"./index-Bhk23PFU.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CkmfyhqW.js";import"./isWellBehavedNumber-DjN2b99T.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-BTQvXZat.js";import"./d3-scale-CwC0nBHM.js";import"./index-D0x1dbK7.js";import"./index-DeVAKBla.js";import"./renderedTicksSlice-Dgfw4xeW.js";import"./index-DeuCtru2.js";import"./CartesianChart-Bf9v-Tj6.js";import"./chartDataContext-BzZyvQEB.js";import"./CategoricalChart-B6S6Zh35.js";import"./CartesianAxis-CRhVdfos.js";import"./Layer-DxHA8fzs.js";import"./Text-BaR1ZvCW.js";import"./DOMUtils-CRevI1wr.js";import"./useId-BfWHYsCr.js";import"./useBackwardsCompatibleTheme-B-LDULxa.js";import"./Label-CAyVtv0N.js";import"./ZIndexLayer-Crp9kN4i.js";import"./types-CL5KqLm4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-Ys-2ZU7Q.js";import"./useAnimationId-Cz0tj6YQ.js";import"./Curve-k0k5dTsU.js";import"./step-BOs9b6Ri.js";import"./path-DyVhHtw_.js";import"./tooltipContext-C719rlED.js";import"./Symbols-wZDO_6SA.js";import"./symbol-CZuDR-tR.js";import"./ActiveShapeUtils-Dx9yEBbu.js";import"./RegisterGraphicalItemId-CodKeWvn.js";import"./ErrorBarContext-B5kiS63M.js";import"./GraphicalItemClipPath-BwGvKzSp.js";import"./SetGraphicalItem-ZqPAg0_A.js";import"./useGraphicalItemIdentity-DDNep2_9.js";import"./dataEntryStyles-ChVGAtMZ.js";import"./CSSTransitionAnimate-CEH3DfY6.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-BT0tqnsY.js";import"./uniqBy-DqiiQuQc.js";import"./iteratee-D_w4T-w5.js";import"./Cross-CQxShz6V.js";import"./Rectangle-rvPl5WSU.js";import"./Sector-BZR-i2Ix.js";const Dr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Or=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Or as __namedExportsOrder,Dr as default};
