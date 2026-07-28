import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-43m7EBoo.js";import{B as r,H as i,P as a,Q as o,R as s,Rt as c,g as l,t as u}from"./iframe-BiMB5Acc.js";import{n as d,t as f}from"./utils-4uF5A2JM.js";import{n as p,t as m}from"./ScatterChartArgs-f-9wms1F.js";var h,g,_,v;e((()=>{h=t(n()),u(),d(),p(),g={component:l,argTypes:m,docs:{autodocs:!1}},_={render:e=>h.createElement(l,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:e.layout},h.createElement(o,null),h.createElement(r,{type:`number`,dataKey:`x`,name:`stature`,unit:`cm`,allowDataOverflow:e.allowDataOverflow}),h.createElement(s,{type:`number`,dataKey:`y`,name:`weight`,unit:`kg`,allowDataOverflow:e.allowDataOverflow}),h.createElement(i,{name:`A school`,data:[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}],fill:`blue`},h.createElement(a,{dataKey:`errorX`,width:2,strokeWidth:3,stroke:`green`,direction:`x`}),h.createElement(a,{dataKey:`errorY`,width:4,strokeWidth:2,stroke:`red`,direction:`y`})),h.createElement(c,{cursor:{strokeDasharray:`3 3`}})),args:f(m),parameters:{controls:{include:[`layout`,`allowDataOverflow`]}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v=[`WithErrorBarsAndExtendedDomain`]}))();export{_ as WithErrorBarsAndExtendedDomain,v as __namedExportsOrder,g as default};