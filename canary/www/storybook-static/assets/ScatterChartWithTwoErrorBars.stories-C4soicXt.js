import{R as r}from"./iframe-D9AiK7MA.js";import{g as n}from"./utils-ePvtT4un.js";import{S as p}from"./ScatterChartArgs-DVckGNEz.js";import{S as s}from"./ScatterChart-CvSkVSVM.js";import{C as d}from"./CartesianGrid-uYXYVu-f.js";import{X as c}from"./XAxis-BCGK_x8y.js";import{Y as y}from"./YAxis-tdOr8uxM.js";import{S as h}from"./Scatter-BoJgbzM7.js";import{E as e}from"./ErrorBar-LKUemq3G.js";import{T as u}from"./Tooltip-N7IAnmYv.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-FkIEBIEk.js";import"./zIndexSlice-DhQQTweq.js";import"./throttle-CqrKdGFn.js";import"./index-u8J4Prlj.js";import"./index-B_iylBpT.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BrjTargu.js";import"./isWellBehavedNumber-NbAnwMd8.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CBrmEfkl.js";import"./index-DhLn_wsy.js";import"./axisSelectors-CD31PgCw.js";import"./d3-scale-CwcWyPDB.js";import"./renderedTicksSlice-D9WbyrEd.js";import"./CartesianChart-BPglXXGd.js";import"./chartDataContext-DNFxmTn3.js";import"./CategoricalChart-BiDsY9G3.js";import"./CartesianAxis-NS8dhc5y.js";import"./Layer-nhRynhYN.js";import"./Text-C_gczTx7.js";import"./DOMUtils-C3E39plZ.js";import"./useId-CoGOq4Zh.js";import"./useBackwardsCompatibleTheme-D9vqIt6-.js";import"./Label-DaTR-VJZ.js";import"./ZIndexLayer-XiAaecg1.js";import"./types-Cl8UDNBF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DbRJrrAP.js";import"./useAnimationId-C-WCGbVo.js";import"./Curve-wdmzEcHN.js";import"./step-DlhrK73A.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DmjzTDu2.js";import"./Symbols-CVYHcjvQ.js";import"./symbol-DxHnn3QN.js";import"./ActiveShapeUtils-Cx_4S3nX.js";import"./RegisterGraphicalItemId-ihVYTcTs.js";import"./ErrorBarContext-jnq7QWza.js";import"./GraphicalItemClipPath-CE-RXk6S.js";import"./SetGraphicalItem-dm3-HqvX.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate-C5AiCFR9.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-rjFr_gsT.js";import"./uniqBy-6EpLurNX.js";import"./iteratee-KOAwIcrd.js";import"./Cross-D8CThjxd.js";import"./Rectangle-CJSM4NJJ.js";import"./Sector-D3q17Cgh.js";const Ar={component:s,argTypes:p,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(s,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(p),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
