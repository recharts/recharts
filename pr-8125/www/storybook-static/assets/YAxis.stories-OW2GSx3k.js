import{R as t}from"./iframe-DfPB0Wpx.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-BQ4oN9O6.js";import{R as h}from"./zIndexSlice-Vk5rQcki.js";import{L as A}from"./LineChart-CM1I_N6f.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-DpWT8FbB.js";import{X as f}from"./XAxis-COzQcKyh.js";import{L as E}from"./Legend-Cy6g-3_w.js";import{L as i}from"./Line-CJuI2uq-.js";import{T as v}from"./Tooltip-4Eh1cKx8.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-2zEOllgr.js";import"./Text-DaqQgel7.js";import"./resolveDefaultProps-Bt24D4BM.js";import"./DOMUtils-C1IGffYG.js";import"./ZIndexLayer-no9MVuHN.js";import"./index-Ax9OSmSr.js";import"./index-jmk38lRQ.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-UZRyPZtr.js";import"./throttle-DIfZf6Rg.js";import"./axisSelectors-CYP2U9Wf.js";import"./d3-scale-CsMflnTp.js";import"./CartesianAxis-CNCSz6Km.js";import"./Layer-8vRP1mbc.js";import"./types-D0-9LK1x.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DnnXNCqP.js";import"./index-TI8GAjTb.js";import"./index-C7rcjmTF.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DGPnCUTJ.js";import"./index-DZEvNl2j.js";import"./CartesianChart-C7bLJAaP.js";import"./ZIndexPortal-BHohkWL-.js";import"./CategoricalChart-B65nKayz.js";import"./themeFill-BkM1x4hA.js";import"./Symbols-DuFTa5a3.js";import"./symbol-DWiA1K--.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-Dc4guk2V.js";import"./useElementOffset-CqmQGpgi.js";import"./uniqBy-CDxgcpy6.js";import"./iteratee-DH59VCX2.js";import"./isArguments-yB-y1yaH.js";import"./Curve-NvY6PR48.js";import"./step-C1TIQlMm.js";import"./LabelList-Nkxiy7Jt.js";import"./ActivePoints-RRa8EpH6.js";import"./Dot-DTEgYyAs.js";import"./activeStyles-ChnEmJqB.js";import"./useAnimationId-C0yM1MFO.js";import"./ErrorBarContext-CQDbXt_x.js";import"./SetGraphicalItem-BxFlQPUr.js";import"./getRadiusAndStrokeWidthFromDot-CgvxCR2o.js";import"./ActiveShapeUtils-CvH07gq7.js";import"./useEffectiveDataKey-DKbAeGMk.js";import"./Cross-DqBgWcpT.js";import"./Rectangle-CWBHAPFe.js";import"./util-Dxo8gN5i.js";import"./Sector-e4AoF70j.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
