import{R as t}from"./iframe-DjRBpX_P.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-B51h7pP8.js";import{R as h}from"./zIndexSlice-iVSWW5BV.js";import{L as A}from"./LineChart-BX_dDeTp.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-Dfbvt5wl.js";import{X as f}from"./XAxis-Y0oUf3sW.js";import{L as E}from"./Legend-BLRADEwo.js";import{L as i}from"./Line-Cy3PGKP5.js";import{T as v}from"./Tooltip-qAbEtBN7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CnRbgzX5.js";import"./Text-yVr7Mz0m.js";import"./resolveDefaultProps-BjSk0Y1m.js";import"./pageBackground-GeoRz0Dn.js";import"./isWellBehavedNumber-CpHNoBah.js";import"./useId-BfPQ7TvO.js";import"./useBackwardsCompatibleTheme-C4WhBG8E.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dbtf4y40.js";import"./index-DZq52GAk.js";import"./index-CzfBY83M.js";import"./axisSelectors-D79DWiWx.js";import"./throttle-DnOef0ju.js";import"./d3-scale-FJpOhRlp.js";import"./CartesianAxis-D3pH7M3P.js";import"./Layer-C9YefTas.js";import"./types-BdVZogP6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-FU13a2Gq.js";import"./index-C-_IQ3AX.js";import"./index-ypDDL202.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-Ckb52kl2.js";import"./index-CvqQYFRa.js";import"./CartesianChart-DZEnNXBj.js";import"./chartDataContext-BtLlHBCM.js";import"./CategoricalChart-CAmdUyZx.js";import"./Symbols-CNnoj2D4.js";import"./symbol-DsS9qHk8.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CNPJvaJQ.js";import"./uniqBy-BbsWZnIf.js";import"./iteratee-aih5jQ4Q.js";import"./Curve-CdVM2yHm.js";import"./step-CX_rIxxT.js";import"./activeStyles-D2vPCQTd.js";import"./useAnimationId-DPppjou0.js";import"./dataEntryStyles-CrSg03Wv.js";import"./ActivePoints-CPY1nzmN.js";import"./Dot-C0cfWCUu.js";import"./ErrorBarContext-4DLGaDei.js";import"./GraphicalItemClipPath-Dm-UOdIc.js";import"./SetGraphicalItem-BKY1gJK1.js";import"./getRadiusAndStrokeWidthFromDot-CkoSzgY_.js";import"./ActiveShapeUtils-tgtgWXQ1.js";import"./useEffectiveDataKey-Tusm1QhA.js";import"./Cross-2f4ua_UC.js";import"./Rectangle-iHdnnD4v.js";import"./util-Dxo8gN5i.js";import"./Sector-CHux40iq.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
