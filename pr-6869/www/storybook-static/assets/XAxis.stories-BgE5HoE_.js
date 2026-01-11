import{e}from"./iframe-YjsnRhKk.js";import{X as c}from"./XAxisProps-d4szlzro.js";import{g as h}from"./utils-ePvtT4un.js";import{X as p}from"./XAxis-B2tLltrx.js";import{R as f}from"./arrayEqualityCheck-BJwRC6MI.js";import{L as y}from"./LineChart-BimcorRm.js";import{c as j}from"./Coordinate-geWwP0Ct.js";import{C as u}from"./CartesianGrid-DdXZU_EM.js";import{Y as x}from"./YAxis-Dkcj0U0j.js";import{L as A}from"./Legend-BJ9mKJX0.js";import{L as m}from"./Line-qgNAtcDf.js";import{T as E}from"./Tooltip-CjaAafIJ.js";import{R as L}from"./RechartsHookInspector-B9NqqHZV.js";import{L as g}from"./Label-CLhSutXl.js";const z={component:p,argTypes:c},i={render:o=>e.createElement(f,{width:"100%",height:500},e.createElement(y,{width:600,height:300,data:j},e.createElement(u,{strokeDasharray:"3 3"}),e.createElement(p,{...o}),e.createElement(x,null),e.createElement(A,null),e.createElement(m,{dataKey:"y"}),e.createElement(E,null),e.createElement(L,null))),args:{...h(c),dataKey:"x",domain:[100,500],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,height:70,label:{value:"The Axis Label insideBottomRight",position:"insideBottomRight"}}},J=o=>{const{x:n,y:r,payload:d,padding:t}=o;return e.createElement("g",{transform:`translate(${n},${r})`},e.createElement("text",{x:0,y:0,dy:16,textAnchor:"middle",fill:"#666",fontSize:"12"},d.value),t&&typeof t=="object"&&"left"in t&&e.createElement("text",{x:0,y:0,dy:32,textAnchor:"middle",fill:"#007acc",fontSize:"8"},"L:",t.left," R:",t.right),t&&typeof t=="string"&&e.createElement("text",{x:0,y:0,dy:32,textAnchor:"middle",fill:"#007acc",fontSize:"8"},t))},s={render:o=>{const n=[{name:"Jan",value:400,category:"A"},{name:"Feb",value:300,category:"B"},{name:"Mar",value:200,category:"C"},{name:"Apr",value:278,category:"D"},{name:"May",value:189,category:"E"},{name:"Jun",value:239,category:"F"}],r=()=>e.createElement(e.Fragment,null,e.createElement(g,{position:"insideTopLeft"},"Label insideTopLeft"),e.createElement(g,{position:"insideTopRight"},"Label insideTopRight"),e.createElement(g,{position:"insideTop"},"Label insideTop"));return e.createElement(f,{width:"100%",height:500},e.createElement(y,{data:n},e.createElement(u,{strokeDasharray:"3 3"}),e.createElement(p,{...o,dataKey:"name",tick:e.createElement(J,null),height:80},e.createElement(r,null)),e.createElement(x,null),e.createElement(m,{type:"monotone",dataKey:"value",stroke:"#8884d8"}),e.createElement(E,null),e.createElement(A,null),e.createElement(L,null)))},args:{...h(c),dataKey:"name",padding:{left:30,right:40},height:80,tickMargin:10}},l={render:o=>{const n=[{month:"Jan",sales:1200,profit:400},{month:"Feb",sales:1900,profit:500},{month:"Mar",sales:1400,profit:300},{month:"Apr",sales:1700,profit:450},{month:"May",sales:2100,profit:600},{month:"Jun",sales:1800,profit:520}],r=d=>{const{x:t,y:O,payload:X,padding:a}=d,b=a&&typeof a=="object"&&"left"in a?Math.max(0,a.left*.1):0,C=a==="no-gap",P=C?"10px":"12px",w=C?"bold":"normal";return e.createElement("text",{x:t+b,y:O+15,textAnchor:"middle",fill:"#333",fontSize:P,fontWeight:w},X.value,a&&typeof a=="object"&&e.createElement("tspan",{x:t+b,dy:"12",fontSize:"8",fill:"#007acc"},`(${JSON.stringify(a)})`))};return e.createElement(f,{width:"100%",height:400},e.createElement(y,{data:n},e.createElement(u,{strokeDasharray:"3 3"}),e.createElement(p,{...o,dataKey:"month",tick:r,height:80}),e.createElement(x,null),e.createElement(m,{type:"monotone",dataKey:"sales",stroke:"#8884d8",name:"Sales"}),e.createElement(m,{type:"monotone",dataKey:"profit",stroke:"#82ca9d",name:"Profit"}),e.createElement(E,null),e.createElement(A,null),e.createElement(L,null)))},args:{...h(c),dataKey:"month",padding:{left:20,right:30},height:80,tickMargin:10}};var k,T,v;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={500}>
        <LineChart width={600} height={300} data={coordinateWithValueData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis {...args} />
          <YAxis />
          <Legend />
          <Line dataKey="y" />
          <Tooltip />
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(XAxisProps),
    dataKey: 'x',
    domain: [100, 500],
    type: 'number',
    allowDataOverflow: true,
    tickMargin: 20,
    angle: 45,
    height: 70,
    label: {
      value: 'The Axis Label insideBottomRight',
      position: 'insideBottomRight'
    }
  }
}`,...(v=(T=i.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var S,R,D;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: (args: Args) => {
    const sampleData = [{
      name: 'Jan',
      value: 400,
      category: 'A'
    }, {
      name: 'Feb',
      value: 300,
      category: 'B'
    }, {
      name: 'Mar',
      value: 200,
      category: 'C'
    }, {
      name: 'Apr',
      value: 278,
      category: 'D'
    }, {
      name: 'May',
      value: 189,
      category: 'E'
    }, {
      name: 'Jun',
      value: 239,
      category: 'F'
    }];
    const CustomLabels = () => <>
        <Label position="insideTopLeft">Label insideTopLeft</Label>
        <Label position="insideTopRight">Label insideTopRight</Label>
        <Label position="insideTop">Label insideTop</Label>
      </>;
    return <ResponsiveContainer width="100%" height={500}>
        <LineChart data={sampleData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis {...args} dataKey="name" tick={<CustomXAxisTickWithPadding />} height={80}>
            <CustomLabels />
          </XAxis>
          <YAxis />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
          <Tooltip />
          <Legend />
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(XAxisProps),
    dataKey: 'name',
    padding: {
      left: 30,
      right: 40
    },
    height: 80,
    tickMargin: 10
  }
}`,...(D=(R=s.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var K,F,M;l.parameters={...l.parameters,docs:{...(K=l.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: (args: Args) => {
    const sampleData = [{
      month: 'Jan',
      sales: 1200,
      profit: 400
    }, {
      month: 'Feb',
      sales: 1900,
      profit: 500
    }, {
      month: 'Mar',
      sales: 1400,
      profit: 300
    }, {
      month: 'Apr',
      sales: 1700,
      profit: 450
    }, {
      month: 'May',
      sales: 2100,
      profit: 600
    }, {
      month: 'Jun',
      sales: 1800,
      profit: 520
    }];

    // Function-based custom tick that uses padding for positioning
    const customTickFunction = (props: any) => {
      const {
        x,
        y,
        payload,
        padding
      } = props;

      // Calculate dynamic offset based on padding
      const xOffset = padding && typeof padding === 'object' && 'left' in padding ? Math.max(0, padding.left * 0.1) : 0;
      const isCompact = padding === 'no-gap';
      const fontSize = isCompact ? '10px' : '12px';
      const fontWeight = isCompact ? 'bold' : 'normal';
      return <text x={x + xOffset} y={y + 15} textAnchor="middle" fill="#333" fontSize={fontSize} fontWeight={fontWeight}>
          {payload.value}
          {padding && typeof padding === 'object' && <tspan x={x + xOffset} dy="12" fontSize="8" fill="#007acc">
              {\`(\${JSON.stringify(padding)})\`}
            </tspan>}
        </text>;
    };
    return <ResponsiveContainer width="100%" height={400}>
        <LineChart data={sampleData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis {...args} dataKey="month" tick={customTickFunction} height={80} />
          <YAxis />
          <Line type="monotone" dataKey="sales" stroke="#8884d8" name="Sales" />
          <Line type="monotone" dataKey="profit" stroke="#82ca9d" name="Profit" />
          <Tooltip />
          <Legend />
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(XAxisProps),
    dataKey: 'month',
    padding: {
      left: 20,
      right: 30
    },
    height: 80,
    tickMargin: 10
  }
}`,...(M=(F=l.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};const W=["API","CustomTickWithPadding","CustomTickFunction"],te=Object.freeze(Object.defineProperty({__proto__:null,API:i,CustomTickFunction:l,CustomTickWithPadding:s,__namedExportsOrder:W,default:z},Symbol.toStringTag,{value:"Module"}));export{i as A,te as C};
