import{R as t}from"./iframe-z3NgSViZ.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-Cq1FHamq.js";import{R as h}from"./zIndexSlice-BX0CZtnZ.js";import{L as A}from"./LineChart-ByL8tC9K.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-BlkW-CCM.js";import{X as f}from"./XAxis-6HQNOcHb.js";import{L as E}from"./Legend-Du71ahAl.js";import{L as i}from"./Line-DHD91CBZ.js";import{T as v}from"./Tooltip-CkAHByW4.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Cv5DkZGS.js";import"./Text-Bf3Z0ESX.js";import"./resolveDefaultProps-DKxZJqnD.js";import"./pageBackground-SSHR1dqO.js";import"./isWellBehavedNumber-B9JEbcQX.js";import"./useId-BBfhtQXH.js";import"./useBackwardsCompatibleTheme-DpJUriCO.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B4GmRtpr.js";import"./index-B3bVO830.js";import"./index-h-xMeUpP.js";import"./dataEntryStyles-C3z4X2RS.js";import"./axisSelectors-CgbkNJhz.js";import"./throttle-CwdrNliT.js";import"./d3-scale-CwYOu9hN.js";import"./CartesianAxis-aatvopbC.js";import"./Layer-DIcps5If.js";import"./types-2rYpOkQj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DYq8RKWJ.js";import"./index-CZd_v0hL.js";import"./index-gkGbSS0A.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-D_oQRH40.js";import"./index-bcahlE0Z.js";import"./CartesianChart-BZn7jg65.js";import"./chartDataContext-rha9Z1YY.js";import"./CategoricalChart-DXqdBwWs.js";import"./Symbols-Jw1F6xH7.js";import"./symbol-BJRaGT2z.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CRwL0Zci.js";import"./uniqBy-BT4Juj7F.js";import"./iteratee-DkLC-6Nh.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CyxMxsdR.js";import"./step-BrvgHvKB.js";import"./activeStyles-CeGdwWio.js";import"./useAnimationId-Cz2G0J8W.js";import"./ActivePoints-B_9Jv1Nk.js";import"./Dot-CpIhdaoH.js";import"./RegisterGraphicalItemId-BSkjC-ao.js";import"./ErrorBarContext-Cu9qYyvb.js";import"./SetGraphicalItem-C6QUze-d.js";import"./getRadiusAndStrokeWidthFromDot-CUlrtQzF.js";import"./ActiveShapeUtils-CBpakVvV.js";import"./useEffectiveDataKey-CRDGSrQh.js";import"./Cross-CGpKLZqq.js";import"./Rectangle-BneWyhZX.js";import"./util-Dxo8gN5i.js";import"./Sector-Cus5LS6r.js";const Xt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},zt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};export{o as API,n as YAxisCustomTickWithPadding,zt as __namedExportsOrder,Xt as default};
