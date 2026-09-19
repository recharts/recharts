import{R as r}from"./iframe-EacBJx3u.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-BwtDCHQQ.js";import{C as d}from"./CartesianGrid-Bhrkoszc.js";import{X as c}from"./XAxis-Cl6K2xWP.js";import{Y as y}from"./YAxis-qieo9xUf.js";import{S as h}from"./Scatter-ghylBONE.js";import{E as e}from"./ErrorBar-CWYuTNwe.js";import{T as u}from"./Tooltip-DhPX_N6D.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DvnaJvMy.js";import"./zIndexSlice-BiNX82M2.js";import"./throttle-CQWyIvYS.js";import"./index-zONtSjtR.js";import"./index-Cp5XPxNK.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Pp64jnNu.js";import"./isWellBehavedNumber-cllAzHLG.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-BsKbaT3c.js";import"./d3-scale-XN8I2g_L.js";import"./index-Cjnu8Ghr.js";import"./index-DAXn18Z3.js";import"./renderedTicksSlice-Bi45b659.js";import"./index-BWFLwSJj.js";import"./CartesianChart-CpkU4zi_.js";import"./chartDataContext-6_AZEoRj.js";import"./CategoricalChart-DR3NAbyi.js";import"./CartesianAxis-DHoeZLWk.js";import"./Layer-BUsl6vHA.js";import"./Text-DusUwDRl.js";import"./DOMUtils-R4-PljPA.js";import"./useId-Cx3ryNMd.js";import"./useBackwardsCompatibleTheme-C878E-FF.js";import"./Label-DrX_jEaz.js";import"./ZIndexLayer-CbjobkdE.js";import"./types-CDt3wtpt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CgPok0XL.js";import"./useAnimationId-BrvpB7V7.js";import"./Curve-DXkxZuR3.js";import"./step--LIF_hlk.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DT1bcwJ-.js";import"./Symbols-DQqKkMeQ.js";import"./symbol-Gpg8Q1c8.js";import"./ActiveShapeUtils-D1Q_UPVj.js";import"./RegisterGraphicalItemId-C6xi7qpR.js";import"./ErrorBarContext-Di28pWGd.js";import"./GraphicalItemClipPath-DdpslyMR.js";import"./SetGraphicalItem-DIVfOwKJ.js";import"./useGraphicalItemIdentity-PgG_6CLw.js";import"./CSSTransitionAnimate-CLPxKW9I.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-CW3PsA1I.js";import"./uniqBy-DulbN1k2.js";import"./iteratee-CZcssftL.js";import"./Cross-Bx1awyvz.js";import"./Rectangle-CcRh70Ua.js";import"./Sector-CXNpvmKT.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
