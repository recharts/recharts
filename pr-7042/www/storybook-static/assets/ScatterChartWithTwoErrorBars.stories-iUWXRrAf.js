import{e as r}from"./iframe-CJQnRCN7.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-CaeXznmO.js";import{S as p}from"./ScatterChart-Du--dEaH.js";import{C as d}from"./CartesianGrid-BWHoKEcJ.js";import{X as c}from"./XAxis-DGEO6QJA.js";import{Y as y}from"./YAxis-Bx_UxG-b.js";import{S as h}from"./Scatter-Bh6LI_y4.js";import{E as e}from"./ErrorBar-C8bKM_M-.js";import{T as u}from"./Tooltip-QIQBaDRZ.js";import{R as f}from"./RechartsHookInspector-DQZJ1VRL.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DEeMF7CZ.js";import"./arrayEqualityCheck-DcQtyVca.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Bn42vmR1.js";import"./immer-pCuW_8mX.js";import"./PolarUtils-CTnnDHZv.js";import"./index-D1Dxg2z1.js";import"./hooks-D3GLo4z9.js";import"./axisSelectors-CBcJoGrJ.js";import"./d3-scale-AQeZIKmR.js";import"./zIndexSlice-D7pH0QjK.js";import"./renderedTicksSlice-6is9WC9q.js";import"./CartesianChart-pu1Q9M14.js";import"./chartDataContext-DYHRLxlR.js";import"./CategoricalChart-DZh5W8ZS.js";import"./CartesianAxis-CA-DoWhq.js";import"./Layer-B-568WrD.js";import"./Text-8oP5Jeys.js";import"./DOMUtils-CpcfJsF7.js";import"./Label-C1IYMHDK.js";import"./ZIndexLayer-DBz_ncGo.js";import"./types-Bb5s1IIN.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BMRDQSQL.js";import"./Curve-ClJjpRlb.js";import"./step-xPk2jUCK.js";import"./tooltipContext-LQxmXr66.js";import"./Symbols-BqZb3kY5.js";import"./symbol-CVXqLImo.js";import"./ActiveShapeUtils-Al5O4_0X.js";import"./isPlainObject-Cy53febZ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CIClz7bW.js";import"./useAnimationId-Btjbf-3C.js";import"./Trapezoid-DO_o8qI8.js";import"./Sector-DPKTnHdo.js";import"./RegisterGraphicalItemId-CErdNO5K.js";import"./ErrorBarContext-WcfhBNrP.js";import"./GraphicalItemClipPath-BMpRvZ7r.js";import"./SetGraphicalItem-oTp0Feor.js";import"./CSSTransitionAnimate-B_7XAp38.js";import"./useElementOffset-DS1TYk1g.js";import"./uniqBy-CVqqkYEQ.js";import"./iteratee-tQQnC2SF.js";import"./Cross-PSTvbWDH.js";import"./index-BmBTwCFz.js";import"./ChartSizeDimensions-BxOAeUa_.js";import"./OffsetShower-Bp1qc7mw.js";import"./PlotAreaShower-DPY3URo4.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
        <RechartsHookInspector />
      </ScatterChart>;
  },
  args: getStoryArgsFromArgsTypesObject(ScatterChartArgs),
  parameters: {
    controls: {
      include: ['layout', 'allowDataOverflow']
    }
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const kr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,kr as __namedExportsOrder,Sr as default};
