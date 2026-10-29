import{R as t}from"./iframe-LvrC9cNQ.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-C7vYJVdQ.js";import{R as h}from"./zIndexSlice-Chla-YhC.js";import{L as A}from"./LineChart-WhuGpd9s.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-CWIbKGwM.js";import{X as f}from"./XAxis-ja2TXwgr.js";import{L as E}from"./Legend-BsVrMQDc.js";import{L as i}from"./Line-DKxaw0aF.js";import{T as v}from"./Tooltip-RGkhP-Ok.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DdT2eLCH.js";import"./Text-DGG_TkrL.js";import"./resolveDefaultProps-yQwV084p.js";import"./DOMUtils-CdIFc34u.js";import"./ZIndexLayer-Dv3aUmzs.js";import"./index-Dqr70K98.js";import"./index-D77JjdwQ.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DMX56tfl.js";import"./throttle-BrACn0xJ.js";import"./axisSelectors-C8xBMBuJ.js";import"./d3-scale-CfvKpIbF.js";import"./CartesianAxis-D4FB0bCi.js";import"./Layer-CcIpGH5s.js";import"./types-Dk8bWHyp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BsmmD3xm.js";import"./index-LmwlvfKc.js";import"./index-Cxc9kCWG.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CiGR2OiQ.js";import"./index-Bs0fdiGB.js";import"./CartesianChart-C9KorEin.js";import"./ZIndexPortal-DytdVxJW.js";import"./CategoricalChart-DgMeZkIA.js";import"./Symbols-Z0uJKVZu.js";import"./symbol-BDoGzdqc.js";import"./path-DyVhHtw_.js";import"./fillDefinitions-CA9aYCap.js";import"./dataEntryStyles-CJNDsNBI.js";import"./useElementOffset-BZvICa72.js";import"./uniqBy-DfF6PSBk.js";import"./iteratee-Bmo_u-OE.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CVAgTuhQ.js";import"./step-XOREPbKt.js";import"./LabelList-DdXF3DfJ.js";import"./ActivePoints-CCaTRIyk.js";import"./Dot-C6CSCKrA.js";import"./activeStyles-MYCrrU5C.js";import"./useAnimationId-BX5uo1zq.js";import"./ErrorBarContext-CdeJUeJW.js";import"./SetGraphicalItem-CEH73uPW.js";import"./getRadiusAndStrokeWidthFromDot-BgrGISNG.js";import"./ActiveShapeUtils-Dyl71ZcK.js";import"./useEffectiveDataKey-BIhhRaL_.js";import"./Cross-D6lex_Im.js";import"./Rectangle-D15iKpUy.js";import"./util-Dxo8gN5i.js";import"./Sector-GmOld6VB.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
