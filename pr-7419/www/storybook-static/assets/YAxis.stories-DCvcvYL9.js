import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-43m7EBoo.js";import{A as r,B as i,Q as a,R as o,Rt as s,Vn as c,X as l,kn as u,t as d}from"./iframe-BqVvK_R4.js";import{t as f,w as p}from"./data-J2vpPkF6.js";import{n as m,t as h}from"./utils-4uF5A2JM.js";import{n as g,t as _}from"./YAxisArgs-yPWmA9Ka.js";var v,y,b,x,S,C,w;e((()=>{v=t(n()),d(),f(),m(),g(),y={component:o,argTypes:_},b=e=>{if(e===`auto`||typeof e==`number`)return e;let t=parseInt(e,10);return Number.isNaN(t)?120:t},x={render:e=>{let t=b(e.width);return v.createElement(c,{width:`100%`,height:500},v.createElement(r,{width:600,height:300,data:p},v.createElement(a,{strokeDasharray:`3 3`}),v.createElement(i,null),v.createElement(o,{...e,width:t}),v.createElement(u,null),v.createElement(l,{dataKey:`y`}),v.createElement(s,null)))},args:{...h(_),dataKey:`pv`,domain:[0,300],type:`number`,allowDataOverflow:!0,tickMargin:20,angle:45,width:`120`,label:{value:`The Axis Label`,position:`center`,angle:90}}},S=e=>{let{x:t,y:n,payload:r,padding:i}=e;return v.createElement(`g`,{transform:`translate(${t},${n})`},v.createElement(`text`,{x:0,y:0,dy:5,textAnchor:`end`,fill:`#666`,fontSize:`12`},r.value),i&&typeof i==`object`&&`top`in i&&v.createElement(`text`,{x:-5,y:0,dy:5,textAnchor:`end`,fill:`#e74c3c`,fontSize:`8`},`T:`,i.top,` B:`,i.bottom),i&&typeof i==`object`&&`top`in i&&i.top>10&&v.createElement(`circle`,{cx:-30,cy:0,r:3,fill:`#e74c3c`,opacity:.7}),i&&typeof i==`string`&&v.createElement(`text`,{x:-5,y:0,dy:15,textAnchor:`end`,fill:`#e74c3c`,fontSize:`8`},i))},C={render:e=>v.createElement(c,{width:`100%`,height:500},v.createElement(r,{data:[{category:`Product A`,value:400,target:450},{category:`Product B`,value:300,target:350},{category:`Product C`,value:200,target:250},{category:`Product D`,value:278,target:300},{category:`Product E`,value:189,target:220}]},v.createElement(a,{strokeDasharray:`3 3`}),v.createElement(i,{dataKey:`category`}),v.createElement(o,{...e,tick:v.createElement(S,null),width:100}),v.createElement(l,{type:`monotone`,dataKey:`value`,stroke:`#3498db`,name:`Actual`}),v.createElement(l,{type:`monotone`,dataKey:`target`,stroke:`#e74c3c`,strokeDasharray:`5 5`,name:`Target`}),v.createElement(s,null),v.createElement(u,null))),args:{...h(_),padding:{top:25,bottom:35},width:100,tickMargin:10}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w=[`API`,`YAxisCustomTickWithPadding`]}))();export{x as API,C as YAxisCustomTickWithPadding,w as __namedExportsOrder,y as default};