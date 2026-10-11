import{R as t}from"./iframe-B91k2IcJ.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-MGmz2Csl.js";import{R as h}from"./zIndexSlice-DPjnHRkm.js";import{L as A}from"./LineChart-6qK56lpw.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-yndteJZg.js";import{X as f}from"./XAxis-Kxgks0Q-.js";import{L as E}from"./Legend-DWZcC7PQ.js";import{L as i}from"./Line-B6diu4jO.js";import{T as v}from"./Tooltip-BVC7T8PC.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BsntnuTl.js";import"./Text-CiRRF6pE.js";import"./resolveDefaultProps-D3docOoh.js";import"./pageBackground-BjpY-vWv.js";import"./isWellBehavedNumber-TAwJ2tp1.js";import"./useId-DkzElDsG.js";import"./useBackwardsCompatibleTheme-CU4zQS7V.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-GgF7R--c.js";import"./index-BbCiI-kx.js";import"./index-C5xeHmjj.js";import"./RechartsWrapper-BMFvDMkV.js";import"./axisSelectors-CcYA9DrF.js";import"./throttle-BM2gK96G.js";import"./d3-scale-C4mP0o3d.js";import"./index-DlE4la4O.js";import"./index-DagyI5pu.js";import"./renderedTicksSlice-C1MLxybq.js";import"./index-D5HKNOOG.js";import"./CartesianAxis-D1fr-7So.js";import"./Layer-mmJAUotg.js";import"./types-DevBWE8M.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-B7_E8FCz.js";import"./chartDataContext-DjizePAa.js";import"./CategoricalChart-CUc2SRJ3.js";import"./Symbols-BR-UUylu.js";import"./symbol-4FZOpY9N.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DCd6qDJl.js";import"./uniqBy-BohUdtb5.js";import"./iteratee-iijREnPj.js";import"./Curve-BM89L-Dm.js";import"./step-BZw5QhTt.js";import"./activeStyles-U0RfMPfz.js";import"./useAnimationId-CRCBGZGy.js";import"./dataEntryStyles-yNODtHFO.js";import"./ActivePoints-BkA-bCTx.js";import"./Dot-D09SInS_.js";import"./ErrorBarContext-C_xJpakb.js";import"./GraphicalItemClipPath-C22168NG.js";import"./SetGraphicalItem-BDS20UwV.js";import"./getRadiusAndStrokeWidthFromDot-leGQ2dWC.js";import"./ActiveShapeUtils-djGvUgMr.js";import"./useGraphicalItemIdentity-WURDsQ2E.js";import"./Cross-BznYo7L0.js";import"./Rectangle-lVwAiMqa.js";import"./util-Dxo8gN5i.js";import"./Sector--Elbsx_T.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
