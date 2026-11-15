import{R as t}from"./iframe-B2PzCMaw.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-I2w3cHIn.js";import{Y as s}from"./YAxis-B5nmPwid.js";import{R as h}from"./zIndexSlice-D2yQeuEI.js";import{L as A}from"./LineChart-MH_SG76l.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-CQMMgqaf.js";import{X as f}from"./XAxis-hYV9QQyh.js";import{L as E}from"./Legend-D1MO9Czw.js";import{L as i}from"./Line-BuZqDult.js";import{T as v}from"./Tooltip-Bvvf1V81.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-dW2fYkfR.js";import"./Text-587hVFVv.js";import"./resolveDefaultProps-DhYGu3Pl.js";import"./ZIndexLayer-P8eiWDF3.js";import"./index-BhJHCUKu.js";import"./index-DBXzZd1T.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-fU1kcxI4.js";import"./throttle-DjegI8Tm.js";import"./axisSelectors-jPkZuWdd.js";import"./d3-scale-BTQYnDFg.js";import"./CartesianAxis-p63YhqCL.js";import"./Layer-qWAN0MNZ.js";import"./types-BQ9HRUUW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CHYqXqJx.js";import"./index-CU8WBM5i.js";import"./index-DS5yNlDY.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-hk-Vj6y4.js";import"./index-KnJExrJ_.js";import"./fillDefinitions-85fgVbiv.js";import"./CartesianChart-g3SkQicD.js";import"./chartDataContext-CqAbLC2U.js";import"./CategoricalChart-Pw3GxjZO.js";import"./Symbols-BR81WChd.js";import"./symbol-Yo8Gegd9.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DEcx2xhj.js";import"./uniqBy-DGDne-O9.js";import"./iteratee-BOVTI74Q.js";import"./isArguments-yB-y1yaH.js";import"./Curve-36hHeCTa.js";import"./step-BzcUBi6T.js";import"./dataEntryStyles-BUMHKDbc.js";import"./ActivePoints-z0ZX6SBd.js";import"./Dot-QX5dxkLv.js";import"./activeStyles-dbWrPfDr.js";import"./useAnimationId-C33gpbVv.js";import"./ErrorBarContext-BWeZxt5m.js";import"./SetGraphicalItem-BYuG84UQ.js";import"./getRadiusAndStrokeWidthFromDot-CBoQ2zXz.js";import"./ActiveShapeUtils-Ch3_ahrz.js";import"./useEffectiveDataKey-DQekwkZ0.js";import"./Cross-RcwJWn4R.js";import"./Rectangle-B8youXH0.js";import"./util-Dxo8gN5i.js";import"./Sector-D7Q7W1P9.js";const Ot={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},jt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
