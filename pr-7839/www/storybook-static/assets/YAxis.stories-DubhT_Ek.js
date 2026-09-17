import{R as t}from"./iframe-MgA714vo.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-BWw82tYQ.js";import{R as h}from"./zIndexSlice-BFtzjsbT.js";import{L as A}from"./LineChart-BOELxeBO.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-CJCqY4vS.js";import{X as f}from"./XAxis-BO_zCdYE.js";import{L as E}from"./Legend-BkbPIsr_.js";import{L as i}from"./Line-DZr5k1zJ.js";import{T as v}from"./Tooltip-_iH2D9IH.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-cwVDT-eO.js";import"./Text-DScWdIKY.js";import"./resolveDefaultProps-CB1SP_2F.js";import"./DOMUtils-79tWRulU.js";import"./isWellBehavedNumber-DFMdcmiK.js";import"./useId-Wj9uSNps.js";import"./useBackwardsCompatibleTheme-DSXeHE4Z.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CrYLcujZ.js";import"./index-yQC3T5y5.js";import"./index-DFNNaDkT.js";import"./RechartsWrapper-D1iPbMRH.js";import"./axisSelectors-D8SlF3gx.js";import"./throttle-CokMtKXH.js";import"./d3-scale-DxJKI2TE.js";import"./index-Gf96Mz3o.js";import"./index-BISHQAp4.js";import"./renderedTicksSlice-C4wx_D1w.js";import"./index-Bvn5aErC.js";import"./CartesianAxis-DiAsTuGj.js";import"./Layer-B-SLfZPM.js";import"./types-CZP1hKch.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BsRTJ-St.js";import"./chartDataContext-j9c_a0aH.js";import"./CategoricalChart-DPsIkKm4.js";import"./Symbols-BitF9prN.js";import"./symbol-tTdu_Gw1.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BPMB1qe7.js";import"./uniqBy-DX3EmURr.js";import"./iteratee-pH2ns-XD.js";import"./Curve-BBMmlamO.js";import"./step-Jmsq3o4W.js";import"./AnimatedItems-DYaErfcH.js";import"./useAnimationId-Dkacjwid.js";import"./ActivePoints-BYWv-6T2.js";import"./Dot-DxSSo-Hw.js";import"./RegisterGraphicalItemId-DjHk3rYd.js";import"./ErrorBarContext-DOEhJtWW.js";import"./GraphicalItemClipPath-CuTt-XI_.js";import"./SetGraphicalItem-C0yQ7ETh.js";import"./getRadiusAndStrokeWidthFromDot-DoNGVpMm.js";import"./ActiveShapeUtils-GenD1j5W.js";import"./useGraphicalItemIdentity-BtRSxKs5.js";import"./Cross-KjjWSR_c.js";import"./Rectangle-D606jjIQ.js";import"./util-Dxo8gN5i.js";import"./Sector-vmdugbBz.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
