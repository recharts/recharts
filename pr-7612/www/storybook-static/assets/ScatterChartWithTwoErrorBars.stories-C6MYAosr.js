import{R as r}from"./iframe-CFlvYhwJ.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-B1GqmdMq.js";import{C as d}from"./CartesianGrid-DxEsM2_F.js";import{X as c}from"./XAxis-BkEb723n.js";import{Y as y}from"./YAxis-HOrPhXMW.js";import{S as h}from"./Scatter-BQeUB959.js";import{E as e}from"./ErrorBar-xgWVFmM6.js";import{T as u}from"./Tooltip-A5l7NwTV.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CRpfhqml.js";import"./zIndexSlice-DsYga1t6.js";import"./throttle-DGHHBzas.js";import"./index-CK40W1ET.js";import"./index-CMfIljZ8.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D1HAFajw.js";import"./isWellBehavedNumber-CZKybQSl.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CkY-i2Tp.js";import"./index-BETjCkd5.js";import"./renderedTicksSlice-1CrcAe52.js";import"./axisSelectors-CI91Gt8x.js";import"./d3-scale-dVjou3RT.js";import"./CartesianChart-BaNzafos.js";import"./chartDataContext-C13UfWCq.js";import"./CategoricalChart-DdrlD6Qo.js";import"./CartesianAxis-CTp7B_-s.js";import"./Layer-CW0ll6KY.js";import"./Text-DN7KrSut.js";import"./DOMUtils-D9HWXXxc.js";import"./Label-QMoyFNov.js";import"./ZIndexLayer-CvEqpirx.js";import"./types-CdMLkiLP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-DehnkZN_.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DsKEiEFE.js";import"./useAnimationId-C-XOTnuE.js";import"./Curve-C-oh9Gi7.js";import"./step-De1pGJyj.js";import"./path-DyVhHtw_.js";import"./tooltipContext-B8aLYTur.js";import"./Symbols-DCbX0jj1.js";import"./symbol-UZk0eoHb.js";import"./ActiveShapeUtils-CfzUyvN7.js";import"./RegisterGraphicalItemId-Dt1qkWl-.js";import"./ErrorBarContext-trjmp7P9.js";import"./GraphicalItemClipPath-CRnvGLDA.js";import"./SetGraphicalItem-BR7YSlkQ.js";import"./CSSTransitionAnimate-atuUyGx2.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-CBycoxNA.js";import"./uniqBy-CdjrOVMj.js";import"./iteratee-gRbCXcE0.js";import"./Cross-BZfu-qo2.js";import"./Rectangle-D-gwz3zD.js";import"./Sector-DXbenR2K.js";const Xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Yr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Yr as __namedExportsOrder,Xr as default};
