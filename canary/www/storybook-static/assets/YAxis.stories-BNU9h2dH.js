import{R as t}from"./iframe-C-3ZsddJ.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-D4KLVqJs.js";import{R as h}from"./zIndexSlice-CznyzfFG.js";import{L as A}from"./LineChart-lnaFk1Bt.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-DaW9DFl3.js";import{X as f}from"./XAxis-ZaXNF9D9.js";import{L as E}from"./Legend-CIfx6KHV.js";import{L as i}from"./Line-eY7q5xtu.js";import{T as v}from"./Tooltip-iM448N5g.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DKMse05f.js";import"./Text-gCPwfBz1.js";import"./resolveDefaultProps-4qg6ukUo.js";import"./pageBackground-Bkm5uuC-.js";import"./isWellBehavedNumber-CP7J40iL.js";import"./useId-BDuxZkB8.js";import"./useBackwardsCompatibleTheme-X6WlIU0M.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-G1m3PEiN.js";import"./index-DEbaciLb.js";import"./index--fwLI_yC.js";import"./dataEntryStyles-CEJLUdCX.js";import"./axisSelectors-BJ1i-OvH.js";import"./throttle-B2MnXNQi.js";import"./d3-scale-DV_TqrZd.js";import"./CartesianAxis-BdVIPGTu.js";import"./Layer-Cx38LgLI.js";import"./types-DCBC51xd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-ICI7wfEt.js";import"./index-CcPqlA3d.js";import"./index-CyMO1IzJ.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-wMqgqvbl.js";import"./index-ClJuK0WQ.js";import"./CartesianChart-COKBOn7U.js";import"./chartDataContext-BcbpFEXE.js";import"./CategoricalChart-sAB9uLf6.js";import"./Symbols-OLVEorTH.js";import"./symbol-CerJsWCH.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BHApDFqY.js";import"./uniqBy-B15nsN6v.js";import"./iteratee-iSL6B2R2.js";import"./isArguments-yB-y1yaH.js";import"./Curve-W1QfAwKp.js";import"./step-DTUF9rZD.js";import"./activeStyles-L7DCCiqF.js";import"./useAnimationId-SiWxI2IO.js";import"./ActivePoints-BcMP_3VG.js";import"./Dot-BAgolGjt.js";import"./RegisterGraphicalItemId-CDIE6wwE.js";import"./ErrorBarContext-CDKXoSuu.js";import"./SetGraphicalItem-BIMysWhn.js";import"./getRadiusAndStrokeWidthFromDot-DU6SJcR2.js";import"./ActiveShapeUtils-DDCkf_lK.js";import"./useEffectiveDataKey-B7scz4IZ.js";import"./Cross-B6l53nAc.js";import"./Rectangle-BFI7v7xW.js";import"./util-Dxo8gN5i.js";import"./Sector-CGlTysj4.js";const Xt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},zt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
