import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{n as r,t as i}from"./Tooltip-1joug3q7.js";import{n as a,t as o}from"./CartesianGrid-D3Nuobx9.js";import{n as s,t as c}from"./Scatter-VkNY1nmA.js";import{n as l,t as u}from"./XAxis-DaKmDvZB.js";import{n as d,t as f}from"./YAxis-DFF_vhTk.js";import{n as p,t as m}from"./ErrorBar-zObuVrr_.js";import{n as h,t as g}from"./ScatterChart-itE_2BwH.js";import{n as _,t as v}from"./utils-vqcWnakT.js";import{n as y,t as b}from"./ScatterChartArgs-BTSdCahn.js";var x,S,C,w;function T(){return(T=t((()=>{x=e(n()),h(),a(),l(),d(),r(),s(),p(),_(),y(),S={component:g,argTypes:b,docs:{autodocs:!1}},C={render:e=>x.createElement(g,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:e.layout},x.createElement(o,null),x.createElement(u,{type:`number`,dataKey:`x`,name:`stature`,unit:`cm`,allowDataOverflow:e.allowDataOverflow}),x.createElement(f,{type:`number`,dataKey:`y`,name:`weight`,unit:`kg`,allowDataOverflow:e.allowDataOverflow}),x.createElement(c,{name:`A school`,data:[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}],fill:`blue`},x.createElement(m,{dataKey:`errorX`,width:2,strokeWidth:3,stroke:`green`,direction:`x`}),x.createElement(m,{dataKey:`errorY`,width:4,strokeWidth:2,stroke:`red`,direction:`y`})),x.createElement(i,{cursor:{strokeDasharray:`3 3`}})),args:v(b),parameters:{controls:{include:[`layout`,`allowDataOverflow`]}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w=[`WithErrorBarsAndExtendedDomain`]})))()}T();export{C as WithErrorBarsAndExtendedDomain,w as __namedExportsOrder,S as default};