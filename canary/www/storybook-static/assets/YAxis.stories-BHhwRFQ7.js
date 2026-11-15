import{R as t}from"./iframe-c26JqrsL.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-I2w3cHIn.js";import{Y as s}from"./YAxis-BMAl-ilQ.js";import{R as h}from"./zIndexSlice-BkUYlJsZ.js";import{L as A}from"./LineChart-BTqtIOwK.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-BfXOM6vw.js";import{X as f}from"./XAxis-DutmNx-o.js";import{L as E}from"./Legend-B8n_PKuf.js";import{L as i}from"./Line-CCpKAg6f.js";import{T as v}from"./Tooltip-C74uwVO5.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-U_zx5ZhA.js";import"./Text-DrKUoP8L.js";import"./resolveDefaultProps-YkjEKeW8.js";import"./ZIndexLayer-B-r7bl4K.js";import"./index-CUwFsdn8.js";import"./index-mm1LjFas.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-NvwmetH_.js";import"./throttle-B2IvKwW-.js";import"./axisSelectors-Dy58hWsd.js";import"./d3-scale-DWhFNlvg.js";import"./CartesianAxis-CwL4X3Li.js";import"./Layer-vJvTy9Ku.js";import"./types-BkHyLjnw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DchxVsWm.js";import"./index-vwxbY9MG.js";import"./index-DaW3zNl9.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-C0_ZnG3M.js";import"./index-CUrdsACp.js";import"./fillDefinitions-OkciRhhD.js";import"./CartesianChart-CNu4n4dr.js";import"./chartDataContext-KJrM16zP.js";import"./CategoricalChart-DQ-Epfo-.js";import"./Symbols-BvzuXAby.js";import"./symbol-DAgH9-Fu.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BmKkIlsV.js";import"./uniqBy-CpoKnfjS.js";import"./iteratee-DEQ9rNns.js";import"./isArguments-yB-y1yaH.js";import"./Curve-XxFxrIWP.js";import"./step-CELEtsjP.js";import"./dataEntryStyles-NUuyBQzn.js";import"./ActivePoints-CT1fm5gU.js";import"./Dot-BhI3xlfW.js";import"./activeStyles-CxWIOF49.js";import"./useAnimationId-s58nu9Pz.js";import"./ErrorBarContext-Cck_FQwt.js";import"./SetGraphicalItem-Bf7rIr_j.js";import"./getRadiusAndStrokeWidthFromDot-DaLi06Yy.js";import"./ActiveShapeUtils-DUAkL6fN.js";import"./useEffectiveDataKey-BT6_jhIX.js";import"./Cross-CtwUkA5D.js";import"./Rectangle-C6L3NnBU.js";import"./util-Dxo8gN5i.js";import"./Sector-zTgxjB-0.js";const Ot={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},jt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,g,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};export{o as API,n as YAxisCustomTickWithPadding,jt as __namedExportsOrder,Ot as default};
