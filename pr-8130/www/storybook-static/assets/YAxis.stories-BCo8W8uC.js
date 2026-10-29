import{R as t}from"./iframe-C0OVyiWZ.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-BzGOPf-n.js";import{R as h}from"./zIndexSlice-8GqqcFEr.js";import{L as A}from"./LineChart-B0CVS3md.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-Bte0Km9O.js";import{X as f}from"./XAxis-CTdfh09z.js";import{L as E}from"./Legend-CrVVwmbt.js";import{L as i}from"./Line-dhCJc3l8.js";import{T as v}from"./Tooltip-XY3lqBp8.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-YEc5vJ1L.js";import"./Text-CW0hOv-I.js";import"./resolveDefaultProps-CzOTGDv8.js";import"./DOMUtils-C9FX__jF.js";import"./ZIndexLayer-lUVq37sV.js";import"./index-Docwyysm.js";import"./index-ZerhtVY0.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DTm6eoEL.js";import"./throttle-D68qy_th.js";import"./axisSelectors-D80ZAqVH.js";import"./d3-scale-P-FUFzKf.js";import"./CartesianAxis-B5NtJHos.js";import"./Layer-OalOUm3Y.js";import"./types-C-qeruIO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CUInauOX.js";import"./index-B1LAm-dY.js";import"./index-BpCkqUEo.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CTQttuVZ.js";import"./index-C5porGIG.js";import"./fillDefinitions-Bbw8sRrt.js";import"./CartesianChart-DeRNlyJ8.js";import"./ZIndexPortal-wZgZSnoL.js";import"./CategoricalChart-BEVcLfMu.js";import"./Symbols-BDZG6tZB.js";import"./symbol-BmFAGqI-.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BE4RQkQy.js";import"./uniqBy-Cmw3QRKv.js";import"./iteratee-CPh3NlRT.js";import"./isArguments-yB-y1yaH.js";import"./Curve-C3dcNtoz.js";import"./step-CZORxbW4.js";import"./LabelList-D0ai-hpm.js";import"./ActivePoints-BUz8lbCF.js";import"./Dot-b3sd19D9.js";import"./activeStyles-D_QsSvZV.js";import"./useAnimationId-CezZ2glr.js";import"./dataEntryStyles-Cd6CZepp.js";import"./ErrorBarContext-Crxfy6Lq.js";import"./SetGraphicalItem-CFBhhEbP.js";import"./getRadiusAndStrokeWidthFromDot-DztWYVRU.js";import"./ActiveShapeUtils-DL-meZDZ.js";import"./useEffectiveDataKey-AC38WMBQ.js";import"./Cross-BW8A5PNh.js";import"./Rectangle-Bj8y9oTS.js";import"./util-Dxo8gN5i.js";import"./Sector-Dm6iledg.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};export{o as API,n as YAxisCustomTickWithPadding,Xt as __namedExportsOrder,Mt as default};
