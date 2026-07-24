import{R as r}from"./iframe-Bfq89VA1.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-Bug1pLvi.js";import{C as d}from"./CartesianGrid-CUD_IRpk.js";import{X as c}from"./XAxis-XWWA5Vcg.js";import{Y as y}from"./YAxis-BKOVychP.js";import{S as h}from"./Scatter-DAmk07YW.js";import{E as e}from"./ErrorBar-CoDFXsn1.js";import{T as u}from"./Tooltip-DsAve4cr.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Clucjzln.js";import"./zIndexSlice-CIiurCy7.js";import"./throttle-D9Dxi9p7.js";import"./index-CYj6WtTt.js";import"./index-BrZplGoV.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-sI76rt8e.js";import"./isWellBehavedNumber-Cjy03S2S.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CJwKc2JD.js";import"./index-C5yh5hWX.js";import"./renderedTicksSlice-Bq1WS_1z.js";import"./axisSelectors-DeSjN-yN.js";import"./d3-scale-DNdF6BGI.js";import"./CartesianChart-BR20NBVb.js";import"./chartDataContext-CtFpG3fr.js";import"./CategoricalChart-C2BN44hW.js";import"./CartesianAxis-BwpzYsrw.js";import"./Layer-Ddny-Z-5.js";import"./Text-hgAABJUd.js";import"./DOMUtils-D5O5VN8V.js";import"./Label-TzQ05lix.js";import"./ZIndexLayer-BNbeMphj.js";import"./types-BzfB60xK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./AnimatedItems-u8tbY5MQ.js";import"./useAnimationId-nFx4hlTa.js";import"./Curve-DuW3zwTN.js";import"./step-De5xdkMr.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DxTmDpmc.js";import"./Symbols-sZizIm6P.js";import"./symbol-mIOUQ11t.js";import"./ActiveShapeUtils-DWYip-It.js";import"./RegisterGraphicalItemId-Cqi3B4nU.js";import"./ErrorBarContext-C94DxYOd.js";import"./GraphicalItemClipPath-BPnHFI7W.js";import"./SetGraphicalItem-COSatqks.js";import"./CSSTransitionAnimate-DJDeCoim.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-JKh4KBSu.js";import"./uniqBy-Bd3SP3U8.js";import"./iteratee-C88R0o-M.js";import"./Cross-D285--m4.js";import"./Rectangle-TJ7hJnR0.js";import"./Sector-Bf9g04ER.js";const Er={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Xr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Xr as __namedExportsOrder,Er as default};
