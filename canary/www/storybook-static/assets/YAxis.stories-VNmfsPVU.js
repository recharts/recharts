import{R as t}from"./iframe-DUAuhaDC.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-I2w3cHIn.js";import{Y as s}from"./YAxis-D6BReFW5.js";import{R as h}from"./zIndexSlice-CUoIUvAK.js";import{L as A}from"./LineChart-CVdvZABl.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-B-xmY73e.js";import{X as f}from"./XAxis-DmKgW9ez.js";import{L as E}from"./Legend-Cn_IMse8.js";import{L as i}from"./Line-W70Z0DZz.js";import{T as v}from"./Tooltip-D9wU0lMf.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CQK470NC.js";import"./get-CjriyByo.js";import"./Label-BlZKxSKy.js";import"./Text-DT_5hWKb.js";import"./ZIndexLayer-CNcLZbQj.js";import"./index-CzgbXtSC.js";import"./index-DNOW0KLV.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DEWRKmXv.js";import"./throttle-C34y-YGF.js";import"./axisSelectors-DKypf8DU.js";import"./diverging-BzOzklff.js";import"./CartesianAxis-DlgnL8lU.js";import"./Layer-CfAsTpPf.js";import"./types-BR7AAoV4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BdhAhPxn.js";import"./index-BgZAMOy1.js";import"./index-ClSqZzn2.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-C2YARZjw.js";import"./index-C-Ndc2us.js";import"./fillDefinitions-BiojjX3L.js";import"./CartesianChart-BVs3oRkR.js";import"./chartDataContext-DHU_iNNs.js";import"./CategoricalChart-ydkDuP1j.js";import"./Symbols-dKtAvw89.js";import"./symbol-L0CgFuJm.js";import"./path-BBMZd4YL.js";import"./useElementOffset-Ce5Z9USj.js";import"./uniqBy-BJtcRwMD.js";import"./iteratee-rFCL0i6s.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-D_0qwyd0.js";import"./Curve-DZ4xVtop.js";import"./step-C7gBnBWw.js";import"./dataEntryStyles-ChkH59oB.js";import"./ActivePoints-V66Ltvnp.js";import"./Dot-BAVTGvfE.js";import"./activeStyles-joM0AtO_.js";import"./useAnimationId-B4mDEWzj.js";import"./ErrorBarContext-CEfM97ww.js";import"./SetGraphicalItem-Oey6ebQm.js";import"./ActiveShapeUtils-B0DXFowQ.js";import"./useEffectiveDataKey-CqgqLaRX.js";import"./Cross-CCONpWDd.js";import"./Rectangle-CDSDw5vR.js";import"./util-Dxo8gN5i.js";import"./Sector-D1NRM6xc.js";const Ot={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},jt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
