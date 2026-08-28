import{R as r}from"./iframe-CVDCphxx.js";import{g as n}from"./utils-ePvtT4un.js";import{S as p}from"./ScatterChartArgs-DVckGNEz.js";import{S as s}from"./ScatterChart-ov6zaXv2.js";import{C as d}from"./CartesianGrid-DoXp0aHg.js";import{X as c}from"./XAxis-BaXZzVL8.js";import{Y as y}from"./YAxis-BxEmWMWe.js";import{S as h}from"./Scatter-BIVZ04eG.js";import{E as e}from"./ErrorBar-C7v_m25e.js";import{T as u}from"./Tooltip-Bd8tlp4z.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DEnb7ufM.js";import"./zIndexSlice-D76eaAVt.js";import"./throttle-t8E79NJX.js";import"./index-BJO-ep7J.js";import"./index-BpxiUomY.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B_5oDYmC.js";import"./isWellBehavedNumber-DVmFYWt0.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-ChjpNCZD.js";import"./d3-scale-Cu204p6o.js";import"./index-CihE6hhr.js";import"./index-DCMHKzI9.js";import"./renderedTicksSlice-B1XRs7d0.js";import"./index-BJY-g_ad.js";import"./CartesianChart-D47jpHMU.js";import"./chartDataContext-C-FdSEwK.js";import"./CategoricalChart-D7b0lra6.js";import"./CartesianAxis-BZu_fnrb.js";import"./Layer-CMIguF8f.js";import"./Text-Dgr5qdov.js";import"./DOMUtils-DF_qw-1b.js";import"./useId-CWzKPTKL.js";import"./useBackwardsCompatibleTheme-MdPX2i5n.js";import"./Label-CplunMl3.js";import"./ZIndexLayer-BeV_pa6H.js";import"./types-qF5qaMWi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BHXlTf3v.js";import"./useAnimationId-Bwtwv5PP.js";import"./Curve-BAi3bHUk.js";import"./step-CnFrEUK7.js";import"./path-DyVhHtw_.js";import"./tooltipContext-D9nws42x.js";import"./Symbols-CHo6RFpT.js";import"./symbol-CeZjzcHj.js";import"./ActiveShapeUtils-BczdQoPB.js";import"./RegisterGraphicalItemId-z4StfXHb.js";import"./ErrorBarContext-Dl0aWSaL.js";import"./GraphicalItemClipPath-C3-aN0c_.js";import"./SetGraphicalItem-Xr4kmH_o.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate-C3Sw9KG-.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-Dlxs2KSy.js";import"./uniqBy-BQLa7Owx.js";import"./iteratee-BocsKiRY.js";import"./Cross-BCjVITdc.js";import"./Rectangle-g52yuu9_.js";import"./Sector-BxAve4eq.js";const Sr={component:s,argTypes:p,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(s,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(p),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Dr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Dr as __namedExportsOrder,Sr as default};
