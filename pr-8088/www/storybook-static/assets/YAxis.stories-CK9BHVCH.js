import{R as t}from"./iframe-DcaMyu57.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-Ctjpx2tI.js";import{R as h}from"./zIndexSlice-D63TC5wE.js";import{L as A}from"./LineChart-9QId3R0-.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-WkOT9y7O.js";import{X as f}from"./XAxis-CpQfhxVu.js";import{L as E}from"./Legend-BonTCLAv.js";import{L as i}from"./Line-qfkHf2wW.js";import{T as v}from"./Tooltip-49fj7LmN.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CNqQQqDH.js";import"./Text-BDVAjJGp.js";import"./resolveDefaultProps-BIhtVjr1.js";import"./pageBackground-DJiDI2js.js";import"./useId-2CjiTV-a.js";import"./ZIndexLayer-BAtegXWd.js";import"./index-LUaWadAh.js";import"./index-C1eYPsJe.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-C8YroQFB.js";import"./throttle-DTKuFpeU.js";import"./dataEntryStyles-Dvqex9ju.js";import"./axisSelectors-DeMGjxl4.js";import"./d3-scale-CtXzbLe9.js";import"./CartesianAxis-CeZT8ZwV.js";import"./Layer-Buw-ejS2.js";import"./types-CezfUA9a.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B7oGrXiB.js";import"./index-DhjSPGN6.js";import"./index-CGLqJivQ.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-s9QE5BnJ.js";import"./index-CZJeyZvE.js";import"./CartesianChart-Doy7puzJ.js";import"./chartDataContext-Cvuxfrl6.js";import"./CategoricalChart-Oo-gpddM.js";import"./Symbols-0k-WiD9E.js";import"./symbol-uzrYNuoI.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BZhsAoPk.js";import"./uniqBy-Debw3FXq.js";import"./iteratee-DfBVt2Tm.js";import"./isArguments-yB-y1yaH.js";import"./Curve-zPXLC5y1.js";import"./step-DwnhkCIy.js";import"./activeStyles-DWP2-Wsz.js";import"./useAnimationId-CY8QIDMT.js";import"./ActivePoints-ByVehSZn.js";import"./Dot-DNgNZq3J.js";import"./RegisterGraphicalItemId-Bf7_3i_n.js";import"./ErrorBarContext-4Q2l69vj.js";import"./SetGraphicalItem-CCEEUI7s.js";import"./getRadiusAndStrokeWidthFromDot-brVJexwW.js";import"./ActiveShapeUtils-EJ-BM8cF.js";import"./useEffectiveDataKey-90ZX8Dti.js";import"./Cross-BtF40hvQ.js";import"./Rectangle-BG3wMj9I.js";import"./util-Dxo8gN5i.js";import"./Sector-jAYUYlJM.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
