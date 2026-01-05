import{e}from"./iframe-Da-M2bw_.js";import{Y as s}from"./YAxisProps-ByMyQu0r.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as c}from"./YAxis-u8ljMyRk.js";import{R as h}from"./arrayEqualityCheck-Bu1fao9w.js";import{L as A}from"./LineChart-CyyU7Yr_.js";import{C as f}from"./CartesianGrid-BeDGJ5q1.js";import{X as x}from"./XAxis-CFyYvsY3.js";import{L as E}from"./Legend-BtpSwi4J.js";import{L as i}from"./Line-gMk0LR0R.js";import{T as v}from"./Tooltip-BswLKPO9.js";import{R as k}from"./RechartsHookInspector-DN6fpuiF.js";import{c as P}from"./Coordinate-geWwP0Ct.js";const w={component:c,argTypes:s},T=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=T(r.width);return e.createElement(h,{width:"100%",height:500},e.createElement(A,{width:600,height:300,data:P},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(x,null),e.createElement(c,{...r,width:a}),e.createElement(E,null),e.createElement(i,{dataKey:"y"}),e.createElement(v,null),e.createElement(k,null)))},args:{...y(s),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:C,payload:b,padding:t}=r;return e.createElement("g",{transform:`translate(${a},${C})`},e.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},b.value),t&&typeof t=="object"&&"top"in t&&e.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",t.top," B:",t.bottom),t&&typeof t=="object"&&"top"in t&&t.top>10&&e.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),t&&typeof t=="string"&&e.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},t))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return e.createElement(h,{width:"100%",height:500},e.createElement(A,{data:a},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(x,{dataKey:"category"}),e.createElement(c,{...r,tick:e.createElement(L,null),width:100}),e.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),e.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),e.createElement(v,null),e.createElement(E,null),e.createElement(k,null)))},args:{...y(s),padding:{top:25,bottom:35},width:100,tickMargin:10}};var l,m,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(YAxisProps),
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
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var g,p,u;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(YAxisProps),
    padding: {
      top: 25,
      bottom: 35
    },
    width: 100,
    tickMargin: 10
  }
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const D=["API","YAxisCustomTickWithPadding"],F=Object.freeze(Object.defineProperty({__proto__:null,API:o,YAxisCustomTickWithPadding:n,__namedExportsOrder:D,default:w},Symbol.toStringTag,{value:"Module"}));export{o as A,F as C};
