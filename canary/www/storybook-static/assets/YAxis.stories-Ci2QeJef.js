import{R as t}from"./iframe-Bq5XC69E.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-C-Z0y3eM.js";import{R as h}from"./zIndexSlice-CH_ot-kn.js";import{L as A}from"./LineChart-C5ysMJ7q.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-CylaqNlF.js";import{X as f}from"./XAxis-CJ__L0zP.js";import{L as E}from"./Legend-x8X7Fp0S.js";import{L as i}from"./Line-CrvG0Qpi.js";import{T as v}from"./Tooltip-C4OGC2Mk.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CGkLvakU.js";import"./Text-BD2GyaNh.js";import"./resolveDefaultProps-DoKMFVBl.js";import"./DOMUtils-DK-6QFhi.js";import"./ZIndexLayer-DBkhZGBE.js";import"./index-DLG40tqd.js";import"./index-C2BKaTPh.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CEQjO6UJ.js";import"./throttle-Ct-rPSxx.js";import"./axisSelectors-BOZBH3Nn.js";import"./d3-scale-MB7Peh3q.js";import"./CartesianAxis-D7JxrcAJ.js";import"./Layer-Cnu5LwAi.js";import"./types-L3YuI5Vg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BwIYCUgi.js";import"./index-C-17JylX.js";import"./index-3Uw_iAKp.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-bjxa_6pD.js";import"./index-DzbJHNcA.js";import"./fillDefinitions-Dhgql6la.js";import"./CartesianChart-moaB2ENx.js";import"./ZIndexPortal-D4Ob-hnX.js";import"./CategoricalChart-mibAt8bj.js";import"./Symbols-Cive21Dh.js";import"./symbol-BHxgCtzG.js";import"./path-DyVhHtw_.js";import"./useElementOffset-6RktWzhj.js";import"./uniqBy-DcVUePGP.js";import"./iteratee-D8dB9Iuu.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BJhBX3YD.js";import"./step-CitgC7Ni.js";import"./LabelList-0FCseyju.js";import"./ActivePoints-BI0eNhe7.js";import"./Dot-DSeqyqR_.js";import"./activeStyles-BIBdu-Bw.js";import"./useAnimationId-DwGbNOL_.js";import"./dataEntryStyles-DVS0RaWt.js";import"./ErrorBarContext-JgTKdwbz.js";import"./SetGraphicalItem-D8FNyAZb.js";import"./getRadiusAndStrokeWidthFromDot-BSwjIQeh.js";import"./ActiveShapeUtils-Gk8oTWam.js";import"./useEffectiveDataKey-DNNImqCq.js";import"./Cross-D0OQFgX7.js";import"./Rectangle-CdaMHBMZ.js";import"./util-Dxo8gN5i.js";import"./Sector-DAsJNitE.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
