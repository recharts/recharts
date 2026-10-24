import{R as t}from"./iframe-Cb2PTRZu.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-CFTllxPe.js";import{R as h}from"./zIndexSlice-BOcdwE9B.js";import{L as A}from"./LineChart-BrtkzuAl.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-S2dzJhHi.js";import{X as f}from"./XAxis-CYL2fqsj.js";import{L as E}from"./Legend-NMCpa0Ey.js";import{L as i}from"./Line-CrkeS2su.js";import{T as v}from"./Tooltip-B3QRBTsg.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-60x-b7-u.js";import"./Text-D_NeQFRY.js";import"./resolveDefaultProps-38f2qAXo.js";import"./pageBackground-Bn3yH5Mf.js";import"./isWellBehavedNumber-DqADXXOT.js";import"./useId-7AGdzjEK.js";import"./useBackwardsCompatibleTheme-DVeueyf3.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CMs0nKoK.js";import"./index-CgcevczK.js";import"./index-D3ECOqH8.js";import"./dataEntryStyles-BA7za2_q.js";import"./axisSelectors-YCR54JUg.js";import"./throttle-3iOH7y6s.js";import"./d3-scale-BEDYL0lJ.js";import"./CartesianAxis-Bd5LwOLq.js";import"./Layer-CYH1X6I5.js";import"./types-A7qt-X3A.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CGIalbK2.js";import"./index-sJmnv_Ao.js";import"./index-BHmwOcB9.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DJJRHEYU.js";import"./index-DnXVLer0.js";import"./CartesianChart-bwFjxITE.js";import"./chartDataContext-DEoJ-_XA.js";import"./CategoricalChart-yk48FjSr.js";import"./Symbols-C4-XM6Pb.js";import"./symbol-Dv8htkrG.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CgOYsezl.js";import"./uniqBy-BBNw9Xn-.js";import"./iteratee-DzkDe0Ct.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CXzUSEYX.js";import"./step-D0d2-Qo8.js";import"./activeStyles-utpSO3wr.js";import"./useAnimationId-BSibkTQy.js";import"./ActivePoints-BINdFJVn.js";import"./Dot-CdjxtqZf.js";import"./RegisterGraphicalItemId-B9ytj1I9.js";import"./ErrorBarContext-TOpvzWJt.js";import"./SetGraphicalItem-DtRHo2_o.js";import"./getRadiusAndStrokeWidthFromDot-iL1mBvr8.js";import"./ActiveShapeUtils-BmjVX6xw.js";import"./useEffectiveDataKey-Me0QsLaT.js";import"./Cross-C7mmq037.js";import"./Rectangle-BCmcE3yJ.js";import"./util-Dxo8gN5i.js";import"./Sector-jK--Yj0M.js";const Xt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},zt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
