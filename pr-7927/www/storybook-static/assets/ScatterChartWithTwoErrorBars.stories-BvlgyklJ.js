import{R as r}from"./iframe-d_I8TNCn.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-Co7iCaM1.js";import{C as d}from"./CartesianGrid-Cpl905iN.js";import{X as c}from"./XAxis-CPk4rkW4.js";import{Y as y}from"./YAxis-ST75xEtc.js";import{S as h}from"./Scatter-DTGg4DSK.js";import{E as e}from"./ErrorBar-DMiv_nIR.js";import{T as u}from"./Tooltip-8x1TIELh.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BhDfTeaQ.js";import"./zIndexSlice-C86-Fd8c.js";import"./throttle-Dub4vgX-.js";import"./index-Basp38ZP.js";import"./index-KJ9I69Vp.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DvL_oRGd.js";import"./isWellBehavedNumber-BiGXAn6V.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-DS1SwPss.js";import"./d3-scale-BHQnpvaw.js";import"./index-Bk90M1L4.js";import"./index-IVp7d0na.js";import"./renderedTicksSlice-D-j8NF5Q.js";import"./index-BDSLAMRI.js";import"./CartesianChart-BkYu52zN.js";import"./chartDataContext-C_MhBuQy.js";import"./CategoricalChart-BaXgxPjJ.js";import"./CartesianAxis-C7wfh-vo.js";import"./Layer-yfSSiW9J.js";import"./Text--rvXV2DW.js";import"./DOMUtils-CklqBmUp.js";import"./useId-CcoqHBc4.js";import"./useBackwardsCompatibleTheme-0Rfjr95D.js";import"./Label-C6LY1R7r.js";import"./ZIndexLayer-CUsrGrDa.js";import"./types-Dqfpifaw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-b-EDeVK-.js";import"./useAnimationId-BWx9Rtft.js";import"./Curve-7i5iRSvm.js";import"./step-Zcc4_rmH.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CLKStnNX.js";import"./Symbols-DJZzxzfQ.js";import"./symbol-B80ww2zL.js";import"./ActiveShapeUtils-ByVz5Hkp.js";import"./RegisterGraphicalItemId-dmq8PwmH.js";import"./ErrorBarContext-D8HRGdCI.js";import"./GraphicalItemClipPath-BVkKFKzE.js";import"./SetGraphicalItem-q_w6KGtf.js";import"./useGraphicalItemIdentity-BG-BVB46.js";import"./dataEntryStyles-3xIOSnmo.js";import"./CSSTransitionAnimate-7TIClNG1.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-jVsdCbSq.js";import"./uniqBy-Dn4KM-Ky.js";import"./iteratee-CwikYVCT.js";import"./Cross-DmHFzZ2Y.js";import"./Rectangle-EdaUCxay.js";import"./Sector-DWNhUzO6.js";const Dr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Or=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
