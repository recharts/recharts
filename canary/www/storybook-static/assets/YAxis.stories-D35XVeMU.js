import{R as t}from"./iframe-pb0eGUzQ.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-CZ5C3-Kt.js";import{R as h}from"./zIndexSlice-Cv3joHsa.js";import{L as A}from"./LineChart-BUgXIIbC.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-CP4v98tj.js";import{X as f}from"./XAxis-C8pfECSp.js";import{L as E}from"./Legend-Dgv7B0kt.js";import{L as n}from"./Line-BK-thIbQ.js";import{T as v}from"./Tooltip-DiQYdaUL.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-C-65Vs2n.js";import"./Text-Bq7mJ7MP.js";import"./resolveDefaultProps-BIcSgHHm.js";import"./DOMUtils-C_JPJk8X.js";import"./isWellBehavedNumber-sYswO0zz.js";import"./useId-xKOkSlvZ.js";import"./useBackwardsCompatibleTheme-DGBzFLd0.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BlGsGj6Y.js";import"./index-CadbAa9f.js";import"./index-B3wblxBJ.js";import"./RechartsWrapper-BvkKxzHL.js";import"./index-Ci6SDbSO.js";import"./index-DmA7_hIT.js";import"./throttle-CLVKwQCr.js";import"./axisSelectors-RMGVuaxT.js";import"./d3-scale-D40q8NYs.js";import"./renderedTicksSlice-BIUrSjZy.js";import"./CartesianAxis-DVH187SM.js";import"./Layer-CsF7idKX.js";import"./types-CuZ7ciTr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-D9u_fkX_.js";import"./chartDataContext-tQQ7C7rr.js";import"./CategoricalChart-DraDT8M3.js";import"./Symbols-C8GIkDvB.js";import"./symbol-j10a42x8.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BhgReHS5.js";import"./uniqBy-B7PLiSrR.js";import"./iteratee-DkLl-_WR.js";import"./Curve-CGTwaLHs.js";import"./step-BNEQKmaP.js";import"./AnimatedItems-DvU5M9qH.js";import"./useAnimationId-hkXeXWT6.js";import"./ActivePoints-CH_dCX-F.js";import"./Dot-DmEXtJXC.js";import"./RegisterGraphicalItemId-BA80SMDx.js";import"./ErrorBarContext-BE4oep3j.js";import"./GraphicalItemClipPath-B6_R3NgE.js";import"./SetGraphicalItem-DoaJ7VXW.js";import"./getRadiusAndStrokeWidthFromDot-DyhskonW.js";import"./ActiveShapeUtils-DGHBRMQa.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-BP7WwU5P.js";import"./Rectangle-A7Xjxu5S.js";import"./util-Dxo8gN5i.js";import"./Sector-D61FKZNa.js";const jt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
