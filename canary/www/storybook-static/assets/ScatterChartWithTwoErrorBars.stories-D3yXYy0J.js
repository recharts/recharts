import{R as r}from"./iframe-Be1JwYLB.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-F7kbcD8f.js";import{C as d}from"./CartesianGrid-Cw6_LUYb.js";import{X as c}from"./XAxis-BsHOKRoe.js";import{Y as y}from"./YAxis-B8XW_V0R.js";import{S as h}from"./Scatter-lPY-5sGy.js";import{E as e}from"./ErrorBar-DLaAL03D.js";import{T as u}from"./Tooltip-CBedYJZV.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BztyyuwI.js";import"./zIndexSlice-CgSPm-wc.js";import"./resolveDefaultProps-vtDVNmS9.js";import"./get-CjriyByo.js";import"./throttle-DjxQctYo.js";import"./index-ueUT9Xj6.js";import"./index-Bkv44dvd.js";import"./axisSelectors-rS5FKSRX.js";import"./polarAxisSelectors-petp68tp.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C_iM0uvU.js";import"./index-Dg9s7T6j.js";import"./index-m2EJzzBW.js";import"./renderedTicksSlice-DiKCMxPA.js";import"./index-B-llFuKq.js";import"./fillDefinitions-Be1jCOoc.js";import"./CartesianChart-C7B4dY_Y.js";import"./chartDataContext-DDExTKyo.js";import"./CategoricalChart-C-aFkl_F.js";import"./CartesianAxis-CBnwQrVI.js";import"./Layer-L6JSSqUT.js";import"./Text-BqUDv62U.js";import"./ZIndexLayer-ByAD4IkB.js";import"./Label-Cm4G9M_4.js";import"./types-DiTos3ch.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-BkzBQ6X2.js";import"./activeStyles-CdOMMJXp.js";import"./useAnimationId-DZ7icYC0.js";import"./Curve-DQRadQHz.js";import"./step-Dq96qlXf.js";import"./path-BBMZd4YL.js";import"./tooltipContext-Q0tCFVpq.js";import"./Symbols-34MkMdpP.js";import"./symbol-CfD9aVNT.js";import"./ActiveShapeUtils-C6jNLipX.js";import"./ErrorBarContext-CuYC5cVX.js";import"./SetGraphicalItem-CZx3vw8X.js";import"./useEffectiveDataKey-dwd_hOHx.js";import"./CSSTransitionAnimate-Ce2YBA7Z.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-BXttSKBy.js";import"./uniqBy-CpAKF5a4.js";import"./iteratee-Bcb_cbmN.js";import"./isArguments-yB-y1yaH.js";import"./Cross-Bk-II5U1.js";import"./Rectangle-Bp6UvdPI.js";import"./Sector-CdCkKvGS.js";const Yr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Ar=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Ar as __namedExportsOrder,Yr as default};
