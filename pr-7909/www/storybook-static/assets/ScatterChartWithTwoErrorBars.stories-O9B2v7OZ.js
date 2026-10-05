import{R as r}from"./iframe-BjBEpprL.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-TdNeNzJe.js";import{C as d}from"./CartesianGrid-DChrxsh_.js";import{X as c}from"./XAxis-BDZhGE0-.js";import{Y as y}from"./YAxis-CJHLeFgq.js";import{S as h}from"./Scatter-0MtT0l7E.js";import{E as e}from"./ErrorBar-BIfK9w2q.js";import{T as u}from"./Tooltip-CvizmIaq.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CcICmPjO.js";import"./zIndexSlice-D-PTjDwF.js";import"./throttle-NXQPRMgU.js";import"./index-CFgOxFQX.js";import"./index-BBITsrkq.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B9MstDaw.js";import"./isWellBehavedNumber-BCSUkdc1.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-DfmJjs-d.js";import"./d3-scale-CKCE33MR.js";import"./index-BaAr_1o8.js";import"./index-MYKE-65n.js";import"./renderedTicksSlice-1EW54Ol1.js";import"./index-DMF93B4y.js";import"./CartesianChart-BrSdxCQq.js";import"./chartDataContext-D6HhxZlR.js";import"./CategoricalChart-CI19dNhZ.js";import"./CartesianAxis--AnwAjfA.js";import"./Layer-vH_2ZCys.js";import"./Text-CUza6yot.js";import"./DOMUtils-Bj0yZBJ3.js";import"./useId-ChOQ34QW.js";import"./useBackwardsCompatibleTheme-CUuvE6f4.js";import"./Label-BeKD4wFi.js";import"./ZIndexLayer-Dpvj1i9H.js";import"./types-DeKlgzSD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BDzZfL3v.js";import"./useAnimationId-a8RjQG0_.js";import"./Curve-C8b-yzs0.js";import"./step-DdKwrL1k.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BBDwv76s.js";import"./Symbols-BRCh4zwI.js";import"./symbol-BrM6n73m.js";import"./ActiveShapeUtils-BcKWPZeO.js";import"./RegisterGraphicalItemId-CyOHhqL8.js";import"./ErrorBarContext-CQzClf2u.js";import"./GraphicalItemClipPath-EXC5I5vP.js";import"./SetGraphicalItem-CqlMG-ES.js";import"./useGraphicalItemIdentity-BkQxsk2A.js";import"./dataEntryStyles-BcYkX4aj.js";import"./CSSTransitionAnimate-FXsf_7Nw.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-vtz1m0Dx.js";import"./uniqBy-CsD2VMx9.js";import"./iteratee-tek0I0sc.js";import"./Cross-CyG2VKzL.js";import"./Rectangle-BTYoZZR8.js";import"./Sector-D2BbnGaa.js";const Dr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Or=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
