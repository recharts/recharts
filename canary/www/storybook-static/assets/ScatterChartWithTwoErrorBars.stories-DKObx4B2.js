import{R as r}from"./iframe-CbdG93Rp.js";import{g as n}from"./utils-ePvtT4un.js";import{S as p}from"./ScatterChartArgs-DVckGNEz.js";import{S as s}from"./ScatterChart-f_H2BmlL.js";import{C as d}from"./CartesianGrid-BtzF_dyJ.js";import{X as c}from"./XAxis-gGpg7lh6.js";import{Y as y}from"./YAxis-Dmha2qJn.js";import{S as h}from"./Scatter-F8furYio.js";import{E as e}from"./ErrorBar-C01PVEeA.js";import{T as u}from"./Tooltip-QYlwlXxX.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bx7VgKe3.js";import"./zIndexSlice-BBA2vYL9.js";import"./throttle-k7AnGod1.js";import"./index-yQCZGhVI.js";import"./index-BiGXtIk6.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BNACGTBd.js";import"./isWellBehavedNumber-DBJb9JTb.js";import"./PolarUtils-CTnnDHZv.js";import"./index-D8WEHlsH.js";import"./index-ybXde8ox.js";import"./axisSelectors-BHZKzxax.js";import"./d3-scale-CLJM1nE7.js";import"./renderedTicksSlice-H0Ext-F-.js";import"./CartesianChart-KT4JQkAx.js";import"./chartDataContext-fDUY1EA6.js";import"./CategoricalChart-BZ6Syier.js";import"./CartesianAxis-D93bSTxK.js";import"./Layer-BZ6Fc3lQ.js";import"./Text-DuH_mhct.js";import"./DOMUtils-CqvRu_MB.js";import"./useId-Ca5c2KHs.js";import"./useBackwardsCompatibleTheme-CqJEL2NO.js";import"./Label-DXZsEXpn.js";import"./ZIndexLayer-FtCXwXjd.js";import"./types-CpUmxW-2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-LAFrqwsd.js";import"./useAnimationId-Ctl7EN5N.js";import"./Curve-Dl3donnJ.js";import"./step-DJlKpvLR.js";import"./path-DyVhHtw_.js";import"./tooltipContext-D5Q41Klp.js";import"./Symbols-CuasTVW9.js";import"./symbol-DOXCA695.js";import"./ActiveShapeUtils-DQoUFAUU.js";import"./RegisterGraphicalItemId-VTOA4vtw.js";import"./ErrorBarContext-DKNTm7fJ.js";import"./GraphicalItemClipPath-B5C5ys39.js";import"./SetGraphicalItem-OAT4QAS1.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate-5vfuQpio.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-g697mWa_.js";import"./uniqBy-BjmPaqQH.js";import"./iteratee-mNdZ8SiJ.js";import"./Cross-DYExr5pf.js";import"./Rectangle-CwYRuFSD.js";import"./Sector-DfHIsp93.js";const Ar={component:s,argTypes:p,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(s,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(p),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Sr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Sr as __namedExportsOrder,Ar as default};
