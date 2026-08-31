import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{G as r,K as i}from"./zIndexSlice-Dy7ciYWo.js";import{n as a,t as o}from"./Legend-DiG0OfkN.js";import{n as s,t as c}from"./Tooltip-tAkHHdqP.js";import{n as l,t as u}from"./CartesianGrid-DXJ2CyMi.js";import{n as d,t as f}from"./Line-CCKkHve0.js";import{n as p,t as m}from"./XAxis-B3WODRl4.js";import{n as h,t as g}from"./YAxis-CZypjyHs.js";import{n as _,t as v}from"./LineChart-BRH708ee.js";import{n as y,r as b}from"./Coordinate-BM6Q61mz.js";import{n as x,t as S}from"./utils-vqcWnakT.js";import{n as C,t as w}from"./YAxisArgs-CVzi3wci.js";var T,E,D,O,k,A,j;function M(){return(M=t((()=>{T=e(n()),l(),a(),d(),_(),i(),s(),p(),h(),b(),x(),C(),E={component:g,argTypes:w},D=e=>{if(e===`auto`||typeof e==`number`)return e;let t=parseInt(e,10);return Number.isNaN(t)?120:t},O={render:e=>{let t=D(e.width);return T.createElement(r,{width:`100%`,height:500},T.createElement(v,{width:600,height:300,data:y},T.createElement(u,{strokeDasharray:`3 3`}),T.createElement(m,null),T.createElement(g,{...e,width:t}),T.createElement(o,null),T.createElement(f,{dataKey:`y`}),T.createElement(c,null)))},args:{...S(w),dataKey:`pv`,domain:[0,300],type:`number`,allowDataOverflow:!0,tickMargin:20,angle:45,width:`120`,label:{value:`The Axis Label`,position:`center`,angle:90}}},k=e=>{let{x:t,y:n,payload:r,padding:i}=e;return T.createElement(`g`,{transform:`translate(${t},${n})`},T.createElement(`text`,{x:0,y:0,dy:5,textAnchor:`end`,fill:`#666`,fontSize:`12`},r.value),i&&typeof i==`object`&&`top`in i&&T.createElement(`text`,{x:-5,y:0,dy:5,textAnchor:`end`,fill:`#e74c3c`,fontSize:`8`},`T:`,i.top,` B:`,i.bottom),i&&typeof i==`object`&&`top`in i&&i.top>10&&T.createElement(`circle`,{cx:-30,cy:0,r:3,fill:`#e74c3c`,opacity:.7}),i&&typeof i==`string`&&T.createElement(`text`,{x:-5,y:0,dy:15,textAnchor:`end`,fill:`#e74c3c`,fontSize:`8`},i))},A={render:e=>T.createElement(r,{width:`100%`,height:500},T.createElement(v,{data:[{category:`Product A`,value:400,target:450},{category:`Product B`,value:300,target:350},{category:`Product C`,value:200,target:250},{category:`Product D`,value:278,target:300},{category:`Product E`,value:189,target:220}]},T.createElement(u,{strokeDasharray:`3 3`}),T.createElement(m,{dataKey:`category`}),T.createElement(g,{...e,tick:T.createElement(k,null),width:100}),T.createElement(f,{type:`monotone`,dataKey:`value`,stroke:`#3498db`,name:`Actual`}),T.createElement(f,{type:`monotone`,dataKey:`target`,stroke:`#e74c3c`,strokeDasharray:`5 5`,name:`Target`}),T.createElement(c,null),T.createElement(o,null))),args:{...S(w),padding:{top:25,bottom:35},width:100,tickMargin:10}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    const width = getWidth(args.width);
    return <ResponsiveContainer width="100%" height={500}>
        <LineChart width={600} height={300} data={coordinateWithValueData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis />
          <YAxis {...args} width={width} />
          <Legend />
          <Line dataKey="y" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(YAxisArgs),
    dataKey: 'pv',
    domain: [0, 300],
    type: 'number',
    allowDataOverflow: true,
    tickMargin: 20,
    angle: 45,
    width: '120',
    label: {
      value: 'The Axis Label',
      position: 'center',
      angle: 90
    }
  }
}`,...O.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    const sampleData = [{
      category: 'Product A',
      value: 400,
      target: 450
    }, {
      category: 'Product B',
      value: 300,
      target: 350
    }, {
      category: 'Product C',
      value: 200,
      target: 250
    }, {
      category: 'Product D',
      value: 278,
      target: 300
    }, {
      category: 'Product E',
      value: 189,
      target: 220
    }];
    return <ResponsiveContainer width="100%" height={500}>
        <LineChart data={sampleData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis {...args} tick={<CustomYAxisTickWithPadding />} width={100} />
          <Line type="monotone" dataKey="value" stroke="#3498db" name="Actual" />
          <Line type="monotone" dataKey="target" stroke="#e74c3c" strokeDasharray="5 5" name="Target" />
          <Tooltip />
          <Legend />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(YAxisArgs),
    padding: {
      top: 25,
      bottom: 35
    },
    width: 100,
    tickMargin: 10
  }
}`,...A.parameters?.docs?.source}}},j=[`API`,`YAxisCustomTickWithPadding`]})))()}M();export{O as API,A as YAxisCustomTickWithPadding,j as __namedExportsOrder,E as default};