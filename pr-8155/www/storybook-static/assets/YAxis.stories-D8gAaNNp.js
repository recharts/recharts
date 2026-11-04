import{R as t}from"./iframe-C1xjtyup.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-I2w3cHIn.js";import{Y as s}from"./YAxis-D19WlBcl.js";import{R as h}from"./zIndexSlice-CK_7sDhl.js";import{L as A}from"./LineChart-CcRwr0qm.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-Ch_IT64k.js";import{X as f}from"./XAxis-yfo5ibqs.js";import{L as E}from"./Legend-hwTMgKrZ.js";import{L as i}from"./Line-BWnpbJBY.js";import{T as v}from"./Tooltip-BfH6nnk8.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-rlFXaG67.js";import"./Text-dB1JvKf5.js";import"./resolveDefaultProps-BW194xym.js";import"./DOMUtils-DjnwPC-N.js";import"./ZIndexLayer-BioPoHSu.js";import"./index-C89VIpwW.js";import"./index-D-Z5HFQV.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-XOgxAb5A.js";import"./throttle-DeB2d41h.js";import"./axisSelectors-CL5t64V7.js";import"./d3-scale-CfSN9o3v.js";import"./CartesianAxis-gqJanQvj.js";import"./Layer-DgAL7HSK.js";import"./types-BMA5Z4Oj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DT_F_kFQ.js";import"./index-B3Q9mRXR.js";import"./index-DZVn9IOu.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-g7B-Y0pQ.js";import"./index-DNbtHs3M.js";import"./fillDefinitions-Chc0NBrg.js";import"./CartesianChart-CiggLvKc.js";import"./ZIndexPortal-ltJzS4wp.js";import"./CategoricalChart-DLW54M1r.js";import"./Symbols-DFo4fcMi.js";import"./symbol-DYSn4PiC.js";import"./path-DyVhHtw_.js";import"./useElementOffset-lJW-fFdI.js";import"./uniqBy-AdfipyG1.js";import"./iteratee-Cpl52XgC.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BG_HxKHy.js";import"./step-pIDDNbPT.js";import"./LabelList-DlsMy8UK.js";import"./ActivePoints-CaE7-5dE.js";import"./Dot-D0EtM9Lh.js";import"./activeStyles-MqObX4-I.js";import"./useAnimationId-BHg-nTIp.js";import"./dataEntryStyles-CoAbyOEr.js";import"./ErrorBarContext-DT5kzwJ3.js";import"./SetGraphicalItem-f1KdcC0B.js";import"./getRadiusAndStrokeWidthFromDot-Cp452xPJ.js";import"./ActiveShapeUtils-BJp5D_xQ.js";import"./useEffectiveDataKey-C_d_9it0.js";import"./Cross-6Lfr_FGz.js";import"./Rectangle-pWpz6jQo.js";import"./util-Dxo8gN5i.js";import"./Sector-rpZFrsKt.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
