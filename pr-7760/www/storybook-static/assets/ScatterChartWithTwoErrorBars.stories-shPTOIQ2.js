import{R as r}from"./iframe-C4it_pSb.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-BaMEaH7n.js";import{C as d}from"./CartesianGrid-BtOhkG_Q.js";import{X as c}from"./XAxis-D3_RnCQs.js";import{Y as y}from"./YAxis-C2MK_IRI.js";import{S as h}from"./Scatter-DW2coZnr.js";import{E as e}from"./ErrorBar-DxCuCvdC.js";import{T as u}from"./Tooltip-i3axsvmf.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-WzaEVVng.js";import"./zIndexSlice-Bh8QqGYC.js";import"./throttle-BWURsltW.js";import"./index-Djot3vWG.js";import"./index-CyjOeiI7.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Bk5elTFQ.js";import"./isWellBehavedNumber-C0XEinXA.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-iywT_uRR.js";import"./d3-scale-CNOoHAop.js";import"./index-B26DTqYo.js";import"./index-BP3VCIYx.js";import"./renderedTicksSlice-B9Dyi-a8.js";import"./index-EJd8pUya.js";import"./CartesianChart-CHj9PLOA.js";import"./chartDataContext-BS14VVpw.js";import"./CategoricalChart-CdGO65GN.js";import"./CartesianAxis-zFiEPAc_.js";import"./Layer-Y_kQ5bDn.js";import"./Text-C95jy76s.js";import"./DOMUtils-CPJ15NMN.js";import"./useId-CmMKngVw.js";import"./useBackwardsCompatibleTheme-DQJyo6AF.js";import"./Label-n6TZOZVu.js";import"./ZIndexLayer-Np7ngrTh.js";import"./types-B3II6rjl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BXHU6KSj.js";import"./useAnimationId-DGQm40Oa.js";import"./Curve-Bl8IUEFk.js";import"./step-XVUSGLsl.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BokE8xN3.js";import"./Symbols-D0RMIlOv.js";import"./symbol-BJtlaRgk.js";import"./ActiveShapeUtils-D3E5vr02.js";import"./RegisterGraphicalItemId-C6_S5Zs0.js";import"./ErrorBarContext-CcVjks2v.js";import"./GraphicalItemClipPath-DOE5ucpL.js";import"./SetGraphicalItem-Crl-vV7P.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate-BtcfG2LT.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-BkE284wq.js";import"./uniqBy-Cc1N6SgR.js";import"./iteratee-DFkmPQiY.js";import"./Cross-BuHkVBYA.js";import"./Rectangle-BBBlhEC2.js";import"./Sector-DOEkN6ER.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
