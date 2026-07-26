import{R as r}from"./iframe-DxMMLjq4.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-UJek1sDv.js";import{C as d}from"./CartesianGrid-BhIcGe65.js";import{X as c}from"./XAxis-ComdV9F0.js";import{Y as y}from"./YAxis-DlIt9IKA.js";import{S as h}from"./Scatter-IDcypBNU.js";import{E as e}from"./ErrorBar-D_FrrREv.js";import{T as u}from"./Tooltip-D_BAavcS.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-YibyDFYm.js";import"./zIndexSlice-Crg_yDni.js";import"./throttle-BVIVorzK.js";import"./index-NaaaP08j.js";import"./index-BmvyjtDr.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Bl28FH2f.js";import"./isWellBehavedNumber-C1o8zvOf.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BNQESuWt.js";import"./index-NKUE4uSN.js";import"./renderedTicksSlice-R0A9XcRf.js";import"./axisSelectors-CtMsP7E5.js";import"./d3-scale-DNwZMBjH.js";import"./CartesianChart-eEIqhBYs.js";import"./chartDataContext-CPgowj6N.js";import"./CategoricalChart-CkjssiaG.js";import"./CartesianAxis-Bt1NAYMU.js";import"./Layer-HeMPI1c4.js";import"./Text-BCYIz8FY.js";import"./DOMUtils-BdIlOhpH.js";import"./Label-BzF2Z4Ph.js";import"./ZIndexLayer-YMn514XV.js";import"./types-CGS0Nool.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./AnimatedItems-DZU2dyQ0.js";import"./useAnimationId-todkGmix.js";import"./Curve-HWwjIPPZ.js";import"./step-57b6j_Mi.js";import"./path-DyVhHtw_.js";import"./tooltipContext-ChU__LkA.js";import"./Symbols-BM5DG4aB.js";import"./symbol-CdP8S3iM.js";import"./ActiveShapeUtils-CzKC_ySI.js";import"./RegisterGraphicalItemId-fNF2iW9l.js";import"./ErrorBarContext-f2qB8qRB.js";import"./GraphicalItemClipPath-BcLAlpwf.js";import"./SetGraphicalItem-C5-E1Ui2.js";import"./CSSTransitionAnimate-BMzFTPYq.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-BRu_GPPq.js";import"./uniqBy-CzRSAfde.js";import"./iteratee-B6VWD8nr.js";import"./Cross-DUh7a5ft.js";import"./Rectangle-D__daQdm.js";import"./Sector-rVQPkNAb.js";const Er={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
