import{R as t}from"./iframe-DW88jlWE.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-uwKRdj5s.js";import{R as h}from"./zIndexSlice-DVK4421h.js";import{L as A}from"./LineChart-BlckqTSO.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-C75CGIfw.js";import{X as f}from"./XAxis-DR4MLdhh.js";import{L as E}from"./Legend-CpCFRfof.js";import{L as i}from"./Line-eHeA353O.js";import{T as v}from"./Tooltip-CU8_CHdD.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-woFms0xV.js";import"./Text-BEy-xjYS.js";import"./resolveDefaultProps-BeGeeMAY.js";import"./pageBackground-D5Jdtqol.js";import"./isWellBehavedNumber-DJEibIDK.js";import"./useId-DsKCuo-O.js";import"./useBackwardsCompatibleTheme-DRnujEnS.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-NojUaQJi.js";import"./index-CYoLVhib.js";import"./index-DKd_R_4T.js";import"./axisSelectors-BvsqhHdG.js";import"./throttle-DdwERQOb.js";import"./d3-scale-B9KsqEcg.js";import"./CartesianAxis-BAGJBH6f.js";import"./Layer-1wEz8tGE.js";import"./types-CqLteoP0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CBsnm3d5.js";import"./index-DGoH4J8D.js";import"./index-CTYHixiw.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-D6Qja1Rv.js";import"./index-DfrCmWVV.js";import"./CartesianChart-DB1uC4rj.js";import"./chartDataContext-DYk24gQd.js";import"./CategoricalChart-Bfzcp6tQ.js";import"./Symbols-CutYEzOh.js";import"./symbol-D0ar7WGl.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BhYHZyL1.js";import"./uniqBy-CqnjSlNB.js";import"./iteratee-CxMCF-q0.js";import"./Curve-Dh68tpzp.js";import"./step-DBxmXEXg.js";import"./activeStyles-D70ZhOkY.js";import"./useAnimationId-CJ2VkiZA.js";import"./dataEntryStyles-BR960LqV.js";import"./ActivePoints-uBvMOKmI.js";import"./Dot-uVIbcFi4.js";import"./ErrorBarContext-Cf7bjtdd.js";import"./GraphicalItemClipPath-BGSGPFhH.js";import"./SetGraphicalItem-CiG8FS9q.js";import"./getRadiusAndStrokeWidthFromDot-jzOKzrlC.js";import"./ActiveShapeUtils-sQdrYNDC.js";import"./useEffectiveDataKey-OZ4YR6rc.js";import"./Cross-BgszvaaW.js";import"./Rectangle-BTJIjFU2.js";import"./util-Dxo8gN5i.js";import"./Sector-BtU0zDu-.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
