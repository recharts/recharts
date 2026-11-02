import{R as t}from"./iframe-Dzq6KhZI.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-BZEADbr5.js";import{R as h}from"./zIndexSlice-DYy_9E3f.js";import{L as A}from"./LineChart-CpZykxoT.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-CUAX-74C.js";import{X as f}from"./XAxis-Cwq9lpMm.js";import{L as E}from"./Legend-BekpsZFn.js";import{L as i}from"./Line-BjRSCYND.js";import{T as v}from"./Tooltip-Db2d9pWw.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-ns1HN8QT.js";import"./Text-D6SfU34x.js";import"./resolveDefaultProps-BRjkVoLn.js";import"./DOMUtils-Dv3oYuXo.js";import"./ZIndexLayer-B0fPlQAE.js";import"./index-BecjNu5M.js";import"./index-DZ0fS5qA.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BWIDzk5M.js";import"./throttle-PAjjPANm.js";import"./axisSelectors-B8Xp5jln.js";import"./d3-scale-BwgC5IAo.js";import"./CartesianAxis-DeYfDX_6.js";import"./Layer-DdRdeMHx.js";import"./types-Bt-JjK9T.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B-37bEiL.js";import"./index-CVNCOx1i.js";import"./index-CMF9Loaq.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Du3nHOoA.js";import"./index-DAhgw1CA.js";import"./fillDefinitions-BkZRDt9Y.js";import"./CartesianChart-Bid-fMci.js";import"./ZIndexPortal-D7MLJjGY.js";import"./CategoricalChart-dB5tt0RG.js";import"./Symbols-CuwHSUOy.js";import"./symbol-5MHZNE2z.js";import"./path-DyVhHtw_.js";import"./useElementOffset-L0DqCH6F.js";import"./uniqBy-wUI6H3pU.js";import"./iteratee-2KPcfIOh.js";import"./isArguments-yB-y1yaH.js";import"./Curve-GBvSi4lY.js";import"./step-CPy7v0ge.js";import"./LabelList-0dTnEet5.js";import"./ActivePoints-APIfm04L.js";import"./Dot-BGvDEhvz.js";import"./activeStyles-B6qdsX9q.js";import"./useAnimationId-B5vYW3bS.js";import"./dataEntryStyles-BDzv2dJf.js";import"./ErrorBarContext-DWqusyea.js";import"./SetGraphicalItem-C8-iEcE-.js";import"./getRadiusAndStrokeWidthFromDot-CAouDUSk.js";import"./ActiveShapeUtils-qY34SWQy.js";import"./useEffectiveDataKey-2DeBYWTa.js";import"./Cross-DM8bh02F.js";import"./Rectangle-BEWurK0o.js";import"./util-Dxo8gN5i.js";import"./Sector-Cnt-x8fY.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
