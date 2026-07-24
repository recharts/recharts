import{R as r}from"./iframe-Cug8bpW1.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-CR--suYA.js";import{C as d}from"./CartesianGrid-BjNhFx1r.js";import{X as c}from"./XAxis-BfPgGv85.js";import{Y as y}from"./YAxis-uhDp_b-D.js";import{S as h}from"./Scatter-DhpbzhI2.js";import{E as e}from"./ErrorBar-CiuY2bg3.js";import{T as u}from"./Tooltip-Gb3s8MLg.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DxwXXeuL.js";import"./zIndexSlice-9cZpiRga.js";import"./throttle-B6lLkzEm.js";import"./index-BU-oTyxR.js";import"./index-A9iLt5fb.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-CWL5wq5C.js";import"./isWellBehavedNumber-1QeuJ8xh.js";import"./PolarUtils-CTnnDHZv.js";import"./index-GrHgVuHl.js";import"./index-C2En2hdi.js";import"./renderedTicksSlice-DuZDB9Ry.js";import"./axisSelectors-BKPMDK9R.js";import"./d3-scale-Dh_zFLyg.js";import"./CartesianChart-DEYZwCE3.js";import"./chartDataContext-BQl3S7aI.js";import"./CategoricalChart-1sHQms95.js";import"./CartesianAxis-BVOPpVQH.js";import"./Layer-DAaIMucZ.js";import"./Text-Y2ry5wK9.js";import"./DOMUtils-DIK0_8l8.js";import"./Label-C_AgOq8t.js";import"./ZIndexLayer-B_am4wav.js";import"./types-BJnTryYo.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./AnimatedItems-C6_8UlhB.js";import"./useAnimationId-iyUsFQUM.js";import"./Curve-C1DFTxWC.js";import"./step-DmCiiBno.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BM8CW2sL.js";import"./Symbols-DR1I-OOn.js";import"./symbol-Cr0_TzMS.js";import"./ActiveShapeUtils-CL8eHJZj.js";import"./RegisterGraphicalItemId-D2I1FNOP.js";import"./ErrorBarContext-DaF_EPCk.js";import"./GraphicalItemClipPath-48VFK23w.js";import"./SetGraphicalItem-CCK_hlSi.js";import"./CSSTransitionAnimate-CfllYw-n.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-ynp9RdRd.js";import"./uniqBy-DrzaFqXi.js";import"./iteratee-DEWmF1v2.js";import"./Cross-BLQUhgMx.js";import"./Rectangle-BkYWDjed.js";import"./Sector-DcWuVpie.js";const Er={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
