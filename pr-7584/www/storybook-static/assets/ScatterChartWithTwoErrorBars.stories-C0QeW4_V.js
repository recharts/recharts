import{R as r}from"./iframe-GS6tWWpF.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-zcWv9dwY.js";import{C as d}from"./CartesianGrid-F-KU-36M.js";import{X as c}from"./XAxis-Bx65GQrC.js";import{Y as y}from"./YAxis-CUfaioHk.js";import{S as h}from"./Scatter-CPirdEnc.js";import{E as e}from"./ErrorBar-CHz1dn1x.js";import{T as u}from"./Tooltip-CRtp8_AT.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bqosr4xy.js";import"./zIndexSlice-CiKhndgZ.js";import"./throttle-C-IXy7Zr.js";import"./index-DfG20-Zs.js";import"./index-C2uAvHn9.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BZjeTZ39.js";import"./isWellBehavedNumber-BW5zPDve.js";import"./PolarUtils-CTnnDHZv.js";import"./index-C6xrf2-Z.js";import"./index-Di15QQ8x.js";import"./renderedTicksSlice-BVCAtPIh.js";import"./axisSelectors-yfKyalbW.js";import"./d3-scale-CHW2xi3e.js";import"./CartesianChart-DRtNG600.js";import"./chartDataContext-BZ0W7ETA.js";import"./CategoricalChart-CsHskHmr.js";import"./CartesianAxis-DPqu1YVY.js";import"./Layer-C3MBqN5-.js";import"./Text-CUZPSeM8.js";import"./DOMUtils-cB85CLZU.js";import"./Label--UyVH_YZ.js";import"./ZIndexLayer-CvFwUsq0.js";import"./types-CDHFW4tQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./AnimatedItems-DA4k4owl.js";import"./useAnimationId-ZFeP4ddJ.js";import"./Curve-DDxJXFaA.js";import"./step-DCV2XceF.js";import"./path-DyVhHtw_.js";import"./tooltipContext-L8ivyxdx.js";import"./Symbols-BhQRMxL7.js";import"./symbol-B6SQN_ex.js";import"./ActiveShapeUtils-DTjXKb5y.js";import"./RegisterGraphicalItemId-BRazAOV1.js";import"./ErrorBarContext-D6lw1b7W.js";import"./GraphicalItemClipPath-fALP-Awj.js";import"./SetGraphicalItem-XvYC4EkM.js";import"./CSSTransitionAnimate-Cp8-slq4.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DFy6UBvQ.js";import"./uniqBy-JuZLKXnX.js";import"./iteratee-BtotmXAq.js";import"./Cross-DDUawsZ9.js";import"./Rectangle-CdIuzb_S.js";import"./Sector-eD6mDZA_.js";const Er={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
