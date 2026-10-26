import{R as r}from"./iframe-CcLWsqZ6.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-DAO29XJW.js";import{C as d}from"./CartesianGrid-B_gilkWH.js";import{X as c}from"./XAxis-BgOtkzm1.js";import{Y as y}from"./YAxis-BSdoGpjP.js";import{S as h}from"./Scatter-C-Ifvnra.js";import{E as e}from"./ErrorBar-B79TaNMN.js";import{T as u}from"./Tooltip-BNUTWoNn.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BXLQXmKg.js";import"./zIndexSlice-qEbbRsug.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DIHsajMe.js";import"./throttle-QCGHXTx2.js";import"./index-BFIBYpnF.js";import"./index-DS2FinM5.js";import"./axisSelectors-DKMD16Y3.js";import"./polarAxisSelectors-ChPgG8gV.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C4Z54rtJ.js";import"./index-53ZRgOab.js";import"./index-DTchXhsD.js";import"./renderedTicksSlice-ByXwp7t2.js";import"./index-DgxdHgy0.js";import"./CartesianChart-DtQ910PV.js";import"./chartDataContext-BOZiBkOs.js";import"./CategoricalChart-xvgg784f.js";import"./CartesianAxis-nGOA1KMV.js";import"./Layer-Cid6c7Vb.js";import"./Text-B8YpIyQn.js";import"./pageBackground-LUiwpw9x.js";import"./useId-HcHlz_oH.js";import"./ZIndexLayer-DNvaLTFc.js";import"./Label-FbOJbP-p.js";import"./dataEntryStyles-Cm1A0_Zh.js";import"./types-B5Ef_z7I.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-l3ZfSaP4.js";import"./useAnimationId-D35HAJRU.js";import"./Curve-CkzSpo54.js";import"./step-Dkisf4Kt.js";import"./path-DyVhHtw_.js";import"./tooltipContext-jb5dZxBY.js";import"./Symbols-CqDetlVC.js";import"./symbol-CfzxdKp_.js";import"./ActiveShapeUtils-B0HZ1tIg.js";import"./RegisterGraphicalItemId-DuSlzxcR.js";import"./ErrorBarContext-BFxrQbxP.js";import"./SetGraphicalItem-DRC1z2NN.js";import"./useEffectiveDataKey-7iKmBNHY.js";import"./CSSTransitionAnimate-C901gxfR.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-CzNyUy0f.js";import"./uniqBy-Bl1hupsk.js";import"./iteratee-BmEXTGiW.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CiNcOdta.js";import"./Rectangle-D6aDAVT3.js";import"./Sector-B-5V9BZl.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
