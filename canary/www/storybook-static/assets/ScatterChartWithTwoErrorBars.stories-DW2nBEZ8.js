import{R as r}from"./iframe-CtzYfaFS.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-DZ6EJE6s.js";import{C as d}from"./CartesianGrid-BNaIyixE.js";import{X as c}from"./XAxis-oAw543sJ.js";import{Y as y}from"./YAxis-IWkh__zP.js";import{S as h}from"./Scatter-oDtCRzIG.js";import{E as e}from"./ErrorBar-D4rNGBtV.js";import{T as u}from"./Tooltip-DogIC3j-.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DtAkHf5u.js";import"./zIndexSlice-CHFLQ-iB.js";import"./immer-5-WksSwG.js";import"./index-B_3CFrL4.js";import"./index-CS7Z3m5_.js";import"./get-BsiXY17Z.js";import"./resolveDefaultProps-B4yZFq1_.js";import"./isWellBehavedNumber-C_JD1Sao.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CQyW4Cl8.js";import"./index-B8ynkf98.js";import"./renderedTicksSlice-CyXKwvU2.js";import"./axisSelectors-C9oTN7aY.js";import"./d3-scale-Dsn_Yuxt.js";import"./CartesianChart-DLLDguMM.js";import"./chartDataContext-CAcvyAd0.js";import"./CategoricalChart-CwCdJGlO.js";import"./CartesianAxis-BA_E2N7m.js";import"./Layer-BYFEOVHG.js";import"./Text-EAXDgmFv.js";import"./DOMUtils-CZaHz23v.js";import"./Label-vhEl4j2z.js";import"./ZIndexLayer-DBCChzpw.js";import"./types-BhOKl2M1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-CFTPfFdo.js";import"./useAnimationId-Dat_OdBO.js";import"./Curve-CEEgN7pC.js";import"./step-BRDo_NJw.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BlURvFRM.js";import"./Symbols-BZg8aTao.js";import"./symbol-Cw8G4fgp.js";import"./ActiveShapeUtils-Bjb6cUC6.js";import"./RegisterGraphicalItemId-C98AlHEB.js";import"./ErrorBarContext-Bj7SM4UW.js";import"./GraphicalItemClipPath-DEcca-2A.js";import"./SetGraphicalItem-CIPU0D-S.js";import"./CSSTransitionAnimate-Dfc05_-P.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DkrRKcsg.js";import"./uniqBy-CBSkEntb.js";import"./iteratee-BJLAzLHV.js";import"./Cross-Dgj9Mdeo.js";import"./Rectangle-bPdK07Y6.js";import"./Sector-Kex3ri7r.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Er=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Er as __namedExportsOrder,xr as default};
