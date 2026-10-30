import{R as t}from"./iframe-BwLZw-_M.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-CM5oOvq7.js";import{R as h}from"./zIndexSlice-ChI0kTlF.js";import{L as A}from"./LineChart-dOASWoua.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-SrRv5sp5.js";import{X as f}from"./XAxis-D6rGR5iH.js";import{L as E}from"./Legend-CBaALUz-.js";import{L as i}from"./Line-B80TmJuf.js";import{T as v}from"./Tooltip-Bzm0uEJT.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-U4vkciLv.js";import"./Text-CBZN8k_S.js";import"./resolveDefaultProps-BegzgTjS.js";import"./DOMUtils-i6fMpPJ-.js";import"./pageBackground-BK1aOTMM.js";import"./ZIndexLayer-Bvlb4wTY.js";import"./index-C9AtYHBZ.js";import"./index-qoVf35OJ.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Bhh2eZQc.js";import"./throttle-DvL4FsEQ.js";import"./axisSelectors-kUTEWjAI.js";import"./d3-scale-DGzUJoIU.js";import"./CartesianAxis-CE8eP4oM.js";import"./Layer-DuW_QRN1.js";import"./types-tzWyPHwG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BYZX0jcd.js";import"./index-BfwFhJuC.js";import"./index-o3dNuH8W.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-C2SzhBqG.js";import"./index-B0i9H4tX.js";import"./CartesianChart-DhrEBdyK.js";import"./ZIndexPortal-CPgp6_q6.js";import"./CategoricalChart-DWgt9BZJ.js";import"./themeFill-sw4Y96Vm.js";import"./fillDefinitions-B6DD0NTj.js";import"./Symbols-D0k11amF.js";import"./symbol-CxJ4nrsQ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D3IPICiA.js";import"./uniqBy-CMfwLbOw.js";import"./iteratee-QhoVn_-z.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CzfoK2T3.js";import"./step-QqIlLDuW.js";import"./LabelList-6PzejVVq.js";import"./ActivePoints-vE2lL3n4.js";import"./Dot-P4orGxiz.js";import"./activeStyles-lGmv_AYe.js";import"./useAnimationId-yjvP5B3D.js";import"./dataEntryStyles-B1tUzdyv.js";import"./ErrorBarContext-B9C041Rd.js";import"./SetGraphicalItem-CZMv7iCK.js";import"./getRadiusAndStrokeWidthFromDot-Di0VE_vh.js";import"./ActiveShapeUtils-BCNnGPme.js";import"./useEffectiveDataKey-C-YUm0jF.js";import"./Cross-DJ7FS3g1.js";import"./Rectangle-C8GVup-5.js";import"./util-Dxo8gN5i.js";import"./Sector-CzabNmXR.js";const zt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Bt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};export{o as API,n as YAxisCustomTickWithPadding,Bt as __namedExportsOrder,zt as default};
