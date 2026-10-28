import{R as r}from"./iframe-D4oHTXd2.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-D6mxPFOt.js";import{C as d}from"./CartesianGrid-rvbRojsQ.js";import{X as c}from"./XAxis--JtbYt43.js";import{Y as y}from"./YAxis-BYtNm8pH.js";import{S as h}from"./Scatter-BfZ4Casm.js";import{E as e}from"./ErrorBar-B_x53phF.js";import{T as u}from"./Tooltip-V4ocUqZm.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DDz0Qovh.js";import"./zIndexSlice-FaOQzDXI.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-56IWAvtJ.js";import"./throttle-IWj5GY0g.js";import"./index-8QB0C-JA.js";import"./index-BcDiyi9x.js";import"./axisSelectors-CDRP_sNf.js";import"./polarAxisSelectors-DA0Sn49S.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C56RpY6Y.js";import"./index-CN0lIDDr.js";import"./index-BEOZMuKY.js";import"./renderedTicksSlice-9pxfuVSu.js";import"./index-CCJYRnuL.js";import"./CartesianChart-DqtOCB7I.js";import"./ZIndexPortal-BwTgdPOx.js";import"./CategoricalChart-BGUOI4WC.js";import"./CartesianAxis-Ck0BSfZw.js";import"./Layer-Cc-amHQh.js";import"./Text-CD7lZJQl.js";import"./pageBackground-ClBhdff4.js";import"./ZIndexLayer-CtwITcxK.js";import"./Label-DP7jFvS8.js";import"./dataEntryStyles-CDeLNDqG.js";import"./types-D44DYR1l.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-hm91Y5t7.js";import"./activeStyles-BnisSvy3.js";import"./useAnimationId-DDFQzbLJ.js";import"./Curve-B88JiAwJ.js";import"./step-hZT5qMl0.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Dg_R1Yo_.js";import"./Symbols-Dayf-cZG.js";import"./symbol-Cv4qssrt.js";import"./ActiveShapeUtils-CKRVzd2S.js";import"./RegisterGraphicalItemId-D_uZK7cP.js";import"./ErrorBarContext-BjrF48Vy.js";import"./SetGraphicalItem-3CIjS8yi.js";import"./useEffectiveDataKey-56V2wZBO.js";import"./CSSTransitionAnimate-C3d0WHIb.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DyenIFMf.js";import"./uniqBy-DxBxaEGL.js";import"./iteratee-B-_7egyo.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BTVpfL3S.js";import"./Rectangle-DUbFm90a.js";import"./Sector-B5EL7_ii.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
