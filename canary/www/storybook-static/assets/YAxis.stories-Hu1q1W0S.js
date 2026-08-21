import{R as t}from"./iframe-Badwul9q.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-B14z5K_h.js";import{R as h}from"./zIndexSlice-CEPqA6uv.js";import{L as A}from"./LineChart-DEzdcQEX.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-D7F2_a-r.js";import{X as f}from"./XAxis-DwaxFHEN.js";import{L as E}from"./Legend-Dhz4Bzfc.js";import{L as n}from"./Line-Bq5Pip6f.js";import{T as v}from"./Tooltip-BCssNaCG.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-UqWUh_Dj.js";import"./Text-h9Iu7ZeD.js";import"./resolveDefaultProps-DH92j3VQ.js";import"./DOMUtils-BA3evV1C.js";import"./isWellBehavedNumber-kTcazBa4.js";import"./useId-DvG1S0KZ.js";import"./useBackwardsCompatibleTheme-BCTNxxa7.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DzsdJFep.js";import"./index-BL44lg5f.js";import"./index-D1wsKNYb.js";import"./RechartsWrapper-DT9_WEbf.js";import"./index-BAZVFS-Q.js";import"./index-BjECjR4R.js";import"./throttle-BG2Qy65h.js";import"./axisSelectors-CTwDlHnv.js";import"./d3-scale-TLUlZmuF.js";import"./renderedTicksSlice-BDycl-yX.js";import"./CartesianAxis-C8y8cQTk.js";import"./Layer-D6-JDPxR.js";import"./types-DAsbYWRO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-D8iyGmBz.js";import"./chartDataContext-Bt38eSkc.js";import"./CategoricalChart-1ZyUfD1N.js";import"./Symbols-Dtyl81qq.js";import"./symbol-DUMetRhr.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BfmRpqsp.js";import"./uniqBy-BfG2k_aA.js";import"./iteratee-CpkIGYwK.js";import"./Curve-BaVpsYCr.js";import"./step-B8WIZZ5_.js";import"./AnimatedItems-D7VnlwSp.js";import"./useAnimationId-jiUA16Df.js";import"./ActivePoints-B6c6f_ub.js";import"./Dot-1XO9AD1Q.js";import"./RegisterGraphicalItemId-f2QL4JQB.js";import"./ErrorBarContext-DRSE_a5E.js";import"./GraphicalItemClipPath-CN8tu77t.js";import"./SetGraphicalItem-DT7eapgt.js";import"./getRadiusAndStrokeWidthFromDot-qvEZslpV.js";import"./ActiveShapeUtils-CF5WFyvr.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-DL-kP-Ml.js";import"./Rectangle-DHU_gf2m.js";import"./util-Dxo8gN5i.js";import"./Sector-D5EuP6OP.js";const jt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,g,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const Mt=["API","YAxisCustomTickWithPadding"];export{o as API,i as YAxisCustomTickWithPadding,Mt as __namedExportsOrder,jt as default};
