import{R as r}from"./iframe-C55y8OzM.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-DNAFN6oH.js";import{C as d}from"./CartesianGrid-riyfH9hi.js";import{X as c}from"./XAxis-BhP0mslG.js";import{Y as y}from"./YAxis-DGa7nV3z.js";import{S as h}from"./Scatter-Bm0NWzxU.js";import{E as e}from"./ErrorBar-C9_t6xWd.js";import{T as u}from"./Tooltip-B9P8hqEd.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DsEVXtD9.js";import"./zIndexSlice-mi5wuovt.js";import"./throttle-zPKptILV.js";import"./index-B1erB4OF.js";import"./index-Bbw2aGRN.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Cgrl3e7D.js";import"./isWellBehavedNumber-mxdqJrTq.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-DyDkozWt.js";import"./d3-scale-CwLPJ1sG.js";import"./index-kqQD3Gpu.js";import"./index-DnfvrK_t.js";import"./renderedTicksSlice-BczpgcuJ.js";import"./index-Dykf-EVS.js";import"./CartesianChart-HAuDRHmx.js";import"./chartDataContext-DnaKmrEK.js";import"./CategoricalChart-BdM0esTK.js";import"./CartesianAxis-UMkVq4pL.js";import"./Layer-D0VzgPFA.js";import"./Text-BSBFwZ1P.js";import"./pageBackground-D6U7S1qf.js";import"./useId-XdK2U0Ar.js";import"./useBackwardsCompatibleTheme-B8dADBlT.js";import"./Label-BceBwSRN.js";import"./ZIndexLayer-BdI7uft_.js";import"./types-BjarwEzr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-DVnALFej.js";import"./useAnimationId-4Vo2vEHF.js";import"./dataEntryStyles-Cic1JpuQ.js";import"./Curve-B6Vmc8K0.js";import"./step-CWyhxLD0.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CA6M0awf.js";import"./Symbols-Brox2qm_.js";import"./symbol-Btd-f6kS.js";import"./ActiveShapeUtils-7zk5n9mh.js";import"./ErrorBarContext-DIbssQ08.js";import"./GraphicalItemClipPath-BHQAz3ae.js";import"./SetGraphicalItem-PlWMyb2e.js";import"./useEffectiveDataKey-BY6K7cit.js";import"./CSSTransitionAnimate-Cl4o8Ohv.js";import"./util-Dxo8gN5i.js";import"./useElementOffset--zSzp9Ca.js";import"./uniqBy-Cvg7I5_E.js";import"./iteratee-B67uZlwB.js";import"./Cross-DAUM0A69.js";import"./Rectangle-kX1A_stc.js";import"./Sector-CFXFrO2G.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Dr as __namedExportsOrder,Sr as default};
