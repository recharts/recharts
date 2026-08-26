import{R as r}from"./iframe-Czcj7Ej5.js";import{g as n}from"./utils-ePvtT4un.js";import{S as p}from"./ScatterChartArgs-DVckGNEz.js";import{S as s}from"./ScatterChart--fwi3fWV.js";import{C as d}from"./CartesianGrid-2pCOuBNQ.js";import{X as c}from"./XAxis-BDziZgbX.js";import{Y as y}from"./YAxis-BrgBYt1o.js";import{S as h}from"./Scatter-CucSHFnu.js";import{E as e}from"./ErrorBar-BW5VzwPO.js";import{T as u}from"./Tooltip-DkrV1jqM.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CDYHtUJT.js";import"./zIndexSlice-CKivF8h7.js";import"./throttle-BVmZUzar.js";import"./index-DMWmOMbl.js";import"./index-B91NvUo7.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-8BNEdWXX.js";import"./isWellBehavedNumber-Dco4JHSd.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-BeEA7IYF.js";import"./d3-scale-BQoi7yt5.js";import"./index-B0JfwGdu.js";import"./index-Bxr1sCFD.js";import"./renderedTicksSlice-CbrcSGbF.js";import"./index-CFVWldzh.js";import"./CartesianChart-Dv6L8FEP.js";import"./chartDataContext-Bk1K2XnM.js";import"./CategoricalChart-Du7LZMoH.js";import"./CartesianAxis-DqwYXNcz.js";import"./Layer-2POOn5CI.js";import"./Text-BN2m7we3.js";import"./DOMUtils-CVT-c_43.js";import"./useId-3K3eUDJ4.js";import"./useBackwardsCompatibleTheme-BpiBN5I0.js";import"./Label-OqXB0-3Q.js";import"./ZIndexLayer-CF-iLGvZ.js";import"./types-CjYnj8ko.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-B6csDPia.js";import"./useAnimationId-_fI9jCE-.js";import"./Curve-BM-kcMMV.js";import"./step-hNno3B0H.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Di9UKZqK.js";import"./Symbols-BVCpgQZT.js";import"./symbol-DAwNgG2X.js";import"./ActiveShapeUtils-C-4luYKV.js";import"./RegisterGraphicalItemId-DZFxFD16.js";import"./ErrorBarContext-BTb3p3NR.js";import"./GraphicalItemClipPath-BePsYx1e.js";import"./SetGraphicalItem-CX4EE90C.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate-BRf1SEoQ.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-49EfHLgl.js";import"./uniqBy-FrwGGnBN.js";import"./iteratee-CKwCJVNt.js";import"./Cross-CNxTD_8i.js";import"./Rectangle-DrGaLjNe.js";import"./Sector-kN5zdx9N.js";const Sr={component:s,argTypes:p,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(s,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(p),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Dr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Dr as __namedExportsOrder,Sr as default};
