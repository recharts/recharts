import{R as t}from"./iframe-C_uZmGJ0.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-CCpz6f2F.js";import{R as h}from"./zIndexSlice-DLwc6L6K.js";import{L as A}from"./LineChart-Deu-NUFL.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-D5uPD4mT.js";import{X as f}from"./XAxis-YZBSNmPV.js";import{L as E}from"./Legend-BX2c5Cl-.js";import{L as i}from"./Line-5Ky_uooe.js";import{T as v}from"./Tooltip-DArtwkDV.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-fJXJ83zZ.js";import"./Text-gzTYclIX.js";import"./resolveDefaultProps-qk1iWAfg.js";import"./DOMUtils-D581TnDq.js";import"./isWellBehavedNumber-bflz4OY5.js";import"./useId-CAahTF3z.js";import"./useBackwardsCompatibleTheme-Dcj-aUF4.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-WWept0wS.js";import"./index-BPNGFjKX.js";import"./index-C_Xrr1JY.js";import"./RechartsWrapper-CXap3oDx.js";import"./axisSelectors-Bynx2pvt.js";import"./throttle-ssm5i5NQ.js";import"./d3-scale-qCFWvZmx.js";import"./index-i5xBuxs4.js";import"./index-D4BdbP-V.js";import"./renderedTicksSlice-DdBaQZqr.js";import"./index-DmhH5Xz3.js";import"./CartesianAxis-Dw4Yg42W.js";import"./Layer-FqzZic0p.js";import"./types-mc5h_EFw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-RcuLD4DP.js";import"./chartDataContext-DAujoSs5.js";import"./CategoricalChart-BSnQBJZ3.js";import"./Symbols-BBRAm-fV.js";import"./symbol-DCSp5Nqc.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C3oK5LdM.js";import"./uniqBy-CEi0ISro.js";import"./iteratee-QMsHInH6.js";import"./Curve-DrCVQ1z_.js";import"./step-d36cIwmk.js";import"./AnimatedItems-Bdmry8Nm.js";import"./useAnimationId-DVpik13A.js";import"./ActivePoints-C2NAg-mW.js";import"./Dot-BxKfnRiv.js";import"./RegisterGraphicalItemId-BuMk-4uG.js";import"./ErrorBarContext-CukgZUAO.js";import"./GraphicalItemClipPath-CZ-MeeIA.js";import"./SetGraphicalItem-CizKrbKK.js";import"./getRadiusAndStrokeWidthFromDot-Cu-dtnOu.js";import"./ActiveShapeUtils-DegrRRKp.js";import"./useGraphicalItemIdentity-BVAmN--h.js";import"./Cross-C64Lza6I.js";import"./Rectangle-H3ZsFvAX.js";import"./util-Dxo8gN5i.js";import"./Sector-CiZtVsMq.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
